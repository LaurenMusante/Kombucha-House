import React from 'react';
import { Link } from 'react-router-dom';


function EditKeg() {
    return (
        <div>
            <h2>Does this look correct?</h2>
            <hr/>
            <h1><Link to='/'>Yes, Add Keg!</Link></h1>
            {/* the above button will eventually take me to the KegList component, updated to add the new keg */}
            <h1><Link to='/newkegform'>No, Edit Keg</Link></h1>
        </div>
    );
}

export default EditKeg;