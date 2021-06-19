//Background effect
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
    .to('.me', 3, {y:-150})
    .to('.sky', 3, {y: -200}, '-=3')
    .to('.leaves', 3, {y:-50}, '-=3')
    .to('.sea', 3, {y: 50}, '-=3')
    .to('.hero_1', 3, {top:'0%'}, '-=1' )

    let scene = new ScrollMagic.Scene({
        triggerElement: "section",
        duration: "250%",
        triggerHook: 0, 
    })
        .setTween(timeline)
        .setPin('section')
        .addTo(controller);


gsap.fromTo(".sky", {opacity:0},{duration: 1, opacity:1 ,delay: 0.3 ,ease:"power3.out", x: 0});
gsap.fromTo(".me", {opacity:0, x:-100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power3.out", x: 0});
gsap.fromTo(".sea", {opacity:0, y:100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power3.out", y: 0});
gsap.fromTo(".nav", {opacity:0, y:-100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power3.out", y: 0});
gsap.fromTo(".leaves", {opacity:1, x:300},{duration: 1, opacity:1 ,delay: 1.5 ,ease:"power3.out", x: 0});
gsap.fromTo(".mainRight", {opacity:0, x:100},{duration: 1, opacity:1 ,delay: 2 ,ease:"power3.out", x: 0});
gsap.fromTo(".mainTitle", {opacity:0, x:-100},{duration: 1, opacity:1 ,delay: 1.5 ,ease:"power3.out", x: 0});

//Smaooth scroll
function scrollClickAbout() {
    window.scroll(0, (window.innerHeight*2.5))
}

function scrollClickProjects() {

    window.scroll(0, (window.innerHeight*3.8))
}

//about me animations
let tl = gsap.timeline({scrollTrigger:{ trigger:'.hero_1', start: "center top"}});

tl.from(".aboutMe", { x: -200, opacity: 0, duration: 1, delay: 0.3})
.from(".skills", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")


//projects animation
let sp = gsap.timeline({scrollTrigger:{ trigger:'#weather', start: "bottom top"}});

sp.from("#spshurlImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
.from("#spshurlInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
 

let mg = gsap.timeline({scrollTrigger:{ trigger:'#TTT', start: "bottom top"}});

mg.from("#monegerImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
.from("#monegerInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
 

let wt = gsap.timeline({scrollTrigger:{ trigger:'#freelancing', start: "bottom bottom"}});

wt.from("#weatherImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
.from("#weatherInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
 

let tt = gsap.timeline({scrollTrigger:{ trigger:'#footer', start: "bottom center"}});

tt.from("#TTTImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
.from("#TTTInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
 
 
 
//freelancing animations
let fl = gsap.timeline({scrollTrigger:{ trigger:'#footer', start: "bottom top"}});

fl.from("#freelancingCard", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
 