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
    },
    {
        icon: BuildingIcon,
        title: "Luxury Custom Homes",
        description:
            "High end residential construction with premium materials, meticulous detailing, and the level of oversight that complex builds require. Built to your exact specifications.",
        href: "/services/luxury-custom-homes",
    },
    {
        icon: RulerIcon,
        title: "Design Build Coordination",
        description:
            "Seamless coordination between architects, engineers, and trade partners. We manage the design to build transition so nothing falls through the cracks.",
        href: "/services/design-build-coordination",
    },
    {
        icon: ClipboardIcon,
        title: "General Contracting",
        description:
            "Complete build management including trade scheduling, inspections, budget tracking, and quality control. Owner led oversight on every project we take on.",
        href: "/services/general-contracting",
    },
    {
        icon: HammerIcon,
        title: "Framing",
        description:
            "Structural framing and envelope execution for residential builds. Precision framing that meets engineering specs and sets the stage for a solid, lasting structure.",
        href: "/services/framing",
    },
    {
        icon: ShovelIcon,
        title: "Excavation and Concrete",
        description:
            "Site work, excavation, grading, and concrete foundation services. We handle the critical groundwork that every successful build depends on.",
        href: "/services/excavation-and-concrete",
    },
];

export default function ServicesGrid() {
    return (
        <section id="services" className="section-padding section-alt">
            <div className="page-container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="section-label">What We Do</span>
                    <h2>Building With Purpose and Precision</h2>
                    <p className="mt-4">
                        HRF Customs delivers full scope custom home building and general
                        contracting services. From the foundation to the final detail, every
                        service is delivered with owner led oversight and a commitment to
                        quality that our clients have come to expect.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <a
                            key={service.title}
                            href={service.href}
                            className="card group"
                        >
                            <div className="w-12 h-12 rounded bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors">
                                <service.icon size={24} />
                            </div>
                            <h4 className="mb-2">{service.title}</h4>
                            <p className="text-sm leading-relaxed">{service.description}</p>
                            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary)] mt-4 group-hover:gap-2 transition-all">
                                Learn More <ArrowRightIcon size={14} />
                            </span>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a href="/services" className="btn-outline">
                        View All Services
                        <ArrowRightIcon size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
