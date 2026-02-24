import {
    UsersIcon,
    SearchIcon,
    ClipboardIcon,
    DollarIcon,
    HardHatIcon,
    FileCheckIcon,
} from "./icons";

const steps = [
    {
        number: "01",
        icon: UsersIcon,
        title: "Consultation",
        description:
            "We start with a conversation about your goals, your land, your budget range, and your timeline expectations. No pressure and no obligations. This is where we determine if HRF Customs is the right fit for your project.",
    },
    {
        number: "02",
        icon: SearchIcon,
        title: "Site and Plans Review",
        description:
            "We review your building site, existing plans or concepts, and any engineering or survey work that has been completed. If additional professional services are needed, we help coordinate those relationships.",
    },
    {
        number: "03",
        icon: ClipboardIcon,
        title: "Preconstruction Planning",
        description:
            "This is where the real work begins. We develop a detailed scope of work, identify trade partner needs, map out the sequencing, and address any site or permitting requirements specific to your location.",
    },
    {
        number: "04",
        icon: DollarIcon,
        title: "Budget and Schedule Baseline",
        description:
            "We build a transparent budget with line item visibility and a project schedule with clear milestones. You will know what to expect, when to expect it, and how your money is being allocated before we break ground.",
    },
    {
        number: "05",
        icon: HardHatIcon,
        title: "Build Phase Management",
        description:
            "During construction, we manage trade coordination, scheduling, inspections, and quality control on a daily basis. You receive regular updates and have direct access to the project lead throughout the entire build.",
    },
    {
        number: "06",
        icon: FileCheckIcon,
        title: "Closeout and Handoff",
        description:
            "We conduct a thorough walkthrough, address any remaining items, compile project documentation, and hand over your completed home. We also outline what to expect in terms of ongoing maintenance and warranty coverage from trade partners.",
    },
];

export default function ProcessTimeline() {
    return (
        <section id="process" className="section-padding section-alt">
            <div className="page-container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="section-label">Our Process</span>
                    <h3>Custom Home Building in Paradise, UT: From Concept to Completion</h3>
                    <p className="mt-4" style={{ color: "var(--color-neutral-600)" }}>
                        Every HRF Customs project follows a proven process that keeps your
                        build organized, transparent, and on track. Here is how we take your
                        project from initial conversation to completed home.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-0">
                        {steps.map((step, index) => (
                            <div key={step.number} className="flex gap-6 md:gap-8">
                                {/* Timeline rail */}
                                <div className="flex flex-col items-center shrink-0">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                                        style={{ backgroundColor: "var(--color-primary)", color: "#ffffff" }}
                                    >
                                        <step.icon size={20} />
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div
                                            className="w-px flex-1 min-h-[2rem]"
                                            style={{ backgroundColor: "var(--color-neutral-200)" }}
                                        />
                                    )}
                                </div>

                                {/* Content */}
                                <div className="pb-10">
                                    <span
                                        className="text-xs font-bold tracking-wider"
                                        style={{ color: "var(--color-primary)" }}
                                    >
                                        STEP {step.number}
                                    </span>
                                    <h4 className="mt-1 mb-2">{step.title}</h4>
                                    <p className="text-sm" style={{ color: "var(--color-neutral-600)" }}>
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-8">
                    <a href="#contact" className="btn-primary">
                        Start With Step One
                    </a>
                </div>
            </div>
        </section>
    );
}
