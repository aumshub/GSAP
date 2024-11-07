gsap.to("#box1",{
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "yellow",
    borderRadius: "50%", // always write string is ""and in this case 50 is number but % is char.
    scale: 0.5
});
// gsap.to("#box2",{
//     x: 500,
//     y: 500,
//     duration: 2,
//     delay: 1
// });
gsap.from("#box2",{
    x: 1000,
    duration: 2,
    delay: 1,
    borderRadius:"50%"
});