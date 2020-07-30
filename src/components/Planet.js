import React from 'react';

const Planet = ({ planet }) => {
  return (
    <div className='card'>
      <h3>{planet.name}</h3>
      <p>
        <strong>Population:</strong> {planet.population}
      </p>
      <p>
        <strong>Climate:</strong> {planet.climate}
      </p>
      <p>
        <strong>Terrain:</strong> {planet.terrain}
      </p>
    </div>
  );
};

export default Planet;
