import Header from "@/components/Header";
import { Metadata } from 'next';
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import Image from "next/image";
import {
    ClipboardIcon,
    ArrowRightIcon,
    CheckCircleIcon,
    UsersIcon,
    HardHatIcon,
    ShieldIcon,
    BarChartIcon
} from "@/components/icons";

export const metadata: Metadata = {
    title: "Elite Project Management for Custom Homes | HRF Customs",
    description: "HRF Customs provides elite project management for luxury builds in Paradise, UT. We act as the absolute, single-point authority for remote clients building multi-million dollar estates.",
};

const processSteps = [
    {
        title: "Digital Client Portals",
        description: "Building an estate from out of state requires extreme transparency. We grant you access to our proprietary digital project management dashboard, delivering daily field logs, annotated site photography, and drone flight updates directly to your phone."
    },
    {
        title: "Supply-Chain Procurement",
        description: "You cannot pour concrete if the rebar hasn't arrived. We employ aggressive supply-chain scraping, purchasing raw materials and locking in custom finish deliveries months before they are needed to permanently insulate the project from global market shortages."
    },
    {
        title: "Micro-Trade Sequences",
        description: "Project management is schedule warfare. We dictate exactly when the rough-in plumbing happens so it does not conflict with the HVAC routing. We stack trades efficiently to ensure the site is relentlessly moving forward, even through harsh Utah winters."
    },
    {
        title: "Financial Draw Audits",
        description: "We are the firewall for your capital. Every single subcontractor invoice is heavily audited against actual, physical job site completion by our superintendents before we authorize the release of a financial draw. Nobody is paid for incomplete work."
    },
    {
        title: "Municipality Inspections",
        description: "We assume complete ownership of the Cache County inspection gauntlet. We preemptively scour the structure before the city inspectors arrive, guaranteeing four-way framing and advanced electrical sign-offs happen on the first attempt, preventing massive schedule delays."
    }
];

const faqs = [
    {
        question: "How do you project manage builds for out-of-state clients?",
        answer: "The vast majority of our luxury estates in Paradise are commissioned by remote clients. We built HRF Customs specifically around digital transparency. Between weekly executive video briefings, daily photographic field logs, and real-time live budget tracking, you will have more control over your Utah build from California than most people have building locally."
    },
    {
        question: "What is the difference between a Project Manager and a Superintendent?",
        answer: "The Superintendent is the apex predator of the physical job site. They command the dirt, enforce daily trade quality, and manage safety. The Project Manager commands the war room. They manage the multi-million dollar master budget, procure long-lead supply chain materials, and interface directly with the architectural and engineering teams."
    },
    {
        question: "Do you markup subcontractor invoices?",
        answer: "Financial structures depend on the contract (Cost-Plus vs. Fixed Price). Regardless of the structure, HRF Customs demands absolute financial transparency. We provide you with the raw, unmodified subcontractor bids so you can see exactly where your capital is being deployed."
    },
    {
        question: "How do you handle unexpected delays or 'change orders'?",
        answer: "Through aggressive proactive management. If an extreme weather pattern halts concrete pours, we immediately pivot the schedule to focus on off-site rough carpentry or heavy material staging. For client-driven change orders, we present the exact schedule delta and cost impact digitally for your approval before execution."
    },
    {
        question: "Who is my direct point of contact during a 24-month build?",
        answer: "You are assigned a dedicated Project Manager who acts as your absolute singular point of contact. You will never have to chase down an elusive framing subcontractor or interrogate the drywall crew. We act as the single source of authority and accountability for the entire multi-year endeavor."
    }
];

