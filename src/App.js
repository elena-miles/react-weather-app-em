import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import Weather from './Weather.js';
import './Weather.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>

        <footer className="App-footer">
        This project is coded by <a href='https://github.com/elena-miles' target='_blank' rel="noreferrer">Elena Miles</a> and is open-sourced on{" "}<a href='https://github.com/elena-miles/react-weather-app-em' target='_blank' rel="noreferrer">Github</a> and hosted on {" "}<a href='https://app.netlify.com/projects/react-weather-app-elena' target='_blank' rel="noreferrer">Netlify</a>.
        </footer>
      </div>
    </div>
  );
}

export default App;
