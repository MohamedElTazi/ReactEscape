// Header.tsx
import React from 'react';
import '../App.css';

function Header() {
  return (
    <div id='main'>
      <div className='name'>
        <h2><span>Osez</span> l'aventure, </h2>
        <h2><span>défiez</span> le mystère</h2>
        <div className='header-btns'>
          <a href='contact' className='header-btn'>Reserver</a>
        </div>  
      </div>
    </div>
  );
}

export default Header;
