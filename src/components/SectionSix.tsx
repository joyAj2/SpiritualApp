import React from 'react';
import { Home, User, Phone, FileText } from 'lucide-react';

// TypeScript interfaces
interface UserProfile {
  name: string;
  school: string;
  form: string;
  phone: string;
  email: string;
  spiritualResponse: string;
  contactMethod: string;
  counselorName: string;
}

// Demo user data
const user: UserProfile = {
  name: "Stacy Stark",
  school: "Achimota Sch",
  form: "Form 3",
  phone: "+233 204787472",
  email: "stacy012stk@gmail.com",
  spiritualResponse: "I gave my life to Christ",
  contactMethod: "Call",
  counselorName: "Belinda"
};

const getImage = (fileName: string) => `/src/assets/images/${fileName}`;

const ThankYouPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Avatar Section - Top Right with Ellipse (Your Original Code) */}
        <div className="flex justify-end mb-8 relative">
          <div className="absolute top-4 right-4 z-10 w-12 h-12 lg:w-16 lg:h-16">
            <img
              src={getImage('ellipse 1.png')}
              alt="Ellipse"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-sm lg:text-lg">
              G
            </span>
            {/* Small circle underneath the ellipse */}
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
          </div>
        </div>

        {/* Main Content Grid with vertical centering fixes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 min-h-[70vh]">
          
          {/* Left Column - Thank You Message Centered */}
          <div className="flex flex-col items-center text-center justify-center space-y-8 h-full">
            
            {/* Thank You Message */}
            <div>
              <h1 className="text-2xl font-medium text-[#00B69D] mb-8">
                Thank you !!!
              </h1>
              
              <div className="space-y-0 text-lg text-black font-bold">
                <p className="font-medium">Your details have been received.</p>
                <p className="font-medium">We'll be reaching out to you soon.</p>
                <p className="font-medium">God bless you!</p>
              </div>
            </div>

            {/* User Details Summary */}
            <div className="space-y-4">
              {/* First row of details */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
                <span className="relative text-[#00B69D] font-medium">
                  {user.name}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
                <span className="relative text-[#00B69D] font-medium">
                  {user.school}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
                <span className="relative text-[#00B69D] font-medium">
                  {user.form}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
                <span className="relative text-[#00B69D] font-medium">
                  {user.phone}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
              </div>
              
              {/* Second row of details */}
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
                <span className="relative text-[#00B69D] font-medium">
                  {user.email}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
                <span className="relative text-[#00B69D] font-medium">
                  {user.spiritualResponse}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
                <span className="relative text-[#00B69D] font-medium">
                  {user.contactMethod}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
              </div>

              {/* Counselor name */}
              <div className="text-sm">
                <span className="relative text-[#00B69D] font-medium">
                  {user.counselorName}
                  <div 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Counseling Illustration */}
         <div className="relative flex items-center justify-center">
              <img
                src={getImage('Two people talking with a person being a student..png')}
                alt="Section 4 Illustration"
                className="w-full h-auto max-w-sm"
              />
            </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center py-4">
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#00B69D] transition-colors">
              <Home className="w-6 h-6" />
              <div className="w-full h-0.5 bg-transparent"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#00B69D] transition-colors">
              <User className="w-6 h-6" />
              <div className="w-full h-0.5 bg-transparent"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#00B69D] transition-colors">
              <Phone className="w-6 h-6" />
              <div className="w-full h-0.5 bg-transparent"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#00B69D] transition-colors">
              <FileText className="w-6 h-6" />
              <div className="w-full h-0.5 bg-transparent"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-[#00B69D]">
              <FileText className="w-6 h-6" />
              <div className="w-full h-0.5 bg-[#00B69D]"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
