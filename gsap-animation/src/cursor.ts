import { gsap } from "gsap";

export const generateCursor = () => {
    const main = document.querySelector('#main');
    const cursor = document.querySelectorAll('#cursor');

    main?.addEventListener('mousemove', (event) => {
        console.log('event', event);
       gsap.to(cursor, {
        x: event.clientX,
        y: event.offsetY
       })
    })

    main?.addEventListener('mouseleave', (event) => {
        gsap.to(cursor, {
         x: 0,
         y: 0
        })
     })
}