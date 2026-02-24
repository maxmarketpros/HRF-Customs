"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneIcon, MenuIcon, XIcon, ArrowRightIcon } from "./icons";

const navLinks = [
    { label: "About", href: "/about" },
    { label: "Process", href: "/process" },
    {
        label: "Services",
        href: "/services",
        megaMenu: [
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
                    { label: "Preconstruction Planning", href: "/services/preconstruction-planning" },
                    { label: "Project Management", href: "/services/project-management" },
                    { label: "Build Consultation", href: "/services/home-build-consultation" },
                ]
            }
        ]
    },
    {
        label: "Areas",
        href: "/areas",
        megaMenu: [
            {
                title: "Utah",
                links: [
                    { label: "Northern Utah", href: "/areas/northern-utah" },
                    { label: "Cache Valley", href: "/areas/cache-valley-utah" },
                    { label: "Logan Area", href: "/areas/logan-utah-area" },
                    { label: "Bear Lake Region", href: "/areas/bear-lake-region-utah-idaho" },
                ]
            },
            {
                title: "Idaho",
                links: [
                    { label: "Southern Idaho", href: "/areas/southern-idaho" },
                    { label: "Preston Area", href: "/areas/preston-idaho-area" },
                    { label: "Soda Springs", href: "/areas/soda-springs-idaho-area" },
                ]
            },
            {
                title: "Wyoming",
                links: [
                    { label: "Western Wyoming", href: "/areas/western-wyoming" },
                    { label: "Star Valley", href: "/areas/star-valley-wyoming" },
                    { label: "Jackson Hole", href: "/areas/jackson-hole-region-wyoming" },
                ]
            }
        ]
    },
    {
        label: "More",
        href: "#",
        dropdown: [
            { label: "Portfolio", href: "/portfolio" },
            { label: "Gallery", href: "/gallery" },
            { label: "Testimonials", href: "/testimonials" },
            { label: "FAQ", href: "/faq" },
        ]
    },
    { label: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        handleScroll(); // Check on initial load
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="page-container flex items-center justify-between">
                    <a href="/" className="flex items-center shrink-0 mr-4 xl:mr-8">
                        {/* When transparent, use the white (inverted) logo. When scrolled, use the colored logo. */}
                        <div className="relative w-[150px] h-[46px] md:w-[200px] md:h-[61px] lg:w-[220px] lg:h-[67px]">
                            <Image
                                src="/images/logo.png"
                                alt="HRF Customs colored logo"
                                fill
                                sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 220px"
                                className={`object-contain object-left transition-opacity duration-300 ${isScrolled || isMobileMenuOpen ? "opacity-100" : "opacity-0"
                                    }`}
                                priority
                            />
                            <Image
                                src="/images/logo-inverted.png"
                                alt="HRF Customs white logo"
                                fill
                                sizes="(max-width: 768px) 150px, (max-width: 1024px) 200px, 220px"
                                className={`object-contain object-left transition-opacity duration-300 ${isScrolled || isMobileMenuOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                priority
                            />
                        </div>
                    </a>

                    <nav className="hidden xl:flex items-center gap-5">
                        {navLinks.map((link) => (
                            <div key={link.label} className="relative group">
                                <a
                                    href={link.href}
                                    className={`text-[13px] tracking-widest font-bold uppercase transition-colors flex items-center gap-1.5 py-4 ${isScrolled || isMobileMenuOpen
                                        ? "text-[var(--color-neutral-600)] hover:text-[var(--color-primary)]"
                                        : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {(link.megaMenu || link.dropdown) && (
                                        <svg className="w-3.5 h-3.5 opacity-70 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </a>

                                {link.megaMenu && (
                                    <div className="absolute top-full -left-20 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[var(--color-neutral-100)] overflow-hidden w-[600px] p-8 text-left grid grid-cols-3 gap-8">
                                            {link.megaMenu.map(category => (
                                                <div key={category.title}>
                                                    <h4 className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase mb-4 pb-2 border-b border-[var(--color-neutral-100)]">
                                                        {category.title}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {category.links.map(sublink => (
                                                            <li key={sublink.href}>
                                                                <a
                                                                    href={sublink.href}
                                                                    className="block text-[13px] font-semibold text-[var(--color-neutral-600)] hover:text-[var(--color-neutral-900)] transition-colors leading-snug"
                                                                >
                                                                    {sublink.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {link.dropdown && (
                                    <div className="absolute top-full -left-4 pt-2 w-[240px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                                        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-[var(--color-neutral-100)] overflow-hidden py-3 text-left flex flex-col">
                                            {link.dropdown.map(sublink => (
                                                <a
                                                    key={sublink.href}
                                                    href={sublink.href}
                                                    className="block px-6 py-2.5 text-[13px] font-semibold text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-50)] transition-colors leading-snug"
                                                >
                                                    {sublink.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center gap-4 shrink-0 pl-4">
                        <a
                            href="tel:4357600279"
                            className={`flex items-center gap-1.5 text-sm font-bold transition-colors ${isScrolled || isMobileMenuOpen
                                ? "text-[var(--color-neutral-800)] hover:text-[var(--color-primary)]"
                                : "text-white hover:text-[var(--color-primary-light)]"
                                }`}
                        >
                            <PhoneIcon size={16} />
                            (435) 760 0279
                        </a>
                        <a
                            href="/contact"
                            className={`btn-primary text-[13px] !py-2.5 !px-5 shadow-lg ${!(isScrolled || isMobileMenuOpen)
                                ? "!bg-white !text-[var(--color-primary)] hover:!bg-[var(--color-neutral-100)]"
                                : ""
                                }`}
                        >
                            Initiate Project
                        </a>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`xl:hidden p-2 transition-colors cursor-pointer ${isScrolled || isMobileMenuOpen ? "text-[var(--color-neutral-800)]" : "text-white"
                            }`}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <XIcon size={26} /> : <MenuIcon size={26} />}
                    </button>
                </div>
            </header>

            {/* Mobile menu rendered OUTSIDE the header to avoid backdrop-filter containment */}
            {isMobileMenuOpen && (
                <div className="xl:hidden fixed inset-0 top-[62px] bg-white z-[55] overflow-y-auto">
                    <div className="page-container py-8 flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <div key={link.label}>
                                <a
                                    href={link.href}
                                    onClick={() => !link.megaMenu && !link.dropdown && setIsMobileMenuOpen(false)}
                                    className="block py-3 px-4 text-lg font-bold font-[family-name:var(--font-outfit)] text-[var(--color-neutral-800)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-50)] rounded-xl transition-colors"
                                >
                                    {link.label}
                                </a>
                                {link.megaMenu && (
                                    <div className="pl-6 border-l-2 border-[var(--color-neutral-100)] ml-6 mt-1 mb-2 flex flex-col gap-4">
                                        {link.megaMenu.map(category => (
                                            <div key={category.title}>
                                                <h4 className="text-[10px] font-bold tracking-[0.2em] text-[var(--color-primary)] uppercase mb-2 px-4">
                                                    {category.title}
                                                </h4>
                                                <div className="flex flex-col gap-0.5">
                                                    {category.links.map(sublink => (
                                                        <a
                                                            key={sublink.href}
                                                            href={sublink.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block py-2 px-4 text-[14px] font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-50)] rounded-lg transition-colors"
                                                        >
                                                            {sublink.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {link.dropdown && (
                                    <div className="pl-6 border-l-2 border-[var(--color-neutral-100)] ml-6 mt-1 mb-2 flex flex-col gap-0.5">
                                        {link.dropdown.map(sublink => (
                                            <a
                                                key={sublink.href}
                                                href={sublink.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="block py-2 px-4 text-[15px] font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-50)] rounded-lg transition-colors"
                                            >
                                                {sublink.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <hr className="my-6 border-[var(--color-neutral-200)]" />
                        <a
                            href="tel:4357600279"
                            className="flex items-center justify-center gap-2 py-4 px-4 text-lg font-bold text-[var(--color-primary)]"
                        >
                            <PhoneIcon size={20} />
                            (435) 760 0279
                        </a>
                        <a
                            href="/contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-primary text-center mt-2 mx-4"
                        >
                            Initiate Project
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
