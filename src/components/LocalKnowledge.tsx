import {
    MountainSnowIcon,
    ThermometerIcon,
    DropletIcon,
    LayersIcon,
    TruckIcon,
    ArrowRightIcon,
} from "./icons";

const conditions = [
    {
        icon: MountainSnowIcon,
        title: "Snow Loads & High Altitude",
        description:
            "We design for significant mountain snow loads and schedule construction around seasonal access windows specifically for high-elevation builds.",
    },
    {
        icon: ThermometerIcon,
        title: "Rigorous Freeze/Thaw Cycles",
        description:
            "Our timelines account for Cache Valley's extreme temperature swings, prioritizing optimal pour windows to prevent long-term foundation damage.",
    },
    {
        icon: DropletIcon,
        title: "Drainage & Valley Grading",
        description:
            "Water management is paramount in the foothills. Our pre-construction site work guarantees your home's integrity against massive spring runoffs.",
    },
    {
        icon: LayersIcon,
        title: "Complex Soils & Foundations",
        description:
            "Soil volatility varies drastically from Logan to Star Valley. We strictly partner with local geotechnical engineers to match foundations to reality.",
    },
    {
        icon: TruckIcon,
        title: "Rural Logistics & Access",
        description:
            "Remote lots demand intense logistical planning. We coordinate heavy machinery staging and material deliveries to keep off-grid projects efficient.",
    },
];

export default function LocalKnowledge() {
    return (
        <section id="local-knowledge" className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden text-left">
            <div className="page-container relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Content Side */}
                    <div>
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20">
                            Regional Expertise
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Engineered For The Northern Rockies
                        </h2>

                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10">
                            Building a luxury custom home in Northern Utah or Western Wyoming is completely unlike building in milder climates. The extreme conditions demand a contractor who knows the terrain intimately. HRF Customs has spent over 15 years mastering this specific geographic region.
                        </p>

                        <div className="space-y-6 lg:space-y-8">
                            {conditions.map((item, index) => (
                                <div key={index} className="flex gap-5 group">
                                    <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-[var(--color-neutral-100)] flex items-center justify-center text-[var(--color-primary)] shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                                            {item.title}
                                        </h4>
                                        <p className="text-[var(--color-neutral-600)] text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Interactive Map Side */}
                    <div className="w-full relative min-h-[500px] lg:min-h-[700px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[var(--color-neutral-100)] flex flex-col overflow-hidden">

                        {/* Internal Header */}
                        <div className="p-8 border-b border-[var(--color-neutral-100)] bg-white relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div>
                                <h4 className="text-xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)]">
                                    Service Area Map
                                </h4>
                                <p className="text-xs text-[var(--color-neutral-500)] mt-1 font-medium tracking-wide">
                                    HQ: PARADISE, UT • SERVING UT, ID, WY
                                </p>
                            </div>
                            <a href="/contact" className="text-xs font-bold text-[var(--color-primary-light)] flex items-center gap-1.5 uppercase tracking-wider group">
                                Verify Location <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>

                        {/* Map Iframe */}
                        <div className="flex-1 relative w-full h-full min-h-[400px]">
                            {/* We use a Google Maps iframe focused on Paradise/Cache Valley region */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d382103.4907727376!2d-111.83407635!3d41.83984025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus&zoom=8"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={false}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 grayscale contrast-[1.05] brightness-105 opacity-90"
                            ></iframe>

                            {/* Floating Map Overlay Tags */}
                            <div className="absolute bottom-6 left-6 right-6 pointer-events-none flex flex-wrap gap-2">
                                {["Cache Valley", "Logan", "Paradise", "Bear Lake", "Star Valley", "Preston"].map(area => (
                                    <span key={area} className="bg-white/90 backdrop-blur text-[var(--color-neutral-800)] text-[10px] font-bold uppercase tracking-widest py-1.5 px-3 rounded shadow-sm border border-white">
                                        {area}
                                    </span>
                                ))}
                            </div>

                            {/* Soft vignette gradient */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.1)_100%)] pointer-events-none"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
