import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import { MapPinIcon, ClockIcon, PhoneIcon, EmailIcon } from "@/components/icons";

export const metadata = {
    title: "Initiate A Project | HRF Customs Contact",
    description: "Transmit your project requirements to HRF Customs. Contact us to schedule a consultation for your custom home build.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white selection:bg-[var(--color-primary)] selection:text-white">
            <Header />

            {/* Dark Mode Hero / Dispatch Protocol */}
            <section className="relative w-full pt-48 pb-24 lg:pt-56 lg:pb-32 bg-[var(--color-neutral-900)] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{
                    backgroundImage: `linear-gradient(var(--color-primary-light) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-light) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-primary-dark)]/20 blur-[120px] rounded-full pointer-events-none"></div>

                <div className="page-container relative z-10 text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-[var(--color-primary-light)]/20 shadow-sm backdrop-blur-md">
                        Get In Touch
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.05] mb-6">
                        Start Your Project
                    </h1>
                    <p className="text-lg lg:text-xl text-[var(--color-neutral-300)] leading-relaxed max-w-2xl mx-auto font-light">
                        Share your vision, timelines, and project details with us. Our team will review your information and reach out to schedule a consultation.
                    </p>
                </div>
                {/* Massive Watermark */}
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15rem] font-bold text-white/[0.02] select-none pointer-events-none font-[family-name:var(--font-outfit)] leading-none whitespace-nowrap">
                    CONTACT
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-24 lg:py-32 relative bg-white overflow-hidden border-b border-[var(--color-neutral-200)]">
                {/* Architectural Grid Background */}
                <div className="absolute inset-0 opacity-[0.02]" style={{
                    backgroundImage: `linear-gradient(var(--color-neutral-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-neutral-900) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    backgroundPosition: 'center center'
                }}></div>

                <div className="page-container relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Form Intake Column */}
                        <div className="lg:col-span-7 flex flex-col">
                            <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-8 flex items-center gap-4">
                                <span className="w-8 h-8 rounded bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] text-sm">01</span>
                                Project Details
                            </h2>
                            <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-2 lg:p-4 w-full min-h-[850px] relative rounded-lg shadow-sm">
                                <iframe
                                    src="https://api.leadconnectorhq.com/widget/form/EBindBDKViBbdpeH85TF"
                                    style={{ width: "100%", height: "100%", border: "none" }}
                                    id="inline-EBindBDKViBbdpeH85TF"
                                    data-layout="{'id':'INLINE'}"
                                    data-trigger-type="alwaysShow"
                                    data-trigger-value=""
                                    data-activation-type="alwaysActivated"
                                    data-activation-value=""
                                    data-deactivation-type="neverDeactivate"
                                    data-deactivation-value=""
                                    data-form-name="WebSite Form Template"
                                    data-height="850"
                                    data-layout-iframe-id="inline-EBindBDKViBbdpeH85TF"
                                    data-form-id="EBindBDKViBbdpeH85TF"
                                    title="WebSite Form Template"
                                    className="absolute inset-0"
                                >
                                </iframe>
                                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
                            </div>
                        </div>

                        {/* Operational Intel Column */}
                        <div className="lg:col-span-5 flex flex-col pt-2 lg:pt-0">
                            <h2 className="text-2xl lg:text-3xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-8 flex items-center gap-4">
                                <span className="w-8 h-8 rounded bg-[var(--color-neutral-800)] flex items-center justify-center text-white text-sm">02</span>
                                Contact Info
                            </h2>

                            <div className="space-y-6">
                                {/* Contact Cards */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="bg-white border border-[var(--color-neutral-200)] p-6 rounded-lg hover:border-[var(--color-primary)] transition-colors group">
                                        <div className="w-10 h-10 bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:-translate-y-1 transition-transform">
                                            <PhoneIcon size={18} />
                                        </div>
                                        <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Direct Line</div>
                                        <a href="tel:4357600279" className="text-sm font-bold text-[var(--color-neutral-900)] hover:text-[var(--color-primary)] transition-colors">(435) 760 0279</a>
                                    </div>
                                    <div className="bg-white border border-[var(--color-neutral-200)] p-6 rounded-lg hover:border-[var(--color-primary)] transition-colors group">
                                        <div className="w-10 h-10 bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:-translate-y-1 transition-transform">
                                            <EmailIcon size={18} />
                                        </div>
                                        <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Email Us</div>
                                        <a href="mailto:highridgeframing@gmail.com" className="text-sm font-bold text-[var(--color-neutral-900)] hover:text-[var(--color-primary)] transition-colors break-words">highridgeframing<br />@gmail.com</a>
                                    </div>
                                </div>

                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-lg flex gap-4">
                                    <div className="mt-1 text-[var(--color-primary)] shrink-0"><ClockIcon size={20} /></div>
                                    <div>
                                        <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Business Hours</div>
                                        <div className="text-sm font-medium text-[var(--color-neutral-900)]">Monday – Saturday: 8:00 AM — 6:00 PM</div>
                                    </div>
                                </div>

                                <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-6 rounded-lg flex flex-col gap-6">
                                    <div className="flex gap-4">
                                        <div className="mt-1 text-[var(--color-primary)] shrink-0"><MapPinIcon size={20} /></div>
                                        <div>
                                            <div className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-1">Office Location</div>
                                            <div className="text-sm font-medium text-[var(--color-neutral-900)]">8536 S 150 E<br />Paradise, UT 84328</div>
                                        </div>
                                    </div>

                                    {/* Map Embed */}
                                    <div className="w-full aspect-[4/3] rounded border border-[var(--color-neutral-200)] overflow-hidden shadow-inner relative group">
                                        <div className="absolute inset-0 bg-[var(--color-primary)]/10 mix-blend-overlay pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <iframe
                                            src="https://maps.google.com/maps?q=8536+S+150+E,+Paradise,+UT+84328&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0, filter: 'grayscale(0.3) contrast(1.1)' }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="absolute inset-0 transition-all duration-500 group-hover:filter-none"
                                        ></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Note: Purposefully omitting <ContactCTA /> here since the form is natively built into the page above */}

            <Footer />
        </main>
    );
}
