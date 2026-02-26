import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    ShovelIcon,
    TruckIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    MapPinIcon,
    ClipboardIcon,
    HardHatIcon,
    ShieldIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Excavation Work & Earthmoving in Paradise, UT | HRF Customs",
    description: "HRF Customs provides elite excavation work for massive custom home footprints. We specialize in cutting pads into mountain sides, strategic grading, and complex utility trenching.",
};

const processSteps = [
    {
        title: "Topographical Analysis",
        description: "Before a single machine moves dirt, we cross-reference the architectural topography overlays against the actual, physical reality of the hillside. We identify natural subterranean water flows and potential subterranean bedrock shelves."
    },
    {
        title: "Aggressive Site Clearing",
        description: "We deploy heavy machinery to violently, but precisely, strip the organic topsoil layer and clear massive brush, establishing a stark, workable perimeter while aggressively protecting the established trees slated for integration into the final landscape."
    },
    {
        title: "Precision Footprint Cutting",
        description: "Cutting a massive, level pad into a 30-degree mountain slope requires extreme volumetric calculation. We execute deep cuts and strategic structural fills, ensuring the resulting dirt pad is geotechnically sound enough to hold thousands of tons of concrete."
    },
    {
        title: "Deep Utility Trenching",
        description: "Rural and foothill lots require immense infrastructure. We trench deep, frost-line protected pathways for municipal sewer tie-ins, massive custom septic field installations, heavy-gauge electrical conduit, and primary water lines."
    },
    {
        title: "Defensive Grading",
        description: "Excavation ends with water mitigation. We heavily grade the surrounding dirt away from the fresh foundation, establishing permanent drainage swales that actively force extreme Cache Valley spring snowmelt away from the architectural envelope."
    }
];

const faqs = [
    {
        question: "Why should my builder also handle the heavy excavation?",
        answer: "Dirt determines the foundation, and the foundation dictates the entire house. If you hire a disconnected dirt-mover who over-excavates the pad by three feet, the concrete contractor must then pour thousands of dollars of extra cement to compensate. By controlling the excavation internally, HRF Customs guarantees the pad matches the concrete forms perfectly."
    },
    {
        question: "How do you handle digging in mountainous or rocky terrain?",
        answer: "We expect the worst. When our heavy excavators hit subterranean bedrock or massive glacial boulders typical of Paradise, UT, we do not stop the project. We bring in hydraulic hammers and heavy rippers to fracture the stone, aggressively forcing the footprint to match the architectural intent."
    },
    {
        question: "Do you install septic systems for remote luxury builds?",
        answer: "Yes. Many of our highest-end estates are located miles from municipal sewer connections. We engineer, excavate, and install massive, multi-tank engineered septic systems and sprawling leach fields fully compliant with Cache County Health Department regulations."
    },
    {
        question: "What happens to the massive amounts of dirt you remove?",
        answer: "Volumetric dirt management is an art. Whenever mathematically possible, we 'balance the site'—using the dirt we cut out of the hillside to build up the lower structural pads. If the lot simply has too much material, we mobilize fleets of dump trucks to efficiently export the spoils."
    },
    {
        question: "Do you clear the lot before winter to begin early spring building?",
        answer: "Yes. For our most aggressive schedules, we frequently mobilize excavation equipment in late autumn to clear the pad and punch in temporary dirt driveways. This allows our foundation crews instantaneous, uncontested access the moment the ground thaws in the spring."
    }
];

export default function ExcavationWork() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/excavation-work/hero.webp"
                    alt="Heavy excavation machinery cutting a mountain pad"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Commanding the Earth
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Precision Excavation Work
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Elite construction begins with raw force and calculated geometry. HRF Customs executes massive earthmoving, utility trenching, and aggressive pad preparation for monumental estates across Cache Valley.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Break Ground
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
                                Why Uncompromising Excavation is the Baseline of Success
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Before the architect's vision can be realized, you must first subjugate the terrain. In Paradise and Cache Valley, this is rarely as simple as scraping a flat field. We are routinely tasked with carving massive, level structural pads into unforgiving, 30-degree mountainsides comprised of volatile clay, subterranean springs, and glacial rock.
                                </p>
                                <p>
                                    HRF Customs does not view earthwork as mindless digging; it is the first phase of our master tolerance enforcement. If your excavation contractor over-digs the footprint, it instantly mandates thousands of dollars in over-poured concrete to compensate. If they fail to grade the dirt adequately for drainage, the entire foundation will be permanently besieged by hydrostatic water pressure, leading to catastrophic failure.
                                </p>
                                <p>
                                    We bring our heavy machinery in-house specifically to violently control these variables. By executing our own mass excavation, deep utility trenching, and structural backfill, we ensure that when our concrete crews take the field, they are operating on a geotechnically perfect, mathematically precise canvas.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/excavation-work/local-relevance.webp"
                                    alt="Deep foundation footprint cut into a mountainside"
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
                                        src="/images/services/excavation-work/synergy.webp"
                                        alt="Heavy earthmoving equipment preparing a site"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/custom-home-20230710.webp"
                                        alt="Finished exterior showing aggressive topographical adaptation"
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
                                    Geometrical Authority
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Engineering the Topology
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    Every cubic yard of dirt removed from your lot is calculated explicitly to benefit the final architectural structure. We do not just dig holes; we sculpt the site infrastructure.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <ShovelIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Structural Pads
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                A massive luxury estate exerts crushing pressure on the ground below it. We aggressively compact the dirt pad with heavy machinery and specialized vibrating rollers, frequently hauling in thousands of tons of engineered structural gravel to ensure the earth cannot sink beneath the home.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <MapPinIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Survey & Transit Accuracy
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                We do not guess on elevations. Our operators utilize advanced transit lasers to execute cuts that are accurate to within a fraction of an inch across a two-acre job site, ensuring massive multi-tiered cascading retaining walls follow the architectural plan perfectly.
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
                                Logistics Implemented
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Deep Utility Infrastructure
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                A bespoke estate is a small, self-sustaining ecosystem. The mechanical veins that feed the home—water, gas, data, and sewer—must be buried deep beneath the earth before construction can advance.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <TruckIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Aggressive Trenching</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Cache County frost lines are severe. We mobilize heavy track-hoes to rip deep, aggressive trenches into the mountainside, burying the primary water and sewer mains four to six feet below the surface to guarantee they survive zero-degree winter freezes without rupturing.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Driveway Stabilization</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Your estate requires access long before it is paved. We excavate the massive driveway corridors early in the build, laying down heavy geotechnical fabrics and compounding them with tons of crushed road-base to prevent 80,000-pound concrete trucks from sinking in the Utah mud.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/excavation-work/structural.webp"
                                    alt="Deep utility and foundation trenches dug by heavy machinery"
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
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Industrial Execution</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Heavy Earthwork</p>
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
                            The Excavation Sequence
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            How we systematically mobilize heavy machinery to strip, cut, and enforce geometric order upon rugged mountain terrain.
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
                                Defining the Dirt
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on managing rocky terrain, massive material exportation, and why the first day of dirtwork sets the tone for the entire multi-year build.
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
