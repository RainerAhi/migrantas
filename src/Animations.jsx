import React from "react";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from "react";
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

export default function Animations() {


  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();
  

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      //FIRST TO SECOND

    tl
    .to(".content-one", {
      opacity: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom+=300",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

    .to(".map", {
      width: "60%",
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".map", {
        width:  "50%",
        marginRight: "20%",
          scrollTrigger: {
            trigger: ".two",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".content-two", {
          marginLeft: "0",
          opacity: 1,
            scrollTrigger: {
              trigger: ".two",
              start: "top bottom",
              end: "bottom top+=1500",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".content-two-bottom", {
            marginRight: "0",
            opacity: 1,
              scrollTrigger: {
                trigger: ".two",
                start: "top bottom",
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })

            .to(".three-top", {
              width: isMobile ? "90%" : "80%",
                scrollTrigger: {
                  trigger: ".three-content",
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                  immediateRender: false,
                },
              })

              .to(".three-bottom", {
                opacity: 1,
                  scrollTrigger: {
                    trigger: ".three-content",
                    start: "top bottom+=1000",
                    end: "bottom top",
                    scrub: true,
                    immediateRender: false,
                  },
                })

                .to(".four-content", {
                  opacity: 1,
                    scrollTrigger: {
                      trigger: ".three-content",
                      start: "top bottom-=1000",
                      end: "bottom top",
                      scrub: true,
                      immediateRender: false,
                    },
                  })

                  .to(".five-top", {
                    opacity: 1,
                    width: isMobile ? "90%" : "80%",
                      scrollTrigger: {
                        trigger: ".four-content",
                        start: "top bottom-=2250",
                        end: "bottom top",
                        scrub: true,
                        immediateRender: false,
                      },
                    })

                    .to(".six-top, .six-main-green", {
                      opacity: 1,
                        scrollTrigger: {
                          trigger: ".five-content",
                          start: isMobile ? "top bottom-=2500" : "top bottom-=3000",
                          end: "bottom top",
                          scrub: true,
                          immediateRender: false,
                        },
                      })

                      .to(".six-top-photo", {
                        width: "75%",
                          scrollTrigger: {
                            trigger: ".five-content",
                            start: isMobile ? "top bottom-=2500" : "top bottom-=3000",
                            end: "bottom top",
                            scrub: true,
                            immediateRender: false,
                          },
                        })

                        .to(".seven-content", {
                          opacity: 1,
                            scrollTrigger: {
                              trigger: ".seven-content",
                              start: isMobile ? "top bottom+=500" : "top bottom+=500",
                              end: "bottom top",
                              scrub: true,
                              immediateRender: false,
                            },
                          })

    
    })
  }, [])


  return (
    <group >
    </group>
  );
}