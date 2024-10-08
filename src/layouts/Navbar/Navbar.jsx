import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
import LogoImg from "../../assets/images/Logo.png";

const Navbar = () => {
    let menuref = useRef(null);
    let crossref = useRef(null);

    const showExtra = () => {
        menuref.current.style.display = "none";
        crossref.current.style.display = "block";
    };

    const showLess = () => {
        menuref.current.style.display = "block";
        crossref.current.style.display = "none";
    };

    const hideMenu = () => {
        crossref.current.style.display = "none";
        menuref.current.style.display = "block";
    };

    return (
        <div className="header">
            <div className="upperheader">
                <div className="logo">
                    <img
                        src={LogoImg}
                        alt="Ashram-logo"
                        className="logo"
                    />
                </div>
                <div className="ashram_name">
                    <h2>Haridasnagar Sri Sri Ramakrishna Ashram</h2>
                    <h4>Established : 2001</h4>
                </div>
            </div>
            <div className="lowerheader">
                <ul className="links">
                    <li>
                        <Link to="/" className="header_link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="header_link">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/activities" className="header_link">
                            Activities
                        </Link>
                    </li>
                    <li>
                        <Link to="/news_event" className="header_link">
                            News Event
                        </Link>
                    </li>
                    <li>
                        <Link to="/media" className="header_link">
                            Media
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="header_link">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/donate" className="header_link">
                            Donation
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="lowerheader_hidden">
                <div className="menu_logo">
                    <img
                        src="./image/icons8-menu-50.png"
                        alt="menu"
                        className="menu_logo_img"
                        onClick={showExtra}
                        ref={menuref}
                    />
                </div>
                <div className="menu_option" ref={crossref} style={{ display: 'none' }}>
                    <div className="menu_logo">
                        <img
                            src="./image/icons8-cross-48.png"
                            alt="menu"
                            className="menu_logo_img"
                            // width={30}
                            onClick={showLess}
                            
                        />
                    </div>
                    <ul className="menu_links" onClick={hideMenu}>
                        <li>
                            <Link to="/" className="header_hidden_link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="header_hidden_link">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/activities" className="header_hidden_link">
                                Activities
                            </Link>
                        </li>
                        <li>
                            <Link to="/news_event" className="header_hidden_link">
                                News Event
                            </Link>
                        </li>
                        <li>
                            <Link to="/media" className="header_hidden_link">
                                Media
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="header_hidden_link">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/donate" className="header_hidden_link">
                                Donation
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

//Sandipto Roy 19 aug