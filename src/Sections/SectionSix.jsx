import React from "react";

export const SectionSix = () => {
    return (
      <section className="section six">
        <div className="six-expanded" />
        <div className="six-content" >
          <div className="six-content-top" >
            <h1 className="six-content-top-main" >ALGUNOS DATOS SOBRE LA DIPLOMATURA:</h1>
            <div className="six-top-list" >
              <div className="list-container" >
                <div className="list-box" >
                  <h1 className="list-number" >15</h1>
                </div>
                <h1 className="list-description" > docentes de la UNSAM y 15 organizaciones del territorio involucradas</h1>
              </div>
              <div className="list-container" >
                <div className="list-box" >
                  <h1 className="list-number" >20</h1>
                </div>
                <h1 className="list-description" >estudiantes con becas de apoyo económico</h1>
              </div>
              <div className="list-container" >
                <div className="list-box" >
                  <h1 className="list-number" >36</h1>
                </div>
                <h1 className="list-description" >estudiantes en condiciones de recibir certificación de la Escuela IDAES-UNSAM</h1>
              </div>
              <div className="list-container" >
                <div className="list-box" >
                  <h1 className="list-number" >120</h1>
                </div>
                <h1 className="list-description" >horas de clase durante 4 meses entre mayo y julio del 2022</h1>
              </div>
            </div>
          </div>
          <img src="/think-box2.png" className="think-box" />
          <div className="instagram-container" >
          <iframe
          src="https://www.instagram.com/p/CzRlzWHRNrh/?img_index=1"
          width="320"
          height="400"
          frameborder="0"
          scrolling="no"
          allowtransparency="true"
        ></iframe>
          </div>
        </div>
      </section>
    )
}