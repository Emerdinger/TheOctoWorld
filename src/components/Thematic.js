import React from "react";
import "../styles/thematic.css"
import pulpo1 from "../assets/imagen6.png"
import pulpo2 from "../assets/imagen7.png"
import pulpo3 from "../assets/imagen8.png"
import pulpo4 from "../assets/imagen1.png"

export const Thematic = () => {
    return (
        <div className="thematic" id="rarity">
            <div className="coming-soon">
                <p>COMING | SOON</p>
            </div>
            <div className="buy-opensea">
                <a href="https://opensea.com">
                    Buy on Opensea
                </a>
            </div>
            <div className="thematic-rarity">
                <div className="t-r">
                    <div className="t-r-title">
                        <h2>Thematic & Rarity</h2>
                    </div>
                    <div className="t-r-text">
                        <p>Queremos llevar la colección de cromos al siguiente nivel y hacer un álbum de arte digital,
                            nos basaremos
                            en atuendos y accesorios representativos mundialmente de diferentes países, en esta primera
                            generación
                            serán 14 los países representados.</p>
                    </div>
                </div>
                <div className="grid">
                    <div className="grid-paises">
                        <div className="paises">
                            <img
                                src={pulpo3}
                                alt="pais-octo"/>
                            <div className="paises-text">
                                <span className="p-text-title">Países:</span>
                                <br/>
                                <span>
                                    Serán 14 NFTs con 3 rasgos representativos permanentes y 2 rasgos al azar; 9 de estos estarán
                                    disponibles en el mint inicial de 9995 pulpos y los otros 5 se subastarán en Opensea entre
                                    los propietarios de 4 o más pulpos a la hora de agotarse esta primera generación.
                                </span>
                            </div>
                        </div>
                        <div className="legendarios">
                            <img className="legen-img"
                                 src={pulpo1}
                                 alt="legendarios-octo"/>
                            <div className="legendarios-container">
                                <div className="legendarios-text">
                                    <span className="p-text-title">Legendarios:</span>
                                    <span>
                                    Serán 2 NFTs con 5 rasgos permanentes representativos de Navidad y Halloween, una cantidad oculta
                                    de NFTs con 1 o 2 rasgos únicos de países aleatorizados además de otros rasgos con el porcentaje
                                    más bajo de creación no pertenecientes a los 14 países pero en mucha menor cantidad que estos.
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
                            <h1 className="rarezas">Rarezas</h1>
                            <img className="imgC"
                                 src={pulpo4}
                                 alt="legendarios-octo"/>
                        </div>
                        <div className="g-categorias">
                            <div className="g-c-text">
                                <span className="p-text-title">Míticos:</span><br/>
                                <span>NFTs con algunos rasgos de Navidad, Halloween o los rasgos creados para pertenecer a esta
                                rareza.</span>
                            </div>
                            <div className="g-c-text">
                                <span className="p-text-title">Raros:</span><br/>
                                <span>NFTs con alguno(s) de nuestros 30 rasgos creados para este nivel de pulpos.</span>
                            </div>
                            <div className="g-c-text">
                                <span className="p-text-title">Comunes:</span><br/>
                                <span>NFTs únicos e increíbles pero en la mayor cantidad de producción.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}