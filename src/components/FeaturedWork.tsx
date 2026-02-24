import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const projects = [
    {
        src: "/images/portfolio/luxury-home-20220914.jpg",
        alt: "Premium custom home built by HRF Customs in Northern Utah",
        caption: "Luxury Residence",
        location: "Cache Valley, UT",
        span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        src: "/images/portfolio/craftsman-build.jpg",
        alt: "Craftsman style custom home by HRF Customs",
        caption: "Craftsman Estate",
        location: "Logan, UT",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/custom-home-20230710.jpg",
        alt: "Finished home exterior by HRF Customs",
        caption: "Modern Valley Build",
        location: "Paradise, UT",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/premium-build-02.jpg",
        alt: "Custom residential build completed by HRF Customs",
        caption: "Mountain Ridge Custom",
        location: "Northern Utah",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/finished-exterior-02.jpg",
        alt: "Custom home exterior built by HRF Customs",
        caption: "Valley Overlook",
        location: "Southern Idaho",
        span: "col-span-1 row-span-1",
    },
];

export default function FeaturedWork() {
    return (
        <section id="featured-work" className="py-24 lg:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden">
            {/* Dark Mode Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#000000] opacity-90"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_60%)] pointer-events-none"></div>

            <div className="page-container relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center px-4 py-1.5 bg-white/5 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-white/10 mx-auto shadow-sm backdrop-blur-md">
                        Our Portfolio
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                        Featured Builds
                    </h2>
                    <p className="text-[var(--color-neutral-400)] text-lg leading-relaxed">
                        A curated selection of monumental custom homes and sophisticated builds systematically engineered and delivered by HRF Customs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-3xl ${project.span} border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.5)]`}
                        >
                            <Image
                                src={project.src}
                                alt={project.alt}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                sizes={
                                    index === 0
                                        ? "(max-width: 768px) 100vw, 50vw"
                                        : "(max-width: 768px) 100vw, 25vw"
                                }
                            />

                            {/* Overlay Gradient on Hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/30 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Hover Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="text-xs font-bold tracking-[0.2em] text-[var(--color-primary-light)] uppercase mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                    {project.location}
                                </span>
                                <h4 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white">
                                    {project.caption}
                                </h4>

                                <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                        <ArrowRightIcon size={14} className="text-white" />
                                    </div>
                                    <span className="text-xs text-white uppercase tracking-wider font-semibold">
                                        View Project
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a href="/portfolio" className="inline-flex items-center gap-2 text-white font-bold tracking-widest uppercase text-sm border-b-2 border-[var(--color-primary-light)] pb-1 hover:text-[var(--color-primary-light)] transition-colors group">
                        Explore Full Portfolio
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
