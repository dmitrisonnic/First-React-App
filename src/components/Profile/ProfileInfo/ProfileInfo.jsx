import React from 'react';

import profile from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img alt="ava" src="https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png" />
      </div>
      <div className={profile.descriptionBlock}>avatar + description</div>
    </div>
  );
};

export default ProfileInfo;
