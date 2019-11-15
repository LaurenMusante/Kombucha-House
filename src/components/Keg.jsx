import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
    return (
        <div>
            <h3>{props.brand} - {props.name}</h3>
            <p><em>{props.price}</em></p>
            <p>{props.flavor}</p>
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