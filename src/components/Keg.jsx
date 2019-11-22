import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Keg.css';
import PintButton from './PintButton'

function Keg(props) {
    return (
        <div>
            <h1>{props.brand} - {props.name}</h1>
            <p className='price'><strong>{props.price}</strong></p>
            <p>{props.flavor}</p>
            <PintButton />
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