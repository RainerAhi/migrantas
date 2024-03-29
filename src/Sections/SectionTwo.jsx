import React from "react";

export const SectionTwo = () => {
    return (
        <section className="section two" >
            <img className="two-white" src="/white_background.PNG" />
            <img className="houses" src="/houses.svg" />
            <div className="content-two" >
                <div className="two-yellowbox" >
                <h1 className="yellowbox-text" >La migración genera nuevos desafíos ambientales y sociales para las poblaciones desplazadas, <span className="medium" > muchas asentadas en los márgenes de los ríos urbanos, como en el caso del Río Reconquista.</span></h1>
                </div>
            </div>
            <div className="content-two-bottom" >
                <div className="two-orangebox" >
                 <h1 className="orangebox-text" >En los barrios ribereños del Río Reconquista, la realidad es dura y palpable.<span className="medium" > Más de cinco millones de personas viven en condiciones precarias a lo largo de sus orillas, mientras que más de 12 mil industrias desechan sin tratamiento previo sus residuos en sus aguas</span></h1>
                </div>
            </div>
            <img className="sil" src="/sil.png" />
            <img className="garbage" src="/garbage.png" />
        </section>
    )
}