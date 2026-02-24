"use client";

import { useState } from "react";
import {
    MapPinIcon,
    ClockIcon,
    PhoneIcon,
    EmailIcon,
    CheckCircleIcon,
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
        <section id="contact" className="section-padding section-dark">
            <div className="page-container">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                    <div className="lg:col-span-2">
                        <span className="section-label section-label-light">
                            Get Started
                        </span>
                        <h2>Ready to Build?</h2>
                        <p className="mt-4 text-neutral-300">
                            Whether you are in the early planning stages or ready to break
                            ground, HRF Customs is here to help. Reach out to schedule a
                            consultation and take the first step toward building your custom
                            home in Northern Utah, Southern Idaho, or Western Wyoming.
                        </p>

                        <div className="mt-8 space-y-5">
                            <div className="flex items-center gap-3">
                                <MapPinIcon size={18} className="text-[var(--color-primary-light)] shrink-0" />
                                <span className="text-sm text-neutral-300">
                                    8536 S 150 E, Paradise, UT 84328
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ClockIcon size={18} className="text-[var(--color-primary-light)] shrink-0" />
                                <span className="text-sm text-neutral-300">
                                    Monday to Saturday: 8 AM to 6 PM
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <PhoneIcon size={18} className="text-[var(--color-primary-light)] shrink-0" />
                                <a
                                    href="tel:4357600279"
                                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                                >
                                    (435) 760 0279
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <EmailIcon size={18} className="text-[var(--color-primary-light)] shrink-0" />
                                <a
                                    href="mailto:highridgeframing@gmail.com"
                                    className="text-sm text-neutral-300 hover:text-white transition-colors"
                                >
                                    highridgeframing@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-8 p-5 bg-white/5 border border-white/10 rounded-sm">
                            <p className="text-sm text-neutral-300 leading-relaxed">
                                Call us today at{" "}
                                <a
                                    href="tel:4357600279"
                                    className="text-white font-semibold hover:text-[var(--color-primary-light)] transition-colors"
                                >
                                    (435) 760 0279
                                </a>{" "}
                                to schedule your consultation. From Paradise, UT to the broader
                                Cache Valley region and beyond, we are ready to discuss your
                                custom home building project.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3">
                        {formState === "success" ? (
                            <div className="bg-white/5 border border-white/10 rounded-sm p-12 flex flex-col items-center justify-center text-center h-full">
                                <CheckCircleIcon
                                    size={48}
                                    className="text-green-400 mb-4"
                                />
                                <h3 className="text-white mb-2">
                                    Thank You for Reaching Out
                                </h3>
                                <p className="text-neutral-300 max-w-md">
                                    We have received your consultation request and will be in touch
                                    within one business day. If you need to speak with us sooner,
                                    please call{" "}
                                    <a
                                        href="tel:4357600279"
                                        className="text-white font-semibold"
                                    >
                                        (435) 760 0279
                                    </a>
                                    .
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white/5 border border-white/10 rounded-sm p-8"
                            >
                                <h3 className="text-white mb-6">
                                    Schedule a Consultation
                                </h3>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-sm text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[var(--color-primary-light)] transition-colors"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-sm text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[var(--color-primary-light)] transition-colors"
                                            placeholder="you@email.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-sm text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[var(--color-primary-light)] transition-colors"
                                            placeholder="(435) 000 0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Project Location (City, State)
                                        </label>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-sm text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[var(--color-primary-light)] transition-colors"
                                            placeholder="e.g. Paradise, UT"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Projected Start Timeline
                                        </label>
                                        <select
                                            name="timeline"
                                            value={formData.timeline}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-sm text-white text-sm focus:outline-none focus:border-[var(--color-primary-light)] transition-colors"
                                        >
                                            <option value="" className="bg-[var(--color-primary-dark)]">
                                                Select timeline
                                            </option>
                                            <option value="immediately" className="bg-[var(--color-primary-dark)]">
                                                As soon as possible
                                            </option>
                                            <option value="1-3-months" className="bg-[var(--color-primary-dark)]">
                                                1 to 3 months
                                            </option>
                                            <option value="3-6-months" className="bg-[var(--color-primary-dark)]">
                                                3 to 6 months
                                            </option>
                                            <option value="6-12-months" className="bg-[var(--color-primary-dark)]">
                                                6 to 12 months
                                            </option>
                                            <option value="12-plus" className="bg-[var(--color-primary-dark)]">
                                                12+ months
                                            </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Estimated Budget Range
                                        </label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-sm text-white text-sm focus:outline-none focus:border-[var(--color-primary-light)] transition-colors"
                                        >
                                            <option value="" className="bg-[var(--color-primary-dark)]">
                                                Select range
                                            </option>
                                            <option value="under-300k" className="bg-[var(--color-primary-dark)]">
                                                Under $300,000
                                            </option>
                                            <option value="300k-500k" className="bg-[var(--color-primary-dark)]">
                                                $300,000 to $500,000
                                            </option>
                                            <option value="500k-750k" className="bg-[var(--color-primary-dark)]">
                                                $500,000 to $750,000
                                            </option>
                                            <option value="750k-1m" className="bg-[var(--color-primary-dark)]">
                                                $750,000 to $1,000,000
                                            </option>
                                            <option value="1m-plus" className="bg-[var(--color-primary-dark)]">
                                                $1,000,000+
                                            </option>
                                        </select>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Project Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                            rows={4}
                                            className="w-full px-4 py-2.5 bg-white/5 border border-white/15 rounded-sm text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-[var(--color-primary-light)] transition-colors resize-none"
                                            placeholder="Tell us about your project: lot details, desired home style, square footage, etc."
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                                            Preferred Contact Method
                                        </label>
                                        <div className="flex gap-6">
                                            <label className="flex items-center gap-2 text-sm text-neutral-300 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="contactMethod"
                                                    value="phone"
                                                    checked={formData.contactMethod === "phone"}
                                                    onChange={handleChange}
                                                    className="accent-[var(--color-primary-light)]"
                                                />
                                                Phone
                                            </label>
                                            <label className="flex items-center gap-2 text-sm text-neutral-300 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="contactMethod"
                                                    value="email"
                                                    checked={formData.contactMethod === "email"}
                                                    onChange={handleChange}
                                                    className="accent-[var(--color-primary-light)]"
                                                />
                                                Email
                                            </label>
                                            <label className="flex items-center gap-2 text-sm text-neutral-300 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="contactMethod"
                                                    value="either"
                                                    checked={formData.contactMethod === "either"}
                                                    onChange={handleChange}
                                                    className="accent-[var(--color-primary-light)]"
                                                />
                                                Either
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn-primary w-full mt-6 !bg-[var(--color-primary-light)] hover:!bg-[var(--color-accent)]">
                                    Submit Consultation Request
                                </button>

                                <p className="text-xs text-neutral-500 mt-4 text-center">
                                    Your information is kept private and will only be used to
                                    respond to your inquiry.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
