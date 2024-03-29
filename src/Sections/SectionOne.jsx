import React, { useState } from "react";

export const SectionOne = () => {

  return (
    <section className="section one">
      <div className="one-content">
        <img src="/migrantas_title.png" className="migrantas-title" />
        <div className="nav">
         <img src="/logo-voces.svg" className="logo-voces" />
        </div>
        <div className="content-one">
          <img src="/people1.png" className="people" />
          <div className="one-greenbox" >
            <img src="/flag1.svg" className="flag" />
            <h1 className="greenbox-text" >En un barrio del Gran Buenos Aires, Argentina, historias de mujeres migrantes<span className="medium" > se entrelazan para construir un camino conjunto, que les permita enfrentar sus adversidades y avanzar juntas hacia un futuro mejor.</span></h1>
          </div>
        </div>
      </div>
      <img src="/map.png" className="map" />

      
    </section>
  );
};