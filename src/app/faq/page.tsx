import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { PlusIcon } from "@/components/icons";

export const metadata = {
    title: "Frequently Asked Questions | HRF Customs",
    description: "Get answers about building luxury custom homes in Northern Utah, Cache Valley, and Western Wyoming. Timelines, costs, pre-construction, and our proprietary process.",
};

const faqCategories = [
    {
        title: "Building Process",
        faqs: [
            {
                question: "How long does it typically take to build a custom home in Northern Utah?",
                answer: "The timeline for a luxury custom home build heavily depends on the complexity of the architecture, site conditions, and weather. Generally, our projects take anywhere from 12 to 24 months. At HRF Customs, we establish an ironclad timeline during the pre-construction phase so you know exactly what to expect before we break ground."
            },
            {
                question: "Do you build year-round, even in extreme winters?",
                answer: "Yes. HRF Customs specializes in high-altitude and extreme-weather builds. We utilize massive ground heaters, structural tarping, and immense logistical planning to safely pour concrete and frame timbers even in the dead of winter in places like Star Valley or Bear Lake."
            },
            {
                question: "What level of detail goes into pre-construction planning?",
                answer: "Pre-construction is the most critical phase for HRF Customs. We conduct strict reviews of your building site, conceptual plans, engineering requirements, and local zoning. This allows us to establish a highly accurate budget and timeline, mitigating surprises during actual construction."
            },
            {
                question: "Do you have in-house architects or do I need my own?",
                answer: "We are a custom home builder and General Contractor, meaning we execute the physical build. We have a very tight network of elite architects and drafters across Utah and Wyoming that we can recommend. If you already have architectural plans, we are fully equipped to review them and begin value engineering immediately."
            },
            {
                question: "Can I make changes to the design once construction has started?",
                answer: "While we highly prioritize locking in decisions during pre-construction to avoid costly delays, we understand that true custom homes evolve. We use a formalized Change Order system that outlines the exact schedule impact and cost of any requested design changes before the work begins."
            }
        ]
    },
    {
        title: "Costs & Contracts",
        faqs: [
            {
                question: "How does HRF Customs handle budgets and unexpected change orders?",
                answer: "Transparency is a core pillar. Every custom home project begins with a deeply detailed, line-item budget that you review and approve. If a change order becomes necessary (or is requested by you), we execute a strict protocol detailing the written scope, the exact cost impact, and a signature requirement before proceeding."
            },
            {
                question: "What is the average cost to build a custom home per square foot?",
                answer: "Cost per square foot is a highly variable metric that depends entirely on your architectural choices, the topography of the land (e.g., steep mountain slopes in Cache Valley require extensive retaining walls), and the level of interior finishes. During our initial consultation, we can provide realistic ranges based on the scope of your vision."
            },
            {
                question: "Do you offer value engineering?",
                answer: "Absolutely. Our goal is to protect your architectural vision while protecting your capital. Because we have deep, hands-on experience in heavy trades, we often identify structural efficiencies or alternative materials during the design phase that can save money without compromising the aesthetic."
            },
            {
                question: "What type of contract do you use?",
                answer: "Depending on the scope of the project, we typically utilize a Cost-Plus or a Guaranteed Maximum Price (GMP) contract structure. Cost-Plus offers ultimate transparency on material and labor costs, while GMP provides a safety ceiling for your total budget. We will discuss which framework best suits your build during consultation."
            },
            {
                question: "How are payments structured throughout the build?",
                answer: "Payments are structured as regular draw requests tied directly to specific milestones and completed phases of work. You and your lender will receive deeply detailed invoices showing exactly what materials and labor are being billed for during that period."
            }
        ]
    },
    {
        title: "Service Areas",
        faqs: [
            {
                question: "How far does HRF Customs travel from Paradise, UT for custom home projects?",
                answer: "Our primary service areas include Northern Utah (Cache Valley, Logan, Weber County), Southern Idaho (Bear Lake, Preston, Soda Springs), and Western Wyoming (Star Valley, Jackson Hole region). Because we are highly mobile and own our fleet of equipment, we routinely handle massive builds across these regions."
            },
            {
                question: "Does HRF Customs handle the full build or just specific framing phases?",
                answer: "We are an apex General Contractor managing full-lifecycle project delivery—from raw dirt to the final coat of paint. However, because of our roots, some clients and developers do retain us strictly for our heavy-duty framing or mass excavation capabilities."
            },
            {
                question: "How do you handle out-of-state clients building secondary homes?",
                answer: "We specialize in this. A large portion of our clients are out-of-state executives executing a luxury build in Utah or Wyoming. We utilize high-resolution digital briefings, constant photo updates, and ironclad operational schedules to completely insulate you from localized friction."
            }
        ]
    },
    {
        title: "Quality & Assurance",
        faqs: [
            {
                question: "How do you ensure the quality of your subcontractors?",
                answer: "A builder is only as good as their trades. At HRF Customs, we do not throw bids out to the cheapest subcontractor. We maintain a very tight, highly vetted roster of elite craftsmen who understand our intense standards for quality and job site cleanliness."
            },
            {
                question: "Do you offer a warranty on your custom homes?",
                answer: "Yes, we stand behind our builds. We provide a comprehensive 1-year builder's warranty on all craftsmanship, alongside standard manufacturer warranties on installed components (roofing, HVAC, windows, etc.). Our relationship with clients does not end the day we hand over the keys."
            },
            {
                question: "Who is managing the job site on a daily basis?",
                answer: "Unlike volume builders who overload superintendents, HRF Customs guarantees direct ownership oversight on every project. A dedicated, highly experienced project manager will be on-site aggressively coordinating trades, managing quality control hold-points, and communicating with you directly."
            }
        ]
    }
];

