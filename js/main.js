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
    
    // Licht hinzufügen
    const light = new THREE.AmbientLight(0xffffff);
    scene.add(light);
    
    // Kamera-Position festlegen
    camera.position.z = 5;
}

function loadModel(url) {
    const loader = new THREE.GLTFLoader();
    loader.load(url, function(gltf) {
        model = gltf.scene;
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

// Beispiel: Laden eines Modells (hier eine Platzhalter-URL)
loadModel('https://raw.githubusercontent.com/KrischiHH/ARViewer/main/AR-Tree.glb
'); // Ersetze dies durch den tatsächlichen Pfad oder die URL deines 3D-Modells
