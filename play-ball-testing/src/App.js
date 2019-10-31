import React from 'react';
import logo from './logo.svg';
import './App.css';
import Display from './components/Display';

function App() {

  // const [ball, setBall] = useState(0);
  // const [strike, setStrike] = useState(0);
  // const [hit, setHit] = useState(0);
  // const [faul, setFaul] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Display></Display>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
