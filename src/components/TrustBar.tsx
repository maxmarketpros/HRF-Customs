import { MapPinIcon, ClockIcon, PhoneIcon, EmailIcon } from "./icons";

export default function TrustBar() {
    return (
        <section className="bg-white border-y border-[var(--color-neutral-200)]">
            <div className="page-container py-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                            <MapPinIcon size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--color-neutral-800)]">
                                8536 S 150 E
                            </p>
                            <p className="text-xs text-[var(--color-neutral-500)]">
                                Paradise, UT 84328
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                            <ClockIcon size={20} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--color-neutral-800)]">
                                Mon to Sat: 8 AM to 6 PM
                            </p>
                            <p className="text-xs text-[var(--color-neutral-500)]">
                                Closed Sunday
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                            <PhoneIcon size={20} />
                        </div>
                        <div>
                            <a
                                href="tel:4357600279"
                                className="text-sm font-semibold text-[var(--color-neutral-800)] hover:text-[var(--color-primary)] transition-colors"
                            >
                                (435) 760 0279
                            </a>
                            <p className="text-xs text-[var(--color-neutral-500)]">
                                Call for a consultation
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-[var(--color-neutral-50)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                            <EmailIcon size={20} />
                        </div>
                        <div>
                            <a
                                href="mailto:highridgeframing@gmail.com"
                                className="text-sm font-semibold text-[var(--color-neutral-800)] hover:text-[var(--color-primary)] transition-colors"
                            >
                                highridgeframing@gmail.com
                            </a>
                            <p className="text-xs text-[var(--color-neutral-500)]">
                                Email us anytime
                            </p>
                        </div>
                    </div>
                </div>

                <p className="text-center text-xs text-[var(--color-neutral-400)] mt-4 pt-4 border-t border-[var(--color-neutral-100)]">
                    Serving homeowners and landowners since 2017
                </p>
            </div>
        </section>
    );
}
