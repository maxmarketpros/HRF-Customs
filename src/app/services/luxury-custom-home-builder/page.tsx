import Header from "@/components/Header";
import { Metadata } from 'next';
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
    LayersIcon,
    ShieldIcon,
    HomeIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Luxury Custom Home Builder in Paradise, UT | HRF Customs",
    description: "HRF Customs is the elite luxury custom home builder in Paradise, UT. We deliver uncompromising architectural execution, extreme privacy, and premium finishes for high-net-worth clients.",
};

const processSteps = [
    {
        title: "Exclusive Consultation & Feasibility",
        description: "We begin with a deeply confidential assessment of your Paradise estate lot. Our team evaluates sightlines, privacy topography, and logistical access to ensure your architectural vision is structurally viable before immense capital is deployed."
    },
    {
        title: "Value Engineering & Preconstruction",
        description: "Working synchronously with your architect, we heavily scrutinize the blueprints. We source elite, massive-format materials globally while rigorously stamping structural load capacities for Cache Valley's extreme snow conditions."
    },
    {
        title: "Geotechnical Foundations",
        description: "Luxury requires permanence. We execute aggressive valley grading and pour massive, fortified concrete foundation systems designed to remain entirely immovable despite the volatile freeze-thaw cycles of the Northern Utah foothills."
    },
    {
        title: "Monumental Superstructure Framing",
        description: "Our core competency. We erect complex timber and steel skeletons that allow for sweeping, panoramic glass walls and soaring vaulted ceilings without ever compromising structural integrity against heavy mountain winds."
    },
    {
        title: "Bespoke Finishes & Handover",
        description: "The final phase involves master carpenters and specialized artisans executing your interior vision with microscopic precision. The result is a monumental, legacy estate, delivered with a comprehensive, warranty-backed handover."
    }
];

const faqs = [
    {
        question: "How does HRF Customs ensure privacy during the luxury build process?",
        answer: "We understand that our high-net-worth clients require absolute discretion. We enforce strict job site security, utilize non-disclosure agreements with all localized subcontractors, and manage supply chain deliveries to minimize footprint and exposure in the Paradise community."
    },
    {
        question: "Can you source rare or imported materials for custom finishes?",
        answer: "Yes. Building a bespoke luxury estate means moving beyond standard supplier catalogs. Whether you require imported Italian marble, reclaimed heritage timbers, or highly specialized smart-home integrations, our procurement network brings the world's best materials directly to Cache Valley."
    },
    {
        question: "How do you handle massive architectural glass systems in a high-elevation climate?",
        answer: "Sweeping views are paramount in Paradise, UT. We collaborate with cutting-edge structural glass manufacturers to install massive, thermally broken window walls. Our framing division meticulously engineers the surrounding headers to prevent deflection, ensuring the glass remains safe and highly energy-efficient despite sub-zero winters."
    },
    {
        question: "Is HRF Customs an owner-led luxury builder?",
        answer: "Absolutely. When you initiate a multi-million dollar estate, you do not want your project handed off to an entry-level superintendent. The ownership of HRF Customs is directly involved in the structural execution and financial management of your luxury build from day one."
    },
    {
        question: "How do you manage extreme budget controls on massive luxury projects?",
        answer: "Financial hemorrhage is unacceptable. We utilize an open-book general contracting model. You receive a heavily detailed, line-item budget during preconstruction. Every finish, fixture, and framing stud is accounted for. Any scope adjustments require a rigorous, signed change-order protocol before execution."
    }
];

