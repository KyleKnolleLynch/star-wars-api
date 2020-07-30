import React, { useState } from 'react';
// import { ReactQueryDevtools } from 'react-query-devtools';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';

import './css/main.css';

const App = () => {
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className='container'>
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <main className='content'>
          {page === 'planets' ? <Planets /> : <People />}
        </main>
      </div>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
};

export default App;
