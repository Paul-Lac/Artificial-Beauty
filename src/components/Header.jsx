import { Link } from "react-router-dom";

import "./Header.css"

function Header() {

    return (
        <nav className="header">
            <Link to="/">
                <img id="logo" src="public\logo3.png" alt="logo" />
            </Link>
            <ul className="header-menu">
                <li>
                    <Link to="/" className="menu-links">Home</Link>
                </li>
                <li>
                    <Link to="/apropos" className="menu-links">A propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;