export default function FAQPage() {
    // Flatten FAQs for JSON-LD Schema
    const allFaqs = faqCategories.flatMap(category => category.faqs);

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: allFaqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />
            <Header />

            {/* Dark Mode Hero */}
            <section className="relative w-full pt-48 pb-24 lg:pt-56 lg:pb-32 bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-light) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-dark)]/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="page-container relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[var(--color-primary-light)]/20 shadow-sm backdrop-blur-md">
                        Institutional Knowledge
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        Clear, transparent answers regarding custom home construction, budgeting, and our operational capabilities across Utah, Idaho, and Wyoming.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    KNOWLEDGE
                </div>
            </section>

            {/* Categorized FAQs Area */}
            <section className="py-24 lg:py-32 relative bg-[var(--color-neutral-50)] border-b border-[var(--color-neutral-200)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10 max-w-7xl mx-auto">

                    <div className="grid lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-16 lg:gap-y-24 items-start">
                        {faqCategories.map((category, catIdx) => (
                            <div key={catIdx} className="w-full">
                                <div className="mb-8 border-b border-[var(--color-neutral-200)] pb-4 flex items-center gap-4">
                                    <span className="text-[var(--color-primary)] font-bold text-lg font-[family-name:var(--font-outfit)]">0{catIdx + 1} //</span>
                                    <h2 className="text-2xl lg:text-3xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)]">
                                        {category.title}
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    {category.faqs.map((faq, index) => (
                                        <details key={index} className="group bg-white border border-[var(--color-neutral-200)] hover:border-[var(--color-primary)] transition-colors duration-300 rounded-2xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.03)] cursor-pointer">
                                            <summary className="flex items-center justify-between gap-6 p-6 md:p-8 list-none text-left focus:outline-none">
                                                <span className="text-[17px] font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] group-open:text-[var(--color-primary)] transition-colors duration-300 leading-snug">
                                                    {faq.question}
                                                </span>
                                                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border border-[var(--color-neutral-100)] bg-[#f8fafc] text-[var(--color-primary)] group-open:bg-[var(--color-primary)] group-open:border-[var(--color-primary)] group-open:text-white transition-all duration-300">
                                                    <PlusIcon
                                                        size={20}
                                                        className="transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-open:rotate-[135deg]"
                                                    />
                                                </div>
                                            </summary>
                                            <div className="bg-[#fafafa] overflow-hidden">
                                                <div className="p-6 md:p-8 pt-2 border-t border-[var(--color-neutral-100)]">
                                                    <p className="text-sm text-[var(--color-neutral-600)] leading-loose font-[family-name:var(--font-inter)]">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </details>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
