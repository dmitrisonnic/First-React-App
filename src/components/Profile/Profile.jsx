import React from 'react';
import MyPosts from './MyPosts/MyPostsProfile';

import profile from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
      </div>
      <div>avatar + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
