import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/perspective.png"
        alt="Victoria Meadows Village - Architectural Perspective"
        fill
        className="object-cover"
        priority
        quality={90}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
          {/* Title */}
          <div className="lg:col-span-7">
            <h1 className="text-display text-white animate-fade-in-up">
              <span className="block">Victoria</span>
              <span className="block">Meadows</span>
              <span className="block">Village</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p
              className="text-white/80 text-lg md:text-xl leading-relaxed animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
            >
              A sustainable mixed-use development designed to foster community,
              integrate nature, and redefine urban living through innovative
              architectural solutions.
            </p>
            <a
              href="#site"
              className="inline-flex items-center gap-2 mt-6 text-white/60 hover:text-white transition-colors group animate-fade-in-up opacity-0"
              style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
            >
              <span className="text-sm font-medium tracking-wide uppercase">
                Explore Project
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transform group-hover:translate-y-1 transition-transform"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

