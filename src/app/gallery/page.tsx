"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const galleryImages = Array.from({ length: 40 }, (_, i) => ({
    src: `/images/gallery/${i + 1}.webp`,
    alt: `HRF Customs luxury custom home gallery image ${i + 1}`,
}));

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="min-h-screen bg-[var(--color-neutral-900)] text-white relative selection:bg-[var(--color-primary)] selection:text-white pb-20 md:pb-0">
            <Header />

            <section className="relative w-full pt-40 pb-20 flex flex-col items-center justify-center min-h-[40vh] overflow-hidden">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#000000] opacity-90 z-0"></div>
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.03)_0%,transparent_60%)] pointer-events-none"></div>

                <div className="page-container relative z-10 w-full text-center">
                    <div className="inline-flex items-center px-4 py-1.5 bg-white/5 text-[var(--color-primary-light)] text-xs font-bold uppercase tracking-[0.2em] rounded mb-6 border border-white/10 shadow-sm backdrop-blur-md mx-auto">
                        Portfolio Portfolio
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-outfit)] font-bold text-white leading-tight mb-6">
                        Our Gallery
                    </h1>
                    <p className="text-[var(--color-neutral-400)] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                        A curated collection showcasing the pinnacle of custom home building, from breathtaking exteriors to meticulously crafted interiors.
                    </p>
                </div>
            </section>

            <section className="relative w-full pb-32 bg-[#020617]">
                <div className="page-container relative z-10">
                    {/* Masonry-style Grid */}
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                        {galleryImages.map((image, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedImage(image.src)}
                                className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-black/50"
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={800}
                                    height={1200}
                                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <svg className="w-12 h-12 text-white/90 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactCTA />
            <Footer />

            {/* Lightbox Overlay */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="fixed top-6 right-6 text-white/70 hover:text-white z-50 p-2 transition-colors bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(null);
                        }}
                        aria-label="Close lightbox"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="relative w-full max-w-7xl h-[85vh] flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                        <div className="relative w-full h-full animate-in fade-in zoom-in duration-300">
                            <Image
                                src={selectedImage}
                                alt="Gallery full view"
                                fill
                                className="object-contain"
                                priority
                                sizes="100vw"
                                quality={100}
                            />
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
