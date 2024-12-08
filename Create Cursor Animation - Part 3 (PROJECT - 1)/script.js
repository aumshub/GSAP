// console.log("js running...");

// var main = document.querySelector(".main")
// var cursor = document.querySelector(".cursor")

// main.addEventListener("keypress",function(){
//     console.log("Event Perform");
// })



console.log("JS running...");

var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var imageDiv = document.querySelector(".image")

main.addEventListener("mousemove", function(event) {
    // console.log(event.x); // this is just to show the value of x and y.
    gsap.to(cursor,{
        x: event.x,
        y: event.y,
        duration: 0.6,
        ease: "back.out"
    })
});


imageDiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        scale: 4,
        backgroundColor:"rgba(255, 255, 255, 0.500)"
    })
})
imageDiv.addEventListener("mouseleave", function(){
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor:"#fff"
        })
})
