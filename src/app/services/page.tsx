import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata = {
    title: "Our Custom Home Building Services | HRF Customs",
    description: "Explore the full suite of luxury custom home building, general contracting, and intensive pre-construction services offered by HRF Customs.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-0">
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
                        Our Expertise
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Uncompromising <span className="text-[var(--color-primary-light)]">Capabilities</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        From monumental custom home builds requiring absolute precision, to specialized heavy-duty framing and concrete services, HRF Customs executes at the highest level in the industry.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    SERVICES
                </div>
            </section>

            {/* Render the Grid but without the redundant button or duplicate title */}
            <ServicesGrid hideHeader={true} hideButton={true} />

            <ContactCTA />
            <Footer />
        </main>
    );
}
