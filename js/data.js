// ============================================
// THE DOMINION OBSERVATORY (OTTAWA) ARCHIVE
// Complete Data Repository
// ============================================

const ObservatoryData = {
    metadata: {
        title: "The Dominion Observatory (Ottawa) Archive",
        established: 1905,
        designated: "National Historic Site",
        designationDate: "2025-01-15",
        lastUpdated: "2025-02-15",
        version: "1.0.0"
    },

    // ============================================
    // BUILDINGS & STRUCTURES
    // ============================================
    buildings: [
        {
            id: "main-observatory",
            name: "Dominion Observatory Building",
            shortName: "Main Observatory",
            constructed: { start: 1902, completed: 1905 },
            architect: "David Ewart",
            style: "Romanesque Revival / Edwardian Classicism",
            heritageStatus: "Classified Federal Heritage Building",
            fhbroReport: "92-035",
            
            dimensions: {
                tower: {
                    diameter: { feet: 34, meters: 10.36 },
                    shape: "Octagonal",
                    storeys: 4,
                    storeyHeight: { feet: 12, meters: 3.66 }
                },
                wings: {
                    dimensions: { feet: "49 × 49", meters: "14.9 × 14.9" },
                    angle: "15° from tower centerline",
                    count: 2
                },
                dome: {
                    interiorDiameter: { feet: 30, meters: 9.14 },
                    material: "Copper",
                    type: "Hemispherical, retractable"
                },
                pier: {
                    diameter: { feet: 13, meters: 3.96 },
                    material: "Concrete",
                    extends: "Basement to dome base"
                }
            },
            
            materials: {
                exterior: {
                    primary: "Rock-faced Nepean sandstone (buff/cream variegated)",
                    trim: "Dressed red Sackville sandstone",
                    base: "Rustic limestone"
                },
                roof: "Reinforced concrete with steel frame",
                dome: "Copper with patina",
                interior: "Pressed yellow brick, ceramic tile floors"
            },
            
            features: [
                "Four-storey octagonal tower with copper dome",
                "Crenellated cornice and parapet walls",
                "Large clock faces at drum level (4 sides)",
                "Royal Coat of Arms above entrance",
                "Romanesque entrance columns",
                "Wrought iron balcony railings",
                "Retractable dome section (1/3 circumference)"
            ],
            
            construction: {
                cost: { building: "$93,800", total: "$310,000" },
                contractor: { excavation: "Théophile Viau", masonry: "McGillvray & Labelle" },
                firstLight: "1905-04-17",
                officialOpening: "1905-04-29"
            },
            
            currentUse: "Geological Survey of Canada, Natural Resources Canada",
            citations: ["FHBRO 1992", "CLARK 1993", "HUCKER 1992"]
        },
        
        {
            id: "observatory-house",
            name: "Observatory House",
            constructed: 1909,
            architect: "David Ewart",
            style: "Edwardian residential",
            heritageStatus: "Recognized Federal Heritage Building",
            
            purpose: "Residence for Chief Astronomer/Dominion Astronomer",
            originalOccupants: ["William Frederick King", "Otto Julius Klotz"],
            currentUse: "Used by Indigenous groups advising Natural Resources Canada",
            
            citations: ["FHBRO 1992", "HUCKER 1992"]
        },
        
        {
            id: "south-azimuth",
            name: "South Azimuth Building",
            constructed: 1912,
            architect: "David Ewart",
            style: "Romanesque Revival / Edwardian Classicist",
            heritageStatus: "Classified Federal Heritage Building",
            fhbroReport: "92-041",
            
            purpose: "Azimuth mark reference for meridian circle telescope",
            features: ["Slate louvres", "Aligned with prime meridian"],
            currentStatus: "No current function",
            
            citations: ["FHBRO 1992a"]
        },
        
        {
            id: "north-azimuth",
            name: "North Azimuth Building",
            constructed: 1912,
            status: "Demolished",
            demolished: "Early 1960s",
            reason: "Widening of Carling Avenue",
            
            purpose: "Northern azimuth mark for meridian circle",
            citations: ["FHBRO 1992"]
        },
        
        {
            id: "photo-equatorial",
            name: "Photo Equatorial Building",
            constructed: 1914,
            architect: "David Ewart",
            style: "English Baroque tempietto, Romanesque Revival",
            heritageStatus: "Classified Federal Heritage Building",
            fhbroReport: "92-042",
            
            dimensions: {
                shape: "Octagonal",
                domeDiameter: { feet: 14, meters: 4.27 }
            },
            
            features: [
                "Retractable hemispherical copper dome",
                "Rusticated stone base",
                "Crenellated cornice",
                "Round glazed window openings",
                "Interior spiral staircase",
                "Small darkroom for photographic plates"
            ],
            
            purpose: "Housed double astrograph stellar camera",
            equipment: ["Double Astrograph (1915)"],
            currentStatus: "No current function",
            
            citations: ["FHBRO 1992b", "HUCKER 1992b"]
        },
        
        {
            id: "seismology-building",
            name: "Seismology Building",
            alternateNames: ["No. 7 Geodetic Survey Building"],
            constructed: { start: 1913, completed: 1914 },
            heritageStatus: "Recognized Federal Heritage Building",
            
            purpose: "Housed seismology operations moved from main observatory basement",
            features: ["Underground vaults", "Temperature stability"],
            citations: ["HODGSON 1958", "CLARK 1993"]
        },
        
        {
            id: "transit-house",
            name: "Transit House",
            constructed: 1905,
            additionTo: "West Wing",
            
            features: [
                "Partially opened roof",
                "Slate louvres (instead of glass)",
                "Temperature equalization design"
            ],
            
            purpose: "Housed meridian circle telescope and transit instruments",
            currentUse: "Converted to library",
            
            citations: ["FHBRO 1992"]
        },
        
        {
            id: "machine-shop",
            name: "Machine and Carpentry Shop",
            constructed: 1917,
            heritageStatus: "Recognized Federal Heritage Building",
            
            purpose: "Workshop and equipment maintenance",
            citations: ["FHBRO 1992"]
        },
        
        {
            id: "geophysical-lab",
            name: "Geophysical Laboratory",
            alternateNames: ["Building 3", "Gravity and Standards Testing Building"],
            constructed: 1954,
            heritageStatus: "Recognized Federal Heritage Building",
            
            purpose: "Gravity measurements and geophysical research",
            citations: ["FHBRO 1992"]
        },
        
        {
            id: "pzt-building",
            name: "Photographic Zenith Tube Building",
            constructed: 1951,
            
            purpose: "Housed Photographic Zenith Tube (PZT)",
            equipment: ["PZT (10-inch aperture, 167-inch focal length)"],
            citations: ["BEALS 1956"]
        },
        
        {
            id: "coelostat-shed",
            name: "Coelostat Shed",
            constructed: 1905,
            status: "Demolished",
            
            features: ["Roll-off roof section"],
            purpose: "Housed coelostat solar telescope",
            duration: "70 years of operation",
            
            citations: ["CLARK 1993", "JARRELL 1988"]
        },
        
        {
            id: "mirror-transit-building",
            name: "Mirror Transit Building",
            constructed: "1950s",
            
            features: ["Roll-off roof"],
            purpose: "Housed mirror transit instrument",
            citations: ["BEALS 1956"]
        },
        
        {
            id: "geophysical-data-centre",
            name: "Geophysical Data Centre",
            constructed: 1908,
            citations: ["CLARK 1993"]
        },
        
        {
            id: "electrical-station",
            name: "Electrical Station",
            constructed: "Pre-1928",
            citations: ["FHBRO 1992"]
        },
        
        {
            id: "sundial",
            name: "Floral Sundial",
            type: "Landscape feature",
            established: 1905,
            
            description: "Centerpiece of approach to Observatory since its founding",
            citations: ["CLARK 1993"]
        }
    ],

    // ============================================
    // SCIENTIFIC EQUIPMENT
    // ============================================
    equipment: [
        {
            id: "15-inch-refractor",
            name: "15-inch Refracting Telescope",
            type: "Refracting telescope",
            
            specifications: {
                aperture: { inches: 15, cm: 38 },
                focalLength: { meters: 5.7, fRatio: "f/15" },
                mounting: "Warner & Swasey (Cleveland)",
                optics: "John Brashear (Pittsburgh)"
            },
            
            acquisition: {
                ordered: "1901-06",
                cost: "$14,625",
                installation: "1903-01",
                firstLight: "1905-04-17"
            },
            
            distinction: "Largest refractor ever erected in Canada",
            
            modifications: [
                {
                    year: 1958,
                    change: "Lens replaced with Perkin-Elmer triple apochromat",
                    note: "Largest such lens ever made"
                },
                {
                    year: "1950s",
                    change: "Mechanical drive replaced with synchronous electrical motor"
                }
            ],
            
            driveSystem: {
                original: "Mechanical clock-work with falling weights and fly-weight governor (James Watt type)",
                replacement: "Synchronous electrical motor (1950s)"
            },
            
            accessories: ["Filar micrometer by Warner & Swasey"],
            
            currentLocation: "Canada Science and Technology Museum (1974-2016), currently in storage",
            
            citations: ["JARRELL 1988", "INGENIUM 2024"]
        },
        
        {
            id: "coelostat",
            name: "Coelostat",
            type: "Solar telescope",
            
            specifications: {
                mirror: {
                    diameter: { inches: 20, cm: 50.8 },
                    thickness: { inches: 3, cm: 7.6 },
                    coating: "Silvered front face",
                    finish: "Absolutely flat"
                },
                weight: "2,500 pounds (in 15 boxes for transport)"
            },
            
            purpose: "Track and photograph the Sun and its spectrum",
            
            history: [
                { event: "First use", date: "1905", location: "Labrador solar eclipse expedition", result: "Thwarted by clouds" }
            ],
            
            housing: "Coelostat Shed with roll-off roof (70 years)",
            
            citations: ["CLARK 1993", "JARRELL 1988"]
        },
        
        {
            id: "double-astrograph",
            name: "Double Astrograph",
            type: "Astronomical camera",
            acquired: 1915,
            
            configuration: "Two main cameras plus patrol camera",
            location: "Photo Equatorial Building",
            
            features: [
                "Photographing the sky",
                "Measuring brightness of stars",
                "Wedge-shaped objective lens prism for spectra"
            ],
            
            citations: ["CLARK 1993"]
        },
        
        {
            id: "meridian-circle",
            name: "Meridian Circle Telescope",
            manufacturer: "Troughton and Simms (London)",
            ordered: "6-inch model",
            
            timeline: {
                delivered: 1907,
                operational: 1910,
                note: "Delayed due to defects"
            },
            
            location: "Transit House (West Wing)",
            
            purpose: "Determine time, longitude, and star positions",
            usage: "Primary instrument for measuring meridian transits until early 1930s",
            
            citations: ["STEWART 1928", "JARRELL 1988"]
        },
        
        {
            id: "photographic-zenith-tube",
            name: "Photographic Zenith Tube (PZT)",
            type: "Precision astrometric instrument",
            installed: 1951,
            
            specifications: {
                aperture: { inches: 10, cm: 25.4 },
                focalLength: { inches: 167, cm: 424 }
            },
            
            location: "PZT Building (Building No. 8)",
            purpose: "Precise latitude determination",
            
            citations: ["BEALS 1956"]
        },
        
        {
            id: "riefler-clock",
            name: "Riefler Precision Clock",
            manufacturer: "S. Riefler (Munich)",
            acquired: "1902-09",
            
            specifications: {
                type: "Electrically activated self-winding",
                precision: "0.015 second per day",
                function: "Maintained sidereal time"
            },
            
            citations: ["JARRELL 1988"]
        },
        
        {
            id: "shortt-clock",
            name: "Shortt Clock",
            acquired: 1929,
            
            distinction: "Highly accurate standard sidereal timekeeper",
            associated: "R.M. Stewart acquisition",
            
            citations: ["STEWART 1928"]
        },
        
        {
            id: "seismographs-bosch-omori",
            name: "Bosch-Omori Seismographs",
            type: "Photographic seismographs",
            installed: 1906,
            configuration: "Pair: East-West and North-South",
            
            notableRecording: {
                event: "San Francisco earthquake",
                date: "1906-04-18"
            },
            
            citations: ["HODGSON 1958"]
        },
        
        {
            id: "seismograph-wiechert",
            name: "Wiechert Vertical Seismograph",
            installed: "1912-03",
            specifications: {
                mass: "80 kg"
            },
            
            citations: ["HODGSON 1958"]
        },
        
        {
            id: "seismographs-milne-shaw",
            name: "Milne-Shaw Seismographs",
            installed: 1922,
            quantity: 2,
            
            additionalInstallation: {
                location: "Ste-Anne-de-la-Pocatière, Quebec",
                period: "1925-04 to 1927-06",
                purpose: "Study of 1925 Charlevoix earthquake"
            },
            
            citations: ["HODGSON 1958"]
        },
        
        {
            id: "mendenhall-pendulum",
            name: "Mendenhall Double Pendulum Apparatus",
            acquired: "From Washington",
            
            firstMeasurement: {
                date: 1902,
                location: "Basement of old Supreme Court building, Ottawa",
                by: "Otto Klotz"
            },
            
            distinction: "First Canadian gravity observation",
            
            citations: ["KLOTZ 1902"]
        },
        
        {
            id: "brass-wedge-photometer",
            name: "Brashear Wedge Photometer",
            type: "Photometric instrument",
            principle: "Neutral density optical wedge",
            
            citations: ["CLARK 1993"]
        }
    ],

    // ============================================
    // PERSONNEL
    // ============================================
    personnel: [
        {
            id: "william-frederick-king",
            name: "William Frederick King",
            birth: { year: 1854, place: "England" },
            death: { year: 1916, place: "Ottawa" },
            
            education: {
                institution: "University of Toronto",
                degree: "B.A. Mathematics",
                year: 1874,
                distinction: "Gold medal"
            },
            
            career: [
                { period: "1872-1874", role: "Sub-assistant astronomer, HBM Boundary Commission" },
                { period: "1876", role: "Granted Dominion Land Surveyor status (first)" },
                { period: "1890", role: "Chief Astronomer; established Cliff Street Observatory" },
                { period: "1892", role: "H.M. Boundary Commissioner" },
                { period: "1905-1916", role: "First Dominion Astronomer and Director" },
                { period: "1909", role: "Superintendent, Geodetic Survey of Canada" }
            ],
            
            honors: [
                { title: "President, Royal Society of Canada", years: "1911-1912" },
                { title: "LL.D, University of Toronto", year: 1904, reason: "Alaska boundary work" }
            ],
            
            majorWorks: [
                "Led Alaska Boundary Commission surveys (1904-1917)",
                "Established Canada's prime meridian at Dominion Observatory"
            ],
            
            character: "Known for integrity, intellect, analytical mind; 'reticence, modesty and lack of self-assertion'",
            
            citations: ["CSTM 1994", "HUCKER 1992", "CLARK 1993"]
        },
        
        {
            id: "otto-julius-klotz",
            name: "Otto Julius Klotz",
            birth: { year: 1852, date: "1852-03-31", place: "Preston, Canada West" },
            death: { year: 1923 },
            
            education: [
                { institution: "University of Toronto", year: 1869 },
                { institution: "University of Michigan", degree: "Civil Engineering", year: 1872 }
            ],
            
            career: [
                { period: "1877", role: "Dominion Land Surveyor" },
                { period: "1879", role: "Dominion Topographical Surveyor, Department of Interior" },
                { period: "1885", role: "First man to descend whole length of Nelson River" },
                { period: "1892", role: "Supervised Cliff Street Observatory" },
                { period: "1896", role: "Chief Clerk and Astronomer" },
                { period: "1898", role: "Confidential mission to London and St. Petersburg (Alaska boundary)" },
                { period: "1908", role: "Assistant Chief Astronomer" },
                { period: "1916", role: "Dominion Astronomer (succeeded King despite WWI anti-German sentiment)" },
                { period: "1917", role: "Chief Astronomer" },
                { period: "1918", role: "Director, Dominion Observatory" }
            ],
            
            firsts: [
                "First president, Association of Dominion Land Surveyors (1882-86)",
                "First Canadian seismologist (established seismic operations 1906)",
                "First Canadian gravity measurement (1902)"
            ],
            
            presidencies: [
                { organization: "Royal Astronomical Society of Canada", year: 1908 },
                { organization: "American Astronomical Society", role: "Vice-president", year: 1920 },
                { organization: "Seismological Society of America", year: 1920 }
            ],
            
            honors: [
                { degree: "LL.D", institution: "University of Toronto", year: 1904 },
                { degree: "D.Sc.", institution: "University of Michigan", year: 1913 },
                { degree: "LL.D", institution: "University of Pittsburgh", year: 1916 }
            ],
            
            citations: ["CSTM 1994", "HUCKER 1992", "CLARK 1993"]
        },
        
        {
            id: "john-stanley-plaskett",
            name: "John Stanley Plaskett",
            birth: { year: 1865 },
            death: { year: 1941 },
            
            career: [
                { year: 1903, role: "Hired as mechanician, assigned care of instruments" },
                { year: 1905, role: "Astronomer; designed 1905 Labrador eclipse expedition equipment" },
                { year: 1918, role: "Moved to Dominion Astrophysical Observatory, Victoria" },
                { role: "Became world-renowned for Milky Way research" }
            ],
            
            distinction: "Founded Dominion Astrophysical Observatory; designed and installed 1905 eclipse equipment masterfully",
            
            family: "Son: H.H. Plaskett, DAO staff 1920-1929",
            
            citations: ["JARRELL 1988", "CLARK 1993"]
        },
        
        {
            id: "robert-meldrum-stewart",
            name: "Robert Meldrum Stewart",
            birth: { year: 1878 },
            death: { year: 1954 },
            
            career: [
                { role: "Computer at Observatory opening" },
                { role: "In charge of Time Service" },
                { year: 1923, role: "Dominion Astronomer (succeeded Klotz)" }
            ],
            
            achievement: "Obtained highly accurate Shortt clock as standard sidereal timekeeper (1929)",
            
            citations: ["STEWART 1928", "CLARK 1993"]
        },
        
        {
            id: "william-edmund-harper",
            name: "William Edmund Harper",
            birth: { year: 1878 },
            death: { year: 1940 },
            
            education: {
                institution: "University of Toronto",
                year: 1906,
                distinction: "First winner of RASC Gold Medal"
            },
            
            career: [
                { year: 1906, role: "Joined Dominion Observatory staff (first staff appointment)" },
                { year: 1919, role: "Moved to Dominion Astrophysical Observatory, Victoria" },
                { role: "Subsequently became Director of DAO" }
            ],
            
            contributions: [
                "Computed orbits for more spectroscopic binaries than any other astronomer worldwide",
                "Calibrated absolute luminosities of thousands of spectral type A stars",
                "Over 100 radio talks, many published in newspapers across Canada",
                "Over 80 papers for RASC Journal"
            ],
            
            rascRoles: [
                { role: "President, Victoria Centre", year: 1922 },
                { role: "National President", years: "1928-29" }
            ],
            
            honor: { degree: "Honorary Doctorate", institution: "University of Toronto", year: 1935 },
            
            citations: ["CLARK 1993", "RASC 1994"]
        },
        
        {
            id: "carlyle-smith-beals",
            name: "Carlyle Smith Beals",
            birth: { year: 1899 },
            death: { year: 1979 },
            
            career: [
                { year: 1927, role: "Assistant Astronomer, Dominion Astrophysical Observatory, Victoria" },
                { year: 1940, role: "Assistant Director, DAO" },
                { year: 1946, role: "Moved to Dominion Observatory, Ottawa" },
                { year: 1947, role: "Dominion Astronomer", end: 1964 }
            ],
            
            researchAreas: [
                "Hot stars (P Cygni and Wolf-Rayet stars)",
                "Interstellar matter (first to quantitatively measure sodium and calcium absorption lines)",
                "Meteorite impact craters (Brent crater, New Quebec/Pingualuit crater)"
            ],
            
            craterResearch: {
                method: "Analysis of thousands of aerial photographs from National Air Photo Library and National Defence",
                discoveries: ["Brent crater (Ontario)", "New Quebec/Pingualuit crater"],
                postRetirement: "Continued using Apollo mission photos; edited 'Science, History and Hudson Bay' (1967)"
            },
            
            administration: "Rebuilt scientific program after Depression and WWII; oversaw establishment of Dominion Radio Astrophysical Observatory (Penticton, BC)",
            
            citations: ["BEALS 1979", "CLARK 1993", "INGENIUM 2024"]
        },
        
        {
            id: "francois-henroteau",
            name: "François Charles Pierre Henroteau",
            birth: { year: 1889, date: "End of February", place: "Liège, Belgium" },
            
            position: "Astronomer, Dominion Observatory",
            
            contributions: [
                { work: "Spectrographic Study of Early Class B Stars", collaborator: "J.P. Henderson" },
                { claim: "Discovery of 'Planet X' (later Planet Y)", year: 1928, collaborator: "Miriam Burland", status: "Later disproven" },
                { development: "'Super eye' electric camera prototype", year: 1933 },
                { work: "Photoelectric cells for stellar imaging", period: "Mid-1920s onwards" }
            ],
            
            citations: ["CLARK 1993", "WIKIPEDIA 2024"]
        },
        
        {
            id: "miriam-seymour-burland",
            name: "Miriam Seymour Burland",
            birth: { year: 1902 },
            death: { year: 1994 },
            
            distinction: "First woman in Canadian government service allowed to wear pants on the job (required ministerial waiver)",
            
            work: "Collaborated with François Henroteau on Planet X discovery claim (1928)",
            
            note: "First national institution to employ women astronomers",
            
            citations: ["CLARK 1993", "WIKIPEDIA 2024"]
        },
        
        {
            id: "mary-grey",
            name: "Mary Grey",
            role: "Last astronomer at Dominion Observatory",
            
            post1970: "Continued educational program at Canada Science and Technology Museum",
            
            citations: ["CLARK 1993"]
        },
        
        {
            id: "ralph-delury",
            name: "Ralph DeLury",
            contribution: "Determined solar rotation as a function of latitude (1930s)",
            citations: ["CLARK 1993"]
        },
        
        {
            id: "peter-millman",
            name: "Peter Millman",
            contribution: "Discovered meteor impact craters (1940s-1960s)",
            collaborator: "C.S. Beals, Ian Halliday",
            citations: ["CLARK 1993"]
        },
        
        {
            id: "ian-halliday",
            name: "Ian Halliday",
            contribution: "Discovered meteor impact craters (1940s-1960s)",
            collaborator: "C.S. Beals, Peter Millman",
            citations: ["CLARK 1993"]
        }
    ],

    // ============================================
    // TIMELINE EVENTS
    // ============================================
    timeline: [
        { year: 1854, event: "Birth of William Frederick King", category: "personnel", citations: ["CSTM 1994"] },
        { year: 1890, event: "Cliff Street Observatory established by W.F. King", category: "establishment", citations: ["HUCKER 1992"] },
        { year: 1901, event: "Site selected on Central Experimental Farm; 15-inch telescope ordered", category: "planning", citations: ["CLARK 1993", "JARRELL 1988"] },
        { year: 1902, event: "Construction begins (July); First Canadian gravity measurement by Otto Klotz", category: "construction", citations: ["OTTAWA JOURNAL 1902", "KLOTZ 1902"] },
        { year: 1903, event: "John S. Plaskett hired as mechanician", category: "personnel", citations: ["JARRELL 1988"] },
        { year: 1905, event: "First light (April 17); Official opening (April 29); Transit house contract awarded", category: "milestone", citations: ["JARRELL 1988", "FHBRO 1992"] },
        { year: 1905, event: "Total solar eclipse expedition to Labrador (August 30, clouded out)", category: "expedition", citations: ["CLARK 1993"] },
        { year: 1906, event: "Bosch-Omori seismographs begin operation; Record San Francisco earthquake", category: "equipment", citations: ["HODGSON 1958"] },
        { year: 1906, event: "Telegraphic longitude determination for Alaska boundary at Yukon River", category: "survey", citations: ["KLOTZ 1906"] },
        { year: 1907, event: "6-inch Troughton and Simms meridian circle delivered", category: "equipment", citations: ["STEWART 1928"] },
        { year: 1908, event: "Geophysical Data Centre built", category: "construction", citations: ["FHBRO 1992"] },
        { year: 1909, event: "Observatory House built; Geodetic Survey of Canada established", category: "construction", citations: ["FHBRO 1992"] },
        { year: 1910, event: "Meridian circle operational; Saint-Boniface seismograph station opened", category: "equipment", citations: ["HODGSON 1958", "STEWART 1928"] },
        { year: 1911, event: "Star catalog program begins (3,162 stars, 28,000 observations through 1923)", category: "program", citations: ["STEWART 1928"] },
        { year: 1912, event: "South Azimuth Building constructed; 80kg Wiechert seismograph added", category: "construction", citations: ["FHBRO 1992a", "HODGSON 1958"] },
        { year: 1913, event: "Seismology Building constructed", category: "construction", citations: ["FHBRO 1992"] },
        { year: 1914, event: "Photo Equatorial Building completed; Double astrograph added", category: "construction", citations: ["FHBRO 1992b", "CLARK 1993"] },
        { year: 1916, event: "Death of W.F. King; Otto Klotz becomes Dominion Astronomer", category: "personnel", citations: ["CSTM 1994"] },
        { year: 1917, event: "Machine and Carpentry Shop built; Geodetic surveying separated from Observatory", category: "construction", citations: ["FHBRO 1992", "CLARK 1993"] },
        { year: 1918, event: "Dominion Astrophysical Observatory opens in Victoria, BC", category: "establishment", citations: ["HUCKER 1992"] },
        { year: 1922, event: "Canada joins International Geodetic and Geophysical Union and International Astronomical Union", category: "milestone", citations: ["KLOTZ 1922"] },
        { year: 1923, event: "Death of Otto Klotz; R.M. Stewart becomes Dominion Astronomer", category: "personnel", citations: ["CSTM 1994"] },
        { year: 1924, event: "Time signal broadcasting begins via CKCH radio (9 p.m. daily)", category: "program", citations: ["STEWART 1928"] },
        { year: 1925, event: "Planet X claim by Henroteau and Burland", category: "discovery", citations: ["CLARK 1993"] },
        { year: 1928, event: "More sensitive short-period seismographs begin operation", category: "equipment", citations: ["HODGSON 1958"] },
        { year: 1929, event: "Shortt clock obtained as standard sidereal timekeeper; Grand Banks earthquake", category: "equipment", citations: ["STEWART 1928", "HODGSON 1958"] },
        { year: 1933, event: "Henroteau develops 'super eye' electric camera", category: "equipment", citations: ["CLARK 1993"] },
        { year: 1939, event: "CBC begins broadcasting official time signal (the 'long dash')", category: "program", citations: ["CBC 2023"] },
        { year: 1941, event: "Dominion Observatory time becomes official time for all Canada; First National Building Code with seismic provisions", category: "milestone", citations: ["STEWART 1928", "HODGSON 1958"] },
        { year: 1947, event: "C.S. Beals appointed Dominion Astronomer", category: "personnel", citations: ["BEALS 1979"] },
        { year: 1951, event: "Photographic Zenith Tube (PZT) installed", category: "equipment", citations: ["BEALS 1956"] },
        { year: 1954, event: "Geophysical Laboratory (Building No. 11) built", category: "construction", citations: ["FHBRO 1992"] },
        { year: 1958, event: "15-inch telescope lens replaced with Perkin-Elmer apochromat", category: "equipment", citations: ["JARRELL 1988"] },
        { year: 1970, event: "Astronomy activities transferred to National Research Council; Observatory astronomy program closed", category: "milestone", citations: ["HUCKER 1992"] },
        { year: 1974, event: "15-inch telescope moved to Canada Science and Technology Museum", category: "equipment", citations: ["INGENIUM 2024"] },
        { year: 1992, event: "Buildings designated as Federal Heritage Buildings", category: "heritage", citations: ["FHBRO 1992"] },
        { year: 1993, event: "Last solar programs run out of NRC Ottawa wrapped up", category: "program", citations: ["CLARK 1993"] },
        { year: 2023, event: "CBC time signal broadcast ends (October 9) after 84 years", category: "milestone", citations: ["CBC 2023"] },
        { year: 2025, event: "Designated National Historic Site of Canada (January 15); 120th anniversary", category: "heritage", citations: ["PARKS CANADA 2025"] }
    ],

    // ============================================
    // DISCOVERIES & CONTRIBUTIONS
    // ============================================
    discoveries: [
        {
            id: "prime-meridian",
            title: "Canada's Prime Meridian",
            description: "Served as Canada's prime meridian for 118 years (counterpart to Royal Observatory Greenwich)",
            period: "1905-2023",
            significance: "Key to mapping and surveying of Canada, including borders of western provinces",
            citations: ["HUCKER 1992"]
        },
        {
            id: "official-time",
            title: "Official Time Signal",
            description: "Source of Dominion Observatory Official Time, distributed nationwide",
            period: "1905-2023",
            details: [
                "Time signals via telegraph wires (1905)",
                "CKCH radio broadcasts (1924)",
                "CBC 'long dash' at 1 PM Eastern (1939-2023)",
                "One of Canada's longest-running radio programs"
            ],
            citations: ["STEWART 1928", "CBC 2023"]
        },
        {
            id: "star-catalog",
            title: "Star Catalog Program",
            description: "Compositional survey of stellar positions",
            period: "1911-1950",
            details: [
                "1911-1923: 3,162 stars (28,000 observations)",
                "1922-1950: 1,368 Backlund-Hough stars for IAU"
            ],
            citations: ["STEWART 1928"]
        },
        {
            id: "planet-x",
            title: "Planet X/Y Claim",
            description: "Apparent discovery later proven non-existent",
            year: 1928,
            by: "François Henroteau and Miriam Burland",
            note: "Possibly plate flaws or Pluto; disproven later",
            citations: ["CLARK 1993"]
        },
        {
            id: "solar-rotation",
            title: "Solar Rotation Studies",
            description: "Determination of solar rotation as function of latitude",
            by: "Ralph DeLury",
            period: "1930s",
            citations: ["CLARK 1993"]
        },
        {
            id: "meteor-craters",
            title: "Meteorite Impact Crater Discoveries",
            description: "Discovery of impact craters mainly in Canadian Shield",
            by: "C.S. Beals, Peter Millman, Ian Halliday",
            period: "1940s-1960s",
            discoveries: ["Brent crater (Ontario)", "New Quebec/Pingualuit crater"],
            method: "Analysis of thousands of aerial photographs",
            citations: ["CLARK 1993", "BEALS 1979"]
        },
        {
            id: "seismic-building-code",
            title: "National Building Code Seismic Provisions",
            description: "First edition included seismic provisions based on Observatory work",
            year: 1941,
            significance: "Pioneering earthquake-resistant construction standards in Canada",
            citations: ["HODGSON 1958"]
        },
        {
            id: "binary-orbits",
            title: "Spectroscopic Binary Orbits",
            description: "World-leading computation of binary star orbits",
            by: "William Edmund Harper",
            distinction: "Computed more orbits than any other astronomer worldwide",
            citations: ["CLARK 1993"]
        },
        {
            id: "interstellar-matter",
            title: "Interstellar Matter Quantification",
            description: "First quantitative measurement of sodium and calcium absorption lines",
            by: "C.S. Beals",
            significance: "Advanced understanding of interstellar medium",
            citations: ["BEALS 1979"]
        },
        {
            id: "gravity-network",
            title: "Canadian Gravity Network",
            description: "Established chain of gravity observations across Canada",
            by: "Otto Klotz and successors",
            period: "1902-ongoing",
            applications: "Defence, satellite navigation, geodesy, geological mapping, resource exploration",
            citations: ["KLOTZ 1902", "CLARK 1993"]
        },
        {
            id: "longitude-surveys",
            title: "Telegraphic Longitude Determination",
            description: "Precise longitude measurement for boundary surveys",
            applications: ["Alaska Boundary (1906)", "International Boundary Commission"],
            citations: ["KLOTZ 1906"]
        }
    ],

    // ============================================
    // SCIENTIFIC PROGRAMS
    // ============================================
    programs: [
        {
            id: "positional-astronomy",
            name: "Positional Astronomy & Time Service",
            period: "1905-1970",
            description: "Canada's primary longitude reference and time determination",
            activities: [
                "Star catalog compilation",
                "Meridian circle observations",
                "Time signal distribution"
            ],
            equipment: ["Meridian Circle Telescope", "Transit Instruments", "Precision Clocks"],
            citations: ["STEWART 1928"]
        },
        {
            id: "spectroscopic-binaries",
            name: "Spectroscopic Binary Research",
            period: "1910s-1930s",
            description: "Research into close binary star systems using Doppler effect",
            lead: "William Edmund Harper",
            distinction: "World-leading orbit computation program",
            equipment: ["Prism Spectrograph (1930)"],
            citations: ["CLARK 1993"]
        },
        {
            id: "solar-research",
            name: "Solar Research",
            period: "1905-1993",
            description: "Continuous solar photography and spectroscopy",
            activities: ["Solar rotation studies", "Sunspot observation", "Solar spectrum analysis"],
            equipment: ["Coelostat"],
            lead: "Ralph DeLury (1930s)",
            citations: ["CLARK 1993"]
        },
        {
            id: "seismology",
            name: "Seismology & Earthquake Monitoring",
            period: "1906-present",
            description: "Canada's first seismic monitoring network",
            founder: "Otto Klotz (first Canadian seismologist)",
            network: ["Victoria", "Saskatoon", "Saint Boniface", "Ottawa", "Toronto", "Halifax"],
            majorEvents: [
                { event: "1906 San Francisco earthquake", instrument: "Bosch-Omori" },
                { event: "1929 Grand Banks earthquake", magnitude: 7, note: "Caused tsunami, 27 deaths" },
                { event: "1933 Baffin Bay earthquake", magnitude: 7 },
                { event: "1935 Temiskaming earthquake", magnitude: 6 },
                { event: "1944 Cornwall earthquake", magnitude: 5.7 }
            ],
            impact: "First National Building Code seismic provisions (1941)",
            citations: ["HODGSON 1958", "CLARK 1993"]
        },
        {
            id: "geomagnetism",
            name: "Geomagnetism",
            period: "1907-present",
            description: "Systematic observation of Earth's magnetic field",
            focus: "Repeat observations to monitor secular variation for studying Earth's core processes",
            status: "Continues today at same location (NRCan)",
            citations: ["CLARK 1993"]
        },
        {
            id: "gravity",
            name: "Gravity Measurements & Geodesy",
            period: "1902-present",
            description: "Establishment of Canadian gravity reference network",
            firstMeasurement: { by: "Otto Klotz", year: 1902, location: "Supreme Court basement" },
            networkSize: "25 observations by 1915 (New Brunswick to British Columbia)",
            international: "1959 measurements at Ottawa, Gander, Teddington, Paris, Rome, Bad Harzburg",
            applications: ["Defence", "Satellite navigation", "Geodesy", "Geological mapping", "Oil/gas/mineral exploration"],
            citations: ["KLOTZ 1902", "CLARK 1993"]
        },
        {
            id: "meteorite-craters",
            name: "Meteorite Impact Crater Research",
            period: "1940s-1960s",
            description: "Pioneering crater discovery program",
            lead: "C.S. Beals, Peter Millman, Ian Halliday",
            method: "Analysis of thousands of aerial photographs from National Air Photo Library and National Defence",
            discoveries: ["Brent crater", "New Quebec/Pingualuit crater"],
            recognition: "Extensive research program earned Canada worldwide acclaim",
            citations: ["CLARK 1993", "BEALS 1979"]
        },
        {
            id: "latitude",
            name: "Latitude Variation Studies",
            period: "1951+",
            description: "Precise latitude determination for polar motion studies",
            equipment: ["Photographic Zenith Tube (1951)"],
            collaboration: "International Latitude Service",
            citations: ["BEALS 1956"]
        },
        {
            id: "public-education",
            name: "Public Outreach & Education",
            period: "1905-1970",
            description: "Educational mandate to make night sky accessible",
            activities: [
                "Saturday evening stargazing (April-October)",
                "Pre-arranged tours for groups",
                "Royal Astronomical Society of Canada collaboration",
                "Public lectures",
                "School outreach programs"
            ],
            citations: ["CLARK 1993", "HUCKER 1992"]
        },
        {
            id: "eclipse-expeditions",
            name: "Solar Eclipse Expeditions",
            expeditions: [
                { year: 1905, location: "Labrador", result: "Clouded out", leader: "W.F. King" },
                { year: 1954, location: "Smoky Falls", photographer: "J.L. Locke" }
            ],
            citations: ["CLARK 1993"]
        }
    ]
};

// Make data available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ObservatoryData;
              }
