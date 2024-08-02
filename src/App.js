// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Certificate from './components/Certificate';

// Data for verification
const certificateData = {
  'OEC2001-temp@temp.com': {
    name: 'Vamsi Krishna',
    college: 'LLMNR University',
    internId: 'OEC2001',
    year: '2nd Year',
    course: 'Java Virtual Internship',
    duration: 'June 15 to July 15',
  },

  'OEC2002-nilesh@temp.com': {
    name: 'Nilesh Kumar',
    college: 'Annamarchya Institute Of Technology And Sciences',
    internId: 'OEC2002',
    year: '4th Year',
    course: 'Java Virtual Internship',
    duration: 'June 15 2024 to July 15 2024',
  },
  // Add other students' data here
};

const App = () => {
  const [currentCertificate, setCurrentCertificate] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('');

  const handleSearch = (internId, email) => {
    setVerificationStatus('Loading Data...');
    setCurrentCertificate(null); // Clear previous results
    setTimeout(() => {
      setVerificationStatus('Verifying Your ID...');
      setTimeout(() => {
        const key = `${internId}-${email}`;
        const data = certificateData[key];
        if (data) {
          setVerificationStatus('Verification Complete');
          setCurrentCertificate(data);
        } else {
          setVerificationStatus('Intern data not found');
        }
      }, 2000);
    }, 2000);
  };

  return (
    <div className="App">
      <img
        src="https://orsuevilcorp.com/wp-content/uploads/2024/06/20240623_080322-373x373.png"
        alt="Orsu Evilcorp Logo"
        className="logo"
      />
      <h2>Orsu Evilcorp Certificate Verification</h2>
      <SearchBar onSearch={handleSearch} />
      {verificationStatus && (
        <p
          className={`status-message ${
            verificationStatus.includes('Complete')
              ? 'success'
              : verificationStatus.includes('not found')
              ? 'error'
              : 'loading'
          }`}
        >
          {verificationStatus}
        </p>
      )}
      {currentCertificate && (
        <Certificate certificateData={currentCertificate} />
      )}
    </div>
  );
};

export default App;
