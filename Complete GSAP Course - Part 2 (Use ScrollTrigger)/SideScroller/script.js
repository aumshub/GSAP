console.log("js running...");

gsap.to("#page2 p",{
    transform: "translate(-170%)",
    scrollTrigger: {
        trigger: "#page2",  // while using pin always trigger the parent of the element.
        scroller: "body",
        markers: true,
        start: "top 0%",
        // end: "top -100%",
        end: "top -150%", // for slow scroll.
        scrub: 2,
        pin: true // pause the page scrolling untill the upper animation completes.
    }
})

