function scrollToSection(section, duration) {
    let targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
}

document.getElementById('explorar-btn').addEventListener('click', function () {
    const section = document.getElementById('crypto-info');
    scrollToSection(section, 1500);
});

function scrollToSection(section, duration) {
    let targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animationScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animationScroll);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animationScroll);
}

document.getElementById('btnCrypto').addEventListener('click', function () {
    const section = document.getElementById('coins-info');
    scrollToSection(section, 1500);
});
