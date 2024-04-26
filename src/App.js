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
        <h1>Հրավեր.am</h1>
        <a href=""><FontAwesomeIcon icon={faInstagram} style={{'color':'black', 'fontSize': '30px'}}/></a>
        <div>
          <div className="header-info">
            <p>+374 99123456</p>
          </div>
        </div>
      </div>
        <div className='logo'> 
          <img src={'./images/7c993958ea6f4ace9fa595722c742326.png'} width={'20%'}/>
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
