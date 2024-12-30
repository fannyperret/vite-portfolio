import { NavLink } from "react-router"
import data from '../data/data.json'

interface Nav {
    url: string;
    name: string;
}

export function Navbar() {
    const menu: Nav[] = data.menu;

    return (
        <nav>
            {menu.map(( nav, key ) => (
                <NavLink key={key} to={nav.url}>
                    {nav.name}
                </NavLink>
            ))}
        </nav>
    );
}