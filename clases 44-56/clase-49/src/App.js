import React from 'react';
import './App.css';
import ClassProps from './components/class-props'
import FunctionProps from './components/function-props';

function App() {
  return (
    <div className="App">
        <ClassProps name="Sam" lastName="Smith" age="12" />
        <FunctionProps name="Samantha" lastName="Smith" age="21" />
    </div>
  );
}

export default App;
