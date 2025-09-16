import React, { useEffect, useState } from 'react'
import book from '../assets/book.png'
import homeicon from '../assets/icons/homeicon.png'
import contacticon from '../assets/icons/contacticon.png'
import phoneicon from '../assets/icons/phoneicon.png'
import bookicon from '../assets/icons/bookicon.png'


const Section1Page: React.FC = () => {
  // Configurable values for the mobile bottom bar
  const marginPx = 28 // equal left/right margin inside the bar
  const itemsCount = 5 // first item has the diamond, then 4 short lines

  // Detect whether this is a desktop device (based on user agent) so desktop users
  // always see the desktop layout even if they resize the browser window small.
  const [isDesktopDevice, setIsDesktopDevice] = useState<boolean>(true)

  useEffect(() => {
    const detect = () => {
      try {
        const ua = navigator.userAgent || ''
        const isMobileUa = /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(ua)
        // also consider viewport width: treat as desktop only when UA suggests desktop AND width >= md breakpoint (768)
        const width = typeof window !== 'undefined' ? window.innerWidth : 1024
        setIsDesktopDevice(!isMobileUa && width >= 768)
      } catch (e) {
        setIsDesktopDevice(true)
      }
    }

    detect()
    window.addEventListener('resize', detect)
    return () => window.removeEventListener('resize', detect)
  }, [])

  return (
    <div className="container mx-auto px-4 py-2 md:py-4 pb-[92px] relative min-h-[calc(100vh-73px)]">
      {/* Book hero */}
      <div className="relative left-1/2 -translate-x-1/2 transform w-screen mt-[72px] md:mt-[56px]">
        <img src={book} alt="Book" className="w-full h-[150px] md:h-[220px] object-cover" />
      </div>

      {/* Title */}
      <div className="w-full flex justify-center">
        <p className="mt-8 md:mt-8 font-poppins text-[18px] md:text-[20px] font-semibold leading-none text-[#08B298] text-center w-[360px] md:w-[389px] h-[30px]">
          NOM: School Outreach Response Form
        </p>
      </div>

      {/* Description */}
      <div className="w-full flex justify-center">
        <div className="mt-6 md:mt-8 text-left text-[15px] md:text-[16px] font-medium leading-none md:w-[520px]" style={{ fontFamily: 'Inter, sans-serif' }}>
          <div className="block md:hidden text-center">
            <p className="text-[12px]">Use this form to capture the details of students who respond to</p>
            <p className="text-[12px]">salvation, counseling, or discipleship during our school</p>
            <p className="text-[12px]">outreach missions. All responses are confidential</p>
            <p className="text-[12px]">and will be used solely for ministry</p>
            <p className="text-[12px]">follow-up.</p>
          </div>
          <div className="hidden md:block text-center">
            <p>Use this form to capture the details of students who respond to salvation,</p>
            <p>counseling, or discipleship during our school outreach missions. All</p>
            <p>responses are confidential and will be used solely for</p>
            <p> ministry follow-up.</p>
          </div>
        </div>
      </div>

      {/* Continue CTA */}
      <div className="w-full flex justify-center mt-12 md:mt-8">
        <button className="bg-[#1A434C] text-white rounded-[8px] px-[19px] py-[11px] inline-flex items-center justify-center gap-[10px] font-medium" style={{ width: 120, height: 40 }}>
          <span>Continue</span>
          <span aria-hidden>›</span>
        </button>
      </div>

      {/* Render desktop layout for desktop devices (determined at mount). Mobile devices get the mobile layout. */}
      {isDesktopDevice ? (
        <div>
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 transform w-screen">
            <div className="relative w-full h-[73px] flex items-center justify-center gap-8" style={{ background: 'linear-gradient(180deg, #DAF3F1 1.01%, #EDF9F8 11.96%, #FFFFFF 12.03%)' }}>
              <div className="flex flex-col items-center z-10" style={{ position: 'relative' }}>
                  {/* Active indicator: 4px tall top border at the very bottom */}
                  <div style={{ position: 'fixed', bottom: 0, left: 0, width: '23vw', height: 4, background: '#00B69D', borderRadius: 0, zIndex: 50 }} />
                  <div className="w-[61px] h-[61px] rounded-[18px] bg-[#08B298] flex items-center justify-center -translate-y-8">
                    <img src={homeicon} alt="Home" className="w-6 h-6 object-contain" />
                  </div>
                  <div className="w-[5px] h-[5px] bg-[#00B69D] rounded-full -translate-y-[15px]" />
                </div>

              <div className="flex items-center gap-6">
                <div className="h-0 w-[126px] border-t" style={{ borderColor: '#00B69DB2' }} />
                <div className="rounded-[8px] border" style={{ borderWidth: 0.75, borderColor: '#00B69DB2', width: 36, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={contacticon} alt="Contact" style={{ width: 18 }} />
                </div>
                <div className="h-0 w-[126px] border-t" style={{ borderColor: '#00B69DB2' }} />
                <div className="rounded-[8px] border" style={{ borderWidth: 0.75, borderColor: '#00B69DB2', width: 36, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={phoneicon} alt="Phone" style={{ width: 18 }} />
                </div>
                <div className="h-0 w-[126px] border-t" style={{ borderColor: '#00B69DB2' }} />
                <div className="rounded-[8px] border" style={{ borderWidth: 0.75, borderColor: '#00B69DB2', width: 36, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={bookicon} alt="Book" style={{ width: 18 }} />
                </div>
                <div className="h-0 w-[126px] border-t" style={{ borderColor: '#00B69DB2' }} />
                <div className="rounded-[8px] border" style={{ borderWidth: 0.75, borderColor: '#00B69DB2', width: 36, height: 42, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={bookicon} alt="Book" style={{ width: 18 }} />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="block md:hidden">
          <div style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', height: 39, background: 'linear-gradient(180deg, #DAF3F1 1.01%, #EDF9F8 11.96%, #FFFFFF 12.03%)', zIndex: 40 }}>
            {/* Inner wrapper uses left/right padding (marginPx) so left/right page margins are equal. Items are evenly spaced with flex. */}
            <div className="h-full flex items-center" style={{ padding: `0 ${marginPx}px`, boxSizing: 'border-box' }}>
              <div className="w-full flex items-center justify-between" role="navigation" aria-label="mobile-bottom-lines">
                {Array.from({ length: itemsCount }).map((_, idx) => (
                  <div key={idx} className="relative flex items-center justify-center" style={{ width: 18, minWidth: 18 }}>
                    {/* horizontal short line */}
                    <div style={{ width: 18, height: 0, borderTop: '1px solid #08B298' }} />
                    {/* diamond attached to the first item's right tip */}
                    {idx === 0 && (
                      <div style={{ position: 'absolute', right: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: 6, height: 6, background: '#08B298' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
            {/* Optionally a centered ellipse for mobile could be inserted here if needed */}
          </div>
        </div>
      )}
    </div>
  )
}

export default Section1Page