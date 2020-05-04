import React from 'react';
import logo from './logo.svg';
import grape from './grape.svg'
import './App.css';
import Dropzone from './Dropzone'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Grape
      <img src={grape} className="App-logo" alt="logo" />
      </header>
      <div className="Dropzone">
      <Dropzone></Dropzone>
      </div>      
    </div>
  );
}

export default App;
