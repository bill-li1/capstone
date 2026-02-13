import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";

// Section IDs (used for anchor navigation)
const SECTION_IDS = {
  site: "site",
  plans: "plans",
  elevations: "elevations",
  sections: "sections",
  sustainability: "sustainability",
  structure: "structure",
  hvac: "hvac",
  plumbing: "plumbing",
  solar: "solar",
  renderings: "renderings",
  phase2: "phase2",
} as const;

// Image data organized by section
const siteImages = [
  {
    src: "/site-1.png",
    alt: "Site Context",
    caption: "Site Context",
  },
  {
    src: "/site-2.png",
    alt: "Massing",
    caption: "Massing",
  },
  { src: "/SITE PLAN PS.png", alt: "Site Plan", caption: "Site Plan" },
];

const floorPlanImages = [
  {
    src: "/floor-1.png",
    alt: "Level 1 Floor Plan",
    caption: "Level 1",
  },
  {
    src: "/floor-2.png",
    alt: "Level 2 Floor Plan",
    caption: "Level 2",
  },
];

const sectionImages = [
  {
    src: "/sections-1.png",
    alt: "East-West Section",
    caption: "East-West Section",
  },
  {
    src: "/sections-2.png",
    alt: "North-South Section",
    caption: "North-South Section",
  },
];

const elevationImages = [
  {
    src: "/elevations-1.png",
    alt: "East Elevation",
    caption: "East Elevation",
  },
  {
    src: "/elevations-2.png",
    alt: "West Elevation",
    caption: "West Elevation",
  },
  {
    src: "/elevations-3.png",
    alt: "North Elevation",
    caption: "North Elevation",
  },
  {
    src: "/elevations-4.png",
    alt: "South Elevation",
    caption: "South Elevation",
  },
];

const sustainabilityImages = [
  { src: "/MASSING PS.png", alt: "Massing Study", caption: "Massing Study" },
  {
    src: "/A1-A3 LCA Presentation.png",
    alt: "Life Cycle Assessment",
    caption: "A1-A3 Life Cycle Assessment",
  },
];

const assembliesImages = [
  {
    src: "/sustainability-01.png",
    alt: "Enclosure + Sustainability Overview",
    caption: "Enclosure + Sustainability Overview",
  },
  {
    src: "/sustainability-02.png",
    alt: "Assembly Details",
    caption: "Assembly Details",
  },
  {
    src: "/sustainability-03.png",
    alt: "Environmental Impact Analysis",
    caption: "Environmental Impact Analysis",
  },
];

const structureImages = [
  {
    src: "/structure-01.png",
    alt: "Structural Systems",
    caption: "Structural Systems",
  },
];

const hvacImages = [
  {
    src: "/hvac-1.png",
    alt: "HVAC System Design",
    caption: "HVAC System Design",
  },
  {
    src: "/hvac-2.png",
    alt: "HVAC Details",
    caption: "HVAC Details",
  },
];

const plumbingImages = [
  {
    src: "/plumbing-1.png",
    alt: "Plumbing Design",
    caption: "Plumbing Design",
  },
];

const solarImages = [
  {
    src: "/solar-1.png",
    alt: "Solar Array Layout",
    caption: "Solar Array Layout",
  },
];

const lightingImages = [
  {
    src: "/Lighting L1.png",
    alt: "Level 1 Lighting Plan",
    caption: "Level 1 Lighting Plan",
  },
  {
    src: "/lighting l2.png",
    alt: "Level 2 Lighting Plan",
    caption: "Level 2 Lighting Plan",
  },
];

