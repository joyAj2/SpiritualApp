import React from 'react';

interface BottomNavigationProps {
  currentSection: number;
  onSectionChange: (section: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({
  currentSection,
  onSectionChange
}) => {
  const navItems = [
    { id: 1, imgSrc: '/src/assets/images/house-outline.png' },
    { id: 2, imgSrc: '/src/assets/images/contact-01.png' },
    { id: 3, imgSrc: '/src/assets/images/contact-02.png' },
    { id: 4, imgSrc: '/src/assets/images/note-04.png' },
    { id: 5, imgSrc: '/src/assets/images/note-04.png' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0">
      {/* Top margin area with bg-teal-50 */}
      <div className="w-full h-3 bg-teal-50" />
      {/* Light teal/mint colored top section with navigation */}
      <div className="bg-white px-2 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between relative">
            {navItems.map((item, index) => {
              const isActive = currentSection === item.id;
              
              return (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => onSectionChange(item.id)}
                    className={`relative flex flex-col items-center justify-center w-10 h-10 rounded-xl transition-all duration-200 border-2 ${
                      isActive 
                        ? 'bg-teal-500 border-white shadow-lg' 
                        : 'bg-transparent border-white'
                    }`}
                  >
                    <img
                      src={item.imgSrc}
                      alt=""
                      className={`w-10 h-10 transition-filter duration-200 ${
                        isActive ? 'filter brightness-0 invert' : ''
                      }`}
                    />
                  </button>
                  
                  {/* Connecting line between icons except after last item */}
                  {index < navItems.length - 1 && (
                    <div className="flex-1 h-[1.5px] bg-teal-400 mx-4"></div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
          
          {/* Dot indicator below active icon */}
          <div className="flex justify-between mt-3 px-4">
            {navItems.map((item) => (
              <div
                key={item.id}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSection === item.id ? 'bg-teal-500' : 'bg-transparent'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Dark gray bottom section */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-gray-300">
      <div
        className="bg-teal-500 h-1 transition-width duration-300 ease-in-out"
        style={{
        width: `${(currentSection / navItems.length) * 100}%`,
    }}
  />
</div>

    </div>
  );
};

export default BottomNavigation;