console.log("js running...");
/*-----------------------------------------------------------
// using without timeline function:

gsap.to("#box1", {
    x: 1200,
    duration: 2,
    delay: 1,
})
gsap.to("#box2", {
    x: 1200,
    duration: 2,
    delay: 3,  // you need to calculate the timings according to the upper property.
    backgroundColor: "yellow",
    scale: 0.5
})
gsap.to("#box3", {
    x: 1200,
    duration: 2,
    delay: 5,  // this type of calculation is not a good practice. & also hard to calculate as generally you will be using 0.77 like this values.
    borderRadius: "50%",
    scale: 0.5
})

------------------------------------------------------------*/



// performing same thing using the timeline:

var tL = gsap.timeline()

    tL.to("#box1", {
        x: 1200,
        duration: 1,
        delay: 1,
    })
    tL.to("#box2", {
        x: 1200,
        duration: 1,
        backgroundColor: "yellow",
        scale: 0.5
    })
    tL.to("#box3", {
        x: 1200,
        duration: 1,
        borderRadius: "50%",
        scale: 0.5
    })








