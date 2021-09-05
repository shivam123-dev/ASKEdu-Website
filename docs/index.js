const loader = document.getElementById('preloader')
window.addEventListener('load', function () {
    loader.style.display = "none"
})

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


$(document).ready(function () {
    $('.post-container').owlCarousel({
        pagination: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            },
        },
        loop: true
    })
})

