import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png'
import studentTyping from '../assets/studentTyping.png'
import hugeIcon_1 from '../assets/icons/hugeicons_contact-01.png'
import continueIcon from '../assets/icons/continue.png'

export interface StudentInfo {
  fullName: string;
  school: string;
  classForm: string;
}


export interface StudentInformationProps {
  setStudentInfo: React.Dispatch<React.SetStateAction<StudentInfo>>;
}

function StudentInformation({ setStudentInfo }: StudentInformationProps) {
    const [day, setDay] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");

    const [selectedClass, setSelectedClass] = useState("");
    const [selectedSchool, setSelectedSchool] = useState("");

    const [fullName, setFullName] = useState('');

    const navigate = useNavigate();

    // Generate options dynamically
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = Array.from({ length: 12 }, (_, i) => i + 1);
    const years = Array.from({ length: 26 }, (_, i) => i + 2000);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      // Validate required fields
      if (!fullName.trim()) {
        alert('Please enter your full name.');
        return;
      }
      if (!selectedSchool) {
        alert('Please select your school.');
        return;
      }
      if (!selectedClass) {
        alert('Please select your class/form.');
        return;
      }

      // All validations passed, navigate to contact page
      navigate('/contact');
    };

  return (
    <div className='w-screen min-h-screen bg-white'>
        <div className='flex justify-end p-4'>
            <img src={Logo} alt='Logo' className='w-24 h-20'/>
        </div>
        <div className='lg:flex-row flex flex-col-reverse justify-center items-center mb-20'>
            <form className='w-full max-w-lg px-8 md:px-10 lg:px-10 flex flex-col justify-center' onSubmit={handleSubmit}>
                <div className='flex justify-start items-center gap-3 mb-7 lg:-ml-14'>
                    <span className='flex justify-start items-center'>
                        <img src={hugeIcon_1} alt='hugeIcon_1' className='w-10 h-10'/>
                    </span>
                    <p className='text-xl md:text-2xl font-bold'>Basic Student Information</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg md:text-[20px] font-semibold'>Full Name</label>
                        <input 
                          type='text'
                          placeholder='Enter your name' 
                          required  
                          className='border-b-2 w-full border-b-[#00B69D] font-bold py-2' 
                          value={fullName}
                          onChange={e => {
                            setFullName(e.target.value);
                            setStudentInfo(prev => ({ ...prev, fullName: e.target.value }));
                          }}
                        />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <label className='text-lg md:text-[20px] font-semibold'>Date of birth</label>
                        <div className='flex gap-2 md:gap-4 flex-wrap'>
                            {/* Day */}
                            <select
                                name="day"
                                required
                                value={day}
                                onChange={(e) => setDay(e.target.value)}
                                className={`w-1/4 min-w-[90px] border-b-2 border-b-[#00B69D] font-bold outline-none bg-white py-2 ${
                                day === "" ? "text-gray-400" : "text-black"
                                }`}
                            >
                                <option value="" disabled>
                                DD
                                </option>
                                {days.map((d) => (
                                <option key={d} value={d}>
                                    {d}
                                </option>
                                ))}
                            </select>
                            {/* Month */}
                            <select
                                name="month"
                                required
                                value={month}
                                onChange={(e) => setMonth(e.target.value)}
                                className={`w-1/4 min-w-[90px] border-b-2 border-b-[#00B69D] font-bold outline-none bg-white py-2 ${
                                month === "" ? "text-gray-400" : "text-black"
                                }`}
                            >
                                <option value="" disabled>
                                MM
                                </option>
                                {months.map((m) => (
                                <option key={m} value={m}>
                                    {m}
                                </option>
                                ))}
                            </select>
                            {/* Year */}
                            <select
                                name="year"
                                required
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                                className={`w-1/3 min-w-[90px] border-b-2 border-b-[#00B69D] font-bold outline-none bg-white py-2 ${
                                year === "" ? "text-gray-400" : "text-black"
                                }`}
                            >
                                <option value="" disabled>
                                YY
                                </option>
                                {years.map((y) => (
                                <option key={y} value={y}>
                                    {y}
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-semibold text-lg md:text-[20px]'>Gender</span>
                        <div className="flex flex-col">
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="choice"
                                    value="Male"
                                    required
                                    className="sr-only peer"
                                />
                                <span className="w-4 h-4 rounded-full border-2 border-[#00B69D] flex items-center justify-center peer-checked:bg-[#00B69D] peer-checked:border-[#00B69D]"></span>
                                <span>Male</span>
                            </label>
                            <label className="flex items-center space-x-2 cursor-pointer">
                                <input
                                    type="radio"
                                    name="choice"
                                    value="Female"
                                    className="sr-only peer"
                                />
                                <span className="w-4 h-4 rounded-full border-2 border-[#00B69D] flex items-center justify-center peer-checked:bg-[#00B69D] peer-checked:border-[#00B69D]"></span>
                                <span>Female</span>
                            </label>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='school' className='font-semibold text-lg md:text-[20px]'>School Name</label>
                        <span className='flex justify-start items-center border-b-2 w-full border-b-[#00B69D] gap-3'>
                            <select 
                              id='school' 
                              name='school' 
                              required 
                              value={selectedSchool} 
                              onChange={(e) => {
                                setSelectedSchool(e.target.value);
                                setStudentInfo(prev => ({ ...prev, school: e.target.value }));
                              }}  
                              className={`w-full font-bold bg-white py-2 ${selectedSchool === "" ? "text-gray-400" : "text-black"} `}
                            >
                                <option value="" disabled  className='text-gray-400'>Select School</option>
                                <option value="School1">School1</option>
                                <option value="School2">School2</option>
                                <option value="School3">School3</option>
                            </select>
                        </span>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor='class' className='font-semibold text-lg md:text-[20px]'>Class/Form</label>
                        <span className='flex justify-start items-center border-b-2 w-48 md:w-2/3 border-b-[#00B69D] gap-3'>
                            <select 
                              id='class' 
                              name='class' 
                              required 
                              value={selectedClass} 
                              onChange={(e) => {
                                setSelectedClass(e.target.value);
                                setStudentInfo(prev => ({ ...prev, classForm: e.target.value }));
                              }}  
                              className={`w-48 font-bold bg-white py-2 ${selectedClass === "" ? "text-gray-400" : "text-black"} `}
                            >
                                <option value="" disabled  className='text-gray-400'>Select class/form</option>
                                <option value="JSS1">JHS1</option>
                                <option value="JSS2">JHS2</option>
                                <option value="JSS3">JHS3</option>
                            </select>
                        </span>
                    </div>
                    <div>
                        <button
                          type="submit"
                          className='bg-[#1A434C] text-white font-bold w-32 md:w-[150px] h-[50px] rounded-lg mt-4 flex justify-center items-center'
                        >
                           <p>CONTINUE </p>
                            <img src={continueIcon} alt='continueIcon' className='inline w-5 h-7 ml-2'/>
                        </button>
                    </div>
                </div>
            </form>
            <div className='flex justify-center items-center w-full lg:w-[500px] lg:h-[500px] mb-8 lg:mb-0 lg:pl-32'>
                <img src={studentTyping} alt='studentTyping' className='w-60 h-60 lg:w-[500px] lg:[500px] md:w-96 md:h-96 object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default StudentInformation
