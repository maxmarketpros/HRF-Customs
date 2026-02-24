import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
    title: "Excavation Work | HRF Customs",
    description: "Learn more about Excavation Work from HRF Customs, the premier custom home builder.",
};

export default function Page() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            <section className="relative w-full pt-40 pb-20 bg-[var(--color-neutral-50)] text-center flex flex-col items-center justify-center min-h-[60vh]">
                <div className="page-container relative z-10 w-full max-w-4xl">
                     <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 border border-[var(--color-primary)]/20 shadow-sm mx-auto">
                        Page Under Construction
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.1] mb-6">
                        Excavation Work
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-600)] leading-relaxed max-w-2xl mx-auto font-[family-name:var(--font-inter)]">
                        We are currently developing the operational content for this section. Please check back shortly, or navigate back to explore our custom home building methodology.
                    </p>
                </div>
            </section>

            <ContactCTA />
            <Footer />
        </main>
    );
}
