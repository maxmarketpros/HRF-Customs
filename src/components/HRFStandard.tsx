import Image from "next/image";
import { CheckCircleIcon } from "./icons";

const standards = [
    "Documented scope of work before every build phase begins",
    "Daily coordination with trade partners and subcontractors",
    "Quality first sequencing with hold points at critical stages",
    "Clean, organized job sites maintained throughout the project",
    "Safety protocols and equipment standards enforced on every site",
    "Inspection readiness at every checkpoint before moving forward",
    "Transparent budget tracking with clear change order documentation",
    "Owner present walkthroughs at key milestones during the build",
];

export default function HRFStandard() {
    return (
        <section id="hrf-standard" className="section-padding">
            <div className="page-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    <div>
                        <span className="section-label">Our Approach</span>
                        <h2>The HRF Standard</h2>
                        <p className="mt-4">
                            Every HRF Customs project is held to a consistent standard of
                            execution that covers everything from preconstruction planning
                            through final closeout. This is not a checklist we put on a
                            website. It is how we actually operate on every build, every day.
                            Our clients can see the difference on the job site and in the final
                            result.
                        </p>

                        <p className="mt-4">
                            We believe that the quality of a build is determined long before
                            the final coat of paint. It starts with how the project is planned,
                            how the schedule is managed, how trades are coordinated, and how
                            problems are solved when they arise. That is where the real work of
                            a general contractor happens.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {standards.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircleIcon
                                        size={20}
                                        className="text-[var(--color-primary)] shrink-0 mt-0.5"
                                    />
                                    <span className="text-[var(--color-neutral-700)] text-sm leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <Image
                            src="/images/framing/framing-01.jpg"
                            alt="HRF Customs framing a custom home in Northern Utah"
                            width={600}
                            height={700}
                            className="w-full h-auto object-cover rounded-sm"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute -bottom-4 -left-4 bg-[var(--color-primary)] text-white p-6 rounded-sm hidden lg:block">
                            <p className="text-3xl font-bold font-[var(--font-heading)]">
                                250+
                            </p>
                            <p className="text-sm text-white/80 mt-1">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
