"use client";

import { SearchX } from "lucide-react";

export default function EmptyJobs(){

    return(

        <section className="max-w-7xl mx-auto px-6 py-20">

            <div
                className="
                    flex
                    flex-col
                    items-center
                    justify-center
                    rounded-3xl
                    border
                    border-dashed
                    border-slate-300
                    bg-white
                    py-20
                    text-center
                "
            >

                <div
                    className="
                        flex
                        h-20
                        w-20
                        items-center
                        justify-center
                        rounded-full
                        bg-blue-100
                    "
                >

                    <SearchX

                        size={40}

                        className="text-blue-600"

                    />

                </div>

                <h2
                    className="
                        mt-8
                        text-3xl
                        font-bold
                        text-slate-900
                    "
                >

                    No Jobs Found

                </h2>

                <p
                    className="
                        mt-3
                        max-w-md
                        text-slate-500
                    "
                >

                    We couldn't find any available jobs at the moment.

                    Please check back later or try different filters.

                </p>

            </div>

        </section>

    );

}