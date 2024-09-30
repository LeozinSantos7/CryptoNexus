window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add('scrolled'); // Adiciona a classe ao rolar
    } else {
        navbar.classList.remove('scrolled'); // Remove a classe ao voltar
    }
};