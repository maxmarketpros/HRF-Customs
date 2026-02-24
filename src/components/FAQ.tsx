"use client";

import { useState } from "react";
import { PlusIcon } from "./icons";

const faqs = [
    {
        question:
            "How far does HRF Customs travel from Paradise, UT for custom home projects?",
        answer:
            "We regularly serve homeowners and landowners across Northern Utah, including the Cache Valley corridor, as well as Southern Idaho and Western Wyoming. Travel distance depends on project scope and location specifics. If you have a build site in the region, reach out and we can confirm availability for your area. Most of our work falls within a reasonable driving distance from our base in Paradise, Utah.",
    },
    {
        question:
            "What is included in preconstruction planning with HRF Customs?",
        answer:
            "Preconstruction planning includes a detailed review of your building site, existing plans or architectural concepts, engineering requirements, and permitting needs. We develop a complete scope of work, identify trade partner requirements, build a line item budget, and create a project schedule with milestones. The goal is to eliminate surprises and give you a clear, realistic picture of what your project will require before we break ground.",
    },
    {
        question:
            "How does HRF Customs handle budgets and change orders during a build?",
        answer:
            "We start every project with a transparent, line item budget that you review and approve before construction begins. If changes arise during the build, we document them through a formal change order process that includes a written description of the change, the cost impact, and your approval before any work proceeds. You will never be surprised by unexpected charges because every financial decision goes through a documented approval process.",
    },
    {
        question:
            "How does HRF Customs coordinate engineering and inspections?",
        answer:
            "We work directly with structural engineers, civil engineers, and local building inspectors throughout the project. As your general contractor, we ensure that all engineering specifications are followed during construction, schedule required inspections at each phase, and address any findings before moving forward. Our quality first sequencing includes built in hold points to confirm that each stage meets code requirements before the next phase begins.",
    },
    {
        question:
            "What factors affect the build timeline for a custom home in this region?",
        answer:
            "Build timelines in Northern Utah, Southern Idaho, and Western Wyoming are influenced by several regional factors, including winter weather windows, seasonal access to building sites, freeze thaw cycles that affect concrete work, soil conditions, permitting timelines with local jurisdictions, and the availability of specialized trades. We account for all of these factors in our initial project scheduling and communicate realistic timelines from the start. While we cannot control weather or third party schedules, we manage every variable within our control to keep your project moving efficiently.",
    },
    {
        question:
            "Does HRF Customs handle the full build or just certain phases?",
        answer:
            "We offer both full project delivery and specific construction phase services. Many of our clients hire us to manage the entire build from site work through final walkthrough. We also provide standalone services for clients who need framing, excavation, concrete foundations, or project management for specific phases of their build. During the initial consultation, we will discuss which scope makes the most sense for your project.",
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
        <section id="faq" className="section-padding section-alt">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <div className="page-container">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="section-label">Common Questions</span>
                        <h2>Frequently Asked Questions</h2>
                        <p className="mt-4">
                            Answers to common questions about working with HRF Customs on your
                            custom home project in Northern Utah and the surrounding region.
                        </p>
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-[var(--color-neutral-200)] rounded-sm overflow-hidden"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--color-neutral-50)] transition-colors"
                                    aria-expanded={openIndex === index}
                                >
                                    <span className="text-sm font-semibold text-[var(--color-neutral-800)] leading-snug">
                                        {faq.question}
                                    </span>
                                    <PlusIcon
                                        size={20}
                                        className={`text-[var(--color-primary)] shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-45" : ""
                                            }`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-5 pb-5">
                                        <p className="text-sm leading-relaxed">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
