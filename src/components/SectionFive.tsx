import React, { useState } from 'react';
import {ChevronRight } from "lucide-react";

// Helper to dynamically import images by file name (same as Section 4)
const getImage = (fileName: string) => `/src/assets/images/${fileName}`;

interface Section5PageProps {
  onContinue: () => void;
}

interface UserProfile {
  name: string;
  school: string;
  form: string;
  phone: string;
  email: string;
  spiritualResponse: string;
  contactMethod: string;
}

interface CounselorNotesState {
  counselorName: string;
  additionalNotes: string;
}

const user: UserProfile = {
  name: "Stacy Stark",
  school: "Achimota Sch",
  form: "Form 3",
  phone: "+233 204787472",
  email: "stacy012stk@gmail.com",
  spiritualResponse: "I gave my life to Christ",
  contactMethod: "Call"
};

const Section5Page: React.FC<Section5PageProps> = ({ onContinue }) => {
  const [formState, setFormState] = useState<CounselorNotesState>({
    counselorName: '',
    additionalNotes: ''
  });

  const handleInputChange = (field: keyof CounselorNotesState, value: string) => {
    setFormState(prev => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    console.log('Form submitted:', formState);
    onContinue();
  };

  return (
    <div className="h-screen w-screen bg-gray-50 relative font-sans" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* User info placed absolutely near top-left similar to Section 4 */}
      <div className="absolute top-12 left-6 z-10">
          <div className="absolute left-0 top-20 z-20">
         <div className="relative w-10 h-10 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center mt-10 ml-20 mt-10 top-6 left-6 ml-20">
            <img
                src="/src/assets/images/note-04.png"  // <- Replace with your actual image path
                 alt="Icon"
                className="w-10 h-10"
             />
          </div>
          </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm" style={{ maxWidth: 760 }}>
          {[user.name, user.school, user.form, user.phone, user.email].map(item => (
            <span key={item} className="relative text-[#00B69D] font-medium whitespace-nowrap">
              {item}
              <span
                className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00B69D] opacity-50"
                style={{ filter: 'blur(1px)' }}
              />
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm mt-1" style={{ maxWidth: 760 }}>
          {[user.spiritualResponse, user.contactMethod].map(item => (
            <span key={item} className="relative text-[#00B69D] font-medium whitespace-nowrap">
              {item}
              <span
                className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00B69D] opacity-50"
                style={{ filter: 'blur(1px)' }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* Ellipse with letter G at top-right, analogous to Section 4 */}
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
      {/* Main content area with padding to avoid overlap with absolute containers */}
      <div className="max-w-7xl mx-auto px-6 pt-40 lg:pt-36 pb-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        
        {/* Left Column - Counselor Notes Form */}
        <div className="space-y-6 font-poppins pl-20 mt-14">
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-lg font-bold text-black">Counselor Notes</h1>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 font-inter">
            <div>
              <label htmlFor="counselorName" className="block text-base font-normal text-black mb-3">
                Counselor's Name
              </label>
              <input
                type="text"
                id="counselorName"
                value={formState.counselorName}
                onChange={(e) => handleInputChange('counselorName', e.target.value)}
                placeholder="Enter your name"
                className="inline-block w-[400px] px-0 py-2 text-base text-gray-500 bg-transparent border-b-2 border-[#00B69D] focus:outline-none focus:border-[#00B69D] focus:ring-0 placeholder-gray-400"
              />
            </div>

            <div>
              <label htmlFor="additionalNotes" className="block text-base font-normal text-black mb-3">
                Additional Note or Observations
              </label>
              <textarea
                id="additionalNotes"
                value={formState.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                placeholder="Enter long text"
                className="inline-block w-[400px] h-[40px] px-0 py-2 text-base text-gray-500 bg-transparent border-b-2 border-[#00B69D] focus:outline-none focus:border-[#00B69D] focus:ring-0 placeholder-gray-400 resize-none"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            className="bg-slate-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-200 flex items-center group text-sm"
          >
            CONTINUE
            <ChevronRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
             />
          </button>
        </div>

        {/* Right Column - Counseling Illustration Placeholder */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="max-w-md w-full">
            <div className="relative flex items-center justify-center">
              <img
                src={getImage('Two people talking with a person being a student..png')}
                alt="Section 4 Illustration"
                className="w-full h-auto max-w-sm"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Section5Page;
