import React from 'react';


class UserPost extends React.Component {

	constructor(props) {
		super(props);
		this.state = {users: []};
		this.headers = [
            { key: 'postId', label: 'Post ID' },
			{ key: 'id', label: 'ID' },
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
			{ key: 'body', label: 'Body' }
		];
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
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
			<div className="tableUsers">
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
								  <td>{item.postId}</td>
                                  <td>{item.id}</td>
								  <td>{item.name}</td>
                                  <td>{item.email}</td>
								  <td>{item.body}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
			</div>
		)
	}
}


export default UserPost;