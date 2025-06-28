// Menú Hamburguesa Responsive
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón hamburguesa si no existe
    const menuToggle = document.querySelector('.menu-toggle') || document.createElement('div');
    if (!document.querySelector('.menu-toggle')) {
        menuToggle.className = 'menu-toggle';
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.querySelector('.header').appendChild(menuToggle);
    }

    const navbar = document.querySelector('.navbar ul');
    
    // Función para alternar menú
    function toggleMenu() {
        navbar.classList.toggle('show');
        menuToggle.innerHTML = navbar.classList.contains('show') ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    }

    // Evento click
    menuToggle.addEventListener('click', toggleMenu);
    
    // Cerrar menú al hacer clic en enlace (solo móviles)
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && navbar.classList.contains('show')) {
                toggleMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            !e.target.closest('.navbar') && 
            !e.target.closest('.menu-toggle') && 
            navbar.classList.contains('show')) {
            toggleMenu();
        }
    });
});

// Formulario de Contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (name && email && message) {
                // Validación básica de email
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    alert('Por favor ingresa un email válido.');
                    return;
                }
                
                // Mostrar feedback
                alert(`Gracias por contactarnos, ${name}. Nos pondremos en contacto contigo pronto.`);
                contactForm.reset();
                
                // Aquí podrías añadir AJAX para enviar el formulario
                // fetch('tu-endpoint', { method: 'POST', body: new FormData(contactForm) });
                
            } else {
                alert('Por favor, completa todos los campos requeridos.');
            }
        });
    }
});

// Inicializar Swiper (si existe)
document.addEventListener('DOMContentLoaded', function() {
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer) {
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // Efecto de transición suave
            effect: 'slide',
            speed: 600
        });
    }
});

// Animación de imagen (evitar repetición)
document.addEventListener('DOMContentLoaded', function() {
    const aboutImage = document.querySelector('.about-image img');
    if (aboutImage) {
        aboutImage.addEventListener('animationend', function() {
            this.classList.add('animated');
        });
    }
});

// Smooth scrolling para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100, // Ajuste para header fijo
                behavior: 'smooth'
            });
        }
    });
});

// Detectar cambio de tamaño de ventana
window.addEventListener('resize', function() {
    const navbar = document.querySelector('.navbar ul');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth > 768 && navbar.classList.contains('show')) {
        navbar.classList.remove('show');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }
});
