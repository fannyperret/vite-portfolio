import { NavLink } from "react-router";

export function Navbar() {
    return (
        <nav>
            <NavLink to="/" end>
                About
            </NavLink>
            <NavLink to="/skills" end>
                Skills
            </NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    );
}