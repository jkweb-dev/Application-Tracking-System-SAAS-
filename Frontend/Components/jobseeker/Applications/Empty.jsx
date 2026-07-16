"use client";

import Link from "next/link";



export default function EmptyApplications() {

    return (

        <div

            className="
                mt-8
                rounded-3xl
                border
                border-dashed
                border-slate-300
                bg-white
                px-8
                py-16
                text-center
            "

        >

            {/* Icon */}

            <div

                className="
                    mx-auto
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-full
                    bg-violet-100
                "

            >

                <svg

                    xmlns="http://www.w3.org/2000/svg"

                    fill="none"

                    viewBox="0 0 24 24"

                    strokeWidth={1.8}

                    stroke="currentColor"

                    className="
                        h-10
                        w-10
                        text-violet-600
                    "

                >

                    <path

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        d="M19.5 14.25v-8.25A2.25 2.25 0 0017.25 3.75H6.75A2.25 2.25 0 004.5 6v12A2.25 2.25 0 006.75 20.25h6.75"

                    />

                    <path

                        strokeLinecap="round"

                        strokeLinejoin="round"

                        d="M16.5 18.75h6m-3-3v6"

                    />

                </svg>

            </div>



            {/* Heading */}

            <h2

                className="
                    mt-8
                    text-3xl
                    font-bold
                    text-slate-900
                "

            >

                No Applications Yet

            </h2>



            {/* Description */}

            <p

                className="
                    mx-auto
                    mt-4
                    max-w-2xl
                    text-lg
                    leading-8
                    text-slate-600
                "

            >

                You haven't applied for any jobs yet. Explore available
                opportunities, submit your applications, and track their
                progress here.

            </p>



            {/* Button */}

            <Link

                href="/jobseeker/jobs"

                className="
                    mt-10
                    inline-flex
                    items-center
                    rounded-xl
                    bg-violet-600
                    px-6
                    py-3
                    text-base
                    font-semibold
                    text-white
                    transition
                    hover:bg-violet-700
                "

            >

                Browse Jobs

            </Link>

        </div>

    );

}