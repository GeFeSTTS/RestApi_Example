import React from 'react';
import { withRouter } from 'react-router';

class DetailsButton extends React.Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        this.props.history.push('/details');
    }

    render() {
        return (
            <div className="redirectButton">
                <button onClick={this.redirect}>Details</button>
            </div>
        )
    }
}

export default withRouter(DetailsButton);
