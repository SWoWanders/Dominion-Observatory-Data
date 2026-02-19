// ============================================
// SEARCH ENGINE
// Full-text search across all observatory data
// ============================================

class ObservatorySearch {
    constructor() {
        this.searchIndex = [];
        this.searchInput = null;
        this.resultsContainer = null;
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.buildSearchIndex();
        this.setupSearchUI();
        this.bindEvents();
    }
    
    // Build inverted index of all searchable content
    buildSearchIndex() {
        const index = [];
        
        // Index buildings
        ObservatoryData.buildings.forEach(item => {
            index.push({
                id: item.id,
                type: 'building',
                title: item.name,
                content: this.extractText(item),
                data: item
            });
        });
        
        // Index equipment
        ObservatoryData.equipment.forEach(item => {
            index.push({
                id: item.id,
                type: 'equipment',
                title: item.name,
                content: this.extractText(item),
                data: item
            });
        });
        
        // Index personnel
        ObservatoryData.personnel.forEach(item => {
            index.push({
                id: item.id,
                type: 'personnel',
                title: item.name,
                content: this.extractText(item),
                data: item
            });
        });
        
        // Index programs
        ObservatoryData.programs.forEach(item => {
            index.push({
                id: item.id,
                type: 'program',
                title: item.name,
                content: this.extractText(item),
                data: item
            });
        });
        
        // Index discoveries
        ObservatoryData.discoveries.forEach(item => {
            index.push({
                id: item.id,
                type: 'discovery',
                title: item.title,
                content: this.extractText(item),
                data: item
            });
        });
        
        // Index timeline
        ObservatoryData.timeline.forEach((item, idx) => {
            index.push({
                id: `timeline-${idx}`,
                type: 'timeline',
                title: item.year.toString(),
                content: item.event,
                data: item
            });
        });
        
        // Index sources
        Object.entries(SourceDatabase).forEach(([key, source]) => {
            index.push({
                id: `source-${key}`,
                type: 'source',
                title: source.shortForm,
                content: source.fullCitation,
                data: { key, ...source }
            });
        });
        
        this.searchIndex = index;
        console.log(`Search index built: ${index.length} items`);
    }
    
    // Extract all searchable text from an object
    extractText(obj) {
        let text = '';
        
        const traverse = (val) => {
            if (typeof val === 'string') {
                text += ' ' + val;
            } else if (typeof val === 'number') {
                text += ' ' + val.toString();
            } else if (Array.isArray(val)) {
                val.forEach(traverse);
            } else if (typeof val === 'object' && val !== null) {
                Object.values(val).forEach(traverse);
            }
        };
        
        traverse(obj);
        return text.toLowerCase();
    }
    
    setupSearchUI() {
        // Create search modal
        const modal = document.createElement('div');
        modal.id = 'search-modal';
        modal.className = 'modal hidden';
        modal.innerHTML = `
            <div class="modal-content modal-large">
                <header class="modal-header">
                    <div class="search-input-wrapper">
                        <span class="search-icon">🔍</span>
                        <input type="text" 
                               id="search-input" 
                               placeholder="Search facts, people, equipment, dates..." 
                               autocomplete="off">
                        <button class="search-clear hidden">&times;</button>
                    </div>
                    <button class="modal-close" onclick="app.search.close()">&times;</button>
                </header>
                <div class="modal-body">
                    <div class="search-filters">
                        <button class="filter-btn active" data-filter="all">All</button>
                        <button class="filter-btn" data-filter="building">Buildings</button>
                        <button class="filter-btn" data-filter="personnel">People</button>
                        <button class="filter-btn" data-filter="equipment">Equipment</button>
                        <button class="filter-btn" data-filter="source">Sources</button>
                    </div>
                    <div id="search-results" class="search-results">
                        <div class="search-empty">
                            <p>Type to search across ${this.searchIndex.length} indexed items</p>
                            <p class="search-hints">
                                Try: "King", "telescope", "1905", "34 feet", "seismograph"
                            </p>
                        </div>
                    </div>
                </div>
                <footer class="modal-footer">
                    <span class="search-stats" id="search-stats"></span>
                </footer>
            </div>
        `;
        document.body.appendChild(modal);
        
        this.searchInput = document.getElementById('search-input');
        this.resultsContainer = document.getElementById('search-results');
    }
    
