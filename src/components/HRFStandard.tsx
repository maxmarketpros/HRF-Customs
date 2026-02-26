import Image from "next/image";
import { CheckCircleIcon } from "./icons";

const standards = [
    "Documented scope of work before every phase",
    "Daily coordination with trade partners",
    "Quality-first sequencing & critical hold points",
    "Clean, organized job sites maintained daily",
    "Safety protocols enforced aggressively",
    "Inspection readiness at every checkpoint",
    "Transparent budget tracking & changes",
    "Owner-present milestone walkthroughs",
];

export default function HRFStandard() {
    return (
        <section id="hrf-standard" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <div className="page-container relative z-10">
                <div className="max-w-7xl mx-auto bg-white border border-[var(--color-neutral-100)] rounded-[2rem] overflow-hidden flex flex-col shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

                    {/* Top Row: Image & Hero Text side-by-side */}
                    <div className="flex flex-col lg:flex-row border-b border-[var(--color-neutral-100)]">

                        {/* Image Side with Blueprint/Architectural vibe */}
                        <div className="w-full lg:w-3/5 relative min-h-[400px] flex flex-col items-center justify-center p-8 bg-[#f8fafc] border-b lg:border-b-0 lg:border-r border-[var(--color-neutral-100)] overflow-hidden">

                            {/* Architectural Grid Background */}
                            <div className="absolute inset-0 opacity-[0.07]" style={{
                                backgroundImage: `linear-gradient(var(--color-primary-dark) 1.5px, transparent 1.5px), linear-gradient(90deg, var(--color-primary-dark) 1.5px, transparent 1.5px)`,
                                backgroundSize: '40px 40px',
                                backgroundPosition: 'center center'
                            }}>
                            </div>

                            {/* Decorative subtle circles/shapes to frame the transparent PNG */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square border-2 border-dashed border-[var(--color-primary)] rounded-full opacity-10 animate-[spin_120s_linear_infinite]"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border-2 border-[var(--color-primary)] rounded-full opacity-[0.05]"></div>

                            {/* Soft Glow Behind Image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white blur-[60px] rounded-full pointer-events-none z-0"></div>

                            {/* Image - The Transparent PNG */}
                            <div className="relative w-full aspect-[4/3] max-w-[800px] mx-auto z-10 transition-transform duration-700 hover:scale-[1.03]">
                                <Image
                                    src="/images/hrf-customs-premium-build-05.webp"
                                    alt="HRF Customs Premium Build Schematic"
                                    fill
                                    className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.25)]"
                                    sizes="(max-width: 1024px) 100vw, 60vw"
                                />
                            </div>

                            {/* Floating Stat Badge */}
                            <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 bg-white/90 backdrop-blur-md border border-[var(--color-neutral-100)] py-4 px-6 rounded-2xl shadow-xl z-20 flex items-center gap-5 transition-transform duration-300 hover:-translate-y-1">
                                <div className="text-4xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-primary)] leading-none">
                                    250+
                                </div>
                                <div className="h-10 w-px bg-[var(--color-neutral-200)]"></div>
                                <div className="text-[10px] text-[var(--color-neutral-600)] font-bold uppercase tracking-widest leading-relaxed">
                                    Projects<br />Delivered
                                </div>
                            </div>
                        </div>

                        {/* Content Side - Intro Text */}
                        <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white relative">
                            {/* Subtle accent line at top of text card */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)]"></div>

                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Our Approach
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                The HRF Standard
                            </h2>

                            <div className="text-[var(--color-neutral-600)] space-y-4 text-base lg:text-lg leading-relaxed">
                                <p>
                                    Every HRF Customs project is held to a relentless standard of execution covering preconstruction planning through final closeout. This isn't just a marketing checklist—it forms the daily operational backbone of every site we manage.
                                </p>
                                <p>
                                    The quality of a luxury build is determined long before the final coat of paint. It lives in the precision of the schedule, the coordination of complex trades, and the rigorous engineering oversight that only an owner-led team can guarantee.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Checklist and CTA spreading across the full width */}
                    <div className="w-full p-8 lg:p-12 bg-white flex flex-col gap-10">
                        {/* Grid of Standards */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
                            {standards.map((item, index) => (
                                <div key={index} className="flex items-start gap-3 group">
                                    <div className="bg-[var(--color-primary)]/10 p-1.5 rounded-full shrink-0 group-hover:bg-[var(--color-primary)] text-[var(--color-primary)] group-hover:text-white transition-colors duration-300 mt-0.5">
                                        <CheckCircleIcon size={16} />
                                    </div>
                                    <span className="text-[var(--color-neutral-700)] text-sm font-medium leading-relaxed group-hover:text-[var(--color-neutral-900)] transition-colors">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Element */}
                        <div className="pt-8 border-t border-[var(--color-neutral-100)] flex flex-wrap items-center justify-between gap-6">
                            <a href="/contact" className="btn-primary flex items-center gap-2 group shadow-md hover:shadow-lg">
                                Experience The Standard
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                            <div className="text-xs font-bold text-[var(--color-primary)] tracking-[0.15em] uppercase flex items-center gap-2.5">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-primary)] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-primary)]"></span>
                                </span>
                                Now accepting new projects
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
