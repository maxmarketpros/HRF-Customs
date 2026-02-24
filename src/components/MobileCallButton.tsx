import { PhoneIcon } from "./icons";

export default function MobileCallButton() {
    return (
        <a
            href="tel:4357600279"
            className="fixed bottom-6 right-6 z-50 md:hidden flex items-center gap-2 px-5 py-3 bg-[var(--color-primary)] text-white font-semibold text-sm rounded-full shadow-lg hover:bg-[var(--color-primary-light)] transition-colors"
            aria-label="Call HRF Customs"
        >
            <PhoneIcon size={18} />
            Call Now
        </a>
    );
}
