import React from 'react';
import profile from './MyPosts.module.css';
import Posts from './Post/PostsProfile';

const MyPosts = props => {
  let postelement = props.postData.map(post => <Posts message={post.message} likesCount={post.likesCount} />);
  return (
    <div className="profile.postBlock">
      <div className={profile.item}>{postelement}</div>
    </div>
  );
};

export default MyPosts;
