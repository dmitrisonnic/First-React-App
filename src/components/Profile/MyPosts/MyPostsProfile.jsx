import React from 'react';
import profile from './MyPosts.module.css';
import Posts from './Post/PostsProfile';

const MyPosts = () => {
  return (
    <div className="profile.postBlock">
      <div className={profile.item}>
        <Posts message="Hi, how are you?  " likesCount="2" />
        <Posts message="It is gitmy first post" likesCount="3" />
        <Posts />
      </div>
    </div>
  );
};

export default MyPosts;
