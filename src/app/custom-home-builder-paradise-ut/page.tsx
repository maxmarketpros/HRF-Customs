import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    ThermometerIcon,
    TruckIcon,
    ClipboardIcon,
    DollarIcon,
    CheckCircleIcon,
    MountainSnowIcon,
    LayersIcon
} from "@/components/icons";

export const metadata = {
    title: "Custom Home Builder in Paradise, UT | HRF Customs",
    description: "HRF Customs is the premier custom home builder in Paradise, UT. We specialize in high-elevation framing, complex engineering, and elite luxury builds.",
};

const processSteps = [
    {
        title: "Site Engineering & Consultation",
        description: "We evaluate your Paradise build site for soil volatility, high water tables, and driveway access restrictions before finalizing the architectural blueprints. Every build begins with hard data."
    },
    {
        title: "Preconstruction & Permitting",
        description: "Executing complex Cache County zoning laws, securing structural engineering stamps, and finalizing an ironclad, line-item project budget so there are zero financial surprises."
    },
    {
        title: "Heavy Earthwork & Foundation",
        description: "Pre-winter excavation, aggressive valley grading, and massive concrete pours designed specifically for aggressive freeze-thaw cycles common in Northern Utah."
    },
    {
        title: "Structural & High-Altitude Framing",
        description: "Our specialized framing units erect the skeleton, engineering massive roof systems strictly rated for extreme mountain snow loads and thermal bridging reduction."
    },
    {
        title: "Finish Trades & Closeout",
        description: "Elite interior carpentry, rigorous final inspections, and the comprehensive handover of your monumental custom home build, fully documented and warranty-backed."
    }
];

const faqs = [
    {
        question: "How long does a custom home build typically take in Paradise, UT?",
        answer: "Due to the extreme winter weather windows in Cache Valley, an elite custom home timeline can range from 12 to 18 months. We build aggressive baseline schedules that factor in delayed excavation during hard freezes and potential supply chain logistics on rural properties. Our goal is always uncompromising quality over rushed delivery."
    },
    {
        question: "Do you handle the Cache County building permits and engineering?",
        answer: "Yes. HRF Customs coordinates the entire permitting apparatus. We work directly with structural and civil engineers to ensure every specification meets or exceeds Cache County's rigorous residential building codes. You will not have to navigate the local bureaucracy alone."
    },
    {
        question: "How do you manage winter construction in the high-elevation areas of Paradise?",
        answer: "Winter construction is our specialty. We schedule heavy foundation pours before the frost line deepens and prioritize getting the structure 'dried in' so interior trades can operate efficiently through the blizzards. We deploy advanced ground thawing and concrete curing techniques when required."
    },
    {
        question: "Can you coordinate well and septic installations for rural lots?",
        answer: "Absolutely. Many of the premier lots in Paradise, Avon, and surrounding rural foothills require off-grid utility setup. We manage the scheduling and trenching for well drilling, massive septic tanks, and power drops long before vertical construction begins."
    },
    {
        question: "What is the difference between a general contractor and a custom home builder?",
        answer: "A true custom home builder doesn't just hire subcontractors; they lead the architectural execution. HRF Customs is an owner-led operation. We don't just hold the clipboard—we actively manage the framing, concrete, and intense structural engineering. A general contractor might just push paper, but we push the schedule and the standard."
    }
];

