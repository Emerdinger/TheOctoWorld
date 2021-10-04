import React from "react";
import "../styles/faq.css"
import {useTranslation} from "react-i18next";

export const Faq = () => {

    const [t] = useTranslation("global");

    return (
        <div className="faq" id="faq">
            <div className="faq-1">
                <h1>FAQ</h1>
                <p>{t("faq.nft-title")}</p>
                <span>
                    {t("faq.nft-text")}
                </span>
                <span>
                    {t("faq.nft-text2")}
                </span>
                <span>
                    {t("faq.nft-text3")}
                </span>
                <p>{t("faq.metamask")}</p>
                <span>
                    {t("faq.metamask-text")}
                </span>
                <span>
                    {t("faq.metamask-text1")} <a
                    href="https://metamask.io/" target="_blank" rel="noreferrer">{t("faq.metamask-text2")}</a>
                </span>
                <p>{t("faq.where")}</p>
                <span>
                    {t("faq.where-text")}
                </span>
                <span>{t("faq.what-do")}</span>
                <span>
                    {t("faq.what-do-text")}
                </span>
            </div>
            <div className="faq-2">
                <p>{t("faq.what-not-do")}</p>
                <span>
                    {t("faq.what-not-do-text")}
                </span>
                <span>
                    {t("faq.what-not-do-text2")}
                </span>
                <span>
                    {t("faq.what-not-do-text3")}
                </span>
                <p>{t("faq.investment")}</p>
                <span>
                    {t("faq.investment-text")}
                </span><br/>
                <span>{t("faq.investment-text2")}</span>
                <p>{t("faq.reserved")}</p>
                <span>
                    {t("faq.reserved-text")}
                </span>
                <span>
                    {t("faq.reserved-text2")}
                </span>
            </div>
        </div>
    )
}