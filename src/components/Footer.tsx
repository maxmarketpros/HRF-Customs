import Image from "next/image";
import { PhoneIcon, EmailIcon, MapPinIcon } from "./icons";

const serviceLinks = [
    { label: "Custom Home Building", href: "/services/custom-home-building" },
    { label: "Luxury Custom Homes", href: "/services/luxury-custom-homes" },
    { label: "Design Build Coordination", href: "/services/design-build-coordination" },
    { label: "General Contracting", href: "/services/general-contracting" },
    { label: "Framing", href: "/services/framing" },
    { label: "Excavation and Concrete", href: "/services/excavation-and-concrete" },
];

const areaLinks = [
    { label: "Paradise, UT", href: "/areas/paradise-ut" },
    { label: "Cache Valley", href: "/areas/cache-valley" },
    { label: "Northern Utah", href: "/areas/northern-utah" },
    { label: "Southern Idaho", href: "/areas/southern-idaho" },
    { label: "Western Wyoming", href: "/areas/western-wyoming" },
];

export default function Footer() {
    return (
        <footer className="bg-[var(--color-neutral-900)] text-white">
            <div className="page-container py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    <div>
                        <Image
                            src="/images/logo-inverted.png"
                            alt="HRF Customs logo"
                            width={140}
                            height={46}
                            className="mb-4"
                        />
                        <p className="text-sm text-neutral-400 leading-relaxed">
                            Custom home builder and general contractor based in Paradise, UT.
                            Serving Northern Utah, Southern Idaho, and Western Wyoming with
                            owner led project management and quality focused construction.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                            Services
                        </h4>
                        <ul className="space-y-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                            Service Areas
                        </h4>
                        <ul className="space-y-2.5">
                            {areaLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-neutral-400 hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4 tracking-wide">
                            Contact
                        </h4>
                        <div className="space-y-3">
                            <a
                                href="tel:4357600279"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                            >
                                <PhoneIcon size={16} />
                                (435) 760 0279
                            </a>
                            <a
                                href="mailto:highridgeframing@gmail.com"
                                className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                            >
                                <EmailIcon size={16} />
                                highridgeframing@gmail.com
                            </a>
                            <div className="flex items-start gap-2 text-sm text-neutral-400">
                                <MapPinIcon size={16} className="shrink-0 mt-0.5" />
                                <span>
                                    8536 S 150 E<br />
                                    Paradise, UT 84328
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10">
                <div className="page-container py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-xs text-neutral-500">
                        &copy; {new Date().getFullYear()} HRF Customs. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="/privacy"
                            className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/sitemap"
                            className="text-xs text-neutral-500 hover:text-neutral-300 transition-colors"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
