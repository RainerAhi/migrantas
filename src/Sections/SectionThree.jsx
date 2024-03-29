import React, { useEffect, useRef } from "react";

export const SectionThree = () => {


    return (
      <section className="section three" >
        <div className="three-content" >
          <div className="three-top" >
            <div className="three-green-one" >
                <h1 className="three-box-text" >Además, algunos barrios están rodeados por los vapores que emanan de la fermentación de "la montaña" del CEAMSE, uno de los vertederos de basura a cielo abierto más grandes de Latinoamérica</h1>
            </div>
            <div className="three-green-two" >
                <img src="/cloud.svg" className="cloud" />
                <h1 className="three-box-text-small" >El CEAMSE es uno de los rellenos sanitarios que emite mayor concentración de gas metano en el mundo</h1>
            </div>
          </div>
          <div className="three-bottom" >
            <img src="/photo1.png" className="cloud" />
            <div className="three-bottom-container" >
                <h1 className="three-bottom-text" >“En el barrio la gente come, se viste y construye su casa de la basura. La basura no es vista tanto como un problema de contaminación, que lo es, sino más bien como un recurso para la supervivencia”</h1>
                <h1 className="three-bottom-text-small"  ><span className="bold" >Natalia Gavazzo</span><br/> Directora del proyecto de Migrantas en Reconquista</h1>
            </div>
          </div>
        </div>
      </section>
    )
}