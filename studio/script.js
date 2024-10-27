document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('modelUpload');
    const modelUrl = URL.createObjectURL(fileInput.files[0]);
    document.getElementById('model').setAttribute('gltf-model', modelUrl);
});

// Marker Selection
document.getElementById('markerSelect').addEventListener('change', function(event) {
    const selectedMarker = event.target.value;
    const markerElement = document.getElementById('marker');
    markerElement.setAttribute('preset', selectedMarker);
});
