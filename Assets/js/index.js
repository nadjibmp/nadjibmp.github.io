const menuBtn = document.querySelector('.navbar-toggler');
const container = document.querySelector('.navbar-setup');
let menuOpen = false;
menuBtn.addEventListener("click", () => {
    if (!menuOpen) {
        menuBtn.classList.add("open");
        container.classList.remove('container');
        menuOpen = true;
    } else {
        menuBtn.classList.remove("open");
        container.classList.add('container');
        menuOpen = false;
    }
})

// ScrollReveal().reveal('.about-me');
const sr = ScrollReveal({
    distance : '60px',
    duration : 2800,
    // resert : true,
})
sr.reveal('.about-me',{
    origin: 'top',
    interval: 100,
})
sr.reveal('.avatar',{
    origin: 'left',
})
sr.reveal('.informations',{
    origin: 'right',  
})
sr.reveal('.atouts',{
    origin: 'bottom',
})
sr.reveal('.card-style',{
    origin: 'top',
})
sr.reveal('.contact-mee',{
    origin: 'left',  
})
sr.reveal('.cursus-left',{
    origin: 'left',
})
sr.reveal('.cursus-right',{
    origin: 'right',
})

sr.reveal('.card-pro',{
    origin: 'top',
})

sr.reveal('.touch',{
    origin: 'bottom',
})

// active Link
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 120;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.navbar a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)