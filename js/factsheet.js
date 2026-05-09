// ============================================
// FACT SHEET FEATURE
// User browses the site, ticks individual facts to add to their fact sheet,
// then prints it (and uses the browser's "Save as PDF" if they want a PDF).
// 
// Storage: localStorage key 'factsheet' = array of {
//   id, category, item_id, label, value, sourceKeys, addedAt
// }
// ============================================

(function() {
    'use strict';

    const STORAGE_KEY = 'factsheet';
    const factsheet = {
        // Returns the array of currently-collected facts
        getAll() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                return raw ? JSON.parse(raw) : [];
            } catch (e) {
                console.error('factsheet read error', e);
                return [];
            }
        },

        // Saves the array back to localStorage
        save(facts) {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(facts));
                this.renderPanel();
            } catch (e) {
                console.error('factsheet save error', e);
            }
        },

        // Adds one fact (or removes it if already present, by id)
        toggle(fact) {
            const all = this.getAll();
            const idx = all.findIndex(f => f.id === fact.id);
            if (idx >= 0) {
                all.splice(idx, 1);
            } else {
                fact.addedAt = Date.now();
                all.push(fact);
            }
            this.save(all);
        },

        // Removes a fact by id
        remove(factId) {
            const all = this.getAll().filter(f => f.id !== factId);
            this.save(all);
        },

        // Reorders facts by drag-and-drop (newOrderIds is array of fact ids)
        reorder(newOrderIds) {
            const all = this.getAll();
            const lookup = {};
            all.forEach(f => { lookup[f.id] = f; });
            const reordered = newOrderIds.map(id => lookup[id]).filter(Boolean);
            this.save(reordered);
        },

        // Clears all facts (after confirmation)
        clear() {
            if (confirm('Remove all facts from your fact sheet?')) {
                this.save([]);
            }
        },

        // Returns true if a fact with this id is already in the sheet
        has(factId) {
            return this.getAll().some(f => f.id === factId);
        },

        // ---------- UI rendering ----------

        // Builds the side panel HTML and updates the toggle-button badge
        renderPanel() {
            const all = this.getAll();
            const panel = document.getElementById('factsheet-panel');
            const badge = document.getElementById('factsheet-toggle-badge');

            if (badge) {
                badge.textContent = all.length;
                badge.style.display = all.length > 0 ? 'inline-block' : 'none';
            }

            if (!panel) return;

            const list = panel.querySelector('.factsheet-list');
            if (!list) return;

            if (all.length === 0) {
                list.innerHTML = `
                    <div class="factsheet-empty">
                        <p>Your fact sheet is empty.</p>
                        <p class="hint">Look for the <strong>Add to Fact Sheet</strong> button on any card to start collecting facts.</p>
                    </div>
                `;
            } else {
                list.innerHTML = all.map(fact => `
                    <div class="factsheet-item" draggable="true" data-fact-id="${escapeAttr(fact.id)}">
                        <div class="factsheet-item-handle" title="Drag to reorder">⋮⋮</div>
                        <div class="factsheet-item-body">
                            <div class="factsheet-item-context">${escapeHtml(fact.category)} &middot; ${escapeHtml(fact.itemName || '')}</div>
                            <div class="factsheet-item-label"><strong>${escapeHtml(fact.label)}:</strong> ${escapeHtml(fact.value)}</div>
                        </div>
                        <button class="factsheet-item-remove" data-fact-id="${escapeAttr(fact.id)}" title="Remove from sheet">&times;</button>
                    </div>
                `).join('');
            }

            // Update count
            const countEl = panel.querySelector('.factsheet-count');
            if (countEl) countEl.textContent = `(${all.length} fact${all.length === 1 ? '' : 's'})`;
        },

        // Opens a popover on the given card showing every collectable fact for that item
        openCardPopover(card, item, category) {
            // Remove any existing popover
            const existing = document.getElementById('factsheet-popover');
            if (existing) existing.remove();

            const facts = collectFactsFromItem(item, category);
            if (facts.length === 0) return;

            const popover = document.createElement('div');
            popover.id = 'factsheet-popover';
            popover.className = 'factsheet-popover';
            popover.innerHTML = `
                <div class="factsheet-popover-header">
                    <strong>Add facts from "${escapeHtml(item.name || item.title || 'this item')}"</strong>
                    <button class="factsheet-popover-close" title="Close">&times;</button>
                </div>
                <div class="factsheet-popover-body">
                    ${facts.map(fact => {
                        const checked = this.has(fact.id) ? 'checked' : '';
                        return `
                            <label class="factsheet-fact-row">
                                <input type="checkbox" data-fact-id="${escapeAttr(fact.id)}" ${checked} />
                                <span class="factsheet-fact-label"><strong>${escapeHtml(fact.label)}:</strong> ${escapeHtml(fact.value)}</span>
                            </label>
                        `;
                    }).join('')}
                </div>
                <div class="factsheet-popover-footer">
                    <span class="factsheet-popover-hint">Tick the facts you want to keep. They'll appear in your fact sheet panel.</span>
                </div>
            `;

            // Position the popover near the card
            const rect = card.getBoundingClientRect();
            popover.style.position = 'fixed';
            popover.style.zIndex = '10000';
            // Center horizontally on the card, place below
            const popoverWidth = Math.min(420, window.innerWidth - 40);
            popover.style.width = popoverWidth + 'px';
            popover.style.left = Math.max(20, Math.min(window.innerWidth - popoverWidth - 20, rect.left + (rect.width - popoverWidth) / 2)) + 'px';
            const top = Math.min(window.innerHeight - 100, rect.top + 60);
            popover.style.top = top + 'px';

            document.body.appendChild(popover);

            // Wire up handlers — store the fact data on the popover for the change listener
            popover._facts = facts;
            popover.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                cb.addEventListener('change', (e) => {
                    const factId = e.target.getAttribute('data-fact-id');
                    const factData = facts.find(f => f.id === factId);
                    if (factData) {
                        factsheet.toggle(factData);
                    }
                });
            });

            popover.querySelector('.factsheet-popover-close').addEventListener('click', () => {
                popover.remove();
            });

            // Click-outside-to-close
            setTimeout(() => {
                const onDocClick = (ev) => {
                    if (!popover.contains(ev.target) && !ev.target.classList.contains('factsheet-add-btn')) {
                        popover.remove();
                        document.removeEventListener('click', onDocClick);
                    }
                };
                document.addEventListener('click', onDocClick);
            }, 0);
        },

        // ---------- Print output ----------

        print() {
            const all = this.getAll();
            if (all.length === 0) {
                alert('Your fact sheet is empty. Add some facts before printing.');
                return;
            }

            // Group by category
            const byCategory = {};
            all.forEach(fact => {
                const cat = capitalize(fact.category || 'Other');
                if (!byCategory[cat]) byCategory[cat] = {};
                const itemKey = fact.itemName || 'Unknown';
                if (!byCategory[cat][itemKey]) byCategory[cat][itemKey] = [];
                byCategory[cat][itemKey].push(fact);
            });

            // Collect all unique source keys cited
            const allSourceKeys = new Set();
            all.forEach(fact => {
                (fact.sourceKeys || []).forEach(k => allSourceKeys.add(k));
            });

            // Build print HTML
            const dateStr = new Date().toLocaleDateString('en-CA', {
                year: 'numeric', month: 'long', day: 'numeric'
            });

            let html = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Dominion Observatory Fact Sheet</title>
                    <style>
                        body { font-family: 'Georgia', 'Times New Roman', serif; max-width: 7in; margin: 0.5in auto; padding: 0; color: #222; line-height: 1.45; }
                        h1 { font-size: 22pt; margin: 0 0 0.1in; border-bottom: 2px solid #444; padding-bottom: 0.08in; }
                        .subtitle { font-size: 10pt; color: #666; margin: 0 0 0.3in; }
                        h2 { font-size: 14pt; margin: 0.3in 0 0.1in; color: #444; border-bottom: 1px solid #aaa; padding-bottom: 2pt; text-transform: uppercase; letter-spacing: 1pt; }
                        h3 { font-size: 11pt; margin: 0.15in 0 0.05in; color: #222; }
                        ul { margin: 0 0 0.15in; padding-left: 0.3in; }
                        li { margin-bottom: 4pt; }
                        .fact-label { font-weight: bold; }
                        .sources-section { margin-top: 0.4in; border-top: 1px solid #aaa; padding-top: 0.15in; }
                        .sources-section h2 { border-bottom: none; margin-top: 0; }
                        .source-entry { font-size: 9pt; margin-bottom: 6pt; }
                        @media print {
                            body { margin: 0; }
                        }
                    </style>
                </head>
                <body>
                    <h1>Dominion Observatory Fact Sheet</h1>
                    <p class="subtitle">Compiled from the Dominion Observatory (Ottawa) Archive — ${dateStr}</p>
            `;

            // Sections by category
            Object.keys(byCategory).sort().forEach(cat => {
                html += `<h2>${escapeHtml(cat)}</h2>`;
                Object.keys(byCategory[cat]).forEach(itemName => {
                    html += `<h3>${escapeHtml(itemName)}</h3>`;
                    html += '<ul>';
                    byCategory[cat][itemName].forEach(fact => {
                        html += `<li><span class="fact-label">${escapeHtml(fact.label)}:</span> ${escapeHtml(fact.value)}</li>`;
                    });
                    html += '</ul>';
                });
            });

            // Sources
            if (allSourceKeys.size > 0) {
                html += '<div class="sources-section"><h2>Sources Cited</h2>';
                Array.from(allSourceKeys).sort().forEach(key => {
                    let citation = key;
                    let url = null;
                    if (typeof SourceDatabase !== 'undefined' && SourceDatabase[key]) {
                        const src = SourceDatabase[key];
                        citation = src.fullCitation || key;
                        url = src.url || null;
                    }
                    html += `<div class="source-entry"><strong>[${escapeHtml(key)}]</strong> ${escapeHtml(citation)}`;
                    if (url) {
                        html += ` &mdash; <a href="${escapeAttr(url)}">${escapeHtml(url)}</a>`;
                    }
                    html += '</div>';
                });
                html += '</div>';
            }

            html += `
                </body>
                </html>
            `;

            // Open in a new window and trigger print
            const printWindow = window.open('', '_blank', 'width=850,height=1000');
            if (!printWindow) {
                alert('Pop-up blocked — please allow pop-ups from this site to print your fact sheet.');
                return;
            }
            printWindow.document.write(html);
            printWindow.document.close();
            // Give it a moment to render before printing
            setTimeout(() => {
                printWindow.focus();
                printWindow.print();
            }, 250);
        }
    };

    // ---------- Fact extraction ----------

    // Walks an item object and returns an array of {id, category, item_id, itemName, label, value, sourceKeys}
    // Each "fact" is a top-level field on the item (Option A granularity).
    function collectFactsFromItem(item, category) {
        const facts = [];
        const itemId = item.id || item.title || item.name || ('item-' + Math.random());
        const itemName = item.name || item.title || item.shortName || 'Unknown';
        const sourceKeys = Array.isArray(item.citations) ? item.citations.slice() : [];

        // Helper: add a fact to the list
        const add = (fieldKey, label, value) => {
            if (value === null || value === undefined || value === '' || (Array.isArray(value) && value.length === 0)) return;
            facts.push({
                id: `${category}:${itemId}:${fieldKey}`,
                category: category,
                item_id: itemId,
                itemName: itemName,
                label: label,
                value: typeof value === 'string' ? value : valueToString(value),
                sourceKeys: sourceKeys
            });
        };

        // Always offer the name
        if (item.name || item.title) add('name', 'Name', item.name || item.title);

        // Walk the rest of the top-level fields
        Object.keys(item).forEach(key => {
            if (['id', 'name', 'title', 'citations', 'researchNote', 'shortName'].indexOf(key) >= 0) return;

            const value = item[key];
            const label = humanizeKey(key);

            if (value === null || value === undefined) return;

            if (typeof value === 'string' || typeof value === 'number') {
                add(key, label, String(value));
            } else if (Array.isArray(value)) {
                add(key, label, valueToString(value));
            } else if (typeof value === 'object') {
                // Special case some common nested objects
                if (key === 'birth' || key === 'death') {
                    const parts = [];
                    if (value.year) parts.push(String(value.year));
                    if (value.date) parts.push(value.date);
                    if (value.place) parts.push(value.place);
                    if (parts.length > 0) add(key, label, parts.join(', '));
                } else if (key === 'constructed' && (value.start || value.completed)) {
                    const parts = [];
                    if (value.start) parts.push(`Begun ${value.start}`);
                    if (value.completed) parts.push(`Completed ${value.completed}`);
                    if (value.groundbreaking) parts.push(`Groundbreaking ${value.groundbreaking}`);
                    add(key, label, parts.join('; '));
                } else {
                    // Fallback: stringify the object readably
                    const str = valueToString(value);
                    if (str && str.length < 1000) add(key, label, str);
                }
            }
        });

        return facts;
    }

    // ---------- Helpers ----------

    function humanizeKey(key) {
        // 'firstMeasurement' -> 'First Measurement'
        return key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, c => c.toUpperCase())
            .trim();
    }

    function valueToString(value) {
        if (value === null || value === undefined) return '';
        if (typeof value === 'string') return value;
        if (typeof value === 'number') return String(value);
        if (Array.isArray(value)) {
            return value.map(v => {
                if (typeof v === 'string') return v;
                if (typeof v === 'object' && v !== null) {
                    if (v.role && v.period) return `${v.period}: ${v.role}`;
                    if (v.role && v.year) return `${v.year}: ${v.role}`;
                    if (v.role) return v.role;
                    if (v.event && v.year) return `${v.year}: ${v.event}`;
                    if (v.honor) return `${v.honor}${v.year ? ' (' + v.year + ')' : ''}`;
                    if (v.institution) return v.institution + (v.year ? ' (' + v.year + ')' : '');
                    if (v.year && v.location) return `${v.year}: ${v.location}`;
                    return Object.values(v).filter(x => typeof x === 'string' || typeof x === 'number').join(', ');
                }
                return String(v);
            }).join(' • ');
        }
        if (typeof value === 'object') {
            // Keyed object -> "key: value, key: value"
            return Object.keys(value).map(k => {
                const v = value[k];
                if (typeof v === 'string' || typeof v === 'number') return `${humanizeKey(k)}: ${v}`;
                if (typeof v === 'object' && v !== null) {
                    return `${humanizeKey(k)}: ${valueToString(v)}`;
                }
                return '';
            }).filter(Boolean).join('; ');
        }
        return String(value);
    }

    function escapeHtml(s) {
        if (s === null || s === undefined) return '';
        return String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function escapeAttr(s) {
        return escapeHtml(s);
    }

    function capitalize(s) {
        if (!s) return s;
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    // ---------- Wire up panel events on page load ----------

    function wirePanelEvents() {
        const panel = document.getElementById('factsheet-panel');
        if (!panel) return;

        const toggleBtn = document.getElementById('factsheet-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                panel.classList.toggle('open');
            });
        }

        const closeBtn = panel.querySelector('.factsheet-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                panel.classList.remove('open');
            });
        }

        // Delegated handlers for remove & drag
        panel.addEventListener('click', (e) => {
            const removeBtn = e.target.closest('.factsheet-item-remove');
            if (removeBtn) {
                const factId = removeBtn.getAttribute('data-fact-id');
                factsheet.remove(factId);
            }
        });

        // Buttons
        const printBtn = document.getElementById('factsheet-print');
        if (printBtn) printBtn.addEventListener('click', () => factsheet.print());

        const clearBtn = document.getElementById('factsheet-clear');
        if (clearBtn) clearBtn.addEventListener('click', () => factsheet.clear());

        // Drag-and-drop reorder
        let draggedId = null;
        panel.addEventListener('dragstart', (e) => {
            const item = e.target.closest('.factsheet-item');
            if (item) {
                draggedId = item.getAttribute('data-fact-id');
                item.classList.add('dragging');
            }
        });
        panel.addEventListener('dragend', (e) => {
            const item = e.target.closest('.factsheet-item');
            if (item) item.classList.remove('dragging');
            draggedId = null;
        });
        panel.addEventListener('dragover', (e) => {
            e.preventDefault();
            const target = e.target.closest('.factsheet-item');
            if (!target || target.classList.contains('dragging')) return;
            const list = target.parentNode;
            const rect = target.getBoundingClientRect();
            const after = (e.clientY - rect.top) > (rect.height / 2);
            const dragged = list.querySelector('.dragging');
            if (dragged) {
                if (after) {
                    target.parentNode.insertBefore(dragged, target.nextSibling);
                } else {
                    target.parentNode.insertBefore(dragged, target);
                }
            }
        });
        panel.addEventListener('drop', (e) => {
            e.preventDefault();
            // Read the new order from the DOM and persist
            const items = panel.querySelectorAll('.factsheet-item');
            const order = Array.from(items).map(el => el.getAttribute('data-fact-id'));
            factsheet.reorder(order);
        });
    }

    // Wire up the "Add to fact sheet" button on every card after it renders.
    // Cards are rendered by createCard() in index.html — we hook by listening for clicks
    // on .factsheet-add-btn (delegated, since cards re-render when category changes).
    function wireCardEvents() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('.factsheet-add-btn');
            if (!btn) return;
            e.stopPropagation();
            const card = btn.closest('.card');
            if (!card) return;
            const itemId = card.getAttribute('data-id');
            const category = card.getAttribute('data-category');
            if (!itemId || !category) return;
            // Look up the item from the global ObservatoryData
            if (typeof ObservatoryData === 'undefined') return;
            const data = ObservatoryData[category] || [];
            const item = data.find(d => (d.id || d.title || d.name) === itemId);
            if (!item) return;
            factsheet.openCardPopover(card, item, category);
        });
    }

    // ---------- Init ----------

    function init() {
        wirePanelEvents();
        wireCardEvents();
        factsheet.renderPanel();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose globally so createCard() in index.html can call helper functions
    window.factsheet = factsheet;
    window.factsheetAddButtonHtml = function() {
        return '<button class="factsheet-add-btn" type="button" title="Add facts from this card to your fact sheet">★ Add to Fact Sheet</button>';
    };
})();
