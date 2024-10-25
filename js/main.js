// Initialisierung der Variablen
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

    // Lichtquellen hinzufügen
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);

    // Kamera-Position festlegen
    camera.position.z = 5;
}

function loadModel(url) {
    const loader = new THREE.GLTFLoader();
    loader.load(url, function(gltf) {
        model = gltf.scene;
        model.scale.set(1, 1, 1); // Stelle sicher, dass das Modell in der richtigen Größe angezeigt wird
        model.position.set(0, 0, 0); // Positioniere das Modell in der Mitte der Szene
        scene.add(model);
        animate();

        // Ladeanzeige entfernen
        document.getElementById('loadingText').style.display = 'none';
    }, undefined, function(error) {
        console.error(error);
    });
}

function animate() {
    requestAnimationFrame(animate);
    if (model) {
        model.rotation.y += 0.01; // Modell leicht drehen, um Bewegung zu zeigen
    }
    renderer.render(scene, camera);
}

// Initialisierung aufrufen
init();

// Modell laden (hier den Link zum 3D-Modell einfügen)
loadModel('https://drive.google.com/file/d/1LG8Ce9_C-WyVq9RvWJr0BVUkXCdSxhpE/view?usp=drive_link');
