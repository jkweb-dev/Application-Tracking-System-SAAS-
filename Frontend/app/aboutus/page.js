"use client";

import {
    BriefcaseBusiness,
    Users,
    BarChart3,
    ShieldCheck,
    Sparkles,
    Target
} from "lucide-react";

export default function AboutPage() {

    const features = [

        {
            icon: BriefcaseBusiness,
            title: "Modern Recruitment",
            description:
                "Create jobs, manage hiring pipelines, and track every applicant from a single dashboard."
        },

        {
            icon: Users,
            title: "Candidate Management",
            description:
                "Organize applicants, review profiles, resumes, and hiring progress with ease."
        },

        {
            icon: BarChart3,
            title: "Hiring Analytics",
            description:
                "Gain valuable insights into hiring performance through interactive charts and reports."
        },

        {
            icon: ShieldCheck,
            title: "Secure Platform",
            description:
                "Authentication, protected routes, and secure data handling keep your hiring process safe."
        }

    ];

    return (

        <main className="min-h-screen bg-slate-50">

            {/* Hero */}

            <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">

                <div className="max-w-7xl mx-auto px-6 py-24 text-center">

                    <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-white backdrop-blur">

                        <Sparkles size={18} />

                        RecruitFlow ATS

                    </div>

                    <h1 className="mt-6 text-5xl font-extrabold text-white">

                        Smarter Hiring Starts Here

                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

                        RecruitFlow is a modern Applicant Tracking System built
                        to simplify recruitment for employers while providing
                        job seekers with a seamless application experience.
                    </p>

                </div>

            </section>

            {/* Story */}

            <section className="max-w-7xl mx-auto px-6 py-20">

                <div className="grid gap-10 lg:grid-cols-2">

                    <div>

                        <h2 className="text-3xl font-bold text-slate-900">

                            Our Mission

                        </h2>

                        <p className="mt-6 text-slate-600 leading-8">

                            Hiring should be simple, transparent, and efficient.
                            RecruitFlow empowers organizations to post jobs,
                            manage candidates, monitor hiring pipelines, and
                            make better recruitment decisions from one intuitive
                            platform.

                        </p>

                        <p className="mt-5 text-slate-600 leading-8">

                            At the same time, job seekers enjoy an effortless
                            application process with real-time application
                            tracking, resume management, and instant status
                            updates.

                        </p>

                    </div>

                    <div className="rounded-3xl bg-white p-8 shadow-lg border border-slate-200">

                        <div className="flex items-center gap-3">

                            <Target className="text-blue-600" size={30} />

                            <h3 className="text-2xl font-bold">

                                Why RecruitFlow?

                            </h3>

                        </div>

                        <ul className="mt-8 space-y-5 text-slate-600">

                            <li>✓ Simple and intuitive employer dashboard</li>

                            <li>✓ Professional hiring pipeline management</li>

                            <li>✓ Real-time application tracking</li>

                            <li>✓ Resume management</li>

                            <li>✓ Secure authentication and data protection</li>

                            <li>✓ Modern responsive SaaS interface</li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Features */}

            <section className="bg-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center">

                        <h2 className="text-4xl font-bold">

                            Platform Features

                        </h2>

                        <p className="mt-4 text-slate-600">

                            Everything required to streamline the hiring journey.

                        </p>

                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                        {

                            features.map((feature,index)=>{

                                const Icon = feature.icon;

                                return(

                                    <div
                                        key={index}
                                        className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-xl"
                                    >

                                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">

                                            <Icon
                                                className="text-blue-600"
                                                size={28}
                                            />

                                        </div>

                                        <h3 className="mt-6 text-xl font-bold">

                                            {feature.title}

                                        </h3>

                                        <p className="mt-4 text-slate-600 leading-7">

                                            {feature.description}

                                        </p>

                                    </div>

                                );

                            })

                        }

                    </div>

                </div>

            </section>

            {/* Bottom CTA */}

            <section className="max-w-5xl mx-auto px-6 py-20">

                <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-12 text-center shadow-xl">

                    <h2 className="text-4xl font-bold text-white">

                        Building Better Hiring Experiences

                    </h2>

                    <p className="mt-6 text-blue-100 leading-8">

                        RecruitFlow combines modern technology with a clean user
                        experience to help employers hire faster and enable job
                        seekers to confidently track every step of their
                        application journey.

                    </p>

                </div>

            </section>

        </main>

    );

}