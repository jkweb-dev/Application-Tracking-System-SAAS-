"use client";

import { format } from "date-fns";

import {
    MapPin,
    BriefcaseBusiness,
    Clock,
    Building2,
    CalendarDays
} from "lucide-react";


export default function JobHeader({

    job

}){


    return(

        <section

            className="
                bg-gradient-to-br
                from-blue-50
                via-white
                to-slate-50
                border-b
                border-slate-200
            "

        >

            <div

                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    py-12
                "

            >


                <div

                    className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-8
                        shadow-sm
                    "

                >


                    {/* Top Section */}


                    <div

                        className="
                            flex
                            flex-col
                            gap-6
                            md:flex-row
                            md:items-start
                            md:justify-between
                        "

                    >


                        <div>


                            {/* Company Logo */}


                            <div

                                className="
                                    mb-5
                                    flex
                                    h-16
                                    w-16
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-blue-100
                                    text-2xl
                                    font-bold
                                    text-blue-700
                                "

                            >

                                {
                                    job.companyName
                                    ?.charAt(0)
                                    ||
                                    "C"
                                }


                            </div>



                            <h1

                                className="
                                    text-3xl
                                    font-bold
                                    text-slate-900
                                    md:text-4xl
                                "

                            >

                                {job.jobTitle}


                            </h1>



                            <div

                                className="
                                    mt-3
                                    flex
                                    items-center
                                    gap-2
                                    text-lg
                                    font-medium
                                    text-slate-600
                                "

                            >

                                <Building2 size={20}/>


                                {job.companyName}


                            </div>


                        </div>



                        {/* Status */}


                        <div>

                            <span

                                className="
                                    rounded-full
                                    bg-emerald-100
                                    px-4
                                    py-2
                                    text-sm
                                    font-semibold
                                    text-emerald-700
                                "

                            >

                                {job.status}


                            </span>


                        </div>


                    </div>





                    {/* Information */}


                    <div

                        className="
                            mt-8
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "

                    >



                        <InfoItem

                            icon={<MapPin size={18}/>}
                            text={job.location}

                        />



                        <InfoItem

                            icon={<BriefcaseBusiness size={18}/>}
                            text={job.employmentType}

                        />



                        <InfoItem

                            icon={<Clock size={18}/>}
                            text={job.workMode}

                        />



                        <InfoItem

                            icon={<CalendarDays size={18}/>}
                            text={
                                `Posted ${
                                    format(
                                        new Date(job.createdAt),
                                        "dd MMM yyyy"
                                    )
                                }`
                            }

                        />


                    </div>





                    {/* Deadline */}


                    {

                        job.deadline &&

                        <div

                            className="
                                mt-6
                                rounded-xl
                                bg-red-50
                                px-5
                                py-3
                                text-sm
                                font-medium
                                text-red-700
                            "

                        >

                            Application Deadline:

                            {" "}

                            {
                                format(
                                    new Date(job.deadline),
                                    "dd MMM yyyy"
                                )
                            }


                        </div>


                    }



                </div>


            </div>


        </section>


    );

}





function InfoItem({

    icon,

    text

}){


    return(

        <div

            className="
                flex
                items-center
                gap-3
                rounded-xl
                bg-slate-50
                px-4
                py-3
            "

        >

            <span className="text-blue-600">

                {icon}

            </span>


            <span

                className="
                    text-sm
                    font-medium
                    text-slate-600
                "

            >

                {text || "Not specified"}

            </span>


        </div>

    );

}