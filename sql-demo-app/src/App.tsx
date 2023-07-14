import React from 'react';

import Demo from './components/demo';
import SQLCommand from './components/sqlCommand';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>SQL Demo App</h1>
      <SQLCommand />
      <Demo />
    </div>
  );
}

export default App;
