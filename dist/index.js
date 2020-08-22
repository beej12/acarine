function pageTransition() {
    
    var tl = gsap.timeline();

    tl.to('ul.transition li', { duration: .5, scaleY: 1, transformOrigin: "bottom left", stagger: .2})
    tl.to('ul.transition li', { duration: .5, scaleY: 0, transformOrigin: "bottom left", stagger: .1, delay: .1})
} 

function contentAnimation() {

    var tween = gsap.from("#midbar", {
        duration: 5,
        opacity: 0,
        ease: "none",
        paused: false
    });

    var landing = gsap.from("#logo", {
        duration: 5,
        opacity: 0,
        ease: "none",
        paused: false
    });


    document.querySelector("#play").onclick = () => tween.play();
    document.querySelector("#play").onclick = () => landing.play();
    document.querySelector("#nav").onclick = () => nav.play();

}

function navAnimation () {
    var nav = gsap.to("#nav", {
        duration: .5,
        rotation: 90,
        ease: "none",
    });
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({

    sync: true,

    transitions: [{

        async leave(data) {

            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        },
        async enter(data) {
            contentAnimation();
        },
        async once(data) {
            contentAnimation();
        }
    }]
});