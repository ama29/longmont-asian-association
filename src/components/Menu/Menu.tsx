import React from 'react';
import './Menu.css';
import { slide as Menu } from 'react-burger-menu';

type MenuProps = {
  pageWrapId: string;
  outerContainerId: string;
};

export const BurgerMenu = ({ pageWrapId, outerContainerId }: MenuProps) => {
  return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/Components/About/About.tsx">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
  );
};
