import React from "react";
import YouTube from 'react-youtube';

export const SectionFive = () => {
    return (
        <section className="section five" >
            <img  className="line-three" src="/line3.svg" />
            <div className="five-content" >
                <div className="five-top" >
                    <div className="five-top-right" >
                        <h1 className="five-main" >Un día, Zulma y personas de la Universidad Nacional de San Martín se ponen en contacto, y con el apoyo del IDRC, en conjunto constituyen:</h1>
                        <img src="/five-logo.png" />
                    </div>
                    <div className="five-top-left" >
                        <img src="/photo4.png" />
                    </div>
                </div>
                <div className="five-center" >
                    <h1 className="five-main-big" >Conocé más sobre el contexto que dio origen al proyecto:</h1>
                    <div className="video-container">
                        <YouTube className="video" videoId="https://www.youtube.com/watch?v=Nz7K3Plole0" />
                    </div>
                    <h1 className="five-main-green" >La iniciativa que nace en el 2022, se enfoca en las intersecciones entre los siguientes temas:</h1>
                    <div className="five-circles" >
                        <div className="circle-one" >
                            <h1 className="circle-text" >Migración</h1>
                        </div>
                        <div className="circle-two" >
                            <h1 className="circle-text" >Cambio<br/>climático</h1>
                        </div>
                        <div className="circle-one" >
                            <h1 className="circle-text" >Trabajo</h1>
                        </div>
                        <div className="circle-two" >
                            <h1 className="circle-text" >Género</h1>
                        </div>
                    </div>
                </div>
                <div className="five-bottom" >
                    <div className="five-bottom-right" >
                        <img src="/purple-girls.png" className="five-girls" />
                    </div>
                    <div className="five-bottom-left" >
                        <h1 className="five-bottom-main-text" >MIGRANTAS<br/><span className="five-bottom-purple" >EN RECONQUISTA</span></h1>
                        <h1 className="five-description" >se conformó gracias a un grupo de mujerestrabajadoras migrantes de más de 15 barrios en El Reconquista del partido San Martín; quienes desarrollaron estrategias socioambientales de adaptación colectiva, asegurando así la sostenibilidad de la vida a través de una red de cuidado comunitario.</h1>
                        <h1 className="five-small" >Objetivos del proyecto</h1>
                        <div className="five-audio" >
                            <audio controls>
                                <source src="/audio.mp3" type="audio/mp3" />
                            </audio>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-six" >
                <h1 className="six-main-green" > Uno de sus principales hitos, ha sido el desarrollo y la implementación de la</h1>
                <div className="six-top" >
                    <div className="six-top-left" >
                        <div className="six-top-green-box" >
                        <h1 className="six-green-box-text" >DIPLOMATURA DE ESTUDIOS EN GÉNERO, AMBIENTE Y TERRITORIO</h1>
                    </div>
                    <div className="six-green-outline-box" >
                        <h1 className="six-outline-text" >Mediante este curso, un grupo de <span className="six-outline-bold" >Migrantas en Reconquista</span> obtuvo un diploma que las respalda como agentes de cambio socioambiental y guardianas de sus propios derechos</h1>
                    </div>
                </div>
                <div className="six-top-right" >
                    <img src="/photo5.png" className="six-top-photo" />
                </div>
            </div>
        </div>
        </section>
    )
}
