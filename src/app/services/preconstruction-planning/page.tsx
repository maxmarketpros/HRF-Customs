import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    ClipboardIcon,
    RulerIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    BuildingIcon,
    HardHatIcon,
    ShieldIcon,
    CalculatorIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Preconstruction Planning & Estimating in Cache Valley | HRF Customs",
    description: "HRF Customs performs elite preconstruction planning, architectural value-engineering, and deep-dive estimating for massive custom homes in Paradise, UT.",
};

const processSteps = [
    {
        title: "Architectural Feasibility Analysis",
        description: "Before final blueprints are locked, our physical build teams review the architectural designs. We actively search for structural anomalies, unbuildable cantilevers, or design elements that will trigger massive delays during the framing or concrete phases."
    },
    {
        title: "Hard-Dollar Estimating",
        description: "We do not believe in 'allowances' or vague cost ranges. We utilize aggressive supply-chain scraping and active subcontractor bidding to establish hard-dollar costs for over 90% of your build before a single machine touches your dirt."
    },
    {
        title: "Value Engineering",
        description: "If a highly specific architectural request is driving the budget past acceptable parameters, we do not simply pass the invoice to you. We propose alternative structural execution methods or material sourcing that achieves the exact same luxury aesthetic for significantly allocated capital."
    },
    {
        title: "Permitting & Bureaucracy Integration",
        description: "Navigating Cache County and municipal planning departments is historically a nightmare for out-of-state clients. We assume complete control of the bureaucracy, fighting for your architectural variances, septic approvals, and slope-ordinance clearances."
    },
    {
        title: "Geotechnical Lot Analysis",
        description: "A mountainside lot in Paradise requires intense subterranean verification. We organize deep soil borings, aggressive topographical surveys, and structural engineering reviews to guarantee the specific dirt you purchased can actually support the multi-million dollar estate you designed."
    }
];

const faqs = [
    {
        question: "Why should I pay for preconstruction services before building?",
        answer: "A $5,000 error found on paper takes an hour to erase. That exact same error found during the framing phase will cost $50,000 and delay the project by two months. Preconstruction planning is purely defensive capital preservation. It is the most financially critical phase of the entire build."
    },
    {
        question: "Can I bring my own architect to HRF Customs?",
        answer: "Yes. While we operate heavily in the design-build space, we frequently act as the elite general contractor for clients who have already retained high-end architectural firms. We integrate seamlessly into your existing team, bringing grounded, physical build realities to their theoretical designs."
    },
    {
        question: "How accurate are your preconstruction estimates?",
        answer: "Extremely accurate. Because we maintain our own internal heavy equipment framing and concrete divisions, we know the exact, real-time cost of lumber, diesel, and steel. We do not guess based on loose historical data; we estimate based on what we are currently paying in the field today."
    },
    {
        question: "Do you handle HOA architectural review boards?",
        answer: "Absolutely. High-end gated communities in Northern Utah have brutal, incredibly specific architectural requirements. We manage the entire submittal process, defending your design choices, material palettes, and roofline pitches in front of aggressive neighborhood committees."
    },
    {
        question: "How long does the preconstruction phase usually take?",
        answer: "For a monumental bespoke estate, preconstruction can easily span 3 to 6 months. This timeline absorbs the architectural design sprints, multiple engineering reviews (structural, civil, geotechnical), the aggressive estimating cycles, and the unpredictable municipal permitting queues."
    }
];

export default function PreconstructionPlanning() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/preconstruction-planning/hero.jpg"
                    alt="Digital architectural rendering and preconstruction planning"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            The Financial Firewall
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Preconstruction Planning
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Multi-million dollar building disasters are always born on paper. HRF Customs executes aggressive architectural clash detection, deep-dive estimating, and value-engineering long before a single yard of dirt is moved.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Audit Your Blueprint
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
                                Why Hope is Not a Viable Budgeting Strategy
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    A beautiful blueprint does not guarantee a buildable, financially viable house. There is a massive operational gap between what a high-end architect can draw on a screen and what physical tradesman can execute on a steep, snowy hillside in Cache Valley.
                                </p>
                                <p>
                                    Preconstruction is where we force the theoretical design into physical reality. HRF Customs acts as your defensive perimeter against catastrophic budget bloat. We do not wait until the framing phase to realize the architectural ridge-beam requires $80,000 worth of specialty structural steel. We find that clash digitally, on month one, and engineer an alternative solution that saves your capital.
                                </p>
                                <p>
                                    When you bypass rigorous preconstruction planning, you are blindly consenting to infinite change orders. By engaging HRF Customs during the design phase, you lock in accountability, you uncover the hidden costs of steep-slope excavation, and you force the project into extreme financial transparency.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/preconstruction-planning/local-relevance.jpg"
                                    alt="Digital 3D modeling used for value engineering luxury homes"
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
                                        src="/images/services/preconstruction-planning/synergy.jpg"
                                        alt="Project manager reviewing plans on job site"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/custom-home-20230710.jpg"
                                        alt="Finished estate matching preconstruction plans"
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
                                    Financial Authority
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Commanding the Master Budget
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    We do not estimate luxury homes using generic square-footage multipliers. A $3M home requires granular, line-by-line financial tracking that accounts for the volatility of supply chains and elite labor markets.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <CalculatorIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Deep-Dive Estimation
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                We tear the architectural schematics apart, isolating every required material—from the structural foundation concrete to the custom Italian cabinet hardware. We aggressively bid these exact packages across our elite subcontractor network to produce a hyper-accurate, defensively built master budget you can actually rely on.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <BuildingIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Clash Detection
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                Architects design for aesthetics; we must design for constructability. During preconstruction, our field veterans review the plans specifically to find points where trades will collide. We ensure the soaring vaulted ceilings allow enough physical space for the HVAC ducting to actually perform.
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
                                Bureaucratic Logistics
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Combating The Red Tape
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Local municipalities do not care about your timeline. In Cache County, navigating the web of environmental restrictions, steep-slope ordinances, and sanitation permitting is often harder than the physical build.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ClipboardIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Expedited Permitting</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Because we operate locally and extensively inside these municipal jurisdictions, our reputation precedes us. We assemble flawless, over-engineered submittal packages that make it easier for city planners to simply stamp 'Approved' rather than demanding endless, costly revisions.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Lot Feasibility Intelligence</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Before you close on a piece of mountain dirt, we execute intelligence gathering. We identify whether the lot has legal access to municipal water, what a required engineered septic system will cost, and if the extreme slope grading will destroy your construction budget.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/preconstruction-planning/structural.jpg"
                                    alt="Finished premium exterior resulting from flawless planning"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                                            <RulerIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Design Defense</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Absolute Transparency</p>
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
                            The Preconstruction Sequence
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            How we systematically neutralize risk, secure capital, and enforce reality upon the architectural blueprints.
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
                                Executive Clarity
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Explaining The Paper War
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on how we secure municipal permits, execute devastatingly accurate estimates, and defend your capital before groundbreaking.
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
