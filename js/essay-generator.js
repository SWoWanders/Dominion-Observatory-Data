// ============================================
// ESSAY GENERATOR
// Creates formatted documents from selected facts
// ============================================

class EssayGenerator {
    constructor() {
        this.selectedTopics = new Map();
        this.modal = document.getElementById('essay-modal');
        this.outputModal = document.getElementById('output-modal');
        this.topicGrid = document.getElementById('topic-grid');
        
        this.init();
    }
    
    init() {
        // Bind generate button
        document.getElementById('generate-essay-btn')?.addEventListener('click', () => {
            this.openTopicSelector();
        });
        
        // Bind modal actions
        document.getElementById('cancel-essay')?.addEventListener('click', () => {
            this.closeModal();
        });
        
        document.getElementById('confirm-essay')?.addEventListener('click', () => {
            this.generateEssay();
        });
        
        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.target.closest('.modal').classList.add('hidden');
            });
        });
        
        // Output modal actions
        document.getElementById('copy-essay')?.addEventListener('click', () => {
            this.copyToClipboard();
        });
        
        document.getElementById('print-essay')?.addEventListener('click', () => {
            this.printEssay();
        });
        
        document.getElementById('save-essay')?.addEventListener('click', () => {
            this.saveAsPDF();
        });
    }
    
    openTopicSelector() {
        this.renderTopicGrid();
        this.modal.classList.remove('hidden');
    }
    
    closeModal() {
        this.modal.classList.add('hidden');
    }
    
    renderTopicGrid() {
        const categories = [
            { id: 'buildings', name: 'Buildings & Structures', icon: '🏛️', items: ObservatoryData.buildings },
            { id: 'equipment', name: 'Scientific Equipment', icon: '🔭', items: ObservatoryData.equipment },
            { id: 'personnel', name: 'Personnel', icon: '👤', items: ObservatoryData.personnel },
            { id: 'programs', name: 'Scientific Programs', icon: '🔬', items: ObservatoryData.programs },
            { id: 'discoveries', name: 'Discoveries', icon: '⭐', items: ObservatoryData.discoveries }
        ];
        
        this.topicGrid.innerHTML = categories.map(cat => {
            const selected = this.selectedTopics.has(cat.id);
            const selectedItems = this.selectedTopics.get(cat.id) || [];
            
            return `
                <div class="topic-item ${selected ? 'selected' : ''}" 
                     onclick="app.essayGenerator.toggleCategory('${cat.id}')">
                    <div class="topic-checkbox"></div>
                    <div class="topic-info">
                        <span class="topic-name">${cat.icon} ${cat.name}</span>
                        <span class="topic-count">${cat.items.length} items${selected ? ` (${selectedItems.length} selected)` : ''}</span>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    toggleCategory(categoryId) {
        if (this.selectedTopics.has(categoryId)) {
            this.selectedTopics.delete(categoryId);
        } else {
            // Select all items in category by default
            const items = ObservatoryData[categoryId].map(item => item.id);
            this.selectedTopics.set(categoryId, items);
        }
        this.renderTopicGrid();
    }
    
    addToSelection(category, itemId) {
        if (!this.selectedTopics.has(category)) {
            this.selectedTopics.set(category, []);
        }
        const items = this.selectedTopics.get(category);
        if (!items.includes(itemId)) {
            items.push(itemId);
        }
        // Show feedback
        this.showToast('Added to essay selection');
    }
    
    generateEssay() {
        const style = document.getElementById('essay-style').value;
        const citationFormat = document.getElementById('citation-format').value;
        
        const essay = this.composeEssay(style, citationFormat);
        
        this.closeModal();
        this.displayEssay(essay, citationFormat);
    }
    
    composeEssay(style, citationFormat) {
        const title = this.generateTitle(style);
        const sections = [];
        
        // Introduction
        sections.push(this.generateIntroduction(style));
        
        // Selected content
        this.selectedTopics.forEach((itemIds, category) => {
            const items = itemIds.map(id => 
                ObservatoryData[category].find(item => item.id === id)
            ).filter(Boolean);
            
            if (items.length > 0) {
                sections.push(this.generateCategorySection(category, items, style, citationFormat));
            }
        });
        
        // Conclusion
        sections.push(this.generateConclusion(style));
        
        // Bibliography
        sections.push(this.generateBibliography(citationFormat));
        
        return {
            title,
            date: new Date().toLocaleDateString(),
            wordCount: this.estimateWordCount(sections),
            sections,
            citations: this.collectAllCitations()
        };
    }
    
    generateTitle(style) {
        const titles = {
            comprehensive: 'The Dominion Observatory (Ottawa): The Institution and Its Building, 1905\u20132025',
            architectural: 'Architecture of Science: The Dominion Observatory (Ottawa) and its Buildings, 1902\u2013present',
            biographical: 'The Astronomers of the Dominion Observatory (Ottawa): Pioneers of Canadian Science, 1905\u20131970'
        };
        return titles[style] || titles.comprehensive;
    }
    
    generateIntroduction(style) {
        const intros = {
            comprehensive: `
                Rising from the Central Experimental Farm in Ottawa in 1905, the Dominion Observatory
                served as Canada's federal astronomical institution for 65 years. When the institution
                was reorganized in 1970, its astronomical and timekeeping work passed to the National
                Research Council and its geophysical work to what is now Natural Resources Canada,
                but the building itself remained in continuous federal use. Designated a Classified
                Federal Heritage Building in 1992 and announced as a National Historic Site of Canada
                in January 2025, the complex now spans 120 years of Canadian scientific and
                architectural heritage. (This archive concerns the Dominion Observatory in Ottawa.
                It is distinct from the Dominion Astrophysical Observatory in Saanich/Victoria, BC,
                opened 1918, and the Dominion Radio Astrophysical Observatory near Penticton, BC,
                opened 1960.)
            `,
            architectural: `
                The Dominion Observatory complex in Ottawa represents a singular achievement in
                Canadian institutional architecture. Designed by David Ewart, Chief Architect of the
                Department of Public Works, the ensemble of buildings — constructed between 1902 and
                1954 — combines Romanesque Revival solidity with Edwardian Classicist elegance,
                creating an architectural language appropriate to the serious scientific purpose
                within. The buildings have remained in continuous federal use since 1905 and were
                designated a Classified Federal Heritage Building in 1992. In January 2025,
                Parks Canada announced the complex's designation as a National Historic Site.
            `,
            biographical: `
                Behind the brass and glass of the Dominion Observatory in Ottawa stood remarkable
                individuals whose dedication to precision and discovery shaped Canadian science
                during the institution's 65-year operational life (1905\u20131970). From William
                Frederick King's vision and John Stanley Plaskett's early Ottawa spectrograph work,
                to Otto Klotz's first systematic Canadian government gravity measurement (1902) and
                seismic operations (1906), to Carlyle Smith Beals's later impact-crater research
                programme, these astronomers and geophysicists established traditions of excellence
                that continue today through the institution's successor agencies.
            `
        };

        return {
            heading: 'Introduction',
            content: this.cleanText(intros[style] || intros.comprehensive)
        };
    }
    
    generateCategorySection(category, items, style, citationFormat) {
        const headings = {
            buildings: 'Architectural Heritage',
            equipment: 'Scientific Instrumentation',
            personnel: 'Key Personnel',
            programs: 'Research Programs',
            discoveries: 'Major Contributions'
        };
        
        let content = '';
        
        items.forEach(item => {
            content += this.renderItemForEssay(item, category, citationFormat);
        });
        
        return {
            heading: headings[category] || category,
            content: this.cleanText(content)
        };
    }
    
    renderItemForEssay(item, category, citationFormat) {
        let text = '';
        
        switch(category) {
            case 'buildings':
                text += `<strong>${item.name}</strong> `;
                if (item.constructed) {
                    const year = item.constructed.completed || item.constructed;
                    text += `was constructed in ${year} `;
                }
                if (item.architect) {
                    text += `to designs by ${item.architect}. `;
                }
                if (item.dimensions) {
                    text += `The structure features `;
                    if (item.dimensions.tower) {
                        text += `a ${item.dimensions.tower.diameter.feet}-foot ${item.dimensions.tower.shape.toLowerCase()} tower `;
                    }
                    text += `. `;
                }
                break;
                
            case 'equipment':
                text += `The <strong>${item.name}</strong> `;
                if (item.acquired) {
                    text += `was acquired in ${item.acquired}. `;
                }
                if (item.distinction) {
                    text += `${item.distinction}. `;
                }
                if (item.currentLocation) {
                    text += `It is currently located at ${item.currentLocation}. `;
                }
                break;
                
            case 'personnel':
                text += `<strong>${item.name}</strong> `;
                if (item.birth && item.death) {
                    text += `(${item.birth.year}-${item.death.year}) `;
                }
                if (item.career && item.career.length > 0) {
                    const lastRole = item.career[item.career.length - 1];
                    text += `served as ${lastRole.role}. `;
                }
                if (item.contributions) {
                    text += `Major contributions include ${item.contributions[0].toLowerCase()}. `;
                }
                break;
                
            case 'programs':
                text += `The <strong>${item.name}</strong> program `;
                if (item.period) {
                    text += `operated from ${item.period}. `;
                }
                text += `${item.description}. `;
                break;
                
            case 'discoveries':
                text += `<strong>${item.title}</strong> `;
                if (item.year) {
                    text += `( ${item.year} ) `;
                } else if (item.period) {
                    text += `( ${item.period} ) `;
                }
                text += `represents ${item.description.toLowerCase()}. `;
                break;
        }
        
        // Add citations
        if (item.citations) {
            text += item.citations.map(cit => this.formatCitationInline(cit, citationFormat)).join(' ');
        }
        
        return `<p>${text}</p>`;
    }
    
    formatCitationInline(citationKey, format) {
        // Look up the source
        const source = SourceDatabase[citationKey];
        if (!source) return `[${citationKey}]`;

        if (format === 'apa') {
            const author = source.fullCitation.split('.')[0].split(' ').pop();
            const year = source.fullCitation.match(/\d{4}/)?.[0] || 'n.d.';
            if (source.url) {
                return `(<a href="${source.url}" target="_blank" rel="noopener" title="${source.fullCitation.replace(/"/g, '&quot;')}">${author}, ${year}</a>)`;
            }
            return `(${author}, ${year})`;
        } else if (format === 'mla') {
            const author = source.fullCitation.split('.')[0].split(' ').pop();
            if (source.url) {
                return `(<a href="${source.url}" target="_blank" rel="noopener" title="${source.fullCitation.replace(/"/g, '&quot;')}">${author}</a>)`;
            }
            return `(${author})`;
        } else {
            // Chicago / footnote style — clickable inline marker linking to source
            return CitationFormatter.formatInlineLink(citationKey);
        }
    }
    
    generateConclusion(style) {
        const conclusions = {
            comprehensive: `
                From its establishment in 1905 to the closure of the institution in 1970, and from
                its Federal Heritage Building designation in 1992 to its announcement as a National
                Historic Site in January 2025, the Dominion Observatory complex in Ottawa stands as
                a 120-year testament to Canadian scientific ambition. Its buildings, instruments,
                and the scientists who operated them established traditions of precision and
                discovery that continue to influence Canadian geophysical research today, principally
                through Natural Resources Canada and the National Research Council.
            `,
            architectural: `
                The Dominion Observatory buildings in Ottawa remain among the finest examples of
                institutional architecture in Canada. Continuously occupied by federal scientific
                bodies since 1905, designated as Federal Heritage Buildings in 1992, and announced
                as a National Historic Site in 2025, the complex ensures that future generations
                may appreciate both their aesthetic qualities and their role in the development of
                Canadian science.
            `,
            biographical: `
                The astronomers of the Dominion Observatory in Ottawa established a legacy of
                excellence that extended far beyond the capital and far beyond the institution's
                65-year operational life. Through their work in positional astronomy, geophysics,
                seismology, gravimetry, and public education, they shaped not only Canadian science
                but international collaborations that continue to advance human knowledge of Earth
                and sky. Their successors at Natural Resources Canada and the National Research
                Council carry that work forward to this day.
            `
        };

        return {
            heading: 'Conclusion',
            content: this.cleanText(conclusions[style] || conclusions.comprehensive)
        };
    }
    
    generateBibliography(format) {
        const citations = this.collectAllCitations();
        const uniqueCitations = [...new Set(citations)];
        
        let content = '<ul>';
        uniqueCitations.forEach(cit => {
            content += `<li>${CitationFormatter.format(cit, format)}</li>`;
        });
        content += '</ul>';
        
        return {
            heading: 'Bibliography',
            content: content
        };
    }
    
    collectAllCitations() {
        const citations = [];
        this.selectedTopics.forEach((itemIds, category) => {
            itemIds.forEach(id => {
                const item = ObservatoryData[category].find(i => i.id === id);
                if (item && item.citations) {
                    citations.push(...item.citations);
                }
            });
        });
        return citations;
    }
    
    estimateWordCount(sections) {
        let count = 0;
        sections.forEach(section => {
            count += section.content.split(/\s+/).length;
        });
        return count;
    }
    
    cleanText(text) {
        return text.replace(/\s+/g, ' ').trim();
    }
    
    displayEssay(essay, citationFormat) {
        const output = document.getElementById('essay-output');
        
        let html = `
            <div class="essay-header">
                <h1>${essay.title}</h1>
                <p class="essay-meta">Generated ${essay.date} • ${essay.wordCount} words • ${citationFormat.toUpperCase()} format</p>
            </div>
        `;
        
        essay.sections.forEach(section => {
            html += `
                <section class="essay-section">
                    <h2>${section.heading}</h2>
                    ${section.content}
                </section>
            `;
        });
        
        output.innerHTML = html;
        this.outputModal.classList.remove('hidden');
        
        // Store for export
        this.currentEssay = essay;
    }
    
    copyToClipboard() {
        const text = this.plainTextEssay();
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('Essay copied to clipboard');
        });
    }
    
    printEssay() {
        window.print();
    }
    
    saveAsPDF() {
        // Trigger print dialog with PDF option
        window.print();
    }
    
    plainTextEssay() {
        if (!this.currentEssay) return '';
        
        let text = `${this.currentEssay.title}\n`;
        text += `Generated: ${this.currentEssay.date}\n\n`;
        
        this.currentEssay.sections.forEach(section => {
            text += `${section.heading.toUpperCase()}\n`;
            text += `${section.content.replace(/<[^>]+>/g, '')}\n\n`;
        });
        
        return text;
    }
    
    showToast(message) {
        // Simple toast notification
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--brass);
            color: var(--obsidian);
            padding: 1rem 2rem;
            border-radius: 4px;
            z-index: 1000;
            animation: fadeIn 0.3s ease;
        `;
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
}

// Initialize
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EssayGenerator;
              }
