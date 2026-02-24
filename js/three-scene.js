// ============================================
// THREE.JS 3D SCENE
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
        this.mixer = null; // For animations
        this.clock = new THREE.Clock();
    }
    
    init(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
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
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.0;
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLighting();
        
        // Load GLB file
        this.loadGLBModel();
        
        // Controls
        this.setupControls();
        
        // Handle resize
        window.addEventListener('resize', () => this.onResize());
    }
    
    setupLighting() {
        // Ambient - base illumination
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
        
        // Hemisphere - sky/ground simulation
        const hemiLight = new THREE.HemisphereLight(0xF5F1E8, 0x0A0A0F, 0.6);
        hemiLight.position.set(0, 50, 0);
        this.scene.add(hemiLight);
        
        // Main directional - sun/moon key light
        const dirLight = new THREE.DirectionalLight(0xF5F1E8, 1.0);
        dirLight.position.set(30, 50, 30);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        dirLight.shadow.camera.near = 0.5;
        dirLight.shadow.camera.far = 500;
        dirLight.shadow.bias = -0.001;
        this.scene.add(dirLight);
        
        // Rim light - brass accent
        const rimLight = new THREE.SpotLight(0xD4AF37, 0.8);
        rimLight.position.set(-30, 30, -30);
        rimLight.lookAt(0, 0, 0);
        this.scene.add(rimLight);
        
        // Fill light - soften shadows
        const fillLight = new THREE.DirectionalLight(0x4A7C59, 0.3);
        fillLight.position.set(-20, 10, 20);
        this.scene.add(fillLight);
    }
    
    loadGLBModel() {
        // Primary path for GLB file
        const glbPath = 'assets/models/observatory.glb';
        
        // Alternative paths to try
        const alternativePaths = [
            'assets/models/observatory.gltf',
            'assets/models/dominion-observatory.glb',
            'assets/models/building.glb'
        ];
        
        // Check if file exists
        this.checkFileExists(glbPath, alternativePaths);
    }
    
    checkFileExists(primaryPath, alternativePaths) {
        fetch(primaryPath, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    console.log('GLB found at primary path');
                    this.loadGLBFile(primaryPath);
                } else {
                    // Try alternatives
                    this.tryAlternativePaths(alternativePaths, 0);
                }
            })
            .catch(() => {
                this.tryAlternativePaths(alternativePaths, 0);
            });
    }
    
    tryAlternativePaths(paths, index) {
        if (index >= paths.length) {
            // No GLB found - show upload instructions
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
        
        // Optional: Setup Draco for compressed files
        // const dracoLoader = new THREE.DRACOLoader();
        // dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
        // loader.setDRACOLoader(dracoLoader);
        
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
        
        // Calculate bounding box for auto-scaling
        const box = new THREE.Box3().setFromObject(this.model);
        const size = box.getSize(new THREE.Vector3());
        const center = box.getCenter(new THREE.Vector3());
        
        console.log('Model dimensions:', size);
        console.log('Model center:', center);
        
        // Auto-scale to fit view
        const maxDim = Math.max(size.x, size.y, size.z);
        const targetSize = 40; // Target size in world units
        const scale = targetSize / maxDim;
        
        // Apply transformations
        this.model.scale.set(scale, scale, scale);
        
        // Center the model
        this.model.position.sub(center.multiplyScalar(scale));
        
        // Adjust height to sit on ground
        const lowestY = box.min.y * scale;
        this.model.position.y -= lowestY;
        
        // Enable shadows
        this.model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                
                // Enhance materials if needed
                if (child.material) {
                    child.material.envMapIntensity = 1.0;
                }
            }
        });
        
        // Add to scene
        this.scene.add(this.model);
        
        // Setup animations if present
        if (gltf.animations && gltf.animations.length > 0) {
            this.mixer = new THREE.AnimationMixer(this.model);
            gltf.animations.forEach((clip) => {
                this.mixer.clipAction(clip).play();
            });
            console.log(`Loaded ${gltf.animations.length} animation(s)`);
        }
        
        // Position camera
        const cameraDistance = maxDim * scale * 1.5;
        this.camera.position.set(cameraDistance * 0.6, cameraDistance * 0.5, cameraDistance);
        this.camera.lookAt(0, size.y * scale * 0.3, 0);
        
        // Add ground reflection plane
        this.addGroundPlane(size.x * scale, size.z * scale);
        
        // Start animation loop
        this.animate();
        
        // Update UI
        this.showModelLoaded(size, scale);
    }
    
    addGroundPlane(width, depth) {
        // Shadow-catching ground
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
        
        // Visual grid
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
        // Could update a progress bar here
        const container = this.container;
        if (container && percent < 100) {
            // Check if loading element exists, create if not
            let loadingEl = container.querySelector('.glb-loading');
            if (!loadingEl) {
                loadingEl = document.createElement('div');
                loadingEl.className = 'glb-loading';
                loadingEl.style.cssText = `
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    text-align: center;
                    color: var(--brass);
                    font-family: var(--font-display);
                `;
                container.appendChild(loadingEl);
            }
            loadingEl.innerHTML = `
                <div style="font-size: 2rem; margin-bottom: 1rem;">🏛️</div>
                <div>Loading 3D Model...</div>
                <div style="margin-top: 0.5rem; font-size: 0.875rem;">${percent}%</div>
            `;
        }
    }
    
    showModelLoaded(size, scale) {
        // Remove loading element
        const loadingEl = this.container.querySelector('.glb-loading');
        if (loadingEl) loadingEl.remove();
        
        console.log(`Model loaded: ${size.x.toFixed(1)} x ${size.y.toFixed(1)} x ${size.z.toFixed(1)} units, scale: ${scale.toFixed(3)}`);
    }
    
    showUploadInstructions() {
        this.container.innerHTML = `
            <div class="glb-upload-prompt" style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: var(--parchment);
                text-align: center;
                padding: 2rem;
                background: var(--obsidian);
            ">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🏛️</div>
                <h3 style="color: var(--brass); margin-bottom: 1rem; font-family: var(--font-display);">
                    3D Model Required
                </h3>
                <p style="max-width: 450px; margin-bottom: 1.5rem; line-height: 1.6;">
                    Upload your GLB file to display the Dominion Observatory in interactive 3D.
                </p>
                
                <div style="
                    background: var(--obsidian-light);
                    padding: 1.5rem;
                    border-radius: 8px;
                    border: 1px solid var(--brass-dark);
                    text-align: left;
                    font-family: var(--font-body);
                    font-size: 0.9rem;
                    max-width: 400px;
                    width: 100%;
                ">
                    <p style="margin-bottom: 0.75rem; color: var(--brass);">
                        <strong>Required file:</strong>
                    </p>
                    <code style="
                        display: block;
                        background: var(--obsidian);
                        padding: 0.5rem;
                        border-radius: 4px;
                        color: var(--patina);
                        margin-bottom: 1rem;
                        font-family: monospace;
                    ">assets/models/observatory.glb</code>
                    
                    <p style="margin-bottom: 0.75rem; color: var(--brass);">
                        <strong>Upload steps:</strong>
                    </p>
                    <ol style="margin-left: 1.25rem; line-height: 1.8; color: var(--parchment-dim);">
                        <li>In your GitHub repo, click <strong>"Add file"</strong> → <strong>"Upload files"</strong></li>
                        <li>Type filename: <code style="color: var(--patina);">assets/models/observatory.glb</code></li>
                        <li>Select your GLB file from computer</li>
                        <li>Click <strong>"Commit changes"</strong></li>
                        <li>Wait 2-5 minutes, then refresh this page</li>
                    </ol>
                </div>
                
                <div style="
                    margin-top: 1.5rem;
                    padding: 1rem;
                    background: rgba(74, 124, 89, 0.1);
                    border-radius: 4px;
                    border-left: 3px solid var(--patina);
                    max-width: 400px;
                ">
                    <p style="font-size: 0.875rem; color: var(--parchment-dim); margin: 0;">
                        <strong style="color: var(--patina);">Tip:</strong> 
                        GLB files include materials, textures, and animations. 
                        Exported from Blender, SketchUp, or other 3D software.
                    </p>
                </div>
                
                <p style="margin-top: 1.5rem; font-size: 0.8rem; color: var(--parchment-dark);">
                    Alternative filenames: <code>observatory.gltf</code>, <code>dominion-observatory.glb</code>
                </p>
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
                color: var(--parchment);
                text-align: center;
                padding: 2rem;
            ">
                <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                <h3 style="color: var(--alert); margin-bottom: 1rem; font-family: var(--font-display);">
                    Error Loading Model
                </h3>
                <p style="color: var(--parchment-dim); margin-bottom: 1.5rem; max-width: 400px;">
                    ${message}
                </p>
                <button onclick="location.reload()" style="
                    padding: 0.75rem 1.5rem;
                    background: var(--brass);
                    color: var(--obsidian);
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                    font-family: var(--font-display);
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
        
        // Mouse events
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
            
            // Limit vertical rotation
            const currentX = this.model.rotation.x;
            const newX = currentX + deltaMove.y * rotationSpeed;
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
        
        // Zoom with wheel
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
        
        // Update animations
        if (this.mixer) {
            this.mixer.update(delta);
        }
        
        // Auto-rotation
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
    
    // Control methods
    resetCamera() {
        if (!this.model) return;
        
        const box = new THREE.Box3().setFromObject(this.model);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.z);
        
        this.camera.position.set(maxDim * 0.8, maxDim * 0.6, maxDim * 1.5);
        this.camera.lookAt(0, size.y * 0.3, 0);
        
        this.model.rotation.set(0, 0, 0);
    }
    
    toggleWireframe() {
        if (!this.model) return;
        
        this.model.traverse((child) => {
            if (child.isMesh && child.material) {
                // Toggle wireframe on all materials
                if (Array.isArray(child.material)) {
                    child.material.forEach(m => {
                        m.wireframe = !m.wireframe;
                    });
                } else {
                    child.material.wireframe = !child.material.wireframe;
                }
            }
        });
    }
    
    toggleRotation() {
        this.isRotating = !this.isRotating;
        console.log('Auto-rotation:', this.isRotating ? 'ON' : 'OFF');
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
        
        // Dispose of Three.js resources
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

// Initialize
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Observatory3DScene;
                        }        this.scene.add(ambientLight);
        
        // Main directional
        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(50, 100, 50);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        this.scene.add(dirLight);
        
        // Fill light
        const fillLight = new THREE.DirectionalLight(0xD4AF37, 0.3);
        fillLight.position.set(-50, 50, -50);
        this.scene.add(fillLight);
        
        // Rim light
        const rimLight = new THREE.DirectionalLight(0x4A7C59, 0.2);
        rimLight.position.set(0, -50, 50);
        this.scene.add(rimLight);
    }
    
    loadSTLModel() {
        // Check if STL file exists in assets folder
        const stlPath = 'assets/models/observatory.stl';
        
        // Create loading manager
        const manager = new THREE.LoadingManager();
        manager.onProgress = (url, itemsLoaded, itemsTotal) => {
            console.log(`Loading: ${url} (${itemsLoaded}/${itemsTotal})`);
        };
        
        // Try to load STL
        this.attemptSTLLoad(stlPath);
    }
    
    attemptSTLLoad(path) {
        // Check if file exists first
        fetch(path, { method: 'HEAD' })
            .then(response => {
                if (response.ok) {
                    // File exists - load it
                    this.loadSTLFile(path);
                } else {
                    // File not found - show upload instructions
                    this.showUploadInstructions();
                }
            })
            .catch(() => {
                // Network error or file doesn't exist
                this.showUploadInstructions();
            });
    }
    
    loadSTLFile(path) {
        // Load Three.js STLLoader from CDN
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/STLLoader.js';
        
        script.onload = () => {
            const loader = new THREE.STLLoader();
            
            loader.load(
                path,
                (geometry) => {
                    this.displaySTLModel(geometry);
                },
                (progress) => {
                    console.log(`Loading STL: ${(progress.loaded / progress.total * 100).toFixed(0)}%`);
                },
                (error) => {
                    console.error('Error loading STL:', error);
                    this.showErrorMessage('Failed to load STL file. Check console for details.');
                }
            );
        };
        
        document.head.appendChild(script);
    }
    
    displaySTLModel(geometry) {
        // Compute normals for proper lighting
        geometry.computeVertexNormals();
        
        // Center the geometry
        geometry.center();
        
        // Scale to fit view
        const box = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 50 / maxDim; // Scale to fit in 50 units
        
        // Create material - brass/copper look
        const material = new THREE.MeshStandardMaterial({
            color: 0xB87333,        // Copper base
            metalness: 0.7,
            roughness: 0.3,
            emissive: 0x2A1F15,     // Slight warm glow
            emissiveIntensity: 0.1
        });
        
        // Create mesh
        this.model = new THREE.Mesh(geometry, material);
        this.model.scale.set(scale, scale, scale);
        this.model.castShadow = true;
        this.model.receiveShadow = true;
        
        // Add wireframe overlay option
        this.wireframeModel = new THREE.Mesh(
            geometry,
            new THREE.MeshBasicMaterial({
                color: 0xD4AF37,
                wireframe: true,
                transparent: true,
                opacity: 0
            })
        );
        this.wireframeModel.scale.set(scale, scale, scale);
        
        // Group for rotation
        this.modelGroup = new THREE.Group();
        this.modelGroup.add(this.model);
        this.modelGroup.add(this.wireframeModel);
        
        this.scene.add(this.modelGroup);
        
        // Position camera to frame model
        this.camera.position.set(0, size.y * scale * 0.5, maxDim * scale * 2);
        this.camera.lookAt(0, 0, 0);
        
        // Add ground plane
        this.addGroundPlane();
        
        // Start animation
        this.animate();
        
        // Update UI
        this.updateLoadingStatus('Model loaded successfully');
    }
    
    addGroundPlane() {
        const groundGeometry = new THREE.PlaneGeometry(200, 200);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x0A0A0F,
            roughness: 0.9,
            metalness: 0.1
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -25;
        ground.receiveShadow = true;
        this.scene.add(ground);
        
        // Grid helper
        const grid = new THREE.GridHelper(200, 50, 0xD4AF37, 0x1A1A25);
        grid.position.y = -24.9;
        grid.material.opacity = 0.2;
        grid.material.transparent = true;
        this.scene.add(grid);
    }
    
    showUploadInstructions() {
        this.container.innerHTML = `
            <div class="stl-upload-prompt" style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100%;
                color: var(--parchment);
                text-align: center;
                padding: 2rem;
            ">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🏛️</div>
                <h3 style="color: var(--brass); margin-bottom: 1rem;">3D Model Required</h3>
                <p style="max-width: 400px; margin-bottom: 1.5rem;">
                    Upload your STL file to display the Dominion Observatory 3D model.
                </p>
                <div style="
                    background: var(--obsidian-light);
                    padding: 1.5rem;
                    border-radius: 8px;
                    border: 1px solid var(--brass-dark);
                    text-align: left;
                    font-family: monospace;
                    font-size: 0.9rem;
                ">
                    <p style="margin-bottom: 0.5rem;"><strong>Required file:</strong></p>
                    <code style="color: var(--patina);">assets/models/observatory.stl</code>
                    <p style="margin-top: 1rem; margin-bottom: 0.5rem;"><strong>Upload steps:</strong></p>
                    <ol style="margin-left: 1rem; line-height: 1.6;">
                        <li>In your GitHub repo, click "Add file" → "Upload files"</li>
                        <li>Create folder: <code>assets/models/</code></li>
                        <li>Upload your <code>observatory.stl</code> file</li>
                        <li>Commit changes</li>
                        <li>Refresh this page</li>
                    </ol>
                </div>
                <p style="margin-top: 1.5rem; font-size: 0.875rem; color: var(--parchment-dim);">
                    Supported format: STL (ASCII or Binary)
                </p>
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
                color: var(--parchment);
                text-align: center;
                padding: 2rem;
            ">
                <div style="font-size: 3rem; margin-bottom: 1rem;">⚠️</div>
                <h3 style="color: var(--alert); margin-bottom: 1rem;">Error Loading Model</h3>
                <p>${message}</p>
                <button onclick="location.reload()" style="
                    margin-top: 1rem;
                    padding: 0.5rem 1rem;
                    background: var(--brass);
                    color: var(--obsidian);
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                ">Retry</button>
            </div>
        `;
    }
    
    updateLoadingStatus(message) {
        // Could update a status element if needed
        console.log(message);
    }
    
    setupControls() {
        // Simple orbit controls with mouse
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        let rotationSpeed = 0.005;
        
        const canvas = this.renderer.domElement;
        
        // Mouse events
        canvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            if (this.modelGroup) {
                this.modelGroup.rotation.y += deltaMove.x * rotationSpeed;
                this.modelGroup.rotation.x += deltaMove.y * rotationSpeed * 0.5;
            }
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        canvas.addEventListener('mouseleave', () => {
            isDragging = false;
        });
        
        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        });
        
        canvas.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            e.preventDefault();
            
            const deltaMove = {
                x: e.touches[0].clientX - previousMousePosition.x,
                y: e.touches[0].clientY - previousMousePosition.y
            };
            
            if (this.modelGroup) {
                this.modelGroup.rotation.y += deltaMove.x * rotationSpeed;
            }
            
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        });
        
        canvas.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Zoom with wheel
        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomSpeed = 0.1;
            this.camera.position.z += e.deltaY * zoomSpeed;
            this.camera.position.z = Math.max(20, Math.min(200, this.camera.position.z));
        });
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        // Auto-rotation if enabled
        if (this.isRotating && this.modelGroup) {
            this.modelGroup.rotation.y += 0.002;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    onResize() {
        if (!this.container || !this.camera || !this.renderer) return;
        
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
    
    // Control methods for buttons
    resetCamera() {
        if (!this.modelGroup) return;
        
        this.camera.position.set(0, 50, 100);
        this.camera.lookAt(0, 0, 0);
        this.modelGroup.rotation.set(0, 0, 0);
    }
    
    toggleWireframe() {
        if (!this.model || !this.wireframeModel) return;
        
        const isWireframe = this.wireframeModel.material.opacity > 0;
        this.wireframeModel.material.opacity = isWireframe ? 0 : 0.3;
        this.model.material.wireframe = !isWireframe;
    }
    
    toggleRotation() {
        this.isRotating = !this.isRotating;
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}

// Initialize
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Observatory3DScene;
                                }        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.container.appendChild(this.renderer.domElement);
        
        // Lighting
        this.setupLighting();
        
        // Build model
        this.buildObservatory();
        
        // Controls
        this.setupControls();
        
        // Start render loop
        this.animate();
        
        // Handle resize
        window.addEventListener('resize', () => this.onResize());
    }
    
    setupLighting() {
        // Ambient
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambientLight);
        
        // Main directional (sun/moon)
        const dirLight = new THREE.DirectionalLight(0xffffff, 1);
        dirLight.position.set(50, 50, 50);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 2048;
        dirLight.shadow.mapSize.height = 2048;
        this.scene.add(dirLight);
        
        // Brass accent light
        const pointLight = new THREE.PointLight(0xD4AF37, 0.5, 100);
        pointLight.position.set(0, 30, 20);
        this.scene.add(pointLight);
    }
    
    buildObservatory() {
        const group = new THREE.Group();
        
        // Materials
        const stoneMaterial = new THREE.MeshStandardMaterial({
            color: 0xC9C5BC,
            roughness: 0.9,
            metalness: 0.1
        });
        
        const brassMaterial = new THREE.MeshStandardMaterial({
            color: 0xD4AF37,
            roughness: 0.3,
            metalness: 0.8
        });
        
        const patinaMaterial = new THREE.MeshStandardMaterial({
            color: 0x4A7C59,
            roughness: 0.4,
            metalness: 0.6
        });
        
        // Main tower (octagonal prism)
        // 34ft diameter = ~10.36m, scaled to units
        const towerRadius = 5.18;
        const towerHeight = 14.6;
        const towerGeometry = new THREE.CylinderGeometry(
            towerRadius, towerRadius, towerHeight, 8
        );
        const tower = new THREE.Mesh(towerGeometry, stoneMaterial);
        tower.position.y = towerHeight / 2;
        tower.castShadow = true;
        tower.receiveShadow = true;
        group.add(tower);
        
        // Wings (49ft = ~14.9m square)
        const wingSize = 7.45;
        const wingHeight = 7.32;
        const wingGeometry = new THREE.BoxGeometry(wingSize, wingHeight, wingSize);
        
        // East wing
        const eastWing = new THREE.Mesh(wingGeometry, stoneMaterial);
        eastWing.position.set(12, wingHeight / 2, 0);
        eastWing.rotation.y = -15 * (Math.PI / 180);
        eastWing.castShadow = true;
        group.add(eastWing);
        
        // West wing
        const westWing = new THREE.Mesh(wingGeometry, stoneMaterial);
        westWing.position.set(-12, wingHeight / 2, 0);
        westWing.rotation.y = 15 * (Math.PI / 180);
        westWing.castShadow = true;
        group.add(westWing);
        
        // Dome (hemisphere)
        // 30ft interior = 15ft radius = ~4.57m
        const domeRadius = 4.57;
        const domeGeometry = new THREE.SphereGeometry(
            domeRadius, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2
        );
        this.dome = new THREE.Mesh(domeGeometry, patinaMaterial);
        this.dome.position.y = towerHeight;
        this.dome.castShadow = true;
        group.add(this.dome);
        
        // Pier (cylinder through center)
        const pierRadius = 1.98; // 13ft / 2 = 6.5ft = ~1.98m
        const pierGeometry = new THREE.CylinderGeometry(pierRadius, pierRadius, towerHeight, 16);
        const pier = new THREE.Mesh(pierGeometry, stoneMaterial);
        pier.position.y = towerHeight / 2;
        group.add(pier);
        
        // Ground plane
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x1A1A25,
            roughness: 1
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        group.add(ground);
        
        // Add subtle stars
        this.addStars();
        
        this.scene.add(group);
        this.model = group;
    }
    
    addStars() {
        const starGeometry = new THREE.BufferGeometry();
        const starCount = 200;
        const positions = new Float32Array(starCount * 3);
        
        for (let i = 0; i < starCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 200;
            positions[i + 1] = Math.random() * 100 + 20;
            positions[i + 2] = (Math.random() - 0.5) * 200;
        }
        
        starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        const starMaterial = new THREE.PointsMaterial({
            color: 0xF5F1E8,
            size: 0.5,
            transparent: true,
            opacity: 0.8
        });
        
        const stars = new THREE.Points(starGeometry, starMaterial);
        this.scene.add(stars);
    }
    
    setupControls() {
        // Simple mouse controls
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        
        const canvas = this.renderer.domElement;
        
        canvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaMove = {
                x: e.clientX - previousMousePosition.x,
                y: e.clientY - previousMousePosition.y
            };
            
            const rotationSpeed = 0.005;
            this.model.rotation.y += deltaMove.x * rotationSpeed;
            
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        // Touch support
        canvas.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) {
                isDragging = true;
                previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
            }
        });
        
        canvas.addEventListener('touchmove', (e) => {
            if (!isDragging || e.touches.length !== 1) return;
            
            const deltaMove = {
                x: e.touches[0].clientX - previousMousePosition.x,
                y: e.touches[0].clientY - previousMousePosition.y
            };
            
            this.model.rotation.y += deltaMove.x * 0.005;
            previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        });
        
        canvas.addEventListener('touchend', () => {
            isDragging = false;
        });
        
        // Zoom with wheel
        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomSpeed = 0.1;
            this.camera.position.z += e.deltaY * zoomSpeed;
            this.camera.position.z = Math.max(20, Math.min(100, this.camera.position.z));
        });
    }
    
    animate() {
        this.animationId = requestAnimationFrame(() => this.animate());
        
        if (this.isRotating && this.model) {
            this.model.rotation.y += 0.002;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    onResize() {
        if (!this.container || !this.camera || !this.renderer) return;
        
        const aspect = this.container.clientWidth / this.container.clientHeight;
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    }
    
    // Control methods
    resetCamera() {
        this.camera.position.set(0, 20, 60);
        this.camera.lookAt(0, 0, 0);
        if (this.model) {
            this.model.rotation.set(0, 0, 0);
        }
    }
    
    toggleWireframe() {
        this.scene.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material.wireframe = !child.material.wireframe;
            }
        });
    }
    
    toggleRotation() {
        this.isRotating = !this.isRotating;
    }
    
    toggleFullscreen() {
        if (!document.fullscreenElement) {
            this.container.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
    
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.renderer) {
            this.renderer.dispose();
        }
    }
}

// Initialize
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Observatory3DScene;
  }
