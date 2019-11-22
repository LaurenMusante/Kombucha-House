import React from 'react';
import Keg from './Keg';
import './KegList.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// var masterKegList = [
//     {
//         brand: 'Brew Doctor',
//         name: 'Clear Mind',
//         price: '$4.00',
//         flavor: 'Rosemary. Peppermint, and Sage'
//     },
//     {
//         brand: 'Brew Doctor',
//         name: 'Vanilla Oak',
//         price:'$4.50',
//         flavor: 'Vanilla Bean, Chicory, Oak Bark'
//     },
//     {
//         brand: 'Brew Doctor',
//         name: 'Mint Lemonade',
//         price: '$4.00',
//         flavor: 'Sweet Lemon, Peppermint'
//     },
//     {
//         brand: 'Health-Ade',
//         name: 'Grapefruit',
//         price: '$5.00',
//         flavor: 'Grapefruit, Citrus'
//     },
//     {
//         brand: 'Health-Ade',
//         name: 'Bubbly Rose',
//         price: '$5.00',
//         flavor: 'Rose, Mangosteen, Hawthorn Berry'
//     }
// ];


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