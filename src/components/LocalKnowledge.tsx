import {
    MountainSnowIcon,
    ThermometerIcon,
    DropletIcon,
    LayersIcon,
    TruckIcon,
    MapPinIcon,
    ArrowRightIcon,
} from "./icons";

const conditions = [
    {
        icon: MountainSnowIcon,
        title: "Snow Loads and Seasonal Access",
        description:
            "Building in mountain valleys means designing for significant snow loads and planning construction schedules around seasonal access windows. We understand how elevation and exposure affect structural requirements and build timing in this region.",
    },
    {
        icon: ThermometerIcon,
        title: "Freeze Thaw Cycles",
        description:
            "Northern Utah and the surrounding areas experience significant temperature swings that affect foundations, concrete curing, and material selection. Our scheduling accounts for optimal pour windows and curing conditions.",
    },
    {
        icon: DropletIcon,
        title: "Drainage and Grading",
        description:
            "Water management is critical in the valleys and foothills of this region. Proper drainage design, grading, and waterproofing decisions made during site work directly impact the long term performance of your home.",
    },
    {
        icon: LayersIcon,
        title: "Soils and Foundations",
        description:
            "Soil conditions vary significantly across Cache Valley and into Southern Idaho and Western Wyoming. We work with local geotechnical data to ensure foundation designs are matched to actual site conditions.",
    },
    {
        icon: TruckIcon,
        title: "Rural Logistics and Deliveries",
        description:
            "Many build sites in our service area are on rural lots with limited access. We coordinate material deliveries, equipment staging, and trade scheduling to keep projects efficient even on remote properties.",
    },
];

export default function LocalKnowledge() {
    return (
        <section id="local-knowledge" className="section-padding">
            <div className="page-container">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <div>
                        <span className="section-label">Regional Expertise</span>
                        <h2>Built for This Region</h2>
                        <p className="mt-4">
                            Building a custom home in Northern Utah, Southern Idaho, or Western
                            Wyoming is not the same as building in milder climates. The
                            conditions here demand a builder who understands the local
                            realities and plans accordingly. HRF Customs has been building in
                            this region for over 15 years, and that experience shows in how we
                            approach every project.
                        </p>

                        <div className="mt-8 space-y-6">
                            {conditions.map((item, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-10 h-10 rounded bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-base mb-1">{item.title}</h4>
                                        <p className="text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <a href="/areas" className="btn-outline">
                                View Service Areas
                                <ArrowRightIcon size={16} />
                            </a>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-[var(--color-neutral-100)] rounded-sm h-full min-h-[400px] flex flex-col items-center justify-center p-8 border border-[var(--color-neutral-200)]">
                            <MapPinIcon
                                size={48}
                                className="text-[var(--color-primary)] mb-4"
                            />
                            <h4 className="text-center mb-2">Service Area</h4>
                            <p className="text-center text-sm text-[var(--color-neutral-500)] max-w-xs">
                                Based in Paradise, UT, serving homeowners and landowners across
                                Northern Utah, the Cache Valley corridor, Southern Idaho, and
                                Western Wyoming.
                            </p>
                            <div className="mt-6 flex flex-wrap justify-center gap-2">
                                {[
                                    "Paradise, UT",
                                    "Logan, UT",
                                    "Cache Valley",
                                    "Hyrum, UT",
                                    "Smithfield, UT",
                                    "Preston, ID",
                                    "Bear Lake",
                                    "Star Valley, WY",
                                ].map((area) => (
                                    <span
                                        key={area}
                                        className="px-3 py-1.5 bg-white border border-[var(--color-neutral-200)] text-xs font-medium text-[var(--color-neutral-600)] rounded"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs text-[var(--color-neutral-400)] mt-6 text-center">
                                Contact us to confirm availability for your specific location
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
