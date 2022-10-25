
function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
}

gsap.from('nav', {opacity:0, duration: 2, stagger: 1} ) 
gsap.from('h1', {opacity:0, duration: 2, delay: 0.5} )


gsap.to(".greets",{
    text: "Привет! Меня зовут Лейсян. Я начинающая Веб разработчица :)",
    duration: 12,
    repeatDelay: 10,
    ease: "power1",
    delay: 4,
    yoyo: true,
    repeat: -1,
    }) 
// gsap.to(".frontEnd",{
// text: "Front-End Developer ",
// duration: 4,
// ease: "power1",
// delay: 2.5
//  }) 


    const tl = gsap.timeline({defaults: {duration: .2}, repeat: -1, repeatDelay: 3})
    tl.to(".btn", {rotate: 5})
    .to(".btn", {rotate:- 5})
    .to(".btn", {rotate: 0})




    

