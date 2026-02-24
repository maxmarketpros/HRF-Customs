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
    title: "Design Build Contractor in Paradise, UT | HRF Customs",
    description: "HRF Customs offers elite design build contractor services in Paradise, UT. We bridge the critical gap between architectural vision and job site realities, acting as your single point of accountability.",
};

const processSteps = [
    {
        title: "Unified Initial Conception",
        description: "Instead of hiring an architect in isolation, you bring HRF Customs to the table on day one. We evaluate the raw Paradise terrain alongside the design team to ensure your stylistic goals are fundamentally constructible and financially viable from the start."
    },
    {
        title: "Synergistic Preconstruction",
        description: "As blueprints develop, we actively interject with value-engineering. We clash-detect structural steel spans, HVAC routing, and massive foundation requirements before they are finalized on paper, preventing expensive mid-build plan revisions."
    },
    {
        title: "Ironclad Estimating & Permitting",
        description: "Because we have been involved intimately during the design phase, our final budget and timeline proposals are incredibly precise. We then shepherd the consolidated plans through Cache County's rigorous high-elevation permitting process smoothly."
    },
    {
        title: "Seamless Physical Execution",
        description: "When ground breaks, there is zero learning curve. Our framing crews and project managers already know the architectural intent intimately. We execute massive logistical operations and heavy earthwork with total alignment to the original design."
    },
    {
        title: "Master Handover & Warranty",
        description: "As the single entity responsible for both the plan and the product, HRF Customs delivers the finished estate with zero finger-pointing. We back our architectural execution with a comprehensive, transparent warranty protocol."
    }
];

const faqs = [
    {
        question: "What is the primary advantage of the Design-Build model vs. Traditional Bid?",
        answer: "The traditional model forces the client to act as a referee between an architect whose plans may be over budget, and a builder who says the plans are flawed. The Design-Build model provided by HRF Customs eliminates this adversarial relationship. We collaborate with the architectural team immediately, acting as a single, unified point of accountability for both the aesthetic vision and the physical budget."
    },
    {
        question: "Can I bring my own architect to a Design-Build project with HRF Customs?",
        answer: "Yes, absolutely. We frequently partner with elite external architectural firms. In these scenarios, we act as the 'Construction Manager at Risk.' We bring our heavy hitting preconstruction team to sit alongside your chosen architect, advising on supply chain timelines, structural feasibility in Cache Valley, and real-time cost data while they design."
    },
    {
        question: "How does Design-Build save time on luxury projects?",
        answer: "In a traditional build, you must wait months for architectural plans to be 100% finished before you can even solicit bids from builders—a process that takes weeks. With HRF Customs integrated early, we can begin securing long-lead materials (like custom Swiss windows or specialized steel) and pulling early foundation permits while the final interior finishes are still being designed."
    },
    {
        question: "Does Design-Build limit my creative choices?",
        answer: "No. It actually protects your creative choices by ensuring they are financially and structurally viable. There is nothing worse than falling in love with a soaring architectural design only to find out twelve months later that it costs double what you anticipated. We ground the creative process in reality."
    },
    {
        question: "Who is ultimately responsible if there is a flaw in the construction?",
        answer: "Under the HRF Customs Design-Build umbrella, the buck stops entirely with us. Because we approved the constructability of the plans and executed the labor, there is absolutely zero finger-pointing. We take master accountability for the final generational asset."
    }
];

export default function DesignBuildContractor() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/design-build-contractor/hero.jpg"
                    alt="Premium finished design build home by HRF Customs"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Unified Project Delivery
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Design Build Contractor in Paradise, UT
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Eliminate the adversarial gap between architect and builder. HRF Customs provides master accountability, driving your bespoke estate from initial conception through massive structural execution as a single, unified entity.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Integrate Your Build
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
                                Why Utilize a Design-Build Contractor for Your Estate?
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Building a multi-million dollar luxury home in Paradise, Utah is an inherently complex endeavor. The traditional construction model—where a client hires an architect, finishes the designs, and then blindly solicits bids from disconnected builders—is fundamentally broken for projects of this magnitude. It inevitably breeds financial overruns, delayed timelines, and adversarial finger-pointing when paper theories clash with job site realities.
                                </p>
                                <p>
                                    As a premier design-build contractor, HRF Customs destroys this disconnect. We believe that immense value is created during the preconstruction phase. By integrating our master builders alongside the architectural team from day one, we provide critical, real-time feedback on constructability, specialized material supply chains, and aggressive cost-controls before a single permit is ever submitted in Cache Valley.
                                </p>
                                <p>
                                    When you partner with HRF Customs under a unified delivery model, you secure a single point of absolute accountability. We take ownership of the entire lifecycle. Whether engineering massive retaining walls or specifying bespoke interior finishes, we ensure the creative vision is brutally protected and flawlessly executed.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/design-build-contractor/local-relevance.jpg"
                                    alt="Experienced builder surveying a new custom home project"
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
                                        src="/images/services/design-build-contractor/synergy.jpg"
                                        alt="Complex luxury home under construction demonstrating trade synergy"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/premium-build-02.jpg"
                                        alt="Finished design build estate project"
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
                                    Architectural Synergy
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Bridging the Gap Between Paper and Dirt
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    A beautiful blueprint is useless if it cannot be built within budget or without structural compromise. Our design-build model injects hardcore, boots-on-the-ground reality into the theoretical design phase.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <ArrowRightIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                In-Flight Value Engineering
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                We do not wait until bids are due to tell you a design element is cost-prohibitive. We actively analyze the architectural schematics as they evolve, proposing alternative structural steel spanning, HVAC routing, or material sourcing that achieves the exact same luxury aesthetic for significantly allocated capital.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <BuildingIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Accelerated Project Delivery
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                The traditional linear model is slow. By integrating construction management during the design phase, HRF Customs can overlap schedules. We can begin aggressive site excavation and pour complex foundations while the final interior millwork diagrams are still being completed, violently shrinking the total project timeline.
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
                                Execute with Authority
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Managing the Realities of Volatile Terrain
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Paradise, UT offers stunning vistas, but those vistas come with extreme physical demands. Designing for foothills requires respecting the geotechnical realities. Our field execution teams ensure the paper design survives the physical world.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <RulerIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Topographical Adaptation</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Computer models often lie about extreme slopes. Our site superintendents work symbiotically with surveyors and engineers to adjust massive foundation step-downs and retaining wall structures in real-time, preventing catastrophic hillside washouts.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <HardHatIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Ruthless Quality Control</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        We do not rely on third-party inspectors to dictate our standards. Because HRF Customs owns the final liability for the design-build, we deploy aggressive internal hold points. We X-ray concrete densities, laser-level structural framing, and pressure-test envelopes long before drywall.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/design-build-contractor/structural.jpg"
                                    alt="Massive foundation and earthwork prepared by a design build contractor"
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
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Master Accountability</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Zero Finger Pointing</p>
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
                            The Design-Build Sequence
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            A highly synchronized workflow that merges the creative design phase with uncompromising, heavy construction logistics.
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
                                Defining the Design-Build Shift
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on how unifying the architect and the master builder permanently eliminates the most dangerous risks in luxury estate construction.
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
