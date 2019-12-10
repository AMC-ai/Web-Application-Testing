import React, { useState } from 'react';

import './App.css';
import Dashboard from './components/Dashboard';

function App(props) {

  const [ball, setBall] = useState(0);
  // const [strike, setStrike] = useState(0);
  // const [hit, setHit] = useState(0);
  // const [faul, setFaul] = useState(0);

  return (
    <div className="App">
      <header className="App-header">

        <Dashboard>

        </Dashboard>

      </header>
    </div>
  );
}

export default App;
