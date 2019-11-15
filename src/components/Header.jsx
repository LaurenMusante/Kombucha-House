import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div>
            <h2>Welcome to Lauren's Kombucha House</h2>
            <div className='card'>
                <div className='card-header'>
                    <h3>What would you like to do?</h3>
                </div>    
            <h1><Link to='/keglist'>View Current Kegs</Link></h1>
            <h1><Link to='/newkegform'>Add Keg</Link></h1>
            </div>
        </div>
    );
}

export default Header;