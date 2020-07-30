import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Person from './Person';

const BASE_URL = 'https://swapi.dev/api/';

const fetchPeople = async (key, page) => {
  const res = await fetch(`${BASE_URL}people/?page=${page}`);
  return res.json();
};

const People = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['people', page],
    fetchPeople
  );

  return (
    <div className='content-data'>
      <h2>People</h2>
      {status === 'loading' && <div>Loading data now...</div>}

      {status === 'success' && (
        <>
          <button
            onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span>{page}</span>
          <button
            onClick={() =>
              setPage((prevPage) =>
                !latestData || !latestData.next ? prevPage : prevPage + 1
              )
            }
            disabled={!latestData || !latestData.next}
          >
            Next Page
          </button>
          <div>
            {resolvedData.results.map((person) => (
              <Person person={person} key={person.name} />
            ))}
          </div>
        </>
      )}

      {status === 'error' && <div>Error fetching data</div>}
    </div>
  );
};

export default People;
