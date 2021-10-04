import React from "react";
import "../styles/future.css"
import logo from "../assets/LOGO.png"
import {useTranslation} from "react-i18next";

export const Future = () => {

    const [t] = useTranslation("global");

    return (
        <div className="future" id="roadmap">
            <div className="our-future">
                <p>{t("future.future-title")}</p>
                <span>
                    {t("future.future-text")}
                </span>
                <img src={logo} alt="logo"/>
            </div>
            <div className="who-we-are">
                <span className="wwa-who">{t("future.who-we-are")}</span>
                <span className="wwa">
                    {t("future.who-we-are-text")}
                </span>
                <span className="wwa">Jaime:</span>
                <span className="wwa">
                    {t("future.jaime")}
                </span>
                <span className="wwa">Sergio:</span>
                <span className="wwa">
                    {t("future.sergio")}
                </span>
                <span className="wwa">Emerson:</span>
                <span className="wwa">
                    {t("future.emerson")}
                </span>
            </div>
        </div>
    )
}