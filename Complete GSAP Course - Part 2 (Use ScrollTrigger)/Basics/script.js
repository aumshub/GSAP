console.log("js running...");



gsap.from("#page1 #box",{
    scale: 0,
    duration: 2,
    delay: 1,
    rotation: 360
})
gsap.from("#page2 #box",{
    scale: 0,
    duration: 2,
    // delay: 1,
    rotation: 360,
    // scrollTrigger: "#page2 #box"
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 50%" 
    }
})
gsap.from("#page3 h1",{
    opacity: 0,
    x: 500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3 h1",
        scroller: "body",
        markers: true,
        start: "top 50%"
        //  end: "top 30%"
    }
})
gsap.from("#page3 h2",{
    opacity: 0,
    x: -500,
    duration: 2,
    scrollTrigger:{
        trigger: "#page3 h2",
        scroller: "body",
        markers: true,
        start: "top 50%"
        // end: "top 30%"
    }
})

gsap.from("#page4 #box",{
    scale: 0,
    opacity: 0,
    rotate: 720,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4 #box",
        scroller: "body",
        markers: true,
        start: "top 60%",
        end: "top 30%",
        // scrub: true
        scrub: 3,
        pin: true
    }
})
