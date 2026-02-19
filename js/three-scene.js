// ============================================
// THREE.JS 3D SCENE
// Interactive architectural visualization
// ============================================

class Observatory3DScene {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.dome = null;
        this.isRotating = false;
        this.animationId = null;
        this.container = null;
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
        this.camera.position.set(0, 20, 60);
        this.camera.lookAt(0, 0, 0);
        
        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
        this.renderer.shadowMap.enabled = true;
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
