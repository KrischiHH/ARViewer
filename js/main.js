let scene, camera, renderer;
let model;

function init() {
    // Szene und Kamera initialisieren
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Renderer einrichten
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('viewer').appendChild(renderer.domElement);
    
    // Standard Ambient Light hinzufügen
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Etwas Licht
    scene.add(ambientLight);
    
    // Punktlicht hinzufügen für bessere Beleuchtung
    const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Punktlicht
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    
    // Kamera-Position festlegen
    camera.position.z = 5;
}

function loadModel(url) {
    const loader = new THREE.GLTFLoader();
    loader.load(url, function(gltf) {
        model = gltf.scene;
        model.scale.set(1, 1, 1); // Skalierung anpassen
        model.position.set(0, 0, 0); // Position anpassen
        scene.add(model);
        animate();
    }, undefined, function(error) {
        console.error(error);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.01; // Modell leicht drehen
    }
    renderer.render(scene, camera);
}

// Initialisierung aufrufen
init();

// Modell laden
loadModel('https://raw.githubusercontent.com/KrischiHH/ARViewer/main/AR-Tree.glb');
