import React from 'react';

class AddPostsButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleUserName = this.handleUserName.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleBody = this.handleBody.bind(this);

    }

    handleUserName(event) {
        event.persist();
        this.setState({username: event.target.value});
    }

    handleTitle(event) {
        event.persist();
        this.setState({title: event.target.value})
    }

    handleBody(event){
        event.persist();
        this.setState({body: event.target.value})
        console.log(this.state)
    }

    postArticle () {
        const postMethod = {
            method: 'POST',
            headers: {
            'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                    username: this.state.username,
                    body: this.state.body,
                    title: this.state.title,
            })
        }
        
        fetch('https://jsonplaceholder.typicode.com/posts', postMethod)
        .then(response => response.json())
        .then(json => console.log(json))
    }

    render() {
        return (
            <div className="redirectButton">
                <form>
                    <p>UserName: <input type="username" onChange={this.handleUserName.bind(this)}/></p>
                    <p>Title: <input type="title" onChange={this.handleTitle.bind(this)}/></p>
                    <p>Body: <textarea name="comment" cols="25" rows="5" onChange={this.handleBody.bind(this)} ></textarea></p>
                </form>
                <button onClick={this.postArticle}>Add new</button>
            </div>
        )
    }
}

export default AddPostsButton;