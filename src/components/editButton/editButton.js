import React from 'react';

class EditButton extends React.Component {
    constructor(props) {
        super(props);
        this.editPost = this.editPost.bind(this);
    }

    handleBody(event){
        event.persist();
        this.setState({body: event.target.value})
    }

    editPost() {
        const putMethod = {
            method: 'PUT',
            headers: {
            'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(this.state.body)
        }
    
        fetch('https://jsonplaceholder.typicode.com/posts/1', putMethod)
        .then(response => response.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div className="redirectButton">
                <form>
                    <p>Body: <textarea name="comment" cols="25" rows="5" onChange={this.handleBody.bind(this)} ></textarea></p>
                </form>
                <button onClick={this.editPost}>Edit</button>
            </div>
        )
    }
}

export default EditButton;