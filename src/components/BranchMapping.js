import React, { useState } from 'react';
import axios from 'axios';

const BranchMapping = () => {
  const [location, setLocation] = useState('');
  const [branches, setBranches] = useState([]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/api/search?location=${location}`);
        console.log(response.data);
      setBranches(response.data.branches);
    } catch (error) {
      console.error('Error fetching branch data:', error);
    }
  };

  return (
    <div>
      <h1>Bank Branch Mapping</h1>
      <div>
        <input
          type="text"
          placeholder="Enter location or pincode"
          value={location}
          onChange={handleLocationChange}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Branches:</h2>
        <ul>
          {branches.map((branch) => (
            <li key={branch.id}>
              <strong>{branch.brand}</strong> - {branch.facilities.join(', ')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BranchMapping;
