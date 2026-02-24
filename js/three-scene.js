// ============================================
// THREE.JS 3D SCENE - Dominion Observatory
// GLB/GLTF Model Display
// ============================================

class Observatory3DScene {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.model = null;
        this.controls = null;
        this.container = null;
        this.isRotating = false;
        this.animationId = null;
        this.mixer = null;
        this.clock = new THREE.Clock();
    }
    
    init(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) {
            console.error(`Container #${containerId} not found`);
            return;
        }
        
        // Ensure container has size
        if (this.container.clientWidth === 0 || this.container.clientHeight === 0) {
            console.warn('Container has zero dimensions, setting fallback');
            this.container.style.width = '100%';
            this.container.style.height = '600px';
        }
        
        // Clear loading spinner
        this.container.innerHTML = '';
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x0A0A0F);
        
        // Camera
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        this.camera.position.set(0, 30, 60);
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLighting();
        
        // Load GLB file
        this.loadGLBModel();
        
        // Controls
        this.setupControls();
        
        // Handle resize
        window.addEventListener('resize', () => this.onResize());
        
        console.log('3D Scene initialized successfully');
    }
    
    setupLighting() {
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
        
        const hemiLight = new THREE.HemisphereLight(0xF5F1E8, 0x0A0A0F, 0.6);
        hemiLight.position.set(0, 50, 0);
        this.scene.add(hemiLight);
        
        const dirLight = new THREE.DirectionalLight(0xF5F1E8, 1.0);
        dirLight.position.set(30, 50, 30);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        this.scene.add(dirLight);
        
        const rimLight = new THREE.SpotLight(0xD4AF37, 0.8);
        rimLight.position.set(-30, 30, -30);
        rimLight.lookAt(0, 0, 0);
        this.scene.add(rimLight);
    }
    
    loadGLBModel() {
        const glbPath = 'assets/models/observatory.glb';
        const alternativePaths = [
            'assets/models/observatory.gltf',
            'assets/models/dominion-observatory.glb',
            'assets/models/building.glb'
        ];
        
        this.checkFileExists(glbPath, alternativePaths);
    }
    
    checkFileExists(primaryPath, alternativePaths) {
        fetch(primaryPath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    console.log('GLB found at primary path');
                    this.loadGLBFile(primaryPath);
                } else {
                    this.tryAlternativePaths(alternativePaths, 0);
                }
            })
            .catch(() => {
                this.tryAlternativePaths(alternativePaths, 0);
            });
    }
    
    tryAlternativePaths(paths, index) {
        if (index >= paths.length) {
            this.showUploadInstructions();
            return;
        }
        
        fetch(paths[index], { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    console.log(`GLB found at: ${paths[index]}`);
                    this.loadGLBFile(paths[index]);
                } else {
                    this.tryAlternativePaths(paths, index + 1);
                }
            })
            .catch(() => {
                this.tryAlternativePaths(paths, index + 1);
            });
    }
    
    loadGLBFile(path) {
        const loader = new THREE.GLTFLoader();
        
        loader.load(
            path,
            (gltf) => {
                this.displayGLBModel(gltf);
            },
            (progress) => {
                const percent = (progress.loaded / progress.total * 100).toFixed(0);
                console.log(`Loading GLB: ${percent}%`);
                this.updateLoadingProgress(percent);
            },
            (error) => {
                console.error('Error loading GLB:', error);
                this.showErrorMessage(`Failed to load GLB: ${error.message}`);
            }
        );
    }
    
    displayGLBModel(gltf) {
        this.model = gltf.scene;
        
        const box = new THREE.Box3().setFromObject(this.model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 40;
        const scale = targetSize / maxDim;
        
        this.model.scale.set(scale, scale, scale);
        this.model.position.sub(center.multiplyScalar(scale));
        
        const lowestY = box.min.y * scale;
        this.model.position.y -= lowestY;
        
        this.model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        
        this.scene.add(this.model);
        
        if (gltf.animations && gltf.animations.length > 0) {
            this.mixer = new THREE.AnimationMixer(this.model);
            gltf.animations.forEach((clip) => {
                this.mixer.clipAction(clip).play();
            });
        }
        
        const cameraDistance = maxDim * scale * 1.5;
        this.camera.position.set(cameraDistance * 0.6, cameraDistance * 0.5, cameraDistance);
        this.camera.lookAt(0, size.y * scale * 0.3, 0);
        
        this.addGroundPlane(size.x * scale, size.z * scale);
        this.animate();
        this.showModelLoaded(size, scale);
    }
    
    addGroundPlane(width, depth) {
        const groundGeometry = new THREE.PlaneGeometry(width * 3, depth * 3);
        const groundMaterial = new THREE.ShadowMaterial({
            opacity: 0.3,
            color: 0x000000
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = 0;
        ground.receiveShadow = true;
        this.scene.add(ground);
        
        const gridHelper = new THREE.GridHelper(
            Math.max(width, depth) * 2, 
            20, 
            0xD4AF37, 
            0x1A1A25
        );
        gridHelper.position.y = -0.01;
        gridHelper.material.opacity = 0.15;
        gridHelper.material.transparent = true;
        this.scene.add(gridHelper);
    }
    
    updateLoadingProgress(percent) {
        let loadingEl = this.container.querySelector('.glb-loading');
        if (!loadingEl) {
            loadingEl = document.createElement('div');
            loadingEl.className = 'glb-loading';
            loadingEl.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
                color: #D4AF37;
                font-family: Cinzel, serif;
            `;
            this.container.appendChild(loadingEl);
        }
        loadingEl.innerHTML = `
            <div style="font-size: 2rem; margin-bottom: 1rem;">🏛️</div>
            <div>Loading 3D Model...</div>
            <div style="margin-top: 0.5rem; font-size: 0.875rem;">${percent}%</div>
        `;
    }
    
    showModelLoaded(size, scale) {
        const loadingEl = this.container.querySelector('.glb-loading');
        if (loadingEl) loadingEl.remove();
        console.log(`Model loaded: ${size.x.toFixed(1)} x ${size.y.toFixed(1)} x ${size.z.toFixed(1)}`);
    }
    
    showUploadInstructions() {
        this.container.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: #E8E4D9;
                text-align: center;
                padding: 2rem;
                background: #0A0A0F;
            ">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🏛️</div>
                <h3 style="color: #D4AF37; margin-bottom: 1rem; font-family: Cinzel, serif;">
                    3D Model Required
                </h3>
                <p style="max-width: 450px; margin-bottom: 1.5rem; line-height: 1.6;">
                    Upload your GLB file to display the Dominion Observatory in interactive 3D.
                </p>
                <div style="
                    background: #1A1A25;
                    padding: 1.5rem;
                    border-radius: 8px;
                    border: 1px solid #8B7355;
                    text-align: left;
                    font-size: 0.9rem;
                    max-width: 400px;
                    width: 100%;
                ">
                    <p style="margin-bottom: 0.75rem; color: #D4AF37;">
                        <strong>Required file:</strong>
                    </p>
                    <code style="
                        display: block;
                        background: #0A0A0F;
                        padding: 0.5rem;
                        border-radius: 4px;
                        color: #4A7C59;
                        margin-bottom: 1rem;
                        font-family: monospace;
                    ">assets/models/observatory.glb</code>
                </div>
            </div>
        `;
    }
    
    showErrorMessage(message) {
        this.container.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: #E8E4D9;
                text-align: center;
                padding: 2rem;
            ">
                <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                <h3 style="color: #dc3545; margin-bottom: 1rem; font-family: Cinzel, serif;">
                    Error Loading Model
                </h3>
                <p style="color: #888; margin-bottom: 1.5rem; max-width: 400px;">
                    ${message}
                </p>
                <button onclick="location.reload()" style="
                    padding: 0.75rem 1.5rem;
                    background: #D4AF37;
                    color: #0A0A0F;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: Cinzel, serif;
                    font-weight: 600;
                ">Retry</button>
            </div>
        `;
    }
    
    setupControls() {
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        const rotationSpeed = 0.005;
        
        const canvas = this.renderer.domElement;
        
        canvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
            canvas.style.cursor = 'grabbing';
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (!isDragging || !this.model) return;
            
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            this.model.rotation.y += deltaMove.x * rotationSpeed;
            const newX = this.model.rotation.x + deltaMove.y * rotationSpeed;
            this.model.rotation.x = Math.max(-Math.PI/3, Math.min(Math.PI/3, newX));
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        canvas.addEventListener('mouseup', () => {
            isDragging = false;
            canvas.style.cursor = 'grab';
        });
        
        canvas.addEventListener('mouseleave', () => {
            isDragging = false;
            canvas.style.cursor = 'default';
        });
        
        canvas.style.cursor = 'grab';
        
        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        }, { passive: false });
        
        canvas.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1 || !this.model) return;
            e.preventDefault();
            
            const deltaMove = {
                x: e.touches[0].clientX - previousMousePosition.x,
                y: e.touches[0].clientY - previousMousePosition.y
            };
            
            this.model.rotation.y += deltaMove.x * rotationSpeed;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        }, { passive: false });
        
        canvas.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Zoom
        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomSpeed = 0.05;
            const minDist = 20;
            const maxDist = 150;
            
            this.camera.position.z += e.deltaY * zoomSpeed;
            this.camera.position.z = Math.max(minDist, Math.min(maxDist, this.camera.position.z));
        }, { passive: false });
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        
        if (this.mixer) {
            this.mixer.update(delta);
        }
        
        if (this.isRotating && this.model) {
            this.model.rotation.y += 0.3 * delta;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    onResize() {
        if (!this.container || !this.camera || !this.renderer) return;
        
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
    
    resetCamera() {
        if (!this.model) return;
        this.camera.position.set(0, 30, 60);
        this.camera.lookAt(0, 0, 0);
    }
    
    toggleWireframe() {
        if (!this.model) return;
        this.model.traverse((child) => {
            if (child.isMesh && child.material) {
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.wireframe = !m.wireframe);
                } else {
                    child.material.wireframe = !child.material.wireframe;
                }
            }
        });
    }
    
    toggleRotation() {
        this.isRotating = !this.isRotating;
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen().catch(err => {
                console.error('Fullscreen error:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        this.scene.traverse((object) => {
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(m => m.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}

// ============================================
// INITIALIZATION
// ============================================

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the model page/section
    const modelContainer = document.getElementById('model-container');
    
    if (modelContainer) {
        console.log('Initializing 3D scene...');
        const observatory3D = new Observatory3DScene();
        observatory3D.init('model-container');
        
        // Expose to global scope for debugging
        window.observatory3D = observatory3D;
    } else {
        console.log('No #model-container found, skipping 3D init');
    }
});

// Also check immediately in case DOM is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    const modelContainer = document.getElementById('model-container');
    if (modelContainer && !window.observatory3D) {
        console.log('Initializing 3D scene (immediate)...');
        const observatory3D = new Observatory3DScene();
        observatory3D.init('model-container');
        window.observatory3D = observatory3D;
    }
                                     }
