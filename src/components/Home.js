import React from "react";

export const Home = () => {
    return (
        <div className="home">
            <div className="home-title">
                <h1>THE OCTO <br/> WORLD</h1>
            </div>
            <div className="home-info">
                <div className="home-info-img">
                    <img src={`./assets/home.png`} alt=""/>
                </div>
                <div className="home-info-text">
                    <div className="home-info-text-border">
                        <span>¿Recuerdas los albumes de cromos? Bueno, estas a punto de entrar en un proyecto de coleccionables
                            únicos con la temática más famosa del universo que te darán recompensas especiales por completar
                            ciertas condiciones en tus NFTs.</span><span> Este selecto grupo de 3 personas dibujo a mano cada una
                    de las partes que conforman la colección, los generará aleatoriamente mediante programación en la cadena
                    de bloques de Ethereum y tendrá como resultado 9984 pulpos ensamblados al azar de entre infinitas opciones
                    en total, 2 pulpos con temática de navidad y halloween y 14 pulpos representativos de países que serán los
                    más difíciles de obtener.</span><span> Pulpos increíbles que harán que sea el mejor avatar.</span>
                    </div>
                    <div className="home-info-btn">
                        <button className="bnt-connect">Connect</button>
                    </div>
                </div>
            </div>
        </div>
    )
}