document.getElementById('toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const icon = this.querySelector('i');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

document.getElementById('forgot-password-link').addEventListener('click', function () {
    document.getElementById('forgot-password-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('forgot-password-modal').style.display = 'none';
});

window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('forgot-password-modal')) {
        document.getElementById('forgot-password-modal').style.display = 'none';
    }
});


// JavaScript para o modal
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('forgot-password-modal');
    var btn = document.getElementById('forgot-password-link');
    var span = document.getElementsByClassName('close')[0];
    var cancelBtn = document.getElementById('cancel-btn');
    var recoverBtn = document.getElementById('recover-btn');

    // Mostrar o modal
    btn.onclick = function() {
        modal.style.display = 'flex';
    }

    // Fechar o modal quando o usuário clicar no 'x'
    span.onclick = function() {
        modal.style.display = 'none';
    }

    // Fechar o modal quando o usuário clicar em "Cancelar"
    cancelBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Fechar o modal quando o usuário clicar fora do modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
