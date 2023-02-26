import React, { useState, useEffect, useRef } from "react";
import Dropdown, { SubMenu } from './Dropdown';
import { Link } from 'react-router-dom';

export type MenuItem = {
    title: string;
    url: string;
    submenu?: SubMenu[];
};

const MenuItems = ({ items, depthLevel }: { items: MenuItem, depthLevel: number }) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef<HTMLLIElement>(null);

    useEffect(() => {
        const handler = (event: TouchEvent | MouseEvent) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [dropdown])
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    }
    const closeDropdown = () => {
        dropdown && setDropdown(false);
    }
    return (
        <li className="menu-items" ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={closeDropdown}>
            {items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{' '}
                        {depthLevel > 0 ? <span> &raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};

export default MenuItems;