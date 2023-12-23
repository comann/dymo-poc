import React from 'react';
import logo from './logo.svg';
import './App.css';
import {example, labelXml} from './example'
const Dymo = require('dymojs')

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Download DYMO Connect for Windows or Mac to print labels from your browser.
          <br />
          <a href="https://www.dymo.com/support?cfid=online-support" target="_blank" rel="noopener noreferrer">Download Software</a>
        </p>
      
        <button onClick={() => {
          new Dymo().print("DYMO LabelWriter 450 Turbo", labelXml)
        }}>Print Example</button>
        
      </header>
    </div>
  );
}

export default App;
