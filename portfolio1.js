const words = ["Harshil"," a Developer",]

function time(){
    var a = 0
    setInterval(function(){
        a = a + Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector(".loader h1").innerHTML = a+"%"
        }else{
            a=100
            document.querySelector(".loader h1").innerHTML = a+"%"
        }
    },150)
}
time()
let t1 = gsap.timeline()
t1.to(".loader h1",{
    scale:1.5,
    delay:1,
    duration:1.5,
    opacity:0,
    onStart:time()
})

t1.to(".loader",{
    top:"-100vh",
    // delay:1,
    duration:1,
})

let t2 = gsap.timeline()

t2.fromTo(".name>span", { opacity: 0,delay:4 }, { duration: 2, opacity: 1, stagger: 0.2,ease:"none",},3)
t2.fromTo(".name h2 b>span", { x: 100, opacity: 0 }, { duration: 2, x: 0, opacity: 1, stagger: 0.2 ,},3)
t2.fromTo(".navbar ul li:nth-child(n)", { y: -100, opacity: 0, }, { duration: 2, y: 0, opacity: 1, stagger: 0.2},3)

gsap.from(".language>div", {
    y: -100,
    opacity: 0,
    duration: 2,
    stagger: 1,
    scrollTrigger: {
        trigger: ".skill",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        scrub: 2
    }
})

gsap.from(".socialmedia>div",{
    x:-100,
    opacity:0,
    duration:2,
    stagger:1,
    scrollTrigger:{
        trigger:".Contect",
        scroller:"body",
        // markers:true,
        scrub:2,
        start:"top 50%",
        end:"top 90%"
    }
})

let cursor = gsap.to("#cursor",{opacity:0,ease:"power2.inOut",repeat:-1})

let mastertl = gsap.timeline({repeat:-1})

words.forEach(word => {
    let tl = gsap.timeline({repeat:1,yoyo:true,repeatDelay:1})
    tl.to("#text",{duration:1,text:word})
    mastertl.add(tl)
    
});

