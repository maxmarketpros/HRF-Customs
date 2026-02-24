import { StarIcon, ArrowRightIcon } from "./icons";

const testimonials = [
    {
        initials: "RM",
        location: "Cache Valley, UT",
        rating: 5,
        text: "From the very first meeting, the HRF team was straightforward about costs, timelines, and what to expect. They managed every massive trade on our build and kept us updated. Our monumental home came together exactly as aggressively planned.",
    },
    {
        initials: "TL",
        location: "Northern Utah",
        rating: 5,
        text: "We chose HRF Customs because we wanted an elite general contractor who would actually be on the job site. The owner was involved from day one and handled every detail personally. The communication and intense organization were outstanding.",
    },
    {
        initials: "JK",
        location: "Southern Idaho",
        rating: 5,
        text: "Building a highly complex custom home felt overwhelming until we began working with HRF Customs. They stripped away the confusion, built a heavy-duty realistic budget, and managed the build with complete brutal transparency.",
    },
];

export default function TestimonialsPreview() {
    return (
        <section id="testimonials" className="py-24 lg:py-32 bg-[#f8fafc] relative overflow-hidden">
            <div className="page-container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                        Client Verification
                    </div>

                    <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                        Reputation Built <br /> On Hard Data
                    </h2>
                    <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed">
                        The majority of our premium construction projects come exclusively through direct referrals and repeat clients. That deep trust is only earned through relentless delivery on extreme custom builds.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="relative group p-8 lg:p-10 bg-white border border-[var(--color-neutral-100)] rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col items-start hover:-translate-y-2">

                            {/* Decorative Quote Icon Watermark */}
                            <div className="absolute top-8 right-8 text-8xl font-serif text-[var(--color-neutral-50)] leading-none pointer-events-none select-none">
                                "
                            </div>

                            <div className="flex gap-1 mb-8 relative z-10">
                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        size={18}
                                        className="text-[#F59E0B]"
                                    />
                                ))}
                            </div>

                            <p className="text-base text-[var(--color-neutral-600)] leading-loose flex-1 font-medium relative z-10 italic">
                                "{testimonial.text}"
                            </p>

                            <div className="flex items-center gap-4 mt-10 pt-8 border-t border-[var(--color-neutral-100)] w-full relative z-10">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 flex items-center justify-center text-[var(--color-primary)] text-sm font-bold tracking-wider">
                                    {testimonial.initials}
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-sm font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] tracking-wide">
                                        Verified Client
                                    </p>
                                    <p className="text-xs font-semibold text-[var(--color-neutral-500)] uppercase tracking-wider">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 lg:mt-24">
                    <a href="/testimonials" className="btn-outline border-2 px-8 py-3.5 tracking-widest text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors uppercase font-bold text-xs inline-flex items-center gap-3">
                        Read All Testimonials
                        <ArrowRightIcon size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
