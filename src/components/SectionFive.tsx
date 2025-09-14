/*
 * Section5Page.tsx - Counselor Notes Form
 */

import React, { useState } from 'react';
import { FileText, ChevronRight } from "lucide-react"; // ✅ add this line

// Props interface so this page can tell App to go forward
interface Section5PageProps {
  onContinue: () => void;
}

// TypeScript interfaces
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

// Demo user data
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
    onContinue(); // ✅ tell App to move to Section6
  };

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-8">
          
          {/* User Info Block */}
          <div className="mb-6 lg:mb-0">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm mb-3">
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
              <span className="relative text-[#00B69D] font-medium">
                {user.email}
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#00B69D]" 
                  style={{ filter: 'blur(1px)' }}
                />
              </span>
            </div>
            
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
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
          </div>

          {/* Avatar Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-slate-600 flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">G</span>
              </div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#00B69D]"></div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Form */}
          <div className="space-y-6">
            
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 border border-[#00B69D] rounded">
                <FileText className="w-5 h-5 text-[#00B69D]" />
              </div>
              <h1 className="text-lg font-medium text-black">
                Counselor Notes
              </h1>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div>
                <label 
                  htmlFor="counselorName" 
                  className="block text-base font-normal text-black mb-3"
                >
                  Counselor's Name
                </label>
                <input
                  type="text"
                  id="counselorName"
                  value={formState.counselorName}
                  onChange={(e) => handleInputChange('counselorName', e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-0 py-2 text-base text-gray-500 bg-transparent border-0 border-b-2 border-[#00B69D] focus:outline-none focus:border-[#00B69D] focus:ring-0 placeholder-gray-400"
                />
              </div>

              <div>
                <label 
                  htmlFor="additionalNotes" 
                  className="block text-base font-normal text-black mb-3"
                >
                  Additional Note or Observations
                </label>
                <textarea
                  id="additionalNotes"
                  value={formState.additionalNotes}
                  onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                  placeholder="Enter long text"
                  rows={4}
                  className="w-full px-0 py-2 text-base text-gray-500 bg-transparent border-0 border-b-2 border-[#00B69D] focus:outline-none focus:border-[#00B69D] focus:ring-0 placeholder-gray-400 resize-none"
                />
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              className="flex items-center gap-2 px-6 py-3 bg-slate-700 text-white font-medium rounded hover:bg-slate-800 transition-colors"
            >
              CONTINUE
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column - Illustration */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="max-w-md w-full">
              <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <p className="text-sm">Counseling Illustration</p>
                  <p className="text-xs mt-1">Place counseling-illustration.png in src/assets/images/</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5Page;
