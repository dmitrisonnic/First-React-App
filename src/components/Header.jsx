import React from 'react';
import './Header.css';
const Header = () => {
  return (
    <header className="header">
      <img src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300" />
      <div>
        <a href="#">home</a>
        <a href="#">News Feed</a>
        <a href="#">Mesage</a>
      </div>
    </header>
  );
};
export default Header;
