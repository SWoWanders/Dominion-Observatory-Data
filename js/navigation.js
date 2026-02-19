// ============================================
// NAVIGATION & VIEW MANAGEMENT
// Single Page Application Router
// ============================================

class ObservatoryNavigator {
    constructor() {
        this.currentView = 'home';
        this.currentCategory = null;
        this.currentItem = null;
        this.history = [];
        this.navElement = document.getElementById('main-nav');
        this.contentElement = document.getElementById('content-area');
        
        this.init();
    }
    
    init() {
        // Bind navigation links
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const category = link.dataset.category;
                this.navigateToCategory(category);
            });
        });
        
        // Featured 3D model link
        document.querySelector('.nav-featured-link')?.addEventListener('click', (e) => {
            e.preventDefault();
            this.navigateTo3D();
        });
        
        // Mobile menu toggle
        document.querySelector('.menu-toggle')?.addEventListener('click', () => {
            this.toggleMobileMenu();
        });
        
        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state) {
                this.restoreState(e.state);
            }
        });
        
        // Load initial view
        this.navigateToHome();
    }
    
    navigateToHome() {
        this.currentView = 'home';
        this.renderHome();
        this.updateActiveNav(null);
        this.pushState('home');
    }
    
    navigateToCategory(category) {
        this.currentView = 'category';
        this.currentCategory = category;
        this.renderCategory(category);
        this.updateActiveNav(category);
        this.pushState('category', { category });
    }
    
    navigateToItem(category, itemId) {
        this.currentView = 'item';
        this.currentCategory = category;
        this.currentItem = itemId;
        
        const item = this.getItem(category, itemId);
        this.renderItemDetail(item);
        this.pushState('item', { category, itemId });
    }
    
    navigateTo3D() {
        this.currentView = '3d';
        this.render3DViewer();
        this.updateActiveNav(null);
        this.pushState('3d');
    }
    
    getItem(category, itemId) {
        const data = ObservatoryData[category];
        if (!data) return null;
        return data.find(item => item.id === itemId);
    }
    
    renderHome() {
        const hero = `
            <section class="hero-section fade-in">
                <h1 class="hero-title">The Dominion Observatory</h1>
                <p class="hero-subtitle">
                    Canada's premier astronomical institution, 1905-2025.<br>
                    National Historic Site • 120 years of scientific discovery.
                </p>
            </section>
        `;
        
        const categories = [
            { id: 'buildings', icon: '🏛️', name: 'Buildings & Structures', count: 15, desc: 'Architectural heritage of the observatory complex' },
            { id: 'equipment', icon: '🔭', name: 'Scientific Equipment', count: 12, desc: 'Telescopes, clocks, and precision instruments' },
            { id: 'personnel', icon: '👤', name: 'Personnel', count: 12, desc: 'Astronomers, directors, and staff' },
            { id: 'programs', icon: '🔬', name: 'Scientific Programs', count: 10, desc: 'Research initiatives and discoveries' },
            { id: 'discoveries', icon: '⭐', name: 'Discoveries', count: 11, desc: 'Major contributions to science' },
            { id: 'timeline', icon: '📅', name: 'Timeline', count: '25+', desc: 'Chronological history 1890-2025' }
        ];
        
        const grid = `
            <section class="category-grid">
                ${categories.map(cat => `
                    <article class="category-card" onclick="app.navigator.navigateToCategory('${cat.id}')">
                        <div class="card-header">
                            <span class="card-icon">${cat.icon}</span>
                            <div>
                                <h3 class="card-title">${cat.name}</h3>
                                <span class="card-count">${cat.count} entries</span>
                            </div>
                        </div>
                        <p class="card-description">${cat.desc}</p>
                    </article>
                `).join('')}
            </section>
        `;
        
        this.contentElement.innerHTML = hero + grid;
    }
    
    renderCategory(category) {
        const data = ObservatoryData[category];
        if (!data) return;
        
        const titles = {
            buildings: 'Buildings & Structures',
            equipment: 'Scientific Equipment',
            personnel: 'Personnel',
            programs: 'Scientific Programs',
            discoveries: 'Discoveries',
            timeline: 'Timeline'
        };
        
        let content = `
            <header class="detail-header fade-in">
                <div class="detail-breadcrumb">
                    <a href="#" onclick="app.navigator.navigateToHome(); return false;">Home</a> / 
                    <span>${titles[category]}</span>
                </div>
                <h2 class="detail-title">${titles[category]}</h2>
                <div class="detail-meta">
                    <span class="meta-item">
                        <span class="meta-label">Entries</span>
                        ${data.length} items
                    </span>
                    <span class="meta-item">
                        <span class="meta-label">Period</span>
                        1902-2025
                    </span>
                </div>
            </header>
        `;
        
        // Render based on category type
        if (category === 'timeline') {
            content += this.renderTimeline(data);
        } else if (category === 'discoveries') {
            content += this.renderDiscoveriesList(data);
        } else {
            content += this.renderStandardList(category, data);
        }
        
        this.contentElement.innerHTML = content;
    }
    
    renderStandardList(category, data) {
        return `
            <div class="fact-grid fade-in">
                ${data.map(item => `
                    <article class="fact-card" onclick="app.navigator.navigateToItem('${category}', '${item.id}')">
                        <div class="fact-label">${this.getItemYear(item) || category}</div>
                        <div class="fact-value">${item.name || item.title || item.event}</div>
                        <div class="fact-source">
                            ${this.renderCitations(item.citations)}
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }
    
    renderTimeline(data) {
        const grouped = data.reduce((acc, item) => {
            if (!acc[item.year]) acc[item.year] = [];
            acc[item.year].push(item);
            return acc;
        }, {});
        
        return `
            <div class="timeline fade-in">
                ${Object.entries(grouped).sort((a, b) => a[0] - b[0]).map(([year, items]) => `
                    <div class="timeline-item">
                        <div class="timeline-year">${year}</div>
                        ${items.map(item => `
                            <div class="timeline-content">
                                <div class="timeline-title">${item.event}</div>
                                <div class="timeline-description">
                                    ${this.renderCitations(item.citations)}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    renderDiscoveriesList(data) {
        return `
            <div class="fact-grid fade-in">
                ${data.map(item => `
                    <article class="fact-card">
                        <div class="fact-label">${item.year || item.period}</div>
                        <div class="fact-value">${item.title}</div>
                        <div class="fact-description">${item.description}</div>
                        <div class="fact-source">
                            ${this.renderCitations(item.citations)}
                        </div>
                    </article>
                `).join('')}
            </div>
        `;
    }
    
    renderItemDetail(item) {
        if (!item) return;
        
        let details = '';
        
        // Build details based on item structure
        if (item.dimensions) {
            details += this.renderDimensions(item.dimensions);
        }
        if (item.materials) {
            details += this.renderMaterials(item.materials);
        }
        if (item.career) {
            details += this.renderCareer(item.career);
        }
        if (item.specifications) {
            details += this.renderSpecifications(item.specifications);
        }
        
        const content = `
            <article class="detail-view fade-in">
                <header class="detail-header">
                    <div class="detail-breadcrumb">
                        <a href="#" onclick="app.navigator.navigateToHome(); return false;">Home</a> / 
                        <a href="#" onclick="app.navigator.navigateToCategory('${this.currentCategory}'); return false;">
                            ${this.currentCategory}
                        </a> / 
                        <span>${item.name || item.title}</span>
                    </div>
                    <h2 class="detail-title">${item.name || item.title}</h2>
                    ${this.renderItemMeta(item)}
                </header>
                
                <div class="detail-content">
                    ${item.description ? `<p class="lead">${item.description}</p>` : ''}
                    ${details}
                    
                    <section class="citations-section">
                        <h3>Sources</h3>
                        <ul class="citations-list">
                            ${item.citations?.map(cit => `
                                <li>
                                    <span class="citation-badge" onclick="app.showCitationDetail('${cit}')">
                                        ${cit}
                                    </span>
                                    ${CitationFormatter.format(cit, 'chicago')}
                                </li>
                            `).join('') || ''}
                        </ul>
                    </section>
                </div>
                
                <footer class="detail-actions">
                    <button class="action-btn secondary" onclick="app.navigator.navigateToCategory('${this.currentCategory}')">
                        ← Back to List
                    </button>
                    <button class="action-btn primary" onclick="app.essayGenerator.addToSelection('${this.currentCategory}', '${item.id}')">
                        ⭐ Add to Essay
                    </button>
                </footer>
            </article>
        `;
        
        this.contentElement.innerHTML = content;
    }
    
    render3DViewer() {
        this.contentElement.innerHTML = `
            <div class="detail-header fade-in">
                <h2 class="detail-title">3D Architectural Model</h2>
                <p class="text-dim">Interactive visualization of the Dominion Observatory complex</p>
            </div>
            
            <div class="viewer-3d" id="three-container">
                <div class="loading-spinner" style="margin: auto;"></div>
                <p style="text-align: center; margin-top: 1rem;">Loading 3D scene...</p>
            </div>
            
            <div class="viewer-controls">
                <button class="viewer-btn" title="Reset view" onclick="app.threeScene.resetCamera()">⌂</button>
                <button class="viewer-btn" title="Wireframe" onclick="app.threeScene.toggleWireframe()">☐</button>
                <button class="viewer-btn" title="Rotate" onclick="app.threeScene.toggleRotation()">↻</button>
                <button class="viewer-btn" title="Fullscreen" onclick="app.threeScene.toggleFullscreen()">⛶</button>
            </div>
            
            <div class="detail-content">
                <h3>Verified Dimensions</h3>
                <div class="fact-grid">
                    <div class="fact-card">
                        <div class="fact-label">Tower Diameter</div>
                        <div class="fact-value">34 ft (10.36 m)</div>
                        <div class="fact-source">[FHBRO 1992: 8]</div>
                    </div>
                    <div class="fact-card">
                        <div class="fact-label">Wing Dimensions</div>
                        <div class="fact-value">49 × 49 ft</div>
                        <div class="fact-source">[FHBRO 1992: 10]</div>
                    </div>
                    <div class="fact-card">
                        <div class="fact-label">Dome Interior</div>
                        <div class="fact-value">30 ft (9.14 m)</div>
                        <div class="fact-source">[CLARK 1993]</div>
                    </div>
                </div>
            </div>
        `;
        
        // Initialize Three.js scene
        setTimeout(() => {
            if (app.threeScene) {
                app.threeScene.init('three-container');
            }
        }, 100);
    }
    
    // Helper methods
    renderCitations(citations) {
        if (!citations || citations.length === 0) return '';
        return citations.map(cit => 
            `<span class="citation-badge" onclick="app.showCitationDetail('${cit}'); event.stopPropagation();">${cit}</span>`
        ).join(' ');
    }
    
    getItemYear(item) {
        if (item.constructed) {
            return item.constructed.completed || item.constructed;
        }
        if (item.acquired) return item.acquired;
        if (item.birth) return item.birth.year;
        if (item.installed) return item.installed;
        return null;
    }
    
    renderItemMeta(item) {
        let meta = [];
        
        if (item.heritageStatus) {
            meta.push(`<span class="meta-item"><span class="meta-label">Heritage</span>${item.heritageStatus}</span>`);
        }
        if (item.architect) {
            meta.push(`<span class="meta-item"><span class="meta-label">Architect</span>${item.architect}</span>`);
        }
        if (item.constructed) {
            const year = item.constructed.completed || item.constructed;
            meta.push(`<span class="meta-item"><span class="meta-label">Built</span>${year}</span>`);
        }
        
        return `<div class="detail-meta">${meta.join('')}</div>`;
    }
    
    renderDimensions(dims) {
        // Recursively render dimension objects
        return `
            <section class="detail-section">
                <h3>Dimensions</h3>
                <pre class="dimensions-json">${JSON.stringify(dims, null, 2)}</pre>
            </section>
        `;
    }
    
    renderMaterials(mats) {
        return `
            <section class="detail-section">
                <h3>Materials</h3>
                <ul>
                    ${Object.entries(mats).map(([key, val]) => `
                        <li><strong>${key}:</strong> ${typeof val === 'object' ? val.primary || JSON.stringify(val) : val}</li>
                    `).join('')}
                </ul>
            </section>
        `;
    }
    
    renderCareer(career) {
        return `
            <section class="detail-section">
                <h3>Career</h3>
                <ul class="career-list">
                    ${career.map(pos => `
                        <li>
                            <span class="career-period">${pos.year || pos.period || pos.years}</span>
                            <span class="career-role">${pos.role}</span>
                        </li>
                    `).join('')}
                </ul>
            </section>
        `;
    }
    
    renderSpecifications(specs) {
        return `
            <section class="detail-section">
                <h3>Specifications</h3>
                <dl class="specs-list">
                    ${Object.entries(specs).map(([key, val]) => `
                        <dt>${key}</dt>
                        <dd>${typeof val === 'object' ? JSON.stringify(val) : val}</dd>
                    `).join('')}
                </dl>
            </section>
        `;
    }
    
    updateActiveNav(category) {
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.classList.toggle('active', link.dataset.category === category);
        });
    }
    
    toggleMobileMenu() {
        this.navElement.classList.toggle('open');
    }
    
    pushState(view, params = {}) {
        const state = { view, ...params };
        const url = `#${view}${params.category ? '/' + params.category : ''}${params.itemId ? '/' + params.itemId : ''}`;
        history.pushState(state, '', url);
    }
    
    restoreState(state) {
        switch(state.view) {
            case 'home':
                this.navigateToHome();
                break;
            case 'category':
                this.navigateToCategory(state.category);
                break;
            case 'item':
                this.navigateToItem(state.category, state.itemId);
                break;
            case '3d':
                this.navigateTo3D();
                break;
        }
    }
}

// Initialize on load
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ObservatoryNavigator;
                                }
