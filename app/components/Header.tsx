"use client";

import { useState, useEffect } from "react";

const phase1Items = [
  { label: "Site", href: "#site" },
  { label: "Plans", href: "#plans" },
  { label: "Elevations", href: "#elevations" },
  { label: "Sections", href: "#sections" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Renderings", href: "#renderings" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [phase1Open, setPhase1Open] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Find active section
      const sections = phase1Items.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className={`font-bold text-lg md:text-xl tracking-tight transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            VMV
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Phase 1 Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPhase1Open(true)}
              onMouseLeave={() => setPhase1Open(false)}
            >
              <button
                className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1.5 ${
                  scrolled
                    ? "text-muted hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Phase 1
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`transition-transform duration-200 ${phase1Open ? "rotate-180" : ""}`}
                >
                  <path d="M2 4L5 7L8 4" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                  phase1Open
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[160px]">
                  {phase1Items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        activeSection === item.href.slice(1)
                          ? "text-foreground bg-gray-50"
                          : "text-muted hover:text-foreground hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 2 - Coming Soon */}
            <a
              href="#phase2"
              className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-2 group ${
                scrolled
                  ? "text-muted hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Phase 2
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full uppercase tracking-wider transition-all duration-200 ${
                  scrolled
                    ? "bg-gray-100 text-muted/60 group-hover:bg-gray-200 group-hover:text-foreground"
                    : "bg-white/20 text-white/60 group-hover:bg-white/30 group-hover:text-white"
                }`}
              >
                Soon!
              </span>
            </a>

            {/* Contact Us */}
            <a
              href="#contact"
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-muted hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${
              scrolled ? "text-foreground" : "text-white"
            }`}
            aria-label="Menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? "max-h-[500px] pb-6" : "max-h-0"
          }`}
        >
          <div className="pt-4 space-y-4">
            {/* Phase 1 Section */}
            <div>
              <p
                className={`text-xs uppercase tracking-wider mb-2 ${
                  scrolled ? "text-muted/60" : "text-white/50"
                }`}
              >
                Phase 1
              </p>
              <div className="space-y-2 pl-2">
                {phase1Items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block text-sm font-medium transition-colors ${
                      scrolled
                        ? activeSection === item.href.slice(1)
                          ? "text-foreground"
                          : "text-muted hover:text-foreground"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Phase 2 */}
            <a
              href="#phase2"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xs uppercase tracking-wider mb-2 flex items-center gap-2 transition-colors group ${
                scrolled
                  ? "text-muted hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Phase 2
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full transition-all duration-200 ${
                  scrolled
                    ? "bg-gray-100 text-muted/50 group-hover:bg-gray-200 group-hover:text-foreground"
                    : "bg-white/10 text-white/40 group-hover:bg-white/20 group-hover:text-white/70"
                }`}
              >
                Coming Soon!
              </span>
            </a>

            {/* Contact */}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block text-sm font-medium transition-colors ${
                scrolled
                  ? "text-muted hover:text-foreground"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

