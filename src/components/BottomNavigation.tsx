import React from 'react';
import { Home, User, Phone, ClipboardList, FileText } from 'lucide-react';

interface BottomNavigationProps {
  currentSection: number;
  onSectionChange: (section: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ 
  currentSection, 
  onSectionChange 
}) => {
  const navItems = [
    { id: 1, icon: Home, label: 'Home' },
    { id: 2, icon: User, label: 'Profile' },
    { id: 3, icon: Phone, label: 'Contact' },
    { id: 4, icon: ClipboardList, label: 'Response' },
    { id: 5, icon: FileText, label: 'Form' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
      <div className="flex justify-center items-center space-x-8 max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex flex-col items-center p-3 rounded-xl transition-all duration-200 ${
                isActive
                  ? 'bg-teal-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-400 hover:text-teal-500'
              }`}
            >
              <Icon size={20} />
              <span className="text-xs mt-1 hidden sm:block">{item.label}</span>
            </button>
          );
        })}
      </div>
      <div className="flex justify-center mt-2">
        <div className="flex space-x-1">
          {navItems.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSection === index + 1 ? 'bg-teal-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;