import { ArrowRightIcon, PhoneIcon, ChevronDownIcon } from "./icons";

export default function HeroVideo() {
    return (
        <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[var(--color-primary-dark)]">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105"
                style={{ transformOrigin: "center" }}
                poster="/images/portfolio/premium-build-01.jpg"
            >
                <source src="/video/hero.mp4" type="video/mp4" />
            </video>

            {/* Modern, deep vignette gradient overlay for text readability without being too muddy */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)",
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)",
                }}
            />

            <div className="relative w-full page-container pt-28 pb-16 lg:pt-36 lg:pb-32 my-auto">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">

                    <div className="inline-flex items-center px-4 py-1.5 mb-6 bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-[13px] tracking-[0.2em] font-semibold uppercase rounded-full">
                        Northern Utah General Contractor
                    </div>

                    <h1
                        className="mb-8 font-bold leading-tight"
                        style={{
                            color: "#ffffff",
                            textShadow: "0 4px 30px rgba(0,0,0,0.6)",
                            fontFamily: "var(--font-outfit), system-ui, sans-serif",
                        }}
                    >
                        Trusted Custom Home Builder in Paradise, UT
                    </h1>

                    <p
                        className="text-lg flex flex-col sm:text-xl md:text-2xl mb-12 leading-relaxed max-w-3xl font-light"
                        style={{ color: "rgba(255,255,255,0.9)", textShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
                    >
                        Custom home building, general contracting, and full project leadership across Northern Utah, Southern Idaho, and Western Wyoming.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full">
                        <a
                            href="#contact"
                            className="btn-primary text-base sm:w-auto w-full group overflow-hidden relative"
                            style={{ padding: "1rem 2.5rem" }}
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Schedule Consultation
                                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                        <a
                            href="tel:4357600279"
                            className="btn-secondary text-base sm:w-auto w-full group bg-white/5 backdrop-blur-sm"
                            style={{ padding: "1rem 2.5rem" }}
                        >
                            <PhoneIcon size={18} className="group-hover:-rotate-12 transition-transform" />
                            Call (435) 760 0279
                        </a>
                    </div>

                    <div className="mt-10 md:mt-12 w-full grid grid-cols-3 gap-2 md:gap-8 opacity-90 mx-auto max-w-2xl" style={{ color: "#ffffff" }}>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-outfit)]">15+</span>
                            <span className="text-[9px] md:text-xs uppercase tracking-wider mt-1 opacity-80">Years<br className="md:hidden" /> Exp.</span>
                        </div>
                        <div className="flex flex-col items-center text-center relative">
                            {/* Left Divider */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-8 md:h-12 bg-white/20"></div>
                            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-outfit)]">250+</span>
                            <span className="text-[9px] md:text-xs uppercase tracking-wider mt-1 opacity-80">Happy<br className="md:hidden" /> Ppl</span>
                            {/* Right Divider */}
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 md:h-12 bg-white/20"></div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <span className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-outfit)]">100%</span>
                            <span className="text-[9px] md:text-xs uppercase tracking-wider mt-1 opacity-80">Owner<br className="md:hidden" /> Led</span>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce"
                style={{ color: "rgba(255,255,255,0.7)" }}
            >
                <span className="text-[10px] tracking-[0.2em] font-medium uppercase absolute -top-5">Explore</span>
                <ChevronDownIcon size={24} />
            </div>
        </section>
    );
}
