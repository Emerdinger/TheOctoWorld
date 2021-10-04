import React from "react";
import "../styles/footer.css"

export const Footer = () => {
    return (
        <div className="footer">
            <p className="center">2021 The Octo World</p>
            <div className="redes">
                <a href="#hola"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="#hola"><i className="fab fa-discord fa-2x"></i></a>
                <a href="#hola"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
            <p className="hide">JES Creativa Audiovisual</p>
        </div>
    )
}