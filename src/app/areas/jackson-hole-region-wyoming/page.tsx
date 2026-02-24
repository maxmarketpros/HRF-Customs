import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import ServicesGrid from "@/components/ServicesGrid";
import Image from "next/image";
import Link from "next/link";
import {
    MapPinIcon,
    ArrowRightIcon,
    BuildingIcon,
    HardHatIcon,
    MountainSnowIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Luxury Home Builder in Jackson Hole, WY | HRF Customs",
    description: "HRF Customs brings elite master-builder contracting to Jackson Hole, executing monumental mountain estates driven by relentless structural engineering.",
};

const regionalServices = [
    {
        title: "Master Planning & Management",
        description: "Executing a massive estate requires military-grade logistics before the physical build begins.",
        links: [
            { text: "Home Build Consultation", url: "/services/home-build-consultation" },
            { text: "Preconstruction Planning", url: "/services/preconstruction-planning" },
            { text: "Project Management", url: "/services/project-management" }
        ]
    },
    {
        title: "The Core Build Structure",
        description: "We are not desk-bound brokers. We manage the elite execution of the primary home structure.",
        links: [
            { text: "Luxury Custom Home Builder", url: "/services/luxury-custom-home-builder" },
            { text: "Design Build Contractor", rawUrl: "/services/design-build-contractor", url: "/services/design-build-contractor" },
            { text: "General Contracting", url: "/services/general-contractor-for-custom-homes" }
        ]
    },
    {
        title: "Heavy Geotechnical Trades",
        description: "Controlling the dirt and enforcing the structural bones of the mountain estate.",
        links: [
            { text: "Excavation Work", url: "/services/excavation-work" },
            { text: "Concrete Services", url: "/services/concrete-services" },
            { text: "Framing Contractors", url: "/services/framing-contractors" }
        ]
    }
];

const faqs = [
    {
        question: "Does HRF Customs build in the greater Jackson Hole territory?",
        answer: "Yes. We operate across extreme-end luxury sectors flanking the Idaho/Wyoming border, bringing our massive structural capabilities directly into the Jackson Hole and surrounding alpine regions."
    },
    {
        question: "How do you navigate Jackson’s extreme weather and snow loads?",
        answer: "Every estate we build in the high-country is heavily engineered. We utilize massive structural steel integrations, tremendous concrete footings, and aggressive framing blueprints proven to withstand intense alpine wind shears and crushing snow accumulations."
    },
    {
        question: "Why hire a builder based out of Utah for a Jackson Hole build?",
        answer: "The local trade pool in Jackson Hole is notoriously overburdened and extremely expensive. By utilizing HRF Customs, you tap into an elite, highly-vetted network of master subcontractors that we physically import to execute your project faster and to a much higher standard."
    },
    {
        question: "How do out-of-state buyers manage a Jackson build?",
        answer: "Total transparency through elite project management. We cater to high-net-worth investors, delivering daily high-resolution photo logs, comprehensive financial data, and direct phone lines to our actual founding commanders who are on-site driving the build."
    },
    {
        question: "Do you handle preconstruction and lot-feasibility?",
        answer: "Absolutely. We command thorough raw-land checks to analyze well depths, deep-septic logistics, and complex grade issues before you drop millions on a remote mountain property."
    }
];

export default function JacksonHoleArea() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/areas/jackson-hole-region-wyoming/hero.jpg"
                    alt="Massive custom luxury mountain home built in Jackson Hole Wyoming"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Pinnacle Alpine Execution
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Luxury Home Builder in<br /> Jackson Hole, WY
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            HRF Customs brings elite structural execution to the pinnacle of American luxury real estate. We engineer and construct monumental mountain estates built to defy the harsh Jackson Hole climate.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Initiate A Project Form
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
                                Why Hiring a Custom Home Builder in Jackson Hole Demands Absolute Authority
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Building in Jackson Hole is one of the most intense construction environments in the country. Constructing a multi-million dollar masterpiece here means confronting paralyzing cold, staggering snow-loads, and hyper-complex remote topography. You cannot trust this landscape to paper contractors or overwhelmed local builders.
                                </p>
                                <p>
                                    HRF Customs attacks the Jackson market with massive logistical superiority. We bypass the strained local trade pool to deliver our own heavily vetted, elite artisans directly across the border. We construct fortified alpine robustholds by leveraging heavy <Link href="/services/concrete-services" className="text-[var(--color-primary)] hover:underline font-bold">concrete retaining infrastructure</Link>, extreme <Link href="/services/framing-contractors" className="text-[var(--color-primary)] hover:underline font-bold">structural framing tolerances</Link>, and militant <Link href="/services/project-management" className="text-[var(--color-primary)] hover:underline font-bold">project management</Link>.
                                </p>
                                <p>
                                    Our project commanders physically govern your estate's execution on-site. We specialize in accommodating out-of-state executives and legacy buyers by delivering pristine daily visual data and unbreakable financial transparency.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/areas/jackson-hole-region-wyoming/local-relevance.jpg"
                                    alt="Expertly framed luxury property in remote Jackson Wyoming"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--color-primary)]/10 blur-[100px] -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES GRID SECTION */}
            <ServicesGrid />

            {/* 3. SYNERGY & LINKS (SERVICES HUB) */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative border-y border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-5 relative order-2 lg:order-1">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/areas/jackson-hole-region-wyoming/synergy.jpg"
                                    alt="High-end finishes for a Jackson Hole custom estate"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--color-neutral-900)]/90 via-[var(--color-neutral-900)]/40 to-transparent p-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shrink-0 shadow-lg">
                                            <BuildingIcon size={20} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold tracking-wider uppercase text-xs">Total Integration</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-semibold text-lg">Uncompromising Authority</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/5 blur-[80px] -z-10 rounded-full"></div>
                        </div>
                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="text-left">
                                <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                                    Complete Ecosystem
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    The Full Spectrum of a Luxury Home Builder in Jackson Hole
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium max-w-2xl">
                                    We do not entrust your monumental estate to low-tier subcontractors. As absolute experts, HRF Customs maintains internal throttle over the heaviest logistical and mechanical phases of the build. We import our own elite operations to ensure the asset performs flawlessly. Explore our core operational phases below.
                                </p>

                                <div className="grid md:grid-cols-2 gap-8">
                                    {regionalServices.map((section, index) => (
                                        <div key={index} className={`space-y-4 ${index === 2 ? 'col-span-full md:col-span-1 border-t border-[var(--color-neutral-200)] pt-6 md:border-t-0 md:pt-0' : ''}`}>
                                            <h3 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)]">
                                                {section.title}
                                            </h3>
                                            <p className="text-sm text-[var(--color-neutral-600)] mb-4">
                                                {section.description}
                                            </p>
                                            <ul className="space-y-3">
                                                {section.links.map((link, linkIndex) => (
                                                    <li key={linkIndex}>
                                                        <Link href={link.url} className="group flex items-center gap-2 text-[var(--color-neutral-700)] hover:text-[var(--color-primary)] transition-colors font-medium text-sm">
                                                            <ArrowRightIcon size={16} className="text-[var(--color-primary)] group-hover:translate-x-1 transition-transform" />
                                                            {link.text}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
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
                                Alpine Logistics
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Conquering Extreme Elevation
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                Jackson land demands absolute military-grade project orchestration. We engineer, estimate, and execute flawlessly within this staggering and brutally unforgiving environment.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <MountainSnowIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Absolute Structural Defense</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        We integrate hyper-aggressive framing parameters with complex, massive-scale utility systems. We ensure your luxury asset effortlessly brushes off the alpine winter. We interlock massive <Link href="/services/excavation-work" className="text-[var(--color-primary-light)] hover:underline">high-country terraforming</Link> with deep footings to permanently chain your home to the Tetons.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <MapPinIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Preconstruction Reality Checks</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Do not assume any Jackson parcel is a straight-forward build. As master builders, we execute intense <Link href="/services/preconstruction-planning" className="text-[var(--color-primary-light)] hover:underline">preconstruction feasibility checks</Link> to audit well capabilities, avalanche setbacks, and heavy soil complexities before you make a multi-million dollar mistake.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/areas/jackson-hole-region-wyoming/structural.jpg"
                                    alt="Massive structural retaining walls built in Jackson Hole"
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
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Ground Truth</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">The Immutable Masterpiece</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. FAQ SECTION */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative text-left">
                <div className="page-container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                                Alpine Intelligence
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Demystifying Execution for a Custom Home Builder in Jackson
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                We operate with absolute financial and operational transparency. Here are the realities of building monumental alpine estates in the Jackson Hole region.
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
