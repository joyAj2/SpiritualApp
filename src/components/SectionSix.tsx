/*
 * ThankYouPage.tsx - Thank You Confirmation Page
 */

import React from 'react';
import { Home, User, Phone, FileText } from 'lucide-react';
import type { UserProfile, SpiritualResponse } from '../types';

interface ThankYouPageProps {
  user: UserProfile;
  spiritualData: SpiritualResponse;
  onSubmit: () => void;
}

const ThankYouPage: React.FC<ThankYouPageProps> = ({ user, spiritualData, onSubmit }) => {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Avatar Section - Top Right */}
        <div className="flex justify-end mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-slate-600 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">{user.initial ?? 'G'}</span>
            </div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#00B69D]"></div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Column - Thank You Message */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-medium text-[#00B69D] mb-8">
                Thank you !!!
              </h1>
              
              <div className="space-y-4 text-lg text-black">
                <p className="font-medium">Your details have been received.</p>
                <p className="font-medium">We'll be reaching out to you soon.</p>
                <p className="font-medium">God bless you!</p>
              </div>
            </div>

            {/* User Details Summary */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <span className="relative text-[#00B69D] font-medium">{user.name}</span>
                <span className="relative text-[#00B69D] font-medium">{user.school}</span>
                <span className="relative text-[#00B69D] font-medium">{user.form}</span>
                <span className="relative text-[#00B69D] font-medium">{user.phone}</span>
              </div>
              
              <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                <span className="relative text-[#00B69D] font-medium">{user.email}</span>
                <span className="relative text-[#00B69D] font-medium">
                  {spiritualData.responses.join(', ') || 'No response'}
                </span>
                <span className="relative text-[#00B69D] font-medium">
                  {spiritualData.followUpMethod.join(', ') || 'No follow-up method'}
                </span>
              </div>

              <div className="text-sm">
                <span className="relative text-[#00B69D] font-medium">
                  Counselor: {user.initial}
                </span>
              </div>
            </div>
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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center py-4">
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#00B69D] transition-colors">
              <Home className="w-6 h-6" />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#00B69D] transition-colors">
              <User className="w-6 h-6" />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400 hover:text-[#00B69D] transition-colors">
              <Phone className="w-6 h-6" />
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-[#00B69D]">
              <FileText className="w-6 h-6" />
              <div className="w-full h-0.5 bg-[#00B69D]"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={onSubmit}
        className="fixed bottom-24 right-6 w-14 h-14 bg-[#00B69D] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#008a7a] transition-colors"
      >
        <FileText className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ThankYouPage;
