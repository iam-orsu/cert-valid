// src/components/Certificate.js
import React from 'react';
import { CheckCircleOutline as CheckCircleIcon } from '@mui/icons-material';

const Certificate = ({ certificateData }) => {
  if (!certificateData) return null;

  return (
    <div className="certificate-card">
      <div className="success-message">
        <CheckCircleIcon style={{ fontSize: '48px', color: '#4CAF50' }} />
        <h2>Internship Completion is Successfully Verified!</h2>
      </div>
      <div className="certificate-details">
        <p><strong>Name:</strong> {certificateData.name}</p>
        <p><strong>Intern ID:</strong> {certificateData.internId}</p>
        <p><strong>College:</strong> {certificateData.college}</p>
        <p><strong>Year Of Study:</strong> {certificateData.year}</p>
        <p><strong>Domain:</strong> {certificateData.course}</p>
        <p><strong>Duration:</strong> {certificateData.duration}</p>
      </div>
    </div>
  );
};

export default Certificate;
