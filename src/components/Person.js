import React from 'react';

const Person = ({ person }) => {
  return (
    <div className='card'>
      <h3>{person.name}</h3>
      <p>
        <strong>Gender:</strong> {person.gender}
      </p>
      <p>
        <strong>Height:</strong> {person.height}
        <span>cm</span>
      </p>
      <p>
        <strong>Weight:</strong> {person.mass}
        <span>kg</span>
      </p>
      <p>
        <strong>Eye Color:</strong> {person.eye_color}
      </p>
      <p>
        <strong>Birth Year:</strong> {person.birth_year}
      </p>
    </div>
  );
};

export default Person;
