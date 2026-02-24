import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function AuthorityIntro() {
    return (
        <section id="about-intro" className="section-padding">
            <div className="page-container">
                <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-3">
                        <span className="section-label">About HRF Customs</span>
                        <h2>
                            Your Trusted Custom Home Builder in Paradise, UT and the
                            Surrounding Region
                        </h2>

                        <p className="mt-6">
                            HRF Customs is a custom home builder and general contractor based
                            in Paradise, Utah. For more than 15 years, we have helped
                            homeowners and landowners across Northern Utah, Southern Idaho, and
                            Western Wyoming turn their vision into a fully built home through
                            disciplined project leadership and transparent communication.
                        </p>

                        <p className="mt-4">
                            General contracting at this level is not simply about swinging a
                            hammer. It is about coordinating every element of a complex
                            residential build from start to finish. That means managing the
                            relationship between engineering, site conditions, trade
                            scheduling, budget controls, inspections, and the daily decisions
                            that determine whether a project stays on track. Every project we
                            manage is led by the owner directly, with a clear chain of
                            accountability from the first phone call through final walkthrough.
                        </p>

                        <p className="mt-4">
                            We do not hand off your project to a site supervisor you have never
                            met. We lead the build in person, manage trade partners
                            hands on, and maintain direct communication with you at every phase.
                            That is what sets HRF Customs apart from other builders in the region.
                            Our clients know exactly who is responsible for their home and how
                            to reach them.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="btn-primary">
                                Start Your Project
                                <ArrowRightIcon size={16} />
                            </a>
                            <a href="#process" className="btn-outline">
                                View Our Process
                            </a>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="relative">
                            <Image
                                src="/images/portfolio/premium-build-01.jpg"
                                alt="Custom home built by HRF Customs in Northern Utah"
                                width={600}
                                height={750}
                                className="w-full h-auto object-cover rounded-sm"
                                sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-sm">
                                <p className="text-white text-sm font-medium">
                                    Custom home completed in Northern Utah
                                </p>
                                <p className="text-white/70 text-xs mt-1">
                                    Full project delivery by HRF Customs
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