export default function ParadiseCustomHomeBuilder() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full h-[60vh] min-h-[500px] lg:h-[70vh] flex items-center pt-20">
                <Image
                    src="/images/portfolio/custom-home-20230710.jpg"
                    alt="Premium custom home in Paradise, UT built by HRF Customs"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/30"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Service Area Coverage
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Custom Home Builder in Paradise, UT
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            HRF Customs is the premier general contractor executing elite, monumental custom homes for landowners across Paradise and Cache Valley. We specialize in high-elevation framing, complex structural engineering, and managing extreme construction logistics for uncompromising residential builds.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Initiate A Project
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
                                Why Hire a Custom Home Builder in Paradise, UT?
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Building a substantial residential estate in the foothills or valley floor of Paradise is fundamentally different from standard residential subdivision construction in the city. The sloping terrain is highly volatile, the operational weather windows are significantly contracted, and the structural engineering requirements are totally uncompromising. You cannot entrust a multi-million dollar property to a volume builder who lacks specific high-altitude experience.
                                </p>
                                <p>
                                    As a specialized custom home builder operating extensively in Paradise and the greater Cache Valley region, HRF Customs brings over fifteen years of hard data, site management experience, and elite trade relationships to your project. You require a seasoned contractor who accurately anticipates frozen ground sequencing scenarios, massive spring runoff grading, and complex rural logistics before the architectural blueprints are even sent for permitting.
                                </p>
                                <p>
                                    We do not cut corners under any circumstances. We manage heavy-duty site excavation, secure uncompromising geotechnical soil reports, and construct structural timber framing designed specifically to handle severe mountain wind sheer and massive winter snow loads. When you hire our team, you are hiring a localized authority in regional construction management.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/paradise/finished-exterior-paradise.jpg"
                                    alt="Fully finished luxury custom home built by HRF Customs in Paradise, Utah"
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

            {/* 3. TRANSPARENCY & MANAGEMENT (NEW MODERN SECTION) */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative border-y border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Elite General Contracting
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Financial Transparency and Trade Accountability
                        </h2>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            A legendary custom home is only as successful as the financial and operational management backing it. We remove the uncertainty from luxury construction by deploying a strictly governed, open-book general contracting model.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
                        <div className="bg-white p-10 lg:p-12 rounded-3xl border border-[var(--color-neutral-100)] shadow-[0_15px_40px_rgba(0,0,0,0.03)] group hover:-translate-y-2 transition-transform duration-500 text-left">
                            <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8 transition-transform group-hover:scale-110">
                                <DollarIcon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-4">
                                Aggressive Budget Control
                            </h3>
                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                Before ground is ever broken on your Paradise property, you receive a massive, highly detailed line-item budget. We bid out every single trade phase—from excavation to finish hardware—utilizing our network of vetted local subcontractors. If scope alterations arise, we deploy a ruthless change order protocol requiring your explicit signature before capital is released or tools are picked back up.
                            </p>
                        </div>

                        <div className="bg-white p-10 lg:p-12 rounded-3xl border border-[var(--color-neutral-100)] shadow-[0_15px_40px_rgba(0,0,0,0.03)] group hover:-translate-y-2 transition-transform duration-500 text-left">
                            <div className="w-14 h-14 bg-[var(--color-primary)]/10 rounded-2xl flex items-center justify-center text-[var(--color-primary)] mb-8 transition-transform group-hover:scale-110">
                                <ClipboardIcon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-4">
                                Master Trade Coordination
                            </h3>
                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                We act as your singular point of massive accountability. Our project managers relentlessly sequence specialized trades to prevent schedule overlap and site congestion. We verify the insurance policies, mandate extreme daily site cleanups, and enforce uncompromising quality control hold points. When you hire HRF Customs, you are hiring a sophisticated logistical shield.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. PROCESS SECTION */}
            <section className="py-24 lg:py-32 bg-white relative">
                <div className="page-container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <h3 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Our Paradise Custom Home Building Process
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            Executing a massive build requires a ruthless, step-by-step operational framework. From initial groundbreak to the final coat of paint, our management system ensures intense accountability throughout every phase of construction.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="bg-white p-8 rounded-2xl border border-[var(--color-neutral-100)] shadow-[0_10px_30px_rgba(0,0,0,0.02)] relative group hover:-translate-y-1 transition-transform duration-300 text-left">
                                <div className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary-light)] uppercase mb-4 border border-[var(--color-primary-light)]/30 px-3 py-1 rounded-full w-max">
                                    Phase {index + 1}
                                </div>
                                <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
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

            {/* 5. SAFETY & STANDARDS + LOCAL RELEVANCE */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#010613] opacity-100"></div>
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/framing/framing-02.jpg"
                                    alt="Advanced structural framing for a custom home in Paradise, Utah"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl mb-2">Mastering the Northern Utah Terrain</h4>
                                        <p className="text-neutral-300 text-sm leading-relaxed">We strictly engineer our structures to excel against rigorous freeze-thaw cycles, sub-zero winters, and heavy rural wind vectors common throughout Cache Valley.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary-light)]/20">
                                Engineered Tolerances
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Structural Framing and Jobsite Protocol
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                The ultimate safety and generational integrity of a luxury custom home build rely entirely on the initial framing and structural engineering phases. We do not trust these critical foundational components to the lowest bidder. HRF Customs deploys intense mandatory jobsite protocol, ensuring sheer walls, massive glulam beams, and deep foundation waterproofing are executed flawlessly to code.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-primary-light)] shrink-0">
                                        <ThermometerIcon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-lg mb-1">Temperature Extremes</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">Cache Valley winters are brutal. We manage exacting concrete curing temperatures and specialize in advanced framing insulation techniques to permanently lock out the cold.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-primary-light)] shrink-0">
                                        <TruckIcon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-lg mb-1">Rural Site Logistics</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">Building aggressively in Paradise often means managing tight driveway access constraints and coordinating heavy machinery staging areas securely and efficiently.</p>
                                    </div>
                                </div>
                                <div className="flex gap-5">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-primary-light)] shrink-0">
                                        <MountainSnowIcon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-lg mb-1">Mountain Snow Loads</h4>
                                        <p className="text-neutral-400 text-sm leading-relaxed">Roofs in the Paradise foothills must withstand incredible weight. Our framing crews adhere to strict structural engineering stamps to prevent deflection.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. SYNERGY SECTION (NEW MODERN SECTION) */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden border-b border-[var(--color-neutral-100)] text-left">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-6 relative order-2 lg:order-1">
                            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/portfolio/premium-build-01.jpg"
                                    alt="Architectural execution on a custom home in Northern Utah"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[var(--color-primary)]/10 blur-[60px] rounded-full pointer-events-none -z-10"></div>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                Architectural Synergy
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Design, Engineering, and Execution
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    The gap between a beautiful architectural rendering and a structurally sound, physically built home can be chaotic. We act as the ultimate bridge between the architect's grand vision and the literal dirt on your lot.
                                </p>
                                <p>
                                    During the preconstruction phase, we collaborate heavily with your chosen architect to perform aggressive value engineering. We identify complex structural overhangs, massive window spans, or unique rooflines that may drastically impact your budget or timeline given the local conditions in Paradise. By solving these engineering roadblocks on paper, we prevent devastating delays on the actual job site. This synergy ensures the final product is both stunningly beautiful and rigorously fortified.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative text-left">
                <div className="page-container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                                Service Area Data
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Paradise, UT Build Logistics
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Comprehensive answers to common operational questions regarding high-end custom home construction within Cache Valley.
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

            {/* 8. CONTACT CTA */}
            <ContactCTA />

            <Footer />
        </main>
    );
}
