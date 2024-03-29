import React, { useState } from "react";

export const SectionSix = () => {
  const originalSources = [
    "https://www.instagram.com/p/C3h70yZOmNL/embed/",
    "https://www.instagram.com/p/C3ppNc-oExV/embed/",
    "https://www.instagram.com/p/Cfe6BUgoYkd/embed/"
  ];

  const newSources = [
    "https://www.instagram.com/p/Cfe6BUgoYkd/embed/",
    "https://www.instagram.com/p/Cfe6BUgoYkd/embed/",
    "https://www.instagram.com/p/Cfe6BUgoYkd/embed/"
  ];

  const [iframeSources, setIframeSources] = useState(originalSources);
  const [toggle, setToggle] = useState(false);

  const toggleSources = () => {
    setIframeSources(toggle ? originalSources : newSources);
    setToggle(!toggle);
  };

  return (
    <section className="section six">
      <div className="six-expanded" />
      <div className="six-content">
        <div className="six-content-top">
          <h1 className="six-content-top-main">
            ALGUNOS DATOS SOBRE LA DIPLOMATURA:
          </h1>
          <div className="six-top-list">
            <div className="list-container">
              <div className="list-box">
                <h1 className="list-number">15</h1>
              </div>
              <h1 className="list-description">
                {" "}
                docentes de la UNSAM y 15 organizaciones del territorio
                involucradas
              </h1>
            </div>
            <div className="list-container">
              <div className="list-box">
                <h1 className="list-number">20</h1>
              </div>
              <h1 className="list-description">
                estudiantes con becas de apoyo económico
              </h1>
            </div>
            <div className="list-container">
              <div className="list-box">
                <h1 className="list-number">36</h1>
              </div>
              <h1 className="list-description">
                estudiantes en condiciones de recibir certificación de la
                Escuela IDAES-UNSAM
              </h1>
            </div>
            <div className="list-container">
              <div className="list-box">
                <h1 className="list-number">120</h1>
              </div>
              <h1 className="list-description">
                horas de clase durante 4 meses entre mayo y julio del 2022
              </h1>
            </div>
          </div>
        </div>
        <img src="/think-box2.png" className="think-box" />
        <div className="instagram-container">
          <div className="insta-posts" >
          {iframeSources.map((src, index) => (
            <iframe
              key={index}
              className="instagram-iframe"
              src={src}
              frameborder="0"
            ></iframe>
          ))}
          </div>
          <button className="insta-button" onClick={toggleSources}>Ver más</button>
        </div>
        <h1 className="map-text" >Trazando el mapa para un futuro mejor</h1>
        <div className="map-container" >
          <img src="map-background.png" className="map-background-image" />
          <div className="map-text-box" >
            <h1 className="map-text-description" >Como resultado final de la diplomatura, en colaboración con el laboratorio de comunicación social "Iconoclasistas", las Migrantas se armaron con lápices, mapas e historias para crear y transformar en conjunto un mapa participativo. Este mapa tenía como objetivo identificar las problemáticas socioambientales que afectaban su territorio. <br/> 
                <span className="map-desc-small" >Este mapa aborda temas como la situación ambiental, la historia del área y las repercusiones de la degradación continua del territorio. </span>
            </h1>
            <div className="map-download-button" >
              <h1 className="download-button-text" >Descargar</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};