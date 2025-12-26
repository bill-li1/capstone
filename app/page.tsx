import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";
import ImageGallery from "./components/ImageGallery";
import Footer from "./components/Footer";
import Image from "next/image";

// Image data organized by section
const siteImages = [
  { src: "/SITE CONTEXT PS.png", alt: "Site Context", caption: "Site Context Analysis" },
  { src: "/SITE PLAN PS.png", alt: "Site Plan", caption: "Site Plan" },
];

const floorPlanImages = [
  { src: "/P0 FP PS.png", alt: "Parking Level Floor Plan", caption: "Level P0 - Parking" },
  { src: "/L1 FP.png", alt: "Level 1 Floor Plan", caption: "Level 1 - Ground Floor" },
  { src: "/L2 FP PS.png", alt: "Level 2 Floor Plan", caption: "Level 2 - Upper Floor" },
];

const elevationImages = [
  { src: "/Elevations North South.png", alt: "North and South Elevations", caption: "North & South Elevations" },
  { src: "/Elevations East West.png", alt: "East and West Elevations", caption: "East & West Elevations" },
];

const sustainabilityImages = [
  { src: "/MASSING PS.png", alt: "Massing Study", caption: "Massing Study" },
  { src: "/A1-A3 LCA Presentation.png", alt: "Life Cycle Assessment", caption: "A1-A3 Life Cycle Assessment" },
];

const lightingImages = [
  { src: "/Lighting L1.png", alt: "Level 1 Lighting Plan", caption: "Level 1 Lighting Plan" },
  { src: "/lighting l2.png", alt: "Level 2 Lighting Plan", caption: "Level 2 Lighting Plan" },
];

const renderingImages = [
  { src: "/COURTYARD + EXISTING.jpg", alt: "Courtyard View", caption: "Courtyard & Existing Context" },
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
          id="site"
          title="Site Context"
          subtitle="01 — Location"
          description="Understanding the existing urban fabric and natural environment to create a development that responds to its context and enhances the surrounding community."
        >
          <ImageGallery images={siteImages} columns={2} aspectRatio="video" />
        </Section>

        {/* Floor Plans Section */}
        <Section
          id="plans"
          title="Floor Plans"
          subtitle="02 — Planning"
          description="Thoughtfully organized spaces that balance private residences with shared amenities, creating opportunities for community interaction while maintaining individual privacy."
          dark
        >
          <ImageGallery images={floorPlanImages} columns={3} aspectRatio="video" />
        </Section>

        {/* Elevations Section */}
        <Section
          id="elevations"
          title="Elevations"
          subtitle="03 — Form"
          description="The building's exterior expression responds to solar orientation and views while creating a distinctive architectural presence within the neighborhood."
        >
          <ImageGallery images={elevationImages} columns={2} aspectRatio="wide" />
        </Section>

        {/* Building Sections */}
        <Section
          id="sections"
          title="Building Sections"
          subtitle="04 — Structure"
          description="Revealing the vertical organization of spaces and the relationship between interior environments and the surrounding landscape."
          dark
        >
          <div className="image-card relative aspect-[21/9] cursor-pointer group">
            <Image
              src="/Sections updated (1).png"
              alt="Building Sections"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        </Section>

        {/* Sustainability Section */}
        <Section
          id="sustainability"
          title="Sustainability"
          subtitle="05 — Performance"
          description="Integrating passive design strategies and sustainable systems to minimize environmental impact while maximizing occupant comfort and well-being."
        >
          <ImageGallery images={sustainabilityImages} columns={2} aspectRatio="video" />
          
          {/* Lighting Plans Sub-section */}
          <div className="mt-16 md:mt-20">
            <h3 className="text-section-title mb-6">Lighting Design</h3>
            <ImageGallery images={lightingImages} columns={2} aspectRatio="video" />
          </div>
        </Section>

        {/* Renderings Section */}
        <Section
          id="renderings"
          title="Renderings"
          subtitle="06 — Vision"
          description="Visualizing the completed project and its integration with the existing community, landscape, and urban context."
          dark
        >
          <ImageGallery images={renderingImages} columns={3} aspectRatio="square" />
        </Section>

        {/* Statement Section */}
        <section className="section-padding bg-white">
          <div className="max-w-screen-xl mx-auto text-center">
            <p className="text-headline text-foreground max-w-4xl mx-auto leading-snug">
              Victoria Meadows Village represents a new paradigm in sustainable
              urban development — one that prioritizes community, environmental
              responsibility, and architectural excellence.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