    bindEvents() {
        // Header search button
        document.getElementById('header-search-btn')?.addEventListener('click', () => {
            this.open();
        });
        
        // Input handling
        this.searchInput?.addEventListener('input', (e) => {
            this.performSearch(e.target.value);
            
            // Toggle clear button
            const clearBtn = document.querySelector('.search-clear');
            if (clearBtn) {
                clearBtn.classList.toggle('hidden', !e.target.value);
            }
        });
        
        this.searchInput?.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.close();
            }
        });
        
        // Clear button
        document.querySelector('.search-clear')?.addEventListener('click', () => {
            this.searchInput.value = '';
            this.searchInput.focus();
            this.showEmpty();
        });
        
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.performSearch(this.searchInput.value);
            });
        });
        
        // Keyboard shortcut
        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.open();
            }
        });
        
        // Close on backdrop click
        document.getElementById('search-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'search-modal') {
                this.close();
            }
        });
    }
    
    open() {
        const modal = document.getElementById('search-modal');
        modal.classList.remove('hidden');
        this.isOpen = true;
        
        setTimeout(() => {
            this.searchInput?.focus();
            this.searchInput?.select();
        }, 100);
    }
    
    close() {
        const modal = document.getElementById('search-modal');
        modal.classList.add('hidden');
        this.isOpen = false;
    }
    
    performSearch(query) {
        if (!query || query.length < 2) {
            this.showEmpty();
            return;
        }
        
        const filter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        const results = this.search(query, filter);
        
        this.renderResults(results, query);
        this.updateStats(results.length);
    }
    
    search(query, filter = 'all') {
        const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
        if (terms.length === 0) return [];
        
        const scored = this.searchIndex.map(item => {
            if (filter !== 'all' && item.type !== filter) {
                return null;
            }
            
            let score = 0;
            const titleLower = item.title.toLowerCase();
            const contentLower = item.content;
            
            terms.forEach(term => {
                // Title match (higher weight)
                if (titleLower.includes(term)) {
                    score += 10;
                    if (titleLower.startsWith(term)) score += 5;
                }
                
                // Content match
                const contentMatches = (contentLower.match(new RegExp(term, 'g')) || []).length;
                score += contentMatches * 2;
                
                // Exact phrase bonus
                if (contentLower.includes(query.toLowerCase())) {
                    score += 5;
                }
            });
            
            return score > 0 ? { ...item, score } : null;
        }).filter(Boolean);
        
        return scored.sort((a, b) => b.score - a.score).slice(0, 50);
    }
    
    renderResults(results, query) {
        if (results.length === 0) {
            this.resultsContainer.innerHTML = `
                <div class="search-empty">
                    <p>No results for "${query}"</p>
                    <p class="search-hints">Try different keywords or check spelling</p>
                </div>
            `;
            return;
        }
        
        const html = results.map(result => this.renderResultItem(result, query)).join('');
        
        this.resultsContainer.innerHTML = `
            <div class="search-results-list">
                ${html}
            </div>
        `;
        
        this.resultsContainer.querySelectorAll('.search-result').forEach(el => {
            el.addEventListener('click', () => {
                this.navigateToResult(el.dataset.type, el.dataset.id);
            });
        });
    }
    
    renderResultItem(result, query) {
        const typeIcons = {
            building: '🏛️',
            equipment: '🔭',
            personnel: '👤',
            program: '🔬',
            discovery: '⭐',
            timeline: '📅',
            source: '📚'
        };
        
        const typeLabels = {
            building: 'Building',
            equipment: 'Equipment',
            personnel: 'Person',
            program: 'Program',
            discovery: 'Discovery',
            timeline: 'Timeline',
            source: 'Source'
        };
        
        const highlightedTitle = this.highlightText(result.title, query);
        const excerpt = this.getExcerpt(result.content, query);
        
        return `
            <article class="search-result" data-type="${result.type}" data-id="${result.id}">
                <div class="result-header">
                    <span class="result-icon">${typeIcons[result.type]}</span>
                    <span class="result-type">${typeLabels[result.type]}</span>
                    ${result.score > 20 ? '<span class="result-relevance">Best match</span>' : ''}
                </div>
                <h4 class="result-title">${highlightedTitle}</h4>
                <p class="result-excerpt">${excerpt}</p>
                ${result.data.citations ? `<div class="result-citations">${this.renderCitations(result.data.citations)}</div>` : ''}
            </article>
        `;
    }
    
    highlightText(text, query) {
        const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
        let highlighted = text;
        
        terms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlighted = highlighted.replace(regex, '<mark>$1</mark>');
        });
        
        return highlighted;
    }
    
    getExcerpt(content, query, maxLength = 150) {
        const terms = query.toLowerCase().split(/\s+/).filter(t => t.length > 1);
        const lowerContent = content.toLowerCase();
        
        let matchPos = -1;
        for (const term of terms) {
            matchPos = lowerContent.indexOf(term);
            if (matchPos !== -1) break;
        }
        
        if (matchPos === -1) {
            return content.substring(0, maxLength) + '...';
        }
        
        const start = Math.max(0, matchPos - 40);
        const end = Math.min(content.length, matchPos + maxLength);
        let excerpt = content.substring(start, end);
        
        if (start > 0) excerpt = '...' + excerpt;
        if (end < content.length) excerpt = excerpt + '...';
        
        return this.highlightText(excerpt, query);
    }
    
    renderCitations(citations) {
        if (!citations || citations.length === 0) return '';
        return citations.map(cit => `<span class="citation-badge">${cit}</span>`).join(' ');
    }
    
    navigateToResult(type, id) {
        this.close();
        
        switch(type) {
            case 'building':
            case 'equipment':
            case 'personnel':
            case 'program':
            case 'discovery':
                app.navigator.navigateToItem(type + 's', id);
                break;
            case 'timeline':
                app.navigator.navigateToCategory('timeline');
                break;
            case 'source':
                app.showCitationDetail(id.replace('source-', ''));
                break;
        }
    }
    
    showEmpty() {
        this.resultsContainer.innerHTML = `
            <div class="search-empty">
                <p>Type to search across ${this.searchIndex.length} indexed items</p>
                <p class="search-hints">
                    Try: "King", "telescope", "1905", "34 feet", "seismograph"
                </p>
            </div>
        `;
        this.updateStats(0);
    }
    
    updateStats(count) {
        const stats = document.getElementById('search-stats');
        if (stats) {
            stats.textContent = count > 0 ? `${count} results` : '';
        }
    }
}

// Initialize with app
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ObservatorySearch;
                                               }
