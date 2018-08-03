import React from 'react';
import { render } from 'react-dom';
import './scss/main.scss';

const App = () => {
  return (
    <div className='ko'>
      <h1>Kevin Ortega</h1>
      <p>Fullstack software developer</p>
    </div>
  );
}

render(<App />, document.getElementById('app'));