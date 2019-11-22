import React from 'react';
import './NewKegForm.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewKegForm(props) {
    let _brand = null;
    let _name = null;
    let _price = null;
    let _flavor = null;

    function handleNewKegFormSubmission(event){
        event.preventDefault();
        props.onNewKegCreation({brand: _brand.value, name: _name.value, price: _price.value, flavor: _flavor.value, id: v4() });
        _brand.value = '';
        _name.value = '';
        _price.value = '';
        _flavor.value = '';
    }
    return (
        <div className='form'>
            <h2>What kind of keg?</h2>
            <form className='card form-card' onSubmit={handleNewKegFormSubmission}>
                <input
                    type='text'
                    id='brand'
                    placeholder='Brand'
                    ref={(input) => { _brand = input; }} />
                />
                <input
                    type='text'
                    id='name'
                    placeholder='Name'
                    ref={(input) => { _name = input; }} />
                />
                <input
                    type='text'
                    id='price'
                    placeholder='Price'
                    ref={(input) => { _price = input; }} />
                />
                <input
                    type='text'
                    id='flavor'
                    placeholder='Flavor'
                    ref={(input) => { _flavor = input; }} />
                />
                <hr/>
                <button className='btn add-button'><Link to='/editkeg'>Review Keg </Link></button>
                {/* This button will eventually take me to a 'cofirm or edit keg' page  */}
            </form>
            <h1><Link to='/'>Home</Link></h1> 
        </div>
    );
}

export default NewKegForm;