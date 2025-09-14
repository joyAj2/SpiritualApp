import React from 'react';
import homeIcon from '../assets/icons/lsicon_house-outline.png'
import homeIconWhite from '../assets/icons/lsicon_house-outline (1).png'
import infoIcon from '../assets/icons/hugeicons_contact-01.png'
import infoIconWhite from '../assets/icons/hugeicons_contact-01 (3).png'
import contactIconWhite from '../assets/icons/hugeicons_contact-02 (1).png'
import contactIcon from '../assets/icons/hugeicons_contact-02.png'
import noteIcon from '../assets/icons/hugeicons_note-04 (1).png'
import noteIconWhite from '../assets/icons/hugeicons_note-04 (2).png'

interface NavigationBarProps {
  className?: string;
  activePage: 'home' | 'info' | 'contact' | 'note1' | 'note2';
}

const pageOrder = [
  { key: 'home', icon: homeIcon, iconActive: homeIconWhite },
  { key: 'info', icon: infoIcon, iconActive: infoIconWhite },
  { key: 'contact', icon: contactIcon, iconActive: contactIconWhite },
  { key: 'note1', icon: noteIcon, iconActive: noteIconWhite },
  { key: 'note2', icon: noteIcon, iconActive: noteIconWhite },
] as const;

const NavigationBar: React.FC<NavigationBarProps> = ({ className, activePage }) => {
  const progress = ((pageOrder.findIndex(p => p.key === activePage) + 1) / pageOrder.length) * 100;

  return (
    <nav className={className}>
      {/* Desktop version */}
      <div className='hidden md:block w-screen h-[80px] bg-white'>
        <div className='h-[4px] bg-gradient-to-r from-[#DAF3F1] via-[#DAF3F1] to-[#DAF3F1]'></div>
        <div className="flex justify-around items-center p-3">
          {pageOrder.map((page, idx) => (
            <React.Fragment key={page.key}>
              <span className='cursor-pointer'>
                {activePage === page.key ? (
                  <span className='flex flex-col justify-center items-center'>
                    <img src={page.iconActive} alt={`${page.key}Icon`} className='w-[50px] h-[50px] bg-[#08B298] rounded-2xl p-2 shadow-md shadow-[#575353] -translate-y-8'/>
                    <p className='w-2 h-2 border-2 rounded-full border-[#08B298] bg-[#08B298] -mt-3'></p>
                  </span>
                ) : (
                  <img src={page.icon} alt={`${page.key}Icon`} className='w-[30px] h-[30px]'/>
                )}
              </span>
              {idx < pageOrder.length - 1 && (
                <span className='border-[1px] border-[#00B69D] w-[126px]'></span>
              )}
            </React.Fragment>
          ))}
        </div>
        {/* Progress Bar */}
        <div className='relative h-[4px] w-full bg-[#DAF3F1]'>
          <div
            className='absolute top-0 left-0 h-[4px] bg-gradient-to-r from-[#00B69D] via-[#00B69D] to-[#00B69D] transition-all duration-300'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Mobile version */}
      <div className='block md:hidden w-screen bg-white py-4 p-3 items-center'>
        <div className="relative flex items-center justify-between px-2">
          {pageOrder.map((page, idx) => (
            <React.Fragment key={page.key}>
              <div className="flex flex-col items-center z-10">
                <img
                  src={activePage === page.key ? page.iconActive : page.icon}
                  alt={`${page.key}Icon`}
                  className={`w-7 h-7 ${activePage === page.key ? 'bg-[#08B298] rounded-xl p-1 shadow-md' : ''}`}
                />
                <div className={`mt-1 w-2 h-2 rounded-full ${activePage === page.key ? 'bg-[#08B298]' : 'bg-[#DAF3F1]'}`}></div>
              </div>
              {idx < pageOrder.length - 1 && (
                <div className="flex-1 h-1 mx-1 relative">
                  <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#DAF3F1] -translate-y-1/2 rounded"></div>
                  {/* Progress fill */}
                  {pageOrder.findIndex(p => p.key === activePage) > idx && (
                    <div className="absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-[#00B69D] via-[#00B69D] to-[#00B69D] rounded"
                      style={{ width: '100%', transform: 'translateY(-50%)' }}></div>
                  )}
                  {pageOrder.findIndex(p => p.key === activePage) === idx && (
                    <div className="absolute top-1/2 left-0 h-[4px] bg-gradient-to-r from-[#00B69D] via-[#00B69D] to-[#00B69D] rounded"
                      style={{ width: '50%', transform: 'translateY(-50%)' }}></div>
                  )}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

// Good
