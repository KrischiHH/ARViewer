// main.js

// Funktion, um das AR-Modell zu laden und die Kameraeinstellungen zu initialisieren
function initAR() {
    const model = document.getElementById('model');

    // Hier kannst du weitere Einstellungen oder Animationen hinzufügen
    model.addEventListener('model-loaded', () => {
        console.log('Das 3D-Modell wurde geladen.');
    });

    // Kamera-Event hinzufügen (optional)
    const camera = document.querySelector('[camera]');
    camera.addEventListener('loaded', () => {
        console.log('Die Kamera ist bereit.');
    });
}

// Wenn die Seite geladen ist, AR initialisieren
window.addEventListener('load', initAR);
