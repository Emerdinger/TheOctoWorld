import React from "react";
import "../styles/navbar.css"

export const Navbar = () => {
    return(
        <div className="navbar">
            <ul className="nav-list">
                <li>
                    <a className="hide" href="#rarity">Rarity</a>
                    <a className="hide" href="#faq">FAQ</a>
                    <a className="hide" href="#roadmap">Roadmap</a>
                    <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
                    <a href="#"><i className="fab fa-discord fa-lg"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
                </li>
            </ul>
        </div>
    )
}