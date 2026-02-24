"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { PhoneIcon, MenuIcon, XIcon } from "./icons";

const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Areas", href: "#local-knowledge" },
    { label: "Our Work", href: "#featured-work" },
    { label: "About", href: "#hrf-standard" },
    { label: "Reviews", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
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
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
                    : "bg-white py-4"
                }`}
        >
            <div className="page-container flex items-center justify-between">
                <a href="/" className="flex items-center shrink-0">
                    <Image
                        src="/images/logo.png"
                        alt="HRF Customs logo"
                        width={isScrolled ? 140 : 160}
                        height={isScrolled ? 46 : 52}
                        className="transition-all duration-300"
                        priority
                    />
                </a>

                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] transition-colors tracking-wide"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:4357600279"
                        className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-neutral-600)] hover:text-[var(--color-primary)] transition-colors"
                    >
                        <PhoneIcon size={16} />
                        (435) 760 0279
                    </a>
                    <a href="#contact" className="btn-primary text-sm !py-2.5 !px-5">
                        Schedule Consultation
                    </a>
                </div>

                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 text-[var(--color-neutral-700)]"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 top-[60px] bg-white z-40 overflow-y-auto">
                    <div className="page-container py-8 flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="py-3 px-4 text-lg font-medium text-[var(--color-neutral-800)] hover:text-[var(--color-primary)] hover:bg-[var(--color-neutral-50)] rounded transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <hr className="my-4 border-[var(--color-neutral-200)]" />
                        <a
                            href="tel:4357600279"
                            className="flex items-center gap-2 py-3 px-4 text-lg font-semibold text-[var(--color-primary)]"
                        >
                            <PhoneIcon size={20} />
                            (435) 760 0279
                        </a>
                        <a
                            href="#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-primary text-center mt-2"
                        >
                            Schedule Consultation
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
