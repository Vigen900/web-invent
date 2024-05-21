import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Store from './components/store';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="header-parent">
        <h1>InventYou.am</h1>
        <a href=""><FontAwesomeIcon icon={faInstagram} style={{'color':'black', 'fontSize': '30px'}}/></a>
        <div>
          <div className="header-info">
            <p>+374 99123456</p>
          </div>
        </div>
      </div>
        <div className='body-inv'>
          <div className='logo'>             
            <p className='p-text'>
              Սիրով պատրաստում ենք վեբ հրավիրատոմսեր 3 - 5 օրում
            </p>
            <ul>
              <li>Հարսանիք</li>
              <li>Նշանադրություն</li>
              <li>Ծնունդ</li>
              <li>Ատամհատիկ</li>
              <li>Մկրտություն</li>
            </ul>
          </div>
        </div>
        <div className='red-butt'>
          <Link to={'/store'}>
            <button className='button-buy'>Գտնել</button>
          </Link>
        </div>
    </div>
  );
}
  

export default App;
