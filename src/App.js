import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Store from './components/store';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Link to={'/store'}>
        <button>gnel</button>
      </Link>
    </div>
  );
}
  

export default App;
