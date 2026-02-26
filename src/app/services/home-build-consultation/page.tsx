import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    MapPinIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    CalculatorIcon,
    HardHatIcon,
    ShieldIcon,
    SearchIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Luxury Home Build Consultation | Paradise & Cache Valley | HRF Customs",
    description: "Before you purchase dirt or hire an architect, HRF Customs offers unvarnished, hard-truth consulting on lot feasibility, massive remote-build budgets, and architectural realities in Northern Utah.",
};

const processSteps = [
    {
        title: "Pre-Purchase Lot Evaluation",
        description: "Do not buy a mountain lot blindly. We physically walk the raw dirt with you before closing. We analyze the topographical slope, identify subterranean water risks, and estimate the true cost of bringing municipal utilities up a volatile mountainside."
    },
    {
        title: "Architectural Vetting",
        description: "Not all architects understand how to design for Cache Valley snow loads. We review your architect's preliminary sketches, providing brutal feedback on buildability and structural engineering requirements before you pay them for fully finished blueprints."
    },
    {
        title: "Realistic Budget Calibrations",
        description: "We destroy unrealistic budget expectations immediately. Based on current supply-chain data and elite subcontractor pricing, we provide macro-level financial goalposts so you know exactly what a 10,000-square-foot luxury estate actually costs to execute today."
    },
    {
        title: "Builder Selection Strategy",
        description: "Even if you do not hire HRF Customs to build the final home, we consult on how to interview other general contractors. We teach you which specific insurance clauses prioritize your protection and how to identify red flags in their master contracts."
    },
    {
        title: "Timeline Feasibility",
        description: "We outline the unvarnished reality of construction timelines in Northern Utah. We explain the difference between winter-pour mitigation schedules versus waiting for spring thaws, allowing you to plan your massive relocation logically."
    }
];

const faqs = [
    {
        question: "Why should I pay for a consultation if I haven't bought land yet?",
        answer: "A $2,000 consulting fee can save you from a $500,000 mistake. Many clients purchase cheap mountainside lots, entirely unaware that the steep-slope excavation and engineered septic requirements will add half a million dollars to their baseline build cost. We identify these invisible financial liabilities before you close."
    },
    {
        question: "Does consulting obligate me to hire HRF Customs for the build?",
        answer: "No. Our advisory phase is completely independent. We frequently act as blunt, third-party industry experts for clients who are vetting other builders or attempting to assess the financial viability of a custom architectural design."
    },
    {
        question: "Will you review my existing blueprints?",
        answer: "Yes. This is one of our most requested services. We execute a red-line review of your architectural schematics, searching exclusively for structural clashes, non-viable HVAC routing, or design elements that will unnecessarily trigger extreme cost overruns."
    },
    {
        question: "Are your budget estimates guaranteed during the consultation?",
        answer: "No. High-level consulting produces macro-ranges (e.g., $400-$600 per square foot) based on your aesthetic tastes and the lot's geography. Hard-dollar guarantees only occur during formalized, multi-month Preconstruction Planning contracts involving exact material takeoffs."
    },
    {
        question: "Can we do this consultation remotely?",
        answer: "Absolutely. We routinely run deep-dive video conferences with out-of-state executives looking to relocate to Paradise. We utilize Google Earth, municipal topographical maps, and our historical data to analyze lots digitially before you fly in."
    }
];

