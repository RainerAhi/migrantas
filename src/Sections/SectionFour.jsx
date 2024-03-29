import React from "react";

export const SectionFour = () => {

  return (
    <section className="section four">
      <div className="four-content" >
        <div className="four-top" >
          <h1 className="four-main-top" >Costa Esperanza en el partido de San Martín, es uno de los barrios que se abren paso a las orillas del Reconquista.</h1>
          <img src="/photo2.png" className="four-image" />
        </div>
        <div className="four-center" >
          <h1 className="four-main" >Se identifica como un barrio migrante. De personas originarias de Bolivia, Paraguay y Perú, desplazadas por problemas sociales o ambientales, como la ampliación del cultivo de soja que eliminó su agricultura familiar de la que muchos vivían.</h1>
          <h1 className="four-main" >Costa Esperanza fue creado en el 2001 entre varios vecinos, entre ellos Zulma Monges, una mujer de 34 años y madre de dos niños.</h1>
        </div>
        <div className="four-bottom" >
          <div className="four-bottom-one" >
            <img src="/photo3.png" alt="" />
            <div className="four-bottom-textbox" >
              <h1 className="four-textbox-text" >En Reconquista las mujeres se han<span className="bold" > organizado desde siempre</span> para tratar de mejorar su situación, por ejemplo en el Barrio de San Martín…</h1>
            </div>
          </div>
          <div className="four-bottom-one" >
            <div className="four-bottom-textbox-two" >
              <h1 className="four-textbox-text" >"Ya teníamos asambleas para organizarnos; es una comunidad muy organizada. Sin esa red, hoy no la contaríamos. Un grupo iba para el Mercado Central para conseguir las verduras que tiraban, las carcazas de pollo, arroz, fideos. Así nos organizamos sin darnos cuenta. Mi mamá, que se llama María, La Doña, es el alma de la organización”</h1>
            </div>
          </div>
        </div>
        <img  className="line-one" src="/line1.svg" />
        <img className="line-two" src="/line2.svg" />
      </div>
    </section>
  );
};