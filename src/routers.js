import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UsersPage from './containers/usersPage/usersPage';
import PostsPage from './containers/postsPage/postsPage';
import DetailsPage from './containers/detailsPage/detailsPage';
import PostPage from './containers/postPage/postPage';


function Routers() {
    return (
      <Router>
          <Route exact path="/users" component={UsersPage} />
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/details" component={DetailsPage} />
          <Route exact path="/post" component={PostPage} />
      </Router>
    );
}

export default Routers;