import React, { useState } from "react";
import MenuItems from "./MenuItems";

export type SubMenu = {
    url: string;
    title: string;
}

const Dropdown = ({submenus, dropdown, depthLevel} : {submenus: SubMenu[], dropdown: Boolean, depthLevel: number}) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index: React.Key) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel}/>
            ))}
        </ul>
    );
};

export default Dropdown