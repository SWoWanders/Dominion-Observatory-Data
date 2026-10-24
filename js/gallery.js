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
//   (d) Openly licensed, shareable images (policy extended
//       2026-10-24): CC0, CC BY, CC BY-SA (any version) and
//       the Open Government Licence - Ontario (OGL-ON), plus
//       CC BY-NC (non-commercial) while this site stays
//       non-commercial (no ads, sponsors, paywalls or paid
//       links). These
//       are accepted ONLY with the licence's required
//       attribution in the `attribution` field and a
//       `licenseUrl`. CC BY-SA images must note the
//       share-alike condition. NOT accepted: all-rights-
//       reserved images, CC NC / ND licences, Crown or
//       third-party copyright without a stated licence,
//       and anything whose rights are unknown.
//
// HOW TO ADD MORE IMAGES
// ----------------------
// 0. Put the image file in assets/gallery/ (see the README
//    there) and set imageUrl to "assets/gallery/<id>.jpg".
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
//                 "CC-BY-SA-4.0", "CC-BY-SA-3.0", "CC-BY-SA-2.0",
//                 "CC-BY-4.0", "CC-BY-3.0", "CC-BY-2.0",
//                 "CC-BY-NC-4.0", "CC0", "OGL-ON", "PD-US-expired"
// licenseUrl    : link to license text
// attribution   : exact required attribution string ("" if none)
// category      : one of "buildings", "people", "instruments",
//                 "interior", "historical", "documents", "context"
// citations     : array of SourceDatabase keys
// ============================================

