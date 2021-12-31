import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <div id='navbar'>
        <img id='lightbulb' src='/Icon/Light bulb/Dark bg.png' />
        <div id='links'>
            <Link to= '/dashboard'>Dashboard</Link>
            <Link to= '/milestones'>Milestones</Link>
        </div>

        
      </div>
    );
  };
  
  export default Navbar;