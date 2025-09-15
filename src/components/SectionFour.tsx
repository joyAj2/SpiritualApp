import React from 'react';
import { ChevronRight} from 'lucide-react';
import type { SpiritualResponse, UserProfile } from '../types';

// Helper to dynamically import images by file name
const getImage = (fileName: string) => `/src/assets/images/${fileName}`;

interface Section4Props {
  user: UserProfile;
  data: SpiritualResponse;
  onChange: (data: SpiritualResponse) => void;
  onContinue: () => void;
}

const Section4: React.FC<Section4Props> = ({ user, data, onChange, onContinue }) => {
  const handleResponseChange = (response: string, checked: boolean) => {
    const newResponses = checked
      ? [...data.responses, response]
      : data.responses.filter(r => r !== response);
    onChange({ ...data, responses: newResponses });
  };

  const handleFollowUpMethodChange = (method: string, checked: boolean) => {
    const newMethods = checked
      ? [...data.followUpMethod, method]
      : data.followUpMethod.filter(m => m !== method);
    onChange({ ...data, followUpMethod: newMethods });
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 relative" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="h-screen w-screen bg-gray-50 relative flex flex-col pb-20">
          <div className="flex-1 w-full">
            <div className="bg-white h-full w-full overflow-hidden relative">
              {/* Floating icon that doesn't shift text */}
              <div className="absolute left-10 top-24 z-20">
                <div className="relative w-8 h-8 lg:w-10 lg:h-10 top-2 rounded-lg flex items-center justify-center ml-12">
                  <img
                    src="/src/assets/images/note-04.png"
                    alt="Icon"
                    className="w-10 h-10"
                  />
                </div>
              </div>

              {/* Header positioned slightly lower than the ellipse */}
              <div className="absolute top-12 left-9 z-10">
                <div className="flex items-center space-x-4 text-xs">
                  {[user.name, user.school, user.form, user.phone, user.email].map((item) => (
                    <span
                      key={item}
                      className="relative"
                      style={{ color: '#00B69D' }}
                    >
                      {item}
                      <span
                        className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00B69D] opacity-50"
                        style={{ filter: 'blur(1px)' }}
                      />
                    </span>
                  ))}
                </div>
              </div>

              {/* Ellipse positioned top-right with G on it */}
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

              <div className="grid lg:grid-cols-2 gap-0 h-full pt-16">
                {/* Form Content */}
                <div className="p-4 lg:p-6 relative z-10 flex flex-col justify-between ml-16 lg:ml-32">
                  <div>
                    <div className="flex items-center mb-8 mt-5">
                      <h1 className="font-poppins font-semibold text-[20px] leading-[30px] text-black">
                        Spiritual Response
                      </h1>
                    </div>

                    <div className="space-y-4">
                      {/* Response Question */}
                      <div>
                        <h2 className="font-inter font-medium text-[18px] leading-[22px] text-black mb-2 mt-10">
                          What was your response today?
                        </h2>

                        <div className="space-y-2">
                          {['I give my life to Christ', 'I rededicated my life to Christ', 'I need counselling', 'I want to be baptized'].map(response => (
                            <label key={response} className="flex items-center cursor-pointer group">
                              <input
                                type="checkbox"
                                checked={data.responses.includes(response)}
                                onChange={e => handleResponseChange(response, e.target.checked)}
                                className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] rounded focus:ring-[#00B69D] focus:ring-2"
                              />
                              <span className="ml-2 text-sm text-gray-700 group-hover:text-gray-900">
                                {response}
                              </span>
                            </label>
                          ))}
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              checked={data.responses.includes('other')}
                              onChange={e => handleResponseChange('other', e.target.checked)}
                              className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] rounded focus:ring-[#00B69D] focus:ring-2"
                            />
                            <input
                              type="text"
                              placeholder="Other"
                              value={data.otherResponse || ''}
                              onChange={e => onChange({ ...data, otherResponse: e.target.value })}
                              className="ml-2 w-[262px] border-b-[3px] border-[#00B69D] border-b-2 focus:border-[#00B69D] bg-transparent pb-1 outline-none text-sm text-gray-700 placeholder-[#00B69D]"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Follow-up Question */}
                      <div>
                        <h2 className="text-black font-inter font-medium text-[18px] leading-[22px] mb-2"
                          style={{ width: '401px', height: '22px' }}>
                          Would you like someone to follow up with you?
                        </h2>
                        <div className="flex flex-wrap gap-20">
                          {[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'maybe', label: 'Maybe' }].map(option => (
                            <label key={option.value} className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="followUp"
                                value={option.value}
                                checked={data.followUp === option.value}
                                onChange={e => onChange({ ...data, followUp: e.target.value as 'yes' | 'no' | 'maybe' | '' })}
                                className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] focus:ring-[#00B69D] focus:ring-2"
                              />
                              <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Follow-up Method */}
                      <div>
                        <h2 className="text-black font-inter font-medium text-[18px] leading-[22px] mb-2"
                          style={{ width: '401px', height: '22px' }}>
                          Preferred follow up method?
                        </h2>
                        <div className="grid grid-cols-3 gap-3">
                          {['Call', 'Social DM', 'In-person visits at school', 'Text message', 'Email'].map(method => (
                            <label key={method} className="flex items-center cursor-pointer">
                              <input
                                type="radio"
                                name="followUpMethod"
                                checked={data.followUpMethod.includes(method)}
                                onChange={e => handleFollowUpMethodChange(method, e.target.checked)}
                                className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] focus:ring-[#00B69D] focus:ring-2"
                              />
                              <span className="ml-2 text-sm text-gray-700 whitespace-nowrap">{method}</span>
                            </label>
                          ))}
                          <div className="flex items-center col-span-2">
                            <input
                              type="radio"
                              name="followUpMethod"
                              checked={data.followUpMethod.includes('other')}
                              onChange={e => handleFollowUpMethodChange('other', e.target.checked)}
                              className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] focus:ring-[#00B69D] focus:ring-2"
                            />
                            <input
                              type="text"
                              placeholder="Other"
                              value={data.otherFollowUpMethod || ''}
                              onChange={e => onChange({ ...data, otherFollowUpMethod: e.target.value })}
                              className="ml-2 w-[262px] border-b-[3px] border-[#00B69D] border-b-2 focus:border-[#00B69D] bg-transparent pb-1 outline-none text-sm text-gray-700 placeholder-[#00B69D]"
                            />
                          </div>
                        </div>
                        {/* Continue Button */}
                        <div className="pt-7">
                          <button
                            onClick={onContinue}
                            className="bg-slate-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-200 flex items-center group text-sm"
                          >
                            CONTINUE
                            <ChevronRight
                              size={16}
                              className="ml-2 group-hover:translate-x-1 transition-transform"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Illustration */}
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
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden min-h-screen bg-white overflow-y-auto">
        {/* Top Section with User Info and Avatar */}
        <div className="relative px-4 pt-4 pb-6">
          {/* Ellipse positioned top-right with G on it */}
          <div className="absolute top-4 right-4 z-10 w-12 h-12">
            <img
              src={getImage('ellipse 1.png')}
              alt="Ellipse"
              className="w-full h-full object-cover"
            />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-white text-sm">
              G
            </span>
            {/* Small circle underneath the ellipse */}
            <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-teal-500 rounded-full"></div>
          </div>

          {/* User Info */}
          <div className="mt-8 space-y-2">
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              {[user.name, user.school, user.form, user.phone].map((item) => (
                <span
                  key={item}
                  className="relative text-[#00B69D] font-medium"
                >
                  {item}
                  <span
                    className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00B69D] opacity-50"
                    style={{ filter: 'blur(1px)' }}
                  />
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
              <span className="relative text-[#00B69D] font-medium">
                {user.email}
                <span
                  className="absolute left-0 bottom-0 w-full h-[1px] bg-[#00B69D] opacity-50"
                  style={{ filter: 'blur(1px)' }}
                />
              </span>
            </div>
          </div>
        </div>

        {/* Illustration at Top Center */}
        <div className="flex justify-center px-4 mb-6">
          <img
            src={getImage('Two people talking with a person being a student..png')}
            alt="Section 4 Illustration"
            className="w-full max-w-xs h-auto"
          />
        </div>

        {/* Form Content - Increased bottom padding for fixed navigation */}
        <div className="px-4 pb-36">
          <div className="flex items-center mb-6">
            <img
              src="/src/assets/images/note-04.png"
              alt="Icon"
              className="w-6 h-6 mr-3"
            />
            <h1 className="font-poppins font-semibold text-lg text-black">
              Spiritual Response
            </h1>
          </div>

          <div className="space-y-6">
            {/* Response Question */}
            <div>
              <h2 className="font-inter font-medium text-base text-black mb-3">
                What was your response today?
              </h2>

              <div className="space-y-3">
                {['I give my life to Christ', 'I rededicated my life to Christ', 'I need counselling', 'I want to be baptized'].map(response => (
                  <label key={response} className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={data.responses.includes(response)}
                      onChange={e => handleResponseChange(response, e.target.checked)}
                      className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] rounded focus:ring-[#00B69D] focus:ring-2"
                    />
                    <span className="ml-3 text-sm text-gray-700 group-hover:text-gray-900">
                      {response}
                    </span>
                  </label>
                ))}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={data.responses.includes('other')}
                    onChange={e => handleResponseChange('other', e.target.checked)}
                    className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] rounded focus:ring-[#00B69D] focus:ring-2"
                  />
                  <input
                    type="text"
                    placeholder="Other"
                    value={data.otherResponse || ''}
                    onChange={e => onChange({ ...data, otherResponse: e.target.value })}
                    className="ml-3 flex-1 border-b-2 border-[#00B69D] focus:border-[#00B69D] bg-transparent pb-1 outline-none text-sm text-gray-700 placeholder-[#00B69D]"
                  />
                </div>
              </div>
            </div>

            {/* Follow-up Question */}
            <div>
              <h2 className="text-black font-inter font-medium text-base mb-3">
                Would you like someone to follow up with you?
              </h2>
              <div className="flex gap-8">
                {[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'maybe', label: 'Maybe' }].map(option => (
                  <label key={option.value} className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="followUp"
                      value={option.value}
                      checked={data.followUp === option.value}
                      onChange={e => onChange({ ...data, followUp: e.target.value as 'yes' | 'no' | 'maybe' | '' })}
                      className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] focus:ring-[#00B69D] focus:ring-2"
                    />
                    <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Follow-up Method */}
            <div>
              <h2 className="text-black font-inter font-medium text-base mb-3">
                Preferred follow up method?
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {['Call', 'Social DM'].map(method => (
                    <label key={method} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="followUpMethod"
                        checked={data.followUpMethod.includes(method)}
                        onChange={e => handleFollowUpMethodChange(method, e.target.checked)}
                        className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] focus:ring-[#00B69D] focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-700">{method}</span>
                    </label>
                  ))}
                </div>
                <div className="space-y-3">
                  {['Text message', 'Email', 'In-person visits at school'].map(method => (
                    <label key={method} className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="followUpMethod"
                        checked={data.followUpMethod.includes(method)}
                        onChange={e => handleFollowUpMethodChange(method, e.target.checked)}
                        className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] focus:ring-[#00B69D] focus:ring-2"
                      />
                      <span className="ml-2 text-sm text-gray-700">{method}</span>
                    </label>
                  ))}
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="followUpMethod"
                    checked={data.followUpMethod.includes('other')}
                    onChange={e => handleFollowUpMethodChange('other', e.target.checked)}
                    className="w-4 h-4 accent-[#00B69D] border-2 border-[#00B69D] focus:ring-[#00B69D] focus:ring-2"
                  />
                  <input
                    type="text"
                    placeholder="Other"
                    value={data.otherFollowUpMethod || ''}
                    onChange={e => onChange({ ...data, otherFollowUpMethod: e.target.value })}
                    className="ml-2 flex-1 border-b-2 border-[#00B69D] focus:border-[#00B69D] bg-transparent pb-1 outline-none text-sm text-gray-700 placeholder-[#00B69D]"
                  />
                </div>
              </div>
            </div>

            {/* Continue Button */}
            <div className="pt-6">
              <button
                onClick={onContinue}
                className="bg-slate-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-slate-600 transition-colors duration-200 flex items-center group text-sm"
              >
                CONTINUE
                <ChevronRight
                  size={16}
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Mobile Only */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
          <div className="flex justify-around items-center py-3">
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400">
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400">
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400">
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-[#00B69D]">
              <div className="w-6 h-1 bg-[#00B69D] rounded"></div>
            </button>
            <button className="flex flex-col items-center gap-1 p-2 text-gray-400">
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;