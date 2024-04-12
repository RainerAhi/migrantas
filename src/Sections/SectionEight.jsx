import React from "react";

export const SectionEight = () => {
    return (
        <section className="section eight" >
            <div className="eight-content" >
                <div className="eight-content-row" >
                    <div className="eight-right" >
                        <h1 className="eight-right-main" >Escucha nuestras voces:</h1>
                        <iframe className="spotify-iframe" frameBorder="0" src="https://open.spotify.com/embed/episode/113I8NcEuMOh9j1MkVkd8x?utm_source=generator&theme=0"  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="spotify-iframe" frameBorder="0" src="https://open.spotify.com/embed/episode/5M8xMZwfz7Y28PlsunmDoG?utm_source=generator&theme=0"   allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <h1 className="eight-right-description" >Migrantas en Reconquista es un símbolo de unidad y empoderamiento para las mujeres de la comunidad, inspirándolas a seguir adelante en su lucha por un futuro sostenible mejor.</h1>
                    </div>
                    <div className="eight-left" >
                        <img className="photo6" src="/photo6.png" alt="" />
                        <div className="eight-socials" >
                            <a href="https://www.facebook.com/migrantasenreconquista" target="_blank" ><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/migrantasreconquista/?hl=es" target="_blank" ><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.youtube.com/@migrantasenreconquista1686" target="_blank" ><i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div className="eight-content-bottom" >
                    <img className="content-logo" src="/voces.png" alt="" />
                    <img className="content-logo" src="/migrantas1.png" alt="" />
                    <img className="content-logo" src="/additionallogo.png" alt="" />
                    <a className="a-content-logo" href="https://idrc-crdi.ca/es" target="_blank" ><img className="content-logo" src="/canada.png" alt="" /></a>
                    <a className="a-content-logo" href="https://latinclima.org/" target="_blank" ><img className="content-logo" src="/latin.png" alt="" /></a>
                </div>
            </div>
        </section>
    )
}