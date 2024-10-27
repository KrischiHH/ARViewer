// main.js

// Dynamische Anpassung für Mobil- und Desktopgeräte
function configureARSettings() {
    const arScene = document.querySelector('a-scene');
    const camera = document.querySelector('#camera');
    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    const screenAspectRatio = window.innerWidth / window.innerHeight;

    if (isMobile) {
        arScene.setAttribute('arjs', `sourceType: webcam; debugUIEnabled: false; sourceWidth: 1080; sourceHeight: 1920; displayWidth: ${window.innerWidth}; displayHeight: ${window.innerHeight};`);
        camera.setAttribute('camera', `fov: ${screenAspectRatio > 1 ? 70 : 60}`);
    } else {
        arScene.setAttribute('arjs', `sourceType: webcam; debugUIEnabled: false; sourceWidth: 1920; sourceHeight: 1080; displayWidth: ${window.innerWidth}; displayHeight: ${window.innerHeight};`);
        camera.setAttribute('camera', 'fov: 50');
    }
}

// AR-Konfiguration beim Laden und bei Größenänderungen
window.addEventListener('load', configureARSettings);
window.addEventListener('resize', configureARSettings);
