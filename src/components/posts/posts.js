import React from 'react';
import { withRouter } from 'react-router';
import "./posts.css"

class Posts extends React.Component {

	constructor() {
		super();
        this.state = {users: []};
        // this.redirect = this.redirect.bind(this);
		this.headers = [
			{ key: 'userId', label: 'User ID' },
			{ key: 'title', label: 'Title' },
        ];
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				return response.json();
			}).then(result => {
				this.setState({
					users:result
				});
			});
    }
    
	render() {                            
		return (
			<div className="tablePosts">
			<table>
				<thead>
					<tr>
					{
						this.headers.map(function(h) {
							return (
								<th key = {h.key}>{h.label}</th>
							)
						})
					}
					</tr>
				</thead>
				<tbody>
					{
						this.state.users.map(function(item, key) {             
						return (
								<tr key = {key}>
								  <td>{item.userId}</td>
								  <td>{item.title}</td>
								</tr>
							)
						}, this)
					}
				</tbody>
			</table>
			</div>
		)
	}
}

export default withRouter(Posts);