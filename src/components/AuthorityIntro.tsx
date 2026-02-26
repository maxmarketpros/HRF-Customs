import Image from "next/image";
import { ArrowRightIcon, CheckCircleIcon } from "./icons";

const benefits = [
    { title: "Transparent Line-Item Budgets", desc: "No hidden fees. You see exactly where your money goes before we break ground." },
    { title: "Owner-Led Accountability", desc: "We lead the build in person. Direct communication with the owner at every phase." },
    { title: "Regional Expertise", desc: "Built to withstand Northern Utah's freezing winters, snow loads, and elevation." }
];

export default function AuthorityIntro() {
    return (
        <section id="about-intro" className="pt-16 lg:pt-24 pb-20 lg:pb-32 bg-white relative overflow-hidden">
            <div className="page-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left side: Content */}
                    <div className="order-2 lg:order-1">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6">
                            About HRF Customs
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.1] mb-6 tracking-tight">
                            Your Trusted Custom Home Builder in Paradise, UT and the Surrounding Region
                        </h2>

                        <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed mb-10">
                            HRF Customs is a premium custom home builder and general contractor based in Paradise, Utah. For more than 15 years, we have helped homeowners across Northern Utah, Southern Idaho, and Western Wyoming turn their exact vision into a meticulously built home.
                        </p>

                        <div className="space-y-6 mb-12">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="mt-1 shrink-0 text-[var(--color-primary-light)]">
                                        <CheckCircleIcon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-[family-name:var(--font-outfit)] font-semibold text-[var(--color-neutral-800)] mb-1">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed">
                                            {benefit.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <a href="#contact" className="btn-primary group w-full sm:w-auto overflow-hidden relative" style={{ padding: "1rem 2.5rem" }}>
                                <span className="relative z-10 flex flex-row items-center justify-center gap-2 font-semibold">
                                    Start Your Project
                                    <ArrowRightIcon size={18} className="transition-transform group-hover:translate-x-1" />
                                </span>
                            </a>
                            <a href="#process" className="btn-outline group w-full sm:w-auto font-semibold" style={{ padding: "1rem 2.5rem", borderRadius: "2px" }}>
                                View Our Process
                            </a>
                        </div>
                    </div>

                    {/* Right side: Premium Square Image layout */}
                    <div className="relative order-1 lg:order-2 flex flex-col justify-start">
                        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-6">
                            <Image
                                src="/images/portfolio/premium-build-01.webp"
                                alt="Custom home built by HRF Customs in Northern Utah"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>

                        {/* Text below the image instead of an overlay */}
                        <div className="bg-white p-2 text-center lg:text-left">
                            <h3 className="text-[var(--color-neutral-900)] text-xl font-[family-name:var(--font-outfit)] font-bold mb-1">
                                Quality Without Compromise
                            </h3>
                            <p className="text-[var(--color-neutral-500)] text-sm leading-relaxed">
                                Full project delivery by HRF Customs in Northern Utah.
                            </p>
                        </div>

                        {/* Floating Experience Badge */}
                        <div className="absolute top-8 -left-4 sm:-left-8 lg:-left-12 bg-white/95 backdrop-blur-md p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] rounded-xl border border-[var(--color-neutral-100)] flex flex-row sm:flex-col lg:flex-row items-center gap-4">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-[var(--color-primary-light)] text-white text-2xl sm:text-3xl font-[family-name:var(--font-outfit)] font-black rounded-full shadow-inner shrink-0 leading-none">
                                15+
                            </div>
                            <div className="flex flex-col text-left sm:text-center lg:text-left">
                                <p className="text-[10px] uppercase font-black tracking-widest text-[var(--color-neutral-400)] leading-tight mb-1">
                                    Over
                                </p>
                                <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[var(--color-neutral-800)] leading-tight">
                                    Years of <br className="hidden sm:block lg:hidden" /> Experience
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Ambient Background decoration changed to match the #2597CB vibe */}
            <div className="absolute bottom-0 right-0 w-[50rem] h-[50rem] bg-[var(--color-primary-light)]/[0.03] rounded-full blur-[100px] -z-10 translate-x-1/2 translate-y-1/2"></div>
        </section>
    );
}
