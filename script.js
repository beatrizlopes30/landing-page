// Animação de fade-in ao rolar a página
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('visible');
        }
    });
});

// Efeito de mudança de cor no header ao rolar a página
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Efeito de onda no botão do hero
const heroBtn = document.querySelector('.hero .btn');
heroBtn.addEventListener('click', () => {
    heroBtn.classList.add('wave');
    setTimeout(() => {
        heroBtn.classList.remove('wave');
    }, 1000);
});

// Envio do formulário
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
    })
    .then(response => response.json())
    .then(data => {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Erro:', error);
    });
});