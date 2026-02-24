import Image from "next/image";
import { PhoneIcon, EmailIcon, MapPinIcon } from "./icons";

const companyLinks = [
    { label: "Home", href: "/" },
    { label: "About HRF", href: "/about" },
    { label: "Our Process", href: "/process" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Gallery", href: "/gallery" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "FAQ", href: "/faq" },
];

const serviceGroups = [
    {
        title: "Core Builds",
        links: [
            { label: "Custom Home Builder", href: "/services/custom-home-builder" },
            { label: "Luxury Custom Home Builder", href: "/services/luxury-custom-home-builder" },
            { label: "Design Build Contractor", href: "/services/design-build-contractor" },
        ]
    },
    {
        title: "General & Trades",
        links: [
            { label: "General Contracting", href: "/services/general-contractor-for-custom-homes" },
            { label: "Framing Contractors", href: "/services/framing-contractors" },
            { label: "Concrete Services", href: "/services/concrete-services" },
            { label: "Excavation Work", href: "/services/excavation-work" },
        ]
    },
    {
        title: "Planning",
        links: [
            { label: "Preconstruction", href: "/services/preconstruction-planning" },
            { label: "Project Management", href: "/services/project-management" },
            { label: "Consultation", href: "/services/home-build-consultation" },
        ]
    }
];

const areaGroups = [
    {
        title: "Utah",
        links: [
            { label: "Northern Utah", href: "/areas/northern-utah" },
            { label: "Cache Valley", href: "/areas/cache-valley-utah" },
            { label: "Logan, UT", href: "/areas/logan-utah-area" },
            { label: "Bear Lake Region", href: "/areas/bear-lake-region-utah-idaho" },
        ]
    },
    {
        title: "Idaho",
        links: [
            { label: "Southern Idaho", href: "/areas/southern-idaho" },
            { label: "Preston, ID", href: "/areas/preston-idaho-area" },
            { label: "Soda Springs, ID", href: "/areas/soda-springs-idaho-area" },
        ]
    },
    {
        title: "Wyoming",
        links: [
            { label: "Western Wyoming", href: "/areas/western-wyoming" },
            { label: "Star Valley, WY", href: "/areas/star-valley-wyoming" },
            { label: "Jackson Hole, WY", href: "/areas/jackson-hole-region-wyoming" },
        ]
    }
];

export default function Footer() {
    return (
        <footer className="bg-[var(--color-neutral-900)] text-white">
            <div className="page-container py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
                    <div className="lg:col-span-4 lg:pr-8">
                        <Image
                            src="/images/logo-inverted.png"
                            alt="HRF Customs logo"
                            width={160}
                            height={52}
                            className="mb-6"
                        />
                        <p className="text-[15px] text-neutral-400 leading-relaxed max-w-sm">
                            Custom home builder and general contractor based in Paradise, UT.
                            Serving Northern Utah, Southern Idaho, and Western Wyoming with
                            owner-led project management and quality-focused construction.
                        </p>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-neutral-400 hover:text-[var(--color-primary-light)] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Services
                        </h4>
                        <div className="flex flex-col gap-6">
                            {serviceGroups.map(group => (
                                <div key={group.title}>
                                    <h5 className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-primary-light)] uppercase mb-3 opacity-90">
                                        {group.title}
                                    </h5>
                                    <ul className="space-y-2.5">
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <a
                                                    href={link.href}
                                                    className="text-[14px] text-neutral-400 hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Service Areas
                        </h4>
                        <div className="flex flex-col gap-6">
                            {areaGroups.map(group => (
                                <div key={group.title}>
                                    <h5 className="text-[11px] font-bold tracking-[0.15em] text-[var(--color-primary-light)] uppercase mb-3 opacity-90">
                                        {group.title}
                                    </h5>
                                    <ul className="space-y-2.5">
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <a
                                                    href={link.href}
                                                    className="text-[14px] text-neutral-400 hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold font-[family-name:var(--font-outfit)] text-white mb-6 uppercase tracking-widest">
                            Contact
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="tel:4357600279"
                                className="flex items-center gap-3 text-[14px] text-[var(--color-primary-light)] font-medium hover:text-white transition-colors"
                            >
                                <PhoneIcon size={18} />
                                (435) 760 0279
                            </a>
                            <a
                                href="/contact"
                                className="flex items-center gap-3 text-[14px] text-neutral-400 hover:text-white transition-colors"
                            >
                                <EmailIcon size={18} />
                                highridgeframing@gmail.com
                            </a>
                            <div className="flex items-start gap-3 text-[14px] text-neutral-400">
                                <MapPinIcon size={18} className="shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    8536 S 150 E<br />
                                    Paradise, UT 84328
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/10 bg-black/20">
                <div className="page-container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-neutral-500 font-inter">
                        &copy; {new Date().getFullYear()} HRF Customs. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a
                            href="/privacy"
                            className="text-sm text-neutral-500 hover:text-[var(--color-primary-light)] transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/sitemap"
                            className="text-sm text-neutral-500 hover:text-[var(--color-primary-light)] transition-colors"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