export default function HomeBuildConsultation() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/home-build-consultation/hero.webp"
                    alt="Pristine finished luxury estate representing the ultimate consulting goal"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Advisory Intelligence
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Home Build Consultation
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Before committing millions of dollars to a vision, seek the truth. HRF Customs acts as your private advisory proxy, delivering unvarnished clarity on lot feasibility, architectural reality, and true construction budgets.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Request Advisory
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. WHEN & WHY SECTION */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden text-left">
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-dark) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-7">
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Why Vision Requires Extreme Grounding
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    The custom home industry is filled with optimistic salesmen telling you what you want to hear to secure a signature. Architects will draw incredible, gravity-defying structures, and real estate agents will sell you "perfect" mountain lots without understanding how much a deep-well excavation actually costs.
                                </p>
                                <p>
                                    HRF Customs operates defensively. We are not interested in selling you a dream; we are interested in auditing your reality. Our consultation services are designed specifically for out-of-state executives and high-net-worth individuals who demand blunt, unvarnished truth before deploying massive capital.
                                </p>
                                <p>
                                    If a lot is geographically hostile and will destroy your budget in concrete retaining walls, we will tell you not to buy it. If an architect's design is physically unbuildable without $200,000 in specialty steel, we will force a redesign. We act purely as your proxy, protecting your interests from expensive, cascading failures early in the process.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/home-build-consultation/local-relevance.webp"
                                    alt="Expert consultation on massive luxury estate build"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            {/* Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-primary)]/10 blur-[100px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. TRANSPARENCY & MANAGEMENT (SYNERGY) */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative border-y border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-6 relative order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg translate-y-8">
                                    <Image
                                        src="/images/services/home-build-consultation/synergy.webp"
                                        alt="Stunning architectural synergy achieved through planning"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/custom-home-20230710.webp"
                                        alt="Flawless estate resulting from expert early-stage consultation"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/5 blur-[80px] -z-10 rounded-full"></div>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="max-w-xl text-left">
                                <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                    The First Defense
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Identifying the Hidden Costs
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    Many general contractors will aggressively obscure the true total cost to build just to secure the framing contract. We bring the painful numbers to the surface immediately.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <CalculatorIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Utility Infrastructure Mathematics
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                A remote 10-acre lot in Paradise may be priced aggressively, but if the nearest municipal water tie-in is half a mile down the canyon, the civil engineering and trenching required might cost $150,000. We mathematically calculate the viability of the dirt's infrastructure before you purchase it.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <SearchIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Red-Lining the Architect
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                Architects are artists. Builders are pragmatists. We act as the necessary friction against overly ambitious designs. If an architect specifies a massive, unsupported cantilevered deck that exceeds your stated budget, we red-line the drawing and force a return to financial reality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SAFETY & STANDARDS + GEOTECHNICAL (DARK MODE) */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#010613] opacity-100"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-1">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary-light)]/20">
                                Terrain Intelligence
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Respecting the Mountain
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Cache Valley offers some of the most stunning, volatile residential build sites in the country. We consult explicitly on how to weaponize the natural terrain rather than fighting a losing battle against it.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <MapPinIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Topographical Positioning</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        We do not let you place your foundation in a natural basin. We survey the raw dirt to identify invisible subterranean spring paths, advising you exactly where to pin the footprint to minimize retaining wall costs and eliminate hydrostatic swelling.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Legal & Permitting Reality</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Just because you own the dirt does not mean the county will let you build on it. We consult heavily on existing Cache County steep-slope ordinances, environmental runoff restrictions, and aggressively restrictive gated community HOA bylaws before you ever finalize the blueprint.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/home-build-consultation/structural.webp"
                                    alt="Luxury mountain estate aggressively integrated into steep terrain"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                                            <HardHatIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Actionable Truth</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Zero Sugar-Coating</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS TIMELINE */}
            <section className="py-24 lg:py-32 bg-white relative">
                <div className="page-container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            The Advisory Sequence
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            How we systematically vet your multi-million dollar vision against the harsh realities of Northern Utah construction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-[var(--color-neutral-100)] shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative group hover:-translate-y-2 transition-transform duration-500 text-left overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-neutral-100)] group-hover:bg-[var(--color-primary)] transition-colors duration-500"></div>
                                <div className="text-[12px] font-bold tracking-[0.2em] text-[var(--color-neutral-400)] group-hover:text-[var(--color-primary)] transition-colors duration-500 uppercase mb-4 pt-2">
                                    0{index + 1} // Phase
                                </div>
                                <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-4">
                                    {step.title}
                                </h4>
                                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative text-left">
                <div className="page-container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                                Financial Clarity
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Explaining The Consultation
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on independent intelligence gathering, remote-client advisory services, and protecting your capital.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-white border border-[var(--color-neutral-200)] hover:border-[var(--color-primary)] transition-colors duration-300 rounded-2xl overflow-hidden shadow-sm pt-0 cursor-pointer">
                                    <summary className="flex items-center justify-between gap-6 p-6 md:p-8 list-none font-bold text-lg font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] group-open:text-[var(--color-primary)]">
                                        {faq.question}
                                        <span className="transition-transform duration-500 group-open:rotate-[135deg] text-[var(--color-primary)] w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-neutral-100)] group-open:bg-[var(--color-primary)] group-open:text-white group-open:border-[var(--color-primary)]">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M12 5v14M5 12h14" /></svg>
                                        </span>
                                    </summary>
                                    <div className="overflow-hidden">
                                        <p className="text-[var(--color-neutral-600)] pb-8 px-6 md:px-8 text-base leading-relaxed border-t border-[var(--color-neutral-100)] pt-6">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CONTACT CTA */}
            <ContactCTA />

            <Footer />
        </main>
    );
}
