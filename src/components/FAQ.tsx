"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

const faqs = [
    {
        question:
            "How far does HRF Customs travel from Paradise, UT for custom home projects?",
        answer:
            "We serve homeowners and landowners across Northern Utah, Cache Valley, Southern Idaho, and Western Wyoming. Most of our work falls within a reasonable driving distance from our base in Paradise, Utah. If you have a specific geography in mind, reach out directly to confirm capability.",
    },
    {
        question:
            "What level of detail goes into preconstruction planning?",
        answer:
            "Preconstruction planning includes an intense review of your building site, conceptual plans, engineering requirements, and permitting roadblocks. We establish a massive, line-item budget and an ironclad sequencing timeline so there are practically zero surprises when bulldozers arrive.",
    },
    {
        question:
            "How does HRF Customs handle budgets and change orders?",
        answer:
            "Every project begins with a deeply transparent budget that you sign off on. If changes arise, we deploy a ruthless change-order protocol containing a written scope, cost impact, and signature requirement before any tools are picked back up. Financial transparency is non-negotiable.",
    },
    {
        question:
            "How does HRF Customs coordinate massive engineering and structural inspections?",
        answer:
            "We coordinate directly with civil and structural engineers, executing their specs precisely. As your general contractor, we bake uncompromising “hold points” into the schedule to confirm that crucial phases like foundation depth, rebar grids, and waterproofing meet flawless code standards before moving forward.",
    },
    {
        question:
            "What factors affect extreme build timelines in this region?",
        answer:
            "Build timelines in Cache Valley and Wyoming are dominated by brutal winter weather windows, frozen ground sequencing, local jurisdiction red-tape, and specialized trade availability. We account for absolutely all of this in our initial baseline schedule so expectations are real.",
    },
    {
        question:
            "Does HRF Customs handle the full build or just massive framing/concrete phases?",
        answer:
            "We excel at both full-lifecycle project delivery and standalone specialized framing/foundation contracts. Many clients retain us to general contract the entire mansion site-work to final coat. Others hire our heavy-duty framing units just to get the structure dried in flawlessly.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section id="faq" className="py-24 lg:py-32 bg-white relative overflow-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <div className="page-container relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 lg:mb-24">
                        <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary)]/20 mx-auto">
                            Frequently Asked
                        </div>

                        <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                            Operational Intel
                        </h2>

                        <p className="text-[var(--color-neutral-600)] text-lg leading-relaxed max-w-2xl mx-auto">
                            Direct answers to complex inquiries about executing high-end custom homes across Northern Utah and the surrounding geographic regions.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-[var(--color-primary)] shadow-md' : 'border-[var(--color-neutral-100)] hover:border-[var(--color-neutral-200)] hover:shadow-sm'}`}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-6 p-6 md:p-8 text-left transition-colors"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className={`text-lg font-bold font-[family-name:var(--font-outfit)] transition-colors duration-300 leading-snug ${openIndex === index ? 'text-[var(--color-primary)]' : 'text-[var(--color-neutral-900)]'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all duration-300 ${openIndex === index ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white' : 'bg-[#f8fafc] border-[var(--color-neutral-100)] text-[var(--color-primary)]'}`}>
                                        <PlusIcon
                                            size={20}
                                            className={`transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${openIndex === index ? "rotate-[135deg]" : ""}`}
                                        />
                                    </div>
                                </button>

                                <div className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] ${openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                                    <div className="overflow-hidden">
                                        <div className="p-6 md:p-8 pt-0 border-t border-[var(--color-neutral-100)] mt-2">
                                            <p className="text-base text-[var(--color-neutral-600)] leading-loose mt-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
