gsap.fromTo(".nav", {opacity:0, y:-100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power3.out", y: 0});
gsap.fromTo(".projectInfoContainer", {opacity:0, x:-100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power1.out", x: 0});
gsap.fromTo(".projectImageContainer", {opacity:0, x:100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power1.out", x: 0});
gsap.fromTo(".curve", {opacity:0, y:100},{duration: 1, opacity:1 ,delay: 0.7 ,ease:"power1.out", y: 0});


el = document.getElementById("hero_1")

function ClickAbout() {
    
    // console.log(document.URL)
    // // location.href='#hero_1'
    // if (document.URL.includes("http://127.0.0.1:5500/index.html")) {
    //     window.scroll(0, (window.innerHeight*2.5))
    //     console.log("scrolled")
    //   }    

    // setTimeout(scrollClickAbout, 3000);

    // location.href='../../index.html'
    console.log(el)
    // el.scrollIntoView();

    // window.addEventListener("load", function(){
    //     console.log("loaded")
    //     location.href='../../index.html'
    //     scrollClickAbout
    // }); 

}