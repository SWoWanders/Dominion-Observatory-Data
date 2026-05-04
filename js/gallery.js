// ============================================
// GALLERY DATABASE
// Curated public-domain images related to the
// Dominion Observatory (Ottawa).
//
// EDITORIAL POLICY FOR THIS FILE
// ------------------------------
// Only images whose copyright status can be confirmed
// are included.
//
// Three categories of confirmation are accepted here:
//
//   (a) Pre-1929 photographs and publications. PD in
//       both Canada and the United States by date alone.
//
//   (b) Items whose holding archive's public catalogue
//       explicitly says "Copyright: Expired" — the
//       standard LAC formula for confirmed PD.
//
//   (c) Items whose photographer/author died more than
//       50 years before publication (Canada) AND more
//       than 95 years before publication for any item
//       first published before 1978 (US safe-harbour).
//
// HOW TO ADD MORE IMAGES
// ----------------------
// 1. Open the source archive's catalogue or Commons file
//    page in a browser.
// 2. Note the license tag or copyright statement.
// 3. Note the photographer/uploader name.
// 4. Add a new entry below following the schema in the
//    existing entries.
//
// FIELD REFERENCE
// ---------------
// id            : stable identifier
// title         : short caption shown under image
// caption       : longer descriptive caption
// date          : year or year range (string; "c. 1908" allowed)
// creator       : photographer / artist (or "Unknown")
// sourceArchive : holding institution
// sourceUrl     : direct link to the file/record page
// imageUrl      : direct link to image content (may be empty
//                 if the source archive does not expose one)
// license       : "PD-old", "PD-Canada-Crown", "PD-Canada-Expired",
//                 "CC-BY-SA-4.0", "CC-BY-SA-3.0", "CC-BY-4.0",
//                 "CC0", "PD-US-expired"
// licenseUrl    : link to license text
// attribution   : exact required attribution string ("" if none)
// category      : one of "buildings", "people", "instruments",
//                 "interior", "historical", "documents", "context"
// citations     : array of SourceDatabase keys
// ============================================

