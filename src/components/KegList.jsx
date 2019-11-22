import React from 'react';
import Keg from './Keg';
import './KegList.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function KegList(props) {
    console.log(props.kegList);
    return (
        <div>
            <h2>Current Kegs in Our Rotation:</h2>
            <hr />
            <div className='kegList'>
                {props.kegList.map((keg) =>
                    <Keg
                        brand={keg.brand}
                        name={keg.name}
                        price={keg.price}   
                        flavor={keg.flavor}
                        key={keg.id}
                    />
                )}
                <h1><Link to='/'>Home</Link></h1> 
            </div>
        </div>
    );
}
KegList.propTypes = {
    kegList: PropTypes.array
};

export default KegList;