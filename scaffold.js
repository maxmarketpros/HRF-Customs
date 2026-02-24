const fs = require('fs');
const path = require('path');

const pages = [
    // Core
    { path: 'about/page.tsx', title: 'About HRF Customs' },
    { path: 'process/page.tsx', title: 'Our Process' },
    { path: 'services/page.tsx', title: 'Services Overview' },
    { path: 'areas/page.tsx', title: 'Areas We Serve' },
    { path: 'portfolio/page.tsx', title: 'Our Work Portfolio' },
    { path: 'gallery/page.tsx', title: 'Gallery' },
    { path: 'testimonials/page.tsx', title: 'Testimonials' },
    { path: 'faq/page.tsx', title: 'FAQ' },
    { path: 'contact/page.tsx', title: 'Contact Us' },

    // Services
    { path: 'services/custom-home-builder/page.tsx', title: 'Custom Home Builder' },
    { path: 'services/luxury-custom-home-builder/page.tsx', title: 'Luxury Custom Home Builder' },
    { path: 'services/design-build-contractor/page.tsx', title: 'Design Build Contractor' },
    { path: 'services/general-contractor-for-custom-homes/page.tsx', title: 'General Contractor for Custom Homes' },
    { path: 'services/framing-contractors/page.tsx', title: 'Framing Contractors' },
    { path: 'services/excavation-work/page.tsx', title: 'Excavation Work' },
    { path: 'services/concrete-services/page.tsx', title: 'Concrete Services' },
    { path: 'services/preconstruction-planning/page.tsx', title: 'Preconstruction Planning' },
    { path: 'services/project-management/page.tsx', title: 'Project Management' },
    { path: 'services/home-build-consultation/page.tsx', title: 'Home Build Consultation' },

    // Areas
    { path: 'areas/northern-utah/page.tsx', title: 'Northern Utah' },
    { path: 'areas/southern-idaho/page.tsx', title: 'Southern Idaho' },
    { path: 'areas/western-wyoming/page.tsx', title: 'Western Wyoming' },
    { path: 'areas/cache-valley-utah/page.tsx', title: 'Cache Valley Utah' },
    { path: 'areas/bear-lake-region-utah-idaho/page.tsx', title: 'Bear Lake Region Utah and Idaho' },
    { path: 'areas/logan-utah-area/page.tsx', title: 'Logan Utah Area' },
    { path: 'areas/star-valley-wyoming/page.tsx', title: 'Star Valley Wyoming' },
    { path: 'areas/jackson-hole-region-wyoming/page.tsx', title: 'Jackson Hole Region Wyoming' },
    { path: 'areas/preston-idaho-area/page.tsx', title: 'Preston Idaho Area' },
    { path: 'areas/soda-springs-idaho-area/page.tsx', title: 'Soda Springs Idaho Area' },
];

const template = (title) => `import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
    title: "${title} | HRF Customs",
    description: "Learn more about ${title} from HRF Customs, the premier custom home builder.",
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
                        ${title}
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
`;

pages.forEach(p => {
    const fullPath = path.join('c:/Users/wren-/Repos/HRF CUSTOMS/web/src/app', p.path);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });
    if (!fs.existsSync(fullPath)) {
        fs.writeFileSync(fullPath, template(p.title));
        console.log('Created: ' + fullPath);
    } else {
        console.log('Skipped existing: ' + fullPath);
    }
});
