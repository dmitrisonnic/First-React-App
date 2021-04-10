import React from 'react';
import { Button, Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="header">
      <div>
        <img src="https://cdn.dribbble.com/users/10882/screenshots/15172621/media/cd2246d5d0f54f9a4316bd4d276764b2.png?compress=1&resize=400x300" />
      </div>
      <div className="header_navigation">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button type="button" class="btn btn-primary">
          Primary
        </Button>
        <a href="#">home</a>
        <a href="#">News Feed</a>
        <a href="#">Mesage</a>
      </div>
    </div>
  );
};
export default Header;
