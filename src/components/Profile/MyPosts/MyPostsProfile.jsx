import React from 'react';
import profile from './MyPosts.module.css';
import Posts from './Post/PostsProfile';

const MyPosts = () => {
  let postData = [
    { id: 1, message: 'Hi, how are you?', likesCount: 2 },
    { id: 2, message: 'It is gitmy first post', likesCount: 11 },
  ];
  return (
    <div className="profile.postBlock">
      <div className={profile.item}>
        <Posts message={postData[0].message} likesCount={postData[0].likesCount} />
        <Posts message={postData[1].message} likesCount={postData[1].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;
