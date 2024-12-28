'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from './THREE';

const ThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return; // Ensure the container is available
        
        const isLowEndDevice = () => {
            const cores = navigator.hardwareConcurrency || 4; // Default to 4 if not available
            const memory = navigator.deviceMemory || 4; // Default to 4GB if not available

            // Example thresholds
            const isLowCores = cores < 4; // Low core count threshold
            const isLowMemory = memory < 4; // Low memory threshold (less than 4GB)

            // Return true if the device is low-end based on cores, memory, or if it's a mobile device
            return isLowCores || isLowMemory;
        };

        if (isLowEndDevice()) {
            console.warn('Device may not support rendering this background due to performance limitations.');
            return; // Skip rendering
        }
        // Create the scene, camera, and renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
        const renderer = new THREE.WebGLRenderer({ alpha: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Store references for later use
        sceneRef.current = scene;
        cameraRef.current = camera;
        rendererRef.current = renderer;

        // Load the panoramic image and create a texture
        const loader = new THREE.TextureLoader();
        const texture = loader.load('https://images.squarespace-cdn.com/content/v1/5a769958b0786976fb16bcf6/1542774883995-V3ULKOLM6NQ708E3I6YX/orion.png?format=2500ws');

        // Create a spherical geometry and map the texture to it
        const geometry = new THREE.SphereGeometry(10, 60, 40);
        geometry.scale(-1, 1, 1); // Invert the geometry to see the inside

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);

        // Set up the camera
        camera.position.set(0, 0, 0);

        // Animation loop
        const animate = () => {
            sphere.rotation.y += 0.00075;
            renderer.render(scene, camera);
            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Handle window resize
        const handleResize = () => {
            if (cameraRef.current && rendererRef.current) {
                const camera = cameraRef.current;
                const renderer = rendererRef.current;

                // Update camera aspect ratio and renderer size
                const width = window.innerWidth;
                const height = window.innerHeight;
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
                renderer.setSize(width, height);
                renderer.render(scene, camera); // Re-render the scene
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
            if (container) {
                container.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className='background-container'
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: -10,
                backgroundImage: '../../public/resources/bg-img.png'
            }}
        />
    );
};

export default ThreeBackground;