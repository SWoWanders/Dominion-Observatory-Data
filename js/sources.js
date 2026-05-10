// ============================================
// SOURCE CITATIONS DATABASE
// Complete bibliography for The Dominion Observatory (Ottawa) Archive
// ============================================

const SourceDatabase = {
    // Primary Archival Sources - Federal Heritage Buildings Review Office
    "FHBRO 1992": {
        id: "FHBRO-1992-035",
        shortForm: "FHBRO 1992",
        fullCitation: "Hucker, Jacqueline. \"Dominion Observatory, Ottawa.\" FHBRO Building Report 92-035. Architectural History Branch, Parks Canada, 1992.",
        type: "Government Heritage Report",
        archive: "Carleton University Architecture Museum",
        reliability: "PRIMARY",
        url: "https://www.pc.gc.ca/apps/dfhd/page_fhbro_eng.aspx?id=5695",
        accessDate: "2025-02-15",
        notes: "Public-facing record on the Canada's Historic Places register; the original 92-035 report is held physically at Parks Canada / Carleton University"
    },

    "FHBRO 1992a": {
        id: "FHBRO-1992-041",
        shortForm: "FHBRO 1992a",
        fullCitation: "Hucker, Jacqueline. \"South Azimuth Building.\" FHBRO Building Report 92-041. Architectural History Branch, Parks Canada, 1992.",
        type: "Government Heritage Report",
        archive: "Carleton University Architecture Museum",
        reliability: "PRIMARY",
        url: "https://www.pc.gc.ca/apps/dfhd/page_fhbro_eng.aspx?id=5703",
        accessDate: "2026-05-09"
    },

    "FHBRO 1992b": {
        id: "FHBRO-1992-042",
        shortForm: "FHBRO 1992b",
        fullCitation: "Hucker, Jacqueline. \"Photo Equatorial Building.\" FHBRO Building Report 92-042. Architectural History Branch, Parks Canada, 1992.",
        type: "Government Heritage Report",
        archive: "Carleton University Architecture Museum",
        reliability: "PRIMARY",
        url: "https://www.pc.gc.ca/apps/dfhd/page_fhbro_eng.aspx?id=5704",
        accessDate: "2026-05-09"
    },

    "FHBRO 1992c": {
        id: "FHBRO-1992-036",
        shortForm: "FHBRO 1992c",
        fullCitation: "Hucker, Jacqueline. \"Observatory House, Building #2, Central Experimental Farm, Ottawa, Ontario.\" FHBRO Building Report 92-036. Architectural History Branch, Parks Canada, 1992.",
        type: "Government Heritage Report",
        archive: "Parks Canada",
        reliability: "PRIMARY",
        url: "https://www.pc.gc.ca/apps/dfhd/page_fhbro_eng.aspx?id=5696",
        accessDate: "2026-05-10"
    },

    // Library and Archives Canada
    "LAC PA-034064": {
        id: "LAC-PA-034064",
        shortForm: "LAC PA-034064",
        fullCitation: "Photograph: Dominion Observatory, c. 1905. Library and Archives Canada, Department of Mines and Resources fonds, item PA-034064.",
        type: "Archival Photograph",
        archive: "Library and Archives Canada",
        location: "395 Wellington Street, Ottawa",
        reliability: "PRIMARY",
        url: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Search?q=PA-034064",
        urlNote: "LAC has not exposed stable individual-record URLs for many of its photographic holdings. The URL above takes the reader to the LAC Collection Search pre-filled with the photo number.",
        accessDate: "2026-05-09"
    },

    "LAC RG11": {
        id: "LAC-RG11",
        shortForm: "LAC RG11",
        fullCitation: "Records of the Department of Public Works. Architectural Drawings Series. Library and Archives Canada, RG11.",
        type: "Government Records",
        archive: "Library and Archives Canada",
        reliability: "PRIMARY",
        url: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Search?q=RG11+Public+Works+architectural",
        accessDate: "2026-05-09",
        notes: "Original construction plans, 1901-1905. The URL takes the reader to the LAC Collection Search pre-filled to find the architectural drawings."
    },

    "LAC BEALS": {
        id: "LAC-BEALS-2017",
        shortForm: "LAC Beals 2017",
        fullCitation: "Larivée, François. \"Carlyle Smith Beals: A Great Canadian Astronomer.\" Discover Blog, Library and Archives Canada, 29 June 2017.",
        type: "Government / Archival Blog Post",
        archive: "Library and Archives Canada",
        reliability: "SECONDARY",
        url: "https://thediscoverblog.com/2017/06/29/carlyle-smith-beals-a-great-canadian-astronomer/",
        accessDate: "2025-02-15",
        notes: "LAC also holds the C.S. Beals fonds; this blog post summarizes Beals's career using primary archival material"
    },

    // Scholarly Publications
    "CLARK 1993": {
        id: "CLARK-1993",
        shortForm: "Clark 1993",
        fullCitation: "Clark, Anna. \"The Dominion Observatory and the Origin of Geophysics in Canada.\" CSTM Manuscript Report 93-1. Ingenium: Canada's Museums of Science and Innovation, Ottawa, 1993.",
        type: "Academic Manuscript Report",
        publisher: "Ingenium",
        reliability: "SECONDARY",
        url: "https://ingeniumcanada.org/research/library-and-archives",
        accessDate: "2025-02-15",
        notes: "Comprehensive history of geophysical programmes; held in Ingenium's archives"
    },

    "HODGSON 1989": {
        id: "HODGSON-1989",
        shortForm: "Hodgson 1989",
        fullCitation: "Hodgson, John H. The Heavens Above and the Earth Beneath: A History of the Dominion Observatories. 2 vols. Ottawa: Geological Survey of Canada Open File 1945, 1989-1994. Volume 1: to 1946 (1989); Volume 2: 1946-1970 (1994).",
        type: "Academic Monograph (definitive reference work)",
        publisher: "Geological Survey of Canada",
        reliability: "SECONDARY",
        url: "https://doi.org/10.4095/130751",
        urlNote: "DOI for Volume 1 (Open File 1945, 1989). Volume 2 (1994): https://doi.org/10.4095/220394",
        accessDate: "2026-05-09",
        notes: "The most comprehensive published history of the Dominion Observatory. Many of the specific dates and personnel details in this archive ultimately trace to Hodgson."
    },

    "JARRELL 1988": {
        id: "JARRELL-1988",
        shortForm: "Jarrell 1988",
        fullCitation: "Jarrell, Richard A. The Cold Light of Dawn: A History of Canadian Astronomy. Toronto: University of Toronto Press, 1988.",
        type: "Academic Monograph",
        publisher: "University of Toronto Press",
        reliability: "SECONDARY",
        url: "https://utorontopress.com/9780802067272/the-cold-light-of-dawn/",
        accessDate: "2025-02-15",
        notes: "Definitive scholarly history of Canadian astronomy"
    },

    "STEWART 1928": {
        id: "STEWART-1928",
        shortForm: "Stewart 1928",
        fullCitation: "Stewart, R. Meldrum. \"The Dominion Observatory.\" Journal of the Royal Astronomical Society of Canada 22 (1928): 233-234.",
        type: "Academic Journal Article",
        journal: "Journal of the Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://ui.adsabs.harvard.edu/abs/1928JRASC..22..233S",
        accessDate: "2026-05-09",
        notes: "Contemporary account by the Dominion Astronomer"
    },

    "BEALS 1956": {
        id: "BEALS-1956",
        shortForm: "Beals 1956",
        fullCitation: "Beals, C.S. \"The Dominion Observatory.\" Journal of the Royal Astronomical Society of Canada 50 (1956): 257-265.",
        type: "Academic Journal Article",
        journal: "Journal of the Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://ui.adsabs.harvard.edu/abs/1956JRASC..50..257B",
        accessDate: "2026-05-09"
    },

    "BEALS 1979": {
        id: "BEALS-FONDS",
        shortForm: "Beals fonds",
        fullCitation: "Beals, C.S. Personal fonds (papers and crater research files). Library and Archives Canada. See also Larivée, François. \"Carlyle Smith Beals: a great Canadian astronomer.\" Library and Archives Canada Discover blog, 29 June 2017.",
        type: "Archival Personal Fonds",
        archive: "Library and Archives Canada",
        reliability: "PRIMARY",
        url: "https://thediscoverblog.com/2017/06/29/carlyle-smith-beals-a-great-canadian-astronomer/",
        accessDate: "2026-05-09",
        notes: "Beals died 2 July 1979 in Ottawa. His personal papers — including extensive material on the Dominion Observatory crater research programme — are preserved at LAC. The crater work was published in numerous papers from 1956 onward; see in particular the 1960 Dominion Observatory Publication v. 24 by Millman, Liberty, Clark, Willmore, and Innes on the Brent Crater. The URL above is to LAC's Discover blog post about the Beals fonds, which describes the holdings in detail."
    },

    "HODGSON 1958": {
        id: "HODGSON-1958",
        shortForm: "Hodgson 1958",
        fullCitation: "Hodgson, J.H. \"Seismological Work in Canada.\" Journal of the Royal Astronomical Society of Canada 52 (1958): 122-135.",
        type: "Academic Journal Article",
        journal: "Journal of the Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://ui.adsabs.harvard.edu/abs/1958JRASC..52..122H",
        accessDate: "2026-05-09"
    },

    "KLOTZ 1902": {
        id: "KLOTZ-1902",
        shortForm: "Klotz 1902",
        fullCitation: "Klotz, Otto. Departmental reports on the first systematic Canadian government gravity observation. Department of the Interior, 1902.",
        type: "Government Report",
        archive: "Library and Archives Canada (Department of the Interior fonds)",
        reliability: "PRIMARY",
        url: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Search?q=Klotz+gravity+1902",
        urlNote: "These departmental reports are archived at LAC under the Department of the Interior fonds but have no direct item-level URL. The URL takes the reader to the LAC Collection Search.",
        accessDate: "2026-05-09",
        notes: "First systematic government gravity observation, made in the basement of the old Supreme Court building, Ottawa"
    },

    "KLOTZ 1906": {
        id: "KLOTZ-1906",
        shortForm: "Klotz 1906",
        fullCitation: "Klotz, Otto. Reports on the telegraphic longitude determination at the Yukon River for the Alaska Boundary. Geodetic Survey of Canada and Department of the Interior, 1906.",
        type: "Technical Report",
        archive: "Library and Archives Canada",
        reliability: "PRIMARY",
        url: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Search?q=Klotz+Yukon+longitude",
        urlNote: "No direct item-level URL available; the URL takes the reader to the LAC Collection Search.",
        accessDate: "2026-05-09"
    },

    "KLOTZ 1922": {
        id: "KLOTZ-1922",
        shortForm: "Klotz 1922",
        fullCitation: "Klotz, Otto. Reports on Canada's accession to the International Astronomical Union and the International Geodetic and Geophysical Union, Rome, 1922. See also: Klotz, Otto. Personal diaries (1866-1923), Library and Archives Canada, R6645-0-4-E / MG30-B13.",
        type: "Government Report and Personal Papers",
        archive: "Library and Archives Canada",
        archivalReference: "R6645-0-4-E / MG30-B13",
        reliability: "PRIMARY",
        url: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Search?q=Klotz+MG30-B13",
        accessDate: "2026-05-09",
        notes: "Klotz was confirmed as Canada's representative at the inaugural meetings of both the IAU and the IGGU in Rome in 1922 (per the Dictionary of Canadian Biography). His personal diaries (kept daily 1866-1923) are at LAC under reference R6645-0-4-E / MG30-B13, with an online finding aid. The exact title and form of his published 1922 report should be verified against Klotz's bibliography in the JRASC obituary by R.M. Stewart (1924, vol. 18, pp. 1-8)."
    },

    // Institutional Sources
    "CSTM 1994": {
        id: "CSTM-1994",
        shortForm: "CSTM 1994",
        fullCitation: "Canada Science and Technology Museum. Biographical Files: Dominion Observatory Personnel. Ingenium Archives, 1994.",
        type: "Archival Biographical Files",
        archive: "Ingenium: Canada's Museums of Science and Innovation",
        reliability: "SECONDARY",
        url: "https://ingeniumcanada.org/research/library-and-archives",
        accessDate: "2025-02-15"
    },

    "INGENIUM 2024": {
        id: "INGENIUM-2024",
        shortForm: "Ingenium 2024",
        fullCitation: "Ingenium: Canada's Museums of Science and Innovation. \"15-inch Refracting Telescope (CSTM accession 1974.0488).\" Online Collection.",
        type: "Museum Collection Record",
        publisher: "Ingenium",
        reliability: "SECONDARY",
        url: "https://ingeniumcanada.org/collection-research",
        accessDate: "2025-02-15",
        notes: "Search accession number 1974.0488 in the Ingenium online collection database"
    },

    "INGENIUM CHANNEL": {
        id: "INGENIUM-CHANNEL",
        shortForm: "Ingenium Channel",
        fullCitation: "Brooks, Randall, and Michel Labrecque. The Founding and Construction of the Dominion Observatory and related articles in the Ingenium Channel series, including the multi-part series on Henroteau, Burland, and the Planet X / Y episode, and the multi-part series on C.S. Beals. Ingenium: Canada's Museums of Science and Innovation.",
        type: "Curatorial Articles (museum publications)",
        publisher: "Ingenium",
        reliability: "SECONDARY",
        url: "https://ingeniumcanada.org/channel",
        accessDate: "2025-02-15",
        notes: "Authoritative for many specific details including the 1924 plate dates of the Henroteau-Burland Planet X work, the 1930 announcement, and Beals's career chronology"
    },

    "PARKS CANADA 2025": {
        id: "PARKS-2025",
        shortForm: "Parks Canada 2025",
        fullCitation: "Parks Canada. \"Government of Canada Designates the Dominion Observatory Complex as a National Historic Site.\" News Release, 15 January 2025.",
        type: "Government News Release",
        publisher: "Parks Canada",
        reliability: "PRIMARY",
        url: "https://www.canada.ca/en/parks-canada/news/2025/01/government-of-canada-designates-the-dominion-observatory-complex-as-a-national-historic-site.html",
        accessDate: "2025-02-15",
        notes: "Public announcement by the Honourable Steven Guilbeault. The HSMBC's actual designation decision dates to 2023; this release is the public announcement."
    },

    "PARKS CANADA NHSC": {
        id: "PARKS-NHSC",
        shortForm: "Parks Canada NHSC",
        fullCitation: "Parks Canada. \"Dominion Observatory Complex National Historic Site.\" Designation backgrounder.",
        type: "Government Heritage Designation Record",
        publisher: "Parks Canada",
        reliability: "PRIMARY",
        url: "https://parks.canada.ca/culture/designation/lieu-site/complexe-observatoire-observatory-complex",
        accessDate: "2025-02-15"
    },

    "CBC 2023": {
        id: "CBC-2023",
        shortForm: "CBC 2023",
        fullCitation: "Lord, Craig. \"The end of the long dash: CBC stops broadcasting official time signal.\" CBC News Ottawa, 9 October 2023.",
        type: "News Media",
        publisher: "CBC News",
        reliability: "SECONDARY",
        url: "https://www.cbc.ca/news/canada/ottawa/cbc-stops-broadcasting-national-research-council-long-dash-time-signal-1.6988903",
        accessDate: "2026-05-09"
    },

    // Contemporary Sources
    "OTTAWA JOURNAL 1902": {
        id: "OTTAWA-JOURNAL-1902",
        shortForm: "Ottawa Journal 1902",
        fullCitation: "\"The New Dominion Observatory.\" Ottawa Evening Journal, July 1902.",
        type: "Historical Newspaper",
        archive: "Library and Archives Canada",
        reliability: "PRIMARY",
        url: "https://www.bac-lac.gc.ca/eng/Pages/home.aspx",
        accessDate: "2025-02-15"
    },

    // Reference Works
    "RASC 1994": {
        id: "RASC-1994",
        shortForm: "RASC 1994",
        fullCitation: "Royal Astronomical Society of Canada. Biographical sketches of Society Past Presidents and other notable Canadian astronomers.",
        type: "Society Publication",
        publisher: "Royal Astronomical Society of Canada",
        reliability: "SECONDARY",
        url: "https://www.rasc.ca/biographies",
        accessDate: "2026-05-09",
        notes: "RASC's index of biographical sketches. For specific people, see the dedicated source entries: RASC STEWART, RASC MILLMAN, RASC HALLIDAY."
    },

    "BIOGRAPHI": {
        id: "BIOGRAPHI",
        shortForm: "Biographi",
        fullCitation: "Dictionary of Canadian Biography. Entries: \"King, William Frederick\" (vol. 14, by Richard A. Jarrell), \"Klotz, Otto Julius\" (vol. 15, by Richard A. Jarrell). Université Laval / University of Toronto.",
        type: "Tertiary Reference (peer-reviewed)",
        publisher: "Université Laval / University of Toronto",
        reliability: "SECONDARY",
        url: "https://www.biographi.ca/en/bio/king_william_frederick_14E.html",
        urlNote: "Direct link to King's entry. Klotz's entry: https://www.biographi.ca/en/bio/klotz_otto_julius_15E.html",
        accessDate: "2026-05-09",
        notes: "The DCB is the standard scholarly biographical reference for Canadian historical figures; entries are peer-reviewed and footnoted"
    },

    "WIKIPEDIA 2024": {
        id: "WIKIPEDIA-BURLAND",
        shortForm: "Wikipedia: Burland",
        fullCitation: "Wikipedia contributors. \"Miriam Burland.\" Wikipedia, The Free Encyclopedia.",
        type: "Tertiary Encyclopedia",
        publisher: "Wikimedia Foundation",
        reliability: "TERTIARY",
        url: "https://en.wikipedia.org/wiki/Miriam_Burland",
        urlNote: "Use Wikipedia's 'Cite this page' tool for a permalink to the specific revision used",
        accessDate: "2025-02-15",
        notes: "User-generated; verified against Ingenium Channel and other primary sources where possible. Note: Burland's death year is 1997 (per Ingenium Channel), which should be the authoritative figure if it conflicts with Wikipedia."
    },

    "HUCKER 1992": {
        id: "HUCKER-1992",
        shortForm: "Hucker 1992",
        fullCitation: "Hucker, Jacqueline. \"David Ewart: Chief Architect.\" Biographical Notes, Architectural History Branch, Parks Canada, 1992.",
        type: "Biographical Research",
        archive: "Parks Canada",
        reliability: "SECONDARY",
        url: "https://www.pc.gc.ca/apps/dfhd/page_fhbro_eng.aspx?id=5695",
        accessDate: "2026-05-09"
    },

    // Sources added in Session 2 (Pass 4-6 research)
    "RASC LABRADOR 1905": {
        id: "RASC-LABRADOR-1905",
        shortForm: "Chant 1905",
        fullCitation: "Chant, C.A. \"The Labrador Eclipse Expedition.\" Acta Victoriana (Christmas 1905). Reprinted on the Royal Astronomical Society of Canada website.",
        type: "Historical Account (first-hand)",
        publisher: "Royal Astronomical Society of Canada (reprint)",
        reliability: "PRIMARY",
        url: "https://www.rasc.ca/labrador-eclipse-expedition",
        accessDate: "2026-05-09",
        notes: "First-hand account by C.A. Chant (then RASC President), who accompanied the expedition. The original 1905 publication is also archived at https://archive.org/details/cihm_991696"
    },

    "NRCAN GEODETIC": {
        id: "NRCAN-GEODETIC",
        shortForm: "NRCan, '100 Years of Geodetic Surveys'",
        fullCitation: "Natural Resources Canada. \"100 Years of Geodetic Surveys in Canada.\" Government of Canada, accessed 2026.",
        type: "Government heritage page",
        publisher: "Natural Resources Canada / Geodetic Reference Systems",
        reliability: "PRIMARY",
        url: "https://natural-resources.canada.ca/science-data/science-research/geomatics/geodetic-reference-systems/100-years-geodetic-surveys-canada",
        accessDate: "2026-05-09",
        notes: "Successor agency to the Geodetic Survey of Canada, which was a direct continuation of the surveying work begun at the Dominion Observatory under King and Klotz."
    },

    "ODELL 2020": {
        id: "ODELL-2020",
        shortForm: "Odell 2020",
        fullCitation: "Odell, Sharon. 'Astronomer Mary Grey and the Architecture of Canada's Dominion Observatory.' Journal of the Society for the Study of Architecture in Canada / Le Journal de la Société pour l'étude de l'architecture au Canada, vol. 45, no. 1 (2020).",
        type: "Academic article",
        publisher: "Society for the Study of Architecture in Canada",
        reliability: "PRIMARY",
        url: "https://www.erudit.org/en/journals/jssac/2020-v45-n1-jssac05817/1075073ar.pdf",
        accessDate: "2026-05-09",
        notes: "Master's-thesis-derived article on Mary Grey's role in saving the Dominion Observatory building and its instruments at the 1970 closure."
    },

    "RASC STEWART": {
        id: "RASC-STEWART",
        shortForm: "RASC, 'Robert Meldrum Stewart'",
        fullCitation: "Royal Astronomical Society of Canada. \"Robert Meldrum Stewart.\" RASC website, accessed 2026.",
        type: "Society biographical sketch",
        publisher: "Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://rasc.ca/robert-meldrum-stewart",
        accessDate: "2026-05-09"
    },

    "RASC MILLMAN": {
        id: "RASC-MILLMAN",
        shortForm: "RASC, 'Peter Millman'",
        fullCitation: "Royal Astronomical Society of Canada. \"Peter Millman.\" RASC website, accessed 2026.",
        type: "Society biographical sketch",
        publisher: "Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://www.rasc.ca/peter-millman",
        accessDate: "2026-05-09"
    },

    "RASC HALLIDAY": {
        id: "RASC-HALLIDAY",
        shortForm: "RASC, 'Ian Halliday'",
        fullCitation: "Royal Astronomical Society of Canada. \"Ian Halliday.\" RASC website, accessed 2026.",
        type: "Society biographical sketch",
        publisher: "Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://www.rasc.ca/ian-halliday",
        accessDate: "2026-05-09"
    },

    // Sources added in Session 3 (Pass 7 / personnel polish)
    "RASC HARPER": {
        id: "RASC-HARPER",
        shortForm: "RASC, 'William Harper'",
        fullCitation: "Royal Astronomical Society of Canada. \"William Harper.\" RASC website, accessed 2026.",
        type: "Society biographical sketch",
        publisher: "Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://www.rasc.ca/william-harper",
        accessDate: "2026-05-09"
    },

    "RASC BURLAND": {
        id: "RASC-BURLAND",
        shortForm: "RASC, 'Miriam Burland'",
        fullCitation: "Royal Astronomical Society of Canada. \"Miriam Burland.\" RASC website, accessed 2026.",
        type: "Society biographical sketch",
        publisher: "Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://www.rasc.ca/miriam-burland",
        accessDate: "2026-05-09"
    },

    "RASC BEALS": {
        id: "RASC-BEALS",
        shortForm: "RASC, 'Carlyle Beals'",
        fullCitation: "Royal Astronomical Society of Canada. \"Carlyle Beals.\" RASC website, accessed 2026.",
        type: "Society biographical sketch",
        publisher: "Royal Astronomical Society of Canada",
        reliability: "PRIMARY",
        url: "https://rasc.ca/carlyle-beals",
        accessDate: "2026-05-09"
    },

    "BROOKS 2005 CASCA": {
        id: "BROOKS-2005-CASCA",
        shortForm: "Brooks, CASCA 100th",
        fullCitation: "Brooks, Randall. \"The Dominion Observatory — 100th Anniversary.\" CASCA E-Cass, 2005.",
        type: "Society history article",
        publisher: "Canadian Astronomical Society (CASCA)",
        reliability: "PRIMARY",
        url: "http://www.casca.ca/ecass/issues/2005-me/features/brooks/e-Cassi_DomObsV4.htm",
        accessDate: "2026-05-09",
        notes: "Source for the 'Burland first Canadian government woman to wear pants' anecdote and many other DO 100th-anniversary facts. Brooks was Curator at the (then) National Museum of Science and Technology / Ingenium."
    },

    "ARCHEION BURLAND": {
        id: "ARCHEION-BURLAND",
        shortForm: "Archeion, Burland",
        fullCitation: "\"Burland, Miriam S.\" Archeion: Ontario's Archival Information Network. Entry for the Miriam Burland fonds.",
        type: "Archival finding aid",
        publisher: "Archives Association of Ontario",
        reliability: "PRIMARY",
        url: "https://www.archeion.ca/burland-miriam-s",
        accessDate: "2026-05-09"
    },

    "WIKI BURLAND": {
        id: "WIKI-BURLAND",
        shortForm: "Wikipedia, 'Miriam Burland'",
        fullCitation: "\"Miriam Burland.\" Wikipedia, The Free Encyclopedia.",
        type: "Encyclopedia article",
        publisher: "Wikimedia Foundation",
        reliability: "TERTIARY",
        url: "https://en.wikipedia.org/wiki/Miriam_Burland",
        accessDate: "2026-05-09"
    }
};

