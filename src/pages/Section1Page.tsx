import React from 'react'
import book from '../assets/book.png'
import homeicon from '../assets/icons/homeicon.png'
import contacticon from '../assets/icons/contacticon.png'
import phoneicon from '../assets/icons/bookicon.png'
import bookicon from '../assets/icons/bookicon.png'

const Section1Page: React.FC = () => {
  return (
  <div className="container mx-auto px-4 py-8 md:pb-[90px] relative">
      {/* Book image (full-bleed across viewport) */}
      <div className="relative left-1/2 -translate-x-1/2 transform w-screen mt-[120px] md:mt-[101px]">
        <img
          src={book}
          alt="Book"
          className="w-full h-[220px] md:h-[318px] rounded-none md:rounded-[8px] object-cover"
          style={{ opacity: 1 }}
        />
      </div>
      {/* Centered section title */}
      <div className="w-full flex justify-center">
        <p className="mt-6 md:mt-8 font-poppins text-[20px] font-semibold leading-none text-[#08B298] text-center w-[389px] h-[30px]">
          NOM: School Outreach Response Form
        </p>
      </div>
      {/* Centered descriptive text (Inter, 16px, medium) */}
      <div className="w-full flex justify-center">
        <div
          className="mt-3 md:mt-4 text-left text-[16px] font-medium leading-none tracking-normal not-italic text-black opacity-100 md:w-[562px]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {/* Mobile: 5 centered lines */}
          <div className="block md:hidden">
            <p className="leading-none text-center whitespace-nowrap text-[12px] font-medium">Use this form to capture the details of students who respond to</p>
            <p className="leading-none text-center whitespace-nowrap text-[12px] font-medium">salvation, counseling, or discipleship during our school</p>
            <p className="leading-none text-center whitespace-nowrap text-[12px] font-medium">outreach missions. All responses are confidential</p>
            <p className="leading-none text-center whitespace-nowrap text-[12px] font-medium">and will be used solely for ministry</p>
            <p className="leading-none text-center whitespace-nowrap text-[12px] font-medium">follow-up.</p>
          </div>

          {/* Desktop: existing layout */}
          <div className="hidden md:block">
            <p className="leading-none text-center whitespace-nowrap font-medium">
              Use this form to capture the details of students who respond to salvation,
            </p>
            <p className="leading-none text-center whitespace-nowrap font-medium">
              counseling, or discipleship during our school outreach missions. All
            </p>
            <p className="leading-none text-center whitespace-nowrap font-medium">
              responses are confidential and will be used solely for
            </p>
            <p className="leading-none text-center whitespace-nowrap font-medium">
              ministry follow-up.
            </p>
          </div>
        </div>
      </div>
      {/* Continue button */}
      <div className="w-full flex justify-center mt-20 md:mt-12">
        <button
          className="bg-[#1A434C] text-white rounded-[8px] px-[19px] py-[11px] inline-flex items-center justify-center gap-[10px] font-medium"
          style={{ width: 120, height: 40, opacity: 1 }}
        >
          <span>Continue</span>
          <span aria-hidden="true">&gt;</span>
        </button>
      </div>
      {/* Desktop icons row inside Rectangle 33 */}
      <div className="hidden md:block">
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 transform w-screen">
          <div
            className="relative w-full h-[73px] flex items-center justify-center gap-8"
            style={{
              background:
                'linear-gradient(180deg, #DAF3F1 1.01%, #EDF9F8 11.96%, #FFFFFF 12.03%)',
              opacity: 1
            }}
          >
            {/* Active indicator from the left edge to the Home icon */}
            <div
              className="absolute left-0 bottom-0 h-0 border-t-[4px] border-[#00B69D] opacity-100"
              style={{ width: 'calc(50% - 474.53173828125px + 18.5px)' }}
            />
            {/* Home icon + ellipse stacked vertically (Home raised slightly) */}
            <div className="flex flex-col items-center">
              <div className="w-[61px] h-[61px] rounded-[18px] bg-[#08B298] flex items-center justify-center -translate-y-6">
                <img src={homeicon} alt="Home" className="w-6 h-6 object-contain" />
              </div>
              <div className="w-[5px] h-[5px] bg-[#00B69D] rounded-full mt-[2px] opacity-100" />
            </div>
            {/* Line 3 between Home and Contact */}
            <div
              className="h-0 w-[126.015869140625px] border-t border-solid opacity-100 self-center"
              style={{ borderColor: '#00B69DB2' }}
            />
            <img src={contacticon} alt="Contact" className="w-8 h-8" />
            {/* Divider between Contact and Phone */}
            <div
              className="h-0 w-[126.015869140625px] border-t border-solid opacity-100 self-center"
              style={{ borderColor: '#00B69DB2' }}
            />
            <img src={phoneicon} alt="Phone" className="w-8 h-8" />
            {/* Divider between Phone and Book */}
            <div
              className="h-0 w-[126.015869140625px] border-t border-solid opacity-100 self-center"
              style={{ borderColor: '#00B69DB2' }}
            />
            <img src={bookicon} alt="Book" className="w-8 h-8" />
            {/* Divider between Book and Book */}
            <div
              className="h-0 w-[126.015869140625px] border-t border-solid opacity-100 self-center"
              style={{ borderColor: '#00B69DB2' }}
            />
            <img src={bookicon} alt="Book" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1Page