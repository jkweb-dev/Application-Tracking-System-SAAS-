"use client";

import { format } from "date-fns";

import {

    Banknote,

    CalendarDays,

    BriefcaseBusiness,

    MapPin

} from "lucide-react";


export default function ApplyCard({

    job,

    handleApply ,

    applying ,

    alreadyApplied

}){


    const salary =

        `${job.currency || ""} ${
            job.salaryMin?.toLocaleString() || 0
        }
        -
        ${
            job.salaryMax?.toLocaleString() || 0
        }`;



    return(

        <div

            className="
                sticky
                top-24
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-lg
            "

        >


            <h2

                className="
                    text-xl
                    font-bold
                    text-slate-900
                "

            >

                Ready to Apply?

            </h2>



            <p

                className="
                    mt-2
                    text-sm
                    text-slate-500
                "

            >

                Submit your application and start your journey.

            </p>




            {/* Salary */}


            <div

                className="
                    mt-6
                    rounded-2xl
                    bg-blue-50
                    p-4
                "

            >

                <div className="flex items-center gap-3">


                    <Banknote

                        size={22}

                        className="text-blue-600"

                    />


                    <div>


                        <p

                            className="
                                text-xs
                                text-slate-500
                            "

                        >

                            Salary Range

                        </p>


                        <p

                            className="
                                font-semibold
                                text-slate-900
                            "

                        >

                            {salary}

                        </p>


                    </div>


                </div>


            </div>






            {/* Details */}


            <div

                className="
                    mt-6
                    space-y-4
                "

            >


                <DetailItem

                    icon={<BriefcaseBusiness size={18}/>}

                    text={job.employmentType}

                />



                <DetailItem

                    icon={<MapPin size={18}/>}

                    text={job.workMode}

                />



                <DetailItem

                    icon={<CalendarDays size={18}/>}

                    text={

                        job.deadline

                        ?

                        `Deadline: ${
                            format(
                                new Date(job.deadline),
                                "dd MMM yyyy"
                            )
                        }`

                        :

                        "No deadline"

                    }

                />


            </div>





            {/* Apply Button */}


            <button

            onClick={() => handleApply(job._id)}
    disabled={applying || alreadyApplied}

                className="
                    mt-8
                    w-full
                    rounded-xl
                    bg-blue-600
                    py-3.5
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-700
                "

            >

                {applying
        ? "Applying..."
        : alreadyApplied
        ? "Applied ✓"
        : "Apply Now"}

            </button>



        </div>

    );

}





function DetailItem({

    icon,

    text

}){


    return(

        <div

            className="
                flex
                items-center
                gap-3
                text-slate-600
            "

        >

            <span className="text-blue-600">

                {icon}

            </span>


            <span className="text-sm">

                {text || "Not specified"}

            </span>


        </div>

    );

}