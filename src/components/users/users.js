import React from 'react';
import './users.css';

class Users extends React.Component {

	constructor(props) {
		super(props);
		this.state = {users: []};
		this.headers = [
			{ key: 'id', label: 'ID' },
			{ key: 'name', label: 'Name' },
			{ key: 'username', label: 'Username' }
		];
	}
	
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
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
								  <td>{item.id}</td>
								  <td>{item.name}</td>
								  <td>{item.username}</td>
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


export default Users;