const renderingImages = [
  {
    src: "/COURTYARD + EXISTING.jpg",
    alt: "Courtyard View",
    caption: "Courtyard & Existing Context",
  },
  { src: "/NORTH.jpg", alt: "North View", caption: "North Perspective" },
  { src: "/RES.jpg", alt: "Residential View", caption: "Residential Wing" },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Site Context Section */}
        <Section
          id={SECTION_IDS.site}
          title="Site"
          subtitle="01 — Site Context"
          description="Understanding the existing urban fabric and natural environment to create a development that responds to its context and enhances the surrounding community."
        >
          <ImageGallery images={siteImages} columns={3} aspectRatio="video" />
        </Section>

        {/* Floor Plans Section */}
        <Section
          id={SECTION_IDS.plans}
          title="Floor Plans"
          subtitle="02 — Architecture"
          description="Dementia-friendly space planning is designed to bring the outside world in, offering a gradient of privacy from vibrant shared amenities to quiet, personal retreats."
          dark
        >
          <ImageGallery
            images={floorPlanImages}
            columns={2}
            aspectRatio="video"
          />
        </Section>

        {/* Sections Section */}
        <Section
          id={SECTION_IDS.elevations}
          title="Sections"
          subtitle="02 — Architecture"
          description="Skylights and strategic floor-plate openings draw daylight deep into the building, sharing natural light with first-floor suites and corridors. Light-toned finishes amplify reflectance to improve visual comfort and reduce reliance on artificial lighting."
        >
          <ImageGallery images={sectionImages} columns={2} aspectRatio="wide" />
        </Section>

        {/* Elevations Sections */}
        <Section
          id={SECTION_IDS.sections}
          title="Elevations"
          subtitle="02 — Architecture"
          description="The facade draws from Collingwood’s character with red brick and wood cladding, preserving the site’s historic identity in a warm, contemporary care setting. Pitched roofs define the residential wings, while flat roofs serve amenity and service zones to reinforce hierarchy and simplify construction."
          dark
        >
          <ImageGallery
            images={elevationImages}
            columns={2}
            aspectRatio="wide"
          />
        </Section>

        {/* Assemblies + Environmental Impact Section */}
        <Section
          id={SECTION_IDS.sustainability}
          title="Assemblies + Environmental Impact"
          subtitle="03 — Enclosure + Sustainability"
          description="The enclosure exceeds code thermal performance and aligns with LBC imperatives using Declare-labeled, Red List–free assemblies and low-carbon insulation to cut operational loads with material transparency. LCA shows 125 kg CO₂e/m² (A1–A3), well below the Toronto Green Standard Tier 2 benchmark (250 kg CO₂e/m²), with concrete and interior finishes identified for further optimization."
        >
          <ImageGallery
            images={assembliesImages}
            columns={3}
            aspectRatio="video"
          />
        </Section>

        {/* Structural Systems Section */}
        <Section
          id={SECTION_IDS.structure}
          title="Structural Systems"
          subtitle="04 — Structure"
          description="The structural system supports durability and LBC-aligned wellness through a cast-in-place concrete foundation and a glulam + CLT superstructure designed for efficient spans and exposed timber in key areas. FSC-certified, locally sourced wood and Declare-listed products were prioritized where possible to reduce embodied carbon and improve material transparency."
          dark
        >
          <ImageGallery
            images={structureImages}
            columns={1}
            aspectRatio="video"
          />
        </Section>

        {/* HVAC Section */}
        <Section
          id={SECTION_IDS.hvac}
          title="HVAC"
          subtitle="04 — Systems"
          description="The HVAC design supports LBC goals with efficient, resilient heating and cooling via a ground heat exchanger (GHX) with backup boiler, plus ERVs and demand-controlled ventilation to reduce energy use during partial occupancy. MERV-14/HEPA filtration and dedicated airborne infection isolation rooms enhance resident health, while the system remains adaptable for future renewable integration."
        >
          <ImageGallery
            images={hvacImages}
            columns={2}
            aspectRatio="video"
          />
        </Section>

        {/* Plumbing Section */}
        <Section
          id={SECTION_IDS.plumbing}
          title="Plumbing"
          subtitle="04 — Systems"
          description="The plumbing design supports resident comfort and sustainability through domestic hot water recirculation (DHWR) for near-instant hot water with minimal waste, and roof rainwater harvesting filtered for non-potable uses (toilets, laundry, irrigation) to reduce municipal demand. Fire suppression and municipal backup are integrated to maintain efficiency and resilience."
          dark
        >
          <ImageGallery
            images={plumbingImages}
            columns={1}
            aspectRatio="video"
          />
        </Section>

        {/* Solar Section */}
        <Section
          id={SECTION_IDS.solar}
          title="Solar"
          subtitle="04 — Systems"
          description="The 198.7 kW DC solar array uses 368 high-efficiency 540 W monocrystalline panels in a series-parallel layout for strong performance and shading tolerance. Rail-mounted racks follow pitched roofs, while ballasted racks on flat roofs minimize penetrations, producing over 217,000 kWh annually."
        >
          <ImageGallery
            images={solarImages}
            columns={1}
            aspectRatio="video"
          />
        </Section>

        {/* Statement Section */}
        <section className="section-padding bg-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-headline text-foreground max-w-4xl mx-auto leading-snug">
              Victoria Meadows Village represents a new paradigm in sustainable
              urban long term care — one that is engineered for community, environmental
              responsibility, and the occupant experience excellence.
            </p>
          </div>
        </section>

        {/* Phase 2 Coming Soon Section */}
        <section
          id={SECTION_IDS.phase2}
          className="section-padding bg-[#1a1a1a] relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                currentColor 20px,
                currentColor 21px
              )`,
              }}
            />
          </div>

          <div className="max-w-screen-xl mx-auto relative">
            <div className="text-center max-w-3xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-sm text-white/80 uppercase tracking-wider">
                  Coming Soon
                </span>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                Phase 2
              </h2>

              {/* Description */}
              <p className="text-lg text-white/50 leading-relaxed">
                The next chapter of Victoria Meadows Village is currently being
                developed. Phase 2 will expand upon the foundation established
                in Phase 1, introducing new residential units, enhanced
                community spaces, and additional sustainable features. Stay
                tuned for updates as we continue to shape this vision.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
