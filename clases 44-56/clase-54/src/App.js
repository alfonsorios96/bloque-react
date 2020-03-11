import React from 'react';
import logo from './logo.svg';
import './App.css';
import Key from "./components/keys";

function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <Key numbers={ numbers }/>
    </div>
  );
}

export default App;
