import React, {useEffect} from "react";
import "../styles/navbar.css"
import { useTranslation } from "react-i18next"

export const Navbar = () => {

    const [t, i18n] = useTranslation("global");

    const handleLanguage = () => {
        i18n.changeLanguage(`${document.querySelector("#octolanguage").value}`);
        localStorage.setItem('octolanguage', `${document.querySelector("#octolanguage").value}`);
    }

    useEffect(() => {
        if (localStorage.getItem('octolanguage')){
            i18n.changeLanguage(`${localStorage.getItem('octolanguage')}`);
            document.querySelector("#octolanguage").value = `${localStorage.getItem('octolanguage')}`
        }else {
            localStorage.setItem("octolanguage", "es");
        };
    },[])

    return(
        <div className="navbar">
            <ul className="nav-list">
                <li>
                    <a className="hide" href="#rarity">{t("navbar.rarity")}</a>
                    <a className="hide" href="#faq">{t("navbar.faq")}</a>
                    <a className="hide" href="#roadmap">{t("navbar.roadmap")}</a>
                    <a href="#"><i className="fab fa-instagram fa-lg"></i></a>
                    <a href="#"><i className="fab fa-discord fa-lg"></i></a>
                    <a href="#"><i className="fab fa-twitter fa-lg"></i></a>
                    <select id="octolanguage" name="OS" onChange={handleLanguage}>
                        <option value="es">ES</option>
                        <option value="en">EN</option>
                    </select>
                </li>
            </ul>
        </div>
    )
}