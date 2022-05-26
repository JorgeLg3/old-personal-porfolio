const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'navmenu')


const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.getElementById('navmenu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.titulo', {})
sr.reveal('.subtitulo', {origin: 'right', delay:200})
sr.reveal('.boton', { delay:400})

sr.reveal('.section-title', {origin: 'left'})

sr.reveal('.portrait-img', {delay:500})
sr.reveal('.contenedor', {delay:500})
sr.reveal('.boton2', {delay: 600, interval: 200})

sr.reveal('.portfolio-img', {interval: 200})

sr.reveal('.contenedor6', {delay:400, interval:200})

sr.reveal('.contact-subtitle', {})
sr.reveal('.contact-text', {interval: 200, delay: 400})
sr.reveal('.contact-input', {delay: 200})
sr.reveal('.contact-button', {delay: 600})
sr.reveal('.social-menu', {delay: 500})