import React from "react";
import "../styles/thematic.css"
import pulpo1 from "../assets/imagen6.png"
import pulpo2 from "../assets/imagen7.png"
import pulpo3 from "../assets/imagen8.png"
import pulpo4 from "../assets/imagen1.png"
import {useTranslation} from "react-i18next";

export const Thematic = () => {

    const [t] = useTranslation("global");

    return (
        <div className="thematic" id="rarity">
            <div className="coming-soon">
                <p>{t("thematic.coming-soon")}</p>
            </div>
            <div className="buy-opensea">
                <a href="https://opensea.com">
                    {t("thematic.opensea")}
                </a>
            </div>
            <div className="thematic-rarity">
                <div className="t-r">
                    <div className="t-r-title">
                        <h2>{t("thematic.thematic")}</h2>
                    </div>
                    <div className="t-r-text">
                        <p>{t("thematic.thematic-text")}</p>
                    </div>
                </div>
                <div className="grid">
                    <div className="grid-paises">
                        <div className="paises">
                            <img
                                src={pulpo3}
                                alt="pais-octo"/>
                            <div className="paises-text">
                                <span className="p-text-title">{t("thematic.countries")}</span>
                                <br/>
                                <span>
                                    {t("thematic.countries-text")}
                                </span>
                            </div>
                        </div>
                        <div className="legendarios">
                            <img className="legen-img"
                                 src={pulpo1}
                                 alt="legendarios-octo"/>
                            <div className="legendarios-container">
                                <div className="legendarios-text">
                                    <span className="p-text-title">{t("thematic.legendary")}</span>
                                    <span>
                                    {t("thematic.legendary-text")}
                                </span>
                                </div>
                                <img
                                    src={pulpo2}
                                    alt="legendarios-octo"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid-categorias">
                        <div className="g-img">
                            <h1 className="rarezas">{t("thematic.rarity")}</h1>
                            <img className="imgC"
                                 src={pulpo4}
                                 alt="legendarios-octo"/>
                        </div>
                        <div className="g-categorias">
                            <div className="g-c-text">
                                <span className="p-text-title">{t("thematic.mythic")}</span><br/>
                                <span>{t("thematic.mythic-text")}</span>
                            </div>
                            <div className="g-c-text">
                                <span className="p-text-title">{t("thematic.rare")}</span><br/>
                                <span>{t("thematic.rare-text")}</span>
                            </div>
                            <div className="g-c-text">
                                <span className="p-text-title">{t("thematic.common")}</span><br/>
                                <span>{t("thematic.common-text")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}