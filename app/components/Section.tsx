import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
  dark?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  description,
  children,
  dark = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? "bg-neutral-50" : "bg-white"}`}
    >
      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            <div className="md:col-span-6">
              <span className="text-section-title block mb-3">{subtitle || title}</span>
              <h2 className="text-headline text-foreground">{title}</h2>
            </div>
            {description && (
              <div className="md:col-span-5 md:col-start-8 flex items-end">
                <p className="text-muted leading-relaxed text-lg">
                  {description}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Section Content */}
        {children}
      </div>
    </section>
  );
}

