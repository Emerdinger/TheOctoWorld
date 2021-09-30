import React from "react";
import "../styles/navbar.css"

export const Navbar = () => {
    return(
        <div className="navbar">
            <ul className="nav-list">
                <li>
                    <a href="#rarity">Rarity</a>
                    <a href="#faq">FAQ</a>
                    <a href="#roadmap">Roadmap</a>
                    <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
                    <a href="#"><i className="fab fa-discord fa-lg"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
                </li>
            </ul>
        </div>
    )
}