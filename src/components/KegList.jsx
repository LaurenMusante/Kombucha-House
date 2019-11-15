import React from 'react';
import Keg from './Keg';
import './KegList.css'
import { Link } from 'react-router-dom';

var masterKegList = [
    {
        brand: 'Brew Doctor',
        name: 'Clear Mind',
        price: '$4',
        flavor: 'Rosemary. Peppermint, and Sage'
    },
    {
        brand: 'Brew Doctor',
        name: 'Vanilla Oak',
        price:'$4',
        flavor: 'Vanilla Bean, Chicory, Oak Bark'
    },
    {
        brand: 'Brew Doctor',
        name: 'Mint Lemonade',
        price: '$4',
        flavor: 'Sweet Lemon, Peppermint'
    }
];


function KegList() {
    return (
        <div>
            <h2>Current Kegs in Our Rotation:</h2>
            <hr />
            <div className='kegList'>
            {masterKegList.map((keg, index) =>
                <Keg
                    brand={keg.brand}
                    name={keg.name}
                    price={keg.price}   
                    flavor={keg.flavor}
                    key={index}
                />
            )}
                <h1><Link to='/'>Home</Link></h1> 
            </div>
        </div>
    );
}

export default KegList;