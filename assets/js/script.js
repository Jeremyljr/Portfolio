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
        duration: "150%",
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
// const aboutButton = document.getElementById("aboutBtn")
// const projectButton = document.getElementById("projectBtn")

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

// Smooth scroll to sections
function scrollClickAbout() {
    function myFunction(x) {
        if (x.matches) {
            window.scroll(0, (window.innerHeight*2.5))

        } else {
            window.scroll(0, (window.innerHeight*1.5))
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
            window.scroll(0, (window.innerHeight*2.8))
        }
    }
    var x = window.matchMedia("(max-height: 700px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
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
            let desktop = gsap.timeline({scrollTrigger:{ trigger:`${value.id}`, start: "center -=50%"}});
    
            desktop.from(`${value.img}`, { y: 100, opacity: 0, duration: 1, delay: 0.3})
            .from(`${value.info}`, { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
        } 
        // else {
        //     let ipad = gsap.timeline({scrollTrigger:{ trigger:`${value.id}`, start: "bottom -=50%"}});
    
        //     ipad.from(`${value.img}`, { y: 100, opacity: 0, duration: 1, delay: 0.3})
        //     .from(`${value.info}`, { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
        // }
    }
    
    var x = window.matchMedia("(min-width: 1000px)")
    // var y = window.matchMedia("(min-width: 300px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
})
  
// function myFunction(x) {
//     if (x.matches) {
//         //projects animation
//         let sp = gsap.timeline({scrollTrigger:{ trigger:`${object.project1.id}`, start: "center -=50%"}});

//         sp.from("#spshurlImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
//         .from("#spshurlInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
        

//         let mg = gsap.timeline({scrollTrigger:{ trigger:'#moneger', start: "center -=50%"}});

//         mg.from("#monegerImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
//         .from("#monegerInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
        

//         let wt = gsap.timeline({scrollTrigger:{ trigger:'#weather', start: "center -=50%"}});

//         wt.from("#weatherImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
//         .from("#weatherInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
        

//         let tt = gsap.timeline({scrollTrigger:{ trigger:'#TTT', start: "center -=50%"}});

//         tt.from("#TTTImg", { y: 100, opacity: 0, duration: 1, delay: 0.3})
//         .from("#TTTInfo", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
                
//         //freelancing animations
//         let fl = gsap.timeline({scrollTrigger:{ trigger:'#freelancing', start: "center -=50%"}});

//         fl.from("#freelancingCard", { x: 200, opacity: 0, duration: 1, delay: 0.3}, "-=1.4")
//     }
   
//   }
  
//   var x = window.matchMedia("(min-width: 1000px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction)