"use client";

import { useState } from "react";
import {
    MapPinIcon,
    ClockIcon,
    PhoneIcon,
    EmailIcon,
    CheckCircleIcon,
    ArrowRightIcon
} from "./icons";

export default function ContactCTA() {
    const [formState, setFormState] = useState<"idle" | "success">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        timeline: "",
        budget: "",
        description: "",
        contactMethod: "phone",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("success");
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="py-24 lg:py-32 bg-[var(--color-neutral-900)] relative overflow-hidden">
            {/* Dark Mode Background Grid */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#111827] via-[#0f172a] to-[#010613] opacity-100"></div>
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
                backgroundPosition: 'center center'
            }}>
            </div>

            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="page-container relative z-10">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 lg:p-16 backdrop-blur-md shadow-2xl overflow-hidden relative">
                    {/* Subtle top reflection */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        {/* Info Column */}
                        <div className="lg:col-span-5 flex flex-col justify-center">

                            <div className="inline-flex items-center px-4 py-1.5 bg-[var(--color-primary-light)]/10 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 w-max border border-[var(--color-primary-light)]/20">
                                Dispatch Protocol
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-[family-name:var(--font-outfit)] font-bold text-white leading-[1.15] mb-6">
                                Initiate <br />A Project Form
                            </h2>
                            <p className="mt-4 text-neutral-400 text-lg leading-relaxed mb-12">
                                Planning takes precision. Reach out to schedule a high-level technical consultation to discuss engineering, logistics, budgets, and operational timelines for your forthcoming custom build in Northern Utah.
                            </p>

                            <div className="space-y-6 lg:space-y-8 bg-black/20 p-8 rounded-3xl border border-white/5 shadow-inner">
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-primary-light)] shrink-0 group-hover:scale-110 transition-transform">
                                        <MapPinIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-0.5">Headquarters</span>
                                        <span className="text-sm text-neutral-200 font-medium">8536 S 150 E, Paradise, UT 84328</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-primary-light)] shrink-0 group-hover:scale-110 transition-transform">
                                        <ClockIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-0.5">Operating Hours</span>
                                        <span className="text-sm text-neutral-200 font-medium">Mon-Sat: 8AM — 6PM</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-primary-light)] shrink-0 group-hover:scale-110 transition-transform">
                                        <PhoneIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-0.5">Direct Dispatch</span>
                                        <a href="tel:4357600279" className="text-sm text-neutral-200 font-bold hover:text-[var(--color-primary-light)] transition-colors tracking-wide">
                                            (435) 760 0279
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[var(--color-primary-light)] shrink-0 group-hover:scale-110 transition-transform">
                                        <EmailIcon size={20} />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider mb-0.5">Digital Comm</span>
                                        <a href="mailto:highridgeframing@gmail.com" className="text-sm text-neutral-200 font-bold hover:text-[var(--color-primary-light)] transition-colors">
                                            highridgeframing@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            {formState === "success" ? (
                                <div className="bg-black/30 border border-[var(--color-primary-light)]/20 rounded-3xl p-12 flex flex-col items-center justify-center text-center h-full shadow-[0_0_50px_rgba(56,189,248,0.1)] relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary-light)]/10 blur-[80px] pointer-events-none"></div>

                                    <div className="w-20 h-20 bg-[var(--color-primary-light)]/20 border border-[var(--color-primary-light)]/30 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircleIcon size={36} className="text-[var(--color-primary-light)]" />
                                    </div>

                                    <h3 className="text-3xl font-bold font-[family-name:var(--font-outfit)] text-white mb-4">
                                        Transmission Received
                                    </h3>
                                    <p className="text-neutral-400 max-w-md text-lg leading-relaxed">
                                        Your logistics request is in our system. A project lead will contact you within ONE business day. Need extreme urgency? Call <a href="tel:4357600279" className="text-white font-bold hover:text-[var(--color-primary-light)] transition-colors">(435) 760 0279</a> immediately.
                                    </p>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-black/20 border border-white/5 rounded-3xl p-8 lg:p-10 shadow-lg"
                                >
                                    <h3 className="text-2xl font-bold font-[family-name:var(--font-outfit)] text-white mb-8 border-b border-white/10 pb-6">
                                        Project Intake Form
                                    </h3>

                                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-7">
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                                                Entity/Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all shadow-inner"
                                                placeholder="e.g. John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all shadow-inner"
                                                placeholder="e.g. email@domain.com"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                                                Mobile / Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all shadow-inner"
                                                placeholder="(435) XXXXXXX"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                                                Lot Location (City/State)
                                            </label>
                                            <input
                                                type="text"
                                                name="location"
                                                value={formData.location}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all shadow-inner"
                                                placeholder="e.g. Bear Lake, ID"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                                                Expected Groundbreak
                                            </label>
                                            <select
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-[#0f172a] text-[#475569]">Select Timeline</option>
                                                <option value="immediately" className="bg-[#0f172a]">Immediate Priority Response</option>
                                                <option value="1-3-months" className="bg-[#0f172a]">Next 1 to 3 Months</option>
                                                <option value="3-6-months" className="bg-[#0f172a]">Standard 3 to 6 Months</option>
                                                <option value="6-12-months" className="bg-[#0f172a]">Heavy Planning 6-12 Months</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                                                Capital Budget Tier
                                            </label>
                                            <select
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all appearance-none cursor-pointer"
                                            >
                                                <option value="" className="bg-[#0f172a] text-[#475569]">Select Range</option>
                                                <option value="under-300k" className="bg-[#0f172a]">&lt;$300,000</option>
                                                <option value="300k-500k" className="bg-[#0f172a]">$300k - $500k</option>
                                                <option value="500k-750k" className="bg-[#0f172a]">$500k - $750k</option>
                                                <option value="750k-1m" className="bg-[#0f172a]">$750k - $1M</option>
                                                <option value="1m-plus" className="bg-[#0f172a]">$1M+ High-End Luxury</option>
                                            </select>
                                        </div>
                                        <div className="sm:col-span-2">
                                            <label className="block text-[10px] font-bold uppercase tracking-widest text-[#94a3b8] mb-2">
                                                Architectural Specs / Structure Description
                                            </label>
                                            <textarea
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                rows={4}
                                                className="w-full px-5 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white text-sm placeholder-[#475569] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all shadow-inner resize-none"
                                                placeholder="Provide deep details: total square footage, specific structural requirements, architectural style, geotechnical challenges, etc."
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div className="sm:col-span-2 pt-4">
                                            <button type="submit" className="w-full bg-[var(--color-primary-light)] hover:bg-[#38bdf8] text-[#0f172a] px-8 py-4 rounded-xl font-bold font-[family-name:var(--font-outfit)] text-base uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] flex items-center justify-center gap-3">
                                                Transmit Request <ArrowRightIcon size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                                        <p className="text-[10px] font-semibold text-neutral-500 uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-pulse"></span>
                                            Secure Dispatch Protocol
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