// Citation formatting utilities
const CitationFormatter = {
    format(sourceKey, style = 'chicago') {
        const source = SourceDatabase[sourceKey];
        if (!source) return `[${sourceKey}]`;

        switch(style) {
            case 'apa':
                return this.formatAPA(source);
            case 'mla':
                return this.formatMLA(source);
            case 'chicago':
            default:
                return this.formatChicago(source);
        }
    },

    formatChicago(source) {
        // Chicago-style: full citation, with hyperlink if URL is present
        if (source.url) {
            return `${source.fullCitation} <a href="${source.url}" target="_blank" rel="noopener">[link]</a>`;
        }
        return source.fullCitation;
    },

    formatAPA(source) {
        // Simplified APA format
        const author = source.fullCitation.split('.')[0];
        const year = source.fullCitation.match(/\d{4}/)?.[0] || 'n.d.';
        const title = source.fullCitation.match(/['"](.+?)['"]/)?.[1] || 'Untitled';
        const linkSuffix = source.url ? ` Retrieved from <a href="${source.url}" target="_blank" rel="noopener">${source.url}</a>` : '';
        return `${author} (${year}). ${title}.${linkSuffix}`;
    },

    formatMLA(source) {
        // Simplified MLA format
        const author = source.fullCitation.split('.')[0];
        const title = source.fullCitation.match(/['"](.+?)['"]/)?.[1] || 'Untitled';
        const linkSuffix = source.url ? ` Web. <a href="${source.url}" target="_blank" rel="noopener">${source.url}</a>` : '';
        return `${author}. "${title}."${linkSuffix}`;
    },

    getReliabilityIcon(reliability) {
        const icons = {
            'PRIMARY': '⭐⭐⭐⭐⭐',
            'SECONDARY': '⭐⭐⭐⭐☆',
            'TERTIARY': '⭐⭐⭐☆☆',
            'UNVERIFIED': '⭐⭐☆☆☆'
        };
        return icons[reliability] || '⭐⭐⭐☆☆';
    },

    // Generate a clickable inline citation marker like [Klotz 1902]
    formatInlineLink(sourceKey) {
        const source = SourceDatabase[sourceKey];
        if (!source) return `[${sourceKey}]`;
        if (source.url) {
            return `<a href="${source.url}" target="_blank" rel="noopener" title="${source.fullCitation.replace(/"/g, '&quot;')}">[${source.shortForm}]</a>`;
        }
        return `<span title="${source.fullCitation.replace(/"/g, '&quot;')}">[${source.shortForm}]</span>`;
    },

    getAllCitations() {
        return Object.values(SourceDatabase).map(source => ({
            key: source.shortForm,
            citation: source.fullCitation,
            type: source.type,
            reliability: source.reliability,
            url: source.url
        }));
    }
};

// Make available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SourceDatabase, CitationFormatter };
}
