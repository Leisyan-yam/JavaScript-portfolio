
function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
}

gsap.from('nav', {opacity:0, duration: 2, stagger: 1} ) 
gsap.from('h1', {opacity:0, duration: 2, stagger: 1} )


gsap.to(".greeting",{
    text: "Hi there! My name is Leisyan. I am Moscow based Front End developer.",
    duration: 8,
    ease: "power1",
    delay: 2
    }) 





    

