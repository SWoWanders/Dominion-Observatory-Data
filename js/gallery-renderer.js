// ============================================
// GALLERY RENDERER
// Renders the gallery grid, filter bar, and lightbox
// for the Dominion Observatory (Ottawa) Archive.
//
// Depends on: gallery.js (GalleryDatabase)
// ============================================

(function () {
    'use strict';

    const GalleryRenderer = {
        currentFilter: 'all',
        container: null,

        init(containerId = 'gallery-container') {
            this.container = document.getElementById(containerId);
            if (!this.container) {
                console.warn('Gallery container not found:', containerId);
                return;
            }
            if (typeof GalleryDatabase === 'undefined') {
                console.error('GalleryDatabase not loaded');
                return;
            }
            this.render();
            this.bindLightbox();
        },

        render() {
            const images = this.filteredImages();
            const html = `
                ${this.renderNotice()}
                ${this.renderFilterBar()}
                <div class="gallery-grid" id="gallery-grid">
                    ${images.length === 0
                        ? '<div class="gallery-empty">No images in this category yet.</div>'
                        : images.map(img => this.renderCard(img)).join('')}
                </div>
                ${this.renderLightbox()}
            `;
            this.container.innerHTML = html;
            this.bindFilterButtons();
            this.bindCardClicks();
        },

        renderNotice() {
            return `
                <div class="gallery-notice">
                    <strong>About this gallery.</strong> The images below have been gathered from
                    Wikimedia Commons, Library and Archives Canada, and other open-access sources.
                    Each entry lists its date, creator, holding archive, license, and the exact
                    attribution string required when an image is reused. Public-domain images may
                    be reused freely; CC-BY-SA images require attribution and share-alike licensing
                    of derivatives. Click any image for full source details and direct links to the
                    source archive.
                </div>
            `;
        },

        renderFilterBar() {
            const cats = GalleryDatabase.categories || {};
            const allCount = GalleryDatabase.images.length;
            const buttons = [
                `<button class="gallery-filter-button ${this.currentFilter === 'all' ? 'active' : ''}"
                         data-filter="all">
                    <span>All</span><span class="count">${allCount}</span>
                </button>`,
                ...Object.keys(cats).map(key => {
                    const cat = cats[key];
                    const count = GalleryDatabase.images.filter(img => img.category === key).length;
                    if (count === 0) return ''; // hide empty categories
                    return `<button class="gallery-filter-button ${this.currentFilter === key ? 'active' : ''}"
                                    data-filter="${key}">
                        <span>${cat.icon || ''} ${cat.name}</span>
                        <span class="count">${count}</span>
                    </button>`;
                })
            ].filter(Boolean).join('');
            return `<div class="gallery-filter">${buttons}</div>`;
        },

        bindFilterButtons() {
            const buttons = this.container.querySelectorAll('.gallery-filter-button');
            buttons.forEach(btn => {
                btn.addEventListener('click', () => {
                    this.currentFilter = btn.dataset.filter;
                    this.render();
                });
            });
        },

        filteredImages() {
            if (this.currentFilter === 'all') return GalleryDatabase.images;
            return GalleryDatabase.images.filter(img => img.category === this.currentFilter);
        },

        renderCard(img) {
            const licenseClass = this.licenseClass(img.license);
            const imgEl = img.imageUrl
                ? `<img src="${this.escapeAttr(img.imageUrl)}"
                        alt="${this.escapeAttr(img.title)}"
                        loading="lazy"
                        onerror="this.style.display='none'; this.parentNode.innerHTML += '<div class=\\'image-placeholder\\'>Image unavailable<br><small>Click for source link</small></div>';">`
                : `<div class="image-placeholder">No preview available<br><small>Click for source link</small></div>`;

            return `
                <article class="gallery-card" data-id="${this.escapeAttr(img.id)}">
                    <div class="gallery-card-image">${imgEl}</div>
                    <div class="gallery-card-body">
                        <h3 class="gallery-card-title">${this.escapeHtml(img.title)}</h3>
                        <div class="gallery-card-meta">
                            <span class="meta-pill">${this.escapeHtml(img.date)}</span>
                            <span class="meta-pill ${licenseClass}">${this.escapeHtml(img.license || 'Unknown')}</span>
                        </div>
                        <p class="gallery-card-caption">${this.escapeHtml(img.caption)}</p>
                        ${img.attribution
                            ? `<div class="gallery-card-attribution">${this.escapeHtml(img.attribution)}</div>`
                            : ''}
                    </div>
                </article>
            `;
        },

        licenseClass(license) {
            if (!license || license === 'Unknown') return 'license-unknown';
            if (license.startsWith('PD') || license === 'CC0') return 'license-pd';
            if (license.startsWith('CC')) return 'license-cc';
            return 'license-unknown';
        },

        renderLightbox() {
            return `
                <div class="gallery-lightbox" id="gallery-lightbox" aria-hidden="true">
                    <button class="gallery-lightbox-close" id="gallery-lightbox-close" aria-label="Close">×</button>
                    <div class="gallery-lightbox-content" id="gallery-lightbox-content"></div>
                </div>
            `;
        },

        bindLightbox() {
            // Esc to close
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') this.closeLightbox();
            });
        },

        bindCardClicks() {
            const cards = this.container.querySelectorAll('.gallery-card');
            cards.forEach(card => {
                card.addEventListener('click', () => {
                    const img = GalleryDatabase.images.find(i => i.id === card.dataset.id);
                    if (img) this.openLightbox(img);
                });
            });
            const lightbox = document.getElementById('gallery-lightbox');
            const closeBtn = document.getElementById('gallery-lightbox-close');
            if (closeBtn) closeBtn.addEventListener('click', () => this.closeLightbox());
            if (lightbox) {
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) this.closeLightbox();
                });
            }
        },

        openLightbox(img) {
            const content = document.getElementById('gallery-lightbox-content');
            const lightbox = document.getElementById('gallery-lightbox');
            if (!content || !lightbox) return;

            const sourceLink = img.sourceUrl
                ? `<a href="${this.escapeAttr(img.sourceUrl)}" target="_blank" rel="noopener">View source page →</a>`
                : '<em>No source URL on file</em>';
            const licenseLink = img.licenseUrl
                ? `<a href="${this.escapeAttr(img.licenseUrl)}" target="_blank" rel="noopener">${this.escapeHtml(img.license)}</a>`
                : this.escapeHtml(img.license || 'Unknown');

            const citationsRow = (img.citations && img.citations.length && typeof CitationFormatter !== 'undefined')
                ? `<dt>Cited in</dt><dd>${img.citations.map(c => CitationFormatter.formatInlineLink(c)).join(' · ')}</dd>`
                : '';

            const notesRow = img.notes
                ? `<dt>Notes</dt><dd>${this.escapeHtml(img.notes)}</dd>`
                : '';

            content.innerHTML = `
                <div class="gallery-lightbox-image">
                    ${img.imageUrl
                        ? `<img src="${this.escapeAttr(img.imageUrl)}" alt="${this.escapeAttr(img.title)}">`
                        : '<div class="image-placeholder">No image preview available</div>'}
                </div>
                <div class="gallery-lightbox-info">
                    <h2 class="gallery-lightbox-title">${this.escapeHtml(img.title)}</h2>
                    <p class="gallery-lightbox-caption">${this.escapeHtml(img.caption)}</p>
                    <dl class="gallery-lightbox-meta">
                        <dt>Date</dt><dd>${this.escapeHtml(img.date)}</dd>
                        <dt>Creator</dt><dd>${this.escapeHtml(img.creator)}</dd>
                        <dt>Archive</dt><dd>${this.escapeHtml(img.sourceArchive)}</dd>
                        <dt>License</dt><dd>${licenseLink}</dd>
                        <dt>Attribution</dt><dd>${this.escapeHtml(img.attribution || '—')}</dd>
                        <dt>Source</dt><dd>${sourceLink}</dd>
                        ${citationsRow}
                        ${notesRow}
                    </dl>
                </div>
            `;
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        },

        closeLightbox() {
            const lightbox = document.getElementById('gallery-lightbox');
            if (!lightbox) return;
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        },

        // -------- escaping helpers --------
        escapeHtml(s) {
            if (s === null || s === undefined) return '';
            return String(s)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
        },

        escapeAttr(s) {
            if (s === null || s === undefined) return '';
            return String(s).replace(/"/g, '&quot;');
        }
    };

    // Auto-init when DOM is ready, if a #gallery-container element exists
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => GalleryRenderer.init());
    } else {
        GalleryRenderer.init();
    }

    // Expose globally for manual init / re-render
    window.GalleryRenderer = GalleryRenderer;
})();
