import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
    title: "Areas We Serve | HRF Customs",
    description: "Explore the primary service regions for HRF Customs, including Northern Utah, Cache Valley, Southern Idaho, and Western Wyoming.",
};

const serviceAreas = [
    {
        region: "Utah",
        description: "Executing premium custom home builds across the rugged terrains and growing valleys of Northern Utah.",
        locations: [
            { name: "Northern Utah", href: "/areas/northern-utah" },
            { name: "Cache Valley", href: "/areas/cache-valley-utah" },
            { name: "Logan Area", href: "/areas/logan-utah-area" },
            { name: "Bear Lake Region", href: "/areas/bear-lake-region-utah-idaho" },
        ]
    },
    {
        region: "Idaho",
        description: "Delivering uncompromising quality for custom estates and specialized heavy-timber framing across Southern Idaho.",
        locations: [
            { name: "Southern Idaho", href: "/areas/southern-idaho" },
            { name: "Preston Area", href: "/areas/preston-idaho-area" },
            { name: "Soda Springs", href: "/areas/soda-springs-idaho-area" },
            { name: "Bear Lake (Idaho Side)", href: "/areas/bear-lake-region-utah-idaho" },
        ]
    },
    {
        region: "Wyoming",
        description: "Specializing in extreme high-altitude luxury builds designed to withstand the brutal winters of Western Wyoming.",
        locations: [
            { name: "Western Wyoming", href: "/areas/western-wyoming" },
            { name: "Star Valley", href: "/areas/star-valley-wyoming" },
            { name: "Jackson Hole Region", href: "/areas/jackson-hole-region-wyoming" },
            { name: "Alpine", href: "/areas/star-valley-wyoming" },
        ]
    }
];

export default function AreasPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-0">
            <Header />

            {/* Dark Mode Hero */}
            <section className="relative w-full pt-48 pb-24 lg:pt-56 lg:pb-32 bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-light) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-dark)]/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="page-container relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[var(--color-primary-light)]/20 shadow-sm backdrop-blur-md">
                        Operating Zones
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Areas We <span className="text-[var(--color-primary-light)]">Serve</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        HRF Customs is highly mobile and equipped to execute luxury residential projects across Northern Utah, Southern Idaho, and Western Wyoming.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    GEOGRAPHY
                </div>
            </section>

            {/* Areas Grid */}
            <section className="py-24 lg:py-32 relative bg-white border-b border-[var(--color-neutral-200)] overflow-hidden">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10 max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                        {serviceAreas.map((area, idx) => (
                            <div key={idx} className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] rounded-3xl p-8 lg:p-10 hover:border-[var(--color-primary)] transition-colors group shadow-sm flex flex-col">
                                <h2 className="text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-4 flex items-center gap-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                                    {area.region}
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed mb-10 min-h-[60px]">
                                    {area.description}
                                </p>

                                <ul className="space-y-4 flex-grow">
                                    {area.locations.map((loc, lIdx) => (
                                        <li key={lIdx}>
                                            <a href={loc.href} className="flex items-center justify-between text-[15px] font-bold text-[var(--color-neutral-800)] group/link hover:text-[var(--color-primary)] transition-colors">
                                                <span>{loc.name}</span>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-neutral-300)] group-hover/link:text-[var(--color-primary)] group-hover/link:translate-x-1 transition-all">
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
