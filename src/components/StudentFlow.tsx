import { useState } from 'react';
import StudentInformation from '../pages/StudentInformation';
import ContactDetails from '../pages/ContactDetails';
// import { StudentInfo } from '../types/StudentInfo';

export default function StudentFlow() {
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    fullName: '',
    school: '',
    classForm: '',
  });

  return (
    <div>
      <StudentInformation setStudentInfo={setStudentInfo} />
      <ContactDetails studentInfo={studentInfo} />
    </div>
  );
}

export interface StudentInfo {
  fullName: string;
  school: string;
  classForm: string;
}