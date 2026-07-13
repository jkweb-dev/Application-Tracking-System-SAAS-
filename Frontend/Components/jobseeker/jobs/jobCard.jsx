"use client";

import Link from "next/link";

import {

    MapPin,

    BriefcaseBusiness,

    Banknote,

    Clock3,

    ArrowRight

} from "lucide-react";

export default function JobCard({

    job

}){

    return(

        <div

            className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:border-blue-200
            "

        >

            {/* Company */}

            <div className="flex items-start gap-4">

                <div

                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-blue-100
                        text-xl
                        font-bold
                        text-blue-700
                    "

                >

                    {job.companyName?.charAt(0) || "R"}

                </div>

                <div className="flex-1">

                    <h2

                        className="
                            text-xl
                            font-bold
                            text-slate-900
                            transition
                            group-hover:text-blue-600
                        "

                    >

                        {job.jobTitle}

                    </h2>

                    <p

                        className="
                            mt-1
                            text-sm
                            font-medium
                            text-slate-500
                        "

                    >

                        {job.companyName}

                    </p>

                </div>

            </div>

            {/* Information */}

            <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">

                    <MapPin

                        size={18}

                        className="text-slate-400"

                    />

                    <span className="text-slate-600">

                        {job.location}

                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <BriefcaseBusiness

                        size={18}

                        className="text-slate-400"

                    />

                    <span className="text-slate-600">

                        {job.employmentType}

                    </span>

                </div>

                <div className="flex items-center gap-3">

                    <Banknote

                        size={18}

                        className="text-slate-400"

                    />

                    <span className="text-slate-600">

                        {job.salaryMin} - {job.salaryMax} {job.currency}

                    </span>

                </div>

            </div>

            {/* Skills */}

            <div className="mt-6 flex flex-wrap gap-2">

                {

                    job.skills?.slice(0,3).map((skill,index)=>(

                        <span

                            key={index}

                            className="
                                rounded-full
                                bg-slate-100
                                px-3
                                py-1
                                text-xs
                                font-medium
                                text-slate-700
                            "

                        >

                            {skill}

                        </span>

                    ))

                }

            </div>

            {/* Footer */}

            <div

                className="
                    mt-8
                    flex
                    items-center
                    justify-between
                "

            >

                <div className="flex items-center gap-2">

                    <Clock3

                        size={16}

                        className="text-slate-400"

                    />

                    <span

                        className="
                            text-sm
                            text-slate-500
                        "

                    >

                        2 days ago

                    </span>

                </div>

                <Link

                    href={`/jobseeker/jobs/${job._id}`}

                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-700
                    "

                >

                    View Details

                    <ArrowRight size={16}/>

                </Link>

            </div>

        </div>

    );

}