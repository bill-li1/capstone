const navItems = [
  { label: "Site", href: "#site" },
  { label: "Plans", href: "#plans" },
  { label: "Elevations", href: "#elevations" },
  { label: "Sections", href: "#sections" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Renderings", href: "#renderings" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-white">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Victoria Meadows Village
            </h2>
            <p className="text-white/60 max-w-md leading-relaxed">
              VMV is a long-term care facility in Collingwood, Ontario. It
              integrates the historic 1890s Victoria Schoolhouse and is
              engineered for the occupant experience through healthy, beautiful,
              low-carbon, responsible design.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white/40 mb-4">
              Sections
            </h3>
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Credits */}
          <div className="md:col-span-3">
            <h3 className="text-sm font-semibold tracking-wide uppercase text-white/40 mb-4">
              Project Team
            </h3>
            <p className="text-white/70 leading-relaxed">
              Architecture Capstone Project
              <br />
              2024-2025
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Victoria Meadows Village. All rights reserved.
          </p>
          <a
            href="#"
            className="text-white/40 hover:text-white text-sm transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
