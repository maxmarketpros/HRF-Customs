import Image from "next/image";
import {
    HomeIcon,
    BuildingIcon,
    RulerIcon,
    HammerIcon,
    ShovelIcon,
    ClipboardIcon,
    ArrowRightIcon,
    DropletIcon,
    CalculatorIcon,
    UsersIcon,
    MapPinIcon
} from "./icons";

const services = [
    {
        icon: HomeIcon,
        title: "Custom Home Builder",
        description:
            "Full project delivery from design coordination through final walkthrough. We lead every phase of your custom home build with clear accountability and direct communication.",
        href: "/services/custom-home-builder",
        image: "/images/portfolio/custom-home-20230710.webp",
    },
    {
        icon: BuildingIcon,
        title: "Luxury Custom Homes",
        description:
            "High-end residential construction with premium materials, meticulous detailing, and the level of oversight that complex builds require. Built to your exact specifications.",
        href: "/services/luxury-custom-home-builder",
        image: "/images/services/luxury-custom-home-builder/hero.webp",
    },
    {
        icon: RulerIcon,
        title: "Design-Build Contractor",
        description:
            "Seamless coordination between architects, engineers, and trade partners. We manage the design-to-build transition so nothing falls through the cracks.",
        href: "/services/design-build-contractor",
        image: "/images/services/design-build-contractor/grid.webp",
    },
    {
        icon: ClipboardIcon,
        title: "General Contracting",
        description:
            "Elite subcontractor curation, rigorous timeline enforcement, and unrelenting quality control for massive residential builds.",
        href: "/services/general-contractor-for-custom-homes",
        image: "/images/services/general-contractor/hero.webp",
    },
    {
        icon: CalculatorIcon,
        title: "Preconstruction Planning",
        description:
            "Architectural clash detection, hard-dollar estimating, brutal value-engineering, and managing permitting bureaucracy.",
        href: "/services/preconstruction-planning",
        image: "/images/services/preconstruction-planning/grid.webp",
    },
    {
        icon: UsersIcon,
        title: "Project Management",
        description:
            "Macro-level supply chain procurement, daily digital field logs, and absolute financial transparency for out-of-state remote clients.",
        href: "/services/project-management",
        image: "/images/services/project-management/hero.webp",
    },
    {
        icon: HammerIcon,
        title: "Framing Contractors",
        description:
            "Heavy timber structural integrity, millimeter execution tolerances, and architectural compliance for complex custom rooflines.",
        href: "/services/framing-contractors",
        image: "/images/services/framing-contractor/hero.webp",
    },
    {
        icon: DropletIcon,
        title: "Concrete Services",
        description:
            "Deep foundational excellence, multi-tiered structural retaining walls, and high-psi mixes designed for volatile mountain slopes.",
        href: "/services/concrete-services",
        image: "/images/services/concrete-services/hero.webp",
    },
    {
        icon: ShovelIcon,
        title: "Excavation Work",
        description:
            "Topographical analysis, aggressive site clearing, deep utility trenching, and the critical importance of defensive grading.",
        href: "/services/excavation-work",
        image: "/images/services/excavation-work/hero.webp",
    },
    {
        icon: MapPinIcon,
        title: "Home Build Consultation",
        description:
            "Advisory services to vet unbuildable architectural prints, confirm raw dirt feasibility before purchase, and provide budget realities.",
        href: "/services/home-build-consultation",
        image: "/images/services/home-build-consultation/grid.webp",
    },
];

export default function ServicesGrid({ hideHeader = false, hideButton = false }: { hideHeader?: boolean, hideButton?: boolean } = {}) {
    return (
        <section id="services" className="py-24 lg:py-32 bg-[var(--color-warm)] relative">
            <div className="page-container relative z-10">
                {!hideHeader && (
                    <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6">
                            Our Expertise
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.1] mb-6 tracking-tight">
                            Building With Purpose and Precision
                        </h2>
                        <p className="text-lg text-[var(--color-neutral-600)] leading-relaxed">
                            HRF Customs delivers full-scope custom home building and general
                            contracting services. From the foundation to the final detail, every
                            service is delivered with owner-led oversight and a commitment to
                            quality that our clients have come to expect.
                        </p>
                    </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {services.map((service) => (
                        <a
                            key={service.title}
                            href={service.href}
                            className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-[var(--color-neutral-100)] flex flex-col group transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Image Header */}
                            <div className="relative w-full aspect-[4/3] bg-[var(--color-neutral-100)]">
                                {/* Wrapper to trap the image scaling overlay */}
                                <div className="absolute inset-0 overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Soft overlay on image bottom to make badge pop */}
                                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent"></div>
                                </div>

                                {/* Floating Icon Badge */}
                                <div className="absolute -bottom-6 right-6 w-14 h-14 bg-white rounded-xl shadow-lg border border-[var(--color-neutral-100)] flex items-center justify-center text-[var(--color-primary-light)] z-20 group-hover:bg-[var(--color-primary-light)] group-hover:text-white transition-colors duration-300">
                                    <service.icon size={26} />
                                </div>
                            </div>

                            {/* Content Body */}
                            <div className="p-8 pt-10 flex flex-col flex-grow">
                                <h4 className="text-2xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] mb-3 group-hover:text-[var(--color-primary-light)] transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed mb-6 flex-grow">
                                    {service.description}
                                </p>

                                {/* Action Link */}
                                <div className="mt-auto flex items-center gap-2 text-[var(--color-primary-light)] font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                                    Explore Service <ArrowRightIcon size={16} />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {!hideButton && (
                    <div className="text-center mt-16">
                        <a href="/services" className="btn-primary group" style={{ padding: "1.25rem 3rem" }}>
                            <span className="flex items-center gap-2">
                                View All Services
                                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>
                    </div>
                )}
            </div>

            {/* Subtle background decoration map */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,151,203,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        </section>
    );
}
