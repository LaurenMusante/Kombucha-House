import React from 'react';
import NewKegForm from './NewKegForm';
import PropTypes from "prop-types";

class NewKegControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleEditConfirmation = this.handleEditConfirmation.bind(this);
    }

    handleEditConfirmation() {
        this.setState({ formVisibleOnPage: true });
    }

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) { //if the form is visible on the page
            currentlyVisibleContent = <NewKegForm onNewKegCreation={this.props.onNewKegCreation} />; //display the new ticket form
        } else {
            currentlyVisibleContent = <ConfirmationQuestions onEditConfirmation={this.handleEditConfirmation} />; //otherwise display the confirmation questions
        }

        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}
NewKegControl.propTypes = {
    onNewKegCreation: PropTypes.func
};
export default NewKegControl;