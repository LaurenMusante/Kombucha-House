import React from 'react';
import Keg from './Keg';

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
            <hr />
            {masterKegList.map((keg, index) =>
                <Keg
                    brand={keg.brand}
                    name={keg.name}
                    price={keg.price}
                    flavor={keg.flavor}
                    key={index}
                />
            )}
        </div>
    );
}

export default KegList;