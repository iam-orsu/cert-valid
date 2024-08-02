// src/components/SearchBar.js
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [internId, setInternId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    onSearch(internId, email);
  };

  return (
    <div className="search-container">
      <TextField
        label="Intern ID"
        variant="outlined"
        value={internId}
        onChange={(e) => setInternId(e.target.value)}
        style={{ margin: '10px' }}
      />
      <TextField
        label="Registered Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ margin: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ margin: '10px' }}
      >
        Verify
      </Button>
    </div>
  );
};

export default SearchBar;