export default function LuxuryCustomHomeBuilder() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/luxury-custom-home-builder/hero.webp"
                    alt="Massive premium craftsman luxury home built by HRF Customs"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Elite Estate Construction
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Luxury Custom Home Builder in Paradise, UT
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            For those who refuse to compromise. HRF Customs designs and physically erects monumental luxury estates in Cache Valley. We bridge the gap between bespoke architectural vision and uncompromising structural permanence.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Initiate A Legacy Build
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
                                Why Hire a Luxury Custom Home Builder in Paradise, UT?
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Paradise, Utah represents one of the most exclusive and geographically stunning enclaves in Northern Utah. Landowners here demand more than just a large footprint; they demand a legacy property that harmonizes with the surrounding peaks while providing an impenetrable sanctuary from the extreme elements. True luxury construction is not achieved by merely upgrading finishes in a standard subdivision layout; it is born from bespoke, ground-up architectural execution.
                                </p>
                                <p>
                                    As the premier luxury custom home builder operating in Cache Valley, HRF Customs caters to a highly discerning clientele. We understand that a multi-million dollar estate requires a radically different operational playbook. Our process is built entirely around extreme financial transparency, rigorous trade accountability, and an obsession with microscopic structural tolerances.
                                </p>
                                <p>
                                    When you select HRF Customs to construct your luxury estate, you are securing a highly specialized firm capable of sourcing massive-format imported materials, engineering soaring architectural glass walls, and managing heavy excavation on volatile mountainside terrain. We do not just build houses; we curate generational landmarks in Paradise.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/luxury-custom-home-builder/local-relevance.webp"
                                    alt="Massive completed luxury estate spanning across a Paradise UT landscape"
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
                                        src="/images/services/luxury-custom-home-builder/synergy.webp"
                                        alt="Pristine finished interior of a luxury home showcasing material synergy"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/premium-build-01.webp"
                                        alt="Architectural execution on a custom luxury home"
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
                                    Elite Trade Management
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Uncompromising Trade Synergy & Financial Control for Luxury Custom Home Builders in Paradise, UT
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    Executing a true luxury build requires orchestrating dozens of highly specialized artisans and massive structural trades. Chaos is the enemy of perfection. We shield your capital through an elite general contracting model that prioritizes aggressive accountability over volume.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <DollarIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Granular Budget Transparency
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                We operate on an open-book system. Before excavation begins, you are presented with a massive, ironclad budget breaking down every premium fixture and framing lumber package. There are no hidden fees. Any architectural deviations require a strictly enforced change order, explicitly signed by you, ensuring your capital is never deployed blindly.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Master Subcontractor Curation for Luxury Custom Home Builders in Paradise, UT
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                Creating bespoke, imported finishes or executing monumentally complex smart-home wiring cannot be trusted to entry-level crews. We only deploy heavily vetted, elite subcontractors who share our obsession with perfection. We coordinate their schedules ruthlessly to prevent site congestion and enforce grueling quality control hold points before walls are ever closed.
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
                                Structural Dominance
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Extreme Geotechnical and Structural Standards for Luxury Custom Home Builders in Paradise, UT
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Extravagant finishes mean nothing if the superstructure fails. Building luxury estates in the Paradise topology requires battling high water tables, volatile clay soils, and severe winters. We engineer your property to be a fortress from the sub-grade up.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <LayersIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Aggressive Earthwork</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        We demand uncompromising geotechnical soil logging. We execute massive deep foundation pours and engineered retaining walls designed to definitively stabilize volatile foothills and secure your investment against any seismic or runoff threats.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <HomeIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Monumental Timber Framing</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Our specialized framers erect massive glulam and steel-reinforced skeletons. We strictly adhere to high-altitude engineering stamps, ensuring your sweeping roofs simply laugh at crushing mountain snow loads and shear force canyon winds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/luxury-custom-home-builder/structural.webp"
                                    alt="Massive structural timber framing for a luxury custom home"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent"></div>
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.5)]">
                                            <CheckCircleIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Engineered For</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Generational Permanence</p>
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
                            The Luxury Custom Home Builder Estate Sequence in Paradise, UT
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            A legendary property demands a flawless, ruthlessly organized schedule. We drive the operational timeline to ensure high-grade finishes are protected and capital is deployed efficiently.
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
                                Elite Client Data
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Luxury Custom Home Builder Realities in Paradise, UT
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers defining the massive logistical and security requirements of building a high-net-worth property in Cache Valley.
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
