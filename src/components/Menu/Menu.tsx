import React, { useState } from "react";
import './Menu.css';
import { slide as Menu } from 'react-burger-menu';

type MenuProps = {
  pageWrapId: string;
  outerContainerId: string;
};
 
export const BurgerMenu = ({ pageWrapId, outerContainerId }: MenuProps) => {
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);

  return (
    <Menu>
      <a id="home" className="menu-item" href="/pages/home">Home</a>
      <a id="about" className="menu-item" href="/pages/about">
        About
        {aboutOpen ? "placeholder open" : "placeholder closed"}
      </a>
      <a id="programs" className="menu-item" href="/pages/programs">Programs</a>
      <a id="events" className="menu-item" href="/pages/events">Events</a>
      <a id="involvement" className="menu-item" href="/pages/involvement">Involvement</a>
      <a id="contact" className="menu-item" href="/pages/contact">Contact</a>
    </Menu>
  );
};
