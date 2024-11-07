console.log("js running...");


var tL = gsap.timeline()

tL.from("#nav h2",{
    y:-30,
    opacity: 0,
    duration: 0.5,
    delay: 1
})
tL.from("#navPt-2 h4",{
    y:-30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.3
})
tL.from("h1",{
    y: -300,
    opacity: 0,
    duration: 0.5,
    // scale: 20  // this looks so amazing.
    scale: 0.2
})