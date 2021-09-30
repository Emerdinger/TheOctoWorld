import React from "react";
import "../styles/faq.css"

export const Faq = () => {
    return (
        <div className="faq" id="faq">
            <div className="faq-1">
                <h1>FAQ</h1>
                <p>WHAT'S AN NFT?</p>
                <span>
                    Un NFT significa 'token no fungible' un articulo digital único que los usuarios pueden comprar, poseer e intercambiar.
                </span>
                <span>
                    ¿Para qué sirven?
                </span>
                <span>
                    En pocas palabras es arte digital, en el caso de The Octo World Ofrecen también participaciones en eventos, recompensas exclusivas
                    por completar ciertas condiciones y lo más importante, una obra de arte rara que quedara increíble como foto de perfil, en tu
                    camiseta o en la taza del cafe.
                </span>
                <p>¿Qué es metamask?</p>
                <span>
                    Es una billetera criptográfica que almacena Ethereum, la cual es necesaria para comprar un OctoWorld.
                </span>
                <span>
                    La dirección de su billetera es donde se almacenarán sus NFT; para mas información puedes dar click <a
                    href="https://metamask.io/" target="_blank" rel="noreferrer">aquí</a>.
                </span>
                <p>¿Donde quedara mi pulpo después de comprarlo?</p>
                <span>
                    Su pulpo se encontrará en cualquier dirección o billetera conectada que utilizó para realizar la compra. Puede ver su pulpo en su
                    colección de Opensea.
                </span>
                <span>¿Que podre hacer con el?</span>
                <span>
                    Como propietario de The Octo World básicamente tienes total derecho a hacer lo que quieras con él. Si quieres una camiseta, una taza,
                    un sticker o pedirle a un artista que haga una pintura o escultura de el, puedes hacerlo.
                </span>
            </div>
            <div className="faq-2">
                <p>¿Que no puedo hacer con el?</p>
                <span>
                    No podrá sub licenciar su licencia o terceros, no podrá crear una versión exacta de ningún pulpo para la venta, ya que si no es
                    su propio pulpo, tendril que pedir la licencia al propietario o a cada propietario del pulpo en cuestión. Si se llegara a hacer,
                    Opensea podría tumbar su NFT o toda la colección y de la misma manera moriría el proyecto.
                </span>
                <span>
                    Son términos claros de la ley de derechos de autor y es algo muy complicado.
                </span>
                <span>
                    Además es también parte de su inversión, asi que es mejor evitar cualquier inconveniente.
                </span>
                <p>Are OctoWorld a good investment?</p>
                <span>
                    Como equipo de trabajo creemos que esto debe ser una decisión propia. Nosotros tenemos muy presente que los pulpos tienen una larga
                    vida por delante y estaremos en constante crecimiento y evolución, pensamos en muchas maneras de crecer exponencialmente pero
                    sabemos que dependemos de muchas variables y algo de suerte en general.
                </span><br/>
                <span>Don't spend money you can't afford to not have.</span>
                <p>¿Pulpos reservados?</p>
                <span>
                    Hemos reservado 100 pulpos para sorteos en los diferentes concursos que haremos, los cuales se entregarán después del lanzamiento
                    y no ocuparan un lugar entre los primeros 10000. Cada uno de los 3 miembros del equipo de trabajo recibirá un pulpo perteneciente
                    a esta primera generación y se guardaran alrededor 10 pulpos para futuros integrantes del equipo.
                </span>
                <span>
                    Estas plazas del equipo se irán abriendo a medida que crezca el proyecto y los miembros de la comunidad tendrán prioridad a la hora
                    de solicitar un puesto.
                </span>
            </div>
        </div>
    )
}