const GalleryDatabase = {
    // Download behaviour is chosen from each image's `license`:
    //   PD*, CC0           -> free download
    //   CC-BY*, CC-BY-SA*, OGL-ON -> download after showing the required credit
    //   CC-BY-NC*          -> ncDownloads: 'notice'   = download after a non-commercial notice
    //                         ncDownloads: 'viewOnly' = no download button
    //   anything else      -> view only
    // NOTE: "view only" hides the button and discourages saving; it cannot stop
    // a determined visitor from saving or screenshotting an image.
    // Which gallery images illustrate which site entries (category -> entry id -> gallery ids).
    // Only photographs that clearly show the entry's subject are listed; entries
    // with no suitable photograph are left without one.
    entryImages: {
        personnel: {
            "william-frederick-king": ["GAL-005"],
            "robert-meldrum-stewart": ["GAL-016"],
            "ralph-delury": ["GAL-017"]
        },
        equipment: {
            "coelostat": ["GAL-017"]
        },
        buildings: {
            "main-observatory": ["GAL-014", "GAL-007", "GAL-008", "GAL-013"],
            "photo-equatorial": ["GAL-041", "GAL-030", "GAL-028"],
            "south-azimuth": ["GAL-042", "GAL-031"]
        },
        programs: {
            "geomagnetism": ["GAL-023"]
        }
    },

    settings: { ncDownloads: 'notice' },

    images: [
        // ------------------------------------------------------------
        // EXTERIOR PHOTOGRAPHS (pre-1929 — PD worldwide)
        // ------------------------------------------------------------
        // NOTE: A previously included entry "Dominion Observatory, Ottawa
        // (early 20th c.)" attributed to "Wilder" via Wikimedia Commons
        // metadata was removed on 2026-05-05 because the image content
        // is plainly a modern colour photograph (modern signage, paving,
        // and clear daylight colour rendering) and could not have been
        // taken before 1929. The Commons file metadata appears to be
        // unreliable for that file.
        {
            id: "GAL-002",
            title: "Dominion Observatory under construction",
            caption: "A construction-era photograph of the Dominion Observatory main building, showing the Nepean sandstone walls partway through construction. Building work began in 1902 and was completed in 1905. The photograph documents the early stages of one of four major federal public buildings raised in Ottawa during the Laurier expansionist years.",
            date: "c. 1902–1905",
            creator: "Unknown (likely Department of Public Works)",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:Dominion_Observatory_under_construction.jpg",
            imageUrl: "assets/gallery/GAL-002.jpg",
            license: "PD-old",
            licenseUrl: "https://en.wikipedia.org/wiki/Public_domain",
            attribution: "Public Works Dept. / Library and Archives Canada / PA-053076, via Wikimedia Commons (public domain — pre-1929 photograph).",
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
            imageUrl: "assets/gallery/GAL-003.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Canada. Dept. of Mines & Technical Surveys / Library and Archives Canada / PA-034064. Copyright: Expired (per LAC).",
            category: "historical",
            citations: ["LAC PA-034064"]
        },
        {
            id: "GAL-004",
            title: "Dominion Observatory, 1920s (LAC PA-034406)",
            caption: "A 1920s view of the Dominion Observatory at the Central Experimental Farm, held at Library and Archives Canada as PA-034406 (Department of the Interior). The LAC record dates it [1920's] and states copyright is expired with no restrictions on use.",
            date: "1920s",
            creator: "Canada. Department of the Interior",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3318674&ecopy=a034406",
            imageUrl: "assets/gallery/GAL-004.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Canada. Dept. of Interior / Library and Archives Canada / PA-034406. Copyright: Expired (per LAC).",
            category: "historical",
            citations: ["LAC PA-034406"]
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
            imageUrl: "assets/gallery/GAL-006.png",
            license: "PD-old",
            licenseUrl: "https://en.wikipedia.org/wiki/Public_domain",
            attribution: "Abbott's Guide to Ottawa, via Wikimedia Commons (public domain — pre-1929 publication).",
            category: "documents",
            citations: []
        },
        {
            id: "GAL-007",
            title: "Dominion Observatory, Ottawa (c. 1907)",
            caption: "Photograph of the Dominion Observatory, Ottawa, dated c. 1907 in the Library and Archives Canada record, with Public Works Canada credited as photographer. The record notes the item is oversize.",
            date: "c. 1907",
            creator: "Canada. Public Works Canada",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3334105&ecopy=a800455",
            imageUrl: "assets/gallery/GAL-007.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Canada. Public Works Canada / Library and Archives Canada / PA-800455. Copyright: Expired (per LAC).",
            category: "historical",
            citations: []
        },
        {
            id: "GAL-008",
            title: "Dominion Observatory, Ottawa (1921)",
            caption: "Photograph of the Dominion Observatory, Ottawa, dated 1921 in the Library and Archives Canada record (item no. O-14-4-17), from the Department of the Interior holdings.",
            date: "1921",
            creator: "Not stated in the LAC record",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3318683&ecopy=a043635-v8",
            imageUrl: "assets/gallery/GAL-008.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Canada. Dept. of Interior / Library and Archives Canada / PA-043635. Copyright: Expired (per LAC).",
            category: "historical",
            citations: []
        },
        {
            id: "GAL-009",
            title: "Experimental Farm showing the Dominion Observatory (c. 1916)",
            caption: "The Dominion Observatory seen across the Central Experimental Farm grounds, photographed by William James Topley (1845-1930). The Library and Archives Canada record dates it [ca. 1916] and describes it as a glass plate negative.",
            date: "c. 1916",
            creator: "Topley, William James, 1845-1930",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3318646&ecopy=a011283",
            imageUrl: "assets/gallery/GAL-009.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "William James Topley/Library and Archives Canada/PA-011283. Copyright: Expired (per LAC).",
            category: "historical",
            citations: []
        },
        {
            id: "GAL-010",
            title: "Experimental Farm: Dominion Observatory (Topley Studio, PA-012924)",
            caption: "A view of the Dominion Observatory at the Central Experimental Farm from the Topley Studio fonds, photographed by William James Topley (1845-1930). The record is a glass plate negative and gives no date (n.d.).",
            date: "Undated (Topley, d. 1930)",
            creator: "Topley, William James, 1845-1930",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3318655&ecopy=a012924-v6",
            imageUrl: "assets/gallery/GAL-010.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Topley Studio Fonds / Library and Archives Canada / PA-012924. Copyright: Expired (per LAC).",
            category: "historical",
            citations: [],
            notes: "The LAC record gives no date (n.d.). Topley died in 1930."
        },
        {
            id: "GAL-011",
            title: "Experimental Farm: Dominion Observatory (Topley Studio, PA-012892)",
            caption: "A second view of the Dominion Observatory at the Central Experimental Farm from the Topley Studio fonds, photographed by William James Topley (1845-1930). The record is a glass plate negative and gives no date (n.d.).",
            date: "Undated (Topley, d. 1930)",
            creator: "Topley, William James, 1845-1930",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3318656&ecopy=a012892-v6",
            imageUrl: "assets/gallery/GAL-011.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Topley Studio Fonds / Library and Archives Canada / PA-012892. Copyright: Expired (per LAC).",
            category: "historical",
            citations: [],
            notes: "The LAC record gives no date (n.d.). Topley died in 1930."
        },
        {
            id: "GAL-012",
            title: "Dominion Observatory, Ottawa (LAC PA-034063)",
            caption: "A photograph of the Dominion Observatory at the Central Experimental Farm held at Library and Archives Canada as PA-034063, from the same accession (1952-016 NPC) as PA-034064. The record gives no date.",
            date: "Undated in LAC record",
            creator: "Not stated in the LAC record",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3318668&ecopy=a034063",
            imageUrl: "assets/gallery/GAL-012.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Canada. Dept. of Mines & Technical Surveys / Library and Archives Canada / PA-034063. Copyright: Expired (per LAC).",
            category: "historical",
            citations: [],
            notes: "The LAC record gives no date and no photographer."
        },
        {
            id: "GAL-013",
            title: "Dominion Observatory in winter (c. 1925)",
            caption: "Winter view of the Dominion Observatory, dated circa 1925, from the Archives of Ontario Audio-Visual Education Branch photographs (RG 2-71, item I0004144), shared through the Archives of Ontario GLAM Wiki project.",
            date: "c. 1925",
            creator: "Archives of Ontario (photographer not named)",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory%20(I0004144).jpg",
            imageUrl: "assets/gallery/GAL-013.jpg",
            license: "OGL-ON",
            licenseUrl: "https://www.ontario.ca/page/open-government-licence-ontario",
            attribution: "Archives of Ontario (RG 2-71, item I0004144), via Wikimedia Commons. Contains information licensed under the Open Government Licence – Ontario. Converted/resized for web display.",
            category: "historical",
            citations: [],
            notes: "Date is \"circa 1925\" as given on Wikimedia Commons from the Archives of Ontario."
        },
        {
            id: "GAL-014",
            title: "Dominion Observatory under construction (1904)",
            caption: "Construction-era photograph of the Dominion Observatory entrance block with the cut-stone arch and the word OBSERVATORY over the doorway. The Wikimedia Commons title dates the scene to 1904; the reproduction is credited to Ross Dunn.",
            date: "1904 (per title)",
            creator: "Original photographer not identified (reproduction by Ross Dunn)",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory%20Construction%201904%20(16037751886).jpg",
            imageUrl: "assets/gallery/GAL-014.jpg",
            license: "CC-BY-SA-2.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
            attribution: "Reproduction credited to Ross Dunn, CC BY-SA 2.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "historical",
            citations: [],
            notes: "Commons title gives 1904; the original photographer is not identified in the record."
        },
        {
            id: "GAL-015",
            title: "Staff of the Dominion Observatory and the Geodetic Survey (1939)",
            caption: "Staff of the Dominion Observatory and the Geodetic Survey on the steps at the south side door of the Geodetic Survey Building, Ottawa, 28 November 1939. The Library and Archives Canada record notes that an identification key came with the accession.",
            date: "28 Nov. 1939",
            creator: "Not stated in the LAC record",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3224674&ecopy=a149301-v8",
            imageUrl: "assets/gallery/GAL-015.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Library and Archives Canada/PA-149301. Copyright: Expired (per LAC).",
            category: "people",
            citations: []
        },
        {
            id: "GAL-016",
            title: "Dr. R. Meldrum Stewart in his office (1943)",
            caption: "Dr. R. Meldrum Stewart, Dominion Astronomer and Director of the Dominion Observatory, working in his office in Ottawa, 1943. Photograph by J.B. Scott for the National Film Board of Canada.",
            date: "1943",
            creator: "J.B. Scott",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3525316&ecopy=a166848",
            imageUrl: "assets/gallery/GAL-016.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "J.B. Scott / National Film Board of Canada. Photothèque / Library and Archives Canada / PA-166848. Copyright: Expired (per LAC).",
            category: "people",
            citations: []
        },
        {
            id: "GAL-017",
            title: "Dr. R.E. Delury adjusting a coelostat mirror (1943)",
            caption: "Dr. R.E. Delury adjusting a coelostat mirror at the Dominion Observatory, Ottawa, 1943. Photograph by J.B. Scott for the National Film Board of Canada.",
            date: "1943",
            creator: "J.B. Scott",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3525315&ecopy=a166847",
            imageUrl: "assets/gallery/GAL-017.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "J.B. Scott / National Film Board of Canada. Photothèque / Library and Archives Canada / PA-166847. Copyright: Expired (per LAC).",
            category: "people",
            citations: []
        },
        {
            id: "GAL-018",
            title: "Dr. J. L. Locke, Stellar Physics Division (1960)",
            caption: "Dr. J. L. Locke of Ottawa, Chief of the Stellar Physics Division of the Dominion Observatory, from the National Film Board photo story \"Study Secrets of Outer Space: Giant Telescope Trained on Space\" (1960). The NFB caption refers to the team working with a large radio telescope.",
            date: "1960",
            creator: "Lund, Chris, 1923-1983 Lunney, Gar, 1920-2016",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=4949858&ecopy=e011177297-v8",
            imageUrl: "assets/gallery/GAL-018.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Library and Archives Canada/National Film Board fonds/e011177297. Copyright: Expired (per LAC).",
            category: "people",
            citations: [],
            notes: "The NFB caption concerns a radio telescope; the photograph is of Dr. Locke, not of the observatory building."
        },
        {
            id: "GAL-019",
            title: "M. M. Thomson loading a photographic plate (1959)",
            caption: "M. M. Thomson inserts a photographic plate into a camera at the telescope, from the National Film Board photo story \"Space Clock for Space Age\" (1959), photographed in Ottawa by Gar Lunney. The Library and Archives Canada record identifies the telescope as the Dominion Observatory's 15-inch refractor, in use until 1970.",
            date: "1959",
            creator: "Lunney, Gar, 1920-2016",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=4949506&ecopy=e011176943-v8",
            imageUrl: "assets/gallery/GAL-019.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Library and Archives Canada/National Film Board fonds/e011176943. Copyright: Expired (per LAC).",
            category: "instruments",
            citations: []
        },
        {
            id: "GAL-020",
            title: "Experimenting with new mirrors in a telescope (1959)",
            caption: "Scientists at the Dominion Observatory experimenting with a new-style mirror transit telescope, described in the National Film Board caption as the first of its design in North America. From the photo story \"Space Clock for Space Age\" (1959), photographed in Ottawa.",
            date: "1959",
            creator: "Unknown",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=4949508&ecopy=e011176945-v8",
            imageUrl: "assets/gallery/GAL-020.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Library and Archives Canada/National Film Board fonds/e011176945. Copyright: Expired (per LAC).",
            category: "instruments",
            citations: []
        },
        {
            id: "GAL-021",
            title: "Synchronous clock, Dominion Observatory",
            caption: "A synchronous clock at the Dominion Observatory, Ottawa, from the Library and Archives Canada collection. The record gives no date or photographer; the physical item is a cellulose nitrate negative copied to an interpositive.",
            date: "Undated in LAC record",
            creator: "Not stated in the LAC record",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3348605&ecopy=e010861703-v8",
            imageUrl: "assets/gallery/GAL-021.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Library and Archives Canada, item ID 3348605 (ref. R231-3020-X-E). Copyright: Expired (per LAC).",
            category: "instruments",
            citations: [],
            notes: "The LAC record gives no date or photographer, and its credit line is incomplete (item ID 3348605)."
        },
        {
            id: "GAL-022",
            title: "Operation Musk-Ox: igloo construction (1946)",
            caption: "Igloo construction by Morris Innis of the Dominion Observatory and Squadron Leader Al Pireth, 29 January 1946, during Operation Musk-Ox. The Library and Archives Canada record places the photograph at Churchill, Manitoba.",
            date: "29 Jan. 1946",
            creator: "Morton, Robert W",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=3229778&ecopy=a167265",
            imageUrl: "assets/gallery/GAL-022.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "Robert W. Morton/Canada. Dept. of National Defence/Library and Archives Canada/PA-167265. Copyright: Expired (per LAC).",
            category: "context",
            citations: [],
            notes: "Included for the Dominion Observatory staff connection; the photograph was not taken at the observatory."
        },
        {
            id: "GAL-023",
            title: "R.G. Madill at a magnetic station, Killiniq (1934)",
            caption: "R.G. Madill of the Dominion Observatory and Frank Gilbert of the Post Office Department at Madill's magnetic station, July 1934. The Library and Archives Canada record places the photograph at Killiniq (Port Burwell), Nunavut, and credits David L. McKeand.",
            date: "July 1934",
            creator: "McKeand, David L",
            sourceArchive: "Library and Archives Canada",
            sourceUrl: "https://recherche-collection-search.bac-lac.gc.ca/eng/Home/Record?app=fonandcol&IdNumber=5276132&ecopy=a102133-v8",
            imageUrl: "assets/gallery/GAL-023.jpg",
            license: "PD-Canada-Expired",
            licenseUrl: "https://library-archives.canada.ca/eng/Pages/terms-conditions.aspx",
            attribution: "David L. McKeand / Department of Indian Affairs and Northern Development fonds / Library and Archives Canada / a102133-v8. Copyright: Expired (per LAC).",
            category: "context",
            citations: [],
            notes: "Included for the Dominion Observatory staff connection; the photograph was not taken at the observatory."
        },
        {
            id: "GAL-024",
            title: "Dominion Observatory, Ottawa (1960)",
            caption: "Colour view of the main building and a smaller dome, dated 1960, from the Archives of Ontario tourism promotion photographs (RG 65-35, item I0005753), shared through the Archives of Ontario GLAM Wiki project.",
            date: "1960",
            creator: "Archives of Ontario (photographer not named)",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory%2C%20Ottawa%20(I0005753).tif",
            imageUrl: "assets/gallery/GAL-024.jpg",
            license: "OGL-ON",
            licenseUrl: "https://www.ontario.ca/page/open-government-licence-ontario",
            attribution: "Archives of Ontario (RG 65-35, item I0005753), via Wikimedia Commons. Contains information licensed under the Open Government Licence – Ontario. Converted/resized for web display.",
            category: "historical",
            citations: [],
            notes: "Date is as given on Wikimedia Commons from the Archives of Ontario. Converted from TIFF to JPEG for the web."
        },
        {
            id: "GAL-025",
            title: "Dominion Observatory (April 2005)",
            caption: "The main building with the Photo Equatorial dome at left, photographed in April 2005 by SimonP and released to the public domain on English Wikipedia. The building was designed by David Ewart (1841-1921).",
            date: "April 2005",
            creator: "SimonP",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory%202.jpg",
            imageUrl: "assets/gallery/GAL-025.jpg",
            license: "PD-old",
            licenseUrl: "https://en.wikipedia.org/wiki/Public_domain",
            attribution: "SimonP (April 2005), public domain via Wikimedia Commons.",
            category: "buildings",
            citations: [],
            notes: "Public-domain status is the photographer's release as recorded on Wikimedia Commons."
        },
        {
            id: "GAL-026",
            title: "Dominion Observatory and Photo Equatorial dome (2005)",
            caption: "The main building and the Photo Equatorial building, photographed 10 May 2005 by John Talbot. The photographer notes the clock on the dome and that its Roman numeral for four is written IIII.",
            date: "10 May 2005",
            creator: "John Talbot from Ottawa, Canada",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory%2C%20Ottawa%20(2005).jpg",
            imageUrl: "assets/gallery/GAL-026.jpg",
            license: "CC-BY-2.0",
            licenseUrl: "https://creativecommons.org/licenses/by/2.0",
            attribution: "John Talbot from Ottawa, Canada, CC BY 2.0, via Wikimedia Commons. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-027",
            title: "Main observatory building (2010)",
            caption: "The main observatory building (Building 1) at the Central Experimental Farm, Ottawa, photographed 4 June 2010 by D. Gordon E. Robertson.",
            date: "4 June 2010",
            creator: "D. Gordon E. Robertson",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AMain%20Observatory%20at%20Central%20Experimental%20Farm.jpg",
            imageUrl: "assets/gallery/GAL-027.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "D. Gordon E. Robertson, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-028",
            title: "Photo Equatorial Building (2010)",
            caption: "The Photo Equatorial Building (Building No. 9) at the Central Experimental Farm, Ottawa, photographed 4 June 2010 by D. Gordon E. Robertson.",
            date: "4 June 2010",
            creator: "D. Gordon E. Robertson",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatory%20at%20Central%20Experimental%20Farm.jpg",
            imageUrl: "assets/gallery/GAL-028.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "D. Gordon E. Robertson, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-029",
            title: "Dominion Observatory (2013)",
            caption: "Front view of the main building of the Dominion Observatory, Ottawa, photographed 8 September 2013 by Ndh3.",
            date: "8 Sept. 2013",
            creator: "Ndh3",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory.JPG",
            imageUrl: "assets/gallery/GAL-029.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Ndh3, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-030",
            title: "Photo Equatorial Building (2013)",
            caption: "The Photo Equatorial Building at the Dominion Observatory, Ottawa, photographed 8 September 2013 by Ndh3.",
            date: "8 Sept. 2013",
            creator: "Ndh3",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3APhoto%20Equatorial%20Building.JPG",
            imageUrl: "assets/gallery/GAL-030.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Ndh3, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-031",
            title: "South Azimuth Building (2013)",
            caption: "The South Azimuth Building at the Dominion Observatory, Ottawa, photographed 11 September 2013 by Ndh3.",
            date: "11 Sept. 2013",
            creator: "Ndh3",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ASouth%20Azimuth%20Building.JPG",
            imageUrl: "assets/gallery/GAL-031.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Ndh3, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-032",
            title: "Photo Equatorial Building (2014)",
            caption: "The Photo Equatorial Building at the Central Experimental Farm, Ottawa, photographed 23 October 2014 by Suwannee.payne.",
            date: "23 Oct. 2014",
            creator: "Suwannee.payne",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3APhoto%20Equatorial%20Building%2C%20Central%20Experimental%20Farm.JPG",
            imageUrl: "assets/gallery/GAL-032.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Suwannee.payne, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-033",
            title: "Main building, front view (2014)",
            caption: "Front view of the main Dominion Observatory building with its dome, clock and entrance, photographed 23 October 2014 by Suwannee.payne. The Wikimedia Commons title reads \"Observatory House\"; the photograph shows the main observatory building.",
            date: "23 Oct. 2014",
            creator: "Suwannee.payne",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatory%20House%2CCentral%20Experimental%20Farm%2C%20front%20veiw.JPG",
            imageUrl: "assets/gallery/GAL-033.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Suwannee.payne, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: [],
            notes: "Commons title says \"Observatory House\", but the image shows the main observatory building."
        },
        {
            id: "GAL-034",
            title: "Observatory from across the lawn (2014)",
            caption: "The Dominion Observatory seen across the grounds of the Central Experimental Farm in autumn, photographed 23 October 2014 by Suwannee.payne.",
            date: "23 Oct. 2014",
            creator: "Suwannee.payne",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatory%20House%2CCentral%20Experimental%20Farm.JPG",
            imageUrl: "assets/gallery/GAL-034.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Suwannee.payne, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-035",
            title: "Clock and copper dome (2014)",
            caption: "The clock and copper-clad dome of the main observatory building with the royal coat of arms below, photographed 23 October 2014 by Suwannee.payne.",
            date: "23 Oct. 2014",
            creator: "Suwannee.payne",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatory%20House%2C%20Central%20Experimental%20Farm%2C%20Clock.JPG",
            imageUrl: "assets/gallery/GAL-035.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Suwannee.payne, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-036",
            title: "Observatory grounds in winter (2014)",
            caption: "The Dominion Observatory at the Central Experimental Farm in winter, photographed 1 March 2014 by Nadiatalent. Wikimedia Commons files it under the Photo Equatorial Building category.",
            date: "1 Mar. 2014",
            creator: "Nadiatalent",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20observatory%201.jpg",
            imageUrl: "assets/gallery/GAL-036.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Nadiatalent, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-037",
            title: "South Azimuth Building in winter (2014)",
            caption: "The South Azimuth Building at the Central Experimental Farm, Ottawa, in winter, photographed 2 March 2014 by Nadiatalent.",
            date: "2 Mar. 2014",
            creator: "Nadiatalent",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20observatory%202.jpg",
            imageUrl: "assets/gallery/GAL-037.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Nadiatalent, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-038",
            title: "Main building in winter (2014)",
            caption: "The main building of the Dominion Observatory in winter, photographed 2 March 2014 by Nadiatalent.",
            date: "2 Mar. 2014",
            creator: "Nadiatalent",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20observatory%203.jpg",
            imageUrl: "assets/gallery/GAL-038.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Nadiatalent, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-039",
            title: "Central Experimental Farm in winter (2014)",
            caption: "Winter scene at the Central Experimental Farm with the Dominion Observatory dome in the distance, photographed 2 March 2014 by Nadiatalent at Carling Avenue and Maple Drive.",
            date: "2 Mar. 2014",
            creator: "Nadiatalent",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ACentral%20Experimental%20Farm%206.jpg",
            imageUrl: "assets/gallery/GAL-039.jpg",
            license: "CC-BY-SA-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
            attribution: "Nadiatalent, CC BY-SA 3.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "context",
            citations: []
        },
        {
            id: "GAL-040",
            title: "Observatory on the Central Experimental Farm grounds (2020)",
            caption: "The Dominion Observatory on the grounds of the Central Experimental Farm, photographed 26 August 2020 by Ross Dunn. The photographer's description says the observatory operated from 1902 to 1970.",
            date: "26 Aug. 2020",
            creator: "Ross Dunn",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory%20on%20the%20grounds%20of%20the%20Central%20Experimental%20Farm%2C%20Ottawa%20(50276307286).jpg",
            imageUrl: "assets/gallery/GAL-040.jpg",
            license: "CC-BY-SA-2.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
            attribution: "Ross Dunn, CC BY-SA 2.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-041",
            title: "Building 9, Photo Equatorial dome (2020)",
            caption: "Building 9 on the Dominion Observatory grounds, topped by a copper dome, photographed 26 August 2020 by Ross Dunn. The Wikimedia Commons title is \"Building in the style of the Dominion Observatory\".",
            date: "26 Aug. 2020",
            creator: "Ross Dunn",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ABuilding%20in%20the%20style%20of%20the%20Dominion%20Observatory%20(50275626103).jpg",
            imageUrl: "assets/gallery/GAL-041.jpg",
            license: "CC-BY-SA-2.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
            attribution: "Ross Dunn, CC BY-SA 2.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-042",
            title: "Building 8, South Azimuth Building (2020)",
            caption: "Building 8 on the Dominion Observatory grounds, photographed 26 August 2020 by Ross Dunn. The Wikimedia Commons title is \"Building in the style of the Dominion Observatory\".",
            date: "26 Aug. 2020",
            creator: "Ross Dunn",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ABuilding%20in%20the%20style%20of%20the%20Dominion%20Observatory%20(50276460527).jpg",
            imageUrl: "assets/gallery/GAL-042.jpg",
            license: "CC-BY-SA-2.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
            attribution: "Ross Dunn, CC BY-SA 2.0, via Wikimedia Commons. Adaptations must be shared under the same licence.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-043",
            title: "Observatory, front face (2017)",
            caption: "The front face of the Dominion Observatory at the Central Experimental Farm, Ottawa, photographed 19 July 2017 by Cantons-de-l'Est.",
            date: "19 July 2017",
            creator: "Cantons-de-l'Est",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatoire%20Dominion%20-%201.jpg",
            imageUrl: "assets/gallery/GAL-043.jpg",
            license: "CC-BY-SA-4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            attribution: "Cantons-de-l'Est, CC BY-SA 4.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-044",
            title: "Observatory, left face (2017)",
            caption: "The left face of the Dominion Observatory at the Central Experimental Farm, Ottawa, photographed 19 July 2017 by Cantons-de-l'Est.",
            date: "19 July 2017",
            creator: "Cantons-de-l'Est",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatoire%20Dominion%20-%202.jpg",
            imageUrl: "assets/gallery/GAL-044.jpg",
            license: "CC-BY-SA-4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            attribution: "Cantons-de-l'Est, CC BY-SA 4.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-045",
            title: "Observatory, rear face (2017)",
            caption: "The rear face of the Dominion Observatory at the Central Experimental Farm, Ottawa, photographed 19 July 2017 by Cantons-de-l'Est.",
            date: "19 July 2017",
            creator: "Cantons-de-l'Est",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatoire%20Dominion%20-%203.jpg",
            imageUrl: "assets/gallery/GAL-045.jpg",
            license: "CC-BY-SA-4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            attribution: "Cantons-de-l'Est, CC BY-SA 4.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-046",
            title: "Observatory, right face (2017)",
            caption: "The right face of the Dominion Observatory at the Central Experimental Farm, Ottawa, photographed 19 July 2017 by Cantons-de-l'Est.",
            date: "19 July 2017",
            creator: "Cantons-de-l'Est",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AObservatoire%20Dominion%20-%204.jpg",
            imageUrl: "assets/gallery/GAL-046.jpg",
            license: "CC-BY-SA-4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            attribution: "Cantons-de-l'Est, CC BY-SA 4.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-047",
            title: "Dominion Observatory (2022)",
            caption: "The Dominion Observatory in Ottawa, photographed 16 September 2022 by Harleyd613.",
            date: "16 Sept. 2022",
            creator: "Harleyd613",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3ADominion%20Observatory%20Ottawa%202022.jpg",
            imageUrl: "assets/gallery/GAL-047.jpg",
            license: "CC-BY-SA-4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            attribution: "Harleyd613, CC BY-SA 4.0, via Wikimedia Commons. Adaptations must be shared under the same licence. Resized for web display.",
            category: "buildings",
            citations: []
        },
        {
            id: "GAL-048",
            title: "Observatory at night (2018)",
            caption: "Evening view of the Dominion Observatory with its lit entrance and the sundial in the foreground, by Shawn Kent. Imported to Wikimedia Commons from 500px; the photographer asks for credit.",
            date: "2018",
            creator: "Shawn Kent",
            sourceArchive: "Wikimedia Commons",
            sourceUrl: "https://commons.wikimedia.org/wiki/File%3AOttawa%20Observatory%20(262448997).jpeg",
            imageUrl: "assets/gallery/GAL-048.jpg",
            license: "CC-BY-3.0",
            licenseUrl: "https://creativecommons.org/licenses/by/3.0",
            attribution: "Shawn Kent, CC BY 3.0, via Wikimedia Commons.",
            category: "buildings",
            citations: [],
            notes: "Date is the Commons upload date (9 May 2018); the photograph may be older."
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
