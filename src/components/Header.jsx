import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>TEST!</h1>
            <h1><Link to='/keglist'>View Current Kegs</Link></h1>
            <h1><Link to='/newkegform'>Add Keg</Link></h1>
        </div>
    );
}

export default Header;