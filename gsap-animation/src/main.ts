import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { generateCursor } from "./cursor";
gsap.registerPlugin(ScrollTrigger);

generateCursor();

const tl = gsap.timeline({ delay: 1 });

tl.from(".section_1 h1", {
  opacity: 0,
  stagger: 0.9,
})
  .from(".fullpage .main_article", {
    transform: "translate(100%)",
    delay: 0.3,
    fontStyle: "oblique",
    duration: 2,
    scrollTrigger: {
      trigger: ".fullpage .main_article",
      scroller: "body",
      scrub: 2,
    },
  })
  .to(".role", {
    opacity: 1,
  })
  .to(".developer", {
    opacity: 1,
  })
  .to(".slash", {
    width: "100%",
    duration: 1,
    ease: "power2.inOut",
  })
  .to(
    ".developer",
    {
      color: "#B6AE9F",
      opacity: 0.5,
      duration: 1,
    },
    "-=0.2"
  )
  .to(
    ".engineer",
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      textTransform: "capitalize",
    },
    "-=0.1"
  );
