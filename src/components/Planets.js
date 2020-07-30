import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import Planet from './Planet';

const BASE_URL = 'https://swapi.dev/api/';

const fetchPlanets = async (key, page) => {
  const res = await fetch(`${BASE_URL}planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { resolvedData, latestData, status } = usePaginatedQuery(
    ['planets', page],
    fetchPlanets
  );

  return (
    <div className='content-data'>
      <h2>Planets</h2>

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
            {resolvedData.results.map((planet) => (
              <Planet planet={planet} key={planet.name} />
            ))}
          </div>
        </>
      )}
      {status === 'error' && <div>Error fetching data</div>}
    </div>
  );
};

export default Planets;
