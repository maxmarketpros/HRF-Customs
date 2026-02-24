import { ArrowRightIcon, PhoneIcon, ChevronDownIcon } from "./icons";

export default function HeroVideo() {
    return (
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                poster="/images/portfolio/premium-build-01.jpg"
            >
                <source src="/video/hero.mp4" type="video/mp4" />
            </video>

            {/* Strong dark overlay for text readability */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.4) 100%)",
                }}
            />
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
                }}
            />

            <div className="relative w-full page-container py-24">
                <div className="max-w-2xl">
                    <h1
                        className="mb-6"
                        style={{ color: "#ffffff", textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
                    >
                        Trusted Custom Home Builder in Paradise, UT
                    </h1>

                    <p
                        className="text-lg sm:text-xl mb-8 leading-relaxed max-w-xl"
                        style={{ color: "rgba(255,255,255,0.9)" }}
                    >
                        Custom home building, general contracting, and full project
                        leadership across Northern Utah, Southern Idaho, and Western
                        Wyoming.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium rounded"
                            style={{ color: "#ffffff" }}
                        >
                            15+ Years Experience
                        </span>
                        <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium rounded"
                            style={{ color: "#ffffff" }}
                        >
                            Northern Utah · Southern Idaho · Western Wyoming
                        </span>
                        <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium rounded"
                            style={{ color: "#ffffff" }}
                        >
                            Owner Led Management
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="btn-primary text-base" style={{ padding: "0.875rem 2rem" }}>
                            Schedule a Consultation
                            <ArrowRightIcon size={18} />
                        </a>
                        <a
                            href="tel:4357600279"
                            className="btn-secondary text-base"
                            style={{ padding: "0.875rem 2rem" }}
                        >
                            <PhoneIcon size={18} />
                            Call (435) 760 0279
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce"
                style={{ color: "rgba(255,255,255,0.6)" }}
            >
                <span className="text-xs tracking-widest uppercase">Explore</span>
                <ChevronDownIcon size={20} />
            </div>
        </section>
    );
}
