import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    HammerIcon,
    LayersIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ClipboardIcon,
    HardHatIcon,
    ShieldIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Elite Framing Contractors in Paradise, UT | HRF Customs",
    description: "HRF Customs provides elite framing contractor services specializing in massive custom homes, heavy timber structural integrity, and complex rooflines in Northern Utah.",
};

const processSteps = [
    {
        title: "Micro-Precision Layouts",
        description: "A framing error on day one compounds into a $50,000 exterior finish error by month six. Our lead framers execute millimeter-perfect structural layouts directly off the theoretical blueprints, snapping reference lines that dictate the entire architectural flow."
    },
    {
        title: "Subfloor & Foundation Integration",
        description: "The connection between the concrete foundation and the wooden structure is the most critical joint in the home. We utilize advanced sill-plating, engineered hold-downs, and massive shear-wall integrations to lock the framing to the earth defensively."
    },
    {
        title: "Heavy Timber & Steel Erection",
        description: "Luxury custom homes do not rely solely on standard lumber. We seamlessly integrate massive structural steel I-beams, flitch plates, and exposed architectural timber trusses to achieve the soaring, column-free great rooms characteristic of Paradise estates."
    },
    {
        title: "Complex Roof Systems",
        description: "We do not build simple boxes. Our framing crews specialize in hyper-complex, multi-pitch rooflines featuring sprawling gables, cantilevered overhangs, and severe weather-engineered truss systems designed to shed thousands of pounds of Cache Valley snow."
    },
    {
        title: "Mechanical Clearances Verification",
        description: "Before the framing is finalized, we rigorously walk the structure to ensure our framing pathways perfectly accommodate custom HVAC ducting, plumbing stacks, and recessed lighting schedules without requiring emergency joist modifications."
    }
];

const faqs = [
    {
        question: "Why should I care who frames my custom home?",
        answer: "Framing is the physical skeleton of your estate. If a wall is out of plumb by a quarter of an inch, your artisan drywallers will spend weeks attempting to hide it, your custom cabinetry will never hang perfectly flush, and your $50,000 massive pocket doors will bind in their tracks. Elite finish work is impossible without elite framing."
    },
    {
        question: "Does HRF Customs handle structural steel integration?",
        answer: "Yes, absolutely. High-end modern and craftsman estates require massive spans that lumber cannot support alone. Our framing crews are highly experienced in rigging, welding, and bolting heavy structural steel beams into the wooden skeleton seamlessly."
    },
    {
        question: "How do you frame for the aggressive Cache Valley weather?",
        answer: "Building in Paradise means respecting the snow. We execute extreme snow-load engineering in our roof systems. We utilize tightly clustered joist spans, heavy-duty hurricane ties, and massive engineered trusses designed explicitly to shrug off severe Rocky Mountain winter accumulation."
    },
    {
        question: "Do you offer 'Turnkey' framing packages?",
        answer: "Yes. For our general contracting clients, framing is integrated seamlessly. We also act as standalone elite framing subcontractors for select architectural firms or homeowners acting as their own GC, providing comprehensive lumber packages and the specialized labor to erect them."
    },
    {
        question: "What makes HRF's framing tolerances different?",
        answer: "We reject the 'good enough for a tract home' mentality. We utilize laser levels rather than just spirit levels. We crown every single stud. We plane high spots on joists before laying subfloors. We demand absolute structural perfection before we allow the next trade to enter the framing."
    }
];

