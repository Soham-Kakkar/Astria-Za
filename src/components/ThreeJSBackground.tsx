'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return; // Ensure the container is available

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
            }}
        />
    );
};

export default ThreeBackground;