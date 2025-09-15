import React from 'react';

interface PlaceholderSectionProps {
  sectionNumber: number;
  title: string;
  onContinue: () => void;
}

const PlaceholderSection: React.FC<PlaceholderSectionProps> = ({
  sectionNumber,
  title,
  onContinue,
}) => {
  return (
    <div className="min-h-screen bg-gray-50 pb-36 flex items-center justify-center overflow-y-auto">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-teal-600">{sectionNumber}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 mb-8">
            This section is ready for your content. Click continue to proceed to the next section.
          </p>
          <button
            onClick={onContinue}
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderSection;