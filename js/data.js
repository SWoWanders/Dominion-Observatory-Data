// ============================================
// THE DOMINION OBSERVATORY (OTTAWA) ARCHIVE
// Complete Data Repository
// ============================================

const ObservatoryData = {
    metadata: {
        title: "The Dominion Observatory (Ottawa) Archive",
        scope: "This archive documents the Dominion Observatory in Ottawa: the federal scientific institution that operated 1905\u20131970, and the heritage building complex whose continued federal use, preservation, and recognition extends from 1970 to the present. It is distinct from the Dominion Astrophysical Observatory (DAO) in Saanich/Victoria, BC (founded 1918) and the Dominion Radio Astrophysical Observatory (DRAO) in Penticton, BC (founded 1960).",
        institutionPeriod: "1905\u20131970",
        buildingPeriod: "1902\u2013present",
        coverageSpan: "1905\u20132025 (120 years: institution 1905\u20131970, continued building use and heritage recognition 1970\u20132025)",
        established: 1905,
        institutionClosed: 1970,
        designated: "National Historic Site of Canada",
        designationApproved: 2023,
        designationAnnounced: "2025-01-15",
        federalHeritageBuilding: 1992,
        lastUpdated: "2025-02-15",
        version: "1.2.0"
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
            
            citations: ["FHBRO 1992b", "HUCKER 1992"]
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
                mounting: "Warner & Swasey (Cleveland, Ohio)",
                optics: "John Brashear (Pittsburgh, Pennsylvania)"
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
            
            currentLocation: "Canada Science and Technology Museum (Helen Sawyer Hogg Observatory, 1974-2016); now in Ingenium Collections Conservation Centre",
            cstmAccession: "1974.0488",
            
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
                type: "Electrically activated self-winding sidereal clock",
                precision: "0.015 second per day",
                function: "Maintained sidereal time"
            },
            cstmAccession: "1966.0545",
            
            citations: ["JARRELL 1988"]
        },
        
        {
            id: "shortt-clock",
            name: "Shortt Free-Pendulum Clock",
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
            manufacturer: "Fauth & Co., Washington, DC",
            acquired: "From Washington, DC",
            
            firstMeasurement: {
                date: 1902,
                location: "Basement of old Supreme Court building, Ottawa",
                by: "Otto Klotz"
            },
            
            distinction: "First systematic Canadian government gravity observation",
            
            citations: ["KLOTZ 1902"]
        },
        
        {
            id: "brashear-wedge-photometer",
            name: "Brashear Wedge Photometer",
            type: "Photometric instrument",
            principle: "Neutral density optical wedge",
            manufacturer: "Warner & Swasey of Cleveland, Ohio (1903)",
            cstmAccession: "1970.1516",
            
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
            birth: { year: 1854, date: "1854-02-19", place: "Stowmarket, Suffolk, England" },
            death: { year: 1916, date: "1916-04-23", place: "near Ottawa, Ontario" },
            
            education: {
                institution: "University of Toronto",
                degree: "B.A. Mathematics (with honours)",
                year: 1874,
                distinction: "Gold medal in mathematics"
            },
            
            career: [
                { period: "1872-1874", role: "Sub-assistant astronomer, British team, international boundary survey in western Canada" },
                { period: "1875", role: "Assistant in the Canadian survey of lands in the northwest" },
                { period: "1876", role: "Granted Dominion Land Surveyor and Dominion Topographical Surveyor status (first such designation)" },
                { period: "1881", role: "Permanent civil servant; Inspector of Surveys" },
                { period: "1886", role: "Chief Inspector of Surveys" },
                { period: "1890-1916", role: "Chief Astronomer, Department of the Interior; co-established Cliff Street Observatory with Otto Klotz" },
                { period: "1892-1913", role: "British Commissioner on Canada-United States boundary disputes (incl. Alaska boundary)" },
                { period: "1905-1916", role: "First Director, Dominion Observatory" },
                { period: "1909", role: "First Director, Geodetic Survey of Canada" }
            ],
            
            honors: [
                { title: "President, Royal Society of Canada", years: "1911-1912" },
                { title: "LL.D, University of Toronto", year: 1904, reason: "Alaska boundary work" },
                { title: "Companion of the Order of St Michael and St George (CMG)", year: 1908 },
                { title: "Fellow of the Royal Society of Canada", year: 1908 },
                { title: "Fellow of the Royal Astronomical Society of Canada", year: 1909 }
            ],
            
            majorWorks: [
                "Led Canadian work on Alaska Boundary Commission",
                "Established Canada's prime meridian at Dominion Observatory",
                "Founded Geodetic Survey of Canada (1909)"
            ],
            
            character: "Known for integrity, intellect, analytical mind; 'reticence, modesty and lack of self-assertion'",
            
            citations: ["CSTM 1994", "HUCKER 1992", "CLARK 1993"]
        },
        
        {
            id: "otto-julius-klotz",
            name: "Otto Julius Klotz",
            birth: { year: 1852, date: "1852-03-31", place: "Preston (now Cambridge), Canada West [Ontario]" },
            death: { year: 1923, date: "1923-12-28", place: "Ottawa, Ontario" },
            
            education: [
                { institution: "Galt Grammar School", years: "to 1869" },
                { institution: "University of Toronto", year: 1869, note: "Entered on scholarship" },
                { institution: "University of Michigan, Ann Arbor", degree: "Civil Engineering", year: 1872, note: "Studied with astronomer James Craig Watson at the Detroit Observatory" }
            ],
            
            career: [
                { period: "1872-1879", role: "Private surveying practice in Preston" },
                { period: "1879", role: "Contract surveyor, Department of the Interior (prairie surveys)" },
                { period: "1885", role: "Assigned chief of astronomical observations in British Columbia and the North-West; began British Columbia Railway Belt Survey" },
                { period: "1885-1890", role: "British Columbia Railway Belt Survey" },
                { period: "1892", role: "Moved formally to Ottawa; assisted King in establishing Cliff Street Observatory" },
                { period: "1893-1894", role: "Surveyed Unuk River and Bradfield Canal in Alaska panhandle" },
                { period: "1896", role: "Chief Clerk and Astronomer (permanent civil service)" },
                { period: "1898", role: "Confidential mission to London (researched Foreign Office records on North American Boundary Commission)" },
                { period: "1903-1904", role: "South Pacific 'All Red Line' longitude expedition (Vancouver-Australia-New Zealand cable)" },
                { period: "1908", role: "Assistant Chief Astronomer" },
                { period: "1916-1917", role: "Acting Chief Astronomer (delayed by anti-German sentiment in WWI)" },
                { period: "1917", role: "Appointed Chief Astronomer (September) following memorandum signed by entire scientific staff" },
                { period: "1918-1923", role: "Director, Dominion Observatory" }
            ],
            
            firsts: [
                "First president, Association of Dominion Land Surveyors (1882-1886)",
                "First systematic Canadian government seismologist (established seismic operations 1906)",
                "Conducted the first systematic Canadian government gravity measurement (1902)"
            ],
            
            presidencies: [
                { organization: "Royal Astronomical Society of Canada", year: 1908 },
                { organization: "American Astronomical Society", role: "Vice-president", year: 1920 },
                { organization: "Seismological Society of America", year: 1920 }
            ],
            
            honors: [
                { degree: "LL.D", institution: "University of Toronto", year: 1904 },
                { degree: "D.Sc.", institution: "University of Michigan", year: 1913 },
                { degree: "LL.D", institution: "University of Pittsburgh", year: 1916 },
                { title: "Fellow of the Royal Society of Canada", year: 1910 }
            ],
            
            note: "Authored nearly 100 papers in addition to official reports; considered founder of the Carnegie Library in Ottawa.",
            
            citations: ["CSTM 1994", "HUCKER 1992", "CLARK 1993", "BIOGRAPHI"]
        },
        
        {
            id: "john-stanley-plaskett",
            name: "John Stanley Plaskett",
            birth: { year: 1865, date: "1865-11-17", place: "near Woodstock, Ontario" },
            death: { year: 1941, date: "1941-10-17", place: "Victoria, British Columbia" },
            
            ottawaCareer: [
                { year: 1903, role: "Hired by Dominion Observatory as mechanician/astronomer; assigned care of instruments" },
                { year: 1905, role: "Astronomer; designed and led 1905 Labrador eclipse expedition equipment" },
                { period: "1903-1917", role: "Initiated astrophysical research at Ottawa; designed spectrograph that made the 15-inch refractor competitive with much larger instruments; measured radial velocities; studied spectroscopic binaries" },
                { year: 1910, role: "Attended Pasadena meeting; returned with vision for a much larger Canadian telescope" },
                { year: 1913, role: "Persuaded Canadian government to fund a 72-inch reflector (with W.F. King's support)" },
                { year: 1917, role: "Departed Ottawa for Victoria, BC, to direct the new observatory there" }
            ],
            
            note: "After 1917, Plaskett's career belonged to the Dominion Astrophysical Observatory in Saanich/Victoria, BC, where he served as first director until 1935. His Ottawa work — particularly the Ottawa spectrograph and the radial-velocity programme — laid the scientific groundwork for the DAO. The 72-inch (1.83 m) Plaskett Telescope and Plaskett's later galactic-structure research are properly part of the DAO's history, not Ottawa's.",
            
            citations: ["JARRELL 1988", "CLARK 1993"]
        },
        
        {
            id: "robert-meldrum-stewart",
            name: "Robert Meldrum Stewart",
            birth: { year: 1878 },
            death: { year: 1954 },
            
            career: [
                { role: "Computer at Observatory opening (1905)" },
                { role: "In charge of Time Service" },
                { period: "1923-1946", role: "Dominion Astronomer (succeeded Klotz)" },
                { year: 1946, role: "Retired in July after 22 years as Dominion Astronomer" }
            ],
            
            achievements: [
                "Acquired the highly accurate Shortt free-pendulum clock as standard sidereal timekeeper (1929)",
                "Built up the national time service",
                "Oversaw the apparent 'Planet X' announcement of 1930"
            ],
            
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
                { year: 1906, role: "Joined Dominion Observatory staff (Ottawa) — first such staff appointment" },
                { year: 1919, role: "Moved to Dominion Astrophysical Observatory, Victoria, BC" },
                { role: "Subsequently became Director of DAO" }
            ],
            
            note: "Harper's career, like Plaskett's, included both Ottawa and Victoria phases. His Ottawa years (1906-1919) are the focus of this archive; his Victoria years and DAO directorship are covered by the DAO's own historical record.",
            
            ottawaContributions: [
                "Began the spectroscopic binary work in Ottawa that he later expanded at the DAO",
                "Computed orbits for spectroscopic binaries (work continued in Victoria)"
            ],
            
            laterContributions: [
                "Computed orbits for more spectroscopic binaries than any other astronomer worldwide (DAO)",
                "Calibrated absolute luminosities of thousands of spectral type A stars (DAO)",
                "Over 100 radio talks; many published in newspapers across Canada",
                "Over 80 papers for the RASC Journal"
            ],
            
            rascRoles: [
                { role: "President, Victoria Centre", year: 1922 },
                { role: "National President, RASC", years: "1928-1929" }
            ],
            
            honor: { degree: "Honorary Doctorate", institution: "University of Toronto", year: 1935 },
            
            citations: ["CLARK 1993", "RASC 1994"]
        },
        
        {
            id: "carlyle-smith-beals",
            name: "Carlyle Smith Beals",
            birth: { year: 1899, date: "1899-06-29", place: "Canso, Nova Scotia" },
            death: { year: 1979, date: "1979-07-02", place: "Ottawa, Ontario" },
            
            preOttawaCareer: [
                { period: "1927-1946", role: "Assistant Astronomer (later Assistant Director, 1940), Dominion Astrophysical Observatory, Victoria, BC", note: "Pre-Ottawa work; included only as background context" }
            ],
            
            ottawaCareer: [
                { year: 1946, role: "Moved to Dominion Observatory, Ottawa; appointed Acting Dominion Astronomer (November)" },
                { period: "1947-1964", role: "Dominion Astronomer (May 1947 appointment)" },
                { year: 1947, role: "First head of the astronomical bureau, Department of Mines and Resources (November)" }
            ],
            
            ottawaResearchAreas: [
                "Hot stars (P Cygni and Wolf-Rayet stars) — earlier DAO work continued at Ottawa",
                "Interstellar matter (first to quantitatively measure interstellar sodium and calcium absorption lines)",
                "Meteorite impact craters: led the systematic Canadian Shield search programme that confirmed Brent and New Quebec/Pingualuit and discovered Holleford"
            ],
            
            craterResearchProgramme: {
                beganSystematic: 1955,
                method: "Systematic study of approximately 200,000 aerial photographs from the National Air Photo Library and the Department of National Defence, supplemented by field geological studies",
                role: "Beals did not personally discover Brent or New Quebec/Pingualuit (those were brought to the Observatory's attention by Spartan Air Services and the Royal Ontario Museum, respectively). Beals's Dominion Observatory programme confirmed those structures as impact craters, identified Holleford (the first impact structure recognized by the Dominion Observatory itself, 1955), and ultimately yielded a list of dozens of confirmed Canadian impact craters.",
                notableConfirmations: ["Brent crater (Ontario)", "New Quebec / Pingualuit crater"],
                ownDiscoveries: ["Holleford impact structure (Ontario, 1955)"],
                postRetirement: "Continued analyzing Apollo mission photos; edited 'Science, History and Hudson Bay' (1967)"
            },
            
            administration: "Modernized the Observatory's seismological, gravimetric, magnetic and solar facilities; modernized official time distribution; installed new telescopes in Ontario, Alberta and British Columbia; oversaw the establishment of the Dominion Radio Astrophysical Observatory at Penticton, BC, from his Ottawa office",
            
            honors: [
                { title: "Fellow of the Royal Society of London", year: 1951 },
                { title: "Order of Canada", year: null },
                { title: "President, Royal Astronomical Society of Canada", years: "1951-1953" },
                { title: "Asteroid 3314 Beals named in his honour" },
                { title: "Lunar crater Beals named in his honour" }
            ],
            
            citations: ["BEALS 1979", "CLARK 1993", "INGENIUM 2024", "LAC BEALS"]
        },
        
        {
            id: "francois-henroteau",
            name: "François Charles Pierre Henroteau",
            birth: { year: 1889, place: "Liège, Belgium" },
            
            position: "Head of physical astronomy department, Dominion Observatory",
            
            contributions: [
                { work: "Spectrographic Study of Early Class B Stars", collaborator: "J.P. Henderson" },
                { 
                    claim: "Apparent 'Planet X' (later 'Planet Y') trans-Neptunian object", 
                    platesReanalyzed: "February 1924 (and 1906, 1909)", 
                    publicAnnouncement: 1930, 
                    collaborator: "Miriam Seymour Burland", 
                    status: "Disproven; the original photographic plates were later lost. The reanalysis was prompted by Tombaugh's 1930 discovery of Pluto."
                },
                { development: "'Super eye' electric camera prototype", year: 1933 },
                { work: "Photoelectric cells for stellar imaging", period: "Mid-1920s onwards" }
            ],
            
            citations: ["CLARK 1993", "INGENIUM CHANNEL"]
        },
        
        {
            id: "miriam-seymour-burland",
            name: "Miriam Seymour Burland",
            birth: { year: 1902 },
            death: { year: 1997 },
            
            distinction: "Reportedly the first woman in Canadian government service permitted to wear pants on the job (per the Canadian Astronomical Society; she observed during long Ottawa winter nights)",
            
            joinedDominionObservatory: 1927,
            
            role: "Among the first women astronomers employed by the Dominion Observatory",
            
            work: "Collaborated with François Henroteau on the Planet X/Y reanalysis (plates from February 1924; public announcement 1930). The two spent 80-100 hours over 10 days locating the candidate object on archival plates, then a further 70 hours computing its orbit.",
            
            citations: ["CLARK 1993", "WIKIPEDIA 2024", "INGENIUM CHANNEL"]
        },
        
        {
            id: "mary-grey",
            name: "Mary Grey",
            role: "Last astronomer at the Dominion Observatory before its 1970 closure",
            
            post1970: "Continued the Observatory's educational programme at the Canada Science and Technology Museum",
            
            citations: ["CLARK 1993"]
        },
        
        {
            id: "ralph-delury",
            name: "Ralph DeLury",
            contribution: "Determined the rate of solar rotation as a function of latitude (1930s)",
            citations: ["CLARK 1993"]
        },
        
        {
            id: "peter-millman",
            name: "Peter M. Millman",
            contribution: "Co-led the systematic Canadian Shield meteorite-crater search programme (1950s-1960s); confirmed Brent and contributed to the broader list of Canadian impact structures",
            collaborators: "C.S. Beals, Ian Halliday, M.J.S. Innes",
            note: "Did not personally 'discover' Brent (which was first spotted by John A. Roberts of Spartan Air Services in 1951) but co-authored the foundational 1960 Dominion Observatory publication on the Brent Crater (Millman, Liberty, Clark, Willmore, and Innes).",
            citations: ["CLARK 1993"]
        },
        
        {
            id: "ian-halliday",
            name: "Ian Halliday",
            contribution: "Member of the Dominion Observatory crater-research programme led by Beals (1950s-1960s); contributed to the systematic confirmation and study of Canadian impact structures",
            collaborators: "C.S. Beals, Peter Millman",
            citations: ["CLARK 1993"]
        }
    ],

    // ============================================
    // TIMELINE EVENTS
    // ============================================
    timeline: [
        { year: 1854, event: "Birth of William Frederick King in Stowmarket, England (19 February)", category: "personnel", citations: ["CSTM 1994"] },
        { year: 1852, event: "Birth of Otto Julius Klotz in Preston (now Cambridge), Canada West (31 March)", category: "personnel", citations: ["BIOGRAPHI"] },
        { year: 1890, event: "Cliff Street Observatory established by W.F. King and Otto Klotz", category: "establishment", citations: ["HUCKER 1992"] },
        { year: 1901, event: "Site selected on Central Experimental Farm; 15-inch telescope ordered from Brashear (optics) and Warner & Swasey (mounting)", category: "planning", citations: ["CLARK 1993", "JARRELL 1988"] },
        { year: 1902, event: "Construction of Dominion Observatory main building begins (July); first systematic Canadian government gravity measurement made by Otto Klotz in basement of old Supreme Court building, Ottawa", category: "construction", citations: ["OTTAWA JOURNAL 1902", "KLOTZ 1902"] },
        { year: 1903, event: "John S. Plaskett hired by Dominion Observatory; began initiating astrophysical research", category: "personnel", citations: ["JARRELL 1988"] },
        { year: 1905, event: "First light (17 April); official opening (29 April); Dominion Observatory institution begins operations", category: "milestone", citations: ["JARRELL 1988", "FHBRO 1992"] },
        { year: 1905, event: "Total solar eclipse expedition to Labrador (30 August), led by W.F. King with J.S. Plaskett — clouded out", category: "expedition", citations: ["CLARK 1993"] },
        { year: 1906, event: "Bosch-Omori seismographs begin operation; recorded the San Francisco earthquake (18 April); Klotz becomes first systematic Canadian government seismologist", category: "equipment", citations: ["HODGSON 1958"] },
        { year: 1906, event: "Telegraphic longitude determination for Alaska boundary at Yukon River (Klotz)", category: "survey", citations: ["KLOTZ 1906"] },
        { year: 1907, event: "6-inch Troughton & Simms meridian circle delivered (delayed by defects)", category: "equipment", citations: ["STEWART 1928"] },
        { year: 1908, event: "Geophysical Data Centre built", category: "construction", citations: ["FHBRO 1992"] },
        { year: 1909, event: "Observatory House built; Geodetic Survey of Canada established under W.F. King", category: "construction", citations: ["FHBRO 1992"] },
        { year: 1910, event: "Meridian circle operational; Saint-Boniface seismograph station opened (national network expansion)", category: "equipment", citations: ["HODGSON 1958", "STEWART 1928"] },
        { year: 1911, event: "Star catalog programme begins (3,162 stars, 28,000 observations through 1923)", category: "program", citations: ["STEWART 1928"] },
        { year: 1912, event: "South Azimuth Building constructed; 80kg Wiechert vertical seismograph added (March)", category: "construction", citations: ["FHBRO 1992a", "HODGSON 1958"] },
        { year: 1913, event: "Seismology Building constructed; Plaskett begins his successful campaign for a 72-inch reflector telescope", category: "construction", citations: ["FHBRO 1992", "JARRELL 1988"] },
        { year: 1914, event: "Photo Equatorial Building completed; double astrograph added", category: "construction", citations: ["FHBRO 1992b", "CLARK 1993"] },
        { year: 1916, event: "Death of W.F. King (23 April); Otto Klotz becomes Acting Chief Astronomer", category: "personnel", citations: ["CSTM 1994"] },
        { year: 1917, event: "Klotz formally appointed Chief Astronomer (September); J.S. Plaskett departs Ottawa for Victoria, BC, to direct the new Dominion Astrophysical Observatory; Machine and Carpentry Shop built; geodetic surveying separated from Observatory", category: "personnel", citations: ["CLARK 1993", "BIOGRAPHI"] },
        { year: 1918, event: "Dominion Astrophysical Observatory opens in Saanich/Victoria, BC (6 May) — Plaskett's later career belongs to the DAO, not the Ottawa Dominion Observatory", category: "external_milestone", note: "DAO is a separate institution. Listed for context.", citations: ["HUCKER 1992"] },
        { year: 1922, event: "Canada joins the International Astronomical Union and the International Geodetic and Geophysical Union; Klotz attends inaugural meetings in Rome as one of Canada's official representatives", category: "milestone", citations: ["KLOTZ 1922", "BIOGRAPHI"] },
        { year: 1923, event: "Death of Otto Klotz (28 December); R.M. Stewart becomes Dominion Astronomer", category: "personnel", citations: ["CSTM 1994", "BIOGRAPHI"] },
        { year: 1924, event: "Photographic plates taken in February that would later (1930) be reinterpreted by Henroteau and Burland as showing a trans-Neptunian planet", category: "observation", citations: ["INGENIUM CHANNEL"] },
        { year: 1924, event: "Time signal broadcasting begins via CKCH radio (9 p.m. daily)", category: "program", citations: ["STEWART 1928"] },
        { year: 1928, event: "More sensitive short-period seismographs begin operation", category: "equipment", citations: ["HODGSON 1958"] },
        { year: 1929, event: "Shortt free-pendulum clock obtained as standard sidereal timekeeper; Grand Banks earthquake (magnitude ~7.2) recorded — caused tsunami that killed 27 people", category: "equipment", citations: ["STEWART 1928", "HODGSON 1958"] },
        { year: 1930, event: "Henroteau and Burland publicly announce 'Planet X/Y' candidate based on reanalysis of 1924 plates, prompted by Tombaugh's discovery of Pluto; the claim was later disproven", category: "discovery", citations: ["INGENIUM CHANNEL", "CLARK 1993"] },
        { year: 1933, event: "Henroteau develops 'super eye' electric camera prototype", category: "equipment", citations: ["CLARK 1993"] },
        { year: 1939, event: "CBC begins broadcasting the official time signal (the 'long dash' at 1 p.m. Eastern)", category: "program", citations: ["CBC 2023"] },
        { year: 1941, event: "Dominion Observatory time becomes Canada's national official time signal; first National Building Code edition included seismic provisions based on Observatory work", category: "milestone", citations: ["STEWART 1928", "HODGSON 1958"] },
        { year: 1946, event: "C.S. Beals moves from DAO Victoria to Ottawa; appointed Acting Dominion Astronomer in November", category: "personnel", citations: ["INGENIUM CHANNEL"] },
        { year: 1947, event: "C.S. Beals appointed Dominion Astronomer (May)", category: "personnel", citations: ["BEALS 1979"] },
        { year: 1951, event: "Photographic Zenith Tube (PZT) installed; Brent crater first spotted in aerial photos by John A. Roberts of Spartan Air Services and brought to Dominion Observatory's attention", category: "equipment", citations: ["BEALS 1956"] },
        { year: 1954, event: "Geophysical Laboratory (Building No. 11) built", category: "construction", citations: ["FHBRO 1992"] },
        { year: 1955, event: "Beals launches systematic Canadian Shield meteorite-crater search programme; Holleford impact structure identified — the first impact crater discovered by Dominion Observatory's own programme", category: "program", citations: ["CLARK 1993", "BEALS 1979"] },
        { year: 1958, event: "15-inch refractor lens replaced with Perkin-Elmer triple apochromat; mechanical drive replaced with synchronous electrical motor", category: "equipment", citations: ["JARRELL 1988"] },
        { year: 1960, event: "Dominion Radio Astrophysical Observatory (DRAO) inaugurated near Penticton, BC, established under Beals's oversight from Ottawa — DRAO is a separate institution but the establishment was directed from the Dominion Observatory in Ottawa", category: "external_milestone", note: "DRAO is a separate institution in BC. Listed for context.", citations: ["BEALS 1979"] },
        { year: 1964, event: "Beals retires as Dominion Astronomer", category: "personnel", citations: ["INGENIUM CHANNEL"] },
        { year: 1970, event: "Dominion Observatory institution closes; astronomical and timekeeping responsibilities transferred to the National Research Council; geophysics, surveying, and mapping transferred to the Department of Energy, Mines and Resources (later Natural Resources Canada)", category: "milestone", citations: ["HUCKER 1992"] },
        { year: 1974, event: "15-inch refractor moved to the Helen Sawyer Hogg Observatory at the Canada Science and Technology Museum", category: "equipment", citations: ["INGENIUM 2024"] },
        { year: 1992, event: "Dominion Observatory and associated buildings designated Federal Heritage Buildings (FHBRO 92-035, 92-041, 92-042)", category: "heritage", citations: ["FHBRO 1992"] },
        { year: 1993, event: "Last solar programmes run out of NRC Ottawa wrapped up", category: "program", citations: ["CLARK 1993"] },
        { year: 2016, event: "15-inch refractor's public-observing use at the Helen Sawyer Hogg Observatory ends; telescope moves to Ingenium Collections Conservation Centre storage", category: "equipment", citations: ["INGENIUM 2024"] },
        { year: 2023, event: "CBC time signal broadcast ends after 84 years (9 October); Dominion Observatory Complex designated a national historic site by the Historic Sites and Monuments Board (designation later announced publicly)", category: "milestone", citations: ["CBC 2023", "PARKS CANADA 2025"] },
        { year: 2025, event: "Public announcement of National Historic Site designation by the Honourable Steven Guilbeault, Minister of Environment and Climate Change (15 January); marks 120th anniversary of the building's opening", category: "heritage", citations: ["PARKS CANADA 2025"] }
    ],

    // ============================================
    // DISCOVERIES & CONTRIBUTIONS
    // ============================================
    discoveries: [
        {
            id: "prime-meridian",
            title: "Canada's Prime Meridian",
            description: "The Dominion Observatory established and maintained Canada's prime meridian, which was used as Canada's primary geodetic reference and supported national surveying, official time, and the survey programme",
            period: "1905-present (still marked at the site)",
            significance: "Key to the mapping and surveying of Canada, including the borders of the western provinces; envisioned as Canada's counterpart to the Royal Observatory at Greenwich",
            citations: ["HUCKER 1992", "PARKS CANADA 2025"]
        },
        {
            id: "official-time",
            title: "Official Time Signal",
            description: "Source of Dominion Observatory Official Time, distributed nationwide",
            period: "1905-2023",
            details: [
                "Time signals via telegraph wires (from 1905)",
                "About 700 clocks across Ottawa receiving signals by 1930",
                "CKCH radio broadcasts (from 1924)",
                "National official time service (from 1941)",
                "CBC 'long dash' at 1 p.m. Eastern (1939-2023, 84 years)",
                "One of Canada's longest-running radio programmes"
            ],
            citations: ["STEWART 1928", "CBC 2023"]
        },
        {
            id: "star-catalog",
            title: "Star Catalogue Programme",
            description: "Comprehensive survey of stellar positions for Canadian geodetic and astronomical use",
            period: "1911-1950",
            details: [
                "1911-1923: 3,162 stars (28,000 observations)",
                "1923-1950: 1,368 Backlund-Hough stars for the IAU"
            ],
            citations: ["STEWART 1928"]
        },
        {
            id: "planet-x",
            title: "Planet X / Planet Y Claim",
            description: "Apparent identification of a trans-Neptunian planet, later disproven",
            platesFrom: "February 1924 (also 1906 and 1909 archival plates)",
            announcement: 1930,
            by: "François Henroteau and Miriam Seymour Burland",
            note: "Reanalysis prompted by Tombaugh's 1930 discovery of Pluto. The claimed object was never confirmed; the original photographic plates were later lost. The episode is historically significant primarily for the public attention it brought to Canadian astronomy and as an example of women's participation in early Canadian government astronomy.",
            citations: ["CLARK 1993", "INGENIUM CHANNEL"]
        },
        {
            id: "solar-rotation",
            title: "Solar Rotation Studies",
            description: "Determination of solar rotation rate as a function of latitude",
            by: "Ralph DeLury",
            period: "1930s",
            citations: ["CLARK 1993"]
        },
        {
            id: "meteor-craters-program",
            title: "Canadian Shield Meteorite Impact Crater Research",
            description: "Systematic search programme that confirmed and identified impact craters across the Canadian Shield",
            by: "C.S. Beals, Peter Millman, Ian Halliday, M.J.S. Innes, and Dominion Observatory colleagues",
            period: "1955-1970 (programme), 1955-present (continuing impact-crater research at GSC/NRCan)",
            method: "Systematic study of approximately 200,000 aerial photographs from the National Air Photo Library and the Department of National Defence, supplemented by field geology",
            historicalContext: "Two craters were brought to the Dominion Observatory's attention from outside before its own programme began: the New Quebec / Pingualuit crater (photographed by USAAF pilots in 1943, brought to scientific attention by prospector Frederick Chubb and the Royal Ontario Museum, 1950) and the Brent crater (spotted in aerial photographs by John A. Roberts of Spartan Air Services in 1951). The Dominion Observatory confirmed these as impact structures and went on to identify many more.",
            confirmations: [
                { name: "Brent crater", location: "Algonquin Provincial Park, Ontario", spotted: "John A. Roberts (Spartan Air Services), 1951", confirmed: "Dominion Observatory programme, 1951-1960" },
                { name: "New Quebec / Pingualuit crater", location: "Ungava Peninsula, Quebec", broughtToScientificAttention: "Frederick W. Chubb / V. Ben Meen (Royal Ontario Museum), 1950" }
            ],
            ownDiscoveries: [
                { name: "Holleford impact structure", location: "Ontario (27 km north of Kingston)", year: 1955, note: "First impact crater identified by the Dominion Observatory's own systematic search of aerial photography" }
            ],
            significance: "The Dominion Observatory programme established Canada as a world centre for impact-crater research and yielded a list of dozens of confirmed Canadian impact structures.",
            citations: ["CLARK 1993", "BEALS 1979", "LAC BEALS"]
        },
        {
            id: "seismic-building-code",
            title: "National Building Code Seismic Provisions",
            description: "First edition of the National Building Code (1941) included seismic provisions based directly on Dominion Observatory seismic data",
            year: 1941,
            significance: "Pioneering earthquake-resistant construction standards in Canada",
            citations: ["HODGSON 1958"]
        },
        {
            id: "binary-orbits",
            title: "Spectroscopic Binary Orbits",
            description: "Foundational orbit-computation work on close binary stars; W.E. Harper began this work at the Dominion Observatory in Ottawa (1906-1919) and continued at the DAO in Victoria",
            by: "William Edmund Harper",
            note: "Harper's record-setting orbit-computation tally was achieved across both Ottawa and Victoria phases of his career.",
            citations: ["CLARK 1993"]
        },
        {
            id: "interstellar-matter",
            title: "Interstellar Matter Quantification",
            description: "First quantitative measurements of interstellar sodium and calcium absorption lines",
            by: "C.S. Beals",
            note: "Beals's foundational work on interstellar absorption lines began at the Dominion Astrophysical Observatory in Victoria (1927-1946) and continued in Ottawa as Dominion Astronomer (1947-1964).",
            significance: "Advanced understanding of the interstellar medium; demonstrated that interstellar matter is not distributed evenly throughout space",
            citations: ["BEALS 1979"]
        },
        {
            id: "gravity-network",
            title: "Canadian Gravity Network",
            description: "Established a chain of gravity observations across Canada, beginning with Klotz's 1902 measurement",
            by: "Otto Klotz and successors",
            period: "1902-present (continuing under Natural Resources Canada)",
            milestones: [
                "1902: First systematic Canadian government gravity observation, basement of old Supreme Court (Klotz)",
                "1915: 25 observations across Canada, New Brunswick to British Columbia",
                "1959: International gravity link campaign (Ottawa, Gander, Teddington, Paris, Rome, Bad Harzburg)"
            ],
            applications: "Defence, satellite navigation, geodesy, geological mapping, resource exploration",
            citations: ["KLOTZ 1902", "CLARK 1993"]
        },
        {
            id: "longitude-surveys",
            title: "Telegraphic Longitude Determinations",
            description: "Precise longitude measurement for boundary surveys via telegraph time-signal exchange",
            applications: ["Alaska Boundary (1906)", "All Red Cable Line, Vancouver-Australia-New Zealand (1903-1904)", "International Boundary Commission"],
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
            description: "Canada's primary longitude reference and time determination service",
            activities: [
                "Star catalogue compilation",
                "Meridian circle observations",
                "Time signal distribution"
            ],
            equipment: ["Meridian Circle Telescope", "Transit Instruments", "Riefler and Shortt precision clocks"],
            citations: ["STEWART 1928"]
        },
        {
            id: "spectroscopic-astrophysics",
            name: "Spectroscopic Astrophysics (Ottawa phase)",
            period: "1903-1917 (initiated by Plaskett); continued thereafter at lower intensity",
            description: "Astrophysical research using a spectrograph adapted for the 15-inch refractor; included radial-velocity measurements and early spectroscopic binary work",
            lead: "John S. Plaskett (1903-1917)",
            note: "Plaskett's Ottawa programme demonstrated the case for a much larger Canadian telescope, leading to the founding of the Dominion Astrophysical Observatory in Saanich, BC (1918). Subsequent spectroscopic-binary work mostly migrated to Victoria.",
            equipment: ["15-inch refractor with Plaskett-designed spectrograph"],
            citations: ["JARRELL 1988", "CLARK 1993"]
        },
        {
            id: "solar-research",
            name: "Solar Research",
            period: "1905-1993",
            description: "Continuous solar photography and spectroscopy",
            activities: ["Solar rotation studies (1930s, DeLury)", "Sunspot observation", "Solar spectrum analysis", "Eclipse expeditions"],
            equipment: ["Coelostat (1905-1975)"],
            lead: "Ralph DeLury (1930s) and others",
            note: "Solar work continued at NRC Ottawa until 1993; some solar-flux work was later transferred to DRAO Penticton.",
            citations: ["CLARK 1993"]
        },
        {
            id: "seismology",
            name: "Seismology & Earthquake Monitoring",
            period: "1906-1970 at Dominion Observatory; continuing under successor agencies",
            description: "Canada's first systematic government seismic monitoring network",
            founder: "Otto Klotz (first systematic Canadian government seismologist, 1906)",
            network: ["Victoria", "Saskatoon", "Saint Boniface (1910)", "Ottawa", "Toronto", "Halifax"],
            majorEvents: [
                { event: "1906 San Francisco earthquake", instrument: "Bosch-Omori" },
                { event: "1929 Grand Banks earthquake", magnitude: "~7.2", note: "Caused tsunami; 27 deaths in Newfoundland" },
                { event: "1933 Baffin Bay earthquake", magnitude: 7 },
                { event: "1935 Témiscamingue earthquake", magnitude: 6.2 },
                { event: "1944 Cornwall earthquake", magnitude: 5.8 }
            ],
            impact: "Provided seismic basis for first National Building Code provisions (1941); programme transferred to GSC/Natural Resources Canada when the Dominion Observatory closed in 1970",
            citations: ["HODGSON 1958", "CLARK 1993"]
        },
        {
            id: "geomagnetism",
            name: "Geomagnetism",
            period: "1907-1970 at Dominion Observatory; continuing under Natural Resources Canada",
            description: "Systematic observation of Earth's magnetic field",
            focus: "Repeat observations to monitor secular variation for studying Earth's core processes",
            status: "Continues today at the same Ottawa site under Natural Resources Canada",
            citations: ["CLARK 1993"]
        },
        {
            id: "gravity",
            name: "Gravity Measurements & Geodesy",
            period: "1902-1970 at Dominion Observatory; continuing under successor agencies",
            description: "Establishment of Canadian gravity reference network",
            firstMeasurement: { by: "Otto Klotz", year: 1902, location: "Basement of old Supreme Court building, Ottawa", instrument: "Mendenhall double pendulum apparatus, Fauth & Co., Washington, DC" },
            networkSize: "25 observations by 1915, from New Brunswick to British Columbia",
            international: "1959 international gravity link: Ottawa, Gander, Teddington, Paris, Rome, Bad Harzburg",
            applications: ["Defence", "Satellite navigation", "Geodesy", "Geological mapping", "Oil/gas/mineral exploration"],
            citations: ["KLOTZ 1902", "CLARK 1993"]
        },
        {
            id: "meteorite-craters",
            name: "Meteorite Impact Crater Research Programme",
            period: "1955-1970 at Dominion Observatory; continuing under GSC/NRCan",
            description: "Systematic Canadian Shield aerial-photo crater search programme",
            lead: "C.S. Beals, with Peter Millman, Ian Halliday, M.J.S. Innes",
            method: "Analysis of approximately 200,000 aerial photographs from the National Air Photo Library and the Department of National Defence",
            historicalContext: "The Dominion Observatory's own programme began in 1955, building on (a) the New Quebec / Pingualuit crater (USAAF photo, 1943; ROM expedition, 1950-51) and (b) the Brent crater (spotted by Spartan Air Services, 1951). The Observatory's first own discovery was the Holleford structure (1955).",
            confirmations: ["Brent crater (Ontario)", "New Quebec / Pingualuit crater"],
            ownDiscoveries: ["Holleford impact structure (Ontario, 1955)"],
            recognition: "The programme earned international recognition for Canada and led, by the late 1960s, to a published list of over a dozen confirmed Canadian impact structures",
            citations: ["CLARK 1993", "BEALS 1979", "LAC BEALS"]
        },
        {
            id: "latitude",
            name: "Latitude Variation Studies",
            period: "1951-1970",
            description: "Precise latitude determination for polar motion studies",
            equipment: ["Photographic Zenith Tube (1951)"],
            collaboration: "International Latitude Service",
            citations: ["BEALS 1956"]
        },
        {
            id: "public-education",
            name: "Public Outreach & Education",
            period: "1905-1970",
            description: "Educational mandate to make the night sky accessible to the public",
            activities: [
                "Saturday evening stargazing through the 15-inch refractor (April-October)",
                "Pre-arranged tours for groups",
                "Royal Astronomical Society of Canada (Ottawa Centre) collaboration",
                "Public lectures",
                "School outreach programmes"
            ],
            note: "Public stargazing through the Observatory's 15-inch refractor continued at the Helen Sawyer Hogg Observatory of the Canada Science and Technology Museum until 2014/2016.",
            citations: ["CLARK 1993", "HUCKER 1992"]
        },
        {
            id: "eclipse-expeditions",
            name: "Solar Eclipse Expeditions",
            expeditions: [
                { year: 1905, location: "Labrador (30 August)", result: "Clouded out", leader: "W.F. King with J.S. Plaskett" },
                { year: 1954, location: "Smoky Falls, Ontario", photographer: "J.L. Locke" }
            ],
            citations: ["CLARK 1993"]
        }
    ]
};

// Make data available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ObservatoryData;
}
