import React from "react";
import "../styles/whyget.css"
import imagen3 from "../assets/imagen3.png"
import imagen4 from "../assets/imagen4.png"
import imagen5 from "../assets/imagen5.png"
import {useTranslation} from "react-i18next";

export const Whyget = () => {

    const [t] =  useTranslation("global");

    return (
        <div className="why-get">
            <div className="wg-1">
                <img src={imagen4} alt=""/>
                <div className="wg-1-text">
                    <p className="w-title">{t("whyget.why-title")}</p><br/>
                    <span>
                        {t("whyget.why-text")}
                    </span>
                </div>
            </div>
            <div className="wg-2">
                <div className="wg-2-title">
                    <p>{t("whyget.how-much")}</p>
                    <img src={imagen3} alt="pricing"/>
                </div>
                <div className="wg-2-img2">
                    <img src={imagen5} alt="octopulpo"/>
                </div>
            </div>
        </div>
    )
}