import React from 'react';

class DeleteButton extends React.Component {
    constructor(props) {
        super(props);
        this.deletePost = this.deletePost.bind(this);
    }

    deletePost() {
        fetch('https://jsonplaceholder.typicode.com/posts/1',
		{
            method: 'DELETE'
        }).then(() => {
            console.log('removed')
        });
    }

    render() {
        return (
            <div className="redirectButton">
                <button onClick={this.deletePost}>Delete</button>
            </div>
        )
    }
}

export default DeleteButton;