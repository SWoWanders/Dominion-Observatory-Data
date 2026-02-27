/**
 * Dominion Observatory Archive - Main Application
 * GitHub Pages Compatible Version
 */

(function() {
    'use strict';

    // ==========================================
    // CONFIGURATION
    // ==========================================
    const CONFIG = {
        debug: true,
        autoLoadDelay: 100, // Small delay to ensure DOM stability
        fallbackTimeout: 6000 // Ultimate fallback if everything fails
    };

    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    const Utils = {
        log: function(...args) {
            if (CONFIG.debug) console.log('[Dominion Observatory]', ...args);
        },
        
        error: function(...args) {
            console.error('[Dominion Observatory]', ...args);
        },

        // Safe DOM query with retry
        getElement: function(id, callback, maxRetries = 10) {
            let retries = 0;
            const attempt = () => {
                const el = document.getElementById(id);
                if (el) {
                    callback(el);
                    return true;
                }
                if (retries < maxRetries) {
                    retries++;
                    setTimeout(attempt, 50);
                    return false;
                }
                this.error(`Failed to find element #${id} after ${maxRetries} retries`);
                return false;
            };
            return attempt();
        },

        // Debounce function for performance
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }
    };

    // ==========================================
    // SPLASH SCREEN MANAGER
    // ==========================================
    const SplashManager = {
        initialized: false,
        
        init: function() {
            if (this.initialized) return;
            this.initialized = true;
            
            Utils.log('Initializing SplashManager');
            
            // Bind enter button with multiple safeguards
            this.bindEnterButton();
            
            // Ensure splash is visible initially
            this.ensureSplashVisible();
            
            // Listen for custom appVisible event
            window.addEventListener('appVisible', () => {
                Utils.log('App visible event received');
                this.onAppVisible();
            });
        },

        bindEnterButton: function() {
            const bind = () => {
                const btn = document.getElementById('enter-btn');
                if (!btn) {
                    Utils.error('Enter button not found');
                    return false;
                }

                // Prevent double-binding
                if (btn._bound) return true;
                btn._bound = true;

                // Remove any existing onclick attributes for safety
                btn.removeAttribute('onclick');

                // Add click handler
                btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    Utils.log('Enter button clicked via app.js');
                    window.forceShowApp();
                });

                // Touch support for mobile
                btn.addEventListener('touchend', (e) => {
                    e.preventDefault();
                    Utils.log('Enter button touched');
                    window.forceShowApp();
                });

                // Visual feedback
                btn.addEventListener('mouseenter', () => {
                    btn.style.opacity = '1';
                    btn.style.transform = 'scale(1.05)';
                });
                
                btn.addEventListener('mouseleave', () => {
                    btn.style.opacity = '0.7';
                    btn.style.transform = 'scale(1)';
                });

                Utils.log('Enter button bound successfully');
                return true;
            };

            // Try immediately
            if (!bind()) {
                // Retry on DOM ready
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', bind);
                }
                // Final retry after window load
                window.addEventListener('load', () => setTimeout(bind, 100));
            }
        },

        ensureSplashVisible: function() {
            const splash = document.getElementById('splash-screen');
            const app = document.getElementById('app');
            
            if (splash) {
                splash.classList.remove('hidden');
                splash.style.display = 'flex';
                splash.style.opacity = '1';
            }
            
            if (app) {
                app.classList.add('hidden');
                app.classList.remove('visible');
            }
        },

        onAppVisible: function() {
            Utils.log('Transitioning from splash to app');
            
            // Initialize main app components after transition
            setTimeout(() => {
                App.init();
            }, 300);
        }
    };

    // ==========================================
    // NAVIGATION MANAGER
    // ==========================================
    const Navigation = {
        currentSection: null,
        
        init: function() {
            Utils.log('Initializing Navigation');
            
            // Bind nav links
            document.querySelectorAll('.nav-list a[data-category]').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const category = link.dataset.category;
                    this.loadSection(category);
                });
            });

            // Bind featured 3D model link
            const modelLink = document.querySelector('a[href="#model"]');
            if (modelLink) {
                modelLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.loadModelSection();
                });
            }

            // Handle browser back/forward
            window.addEventListener('popstate', (e) => {
                if (e.state && e.state.section) {
                    this.loadSection(e.state.section, false);
                }
            });

            // Mobile menu toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const mainNav = document.getElementById('main-nav');
            
            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', () => {
                    mainNav.classList.toggle('open');
                    menuToggle.classList.toggle('active');
                });
            }

            // Load initial section if hash present
            if (window.location.hash) {
                const section = window.location.hash.replace('#', '');
                setTimeout(() => this.loadSection(section), 100);
            }
        },

        loadSection: function(category, pushState = true) {
            Utils.log('Loading section:', category);
            
            const contentArea = document.getElementById('content-area');
            if (!contentArea) return;

            // Update active nav state
            document.querySelectorAll('.nav-list a').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.category === category) {
                    link.classList.add('active');
                }
            });

            // Clear current content with fade
            contentArea.style.opacity = '0';
            
            setTimeout(() => {
                // Generate content based on category
                let content = this.generateContent(category);
                contentArea.innerHTML = content;
                contentArea.style.opacity = '1';
                
                // Initialize any dynamic components in new content
                this.initializeDynamicComponents(category);
                
            }, 200);

            // Update URL
            if (pushState) {
                history.pushState({ section: category }, '', `#${category}`);
            }

            this.currentSection = category;
            
            // Close mobile menu if open
            const mainNav = document.getElementById('main-nav');
            const menuToggle = document.querySelector('.menu-toggle');
            if (mainNav) mainNav.classList.remove('open');
            if (menuToggle) menuToggle.classList.remove('active');
        },

        loadModelSection: function() {
            Utils.log('Loading 3D Model section');
            
            const contentArea = document.getElementById('content-area');
            if (!contentArea) return;

            const modelHTML = `
                <section id="model" class="content-section">
                    <h2>3D Architectural Model</h2>
                    <div id="model-container" style="width: 100%; height: 600px; position: relative; background: var(--obsidian); border-radius: 8px; overflow: hidden;">
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align: center; color: var(--brass);">
                            <p>Loading 3D Model...</p>
                            <div style="width: 40px; height: 40px; border: 3px solid var(--brass-dark); border-top-color: var(--brass); border-radius: 50%; animation: spin 1s linear infinite; margin: 1rem auto;"></div>
                        </div>
                    </div>
                    
                    <div class="model-controls" style="margin-top: 1rem; text-align: center; display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                        <button id="btn-rotate" class="action-btn" style="padding: 0.5rem 1rem; background: var(--brass); color: var(--obsidian); border: none; border-radius: 4px; cursor: pointer; font-family: var(--font-display);">
                            <span>🔄</span> Toggle Rotation
                        </button>
                        <button id="btn-reset" class="action-btn" style="padding: 0.5rem 1rem; background: var(--brass); color: var(--obsidian); border: none; border-radius: 4px; cursor: pointer; font-family: var(--font-display);">
                            <span>📷</span> Reset View
                        </button>
                        <button id="btn-wireframe" class="action-btn" style="padding: 0.5rem 1rem; background: var(--brass); color: var(--obsidian); border: none; border-radius: 4px; cursor: pointer; font-family: var(--font-display);">
                            <span>🕸️</span> Wireframe
                        </button>
                        <button id="btn-fullscreen" class="action-btn" style="padding: 0.5rem 1rem; background: var(--brass); color: var(--obsidian); border: none; border-radius: 4px; cursor: pointer; font-family: var(--font-display);">
                            <span>⛶</span> Fullscreen
                        </button>
                    </div>
                </section>
            `;

            contentArea.innerHTML = modelHTML;
            
            // Initialize 3D scene if available
            if (window.Observatory3D) {
                window.Observatory3D.init('model-container');
            } else if (window.initThreeScene) {
                window.initThreeScene('model-container');
            }

            // Bind control buttons
            this.bindModelControls();
            
            history.pushState({ section: 'model' }, '', '#model');
        },

        bindModelControls: function() {
            const bindBtn = (id, action) => {
                const btn = document.getElementById(id);
                if (btn && window.observatory3D) {
                    btn.addEventListener('click', () => {
                        if (window.observatory3D[action]) {
                            window.observatory3D[action]();
                        }
                    });
                }
            };

            bindBtn('btn-rotate', 'toggleRotation');
            bindBtn('btn-reset', 'resetCamera');
            bindBtn('btn-wireframe', 'toggleWireframe');
            bindBtn('btn-fullscreen', 'toggleFullscreen');
        },

        generateContent: function(category) {
            // Check if data exists
            if (typeof ObservatoryData === 'undefined') {
                return this.generateErrorContent('Data not loaded. Please refresh the page.');
            }

            const data = ObservatoryData[category];
            if (!data) {
                return this.generateErrorContent(`No data found for category: ${category}`);
            }

            let html = `<section id="${category}" class="content-section">
                <h2>${this.formatTitle(category)}</h2>
                <div class="content-grid">`;

            data.forEach((item, index) => {
                html += `
                    <article class="content-card" data-id="${item.id || index}">
                        <div class="card-image">
                            ${item.image ? 
                                `<img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.src='assets/placeholder.jpg'">` : 
                                `<div class="placeholder-image">📷</div>`
                            }
                        </div>
                        <div class="card-content">
                            <h3>${item.title}</h3>
                            <p class="card-date">${item.date || ''}</p>
                            <p class="card-description">${item.description || ''}</p>
                            ${item.tags ? `
                                <div class="card-tags">
                                    ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                                </div>
                            ` : ''}
                        </div>
                    </article>
                `;
            });

            html += `</div></section>`;
            return html;
        },

        generateErrorContent: function(message) {
            return `
                <section class="content-section error-section">
                    <h2>Error</h2>
                    <div class="error-message" style="padding: 2rem; text-align: center; color: var(--brass);">
                        <p style="font-size: 3rem; margin-bottom: 1rem;">⚠️</p>
                        <p>${message}</p>
                        <button onclick="location.reload()" class="action-btn" style="margin-top: 1rem;">
                            Reload Page
                        </button>
                    </div>
                </section>
            `;
        },

        formatTitle: function(category) {
            return category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
        },

        initializeDynamicComponents: function(category) {
            // Add intersection observer for fade-in animations
            const cards = document.querySelectorAll('.content-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            cards.forEach(card => observer.observe(card));
        }
    };

    // ==========================================
    // SEARCH MANAGER
    // ==========================================
    const SearchManager = {
        init: function() {
            const searchBtn = document.getElementById('header-search-btn');
            if (searchBtn) {
                searchBtn.addEventListener('click', () => this.openSearch());
            }

            // Keyboard shortcut Ctrl+K
            document.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                    e.preventDefault();
                    this.openSearch();
                }
            });
        },

        openSearch: function() {
            Utils.log('Opening search');
            // Implementation depends on your search.js
            if (window.Search && window.Search.open) {
                window.Search.open();
            }
        }
    };

    // ==========================================
    // ESSAY GENERATOR INTEGRATION
    // ==========================================
    const EssayManager = {
        init: function() {
            const generateBtn = document.getElementById('generate-essay-btn');
            const cancelBtn = document.getElementById('cancel-essay');
            const confirmBtn = document.getElementById('confirm-essay');
            const modal = document.getElementById('essay-modal');

            if (generateBtn) {
                generateBtn.addEventListener('click', () => this.openModal());
            }

            if (cancelBtn) {
                cancelBtn.addEventListener('click', () => this.closeModal());
            }

            if (confirmBtn) {
                confirmBtn.addEventListener('click', () => this.generateEssay());
            }

            // Close on backdrop click
            if (modal) {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) this.closeModal();
                });
            }

            // Bind output modal actions
            const copyBtn = document.getElementById('copy-essay');
            const printBtn = document.getElementById('print-essay');
            const saveBtn = document.getElementById('save-essay');

            if (copyBtn) {
                copyBtn.addEventListener('click', () => this.copyToClipboard());
            }

            if (printBtn) {
                printBtn.addEventListener('click', () => window.print());
            }

            if (saveBtn) {
                saveBtn.addEventListener('click', () => this.saveAsPDF());
            }

            // Close buttons for all modals
            document.querySelectorAll('.modal-close').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const modal = e.target.closest('.modal');
                    if (modal) modal.classList.add('hidden');
                });
            });
        },

        openModal: function() {
            const modal = document.getElementById('essay-modal');
            if (modal) {
                modal.classList.remove('hidden');
                this.populateTopics();
            }
        },

        closeModal: function() {
            const modal = document.getElementById('essay-modal');
            if (modal) modal.classList.add('hidden');
        },

        populateTopics: function() {
            const grid = document.getElementById('topic-grid');
            if (!grid || typeof ObservatoryData === 'undefined') return;

            // Collect all topics from data
            const topics = [];
            Object.keys(ObservatoryData).forEach(category => {
                if (Array.isArray(ObservatoryData[category])) {
                    ObservatoryData[category].forEach(item => {
                        topics.push({
                            id: item.id,
                            title: item.title,
                            category: category
                        });
                    });
                }
            });

            grid.innerHTML = topics.map(topic => `
                <label class="topic-checkbox">
                    <input type="checkbox" value="${topic.id}" data-category="${topic.category}">
                    <span class="checkmark"></span>
                    <span class="topic-label">${topic.title}</span>
                </label>
            `).join('');
        },

        generateEssay: function() {
            const selected = document.querySelectorAll('#topic-grid input:checked');
            const style = document.getElementById('essay-style')?.value || 'comprehensive';
            const citation = document.getElementById('citation-format')?.value || 'chicago';

            if (selected.length === 0) {
                alert('Please select at least one topic');
                return;
            }

            const topics = Array.from(selected).map(cb => ({
                id: cb.value,
                category: cb.dataset.category
            }));

            Utils.log('Generating essay with topics:', topics);

            // Call essay generator if available
            if (window.EssayGenerator) {
                window.EssayGenerator.generate(topics, style, citation);
            } else {
                // Fallback mock generation
                this.mockGenerate(topics, style, citation);
            }

            this.closeModal();
        },

        mockGenerate: function(topics, style, citation) {
            const outputModal = document.getElementById('output-modal');
            const outputDiv = document.getElementById('essay-output');
            
            if (!outputModal || !outputDiv) return;

            const essay = `
                <h1>The Dominion Observatory: A ${style.charAt(0).toUpperCase() + style.slice(1)} Analysis</h1>
                <p class="essay-meta">Generated ${new Date().toLocaleDateString()} | ${citation.toUpperCase()} Format</p>
                
                <h2>Introduction</h2>
                <p>This essay explores the selected topics from the Dominion Observatory archive...</p>
                
                <h2>Selected Topics</h2>
                <ul>
                    ${topics.map(t => `<li>${t.id} (${t.category})</li>`).join('')}
                </ul>
                
                <h2>Conclusion</h2>
                <p>The Dominion Observatory remains a significant historical institution...</p>
                
                <h2>References</h2>
                <p>Citations in ${citation.toUpperCase()} format would appear here.</p>
            `;

            outputDiv.innerHTML = essay;
            outputModal.classList.remove('hidden');
        },

        copyToClipboard: function() {
            const output = document.getElementById('essay-output');
            if (!output) return;

            const text = output.innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert('Essay copied to clipboard!');
            }).catch(err => {
                Utils.error('Failed to copy:', err);
                // Fallback
                const range = document.createRange();
                range.selectNode(output);
                window.getSelection().removeAllRanges();
                window.getSelection().addRange(range);
                document.execCommand('copy');
                window.getSelection().removeAllRanges();
            });
        },

        saveAsPDF: function() {
            window.print();
        }
    };

    // ==========================================
    // FOOTER ACTIONS
    // ==========================================
    const FooterActions = {
        init: function() {
            const printBtn = document.getElementById('print-btn');
            const updateBtn = document.getElementById('update-btn');

            if (printBtn) {
                printBtn.addEventListener('click', () => window.print());
            }

            if (updateBtn) {
                updateBtn.addEventListener('click', () => this.checkUpdates());
            }
        },

        checkUpdates: function() {
            Utils.log('Checking for updates...');
            // Simulate update check
            const btn = document.getElementById('update-btn');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Checking...</span>';
            
            setTimeout(() => {
                btn.innerHTML = '<span class="btn-icon">✓</span><span class="btn-text">Up to date</span>';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            }, 1500);
        }
    };

    // ==========================================
    // MAIN APP CONTROLLER
    // ==========================================
    const App = {
        initialized: false,

        init: function() {
            if (this.initialized) {
                Utils.log('App already initialized');
                return;
            }
            
            Utils.log('Initializing Main Application');
            this.initialized = true;

            // Initialize all modules
            Navigation.init();
            SearchManager.init();
            EssayManager.init();
            FooterActions.init();

            // Handle window resize
            window.addEventListener('resize', Utils.debounce(() => {
                if (window.observatory3D && window.observatory3D.onResize) {
                    window.observatory3D.onResize();
                }
            }, 250));

            Utils.log('Application initialized successfully');
        }
    };

    // ==========================================
    // INITIALIZATION SEQUENCE
    // ==========================================
    
    // Immediate initialization attempt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            SplashManager.init();
        });
    } else {
        SplashManager.init();
    }

    // Final fallback - ensure app works no matter what
    window.addEventListener('load', () => {
        setTimeout(() => {
            if (!SplashManager.initialized) {
                Utils.error('Emergency fallback: Forcing initialization');
                SplashManager.init();
            }
            
            // Ultimate fallback - if still on splash after 6 seconds, force show
            setTimeout(() => {
                const splash = document.getElementById('splash-screen');
                if (splash && !splash.classList.contains('hidden')) {
                    Utils.error('Ultimate fallback triggered: Forcing app visible');
                    window.forceShowApp();
                }
            }, CONFIG.fallbackTimeout);
        }, CONFIG.autoLoadDelay);
    });

    // Expose to global scope for debugging
    window.DominionApp = App;
    window.DominionUtils = Utils;

})();// ============================================
// MAIN APPLICATION CONTROLLER
// The Dominion Observatory (Ottawa) Archive
// ============================================

class ObservatoryApp {
    constructor() {
        this.navigator = null;
        this.essayGenerator = null;
        this.threeScene = null;
        this.search = null;
        this.initialized = false;
    }
    
    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.start());
        } else {
            this.start();
        }
    }
    
    start() {
        console.log('Initializing Dominion Observatory Archive...');
        
        // Initialize modules
        this.navigator = new ObservatoryNavigator();
        this.essayGenerator = new EssayGenerator();
        this.threeScene = new Observatory3DScene();
        this.search = new ObservatorySearch();
        
        // Handle splash screen
        this.handleSplashScreen();
        
        // Setup global event handlers
        this.setupGlobalHandlers();
        
        this.initialized = true;
        console.log('Application ready');
    }
    
    handleSplashScreen() {
        const splash = document.getElementById('splash-screen');
        const app = document.getElementById('app');
        
        setTimeout(() => {
            splash.classList.add('hidden');
            app.classList.remove('hidden');
            app.classList.add('visible');
        }, 2500);
    }
    
    setupGlobalHandlers() {
        // Citation detail popup
        window.showCitationDetail = (citationKey) => {
            const source = SourceDatabase[citationKey];
            if (!source) return;
            
            const modal = document.createElement('div');
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content" style="max-width: 500px;">
                    <header class="modal-header">
                        <h3>Source Citation</h3>
                        <button class="modal-close" onclick="this.closest('.modal').remove()">&times;</button>
                    </header>
                    <div class="modal-body">
                        <p><strong>${source.shortForm}</strong></p>
                        <p style="font-size: 0.9rem; margin-top: 1rem;">${source.fullCitation}</p>
                        <p style="margin-top: 1rem;">
                            <span class="meta-label">Type:</span> ${source.type}<br>
                            <span class="meta-label">Reliability:</span> ${CitationFormatter.getReliabilityIcon(source.reliability)}
                        </p>
                        ${source.url ? `<p><a href="${source.url}" target="_blank">View Source →</a></p>` : ''}
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.remove();
            });
        };
        
        // Print button
        document.getElementById('print-btn')?.addEventListener('click', () => {
            window.print();
        });
        
        // Update check
        document.getElementById('update-btn')?.addEventListener('click', () => {
            this.checkForUpdates();
        });
    }
    
    checkForUpdates() {
        const btn = document.getElementById('update-btn');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="btn-icon">⏳</span> Checking...';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            this.showNotification('Archive is up to date (Last checked: ' + new Date().toLocaleDateString() + ')');
        }, 1500);
    }
    
    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.style.cssText = `
            position: fixed;
            top: 2rem;
            right: 2rem;
            background: var(--obsidian-light);
            border: 1px solid var(--brass);
            color: var(--parchment);
            padding: 1rem 1.5rem;
            border-radius: 4px;
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Initialize application
const app = new ObservatoryApp();
app.init();

window.app = app;
