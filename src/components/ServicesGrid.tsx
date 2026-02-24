import Image from "next/image";
import {
    HomeIcon,
    BuildingIcon,
    RulerIcon,
    HammerIcon,
    ShovelIcon,
    ClipboardIcon,
    ArrowRightIcon,
} from "./icons";

const services = [
    {
        icon: HomeIcon,
        title: "Custom Home Building",
        description:
            "Full project delivery from design coordination through final walkthrough. We lead every phase of your custom home build with clear accountability and direct communication.",
        href: "/services/custom-home-building",
        image: "/images/portfolio/custom-home-20230710.jpg",
    },
    {
        icon: BuildingIcon,
        title: "Luxury Custom Homes",
        description:
            "High-end residential construction with premium materials, meticulous detailing, and the level of oversight that complex builds require. Built to your exact specifications.",
        href: "/services/luxury-custom-homes",
        image: "/images/portfolio/luxury-home-20220914.jpg",
    },
    {
        icon: RulerIcon,
        title: "Design-Build Coordination",
        description:
            "Seamless coordination between architects, engineers, and trade partners. We manage the design-to-build transition so nothing falls through the cracks.",
        href: "/services/design-build-coordination",
        image: "/images/schematic.jpg",
    },
    {
        icon: ClipboardIcon,
        title: "General Contracting",
        description:
            "Complete build management including trade scheduling, inspections, budget tracking, and quality control. Owner-led oversight on every project we take on.",
        href: "/services/general-contracting",
        image: "/images/portfolio/general-contracting-20220421.jpg",
    },
    {
        icon: HammerIcon,
        title: "Framing",
        description:
            "Structural framing and envelope execution for residential builds. Precision framing that meets engineering specs and sets the stage for a solid, lasting structure.",
        href: "/services/framing",
        image: "/images/framing/framing-01.jpg",
    },
    {
        icon: ShovelIcon,
        title: "Excavation and Concrete",
        description:
            "Site work, excavation, grading, and concrete foundation services. We handle the critical groundwork that every successful build depends on.",
        href: "/services/excavation-and-concrete",
        image: "/images/foundations/foundation-01.jpg",
    },
];

export default function ServicesGrid() {
    return (
        <section id="services" className="py-24 lg:py-32 bg-[var(--color-warm)] relative">
            <div className="page-container relative z-10">
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

                <div className="text-center mt-16">
                    <a href="/services" className="btn-primary group" style={{ padding: "1.25rem 3rem" }}>
                        <span className="flex items-center gap-2">
                            View All Services
                            <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>

            {/* Subtle background decoration map */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,rgba(37,151,203,0.03)_0%,transparent_50%)] pointer-events-none"></div>
        </section>
    );
}
