import {
    MapPinIcon,
    ClockIcon,
    PhoneIcon,
    EmailIcon,
} from "./icons";
import Script from "next/script";

export default function ContactCTA() {
    return (
        <section id="contact" className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden border-t border-[var(--color-neutral-200)]">
            {/* Light Mode Grid Background */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(var(--color-primary-dark) 1px, transparent 1px), linear-gradient(90deg, var(--color-primary-dark) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                backgroundPosition: 'center center'
            }}>
            </div>

            <div className="page-container px-0 sm:px-6 relative z-10">
                <div className="bg-white border-y sm:border border-[var(--color-neutral-200)] p-6 sm:p-8 md:p-12 lg:p-16 shadow-xl relative">

                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
                        {/* Info Column */}
                        <div className="lg:col-span-5 flex flex-col justify-center">

                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-6 w-max border border-[var(--color-primary)]/20">
                                Get In Touch
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-[var(--color-neutral-900)] leading-[1.15] mb-6">
                                Schedule a <br />Consultation
                            </h2>
                            <p className="mt-4 text-[var(--color-neutral-600)] text-lg leading-relaxed mb-10">
                                We are ready to bring your vision to life. Reach out to schedule a consultation with our team to discuss your ideas, timeline, and goals for your custom home.
                            </p>

                            <div className="space-y-6 lg:space-y-8 bg-[var(--color-neutral-50)] p-6 sm:p-8 border border-[var(--color-neutral-200)]">
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-transform group-hover:-translate-y-1">
                                        <MapPinIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-0.5">Office Location</span>
                                        <span className="text-sm text-[var(--color-neutral-900)] font-medium">8536 S 150 E, Paradise, UT 84328</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-transform group-hover:-translate-y-1">
                                        <ClockIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-0.5">Business Hours</span>
                                        <span className="text-sm text-[var(--color-neutral-900)] font-medium">Mon-Sat: 8AM — 6PM</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-transform group-hover:-translate-y-1">
                                        <PhoneIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-0.5">Call Us</span>
                                        <a href="tel:4357600279" className="text-sm text-[var(--color-neutral-900)] font-bold hover:text-[var(--color-primary)] transition-colors tracking-wide">
                                            (435) 760 0279
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white border border-[var(--color-neutral-200)] flex items-center justify-center text-[var(--color-primary)] shrink-0 transition-transform group-hover:-translate-y-1">
                                        <EmailIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-[var(--color-neutral-500)] tracking-wider mb-0.5">Email Us</span>
                                        <a href="mailto:highridgeframing@gmail.com" className="text-sm text-[var(--color-neutral-900)] font-bold hover:text-[var(--color-primary)] transition-colors">
                                            highridgeframing@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7 flex flex-col">
                            <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-900)] mb-6 border-b border-[var(--color-neutral-200)] pb-4 mt-8 lg:mt-0">
                                Project Intake Form
                            </h3>
                            <div className="bg-[var(--color-neutral-50)] border border-[var(--color-neutral-200)] p-0 sm:p-2 lg:p-4 w-full flex-grow min-h-[695px] relative rounded-md overflow-hidden">
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
                                    data-height="695"
                                    data-layout-iframe-id="inline-EBindBDKViBbdpeH85TF"
                                    data-form-id="EBindBDKViBbdpeH85TF"
                                    title="WebSite Form Template"
                                    className="absolute inset-0"
                                >
                                </iframe>
                                <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
