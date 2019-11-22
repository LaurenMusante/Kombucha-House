import React from 'react';

class PintButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 124
        };
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    handleDecrement() {
        let newCount = this.state.count - 1;
        this.setState({
            count: newCount
        })
    };
    render() {
        return (
            <div>
                <p> Pints Left: {this.state.count}</p>
                <button onClick={this.handleDecrement}> Sell Pint </button>
            </div>
        );
    }
}

export default PintButton;