import React, { useState, useEffect, useRef } from "react";
import Dropdown, { SubMenu } from './Dropdown';
import { Link } from 'react-router-dom';
import { useOnHoverOutside } from "../hooks/useOnHoverOutside";

export type MenuItem = {
    title: string;
    url: string;
    submenu?: SubMenu[];
};

const MenuItems = ({ items, depthLevel }: { items: MenuItem, depthLevel: number }) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef<HTMLLIElement>(null);

    const closeHoverMenu = () => {
        dropdown && setDropdown(false);
    }
    
    const closeDropdown = () => {
        dropdown && setDropdown(false);
    }

    useOnHoverOutside (ref, closeHoverMenu);

    return (
        <li className="menu-items" ref={ref} onClick={closeDropdown}>
            {items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        onMouseOver={() => setDropdown(true)}>
                        {items.title}{' '}
                        {depthLevel > 0 ? <span> &raquo;</span> : <span className="arrow" />}
                    </button>
                    {dropdown && <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />}
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;