// // src/components/SmokeEffect.tsx

// import * as THREE from 'three';
// import { useEffect, useRef } from 'react';
// // import '../styles/humo.css';


// const SmokeEffect: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const clock = new THREE.Clock();

//     const renderer = new THREE.WebGLRenderer({
//       canvas: canvas,
//       alpha: true,
//     });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);

//     const scene = new THREE.Scene();

//     const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 100);
//     camera.position.z = 5;
//     scene.add(camera);

//     const light = new THREE.DirectionalLight(0xf0f0f0, 1.0);
//     light.position.set(-1, 0, 1);
//     scene.add(light);

//     const tex = new THREE.TextureLoader().load('/src/assets/smoke.png');
//     const material = new THREE.MeshLambertMaterial({
//       color: 0xffffff,
//       depthWrite: false,
//       map: tex,
//       transparent: true,
//     });
//     const geometry = new THREE.PlaneGeometry(5, 5);
//     const createParticles = (numberOfParticles: number, size = 5) => 
//       Array.from({ length: numberOfParticles }, () => {
//         const particle = new THREE.Mesh(geometry, material);
//         particle.position.set((Math.random() - 0.5) * size, (Math.random() - 0.5) * size, (Math.random() - 0.5) * size);
//         particle.rotation.z = Math.random() * Math.PI * 2;
//         scene.add(particle);
//         return particle;
//       });
//     const particles = createParticles(8);
//     const update = () => {
//       const dt = clock.getDelta();
//       particles.forEach((particle) => {
//         const { z } = particle.rotation;
//         particle.lookAt(camera.position);
//         particle.rotation.z = z + dt * 0.1;
//       });
//       renderer.render(scene, camera);
//     };

//     renderer.setAnimationLoop(update);

//     const handleResize = () => {
//       const { innerWidth: width, innerHeight: height } = window;
//       renderer.setSize(width, height);
//       camera.aspect = width / height;
//       camera.updateProjectionMatrix();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       renderer.dispose();
//       particles.forEach((particle) => scene.remove(particle));
//     };
//   }, []);

//   return <canvas ref={canvasRef} className="smoke-canvas"></canvas>;
// };


// export default SmokeEffect;
