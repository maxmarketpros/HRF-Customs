import { GoogleIcon, StarIcon } from "./icons";

const GOOGLE_REVIEW_URL = "https://share.google/pFgbzQH2rMAszs7uQ";

const testimonials = [
    {
        initials: "R",
        name: "Rex Schwab",
        meta: "6 reviews • 3 photos",
        rating: 5,
        text: "These guys did a custom home for us in 2019. The years of experience showed back then. Now they have even more. Can't go wrong with these guys.",
        avatarClassName: "bg-[#5B34B1] text-white",
    },
    {
        initials: "HR",
        name: "Harley Ryan",
        meta: "0 reviews • 0 photos",
        rating: 5,
        text: "HRF is hands down one of the best companies around. Awesome customer service, years of quality service and a team of guys with knowledge and experience to build your dream house from the ground up! In this world, it's hard to find a company. That'll be true to their word do everything they're gonna say they're gonna do show up on time when they say they're gonna show up and get the job done to absolute perfection. Josh and his team are no nonsense company. They truly care about the work they put out and making their customers happy. I would absolutely refer them to anybody and everybody out there.",
        avatarClassName: "bg-[#F1F5F9] text-[#0F172A] border border-[var(--color-neutral-200)]",
    },
    {
        initials: "L",
        name: "Lance Leishman",
        meta: "3 reviews • 0 photos",
        rating: 5,
        text: "Straight forward quality work awesome communication. Allways a enjoyable jobs site atmosphere from subcontractors to homeowner interactions.",
        avatarClassName: "bg-[#F97316] text-white",
    },
];

export default function TestimonialsPreview() {
    return (
        <section id="testimonials" className="relative overflow-hidden bg-[#f8fafc] py-24 lg:py-32">
            <div className="page-container relative z-10">
                <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-24">
                    <div className="mx-auto mb-6 inline-flex w-max items-center rounded border border-[var(--color-primary)]/20 bg-[var(--color-primary)]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                        Client Verification
                    </div>

                    <h2 className="mb-6 text-3xl font-bold leading-[1.15] text-[var(--color-neutral-900)] font-[family-name:var(--font-outfit)] lg:text-5xl">
                        Reputation Built <br /> On Hard Data
                    </h2>
                    <p className="text-lg leading-relaxed text-[var(--color-neutral-600)]">
                        The majority of our premium construction projects come exclusively through direct referrals and repeat clients. That deep trust is only earned through relentless delivery on extreme custom builds.
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <a
                            key={index}
                            href={GOOGLE_REVIEW_URL}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Read ${testimonial.name}'s Google review`}
                            className="group relative flex h-full flex-col items-start rounded-3xl border border-[var(--color-neutral-100)] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] lg:p-10"
                        >
                            <div className="relative z-10 mb-8 flex w-full items-start justify-between gap-4">
                                <div className="flex min-w-0 items-center gap-4">
                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold tracking-wider ${testimonial.avatarClassName}`}>
                                        {testimonial.initials}
                                    </div>
                                    <div className="min-w-0">
                                        <p className="truncate text-base font-bold text-[var(--color-neutral-900)] font-[family-name:var(--font-outfit)]">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-[var(--color-neutral-500)]">
                                            {testimonial.meta}
                                        </p>
                                    </div>
                                </div>

                                <div className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[var(--color-neutral-200)] bg-[var(--color-neutral-50)] px-3 py-1 text-xs font-semibold text-[var(--color-neutral-700)] transition-colors group-hover:border-[var(--color-primary)]/30 group-hover:text-[var(--color-primary)]">
                                    <GoogleIcon size={16} />
                                    Google
                                </div>
                            </div>

                            <div className="relative z-10 mb-6 flex gap-1">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        size={18}
                                        className="text-[#F59E0B]"
                                    />
                                ))}
                            </div>

                            <p className="relative z-10 flex-1 overflow-hidden text-base font-medium leading-loose text-[var(--color-neutral-600)] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:8]">
                                {testimonial.text}
                            </p>

                            <div className="relative z-10 mt-8 w-full border-t border-[var(--color-neutral-100)] pt-6">
                                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition-transform duration-300 group-hover:translate-x-1">
                                    Read more on Google
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