export default function ProjectManagement() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            {/* 1. HERO SECTION */}
            <section className="relative w-full min-h-[60vh] md:min-h-[500px] lg:min-h-[70vh] flex items-center pt-36 pb-24 lg:pt-40 lg:pb-0">
                <Image
                    src="/images/services/project-management/hero.webp"
                    alt="Complex internal rough-ins requiring elite project management"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/40"></div>

                <div className="page-container relative z-10 w-full">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/20 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 backdrop-blur-md border border-[var(--color-primary-light)]/30">
                            Absolute Transparency
                        </div>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.1] mb-6">
                            Elite Project Management
                        </h1>
                        <p className="text-lg lg:text-xl text-neutral-300 leading-relaxed max-w-2xl mb-10 font-[family-name:var(--font-inter)]">
                            Multi-million dollar estates demand military-grade logistics. HRF Customs acts as your absolute authority, managing the relentless supply-chain timelines, commanding the subcontractor armies, and defending your master budget.
                        </p>
                        <a href="#contact" className="btn-primary shadow-lg hover:shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all">
                            Enforce Authority
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
                                Why Disorganized Management Destroys Luxury Builds
                            </h2>
                            <div className="space-y-6 text-[var(--color-neutral-600)] text-lg leading-relaxed font-medium">
                                <p>
                                    Building a sprawling, multi-million dollar estate in Northern Utah is essentially running a highly complex manufacturing firm outdoors. There are tens of thousands of individual components, dozens of independent companies, and millions of dollars in capital flowing simultaneously.
                                </p>
                                <p>
                                    Passive management destroys projects. If a project manager waits for the Italian tile to arrive before checking the framing tolerances, the entire job halts when the tile doesn't fit. HRF Customs operates a proactive, combative management cell. We actively hunt down supply-chain bottlenecks months before they occur, aggressively procuring materials and staging them securely to guarantee the project's critical path is never compromised.
                                </p>
                                <p>
                                    For our high-net-worth clients building remotely, we are the ultimate proxy. We absorb the chaos of the daily grind, filtering complex job site problems into highly actionable, digital executive summaries that allow you to dictate the direction of your estate from anywhere in the world.
                                </p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-[var(--color-neutral-100)]">
                                <Image
                                    src="/images/services/project-management/local-relevance.webp"
                                    alt="Management reviewing massive trade execution on site"
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
                                        src="/images/services/project-management/synergy.webp"
                                        alt="Intricate MEP coordination requiring extreme management"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                                    <Image
                                        src="/images/portfolio/custom-home-20230710.webp"
                                        alt="Flawless finished product representing exact budget execution"
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
                                    Master Schematics
                                </div>
                                <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                    Coordinating the Chaos
                                </h2>
                                <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-medium">
                                    A massive luxury build generates an endless stream of moving variables. We enforce order by creating centralized, unyielding channels for every financial transaction, schedule shift, and design change.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <BarChartIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Capital Deployment Tracking
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                You will never wonder where your money is. We produce live, mathematically rigorous budgets that track original estimates against actual contracted buyout costs. We highlight incoming financial liabilities weeks in advance, ensuring zero surprises during the monthly draw cycles.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-6 items-start group">
                                        <div className="w-14 h-14 bg-white shadow-sm border border-[var(--color-neutral-100)] rounded-2xl flex items-center justify-center text-[var(--color-primary)] mt-1 transition-transform group-hover:scale-110 shrink-0">
                                            <UsersIcon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-3">
                                                Architectural & Engineering Liaison
                                            </h3>
                                            <p className="text-[var(--color-neutral-600)] leading-relaxed">
                                                When physical job site realities clash with theoretical blueprints, you do not have to mediate the dispute. We project manage the gap, bringing the architects, structural engineers, and field superintendents into one room to force immediate, structurally sound solutions that keep the timeline intact.
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
                                The Digital Sandbox
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-8">
                                Out-of-State Command Control
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-10">
                                You should not have to fly to Utah every weekend to know what is happening on your job site. We deploy an elite technology stack that brings the dirt directly to your phone.
                            </p>

                            <div className="space-y-6">
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ShieldIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Photographic Job Logs</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        Every day, our project management team uploads dozens of high-resolution, annotated photos to your secure portal. You can visually track the progress of the $40,000 window package installation from your office thousands of miles away.
                                    </p>
                                </div>
                                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-300">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-[var(--color-primary-light)]">
                                            <ClipboardIcon size={24} />
                                        </div>
                                        <h4 className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Centralized Approvals</h4>
                                    </div>
                                    <p className="text-neutral-400 text-sm leading-relaxed">
                                        No more digging through hundreds of convoluted email chains. All design selections—from interior paint colors to massive plumbing fixtures—are uploaded digitally. You simply review the specifications, click approve, and the system automatically notifies the purchasing team to execute the order.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-2">
                            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10">
                                <Image
                                    src="/images/services/project-management/structural.webp"
                                    alt="Completed multi-layered luxury estate successfully managed"
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
                                            <p className="text-white font-bold tracking-widest uppercase text-sm">Actionable Intelligence</p>
                                            <p className="text-[var(--color-primary-light)] font-[family-name:var(--font-outfit)] font-bold text-xl">Absolute Control</p>
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
                            The Project Management Flow
                        </h3>
                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                            How we systematically organize, communicate, and command massive luxury estate builds over multi-year timelines.
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
                                Logistics Authority
                            </div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Clarifying The Command Center
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                                Direct answers on out-of-state management, brutal supply-chain procurement, and how we act as the apex financial proxy for our clients.
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
