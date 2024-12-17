import React, { useState } from 'react';

const AreaFilter = () => {
  // Sample data for areas
  const areas = [
    { name: 'Area 1', population: 5000, size: 100 },
    { name: 'Area 2', population: 10000, size: 200 },
    { name: 'Area 3', population: 15000, size: 300 },
    { name: 'Area 4', population: 20000, size: 400 }
  ];

  // State to store filtered areas and population criteria
  const [filteredAreas, setFilteredAreas] = useState(areas);
  const [minPopulation, setMinPopulation] = useState(0);

  // Handle filtering based on minimum population
  const handleFilterChange = (e) => {
    const value = e.target.value;
    setMinPopulation(value);
    setFilteredAreas(areas.filter(area => area.population >= value));
  };

  return (
    <div>
      <h1>Filter Areas</h1>
      <label htmlFor="population">Minimum Population:</label>
      <input
        type="number"
        id="population"
        value={minPopulation}
        onChange={handleFilterChange}
      />
      
      <h2>Filtered Areas</h2>
      <ul>
        {filteredAreas.map((area, index) => (
          <li key={index}>
            {area.name} - Population: {area.population} - Size: {area.size} km²
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AreaFilter;
