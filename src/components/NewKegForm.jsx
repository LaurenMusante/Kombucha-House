import React from 'react';

function NewKegForm() {
    return (
        <div>
            <form>
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
                <textarea
                    type='text'
                    id='price'
                    placeholder='Price'
                />
                <textarea
                    type='text'
                    id='flavor'
                    placeholder='Flavor'
                />
                <button type='submit'>Add Keg!</button>
            </form>
        </div>
    );
}

export default NewKegForm;