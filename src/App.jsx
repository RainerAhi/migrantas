import Lenis from "@studio-freight/lenis";

import { SectionOne } from "./Sections/SectionOne";
import { SectionTwo } from "./Sections/SectionTwo";
import { SectionThree } from "./Sections/SectionThree";
import { SectionFour } from "./Sections/SectionFour";
import { SectionFive } from "./Sections/SectionFive";
import { SectionSix } from "./Sections/SectionSix";
import Animations from "./Animations";
import { SectionSeven } from "./Sections/SectionSeven";
import { SectionEight } from "./Sections/SectionEight";
import { SectionNine } from "./Sections/SectionNine";

function App() {

  const lenis = new Lenis({
    duration: 1, // speed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 0.5, // sensibility
    smoothTouch: false, // Mobile
    touchMultiplier: 2, // sensibility on mobile
    infinite: false // Infinite scrolling
  });
  
  //get scroll value
  // Here we can do a throttle like
  // in other projects to reduce the callbacks.
  // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  //   console.log(direction);
  // });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  
  requestAnimationFrame(raf);

    return (
      <>
            <div  className="experience">
                <Animations />
            </div>

            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            
      </>
    )
}

export default App;