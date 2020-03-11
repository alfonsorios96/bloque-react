import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dumb from "./components/dumb";
import Smart from "./components/smart";

function App() {
  const friends = ['Hugo', 'Paco', 'Luis'];
  const other_friends = ['Ramirito', 'Daniel' ]
  
  return (
    
    <div className="App">
      <Smart friends={ friends }/>
      <Smart friends={ other_friends } />
      <Dumb/>
    </div>
  );
}

export default App;
