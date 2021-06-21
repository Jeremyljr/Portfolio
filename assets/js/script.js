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


// gsap.fromTo(".sky", {opacity:0},{duration: 1, opacity:1 ,delay: 0.3 ,ease:"power3.out", x: 0});
gsap.fromTo(".me", {opacity:0, x:-100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power3.out", x: 0});
gsap.fromTo(".sea", {opacity:0, y:100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power3.out", y: 0});
gsap.fromTo(".nav", {opacity:0, y:-100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power3.out", y: 0});
gsap.fromTo(".leaves", {opacity:1, x:300},{duration: 1, opacity:1 ,delay: 1.5 ,ease:"power3.out", x: 0});
gsap.fromTo(".mainRight", {opacity:0, x:100},{duration: 1, opacity:1 ,delay: 2 ,ease:"power3.out", x: 0});
gsap.fromTo(".mainTitle", {opacity:0, x:-100},{duration: 1, opacity:1 ,delay: 1.5 ,ease:"power3.out", x: 0});

//TEST
const aboutButton = document.getElementById("aboutBtn")
const projectButton = document.getElementById("projectBtn")

// document.getElementById("aboutBtn").onclick = click
// console.log(aboutButton.id)

// function click(clicked){
//     console.log(this.id)
//     if (this.id == aboutButton.id){
//         if (x.matches) {
//             window.scroll(0, (window.innerHeight*2.75))
    
//         } else {
//             window.scroll(0, (window.innerHeight*2.5))
//         }
//         var x = window.matchMedia("(max-height: 1366px)")
//         myFunction(x) // Call listener function at run time
//         x.addListener(myFunction)
//     } else {
//         console.log("other")
//     }

// }


// function scrollClickAbout(clicked) {
//     console.log(clicked.id)
    
// }
//TEST

// Smooth scroll
function scrollClickAbout() {
    function myFunction(x) {
        if (x.matches) {
            window.scroll(0, (window.innerHeight*2.5))

        } else {
            window.scroll(0, (window.innerHeight*2.5))
        }
    }
    var x = window.matchMedia("(max-height: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
}

function scrollClickProjects() {
    function myFunction(x) {
        if (x.matches) {
            window.scroll(0, (window.innerHeight*3.75))

        } else {
            window.scroll(0, (window.innerHeight*3.8))
        }
    }
    var x = window.matchMedia("(max-height: 1366px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
}


//about me animations
let tl = gsap.timeline({scrollTrigger:{ trigger:'.hero_1', start: "center 0%"}});

tl.from(".aboutMe", { x: -200, opacity: 0, duration: 1, delay: 0.3})
.from(".skills", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")



// //projects animation
function myFunction(x) {
    if (x.matches) {
        let sp = gsap.timeline({scrollTrigger:{ trigger:'#moneger', start: "bottom top"}});

        sp.from("#spshurlImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
        .from("#spshurlInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
         
        
        let mg = gsap.timeline({scrollTrigger:{ trigger:'#weather', start: "bottom top"}});
        
        mg.from("#monegerImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
        .from("#monegerInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
         
        
        let wt = gsap.timeline({scrollTrigger:{ trigger:'#TTT', start: "bottom top"}});
        
        wt.from("#weatherImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
        .from("#weatherInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
         
        
        let tt = gsap.timeline({scrollTrigger:{ trigger:'#freelancing', start: "bottom center"}});
        
        tt.from("#TTTImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
        .from("#TTTInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
         
        //freelancing animations
        let fl = gsap.timeline({scrollTrigger:{ trigger:'#footer', start: "bottom top"}});
        
        fl.from("#freelancingCard", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")

    } else {
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
    }

  }
  
  var x = window.matchMedia("(max-height: 700px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction)


//view my work animations
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    delay: 3500
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 640,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 1,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });