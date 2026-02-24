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
    ShieldIcon,
    MountainSnowIcon,
    TruckIcon,
    LayersIcon,
    HammerIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "About HRF Customs | Elite General Contractors & Custom Home Builders",
    description: "HRF Customs is not a standard home builder. We are an elite, owner-led general contractor specializing in highly complex, massive custom homes in extreme environments.",
};

const historicalTimeline = [
    {
        year: "2008",
        title: "Foundation & Framing Mastery",
        description: "HRF Customs was born not in a boardroom, but in the trenches of Cache Valley. Our founders started as elite timber framers and concrete specialists, mastering the actual physical mechanics of building long before ever managing a spreadsheet."
    },
    {
        year: "2012",
        title: "Expansion into Extreme Environments",
        description: "As our reputation for absolute structural integrity grew, we were pulled into increasingly hostile build environments—handling high-altitude custom estates in Star Valley and Bear Lake where mass market builders fail."
    },
    {
        year: "2016",
        title: "Vertical Integration",
        description: "Realizing that relying on third-party excavators and framers compromised our extreme timelines, we vertically integrated our core heavy trades. We brought mass excavation and structural framing entirely in-house."
    },
    {
        year: "2020",
        title: "The Elite Command Matrix",
        description: "We transitioned fully into an apex General Contracting role, orchestrating complete multi-million-dollar builds by applying our proprietary ground-truth logistics and zero-tolerance quality control to the entire project lifecycle."
    },
    {
        year: "Present",
        title: "The HRF Standard",
        description: "Today, HRF Customs stands as the uncompromising authority on luxury estate construction in Northern Utah and Western Wyoming. We do not chase volume; we chase absolute architectural perfection."
    }
];

const pillarsOfExecution = [
    {
        icon: HardHatIcon,
        title: "Ground-Truth Leadership",
        description: "We believe that a general contractor who manages from an office is inherently compromised. Our leadership maintains a heavy, daily physical presence on our job sites, catching millimeter-level discrepancies before they compound into massive errors."
    },
    {
        icon: ShieldIcon,
        title: "Absolute Accountability",
        description: "When an HRF Customs superintendent is on-site, the buck stops unconditionally with us. We absorb the liability of massive multi-trade coordination so our clients never have to mediate a dispute between an architect and an electrician."
    },
    {
        icon: RulerIcon,
        title: "Surgical Precision",
        description: "In luxury home building, 'good enough' is a catastrophic failure. We hold our subcontractor matrix to impossible tolerances. If the framing is off by an eighth of an inch, it is torn out and rebuilt before the drywall ever arrives."
    },
    {
        icon: BuildingIcon,
        title: "Architectural Veneration",
        description: "We exist to bring high-end architectural renderings into physical reality without compromising the original vision through clumsy 'value engineering'. We protect the integrity of the design against the harsh realities of physics."
    }
];

const faqs = [
    {
        question: "Why should I choose HRF Customs over a legacy volume builder?",
        answer: "Legacy volume builders prioritize speed over scrutiny. Their business models rely on churning out subdivisions using templated, lowest-bidder subcontractors. HRF Customs builds one-of-a-kind bespoke estates in extremely difficult terrain. We operate a low-volume, maximum-control matrix designed specifically for clients who demand absolute perfection rather than a quick turnaround."
    },
    {
        question: "What is your philosophy on subcontractor selection?",
        answer: "We treat our subcontractor network like an elite tactical unit. We do not use public bid boards. We have spent over a decade curating a closed-circuit network of the highest-performing finish carpenters, masons, and mechanical integrators in Utah and Wyoming. If a trade compromises our standard of quality, they are permanently removed from our roster."
    },
    {
        question: "How do you handle out-of-state or high-net-worth clients?",
        answer: "The majority of our clients are remote executives or out-of-state investors building secondary estates. We have engineered our entire communication protocol around this reality. We provide heavily documented, high-resolution digital weekly briefings, real-time financial transparency, and ironclad operational schedules, completely insulating you from localized friction."
    },
    {
        question: "Do you primarily work in Cache Valley?",
        answer: "While our operational headquarters is in Paradise, Utah (Cache Valley), we are heavily deployed across the harshest build environments in the region. Our logistical fleet routinely executes multi-million-dollar projects in Bear Lake, Star Valley, Preston, and the broader Northern Wasatch front. We specifically target complicated, high-altitude, and extreme-weather builds."
    },
    {
        question: "How did HRF Customs start?",
        answer: "The company was forged in heavy structural trades. Our founders didn't start with business degrees; they started with tool belts. By mastering the hardest phases of construction—mass excavation, foundational concrete, and complex timber framing—we evolved into General Contractors who actually understand the ground-truth mechanics of the sub-trades we now command."
    }
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/portfolio/luxury-home-20220914.jpg"
                    alt="Commanding exterior of a massive luxury custom home built by HRF Customs"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/30"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Our Operational Authority
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Engineered For <br className="hidden md:block" />
                            <span className="text-[var(--color-primary-light)]">Absolute Perfection.</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            HRF Customs is an elite, owner-operated general contracting firm forged in the harshest environments of Northern Utah and Western Wyoming. We do not manage from a distance; we command the ground truth.
                        </p>
                        <a href="#operational-manifesto" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Read Our Manifesto
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. OUR MANIFESTO (TEXT TO IMAGE SPLIT) */}
            <section id="operational-manifesto" className="py-24 lg:py-32 bg-white relative overflow-hidden text-left border-b border-[var(--color-neutral-100)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-dark) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
                        <div className="lg:col-span-5 relative order-2 lg:order-1">
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-200)] group">
                                <Image
                                    src="/images/team/builder-survey.jpg"
                                    alt="HRF Customs leadership surveying a massive excavation layout"
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute bottom-8 left-8 right-8 text-white">
                                    <h4 className="font-[family-name:var(--font-outfit)] font-bold text-xl mb-1">Ground-Truth Verification</h4>
                                    <p className="text-sm text-neutral-300 font-medium uppercase tracking-widest">Cache Valley, UT</p>
                                </div>
                            </div>
                            {/* Ambient Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--color-primary)]/10 blur-[100px] -z-10 rounded-full"></div>
                        </div>

                        <div className="lg:col-span-7 order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-neutral-200)]">
                                The Genesis
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-8">
                                Forged in the Dirt. <br /> Mastered in the Details.
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Most luxury home builders begin their careers in real estate offices or financial firms, operating as brokers of labor who simply pass spreadsheets back and forth. HRF Customs was born entirely differently. We were forged in the heavy physical execution of complex trades.
                                </p>
                                <p>
                                    Our company genesis is rooted deeply in brutal mass excavation, high-tolerance architectural concrete, and massive heavy timber framing. Before we ever claimed the title of General Contractor, we mastered the actual physics of assembling a home from the ground up in the most unforgiving environments of the Northern Rockies.
                                </p>
                                <p>
                                    This gives us an asymmetric advantage. When an HRF superintendent audits a mechanical rough-in or a structural truss package, they aren't looking at it through the lens of a project manager—they are analyzing it with the ruthless scrutiny of master builders. We command our subcontractors not through contracts alone, but through absolute, verifiable field authority.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-6">
                                <div className="p-6 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-100)] rounded-xl">
                                    <h4 className="text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-primary)] mb-2">15+</h4>
                                    <p className="text-xs uppercase tracking-widest font-bold text-[var(--color-neutral-500)]">Years Field Authority</p>
                                </div>
                                <div className="p-6 bg-[var(--color-neutral-50)] border border-[var(--color-neutral-100)] rounded-xl">
                                    <h4 className="text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-primary)] mb-2">100%</h4>
                                    <p className="text-xs uppercase tracking-widest font-bold text-[var(--color-neutral-500)]">Transparency Protocol</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE OPERATIONAL STANDARDS (DARK MODE GLASSMORPHISM BENTO) */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden text-left">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#020617] to-black opacity-100"></div>
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                    backgroundPosition: 'center top'
                }}></div>

                {/* Massive Watermark */}
                <div className="absolute -top-20 -right-20 text-[20rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none">
                    HRF
                </div>

                <div className="page-container relative z-10">
                    <div className="max-w-3xl mb-16 lg:mb-24">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary-light)]/20">
                            Our Pillars of Execution
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                            We Do Not Compromise.
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed font-[family-name:var(--font-inter)]">
                            Our standard operating procedures are violently enforced. We consider the protection of a client's capital, timeline, and architectural vision to be our ultimate fiduciary responsibility.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
                        {pillarsOfExecution.map((pillar, index) => (
                            <div key={index} className="group relative bg-white/5 backdrop-blur-md border border-white/5 p-10 rounded-3xl hover:-translate-y-2 hover:bg-white/10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,151,203,0.15)] overflow-hidden">
                                {/* Glow Effect on Hover */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-0 group-hover:opacity-20 blur-xl transition duration-500 rounded-3xl -z-10"></div>

                                <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-[var(--color-neutral-900)] border border-white/10 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner relative z-10">
                                    <pillar.icon size={30} />
                                </div>
                                <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4 relative z-10">
                                    {pillar.title}
                                </h3>
                                <p className="text-neutral-400 text-base leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                                    {pillar.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE FLEET & EXTREME ENVIRONMENT CAPABILITY */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-50)] relative border-b border-[var(--color-neutral-200)]">
                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-6 relative">
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[var(--color-neutral-200)] group">
                                <Image
                                    src="/images/team/equipment-01.jpg"
                                    alt="HRF Customs heavy machinery executing mass excavation on a steep mountain lot"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex gap-4 items-center">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 text-white shrink-0">
                                            <TruckIcon size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary-light)] uppercase">Internal Assets</p>
                                            <p className="text-white font-bold font-[family-name:var(--font-outfit)] text-lg">Heavy Machinery Fleet</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[60px] -z-10"></div>
                        </div>

                        <div className="lg:col-span-6">
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Engineered to Conquer The Northern Rockies
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8 font-medium">
                                We specialize in high-altitude, steep-slope, and highly complex extreme-weather builds from Logan to Star Valley. Standard residential builders collapse under these logistical pressures.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 border border-[var(--color-primary)]/20">
                                        <MountainSnowIcon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">Winter Deployment Protocols</h4>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed text-sm">
                                            We do not halt multi-million-dollar timelines because of snow. We deploy massive ground heaters, structural tarping, and immense logistical foresight to pour architectural concrete and frame custom timbers at zero degrees.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-5 items-start">
                                    <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0 border border-[var(--color-primary)]/20">
                                        <LayersIcon size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-2">Internal Earthwork Hegemony</h4>
                                        <p className="text-[var(--color-neutral-600)] leading-relaxed text-sm">
                                            A custom home's foundation is structurally intertwined with the mountain it sits on. Because we own our fleet of excavators and heavy equipment, we control the site prep, the grading, and the foundational integrity directly. No waiting on subcontractors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PORTFOLIO SHOWCASE BENTO GRID */}
            <section className="py-24 lg:py-32 bg-white relative">
                <div className="page-container relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Visual Evidence
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            The Architecture of Reality
                        </h2>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            Our portfolio is a testament to the fact that we do not build generic tract houses; we execute bespoke, high-tolerance architectural masterpieces.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 auto-rows-[300px] lg:auto-rows-[350px]">
                        {/* Huge block */}
                        <div className="md:col-span-8 md:row-span-2 relative rounded-3xl overflow-hidden group border border-[var(--color-neutral-200)] shadow-sm">
                            <Image
                                src="/images/portfolio/finished-exterior-01.jpg"
                                alt="Huge custom finished exterior built by HRF Customs"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/20 to-transparent"></div>
                            <div className="absolute bottom-10 left-10 right-10 flex border-t border-white/20 pt-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div>
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-1">Mountain Modern Estate</h3>
                                    <p className="text-[var(--color-primary-light)] font-bold tracking-widest text-[11px] uppercase">01 // High Elevation Completion</p>
                                </div>
                                <a href="/portfolio" className="ml-auto w-12 h-12 rounded-full bg-white flex items-center justify-center text-[var(--color-neutral-900)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                                    <ArrowRightIcon size={20} />
                                </a>
                            </div>
                        </div>

                        {/* Top right */}
                        <div className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden group border border-[var(--color-neutral-200)] shadow-sm">
                            <Image
                                src="/images/portfolio/finished-exterior-03.jpg"
                                alt="Pristine architectural angles"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>

                        {/* Bottom right */}
                        <div className="md:col-span-4 md:row-span-1 relative rounded-3xl overflow-hidden group border border-[var(--color-neutral-200)] shadow-sm">
                            <Image
                                src="/images/portfolio/premium-build-04.jpg"
                                alt="Timber framing masterwork"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. HISTORICAL TIMELINE */}
            <section className="py-24 lg:py-32 bg-[var(--color-neutral-100)] relative overflow-hidden">
                <div className="page-container relative z-10">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Evolution of Authority
                        </h2>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            We did not buy our reputation; we built it aggressively over the last two decades.
                        </p>
                    </div>

                    <div className="relative border-l-2 border-[var(--color-neutral-200)] pl-8 lg:pl-12 space-y-16">
                        {historicalTimeline.map((item, index) => (
                            <div key={index} className="relative group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] lg:-left-[57px] top-1 w-5 h-5 rounded-full bg-[var(--color-neutral-200)] border-4 border-[var(--color-neutral-50)] group-hover:bg-[var(--color-primary)] transition-colors duration-500 shadow-sm z-10"></div>

                                <div className="bg-white p-8 lg:p-10 rounded-3xl border border-[var(--color-neutral-100)] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-all duration-500 relative overflow-hidden">
                                    {/* Background massive number */}
                                    <div className="absolute top-4 right-8 text-[8rem] font-bold text-[var(--color-neutral-50)] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none transition-transform duration-700 group-hover:scale-110">
                                        {item.year.includes("Present") ? "NOW" : item.year.slice(-2)}
                                    </div>

                                    <div className="relative z-10">
                                        <div className="inline-flex py-1 px-3 bg-[var(--color-neutral-900)] text-white text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                                            {item.year}
                                        </div>
                                        <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-4">
                                            {item.title}
                                        </h3>
                                        <p className="text-[var(--color-neutral-600)] text-base leading-relaxed max-w-2xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ SECTION */}
            <section className="py-24 lg:py-32 bg-white relative text-left">
                <div className="page-container relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                                Institutional Knowledge
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Frequently Asked Directives
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Clear answers detailing how we manage capital, clients, and massive structural projects.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-white border border-[var(--color-neutral-200)] hover:border-[var(--color-primary)] transition-colors duration-300 rounded-2xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] cursor-pointer">
                                    <summary className="flex items-center justify-between gap-6 p-6 md:p-8 list-none font-bold text-lg font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] group-open:text-[var(--color-primary)]">
                                        {faq.question}
                                        <span className="transition-transform duration-500 group-open:rotate-[135deg] text-[var(--color-primary)] w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-neutral-100)] group-open:bg-[var(--color-primary)] group-open:text-white group-open:border-[var(--color-primary)]">
                                            <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="20"><path d="M12 5v14M5 12h14" /></svg>
                                        </span>
                                    </summary>
                                    <div className="grid transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] overflow-hidden">
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
