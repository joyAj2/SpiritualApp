import React from 'react';
import homeIcon from '../assets/icons/lsicon_house-outline.png'
import homeIconWhite from '../assets/icons/lsicon_house-outline (1).png'
import infoIcon from '../assets/icons/hugeicons_contact-01.png'
import infoIconWhite from '../assets/icons/hugeicons_contact-01 (3).png'
import contactIconWhite from '../assets/icons/hugeicons_contact-02 (1).png'
import contactIcon from '../assets/icons/hugeicons_contact-02.png'
import noteIcon from '../assets/icons/hugeicons_note-04 (1).png'
import noteIconWhite from '../assets/icons/hugeicons_note-04 (2).png'
import completedIcon from '../assets/icons/Line 25.png'
import activeIcon from '../assets/icons/Line 29.png'
import uncompletedIcon from '../assets/icons/Line 26.png'

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
      <div className='block md:hidden w-screen py-4 px-0 border-t-2 border-[#DAF3F1] bg-white'>
        <div className="flex items-center justify-between w-full px-2 mb-3">
          {pageOrder.map((page, idx) => {
            const activeIdx = pageOrder.findIndex(p => p.key === activePage);
            let iconSrc = uncompletedIcon;
            if (idx < activeIdx) iconSrc = completedIcon;
            if (idx === activeIdx) iconSrc = activeIcon;
            return (
              <React.Fragment key={page.key}>
                <div className="flex flex-col items-center z-10">
                  <img
                    src={iconSrc}
                    alt={`${page.key}ProgressIcon`}
                    className="w-7 h-1 rounded-xl"
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className='relative h-[4px] w-full bg-[#DAF3F1] mt-2'>
          <div
            className='absolute top-0 left-0 h-[4px] bg-gradient-to-r from-[#00B69D] via-[#00B69D] to-[#00B69D] transition-all duration-300'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;

// Good
