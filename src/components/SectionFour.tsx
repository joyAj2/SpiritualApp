import React from 'react';
import { ChevronRight } from 'lucide-react';
import type { SpiritualResponse, UserProfile } from '../types';
// import BottomNavigation from './BottomNavigation'; // adjust the path if needed



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
  
// const [currentSection, setCurrentSection] = React.useState(4); // start at section 4

  return (
    <div className="h-screen w-screen bg-gray-50 relative flex flex-col">
      <div className="flex-1 w-full">
        <div className="bg-white h-full w-full overflow-hidden relative">

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
                <div className="flex items-center mb-8">
                  {/* <div className="w-8 h-8 lg:w-10 lg:h-10 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                    <ClipboardList className="text-teal-600" size={16} />
                  </div> */}
                  
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
                            className="w-4 h-4 text-teal-600 border-2 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
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
                          className="w-4 h-4 text-teal-600 border-2 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                        />
                        <input
                          type="text"
                          placeholder="Other"
                          value={data.otherResponse || ''}
                          onChange={e => onChange({ ...data, otherResponse: e.target.value })}
                          className="ml-2 w-[262px] border-b-[3px] border-[#00B69D] border-b-2 border-teal-200 focus:border-teal-500 bg-transparent pb-1 outline-none text-sm text-gray-700 placeholder-teal-400"
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
                    <div className="flex flex-wrap gap-3">
                      {[{ value: 'yes', label: 'Yes' }, { value: 'no', label: 'No' }, { value: 'maybe', label: 'Maybe' }].map(option => (
                        <label key={option.value} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="followUp"
                            value={option.value}
                            checked={data.followUp === option.value}
                            onChange={e => onChange({ ...data, followUp: e.target.value as 'yes' | 'no' | 'maybe' | '' })}
                            className="w-4 h-4 text-teal-600 border-2 border-gray-300 focus:ring-teal-500 focus:ring-2"
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
                    <div className="grid grid-cols-2 gap-2">
                      {['Call', 'Social DM', 'In-person visits at school', 'Text message', 'Email'].map(method => (
                        <label key={method} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name="followUpMethod"
                            checked={data.followUpMethod.includes(method)}
                            onChange={e => handleFollowUpMethodChange(method, e.target.checked)}
                            className="w-4 h-4 text-teal-600 border-2 border-gray-300 focus:ring-teal-500 focus:ring-2"
                          />
                          <span className="ml-2 text-sm text-gray-700">{method}</span>
                        </label>
                      ))}
                      <div className="flex items-center col-span-2">
                        <input
                          type="radio"
                          name="followUpMethod"
                          checked={data.followUpMethod.includes('other')}
                          onChange={e => handleFollowUpMethodChange('other', e.target.checked)}
                          className="w-4 h-4 text-teal-600 border-2 border-gray-300 focus:ring-teal-500 focus:ring-2"
                        />
                        <input
                          type="text"
                          placeholder="Other"
                          value={data.otherFollowUpMethod || ''}
                          onChange={e => onChange({ ...data, otherFollowUpMethod: e.target.value })}
                          className="ml-2 w-[262px] border-b-[3px] border-[#00B69D] border-b-2 border-teal-200 focus:border-teal-500 bg-transparent pb-1 outline-none text-sm text-gray-700 placeholder-teal-400"
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
      {/* <BottomNavigation
  currentSection={currentSection}
  onSectionChange={setCurrentSection}
/> */}

    </div>
  );
};

export default Section4;