export default function FramingContractor() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/framing-contractor/hero.jpg"
                    alt="Massive custom home framing structure by HRF Customs"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            The Structural Skeleton
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Elite Framing Contractors
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            The foundation of bespoke luxury is millimeter perfection. HRF Customs executes massive timber framing, structural steel integration, and extreme snow-load rooflines for Cache Valley's most monumental estates.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Erect Your Vision
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
                                Why Uncompromising Framing is the Deciding Factor in Luxury
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Framing is the architectural skeleton of your home; it dictates every single phase that follows. If your framing contractor operates with a "close enough" mentality, the entire structure is compromised. Finish carpenters cannot hang bespoke, floor-to-ceiling cabinetry on bowed walls. Massive, multi-pane glass sliders will not operate smoothly if the headers sag by a fraction of an inch.
                                </p>
                                <p>
                                    HRF Customs was forged in the framing industry. We understand that executing complex, modern rooflines and sweeping open-concept living spaces requires an obsession with dimensional tolerances. We do not just build walls; we execute structural engineering. We seamlessly blend heavy raw timber, advanced engineered lumber (LVLs), and structural I-beams to achieve the impossible spans requested by high-end architects.
                                </p>
                                <p>
                                    Our crews operate with mechanical precision. Whether we are framing a 10,000 square foot estate on the Paradise foothills or executing a complex remodel integration, we crown every stud, laser-level every joist, and ensure the structural integrity of the home will outlast generations.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/framing-contractor/local-relevance.jpg"
                                    alt="Detailed framing joints executed by HRF Customs"
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
                                        src="/images/services/framing-contractor/synergy.jpg"
                                        alt="Massive roofline and architectural framing"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/custom-home-20230710.jpg"
                                        alt="Finished exterior showcasing how framing translates to final luxury"
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
                                    Architectural Compliance
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Defending the Future Finishes
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    Elite framing is a defensive maneuver. We build the skeleton explicitly to protect and elevate the incredibly expensive finish trades that will follow us into the structure months later.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <HammerIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Dead-Level Substrates
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                Wide-plank white oak flooring and large-format Italian tile will immediately crack or squeak on a compromised subfloor. Our framing crews aggressively plane high joists, shim low spots, and utilize advanced adhesives to ensure a dead-flat, absolutely silent foundation for your flooring.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <LayersIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Pre-Emptive Backing
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                We read the interior design blueprints intimately. Before a single sheet of drywall is hung, we install hundreds of pounds of solid wood backing inside the walls. This guarantees that when it is time to mount heavy flat screens, floating vanities, or massive art installations, there is bulletproof structural wood exactly where the designer intends.
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
                                Engineering Realities
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Surviving Extreme Environments
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Building a three-story structural skeleton on the side of a mountain in Cache Valley is not for novices. We engineer our framing to withstand hurricane-force canyon winds, seismic activity, and crushing snow loads.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <HardHatIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Shear & Seismic Integrity</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Utah's topography demands aggressive seismic engineering. We execute incredibly dense shear wall nailing patterns and heavily integrate specialized Simpson Strong-Tie hardware to turn the individual walls into a unified, monolithic structural box capable of resisting massive lateral forces.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Dynamic Load Bridging</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        We aggressively bridge all long-span floor joists. This structural technique locks tall, deep engineered joists together, forcing them to share dynamic loads like heavy foot traffic or massive central kitchen islands, permanently eliminating structural "bounce" or floor flex into the estate.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/framing-contractor/structural.jpg"
                                    alt="Complex heavy timber and structural steel framing hybrid"
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
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Dimensional Authority</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Millimeter Tolerances</p>
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
                            The Framing Sequence
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            How we methodically erect massive, uncompromising skeletons for Northern Utah's most prestigious custom homes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-[var(--color-neutral-100)] shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative group hover:-translate-y-2 transition-transform duration-500 text-left overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[var(--color-neutral-100)] group-hover:bg-[var(--color-primary)] transition-colors duration-500"></div>
                                <div className="text-[12px] font-bold tracking-[0.2em] text-[var(--color-neutral-400)] group-hover:text-[var(--color-primary)] transition-colors duration-500 uppercase mb-4 pt-2">
                                    0{index + 1} // Precision
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
                                Technical Clarity
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Explaining the Skeleton
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on structural integrity, weather engineering, and why our framing methodology is non-negotiable for luxury estates.
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
