import React from "react";
import "../styles/whyget.css"
import imagen3 from "../assets/imagen3.png"
import imagen4 from "../assets/imagen4.png"
import imagen5 from "../assets/imagen5.png"

export const Whyget = () => {
    return (
        <div className="why-get">
            <div className="wg-1">
                <img src={imagen4} alt=""/>
                <div className="wg-1-text">
                    <p className="w-title">¿Why get a OctoWorld?</p><br/>
                    <span>
                        Además de ser partícipe de un gran proyecto de NFT con muchas horas de trabajo encima en donde el mayor porcentaje de tokens
                        esta aleatorizado. Podrás obtener una increíble foto de perfil y participar activamente de todo lo que le deparará a esta
                        increíble idea. Estaremos devolviendo el 15% de todo el Ethereum recaudado en concursos y recompensas con premios en esta misma
                        moneda y el 5% en premios de NFTs exclusivos. Queremos crear una increíble comunidad que tenga voz dentro del proyecto, que nos
                        guíe en siguientes estancias, que nos ayude en ideas para la siguiente generación y que esté presente para llevarnos de la mano
                        en esta primera parte del proyecto.
                    </span>
                </div>
            </div>
            <div className="wg-2">
                <div className="wg-2-title">
                    <p>How much?</p>
                    <img src={imagen3} alt="pricing"/>
                </div>
                <div className="wg-2-img2">
                    <img src={imagen5} alt="octopulpo"/>
                </div>
            </div>
        </div>
    )
}