import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import StudentInformation from './pages/StudentInformation';
import ContactDetails from './pages/ContactDetails';
import NavigationBar from './components/NavigationBar';

type StudentInfo = {
  fullName: string;
  school: string;
  classForm: string;
};

const AppContent: React.FC = () => {
  const [studentInfo, setStudentInfo] = useState<StudentInfo>({
    fullName: '',
    school: '',
    classForm: '',
  });

  const location = useLocation();
  const [activePage, setActivePage] = useState<'home' | 'info' | 'contact' | 'note1' | 'note2'>('home');

  useEffect(() => {
    // Map routes to activePage values
    switch (location.pathname) {
      case '/':
        setActivePage('info');
        break;
      case '/contact':
        setActivePage('contact');
        break;
      // Add more cases as you add more routes/pages
      default:
        setActivePage('info');
    }
  }, [location.pathname]);

  return (
    <div>
      <NavigationBar activePage={activePage} className='fixed bottom-0 right-0 left-0' />
      <Routes>
        <Route
          path="/"
          element={<StudentInformation setStudentInfo={setStudentInfo} />}
        />
        <Route
          path="/contact"
          element={<ContactDetails studentInfo={studentInfo} />}
        />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;