var animation = lottie.loadAnimation({
    container: document.getElementById('lottieAnimation'), // O contêiner onde a animação será renderizada
    renderer: 'svg', // Tipo de renderização (SVG é o mais comum)
    loop: true, // Define se a animação deve se repetir
    autoplay: true, // Reproduz automaticamente
    path: './Anim/AnimationMarket.json' // Caminho para o arquivo JSON da animação
});
