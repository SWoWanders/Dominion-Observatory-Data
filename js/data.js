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
            constructed: { start: 1902, completed: 1905, groundbreaking: "1902-08-28" },
            architect: "David Ewart, Chief Dominion Architect (1896–1914)",
            style: "Romanesque Revival / Edwardian Classicism",
            heritageStatus: "Classified Federal Heritage Building",
            fhbroReport: "92-035",
            
            description: "The main building of the Dominion Observatory was originally designed to stand on Parliament Hill before the site at the north end of the Central Experimental Farm was selected in June 1901. Ground was broken in Hull on 28 August 1902. Because it had been intended for a Parliament Hill location, the building was personally designed by Chief Dominion Architect David Ewart, who held that office from 1896 to 1914 and oversaw a staff of forty or more. Parks Canada's heritage assessment describes it as one of four major federal public buildings raised in Ottawa during the expansionist years of the Wilfrid Laurier government, distinguished by 'a vibrancy not found in other Ottawa federal buildings of this period.' The eclectic design combines references to institutes of higher learning with the contemporary taste for grandiloquent classical buildings with interesting domes.",
            
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
                    primary: "Rock-faced variegated Nepean sandstone",
                    trim: "Smooth, dressed red Sackville sandstone",
                    base: "Rusticated limestone"
                },
                roof: "Reinforced concrete with steel frame",
                dome: "Copper, hemispherical, with patina",
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
            citations: ["FHBRO 1992", "CLARK 1993", "HUCKER 1992", "JARRELL 1988"]
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
            heritageStatus: "Contributing structure within the Dominion Observatory Complex National Historic Site (designated 2023, announced 2025)",
            description: "A surviving auxiliary building on the Dominion Observatory grounds. Parks Canada's National Historic Site designation lists it among 'other surviving buildings... constructed to serve the evolving needs of the scientific research conducted on site.' The original function of the building and the history of its current name have not been confirmed in the sources reviewed for this archive.",
            citations: ["PARKS CANADA NHSC"],
            researchNote: "To establish the building's original function and name history, consult: (a) the FHBRO Building Report 92-035 (Hucker 1992); (b) Hodgson, The Heavens Above and the Earth Beneath, vol. 1 (1989); (c) the Annual Reports of the Chief Astronomer / Dominion Astronomer for 1907-1910 at Library and Archives Canada."
        },
        
        {
            id: "electrical-station",
            name: "Electrical Station",
            constructed: "Pre-1928",
            constructedNote: "Documentary upper bound — the building was on the site by 1928; an exact construction year is not stated in the sources reviewed for this archive.",
            heritageStatus: "Contributing structure within the Dominion Observatory Complex National Historic Site (designated 2023, announced 2025)",
            description: "A surviving auxiliary building on the Dominion Observatory grounds. Parks Canada's National Historic Site designation lists it among 'other surviving buildings... constructed to serve the evolving needs of the scientific research conducted on site.' The original function of the building has not been confirmed in the sources reviewed for this archive; the name suggests an electrical support role for the complex but no documentary source has been located that specifies what equipment it housed.",
            citations: ["PARKS CANADA NHSC", "FHBRO 1992"],
            researchNote: "To establish the building's construction year and original function, consult: (a) the FHBRO Building Report 92-035 (Hucker 1992) and any FHBRO sub-reports on auxiliary structures; (b) the Department of Public Works architectural drawing series at Library and Archives Canada (RG11); (c) site plans of the Dominion Observatory grounds in the 1920s."
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
            
            description: "The principal astronomical instrument of the Dominion Observatory and the largest refractor ever erected in Canada. Ordered in June 1901 (before the building itself was begun) at a cost of about $14,625, the telescope was a collaboration between two of the foremost astronomical-instrument firms of the period: the optical glass — a 38 cm (15-inch) achromatic objective with a focal length of 5.7 m (f/15) — was figured by John A. Brashear of Pittsburgh, Pennsylvania, while the equatorial mounting and tube were built by Warner & Swasey of Cleveland, Ohio. The drive was originally a mechanical clock-work with falling weights and a James-Watt-type fly-weight governor; this was replaced by a synchronous electrical motor in the 1950s. First light occurred on 17 April 1905, and the instrument was the centerpiece of the Observatory's astrophysical programme through Plaskett's spectrograph work (1907 onwards) and Burland's later Cepheid-photometry programme. In 1958 the original Brashear objective was replaced with a Perkin-Elmer triple apochromat, said at the time to be the largest such lens ever made. When the Dominion Observatory's astronomy programme was wound up in 1970, Mary Grey championed the relocation of the telescope from its Carling-Avenue dome to a new dome at the (then) National Museum of Science and Technology, where it was installed in the Helen Sawyer Hogg Observatory (opened January 1975). The instrument is now in the Ingenium Collections Conservation Centre.",
            
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
            
            citations: ["JARRELL 1988", "INGENIUM 2024", "INGENIUM CHANNEL"]
        },
        
        {
            id: "coelostat",
            name: "Coelostat",
            type: "Solar telescope",
            
            description: "A coelostat is a solar instrument: two flat mirrors are arranged so that the first, mounted on a polar axis driven at the sidereal rate, sends a continuous beam of sunlight in a fixed direction (the 'celestial-pole-to-zenith' direction) onto the second mirror, which directs it horizontally into a fixed solar telescope. This avoids the heavy plumbing of a moving spectrograph. The Dominion Observatory's coelostat was ordered by W.F. King for the 1905 Dominion Observatory expedition to Labrador to observe the total solar eclipse of 30 August 1905; the optics were figured by John A. Brashear of Pittsburgh and the mirror was a 20-inch (50.8 cm), 3-inch-thick silvered front-faced flat. The complete instrument weighed 2,500 pounds and was packed into 15 boxes for transport. After the Labrador expedition (clouded out at totality), the coelostat was returned to the Dominion Observatory, installed in a dedicated Coelostat Shed with a roll-off roof, and used for solar work for some seventy years. It was the principal instrument of Ralph DeLury's 1930s programme on the differential rotation of the Sun.",
            
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
                { event: "First use", date: "1905", location: "Labrador solar eclipse expedition", result: "Thwarted by clouds" },
                { event: "Solar rotation programme", period: "1930s", lead: "Ralph DeLury" }
            ],
            
            housing: "Coelostat Shed with roll-off roof (70 years)",
            
            citations: ["RASC LABRADOR 1905", "INGENIUM CHANNEL", "CLARK 1993", "JARRELL 1988"]
        },
        
        {
            id: "double-astrograph",
            name: "Double Astrograph (Brashear Astrograph)",
            type: "Astronomical photographic camera",
            manufacturer: "John A. Brashear Co., Pittsburgh, Pennsylvania (optics); mounting maker not confirmed in available sources",
            acquired: 1915,
            location: "Photo Equatorial Building",
            
            description: "An astrograph is a telescope optimised for photography rather than visual observation: it has a wider field of view than a typical refractor and a flat focal surface to keep an entire star field in focus across a single photographic plate. The Dominion Observatory's instrument, sometimes called the 'Brashear astrograph' after the Pittsburgh firm that supplied its optics, was added in 1915 and mounted in the Photo Equatorial Building purpose-built for it. As its name suggests, it carries two main camera tubes side by side — together with a smaller patrol camera and finder telescopes — so that two photographs can be made simultaneously of the same sky field. One of the two main cameras has a thin wedge-shaped glass prism mounted in front of the objective: this 'objective prism' splits each star's light into a low-resolution spectrum, so that a single exposure records both star positions/brightnesses and the spectra of every star in the field at once. (Because the prism deviates the off-axis light, this camera's pointing is independently adjustable.) Astronomers used the resulting plates to discover variable stars, measure stellar brightness with photometers, and use Cepheid variables as 'standard candles' to estimate the distances of nearby star clusters and nebulae — work overlapping with Burland's photometric programme. The Brashear astrograph is now in the Ingenium Museum collection.",
            
            configuration: "Two main camera tubes plus a patrol camera and finder/guide telescopes",
            
            features: [
                "Photography of star fields",
                "Photometric measurement of stellar brightness",
                "Wedge-shaped objective prism on one tube for stellar spectroscopy",
                "Independent pointing adjustment for the prism camera"
            ],
            
            citations: ["INGENIUM CHANNEL", "CLARK 1993"]
        },
        
        {
            id: "meridian-circle",
            name: "Meridian Circle Telescope",
            type: "Positional astronomical instrument (transit circle)",
            manufacturer: "Troughton and Simms (London, UK)",
            ordered: "6-inch model",
            
            description: "A meridian circle (also called a transit circle) is a telescope confined to swing only in the local meridian plane — the great circle running due north–south overhead — fitted with finely divided graduated circles for reading altitude. As a star drifts across the sky on its diurnal arc, it crosses the meridian once each day; the precise time of meridian crossing, recorded against a sidereal clock, gives the star's right ascension, while the altitude reading at that moment gives its declination. Meridian circles were the workhorse instruments of nineteenth- and early-twentieth-century positional astronomy and were used to determine standard time, longitude, and the catalogued positions of stars. The Dominion Observatory's instrument, ordered from the celebrated London firm Troughton and Simms (which also made meridian circles for Harvard, Cambridge, Edinburgh, and the Royal Observatory at the Cape of Good Hope, and supplied optical work for the Airy Transit Circle at Greenwich), arrived in Ottawa in 1907. Defects in the instrument delayed full operation until 1910, after which it was used by R.M. Stewart's time-service team in the West Wing's Transit House (a building specifically designed for it, with a partially-opening roof and slate louvres rather than glass to maintain temperature equalization). The meridian circle was the primary instrument for measuring meridian transits at the Dominion Observatory until the early 1930s, when its work was progressively taken over by photographic-zenith-tube and other newer instruments.",
            
            timeline: {
                delivered: 1907,
                operational: 1910,
                note: "Delayed due to defects"
            },
            
            location: "Transit House (West Wing)",
            
            purpose: "Determine time, longitude, and star positions",
            usage: "Primary instrument for measuring meridian transits until early 1930s",
            
            citations: ["STEWART 1928", "JARRELL 1988", "WIKIPEDIA 2024"]
        },
        
        {
            id: "photographic-zenith-tube",
            name: "Photographic Zenith Tube (PZT)",
            type: "Precision astrometric and time-determination instrument",
            installed: 1951,
            
            description: "A photographic zenith tube is a specialised telescope mounted permanently in a precisely vertical orientation, pointing straight up. Light from a star passing almost directly overhead enters the lens, is reflected off the perfectly horizontal surface of a small pool of liquid mercury at the bottom of the tube, and is brought to a focus on a photographic plate just below the lens. The plate is moved across the field at the sidereal rate during the exposure, so the star image traces a small streak; the precise position and timing of that streak give both the local sidereal time (and hence the rotation rate of the Earth) and the latitude of the observing site, the two being inseparable in the PZT's geometry. PZTs were the most accurate astronomical timekeepers in use during the mid-twentieth century, achieving precisions of about three milliseconds in time and three hundredths of an arc-second in latitude per night — sufficient to detect the Chandler wobble (the small periodic variation in the Earth's axis) and to monitor the seasonal variations in the Earth's rotation rate. The Dominion Observatory's PZT was installed in 1951 in a dedicated PZT Building (Building No. 8) with a roll-off roof, north of the main Observatory tower. It served as the principal time-and-latitude instrument of the Canadian time service until being superseded by atomic clocks in the early 1970s. The earliest reference work on the Dominion Observatory's PZT is Arthur Covington's 'A Zenith Telescope of Historical Interest' (JRASC vol. 55, no. 6, 1961). PZTs at observatories worldwide were retired between the late 1970s and mid-1980s as satellite laser ranging and very-long-baseline interferometry took over time-and-latitude determination.",
            
            specifications: {
                aperture: { inches: 10, cm: 25.4 },
                focalLength: { inches: 167, cm: 424 }
            },
            
            location: "PZT Building (Building No. 8)",
            purpose: "Precise time and latitude determination; monitoring of Earth's rotation and the Chandler wobble",
            
            citations: ["BEALS 1956", "INGENIUM CHANNEL", "CLARK 1993"]
        },
        
        {
            id: "riefler-clock",
            name: "Riefler Precision Clock",
            type: "Astronomical regulator (precision pendulum clock)",
            manufacturer: "Clemens Riefler firm, Munich, Germany",
            acquired: "1902-09",
            description: "An astronomical regulator clock built by the Clemens Riefler firm of Munich. Riefler clocks, invented and patented by Sigmund Riefler in 1889, were the most accurate all-mechanical pendulum clocks ever made and were adopted as primary time standards by major observatories worldwide between approximately 1890 and the late 1920s. The Riefler escapement supplies energy to the pendulum by flexing the suspension spring rather than by sliding pallets against escape-wheel teeth, which reduces frictional disturbance to the pendulum. The most accurate models (Types A, D, and E) used an Invar pendulum (a low-thermal-expansion nickel-steel alloy invented by C.É. Guillaume in 1896) swinging in an evacuated cylindrical chamber. Riefler clocks served as the U.S. national time standard from 1904 until 1929, when they were replaced by the Shortt free-pendulum clock.",
            specifications: {
                type: "Electrically activated self-winding sidereal clock",
                precision: "Approximately 0.01 seconds per day (15 milliseconds per day for the Invar-pendulum models, per the published literature)",
                function: "Maintained sidereal time at the Dominion Observatory"
            },
            cstmAccession: "1966.0545",
            citations: ["JARRELL 1988"]
        },
        
        {
            id: "shortt-clock",
            name: "Shortt-Synchronome Free-Pendulum Clock",
            type: "Astronomical regulator (precision electromechanical pendulum clock)",
            manufacturer: "Synchronome Company, Ltd., London, UK",
            inventor: "William Hamilton Shortt (1921), in collaboration with Frank Hope-Jones",
            acquired: 1929,
            description: "A two-pendulum precision clock invented in 1921 by British railway engineer W.H. Shortt and produced commercially by the Synchronome Company of London. Approximately 100 units were made between the early 1920s and the mid-1950s, virtually all of them for observatories. The Shortt clock immediately replaced the Riefler as the world's most accurate timekeeper and became the international standard for astronomical timekeeping until quartz clocks superseded it in the late 1940s and early 1950s. The clock comprises a 'master' pendulum sealed in an evacuated copper cylinder, kept swinging by a small electromagnetic impulse delivered for about 0.3 seconds every 30 seconds, and a separate 'slave' pendulum in a precision regulator clock that drives the dial and handles all timekeeping work. The slave is synchronized to the master through a 'hit-and-miss' electrical synchroniser. This arrangement leaves the master pendulum essentially free of mechanical interference. The Shortt clock achieved accuracies of about one second per year and was the first clock more accurate than the Earth's rotation itself — used at Greenwich in 1926 to detect seasonal variations in the rate at which the Earth turns. R.M. Stewart, the second Dominion Astronomer, acquired one for the Dominion Observatory in 1929 to serve as Canada's standard sidereal timekeeper.",
            distinction: "The most accurate pendulum clock ever commercially produced; international observatory time standard from the 1920s to the 1940s",
            associated: "R.M. Stewart acquisition (Dominion Astronomer 1924-1946)",
            citations: ["STEWART 1928", "JARRELL 1988"]
        },
        
        {
            id: "seismographs-bosch-omori",
            name: "Bosch-Omori Seismographs",
            type: "Horizontal-pendulum mechanical seismographs",
            description: "A pair of Bosch-Omori horizontal-pendulum seismographs, recording on smoked paper, installed at the Dominion Observatory in 1906. The instrument was designed by Japanese seismologist Fusakichi Omori (a pupil and colleague of John Milne) and commercialised in modified form by the J. & A. Bosch firm of Strasbourg, who added damping that the original Omori design lacked. Bosch-Omori instruments were inexpensive, simple to operate, and reliable; they 'formed the backbone of the world seismographic network' until after the Second World War. Each instrument used a horizontal pendulum (a beam suspended like a yacht boom, very low in stiffness about its pivot, so the beam stays inertially stationary while the ground moves underneath) with a stylus that scratched a record on a slowly rotating drum of smoked paper.",
            installed: 1906,
            configuration: "Pair: one oriented East-West, the other North-South (so that any horizontal ground motion can be reconstructed from the two records together)",
            notableRecording: {
                event: "San Francisco earthquake (M~7.9)",
                date: "1906-04-18",
                significance: "Within weeks of installation, the new Dominion Observatory seismographs recorded the great San Francisco earthquake from over 4,000 km away, demonstrating the global reach of even modest mechanical seismographs"
            },
            citations: ["HODGSON 1958"]
        },
        
        {
            id: "seismograph-wiechert",
            name: "Wiechert Vertical Seismograph",
            type: "Inverted-pendulum mechanical seismograph",
            manufacturer: "Probably Spindler & Hoyer, Göttingen, Germany",
            description: "A Wiechert seismograph, designed by Emil Wiechert (Professor of Geophysics at the University of Göttingen, 1898-1928). Wiechert's instruments, introduced in 1900, were the first seismographs with viscous damping rigorously theorised — Wiechert published his 'Theory of Automatic Seismographs' in 1903 — and the first to give reliable, quantitatively interpretable records of ground motion. The horizontal version uses an inverted pendulum stabilised by springs, free to oscillate in any horizontal direction; the vertical version uses a different spring-and-mass arrangement to record vertical ground motion. The Spindler & Hoyer firm of Göttingen produced commercial 80-kilogram and (later) 200-kilogram Wiechert instruments. About 180 Wiechert seismographs were installed at over 110 observatories worldwide, several of which remained in operation into the 1980s and 1990s.",
            installed: "1912-03",
            specifications: { mass: "80 kg" },
            citations: ["HODGSON 1958"]
        },
        
        {
            id: "seismographs-milne-shaw",
            name: "Milne-Shaw Seismographs",
            type: "Horizontal-pendulum seismographs with electromagnetic damping",
            inventor: "John Johnson Shaw, modifying a design by John Milne",
            description: "Improved horizontal-pendulum seismographs designed by John Johnson Shaw (a West Bromwich pawnbroker who became fascinated with seismology) on the basis of Milne's earlier instruments. Milne's 1890s horizontal pendulums were the foundation of the first international earthquake-monitoring network (about 50 stations established under his Royal Society funding from 1897). After Milne's death in 1913, Shaw produced the Milne-Shaw, which added higher magnification and electromagnetic damping to address widely acknowledged technical flaws in the original design. The Milne-Shaw became one of the dominant instruments in the British Empire seismological network from the 1920s through the 1940s.",
            installed: 1922,
            quantity: 2,
            additionalInstallation: {
                location: "Ste-Anne-de-la-Pocatière, Quebec",
                period: "1925-04 to 1927-06",
                purpose: "Field deployment for the study of the 1925 Charlevoix-Kamouraska earthquake (M~6.2, 28 February 1925, the largest historical earthquake in eastern Canada)"
            },
            citations: ["HODGSON 1958"]
        },
        
        {
            id: "mendenhall-pendulum",
            name: "Mendenhall Double Pendulum Apparatus",
            type: "Half-second-pendulum gravity-measuring apparatus",
            manufacturer: "U.S. Coast and Geodetic Survey design (1890); fabricated by Fauth & Co. and later by George N. Saegmuller, both of Washington, DC. The Ingenium Museum's Dominion Observatory specimen is a Saegmuller instrument.",
            description: "A pendulum gravity apparatus developed in 1890 by Thomas C. Mendenhall, then Superintendent of the U.S. Coast and Geodetic Survey, building on earlier work by the Austrian geodesist Robert von Sterneck. The Mendenhall pendulum consists of a pair of identical bronze half-second pendulums swinging in an evacuated and temperature-controlled bronze chamber; the period of swing is timed precisely against an astronomical clock, giving a measurement of local gravitational acceleration. The brass pendulums of the original design were later replaced with Invar (the same low-thermal-expansion alloy used in precision pendulum clocks), and the quartz knife-edge pivots were ground to within one micron of straight. Roughly 340 Mendenhall stations were established in U.S. territory in the 1890s and the apparatus was carried on overseas expeditions to Germany, the Netherlands, Java, the Philippines, the West Indies, Mexico, and Canada. Mendenhall pendulum apparatus continued in service for geodetic gravity work until about 1960.",
            acquired: "Used by Klotz on loan/exchange with the U.S. Coast and Geodetic Survey",
            firstMeasurement: {
                date: 1902,
                location: "Basement of old Supreme Court building, Ottawa",
                by: "Otto Klotz",
                significance: "First precise gravity measurement made by the Canadian government, performed before the Dominion Observatory building was completed; Klotz later carried out further ties between Ottawa and Washington and measurements at Montreal and Toronto. Per Natural Resources Canada, no further Canadian gravity observations were made between 1902 and F.A. McDiarmid's resumption of the work in 1914."
            },
            distinction: "The first systematic Canadian government gravity observation",
            citations: ["KLOTZ 1902", "NRCAN GEODETIC"]
        },
        
        {
            id: "brashear-wedge-photometer",
            name: "Brashear Wedge Photometer",
            type: "Visual stellar photometer (neutral-density wedge type)",
            manufacturer: "John A. Brashear Co., Pittsburgh, Pennsylvania",
            acquired: 1903,
            description: "A stellar photometer working on the neutral-density-wedge principle: a long strip of glass whose tint deepens uniformly along its length is moved across the path of starlight in the eyepiece, gradually dimming the star's image. The wedge is moved by a calibrated screw until the star matches a reference brightness (such as an artificial comparison star or a fainter real star nearby); the screw position then gives the magnitude difference. Wedge photometers were a standard tool of visual stellar photometry from the 1890s into the 1930s, when they were superseded by photoelectric photometers. The instrument at the Dominion Observatory was made by the Pittsburgh optical firm of John A. Brashear, who supplied the optics for both the 15-inch refractor (1903) and the coelostat used on the 1905 Labrador eclipse expedition.",
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
            
            description: "Surveyor, astronomer, and civil servant; first Director of the Dominion Observatory (1905–1916). King was born in Stowmarket, Suffolk, England, and emigrated with his family to Port Hope, Canada West at age eight. His proficiency in mathematics earned him a post in 1872 as sub-assistant astronomer on the international boundary survey in western Canada, before he completed his B.A. (with honours, gold medal in mathematics) at the University of Toronto in 1874. After serving as Inspector of Surveys (1881) and Chief Inspector (1886), he was appointed Chief Astronomer of the Department of the Interior on 1 July 1890. Together with Otto Klotz and É.-G. Deville he agitated for a national observatory from 1887 onwards; financing was secured under Clifford Sifton in 1899, ground was broken in 1902, and the Dominion Observatory opened at the Central Experimental Farm in spring 1905 with King as first Director. King also served as British Commissioner on the Canada–U.S. boundary (1892–1913, including the Alaska Boundary dispute), was a founding figure of the trigonometric survey of Canada (begun 1905 with the Dominion Observatory as base), and became first superintendent of the Geodetic Survey of Canada when it was established in 1909. Although his own research was modest — focused on the calculation of binary star orbits — he gave his mechanical superintendent J.S. Plaskett a free hand to develop the Observatory's astrophysical programme, and from 1911 onwards lobbied successfully alongside Plaskett for the funding of what became the Dominion Astrophysical Observatory in Victoria. He was awarded the LL.D by the University of Toronto for his Alaska boundary work (1904), made CMG (1908), elected Fellow of the Royal Society of Canada (1908) and President of the RSC (1911–1912). Parks Canada has designated him a National Historic Person; his commemorative plaque stands at the Dominion Observatory.",
            
            character: "Per the Dictionary of Canadian Biography, King was respected for his integrity, intellect, and analytical mind, with a notable 'reticence, modesty and lack of self-assertion.'",
            
            citations: ["BIOGRAPHI", "PARKS CANADA NHSC", "INGENIUM CHANNEL", "CSTM 1994", "HUCKER 1992", "CLARK 1993"]
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
            
            description: "Astronomer, Dominion Land Surveyor, and second Director of the Dominion Observatory (1917–1923). Klotz was born in Preston (now part of Cambridge), Canada West, the son of Otto Klotz Sr. and Elise Wilhelm. Educated at Galt Grammar School, the University of Toronto (entered on scholarship 1869), and the University of Michigan at Ann Arbor (Civil Engineering, 1872) — where he studied with the astronomer James Craig Watson at the Detroit Observatory — Klotz began federal service in 1879 as a contract surveyor with the Department of the Interior. In 1885 he was assigned chief of astronomical observations in British Columbia and the North-West, becoming the first person officially designated 'astronomer' in the Dominion of Canada. He worked on the B.C. Railway Belt Survey (1885–1890), the Alaska panhandle survey (1893–1894), and the South Pacific 'All Red Line' longitude expedition (1903–1904, fixing the longitudes of the new Vancouver–Australia–New Zealand telegraph cable). Klotz moved formally to Ottawa in 1892 to assist King in establishing the Cliff Street Observatory, and from 1908 served as Assistant Chief Astronomer at the new Dominion Observatory. After King's death in 1916, the post was vacant for some time (Klotz served as Acting Chief Astronomer through anti-German sentiment during the First World War) until the entire scientific staff signed a memorandum of support and Klotz was confirmed as Chief Astronomer in September 1917, then Director of the Dominion Observatory the following year. He established the Observatory's seismic operations in 1906 (the first systematic Canadian government seismology) and conducted the first systematic Canadian government gravity measurement in 1902, using a Mendenhall pendulum apparatus in the basement of the old Supreme Court building. He kept a daily diary from age 14 in 1866 until his death in 1923 — except for two days when he crossed the international date line — now preserved at Library and Archives Canada (R6645-0-4-E / MG30-B13). He served as President of the RASC (1908) and the Seismological Society of America (1920), and as Vice-President of the American Astronomical Society (1920). Parks Canada has designated him a National Historic Person; a commemorative plaque stands at Central Park, Cambridge, Ontario.",
            
            citations: ["BIOGRAPHI", "PARKS CANADA NHSC", "INGENIUM CHANNEL", "CSTM 1994", "HUCKER 1992", "CLARK 1993"]
        },
        
        {
            id: "john-stanley-plaskett",
            name: "John Stanley Plaskett",
            birth: { year: 1865, date: "1865-11-17", place: "Hickson (near Woodstock), Ontario" },
            death: { year: 1941, date: "1941-10-17", place: "Esquimalt, British Columbia" },
            
            education: {
                institution: "University of Toronto",
                degree: "B.A. Physics and Mathematics (with honours)",
                graduated: 1899,
                note: "Plaskett began undergraduate studies in 1895 at age 30 while working as a foreman / mechanician in the University of Toronto Physics Department, having previously done mechanical and electrical work for the Edison Company in Schenectady, NY and Sherbrooke, QC."
            },
            
            ottawaYears: "1903–1917",
            
            description: "Astronomer at the Dominion Observatory from 1903, hired by Chief Astronomer W.F. King to superintend the installation of equipment at the new Observatory then under construction. Plaskett's combination of practical mechanical skill, photographic expertise (he had done research in colour photography at Toronto), and a late-blooming undergraduate physics background suited the Observatory's astrophysical ambitions. From 1907 onwards he attached a spectrograph of his own design to the 15-inch refractor; the published assessment is that this instrument 'made the telescope at Ottawa equivalent to much larger instruments,' giving the Ottawa programme a radial-velocity output competitive with the Yerkes refractor. He measured the radial velocities of thousands of stars over the next decade and computed orbits of spectroscopic binaries, work continued in Ottawa by William Edmund Harper. Plaskett was the scientific leader of the 1905 Dominion Observatory expedition to Labrador to observe a total solar eclipse (administratively led by King); the expedition was clouded out at totality but Plaskett was commended for the rigour of his preparation. He attended the August 1910 meeting of the International Solar Union at Pasadena, returning to Ottawa with the conviction that Canada needed a much larger telescope. With King's enthusiastic backing, Plaskett successfully lobbied the federal government to fund a 72-inch reflector; contracts were signed in 1913. In 1917, with the new instrument approaching completion, Plaskett left Ottawa for Victoria, BC, to direct what became the Dominion Astrophysical Observatory.",
            
            ottawaCareer: [
                { year: 1903, role: "Hired by Dominion Observatory as mechanician/astronomer; assigned care of instruments" },
                { year: 1905, role: "Scientific leader of the 1905 Labrador solar eclipse expedition (administratively led by W.F. King)" },
                { period: "1903-1917", role: "Initiated astrophysical research at Ottawa; designed spectrograph that made the 15-inch refractor competitive with much larger instruments; measured radial velocities of thousands of stars; studied spectroscopic binaries" },
                { year: 1910, role: "Attended International Solar Union meeting at Pasadena; returned with vision for a much larger Canadian telescope" },
                { year: 1913, role: "Persuaded Canadian government to fund a 72-inch reflector (with W.F. King's support); contracts signed" },
                { year: 1917, role: "Departed Ottawa for Victoria, BC, to direct the new Dominion Astrophysical Observatory (opened 1918)" }
            ],
            
            rascRoles: [
                { role: "Active member, RASC Ottawa Centre", years: "1907-1918" },
                { role: "Associate Editor, Journal of the Royal Astronomical Society of Canada", years: "approximately 28 years" },
                { role: "President, Royal Astronomical Society of Canada", years: "1914-1915" }
            ],
            
            note: "After 1917, Plaskett's career belonged to the Dominion Astrophysical Observatory in Saanich/Victoria, BC, where he served as first director until 1935. His Ottawa work — particularly the Ottawa spectrograph and the radial-velocity programme — laid the scientific groundwork for the DAO. The 72-inch (1.83 m) Plaskett Telescope, his discovery of 'Plaskett's Twins' (a massive binary star, 1922), his confirmation of the Lindblad-Oort galactic-rotation model, and his 1934 Henry Draper Medal are properly part of the DAO's history, not Ottawa's.",
            
            citations: ["RASC 1994", "JARRELL 1988", "CLARK 1993"]
        },
        
        {
            id: "robert-meldrum-stewart",
            name: "Robert Meldrum Stewart",
            nickname: "'Bert'",
            birth: { year: 1878, date: "1878-12-15", place: "Gladstone, Manitoba" },
            death: { year: 1954, date: "1954-09-02" },
            
            education: {
                institution: "University of Toronto",
                graduated: 1902,
                distinction: "Gold Medal in Mathematics and Physics"
            },
            
            background: "Born into a missionary family in Gladstone, Manitoba. Until he entered high school in Ontario at age 11, his only teacher was his father, who instilled in him a love of classics, literature, and astronomy. Won many scholarships at the University of Toronto and graduated with the Gold Medal in Mathematics and Physics in 1902.",
            
            description: "Astronomer at the Dominion Observatory from 1902 (immediately on graduation from the University of Toronto with the Gold Medal in Mathematics and Physics) and second Dominion Astronomer / Director of the Observatory, succeeding Klotz on the latter's death at the end of 1923. Stewart's career spanned the Observatory's full classical era. From the building's opening in April 1905, he was put in charge of the meridian-circle work and the time service; by 1918 he was Assistant Director, and in 1924 he succeeded Klotz as Director and held the post until his retirement in 1946. He built up Canada's national time service almost from scratch: by 1930 the Dominion Observatory's time signal — derived from observations with the Troughton & Simms meridian circle and held against the Riefler regulator clock — was being distributed by electrical lines to roughly 700 clocks in Ottawa-area federal buildings. In 1929 he acquired the Shortt-Synchronome free-pendulum clock as Canada's standard sidereal timekeeper, replacing the older Riefler. As Director, he oversaw the most controversial episode of the Observatory's history — the apparent 'Planet X / Planet Y' announcement of April 1930 by Henroteau and Burland — and contributed the 'Astronomical Phenomena' sections to the RASC Observer's Handbook for many years. He served as President of the Royal Astronomical Society of Canada in 1924–25, the same period as his elevation to the Directorship.",
            
            career: [
                { year: 1902, role: "Appointed by the federal government to the staff of the Chief Astronomer's Office, Department of the Interior, immediately on graduation" },
                { year: 1905, role: "At the Dominion Observatory's opening: put in charge of the meridian-circle work and the time service" },
                { year: 1918, role: "Assistant Director of the Dominion Observatory" },
                { period: "1924-1946", role: "Dominion Astronomer / Director of the Dominion Observatory (succeeded Klotz, who died in December 1923)" },
                { year: 1946, role: "Retired" }
            ],
            
            achievements: [
                "Built up Canada's national time service from the ground up",
                "By 1930, distributed the Dominion Observatory's time signal to roughly 700 clocks in Ottawa-area federal buildings via electrical lines",
                "Acquired the Shortt-Synchronome free-pendulum clock as Canada's standard sidereal timekeeper (1929)",
                "Oversaw the apparent 'Planet X / Planet Y' announcement of 1930 by Henroteau and Burland",
                "Contributed 'Astronomical Phenomena' sections to the RASC Observer's Handbook for many years"
            ],
            
            rascRoles: [
                { role: "President, Royal Astronomical Society of Canada", years: "1924-1925" }
            ],
            
            citations: ["STEWART 1928", "RASC STEWART", "CLARK 1993"]
        },
        
        {
            id: "william-edmund-harper",
            name: "William Edmund Harper",
            birth: { year: 1878, date: "1878-03-20", place: "Dobbington, Ontario" },
            death: { year: 1940, date: "1940-06-04", place: "Victoria, BC" },
            
            education: {
                institution: "University of Toronto",
                graduated: 1906,
                distinction: "First winner of the RASC Gold Medal (1906)",
                masters: "M.A., University of Toronto, 1907"
            },
            
            ottawaYears: "1906–1919",
            
            description: "Astronomer at the Dominion Observatory from 1906, immediately on graduation from the University of Toronto, where he had been the inaugural recipient of the RASC Gold Medal. At the Dominion Observatory, Harper joined the astrophysics staff alongside John Stanley Plaskett, measuring radial velocities of stars and determining the orbits of spectroscopic binaries (binary stars too close together to be resolved with a telescope, whose orbital motion is detected via Doppler shifts in their spectra). In 1913 the federal government approved Plaskett's proposed new astrophysical observatory in British Columbia, and Harper was sent on a national site-search mission, evaluating observing conditions at various locations; Observatory Hill near Victoria was selected. Harper transferred to the new Dominion Astrophysical Observatory in Victoria in 1919.",
            
            career: [
                { year: 1906, role: "Joined Dominion Observatory staff (Ottawa) — first such staff appointment after the Observatory opened" },
                { year: 1913, role: "Conducted national site-search mission for the proposed new astrophysical observatory" },
                { year: 1919, role: "Transferred to the Dominion Astrophysical Observatory, Victoria, BC" }
            ],
            
            note: "Harper's Victoria career (1919–1940), where he eventually became second Director of the DAO from 1936, is documented elsewhere; only his Ottawa years are summarized here, per the scope of this archive. He was a councillor of the AAS, a Fellow of the Royal Society of Canada, and was credited during his lifetime with computing more spectroscopic binary orbits than any other astronomer in the world.",
            
            rascRoles: [
                { role: "First winner, RASC Gold Medal", year: 1906 },
                { role: "President, RASC Victoria Centre", year: 1922 },
                { role: "President, Royal Astronomical Society of Canada", years: "1928-1929" }
            ],
            
            honor: { degree: "Honorary Doctorate", institution: "University of Toronto", year: 1935 },
            
            citations: ["RASC HARPER", "WIKIPEDIA 2024", "CLARK 1993"]
        },
        
        {
            id: "carlyle-smith-beals",
            name: "Carlyle Smith Beals",
            birth: { year: 1899, date: "1899-06-29", place: "Canso, Nova Scotia" },
            death: { year: 1979, date: "1979-07-02", place: "Ottawa, Ontario" },
            
            description: "Astrophysicist and third Dominion Astronomer / Director of the Dominion Observatory (1947–1964). Beals's career divided into two phases: his earlier work at the Dominion Astrophysical Observatory in Victoria (1927–1946), where he made his international reputation studying the spectra of hot stars (the bright supergiant P Cygni and the very hot Wolf–Rayet stars) and was the first to quantitatively measure interstellar absorption lines of sodium and calcium — work that helped establish the existence of cool, diffuse interstellar gas; and his later work at Ottawa (1946 onwards), where he was appointed Acting Dominion Astronomer in November 1946 and confirmed in May 1947. As Director, Beals modernized the Observatory's seismological, gravimetric, magnetic, and solar facilities; reorganized the official time service; installed new telescopes at sites across Ontario, Alberta, and British Columbia; and — perhaps most consequentially for the future of Canadian astronomy — oversaw the establishment of the Dominion Radio Astrophysical Observatory at Penticton, BC, from his Ottawa office. His most distinctive Ottawa-era contribution was launching the Dominion Observatory's systematic Canadian Shield meteorite-impact-crater research programme (1955 onwards), which used 200,000 aerial photographs to identify and confirm impact structures across Canada. Beals's programme did not personally discover Brent (Spartan Air Services, 1951) or New Quebec / Pingualuit (Royal Ontario Museum, 1950) but confirmed both as impact structures and identified Holleford (1955) as the first impact crater recognized by the Dominion Observatory itself; the programme ultimately yielded a list of dozens of confirmed Canadian impact craters and established Canada as a world centre for impact-crater research. After retirement (1964) he continued analyzing Apollo lunar photographs and edited the volume Science, History and Hudson Bay (1967). He was elected Fellow of the Royal Society of London (1951), appointed to the Order of Canada, served as President of the RASC (1951–1953), and is commemorated by both an asteroid (3314 Beals) and a lunar crater bearing his name.",
            
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
            
            citations: ["BEALS 1979", "RASC BEALS", "CLARK 1993", "INGENIUM 2024", "LAC BEALS"]
        },
        
        {
            id: "francois-henroteau",
            name: "François Charles Pierre Henroteau",
            nationality: "Belgian-Canadian",
            birth: { year: 1889, place: "Liège, Belgium" },
            
            role: "Head of the Physical Astronomy / Astrophysics Department, Dominion Observatory",
            
            description: "Belgian-born astronomer who headed the physical astronomy (astrophysics) department at the Dominion Observatory. With Miriam Burland, conducted the 1924-1930 photographic plate reanalysis that produced the apparent 'Planet X / Planet Y' announcement of April 1930. The two of them calculated where a hypothetical trans-Neptunian planet should appear on plates from 1920-1924, then searched the Observatory's photographic plate collection for it, working 80-100 hours over 10 days. The original plates have since been lost (only newspaper-reproduced images survive). Subsequent reassessment suggests that what they identified as a moving object was probably a series of plate flaws.",
            
            keyAssociation: "Co-author with Burland of the 1930 'Planet X/Y' apparent discovery",
            
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
            
            citations: ["INGENIUM CHANNEL", "BROOKS 2005 CASCA", "CLARK 1993"]
        },
        
        {
            id: "miriam-seymour-burland",
            name: "Miriam Seymour Burland",
            nickname: "'Mim'",
            birth: { year: 1902, place: "Saint-Lambert / Montreal, Quebec" },
            death: { year: 1996, date: "1996-04-01", place: "Ottawa" },
            
            education: {
                institution: "McGill University",
                graduated: 1926,
                degree: "B.A. in Mathematics and Physics",
                mentor: "Allie Vibert Douglas, prominent Canadian astronomer"
            },
            
            distinction: "First woman astronomer on staff at the Dominion Observatory (joined 1927)",
            
            joinedDominionObservatory: 1927,
            retired: "1967-09-22",
            
            description: "Joined the Astrophysics Division of the Dominion Observatory in 1927 as the first woman astronomer on its staff, having studied under A.V. Douglas at McGill. Her primary responsibility through the 1930s was photoelectric photometry of Cepheid variable stars using the 15-inch (38 cm) refractor. With François Henroteau, she carried out the 1924–1930 plate analysis that produced the apparent 'Planet X / Planet Y' announcement of April 1930, the most controversial episode of the Dominion Observatory's history. From 1934 onwards, encouraged by Peter Millman, she joined the meteor observation programme of the RASC's Ottawa Centre alongside Malcolm Thomson, eventually organizing observers and reducing the data herself; she co-coordinated the Canadian meteor observation programme for the International Geophysical Year (1957–1958) with Millman. During the Second World War she was transferred to the Seismology Division before returning to astronomy. From the mid-1950s, as the only woman astrophysicist on staff, she also served as the Observatory's education and public information liaison, compiling reports, arranging public tours, and answering inquiries. She participated in three Canadian solar eclipse observations (1932, 1954, 1962). She was a member of the National Committee for Canada in the International Astronomical Union throughout the 1960s, and was among the Observatory's representatives at the opening of the Dominion Radio Astrophysical Observatory in 1960. She mentored Mary Grey, who succeeded her as a Dominion Observatory astronomer. Burland retired on 22 September 1967.",
            
            rascRoles: [
                { role: "Secretary, RASC Ottawa Centre", years: "1930-1933" },
                { role: "Vice-President, President, then Honorary President, RASC Ottawa Centre", years: "1935-1941" },
                { honor: "RASC Service Award", year: 1963 }
            ],
            
            notableAnecdote: "Per Randall Brooks's CASCA 100th-anniversary article: 'Mim Burland became the first woman in the Canadian government service to wear pants on the job — a necessity while observing long hours in Ottawa's chilly winters. However, it took a ministerial waiver to do so!'",
            
            citations: ["RASC BURLAND", "WIKI BURLAND", "ARCHEION BURLAND", "BROOKS 2005 CASCA", "INGENIUM CHANNEL"]
        },
        
        {
            id: "mary-grey",
            name: "Mary Grey",
            birth: { year: 1927 },
            death: { year: 1996 },
            role: "Astronomer at the Dominion Observatory; mentored by Miriam Burland; the last Dominion Observatory staff astronomer at the time of the Observatory's 1970 closure",
            description: "Mary Grey joined the Dominion Observatory as an astronomer and was mentored by Miriam Burland (who had carried out the 1924-1930 Planet X/Y reanalysis with Henroteau). Grey was responsible for much of the public outreach in the Observatory's later years, regularly opening the 15-inch refractor for public 'Saturday Astronomy Nights.' When the Dominion Observatory's astronomy programme was wound up in 1970, Grey championed the controversial decision to remove the 15-inch refractor from its Carling-Avenue dome and relocate it to a new dome on the grounds of the (then) National Museum of Science and Technology, where she became Curator of Astronomy and Physics. The new museum dome opened in January 1975 and was renamed the Helen Sawyer Hogg Observatory in 1989. Grey kept the historic telescope in active use for public education, launching an Astronomy Programme Family Night for evening stargazing. She is widely credited with ensuring that the Dominion Observatory's instrument heritage — and the original sandstone building itself — survived the 1970 closure.",
            rascRoles: [
                { role: "President, Royal Astronomical Society of Canada", years: "1986-1988" },
                { honor: "RASC Service Award", year: 1990 }
            ],
            post1970: "Curator of Astronomy and Physics at the (then) National Museum of Science and Technology, now Ingenium / Canada Science and Technology Museum",
            citations: ["INGENIUM CHANNEL", "ODELL 2020", "CLARK 1993"]
        },
        
        {
            id: "ralph-delury",
            name: "Ralph DeLury",
            title: "Dr.",
            role: "Solar astronomer at the Dominion Observatory",
            description: "Solar astronomer at the Dominion Observatory, best known for measuring the differential rotation of the Sun. By analyzing a series of solar photographs taken with the Observatory's coelostat solar telescope in the 1930s, DeLury demonstrated that the Sun rotates at different rates at different solar latitudes — slower at higher latitudes, faster near the equator — a measurement that confirmed and refined the differential-rotation phenomenon for the Sun's surface. His work used a specially marked globe, now preserved at the National Research Council library, on which he plotted sunspot latitudes against time. DeLury's solar programme was an extension of the Dominion Observatory's broader contribution to solar physics that began with the 1905 Labrador eclipse expedition and continued (under successor institutions) until 1993.",
            contribution: "Determined the rate of solar rotation as a function of latitude (1930s) using the Dominion Observatory coelostat",
            citations: ["INGENIUM CHANNEL", "CLARK 1993"]
        },
        
        {
            id: "peter-millman",
            name: "Peter MacKenzie Millman",
            birth: { year: 1906, place: "Toronto (raised mainly in Japan, where his father was a missionary)" },
            death: { year: 1990 },
            education: [
                { institution: "University of Toronto", year: 1929, distinction: "B.A. with RASC Gold Medal" },
                { institution: "Harvard University", degrees: "A.M. and Ph.D.", note: "Influenced by Willard Fisher, who inspired Millman's lifelong interest in meteors" }
            ],
            career: [
                { period: "1933-1941", role: "Lecturer in Astronomy, University of Toronto" },
                { period: "1941-1945", role: "Royal Canadian Air Force, rising to Squadron Leader (organised airborne eclipse and meteor expeditions during the war)" },
                { period: "1946-1955", role: "Astronomer at the Dominion Observatory, Ottawa; eventually Chief of the Stellar Physics Division" },
                { period: "1955-1971", role: "Head of Upper Atmosphere Research, National Research Council of Canada (after the meteor programme moved to NRC)" }
            ],
            description: "Pioneering Canadian meteor scientist, internationally recognised authority on meteors and meteorites. Millman photographed the first meteor spectrum in December 1931 (during his Harvard graduate work) and substantially increased the world's stock of meteor spectra during the early 1930s. At the Dominion Observatory after the war, he co-led the Canadian Shield meteorite-crater search programme under Beals's direction; he co-authored the foundational 1960 Dominion Observatory publication on the Brent Crater (Millman, Liberty, Clark, Willmore, and Innes). With D.W.R. McKinley he developed combined visual, photographic, and radar meteor observation programmes at Ottawa from 1947 onwards. Millman started 'Meteor News' in JRASC in 1933 and contributed the meteors section to the RASC Observer's Handbook for 49 years. His personal library and meteorite specimens form the Millman Meteoritics Collection at the RASC Archives.",
            rascRoles: [
                { role: "President, Royal Astronomical Society of Canada", years: "1960-1962" }
            ],
            collaborators: "C.S. Beals, Ian Halliday, M.J.S. Innes, D.W.R. McKinley",
            note: "Did not personally 'discover' Brent (which was first spotted by John A. Roberts of Spartan Air Services in 1951) but co-authored the foundational scientific publication on the structure as an impact crater.",
            citations: ["RASC MILLMAN", "CLARK 1993"]
        },
        
        {
            id: "ian-halliday",
            name: "Ian Halliday",
            birth: { year: 1928, place: "Lloydminster, Saskatchewan" },
            death: { year: 2018 },
            education: [
                { institution: "University of Toronto", year: 1949, distinction: "B.A. with RASC Gold Medal" },
                { institution: "University of California, Berkeley", note: "One year visiting" },
                { institution: "University of Toronto", degrees: "M.A. and Ph.D." }
            ],
            career: [
                { year: 1952, role: "Joined the Positional Astronomy Division, Dominion Observatory" },
                { period: "post-Ph.D.", role: "Transferred to the Stellar Physics Division (Dominion Observatory), specialising in meteor spectroscopy" },
                { period: "1970-onwards", role: "Senior Research Officer, Planetary Sciences Section, National Research Council (after the Dominion Observatory's astronomy programme closed in 1970)" }
            ],
            description: "Meteor and impact-crater astronomer at the Dominion Observatory, joining the institution in 1952 as a young U of T graduate (he won the RASC Gold Medal in 1949). After completing his doctorate, Halliday transferred to the Stellar Physics Division and specialised in meteor spectroscopy. He contributed to the Beals-led Canadian Shield crater-research programme through the late 1950s and 1960s. After the Dominion Observatory's astronomy work was transferred to NRC in 1970, Halliday continued his meteor and crater research and went on to establish the Meteorite Observation and Recovery Project (MORP), a twelve-station camera network across western Canada that operated 1970-1985 and produced one of the world's most carefully calibrated fireball-orbit datasets. He also worked on Pluto's diameter and on Comet Halley imaging in the 1986 apparition.",
            rascRoles: [
                { role: "Editor, Journal of the Royal Astronomical Society of Canada", years: "1970-1975" },
                { role: "President, Royal Astronomical Society of Canada", years: "1980-1982" },
                { role: "Honorary President, RASC", years: "1989-1993" },
                { honor: "RASC Service Award", year: 1974 },
                { honor: "Minor planet named in his honour" }
            ],
            collaborators: "C.S. Beals, Peter Millman",
            citations: ["RASC HALLIDAY", "CLARK 1993"]
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
        { year: 1923, event: "Death of Otto Klotz (28 December)", category: "personnel", citations: ["CSTM 1994", "BIOGRAPHI"] },
        { year: 1924, event: "R.M. Stewart succeeds Klotz as Dominion Astronomer / Director of the Dominion Observatory (per RASC biographical record; Stewart was Assistant Director from 1918)", category: "personnel", citations: ["RASC STEWART"] },
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
            description: "In April 1930 the Dominion Observatory's astrophysics department, led by François Henroteau and including Miriam Burland, announced what they believed to be a trans-Neptunian planet — sometimes referred to in the Canadian press as 'Planet Y' to distinguish it from Lowell Observatory's recently announced Pluto.",
            platesFrom: "February 1924 (also 1906 and 1909 archival plates)",
            announcement: 1930,
            by: "François Henroteau and Miriam Seymour Burland",
            note: "The reanalysis was prompted by Tombaugh's 1930 discovery of Pluto: Henroteau and Burland searched the Dominion Observatory's photographic plate collection for the predicted trans-Neptunian planet, working 80-100 hours over 10 days to locate a candidate object on plates from 1920-1924, then a further 70 hours computing its orbit. The claimed object was never confirmed; the original plates were later lost (only newspaper-reproduced images survive). Subsequent reassessment suggests that what they identified as a moving object was probably a series of plate flaws. The episode is historically significant primarily for the public attention it brought to Canadian astronomy and as an example of women's participation in early Canadian government astronomy.",
            citations: ["INGENIUM CHANNEL", "BROOKS 2005 CASCA", "CLARK 1993"]
        },
        {
            id: "solar-rotation",
            title: "Solar Rotation Studies",
            description: "Throughout the 1930s, Dr. Ralph DeLury of the Dominion Observatory carried out a sustained programme of solar photography and spectroscopy using the Observatory's coelostat — a two-mirror solar instrument acquired by W.F. King for the 1905 Labrador eclipse expedition. By comparing positions of sunspots and other surface features on solar photographs taken on different days, DeLury was able to demonstrate that the Sun rotates differentially: rather than turning as a rigid body, the solar surface rotates faster at the equator than at higher latitudes. (This had been suggested as early as 1630 by Christoph Scheiner from sunspot observations, but DeLury contributed careful Canadian measurements to a research programme then being pursued at observatories around the world.) The differential rotation of the Sun is now understood to be a consequence of the Sun's plasma being a fluid rather than a solid body, and is a central feature of solar physics — connected to the magnetic dynamo, the 22-year solar cycle, and the geometry of sunspot generation.",
            by: "Ralph DeLury",
            period: "1930s",
            instrument: "Dominion Observatory coelostat (Brashear optics, originally ordered for the 1905 Labrador eclipse expedition)",
            method: "Comparison of solar surface features (sunspots and others) on a long series of photographic plates taken on different days; latitude-dependent rotation rate determined from the apparent drift of features at different solar latitudes",
            significance: "Contributed Canadian measurements to the international solar-rotation research programme of the 1930s; an early example of the Dominion Observatory using its solar-physics equipment for fundamental astrophysical research rather than only for time-and-position work",
            citations: ["INGENIUM CHANNEL", "CLARK 1993"]
        },
        {
            id: "meteor-craters-program",
            title: "Canadian Shield Meteorite Impact Crater Research",
            description: "From the mid-1950s, under Dominion Astronomer C.S. Beals, the Dominion Observatory ran a systematic programme to identify and confirm meteorite impact structures across the Canadian Shield. The work — conducted with Peter Millman, Ian Halliday, M.J.S. Innes and others — combined the comparison of approximately 200,000 aerial photographs from the National Air Photo Library and the Department of National Defence with field geological investigation. It established Canada as a world centre for impact-crater research and yielded a list of dozens of confirmed Canadian impact structures.",
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
            significance: "Established Canada as a world centre for impact-crater research; the Dominion Observatory's foundational publication is the 1960 Dominion Observatory Publication v. 24 (Millman, Liberty, Clark, Willmore, and Innes) on the Brent Crater.",
            citations: ["BEALS 1979", "RASC BEALS", "RASC MILLMAN", "RASC HALLIDAY", "CLARK 1993"]
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
            period: "1905; 1954 (the two confirmed Dominion Observatory eclipse expeditions)",
            description: "From its earliest months of operation, the Dominion Observatory mounted field expeditions to total solar eclipses, an activity central to early-twentieth-century solar physics. Two expeditions are well-attested in the available secondary literature: the August 1905 Labrador expedition (the Observatory's first field expedition, in the year of its opening) and the June 1954 Smoky Falls expedition.",
            expeditions: [
                {
                    year: 1905,
                    date: "1905-08-30",
                    location: "Labrador",
                    scientificLeader: "John S. Plaskett",
                    administrativeLeader: "W.F. King (Dominion Observatory Director)",
                    participants: "Members of the Royal Greenwich Observatory and six members of the Royal Astronomical Society of Canada (RASC), proposed by the RASC and accepted by the federal government",
                    equipment: "Coelostat ordered by King for the expedition (Brashear optics, 20-inch silvered front-face mirror, 2,500 pounds in 15 transport boxes); spectrographs and other solar imaging equipment; magnetic recording instruments under W. Menzies of the Agincourt Magnetic Observatory",
                    transport: "First section sailed from Quebec City on the SS King Edward (a 150-foot steel coastal steamer) on the evening of Friday, 4 August 1905, with the steamship Aronmore",
                    result: "Clouded out at the moment of totality. Plaskett was nonetheless commended for the rigour of his preparation and the quality of his subsequent scientific report.",
                    significance: "The expedition was the Dominion Observatory's first field operation, conducted in the same year the building opened. C.A. Chant (then RASC President) published a first-hand account in Acta Victoriana that was later reprinted on the RASC's website. Plaskett documented the expedition photographically; the Canadian Eclipse Expedition 1905 photograph album survives at Ingenium (artifact 1974.0754).",
                    citations: ["RASC LABRADOR 1905", "BIOGRAPHI", "INGENIUM CHANNEL"]
                },
                {
                    year: 1954,
                    date: "1954-06-30",
                    location: "Smoky Falls, Ontario (Mattagami River, northern Ontario, in the path of totality)",
                    photographer: "Unverified — existing data lists 'J.L. Locke' but the primary publication record could not be confirmed in this archive",
                    eclipseContext: "The total solar eclipse of 30 June 1954 had a path of totality that began at sunrise over the U.S. Midwest, crossed into Canada through northern Ontario and Quebec, and continued across southern Greenland, Iceland, the Faroe Islands, and Scandinavia. Maximum totality was 2 minutes 35 seconds. Approximately 400 scientists worldwide deployed to observe the event.",
                    citations: ["CLARK 1993"],
                    researchNote: "A JRASC paper on the 1954 eclipse in Northern Canada exists (bibcode 1954JRASC..48...33H, author surname beginning with H — not yet identified). Anyone wishing to expand this entry should consult that paper directly via NASA ADS, and the JRASC volumes 47-49 generally for any Locke-authored expedition reports."
                }
            ],
            citations: ["CLARK 1993", "RASC LABRADOR 1905", "BIOGRAPHI", "INGENIUM CHANNEL"]
        }
    ]
};

// Make data available globally
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ObservatoryData;
}
