import { useState } from 'react';
import BottomNavigation from './components/BottomNavigation';
import Section4 from './components/SectionFour';
import PlaceholderSection from './components/PlaceholderSection';
import Section5 from './components/SectionFive';
import Section6 from './components/SectionSix';
import type { FormData, UserProfile, SpiritualResponse } from './types';

function App() {
  const [currentSection, setCurrentSection] = useState<number>(4);

  const userProfile: UserProfile = {
    name: 'Stacy Stark',
    school: 'Achimota Sch',
    form: 'Form 3',
    phone: '+233 204787472',
    email: 'stacy012stk@gmail.com',
    initial: 'G',
  };

  const [formData, setFormData] = useState<FormData>({
    currentSection: 4,
    spiritualResponse: {
      responses: [],
      otherResponse: '',
      followUp: '',
      followUpMethod: [],
      otherFollowUpMethod: '',
    },
  });

  const handleSpiritualResponseChange = (data: SpiritualResponse) => {
    setFormData((prev) => ({
      ...prev,
      spiritualResponse: data,
    }));
  };

  const handleContinue = () => {
    setCurrentSection((prev) => (prev < 6 ? prev + 1 : prev));
  };

  const handleSectionChange = (section: number) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 1:
        return (
          <PlaceholderSection
            sectionNumber={1}
            title="Home"
            onContinue={handleContinue}
          />
        );
      case 2:
        return (
          <PlaceholderSection
            sectionNumber={2}
            title="Profile"
            onContinue={handleContinue}
          />
        );
      case 3:
        return (
          <PlaceholderSection
            sectionNumber={3}
            title="Contact Information"
            onContinue={handleContinue}
          />
        );
      case 4:
        return (
          <Section4
            user={userProfile}
            data={formData.spiritualResponse}
            onChange={handleSpiritualResponseChange}
            onContinue={handleContinue}
          />
        );
      case 5:
        return (
          <Section5
            onContinue={handleContinue} // ✅ Correctly passed
          />
        );
      case 6:
        return (
          <Section6
            user={userProfile}
            spiritualData={formData.spiritualResponse}
            onSubmit={() => {
              alert('Form submitted successfully! Thank you for your response.');
            }}
          />
        );
      default:
        return (
          <PlaceholderSection
            sectionNumber={0}
            title="Unknown Section"
            onContinue={handleContinue}
          />
        );
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Full screen container with no scrolling */}
      <main className="h-full w-full">
        {renderSection()}
      </main>
      {/* <BottomNavigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      /> */}
    </div>
  );
}

export default App;