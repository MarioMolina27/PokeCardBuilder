import { Link } from "react-router-dom";
import './Navbar.css';
import {useNavbar} from '../../../hooks/useNavbar.js'

export default function Navbar() {
    const {activeLink, setActiveLink} = useNavbar()

    const handleLinkClick = (link) => {
        setActiveLink(link)
    };

    return (
        <nav className="navbar w-100 pt-4 d-flex mb-2 justify-content-end">
           <div className="nav-container me-4"> 
                <Link
                    to="/"
                    className={`navbar__link me-4 ${activeLink === "/" ? "nav-active" : ""}`}
                    onClick={() => handleLinkClick("/")}>
                    HOME
                </Link>

                <Link
                    to="/editor"
                    className={`navbar__link ${activeLink === "/editor" ? "nav-active" : ""}`}
                    onClick={() => handleLinkClick("/editor")}>
                    EDITOR
                </Link>
            </div>
        </nav>
    );
}


