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


console.log((window.innerHeight*2.5))
//Smaooth scroll
function scrollClickAbout() {
    window.scroll(0, (window.innerHeight*2.5))
}

function scrollClickProjects() {

    window.scroll(0, (window.innerHeight*3.8))
}

