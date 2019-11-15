import React from 'react';
import './NewKegForm.css';
import { Link } from 'react-router-dom';

function NewKegForm() {
    return (
        <div className='form'>
            <h2>What kind of keg?</h2>
            <form className='card form-card'>
                <input
                    type='text'
                    id='brand'
                    placeholder='Brand'
                />
                <input
                    type='text'
                    id='name'
                    placeholder='Name'
                />
                <input
                    type='text'
                    id='price'
                    placeholder='Price'
                />
                <input
                    type='text'
                    id='flavor'
                    placeholder='Flavor'
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