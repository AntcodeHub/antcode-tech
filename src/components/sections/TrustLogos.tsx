import { trustPartners } from '../../data/partners';
// Optional: if InfiniteMarquee expects children, we'll adapt
import { InfiniteMarquee } from '../ui/InfiniteMarquee';

export function TrustLogos() {
  if (!trustPartners || trustPartners.length === 0) {
    return null; // nothing to show
  }

  // Build partner items – now supports optional logo image
  const partnerElements = trustPartners.map((partner) => (
    <div
      key={partner.name}
      className="flex flex-col items-center gap-2 px-6 opacity-40 hover:opacity-100 transition-opacity duration-300"
    >
      {/* If logo exists, show it; otherwise fallback to name */}
      {partner.logo ? (
        <partner.logo className="h-8 w-auto object-contain brightness-0 invert" /> // adjust for dark theme
      ) : (
        <span className="text-white font-heading font-semibold text-lg whitespace-nowrap">
          {partner.name}
        </span>
      )}
      <span className="text-[10px] font-mono uppercase tracking-widest text-muted">
        {partner.type}
      </span>
    </div>
  ));

  // Duplicate for seamless loop (common marquee technique)
  const marqueeItems = [...partnerElements, ...partnerElements];


  return (
    <div className="py-16 border-y border-white/5 bg-white/[0.01]">
      <div className="container-custom mb-8 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/30">
          Trusted By
        </span>
      </div>
      <InfiniteMarquee items={marqueeItems} speed={40} />
    </div>
  );

}