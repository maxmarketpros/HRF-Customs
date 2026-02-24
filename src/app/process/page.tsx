import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import ProcessTimeline from "@/components/ProcessTimeline";
import Image from "next/image";
import { ShieldIcon, RulerIcon, ClipboardIcon } from "@/components/icons";

export const metadata = {
    title: "Our Custom Home Building Process | HRF Customs",
    description: "Discover the HRF Customs six-step process for building luxury custom homes. From initial design and engineering to framing and final completion in Northern Utah.",
};

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white">
            <Header />

            {/* Dark Mode Hero */}
            <section className="relative w-full pt-48 pb-24 lg:pt-56 lg:pb-32 bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-light) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-dark)]/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="page-container relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[var(--color-primary-light)]/20 shadow-sm backdrop-blur-md">
                        Our Methodology
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        The HRF Customs <span className="text-[var(--color-primary-light)]">Process</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        Building a luxury custom home requires more than just skilled labor. It requires a meticulous, transparent, and highly organized system. Here is exactly how we take your project from an idea to a finished estate.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    PROCESS
                </div>
            </section>

            {/* Split Introduction */}
            <section className="py-24 lg:py-32 relative bg-white overflow-hidden border-b border-[var(--color-neutral-200)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-[var(--color-neutral-200)]">
                                <Image
                                    src="/images/portfolio/premium-build-04.jpg"
                                    alt="HRF Customs framing process on a luxury custom home build"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary-light)] uppercase mb-1">Structural Integrity</p>
                                    <p className="text-white font-bold font-[family-name:var(--font-outfit)] text-xl">Built To Last Generations</p>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[60px] -z-10"></div>
                        </div>

                        <div className="lg:col-span-7">
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Why Our Process Matters
                            </h2>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-8 font-[family-name:var(--font-inter)]">
                                Many custom home builders struggle with timelines, budget overruns, and poor communication because they lack a defined system. At HRF Customs, we eliminate the chaos of construction through rigorous pre-planning and our proprietary step-by-step workflow.
                            </p>
                            <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10 font-[family-name:var(--font-inter)]">
                                Whether we are pouring a complex hillside foundation in Cache Valley or framing a heavy timber lodge in Star Valley, our process ensures that every phase is executed with precision. We believe that a well-run job site translates directly into a higher-quality finished home.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-xl flex items-start gap-4">
                                    <div className="mt-1 text-[var(--color-primary)] shrink-0 bg-white p-2 rounded-lg border border-[var(--color-neutral-200)]"><ShieldIcon size={24} /></div>
                                    <div>
                                        <h4 className="font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-1">Total Transparency</h4>
                                        <p className="text-sm text-[var(--color-neutral-600)]">No hidden fees. You see the line-item budget before we break ground.</p>
                                    </div>
                                </div>
                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-xl flex items-start gap-4">
                                    <div className="mt-1 text-[var(--color-primary)] shrink-0 bg-white p-2 rounded-lg border border-[var(--color-neutral-200)]"><ClipboardIcon size={24} /></div>
                                    <div>
                                        <h4 className="font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-1">Clear Communication</h4>
                                        <p className="text-sm text-[var(--color-neutral-600)]">Weekly updates and direct access to your project manager.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inject the existing Timeline Component */}
            <ProcessTimeline />

            {/* Deep Dive: Pre-construction & Engineering */}
            <section className="py-24 lg:py-32 relative bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f18] via-[#020617] to-black opacity-100"></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                                A Deep Dive Into Pre-Construction
                            </h2>
                            <p className="text-neutral-400 text-lg leading-relaxed mb-6 font-[family-name:var(--font-inter)]">
                                Most of the battle in custom home building is won before a shovel ever hits the dirt. The pre-construction phase is where HRF Customs truly separates itself from other Utah building contractors.
                            </p>
                            <ul className="space-y-4 text-neutral-300 font-medium">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">✓</div>
                                    <span>Detailed site analysis for soil conditions and utility routing.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">✓</div>
                                    <span>Coordination with structural and civil engineers.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">✓</div>
                                    <span>Navigating local municipal permitting and HOA approvals.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center shrink-0 border border-[var(--color-primary)]/40 text-[var(--color-primary-light)]">✓</div>
                                    <span>Value engineering to align architectural vision with budget reality.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)] opacity-10 blur-2xl rounded-3xl -z-10 transition-opacity duration-500 group-hover:opacity-30"></div>
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-12 rounded-3xl shadow-2xl">
                                <div className="w-16 h-16 bg-gradient-to-b from-[var(--color-neutral-800)] to-black border border-white/20 rounded-2xl flex items-center justify-center text-[var(--color-primary-light)] mb-8 shadow-inner">
                                    <RulerIcon size={30} />
                                </div>
                                <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">
                                    The "Measure Twice" Philosophy
                                </h3>
                                <p className="text-neutral-400 text-base leading-relaxed">
                                    Errors made on paper cost dollars. Errors made in the field cost thousands. By heavily front-loading the engineering and planning phases, we ensure that when our framing crews arrive on site, they have a flawless roadmap to execute against.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
