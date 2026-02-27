import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    DropletIcon,
    MountainSnowIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    RulerIcon,
    ClipboardIcon,
    HardHatIcon,
    ShieldIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Structural Concrete Services in Paradise, UT | HRF Customs",
    description: "HRF Customs executes massive structural concrete packages for luxury estates in Cache Valley. We specialize in deep foundations, heavy retaining walls, and architectural flatwork.",
};

const processSteps = [
    {
        title: "Exact Topographical Formwork",
        description: "Hillside lots in Paradise demand extreme precision. We utilize advanced digital surveying and laser levels to erect complex formwork that perfectly steps down the natural grade, ensuring the foundation exactly matches the architectural blueprints."
    },
    {
        title: "Aggressive Rebar Reinforcement",
        description: "We do not minimum-code our steel schedules. We heavily over-engineer our retaining walls and foundations with dense rebar grids, tying thousands of pounds of steel to combat the immense hydrostatic pressures of Cache Valley snowmelt."
    },
    {
        title: "High-PSI Mix Design Validation",
        description: "Not all concrete is equal. For multi-million-dollar estates, we mandate custom, high-PSI mix designs from the batch plant. We actively monitor slump tests to guarantee the compressive strength of the pour meets our extreme structural requirements."
    },
    {
        title: "Monolithic Placement Strategy",
        description: "Cold joints are structural liabilities. When pouring massive footprints, we orchestrate fleets of pump trucks and continuous concrete delivery to execute massive monolithic pours, ensuring the foundation acts as a single, unbreakable rock."
    },
    {
        title: "Controlled Thermal Curing",
        description: "Concrete must cure slowly to reach maximum strength. During aggressive Utah winters, we deploy ground heaters, insulated blankets, and specialized chemical admixtures to prevent freezing. In blistering summers, we manage evaporation rates to prevent surface cracking."
    }
];

const faqs = [
    {
        question: "Why is structural concrete so critical for mountain builds?",
        answer: "Gravity and water are relentless. In the foothills of Paradise and Cache Valley, your foundation must resist the immense weight of the home pressing down, the lateral force of the hillside pushing in sideways, and the hydrostatic pressure of spring snowmelt. Weak concrete will inevitably fail under these combined forces."
    },
    {
        question: "What is the difference between architectural concrete and structural concrete?",
        answer: "Structural concrete forms the hidden bones—footings, stem walls, and shear-anchors designed purely for strength. Architectural concrete is meant to be seen—exposed retaining walls, stamped patios, and polished interior monoliths. HRF Customs commands mastery over both disciplines."
    },
    {
        question: "Can you pour concrete during the Utah winter?",
        answer: "Yes, but it requires expensive, tactical mitigation. Concrete that freezes before it cures will shatter structurally. We deploy massively insulated blankets, hydronic ground heaters, and specialized hot-water mix designs to force the concrete to cure properly even in sub-freezing January temperatures."
    },
    {
        question: "Do you build exterior retaining walls?",
        answer: "Yes. Retaining walls on luxury hillside estates are essentially vertical dams holding back mountains. We engineer and pour massive, multi-tiered reinforced concrete walls with dedicated French drain systems to permanently stabilize the lot geometry."
    },
    {
        question: "How do you prevent concrete slabs from cracking?",
        answer: "All concrete will eventually crack; the goal is to control *where* it cracks. We saw-cut strategic control joints into fresh slabs within 12 hours of pouring, dictating the stress reliefs. We also utilize fiberglass-reinforced mix designs and heavy rebar grids to minimize surface separation."
    }
];

export default function ConcreteServices() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/concrete-services/hero.webp"
                    alt="Massive structural concrete foundation pour by HRF Customs"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            The Unbreakable Baseline
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Structural Concrete Services in Paradise, UT
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Luxury estates demand an uncompromising anchor. HRF Customs executes deep structural foundations, massive hillside retaining walls, and flawless architectural flatwork for the most demanding builds in Cache Valley.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Secure Your Footprint
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
                                Why Structural Concrete is the Greatest Liability in Mountain Construction in Paradise, UT
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    To build a monumental 10,000-square-foot estate on the steep foothills of Paradise, you must first wage war against the earth. Gravity, lateral soil shifts, and intense subterranean hydrostatic pressure will actively attempt to crush and rip your foundation apart from the moment it is poured.
                                </p>
                                <p>
                                    HRF Customs does not gamble with the structural integrity of your investment. We treat concrete as an engineered weapon against the elements. We execute massive monolithic footings driven deep below the Cache County frost line, ensuring aggressive freeze-thaw cycles cannot heave the structure. Our retaining walls are fortified with immense rebar cages, designed specifically to hold back thousands of tons of volatile hillside dirt indefinitely.
                                </p>
                                <p>
                                    A failing foundation turns a $5 million asset into a total teardown. By maintaining absolute control over the concrete phase internally, we guarantee the structural tolerances required for the massive steel beams, soaring timber frames, and fragile glass expanses that will eventually rest upon it.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/concrete-services/local-relevance.webp"
                                    alt="Complex concrete formwork and rebar structure in Utah"
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
                                        src="/images/services/concrete-services/synergy.webp"
                                        alt="Cured structural retaining walls on steep lot"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/custom-home-20230710.webp"
                                        alt="Finished exterior resting on solid HRF Customs foundation"
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
                                    Structural Concrete Services: Where the Blueprint Hits the Dirt
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    Concrete is the unforgiving translation of paper into reality. If a foundation is poured out of square, every subsequent trade—framers, cabinetmakers, roofers—must actively try to hide the defect for the next two years of construction.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <RulerIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Zero-Tolerance Formwork
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                We execute formwork with framing-level precision. We pull complex diagonals to verify absolute square before a single yard of concrete is ordered. We mandate plumb walls, dead-level footings, and perfectly located J-bolt anchor points so the massive structural skeleton snaps in seamlessly.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <MountainSnowIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Architectural Concrete Flatwork in Paradise, UT
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                Concrete shouldn't just be hidden in the dirt. We specialize in high-end exterior living spaces, executing sweeping, exposed-aggregate driveways, massive stamped patios, and clean-line modern steps that enhance the architectural aesthetic of the finished luxury estate.
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
                                Structural Defenses
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Combating Water and Ice in Paradise, UT
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Cache Valley experiences massive snow accumulation and volatile spring melts. If you simply pour a concrete wall into the side of a mountain without defensive drainage, hydrostatic pressure will eventually destroy it.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <DropletIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Aggressive Waterproofing</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Raw concrete is porous. Before we bury a multi-story foundation, we execute military-grade exterior waterproofing membranes. We combine heavy rubberized asphalt coatings with dimpled drain-board matrices to violently force subterranean water down to the footing drains, completely sealing your lower-level theaters and wine cellars.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ArrowRightIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">French Drain Schematics</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Water must have a path of least resistance away from the structure. We encase slotted high-flow drainage pipes in thousands of pounds of washed drain rock at the base of every footing. This system actively collects and evacuates groundwater before it can build pressure against the concrete walls.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/concrete-services/structural.webp"
                                    alt="Deep structural foundation and waterproofing execution in Utah"
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
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Geotechnical Mastery</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Unbreakable Anchors</p>
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
                            The Structural Concrete Sequence in Paradise, UT
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            How we aggressively engineer, form, and pour massive concrete monoliths for extreme mountain estates.
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
                                Technical Clarity
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Explaining the Foundation: Structural Concrete FAQ
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on structural mix designs, aggressive high-elevation winter pours, and our extreme waterproofing protocols.
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
