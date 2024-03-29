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
    
    })
  }, [])


  return (
    <group >
    </group>
  );
}