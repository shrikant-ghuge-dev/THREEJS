import * as THREE from 'three';

// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// Add the camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create and add cube object
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Add lighting
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light);

// Setup the renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

// Add renderer to the DOM
document.body.appendChild(renderer.domElement);

// Animation loop to render the scene
function animate() {
    requestAnimationFrame(animate);

    // Add rotation to the cube for visibility
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    // Render the scene and camera
    renderer.render(scene, camera);
}

// Call the animation function
animate();

// Handle window resize events
window.addEventListener('resize', () => {
    // Update renderer and camera aspect ratio on window resize
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
