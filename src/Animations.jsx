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
                      start: "top bottom-=900",
                      end: "bottom top",
                      scrub: true,
                      immediateRender: false,
                    },
                  })

                  .to(".four-image", {
                    width: "40%",
                      scrollTrigger: {
                        trigger: ".four",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true,
                        immediateRender: false,
                      },
                    })

                    .to(".four-main-top", {
                      fontSize: isMobile ? "1.25rem" : "2rem",
                        scrollTrigger: {
                          trigger: ".four",
                          start: "top bottom",
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
                        start: "top bottom-=1575",
                        end: "bottom top",
                        scrub: true,
                        immediateRender: false,
                      },
                    })

                    .to(".six-top, .six-main-green", {
                      opacity: 1,
                        scrollTrigger: {
                          trigger: ".five-content",
                          start: isMobile ? "top bottom-=2000" : "top bottom-=2300",
                          end: "bottom top",
                          scrub: true,
                          immediateRender: false,
                        },
                      })

                      .to(".five-main-big", {
                        fontSize: isMobile ? "1.25rem" : "2rem",
                          scrollTrigger: {
                            trigger: ".five-content",
                            start: "top center",
                            end: "bottom top",
                            scrub: true,
                            immediateRender: false,
                          },
                        })

                        .to(".video-container", {
                          width: "80%",
                            scrollTrigger: {
                              trigger: ".five-content",
                              start: "top center",
                              end: "bottom top",
                              scrub: true,
                              immediateRender: false,
                            },
                          })

                          .to(".circle-text", {
                            fontSize: isMobile ? "0.5rem" : "2rem",
                              scrollTrigger: {
                                trigger: ".five-content",
                                start: "top top",
                                end: "bottom top",
                                scrub: true,
                                immediateRender: false,
                              },
                            })

                            .to(".circle-one", {
                              width: isMobile ? "100px" : "250px",
                              height: isMobile ? "100px" : "250px",
                                scrollTrigger: {
                                  trigger: ".five-content",
                                  start: "top top",
                                  end: "bottom top",
                                  scrub: true,
                                  immediateRender: false,
                                },
                              })

                              .to(".circle-two", {
                                width: isMobile ? "100px" : "250px",
                                height: isMobile ? "100px" : "250px",
                                  scrollTrigger: {
                                    trigger: ".five-content",
                                    start: "top top",
                                    end: "bottom top",
                                    scrub: true,
                                    immediateRender: false,
                                  },
                                })

                                
                              .to(".five-girls", {
                                width: "100%",
                                  scrollTrigger: {
                                    trigger: ".five-content",
                                    start: "top top",
                                    end: "bottom top",
                                    scrub: true,
                                    immediateRender: false,
                                  },
                                })

                      .to(".six-top-photo", {
                        width: "75%",
                          scrollTrigger: {
                            trigger: ".five-content",
                            start: isMobile ? "top bottom-=2250" : "top bottom-=2250",
                            end: "bottom top",
                            scrub: true,
                            immediateRender: false,
                          },
                        })

                        .to(".six-main-green", {
                          fontSize: isMobile ? "1.5rem" : "2.25rem",
                            scrollTrigger: {
                              trigger: ".five-content",
                              start: isMobile ? "top bottom-=2500" : "top bottom-=2500",
                              end: "bottom top",
                              scrub: true,
                              immediateRender: false,
                            },
                          })

                          
                        .to(".map-background-image", {
                          width: "90%",
                            scrollTrigger: {
                              trigger: ".six-content",
                              start: "top bottom",
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

                          .to(".seven-main", {
                            fontSize: "2.25rem",
                              scrollTrigger: {
                                trigger: ".seven-content",
                                start: isMobile ? "top bottom+=500" : "top bottom+=500",
                                end: "bottom top",
                                scrub: true,
                                immediateRender: false,
                              },
                            })

                          .to(".photo6", {
                            width: "100%",
                              scrollTrigger: {
                                trigger: ".eight-content",
                                start: isMobile ? "top bottom" : "top bottom",
                                end: "bottom top",
                                scrub: true,
                                immediateRender: false,
                              },
                            })

                            .to(".eight-right-main", {
                              fontSize: isMobile ? "2rem" : "3rem",
                                scrollTrigger: {
                                  trigger: ".eight",
                                  start: isMobile ? "top bottom" : "top bottom",
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