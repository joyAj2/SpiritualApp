import Logo from '../assets/Logo.png'
import studentTyping from '../assets/studentTyping.png'
import hugeIcon_1 from '../assets/icons/hugeicons_contact-02.png'
import continueIcon from '../assets/icons/continue.png'
import { useState } from 'react'


type ContactDetailsProps = {
  studentInfo: {
    fullName: string;
    school: string;
    classForm: string;
  };
};

function ContactDetails({ studentInfo }: ContactDetailsProps) {
  const infoArray = [studentInfo.fullName, studentInfo.school, studentInfo.classForm];

  return (
    <div className='w-full min-h-screen bg-white overflow-x-hidden'>
        <div className='flex flex-row md:flex-row justify-between items-center w-full px-4 pt-4'>
            <div className='flex flex-row gap-4 md:gap-10 mb-2 md:mb-0'>
                {infoArray.map((info, idx) => (
                  <span
                    key={idx}
                    className='text-[15px] text-[#00B69D] border-b-2 border-[#DAF3F1] h-7'
                  >
                    {info}
                  </span>
                ))}
            </div>
            <div>
                <img src={Logo} alt='Logo' className='w-24 h-20'/>
            </div>
        </div>
        <div className='lg:flex-row flex flex-col-reverse justify-center items-center mb-20 w-full'>
            <form className='grid grid-cols-[auto_1fr] w-full max-w-2xl lg:p-8 lg:pl-32' >
                <div className='w-10'>
                    <span className='w-full'>
                        <img src={hugeIcon_1} alt='hugeIcon_1' className='w-10 h-10'/>
                    </span>
                </div>
                <div className='w-full max-w-lg px-2 flex flex-col justify-center'>
                <div className='flex justify-start items-center gap-3 mb-7'>
                    <p className='text-xl md:text-2xl font-bold'>Contact Details</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg md:text-[20px] font-semibold'>Phone Number</label>
                        <input type='tel' placeholder='Enter your number' pattern='[0-9]{10}' required className='border-b-2 w-full border-b-[#00B69D] font-bold py-2 focus:outline-none focus:border-b-[#054d43]' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg md:text-[20px] font-semibold'>Email Address</label>
                        <input type='email' placeholder='Enter your email' required className='border-b-2 w-full border-b-[#00B69D] font-bold py-2 focus:outline-none focus:border-b-[#054d43]' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg md:text-[20px] font-semibold'>Social Media Handle</label>
                        <input type='text' placeholder='Enter your social handle' required className='border-b-2 w-full border-b-[#00B69D] font-bold py-2 focus:outline-none focus:border-b-[#054d43]' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg md:text-[20px] font-semibold'>Guardian/Parent Contact (Optional)</label>
                        <input type='tel' placeholder='Enter number here' pattern='[0-9]{10}' className='border-b-2 w-full border-b-[#00B69D] font-bold py-2 focus:outline-none focus:border-b-[#054d43]' />
                    </div>
                    <div>
                        <button className='bg-[#1A434C] text-white font-bold w-32 md:w-[150px] h-[50px] rounded-lg mt-4 flex justify-center items-center'>
                           <p>CONTINUE</p>
                            <img src={continueIcon} alt='continueIcon' className='inline w-4 h-4 ml-2'/>
                        </button>
                    </div>
                </div>
                </div>
            </form>
            <div className='flex justify-center items-center w-full max-w-[550px] lg:h-[450px] mb-8 lg:mb-0 lg:pl-32'>
                <img src={studentTyping} alt='studentTyping' className='w-60 h-60 lg:w-[550px] lg:h-[450px] md:w-96 md:h-96 object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default ContactDetails
