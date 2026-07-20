"use client";

import Link from "next/link";

import {

    Bell,

    Briefcase,

    FileText,

    User,

    ChevronDown

} from "lucide-react";

export default function JobsTopBar(){

    return(

        <header

            className="

                sticky

                top-0

                z-50

                border-b

                border-slate-200

                bg-white/90

                backdrop-blur-md

            "

        >

            <div

                className="

                    mx-auto

                    flex

                    h-20

                    max-w-7xl

                    items-center

                    justify-between

                    px-6

                "

            >



                {/* Logo */}



                <Link

                    href="/jobseeker/jobs"

                    className="flex items-center gap-3"

                >

                    <div

                        className="

                            flex

                            h-11

                            w-11

                            items-center

                            justify-center

                            rounded-xl

                            bg-blue-600

                            text-lg

                            font-bold

                            text-white

                        "

                    >

                        R

                    </div>



                    <div>

                        <h1

                            className="

                                text-xl

                                font-bold

                                text-slate-900

                            "

                        >

                            RecruitFlow

                        </h1>



                        <p

                            className="

                                text-xs

                                text-slate-500

                            "

                        >

                            Find Your Dream Job

                        </p>

                    </div>

                </Link>



                {/* Navigation */}



                <nav

                    className="

                        hidden

                        items-center

                        gap-10

                        md:flex

                    "

                >

                    <Link

                        href="/jobseeker/jobs"

                        className="

                            flex

                            items-center

                            gap-2

                            font-medium

                            text-blue-600

                        "

                    >

                        <Briefcase size={18}/>

                        Jobs

                    </Link>



                    <Link

                        href="/jobseeker/applications"

                        className="

                            flex

                            items-center

                            gap-2

                            font-medium

                            text-slate-600

                            transition

                            hover:text-blue-600

                        "

                    >

                        <FileText size={18}/>

                        Applications

                    </Link>



                    <Link

                        href="/jobseeker/ProfileViewandEdit"

                        className="

                            flex

                            items-center

                            gap-2

                            font-medium

                            text-slate-600

                            transition

                            hover:text-blue-600

                        "

                    >

                        <User size={18}/>

                        Profile

                    </Link>

                </nav>



                {/* Right Side */}



                <div

                    className="

                        flex

                        items-center

                        gap-5

                    "

                >

                    



                    <button

                        className="

                            flex

                            items-center

                            gap-3

                            rounded-xl

                            border

                            border-slate-200

                            bg-white

                            px-3

                            py-2

                            transition

                            hover:border-blue-200

                        "

                    >

                        <div

                            className="

                                flex

                                h-10

                                w-10

                                items-center

                                justify-center

                                rounded-full

                                bg-blue-100

                                font-semibold

                                text-blue-700

                            "

                        >

                            J

                        </div>



                        <div

                            className="hidden text-left lg:block"

                        >

                            <p

                                className="

                                    text-sm

                                    font-semibold

                                    text-slate-900

                                "

                            >

                                Jawad Khan

                            </p>



                            <p

                                className="

                                    text-xs

                                    text-slate-500

                                "

                            >

                                Job Seeker

                            </p>

                        </div>



                        <ChevronDown

                            size={18}

                            className="text-slate-500"

                        />

                    </button>

                </div>

            </div>

        </header>

    );

}