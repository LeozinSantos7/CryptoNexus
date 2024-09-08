function mascara(i)
{
    var v = i.value;

    if(isNaN(v[v.length-1])) //impede entrar outros caracteres que não sejam números
    {
        i.value = v.substring(0, v.length-1);
        return;
    }

    i.setAttribute('maxlength', '14'); //máximo de caracteres permitidos
    if(v.length == 3 || v.length == 7) i.value += '.'; //adiciona ponto e vírgula a cada 3 números
    if(v.length == 11) i.value += '-'; //adiciona traço após o segundo dígito do CPF
}

document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function() {
        const input = this.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        document.body.style.position = "fixed"; // Fixa a posição do body
    }
});
