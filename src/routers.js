import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UsersPage from './containers/usersPage/usersPage';
import PostPage from './containers/postPage/postPage';


function Routers() {
    return (
      <Router>
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/posts" component={PostPage} />
      </Router>
    );
}

export default Routers;