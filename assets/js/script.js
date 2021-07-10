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
        duration: "100%",
        triggerHook: 0,
    })
        .setTween(timeline)
        .setPin('section')
        .addTo(controller);


// gsap.fromTo(".sky", {opacity:0},{duration: 1, opacity:1 ,delay: 0.3 ,ease:"power3.out", x: 0});
gsap.fromTo(".sea", {scale: 1.4, x:-300},{duration: 10, scale: 1 ,delay: 1 ,ease:"circ", x: 0});
gsap.fromTo(".me", {opacity:1, x:50},{duration: 7, opacity:1 ,delay: 1 ,ease:"circ", x: 0});
// gsap.fromTo(".sea", {opacity:0, y:100},{duration: 1, opacity:1 ,delay: 1 ,ease:"circ", y: 0});
gsap.fromTo(".nav", {opacity:0, y:-100},{duration: 1, opacity:1 ,delay: 1 ,ease:"circ", y: 0});
gsap.fromTo(".leaves", {opacity:1, x:300},{duration: 1, opacity:1 ,delay: 1.5 ,ease:"circ", x: 0});
gsap.fromTo(".mainRight", {opacity:0, x:100},{duration: 1, opacity:1 ,delay: 2 ,ease:"circ", x: 0});
gsap.fromTo(".mainTitle", {opacity:0, x:-100},{duration: 1, opacity:1 ,delay: 1.5 ,ease:"circ", x: 0});

var offsetHeight = document.getElementById('hero_1').offsetHeight;
const sectionHeight = document.getElementById('mainSection')

// console.log(sectionHeight.offsetHeight)
// window.onscroll = function(){
//     myFunction()
// }

// function myFunction() {
//     console.log(window.scrollY)
// }

// Smooth scroll to sections
function scrollClickAbout() {
    window.scroll(0, (sectionHeight.offsetHeight))
    // function myFunction(x) {
    //     if (x.matches) {
    //         window.scroll(0, (window.innerHeight * 2))
    //     }else if (y.matches){
    //         window.scroll(0, (window.innerHeight * 1.79))
    //     }else if (z.matches){
    //         window.scroll(0, (window.innerHeight * 1.95))
    //     }else {
    //         window.scroll(0, (window.innerHeight * 1.5))
    //     }
    // }
    // var x = window.matchMedia("(max-height: 700px)")
    // var y = window.matchMedia("(max-height: 800px)")
    // var z = window.matchMedia("(max-height: 900px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction)
}

function scrollClickProjects() {
    window.scroll(0, (sectionHeight.offsetHeight + offsetHeight))
    // function myFunction(x) {
    //     if (x.matches) {
    //         window.scroll(0, ((window.innerHeight * 2) + offsetHeight))
    //     }else if (y.matches){
    //         window.scroll(0, ((window.innerHeight * 1.79) + offsetHeight))
    //     }else if (z.matches){
    //         window.scroll(0, ((window.innerHeight * 1.95) + offsetHeight))
    //     }else {
    //         window.scroll(0, ((window.innerHeight*1.5) + offsetHeight))
    //     }
    // }
    // var x = window.matchMedia("(max-height: 700px)")
    // var y = window.matchMedia("(max-height: 800px)")
    // var z = window.matchMedia("(max-height: 900px)")
    // myFunction(x) // Call listener function at run time
    // x.addListener(myFunction)
}

//about me animations
let tl = gsap.timeline({scrollTrigger:{ trigger:'.hero_1', start: "top center"}});

tl.from(".aboutMe", { x: -200, opacity: 0, duration: 1, delay: 0.3})
.from(".skills", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")

//template literals
const object = {
    project1 : {
        id: "#spshurl",
        img: "#spshurlImg",
        info: "#spshurlInfo",
    },
    project2 : {
        id: "#moneger",
        img: "#monegerImg",
        info: "#monegerInfo",
    },
    project3 : {
        id: "#weather",
        img: "#weatherImg",
        info: "#weatherInfo",
    },
    project4 : {
        id: "#TTT",
        img: "#TTTImg",
        info: "#TTTInfo",
    }
}

Object.entries(object).map(([key, value])=>{
    function myFunction(x) {
        if (x.matches) {
            //projects animation
            let desktop = gsap.timeline({scrollTrigger:{ trigger:`${value.id}`, start: "center top"}});

            desktop.from(`${value.img}`, { y: 100, opacity: 0, duration: 1, delay: 0.3})
            .from(`${value.info}`, { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
        }
    }

    var x = window.matchMedia("(min-width: 1000px)")
    // var y = window.matchMedia("(min-width: 300px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
})


//nav burger

const hamburger = document.querySelector(".hamburger");
const navItems = document.querySelector(".navItems");
const mainRight = document.querySelector(".mainRight");
const scroll = document.querySelector(".scroll");

const about = document.getElementById("aboutBtn");
const project = document.getElementById("projectBtn");

hamburger.addEventListener("click", () => {
    mainRight.classList.toggle("open");
    scroll.classList.toggle("open");
  navItems.classList.toggle("open");
//   document.body.style.position.toggle = 'fixed';

});

[about, project].forEach(item => {
    item.addEventListener("click", ()=>{
        navItems.classList.toggle("open")
        mainRight.classList.toggle("open");
        scroll.classList.toggle("open");
    })
})
