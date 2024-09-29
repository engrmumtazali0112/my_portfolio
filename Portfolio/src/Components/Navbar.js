import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/Home">
                <h1>Portfolio.</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Project">Project</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Gallery">Gallery</Link>
                </li>
                    <a href={require("../Routes/CvPic/my-cv.pdf")} download>
                        <button className="btn">Download CV</button>
                    </a>
            </ul>

            <div className="hamburger" onClick={handleclick}>
                {click ? (<FaTimes size={20} style={{ color: "white" }} />) : (<FaBars size={20} style={{ color: "white" }} />)}
            </div>
        </div>
    );
}

export default Navbar;
