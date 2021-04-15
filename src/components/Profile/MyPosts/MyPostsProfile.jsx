import React from 'react';
import profile from './MyPosts.module.css';
import Posts from './Post/PostsProfile';

const MyPosts = () => {
  return (
    <div>
      <div className={profile.item}>
        <Posts message="Hi, how are you?" />
        <Posts message="It is my first post" />
      </div>
    </div>
  );
};

export default MyPosts;
