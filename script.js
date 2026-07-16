const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});

function firstPageAnim() {
var tl = gsap.timeline();

tl.from(".nav",{
y: '-10',
opacity: 0,
duration: 1.5,
ease: Expo.easeInOut
})

.to(".boundingelem",{
y: 0,
ease: Expo.easeInOut,
duration: 2,
delay: -1,
stagger: .2
})

.to(".boundingelem2",{
y: 0,
ease: Expo.easeInOut,
duration: 2,
stagger: .2
}, "-=2")

.from(".heroFooter",{
    y: -10,
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
    delay:-1.5
})




}


function circleMouseMove(){
    window.addEventListener("mousemove", function(dets){
        document.querySelector(".minicircle").style.transform =`translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}
circleMouseMove();
firstPageAnim();