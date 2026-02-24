import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    BuildingIcon,
    UsersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ClipboardIcon,
    HardHatIcon,
    ShieldIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "General Contractor for Custom Homes | Paradise & Cache Valley, UT | HRF Customs",
    description: "HRF Customs is the premier general contractor for custom homes in Paradise, UT. We curate elite subcontractors, enforce rigorous timelines, and mandate extreme quality control for massive residential builds.",
};

const processSteps = [
    {
        title: "Rigorous Pre-Qualification",
        description: "Before a subcontractor ever steps foot onto your Paradise property, they must survive our vetting protocol. We require extensive proof of liability insurance, worker's compensation, and a proven track record of executing high-end, bespoke residential finishes without compromise."
    },
    {
        title: "Master Scheduling & Sequencing",
        description: "A multi-million dollar custom home requires a violently enforced timeline. We sequence trades perfectly to avoid a 'stacked job site' where plumbers and electricians are fighting for the same spatial footprint, which always results in sloppy, rushed work and catastrophic delays."
    },
    {
        title: "Daily On-Site Superintendents",
        description: "We do not manage custom builds from an excel spreadsheet in an office. We deploy seasoned, aggressive superintendents to the physical site every single day. They are heavily involved in answering micro-level trade questions instantly to prevent costly work stoppages."
    },
    {
        title: "Zero-Tolerance Quality Control",
        description: "HRF Customs acts as the ultimate filter. We scrutinize the mechanical rough-ins before drywall is hung, laser-check flooring substrates before $100,000 worth of hardwood is delivered, and demand tear-outs for any subcontractor work that fails our extreme internal standards."
    },
    {
        title: "Financial Draw Management",
        description: "We protect your capital. Subcontractors are only paid when their specific scope of work has been completely verified by our superintendents to meet local Cache County building codes and our proprietary structural demands. No front-loading, no financial surprises."
    }
];

const faqs = [
    {
        question: "How do you select your subcontractors for custom luxury homes?",
        answer: "Our subcontractor roster is highly exclusive. We only utilize specialized tradesmen who focus entirely on the custom residential market. We do not hire massive commercial volume crews who are trained to work fast rather than work perfectly. Every plumber, finish carpenter, and electrician we hire understands that millimeter-level tolerances are the minimum acceptable standard."
    },
    {
        question: "Does HRF Customs perform any of the labor internally?",
        answer: "Yes. Unlike 'paper contractors' who sub out 100% of the build, HRF Customs possesses elite internal crews that specialize in the foundational bones of the home—specifically mass excavation, complex architectural concrete, and primary structural heavy timber framing. This allows us to control the most critical path schedule items directly."
    },
    {
        question: "What happens if a subcontractor causes a massive delay or damage?",
        answer: "As your General Contractor, we absorb that liability entirely on your behalf. We explicitly write tight performance clauses into our master subcontractor agreements. If a trade damages an existing finish, they are legally compelled to replace it at their cost. If they fail to meet a schedule, they are immediately replaced from our verified bench of secondary trades."
    },
    {
        question: "How involved will I need to be in the day-to-day management?",
        answer: "Minimal to none. The entire purpose of hiring HRF Customs as your elite General Contractor is to insulate you from the chaotic realities of job site logistics, weather mitigation, and trade coordination. You will receive consolidated, highly digestible executive summaries, while we fight the daily battles in the dirt."
    },
    {
        question: "Do you utilize modern construction management software?",
        answer: "We deploy bleeding-edge project management stacks. You will have real-time digital access to daily field logs, annotated site photography, up-to-the-minute budget tracking, and formalized RFI (Request for Information) documentation. Absolute transparency is a non-negotiable standard."
    }
];

