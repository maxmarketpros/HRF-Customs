import { StarIcon, ArrowRightIcon } from "./icons";

const testimonials = [
    {
        initials: "R.M.",
        location: "Cache Valley, UT",
        rating: 5,
        text: "From the very first meeting, the HRF team was straightforward about costs, timelines, and what to expect. They managed every trade on our build and kept us updated throughout the entire process. Our home came together exactly as planned.",
    },
    {
        initials: "T.L.",
        location: "Northern Utah",
        rating: 5,
        text: "We chose HRF Customs because we wanted a builder who would actually be on the job site. The owner was involved from day one and handled every detail personally. The communication and organization were outstanding from start to finish.",
    },
    {
        initials: "J.K.",
        location: "Southern Idaho",
        rating: 5,
        text: "Building a custom home felt overwhelming until we began working with HRF Customs. They laid out the entire process, built a realistic budget, and managed the build with complete transparency. We always knew where things stood.",
    },
];

export default function TestimonialsPreview() {
    return (
        <section id="testimonials" className="section-padding">
            <div className="page-container">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <span className="section-label">Client Experiences</span>
                    <h2>What Our Clients Say</h2>
                    <p className="mt-4">
                        The majority of our projects come through referrals and repeat
                        clients. That is the kind of trust you can only earn through
                        consistent delivery and honest communication over the course of many
                        builds.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card flex flex-col">
                            <div className="flex gap-0.5 mb-4">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        size={16}
                                        className="text-amber-400"
                                    />
                                ))}
                            </div>

                            <p className="text-sm text-[var(--color-neutral-600)] leading-relaxed flex-1">
                                &ldquo;{testimonial.text}&rdquo;
                            </p>

                            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-[var(--color-neutral-100)]">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white text-sm font-bold">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-[var(--color-neutral-800)]">
                                        {testimonial.initials}
                                    </p>
                                    <p className="text-xs text-[var(--color-neutral-500)]">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a href="/reviews" className="btn-outline">
                        Read All Reviews
                        <ArrowRightIcon size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
