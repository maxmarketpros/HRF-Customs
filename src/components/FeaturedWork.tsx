import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const projects = [
    {
        src: "/images/portfolio/premium-build-01.jpg",
        alt: "Premium custom home built by HRF Customs in Northern Utah",
        caption: "Custom home in Northern Utah",
        span: "col-span-2 row-span-2",
    },
    {
        src: "/images/portfolio/craftsman-build.jpg",
        alt: "Craftsman style custom home by HRF Customs",
        caption: "Craftsman style custom build",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/finished-exterior-01.jpg",
        alt: "Finished home exterior by HRF Customs in Cache Valley",
        caption: "Completed exterior in Cache Valley",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/premium-build-02.jpg",
        alt: "Custom residential build completed by HRF Customs",
        caption: "Residential build completed",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/finished-exterior-02.jpg",
        alt: "Custom home exterior built by HRF Customs in Utah",
        caption: "Custom home completed in Utah",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/premium-build-04.jpg",
        alt: "Premium residential construction by HRF Customs",
        caption: "Premium residential construction",
        span: "col-span-1 row-span-1",
    },
    {
        src: "/images/portfolio/finished-exterior-03.jpg",
        alt: "Completed home by HRF Customs in Northern Utah mountains",
        caption: "Mountain valley custom home",
        span: "col-span-1 row-span-1",
    },
];

export default function FeaturedWork() {
    return (
        <section id="featured-work" className="section-padding section-alt">
            <div className="page-container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="section-label">Our Work</span>
                    <h2>Featured Projects</h2>
                    <p className="mt-4">
                        A selection of custom homes and builds delivered by HRF Customs
                        across Northern Utah. Each project reflects our commitment to quality
                        construction, detailed planning, and client satisfaction.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`relative group overflow-hidden rounded-sm ${index === 0 ? "col-span-2 row-span-2" : "col-span-1"
                                }`}
                        >
                            <Image
                                src={project.src}
                                alt={project.alt}
                                width={index === 0 ? 800 : 400}
                                height={index === 0 ? 600 : 400}
                                className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                                sizes={
                                    index === 0
                                        ? "(max-width: 768px) 100vw, 50vw"
                                        : "(max-width: 768px) 50vw, 25vw"
                                }
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium">
                                    {project.caption}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a href="/our-work" className="btn-outline">
                        View Full Portfolio
                        <ArrowRightIcon size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