export default function GeneralContractor() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/general-contractor/hero.jpg"
                    alt="Massive custom home exterior being managed by HRF Customs general contracting"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Elite Job Site Orchestration
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            General Contractor for Custom Homes
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            HRF Customs operates as the master orchestrator of massive residential builds. We provide unrelenting quality control, elite subcontractor curation, and ironclad timeline enforcement for high-net-worth clients across Paradise and Cache Valley.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Secure Our Command
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
                                Why is Elite General Contracting Mandatory for Luxury Builds?
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Managing the construction of a bespoke, multi-million dollar estate in Northern Utah is an incredibly hostile environment for the unprepared. You are not just pouring concrete and placing lumber; you are actively commanding a small army of independent tradesmen, navigating fragile municipal supply chains, and combating extreme high-elevation weather patterns that threaten to destroy budgets daily.
                                </p>
                                <p>
                                    HRF Customs operates under a strict command-and-control methodology. We are not passive schedule coordinators. As an elite general contractor, we act as the absolute authority on the job site. We ruthlessly vet every single specialized subcontractor against extreme quality metrics before they are permitted to touch your asset. We filter out volume-driven tract builders who lack the refinement required for bespoke finish carpentry and complex mechanical routing.
                                </p>
                                <p>
                                    When you hire HRF Customs, you are hiring total insulation from construction chaos. We manage the liability, we enforce the master timeline against dozens of competing schedules, and we assume absolute accountability for ensuring that the final architectural execution matches the blueprints with millimeter precision.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/general-contractor/local-relevance.jpg"
                                    alt="Superintendent managing active custom home build site"
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
                                        src="/images/services/general-contractor/synergy.jpg"
                                        alt="Intricate interior rough-ins managed by GC"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/custom-home-20230710.jpg"
                                        alt="Completed pristine exterior of expertly managed build"
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
                                    Trade Coordination
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Eliminating the Subcontractor Disconnect
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    A luxury home is thousands of moving parts executed by dozens of companies. Without an aggressive apex predator managing the workflow, the project will immediately devolve into finger-pointing and costly rework.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <ArrowRightIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Enforcing Interoperability
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                The HVAC contractor does not care about the custom cabinetry installer's clearances. Left unmanaged, they will route massive ductwork where your bespoke architectural range hood is supposed to mount. We enforce communication across disciplines, physically verifying that every rough-in perfectly accommodates the final luxury finishes.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <BuildingIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Defensive Capital Control
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                We act as an absolute firewall between your capital and external trades. We fiercely audit every subcontractor invoice against actual, verified job site completion. If an electrician claims 80% rough-in completion, our superintendent personally walks the floor to verify every wire drop before a single dollar is authorized for release.
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
                                Tactical Execution
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Managing Ground-Truth Logistics
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Cache Valley mountain builds demand military-grade logistics. Mud, altitude, and winter freezes mercilessly expose weak general contracting. We deploy proactive defensive measures to ensure the structure isn't compromised before the walls go up.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Winter Mitigation Protocol</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Concrete cannot freeze while curing, and heavy lumber cannot sit unprotected in snow banks. We execute aggressive winter-survival techniques, mobilizing massive diesel ground heaters and structural tarping systems to keep custom home projects moving aggressively through Northern Utah's hostile months.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <HardHatIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">OSHA & Structural Compliance</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        We maintain a violently clean job site. Debris and disorganized material staging are unacceptable. A pristine site prevents compounding errors, reduces liability, and guarantees that when third-party municipal inspectors arrive, they view the structural bones through a lens of absolute professionalism.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/general-contractor/structural.jpg"
                                    alt="Massive concrete structural components managed by HRF Customs"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Site Integrity</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Command & Control</p>
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
                            The Orchestration Sequence
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            How we systematically deploy, manage, and verify elite subcontractors across the lifespan of a multi-million-dollar estate build.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-[var(--color-neutral-100)] shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative group hover:-translate-y-2 transition-transform duration-500 text-left overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-neutral-100)] group-hover:bg-[var(--color-primary)] transition-colors duration-500"></div>
                                <div className="text-[12px] font-bold tracking-[0.2em] text-[var(--color-neutral-400)] group-hover:text-[var(--color-primary)] transition-colors duration-500 uppercase mb-4 pt-2">
                                    0{index + 1} // Protocol
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
                                Demanding Excellence
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on how we insulate our clients from liability, force subcontractor compliance, and manage massive capital deployment safely.
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
