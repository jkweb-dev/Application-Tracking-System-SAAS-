"use client";

import { BriefcaseBusiness, Building2, Users } from "lucide-react";

export default function JobsHero() {

    return (

        <section className="bg-gradient-to-br from-blue-50 via-white to-slate-50 border-b border-slate-200">

            <div className="max-w-7xl mx-auto px-6 py-14">

                <div className="max-w-3xl">

                    <span
                        className="
                            inline-flex
                            items-center
                            rounded-full
                            bg-blue-100
                            px-4
                            py-1.5
                            text-sm
                            font-medium
                            text-blue-700
                        "
                    >
                        🚀 Welcome to RecruitFlow
                    </span>

                    <h1
                        className="
                            mt-5
                            text-4xl
                            font-bold
                            tracking-tight
                            text-slate-900
                            md:text-5xl
                        "
                    >
                        Find Your
                        <span className="text-blue-600"> Dream Job</span>
                    </h1>

                    <p
                        className="
                            mt-5
                            max-w-2xl
                            text-lg
                            leading-8
                            text-slate-600
                        "
                    >
                        Explore opportunities from trusted companies, discover
                        your next career move, and apply with just a single
                        click.
                    </p>

                </div>

                {/* Stats */}

                <div
                    className="
                        mt-12
                        grid
                        grid-cols-1
                        gap-5
                        sm:grid-cols-3
                    "
                >

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                        "
                    >

                        <div
                            className="
                                mb-4
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-100
                            "
                        >
                            <BriefcaseBusiness
                                className="text-blue-600"
                                size={24}
                            />
                        </div>

                        <h3
                            className="
                                text-3xl
                                font-bold
                                text-slate-900
                            "
                        >
                            500+
                        </h3>

                        <p className="mt-2 text-slate-600">
                            Active Jobs
                        </p>

                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm
                        "
                    >

                        <div
                            className="
                                mb-4
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-emerald-100
                            "
                        >
                            <Building2
                                className="text-emerald-600"
                                size={24}
                            />
                        </div>

                        <h3
                            className="
                                text-3xl
                                font-bold
                                text-slate-900
                            "
                        >
                            120+
                        </h3>

                        <p className="mt-2 text-slate-600">
                            Hiring Companies
                        </p>

                    </div>

                    <div
                        className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-6
                            shadow-sm "
                        >

                        <div
                            className="
                                mb-4
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-xl
                                bg-violet-100 " >

                            <Users
                                className="text-violet-600"
                                size={24}
                            />
                        </div>

                        <h3
                            className="
                                text-3xl
                                font-bold
                                text-slate-900
                            "
                        >
                            10K+
                        </h3>

                        <p className="mt-2 text-slate-600">
                            Job Seekers
                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}