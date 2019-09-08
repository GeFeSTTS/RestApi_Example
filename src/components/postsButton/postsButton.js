import React from 'react';
import { withRouter } from 'react-router';
import './postsButton.css';

class PostsButton extends React.Component {
    constructor(props) {
        super(props);
        this.redirect = this.redirect.bind(this);
    }

    redirect() {
        this.props.history.push('/posts');
    }

    render() {
        return (
            <div className="redirectButton">
                <button onClick={this.redirect}>Posts</button>
            </div>
        )
    }
}

export default withRouter(PostsButton);