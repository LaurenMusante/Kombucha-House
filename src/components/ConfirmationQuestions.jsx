import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props) {
    return (
        <div>
            <p>Is this the keg you wanna add?</p>
            <button onClick={props.onEditConfirmation}>WELL DUH</button>
        </div>
    );
}

ConfirmationQuestions.propTypes = {
    onEditConfirmation: PropTypes.func
};

export default ConfirmationQuestions;