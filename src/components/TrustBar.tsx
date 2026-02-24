import { MapPinIcon, ClockIcon, PhoneIcon, EmailIcon } from "./icons";

export default function TrustBar() {
    return (
        <section className="bg-[var(--color-primary-dark)] text-white border-b border-white/10">
            <div className="page-container py-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 max-w-6xl mx-auto">

                    {/* Location */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                        <div className="text-[var(--color-primary-light)]">
                            <MapPinIcon size={20} />
                        </div>
                        <div className="text-sm font-medium tracking-wide">
                            8536 S 150 E, Paradise, UT
                        </div>
                    </div>

                    {/* Divider (Hidden on mobile) */}
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>

                    {/* Hours */}
                    <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-start">
                        <div className="text-[var(--color-primary-light)]">
                            <ClockIcon size={20} />
                        </div>
                        <div className="text-sm font-medium tracking-wide">
                            Mon-Sat: 8 AM - 6 PM
                        </div>
                    </div>

                    {/* Divider (Hidden on mobile) */}
                    <div className="hidden md:block w-px h-6 bg-white/20"></div>

                    {/* Phone Container */}
                    <div className="flex flex-row items-center gap-6 w-full md:w-auto justify-center md:justify-start">
                        <a
                            href="tel:4357600279"
                            className="flex items-center gap-2 text-sm font-medium tracking-wide hover:text-[var(--color-primary-light)] transition-colors"
                        >
                            <PhoneIcon size={20} className="text-[var(--color-primary-light)]" />
                            Call (435) 760 0279
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