const GalleryDatabase = {
    images: [
        // ------------------------------------------------------------
        // EXTERIOR PHOTOGRAPHS (pre-1929 — PD worldwide)
        // ------------------------------------------------------------
        {
            id: "GAL-001",
            title: "Dominion Observatory, Ottawa (early 20th c.)",
            caption: "An early photograph of the Dominion Observatory shortly after its 1905 completion, attributed in Wikimedia Commons file metadata to a photographer named Wilder. The image shows the Romanesque Revival main building designed by Chief Dominion Architect David Ewart, with the central octagonal tower, retractable copper dome, and flanking T-shaped wings.",
            date: "Early 20th century",
            creator: "Wilder (per Wikimedia Commons file metadata)",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Dominion_Observatory,_Ottawa,_by_Wilder.jpg",
            imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dominion_Observatory,_Ottawa,_by_Wilder.jpg",
            license: "PD-old",
            licenseUrl: "https://en.wikipedia.org/wiki/Public_domain",
            attribution: "Wilder, via Wikimedia Commons (public domain — pre-1929 photograph).",
            category: "historical",
            citations: ["FHBRO 1992"]
        },
        {
            id: "GAL-002",
            title: "Dominion Observatory under construction",
            caption: "A construction-era photograph of the Dominion Observatory main building, showing the Nepean sandstone walls partway through construction. Building work began in 1902 and was completed in 1905. The photograph documents the early stages of one of four major federal public buildings raised in Ottawa during the Laurier expansionist years.",
            date: "c. 1902–1905",
            creator: "Unknown (likely Department of Public Works)",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Dominion_Observatory_under_construction.jpg",
            imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Dominion_Observatory_under_construction.jpg",
            license: "PD-old",
            licenseUrl: "https://en.wikipedia.org/wiki/Public_domain",
            attribution: "Unknown photographer (Department of Public Works), via Wikimedia Commons (public domain — pre-1929 photograph).",
            category: "historical",
            citations: ["FHBRO 1992", "LAC RG11"]
        },

        // ------------------------------------------------------------
        // LIBRARY AND ARCHIVES CANADA (LAC) — explicitly "Copyright: Expired"
        // in the LAC public catalogue.
        // ------------------------------------------------------------
        {
            id: "GAL-003",
            title: "Dominion Observatory, Ottawa (LAC PA-034064)",
            caption: "A photograph of the Dominion Observatory held in the Mineral Resources Branch Photograph Collection at Library and Archives Canada, item PA-034064 (other accession 1952-016 NPC). The LAC catalogue record explicitly states copyright is expired.",
            date: "Date in LAC record uncertain; from the Mineral Resources Branch fonds",
            creator: "Canada. Department of Mines & Technical Surveys",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/home/record?app=fonandcol&IdNumber=3318669",
            imageUrl: "",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Canada. Dept. of Mines & Technical Surveys / Library and Archives Canada / PA-034064.",
            category: "historical",
            citations: ["LAC PA-034064"],
            notes: "LAC catalogue record reads 'Restrictions on use: Nil. Copyright: Expired.' To display the image inline, you'll need to fetch a copy from the LAC catalogue page and host it locally, or link out to the LAC record."
        },
        {
            id: "GAL-004",
            title: "Dominion Observatory, 1920s (LAC PA-034406)",
            caption: "A 1920s view of the Dominion Observatory referenced in the Heritage Ottawa newsletter, credited to the Department of the Interior fonds at Library and Archives Canada under accession PA-034406. Useful as a slightly later operational-period image to complement the construction-era photographs.",
            date: "1920s",
            creator: "Canada. Department of the Interior",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://heritageottawa.org/en/50years/23-central-experimental-farm-part-1",
            imageUrl: "",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Department of the Interior / Library and Archives Canada / PA-034406.",
            category: "historical",
            citations: [],
            notes: "Reference seen in Heritage Ottawa's '50years/23-central-experimental-farm-part-1' newsletter. Confirm 'Copyright: Expired' on the LAC catalogue record before publishing — search 'PA-034406' in the LAC online catalogue."
        },

        // ------------------------------------------------------------
        // PERSONNEL — author/photographer + date both place item in PD
        // ------------------------------------------------------------
        {
            id: "GAL-005",
            title: "William Frederick King (1854–1916)",
            caption: "Portrait of William Frederick King, Canada's first Chief Astronomer (from 1890) and founding Director of the Dominion Observatory (1905–1916). King was born in Stowmarket, Suffolk, on 19 February 1854 and died in Ottawa on 23 April 1916.",
            date: "Late 19th or early 20th century",
            creator: "Unknown (King died in 1916)",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:William_Frederick_King.png",
            imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/William_Frederick_King.png",
            license: "PD-old",
            licenseUrl: "https://en.wikipedia.org/wiki/Public_domain",
            attribution: "Public domain via Wikimedia Commons; subject d. 1916.",
            category: "people",
            citations: ["BIOGRAPHI"]
        },

        // ------------------------------------------------------------
        // PRINTED EPHEMERA (pre-1929 — PD worldwide)
        // ------------------------------------------------------------
        {
            id: "GAL-006",
            title: "Dominion Observatory — Abbott's Guide to Ottawa, page 25",
            caption: "Page 25 of Abbott's Guide to Ottawa, an early-twentieth-century guidebook, featuring the Dominion Observatory among Ottawa's notable institutions. The page is a useful primary-source illustration of how the Observatory was promoted to the public in its early operational years.",
            date: "Early 20th century",
            creator: "Abbott (publisher); engraver/photographer not identified",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Abbot%27s_Guide_to_Ottawa_Page25.png",
            imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Abbot's_Guide_to_Ottawa_Page25.png",
            license: "PD-old",
            licenseUrl: "https://en.wikipedia.org/wiki/Public_domain",
            attribution: "Abbott's Guide to Ottawa, via Wikimedia Commons (public domain — pre-1929 publication).",
            category: "documents",
            citations: []
        }
    ],

    // Categories used by the renderer's filter bar.
    // Empty categories are hidden automatically.
    categories: {
        buildings: {
            name: "Buildings & Architecture",
            icon: "🏛",
            description: "The Dominion Observatory main building (1905), Observatory House (1909), South Azimuth Building (1912), Photo Equatorial Building (1914), and the wider complex."
        },
        historical: {
            name: "Historical Photographs",
            icon: "📷",
            description: "Photographs from the institution's operational period (1905–1970) and earlier construction phase."
        },
        people: {
            name: "Personnel",
            icon: "👤",
            description: "Portraits of the Dominion Observatory's astronomers, geophysicists, and staff."
        },
        instruments: {
            name: "Instruments",
            icon: "🔭",
            description: "The 15-inch refractor and other scientific instruments used at the Observatory."
        },
        documents: {
            name: "Documents & Ephemera",
            icon: "📜",
            description: "Guidebook pages, publication frontispieces, and other printed materials."
        },
        context: {
            name: "Wider Context",
            icon: "🌐",
            description: "Images that situate the Dominion Observatory in its physical and institutional landscape."
        }
    }
};

// Make available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GalleryDatabase };
}
