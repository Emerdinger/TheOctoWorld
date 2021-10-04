import React from "react";
import home from "../assets/home.png"
import {useTranslation} from "react-i18next"

export const Home = () => {

    const [t] = useTranslation("global");

    return (
        <div className="home">
            <div className="home-title">
                <h1>{t("home.title")} <br/> {t("home.title2")}</h1>
            </div>
            <div className="home-info">
                <div className="home-info-img">
                    <img src={home} alt="octo-home"/>
                </div>
                <div className="home-info-text">
                    <div className="home-info-text-border">
                        <span>{t("home.home-text")}</span>
                    </div>
                    <div className="home-info-btn">
                        <button className="bnt-connect">{t("home.btn-connect")}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}