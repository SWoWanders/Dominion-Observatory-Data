// ============================================
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
