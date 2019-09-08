import React from 'react';
import './postPage.css';

import {
  UserPost, 
  EditButton,
  DeleteButton
} from '../../components';

const PostPage = () => (
  <div className="postPage">
      <UserPost />
      <div className="buttons">
        <EditButton />
        <DeleteButton />
      </div>
  </div>
);

export default PostPage;