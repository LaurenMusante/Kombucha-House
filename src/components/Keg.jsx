import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Keg.css';

function Keg(props) {
    return (
        <div>
            <h1>{props.brand} - {props.name}</h1>
            <p className='price'><strong>{props.price}</strong></p>
            <p>{props.flavor}</p>
            <button className='btn keg-button'><Link to='/'>Sell Pint </Link></button>
            <hr />
        </div>
    );
}

Keg.propTypes = {
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    flavor: PropTypes.string
};

export default Keg;