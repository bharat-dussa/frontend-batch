import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.from(".box1", {
  x: 1200,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
  rotate: 360,
  borderRadius: 50,
});

// gsap.from(".h1", {
//   opacity: 0,
//   duration: 2,
//   delay: 2,
//   y: 20,
//   stagger: 1
// });

gsap.from(".fullpage .box", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger:  ".fullpage .box",
    scrub: true,
    markers: true,
  }
});

gsap.from(".fullpage1 .box1", {
  scale: 0,
  delay: 1,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger:  ".fullpage1 .box1",
    scrub: 3,
    markers: true,
    start: "top 50%",
    pin: true,
  }

});

gsap.from(".fullpage2 .box2", {
  y: window.screen.height,
  duration: 1,
  scrollTrigger: {
    trigger: ".fullpage2 .box2",
    scroller: 'body',
    markers: true,
    scrub: 5,
  },
});
