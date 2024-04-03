import React, { useState, useEffect } from "react";

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
  const [currentNumbers, setCurrentNumbers] = useState([0, 0, 0, 0]);
  const finalNumbers = [15, 20, 36, 120]; // Array of finalNumber values for each .list-container
  const delaySeconds = 10; // Adjust the delay time here (in seconds)
  const stayAtFinalSeconds = 20; // Adjust the time to stay at final value here (in seconds)

  useEffect(() => {
    const intervals = finalNumbers.map((finalNumber, index) => {
      const incrementRate = finalNumber / 100; // Adjust the speed based on the final number
      let stayingTime = 0;
      return setInterval(() => {
        if (currentNumbers[index] < finalNumber) {
          setCurrentNumbers(prevNumbers => {
            const newNumbers = [...prevNumbers];
            newNumbers[index] += incrementRate;
            if (newNumbers[index] > finalNumber) {
              newNumbers[index] = finalNumber;
            }
            return newNumbers;
          });
        } else {
          stayingTime += 100; // Increment staying time
          if (stayingTime >= stayAtFinalSeconds * 1000) {
            setCurrentNumbers(prevNumbers => {
              const newNumbers = [...prevNumbers];
              newNumbers[index] = 0; // Reset the number to start over
              return newNumbers;
            });
          }
        }
      }, 10); // Fixed interval speed for smoother animation
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [finalNumbers, stayAtFinalSeconds]);

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
            {finalNumbers.map((finalNumber, index) => (
              <div className="list-container" key={index}>
                <div className="list-box">
                  <h1 className="list-number">{Math.round(currentNumbers[index])}</h1>
                </div>
                {index === 0 && (
                  <h1 className="list-description">
                    docentes de la UNSAM y 15 organizaciones del territorio
                    involucradas
                  </h1>
                )}
                {index === 1 && (
                  <h1 className="list-description">
                    estudiantes con becas de apoyo económico
                  </h1>
                )}
                {index === 2 && (
                  <h1 className="list-description">
                    estudiantes en condiciones de recibir certificación de la
                    Escuela IDAES-UNSAM
                  </h1>
                )}
                {index === 3 && (
                  <h1 className="list-description">
                    horas de clase durante 4 meses entre mayo y julio del 2022
                  </h1>
                )}
              </div>
            ))}
          </div>
        </div>
        <img src="/think-box2.png" className="think-box" />
        <div className="instagram-container">
          <div className="insta-posts">
            {iframeSources.map((src, index) => (
              <iframe
                key={index}
                className="instagram-iframe"
                src={src}
                frameBorder="0"
              ></iframe>
            ))}
          </div>
          <button className="insta-button" onClick={toggleSources}>
            Ver más
          </button>
        </div>
        <h1 className="map-text">Trazando el mapa para un futuro mejor</h1>
        <div className="map-container">
          <img src="map-background.png" className="map-background-image" />
          <div className="map-text-box">
            <h1 className="map-text-description">
              Como resultado final de la diplomatura, en colaboración con el
              laboratorio de comunicación social "Iconoclasistas", las Migrantas
              se armaron con lápices, mapas e historias para crear y
              transformar en conjunto un mapa participativo. Este mapa tenía
              como objetivo identificar las problemáticas socioambientales que
              afectaban su territorio. <br />
              <span className="map-desc-small">
                Este mapa aborda temas como la situación ambiental, la historia
                del área y las repercusiones de la degradación continua del
                territorio.
              </span>
            </h1>
            <a href={"/mapdownload.png"} download="mapdownload.png" className="map-download-button">
              <h1 className="download-button-text">Descargar</h1>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};