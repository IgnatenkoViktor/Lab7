import React from 'react';
import './SideBar.css';
import Menu from './Menu';

const SideBar = () => {
  const sideBarMenuList = [
    { text: 'Home', url: 'http://localhost:3000/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
    { text: 'Google', url: 'https://google.com' },
  ];

  return (
    <div className="sidebar">
      <Menu list={sideBarMenuList} />
    </div>
  );
};

export default SideBar;