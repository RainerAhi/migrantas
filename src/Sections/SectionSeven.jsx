import React from "react";
import YouTube from 'react-youtube';

export const SectionSeven = () => {
    return (
        <section className="section seven">
          <img src="/green-background.png" className="seven-green-background" />
          <div className="seven-grey-bottom" />
          <div className="seven-content" >
           <h1 className="seven-main" >Conocé más sobre Migrantas en Reconquista</h1>
            <div className="seven-content-row" >
              <div className="seven-right" >
                <div className="video-container-two" >
                  <YouTube className="video" videoId="Nz7K3Plole0" />
                </div>
              </div>
              <div className="seven-left" >
                <img src="/paper-box1.png" className="paper-box" />
                <h1 className="paper-text-big" >MIRÁ "MIGRANTAS EN RECONQUISTAS: EL DOCUMENTAL"</h1>
                <h1 className="paper-text-small" >Ha sido un largo camino, y gracias al apoyo que ha recibido el proyecto, se logró realizar un documental, donde ellas mismas narran los procesos y transformaciones del proyecto, destacando el intercambio de saberes entre la comunidad del Área Reconquista y la academia. </h1>
              </div>
            </div>
          </div>
      </section>
    )
}