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


function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('password-icon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.classList.remove('fa-eye');
        toggleButton.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleButton.classList.remove('fa-eye-slash');
        toggleButton.classList.add('fa-eye');
    }
}