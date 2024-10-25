const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Lichtquellen hinzufügen
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

camera.position.z = 5;

// Funktion zum Laden des Modells
function loadModel(url) {
    const loader = new THREE.GLTFLoader();
    loader.load(url, (gltf) => {
        scene.add(gltf.scene);
        render();
    }, undefined, function (error) {
        console.error('Ein Fehler ist aufgetreten: ', error);
    });
}

// Modell-URL
loadModel('https://drive.google.com/uc?export=download&id=1LG8Ce9_C-WyVq9RvWJr0BVUkXCdSxhpE');

// Render-Funktion
function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
