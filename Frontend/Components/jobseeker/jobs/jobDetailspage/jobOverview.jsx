"use client";

import {
    Building2,
    Users,
    BriefcaseBusiness,
    Banknote
} from "lucide-react";


export default function JobOverview({

    job

}){


    const formatSalary = ()=>{


        if(!job.salaryMin && !job.salaryMax){

            return "Not specified";

        }


        return `${job.currency || ""} ${job.salaryMin?.toLocaleString() || 0} - ${job.salaryMax?.toLocaleString() || 0}`;

    };



    return(

        <section

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "

        >


            <h2

                className="
                    text-2xl
                    font-bold
                    text-slate-900
                "

            >

                Job Overview

            </h2>



            <div

                className="
                    mt-6
                    grid
                    grid-cols-1
                    gap-5
                    sm:grid-cols-2
                "

            >



                <OverviewCard

                    icon={<Building2 size={22}/>}

                    title="Department"

                    value={job.department}

                />



                <OverviewCard

                    icon={<BriefcaseBusiness size={22}/>}

                    title="Experience Level"

                    value={job.experienceLevel}

                />



                <OverviewCard

                    icon={<Users size={22}/>}

                    title="Vacancies"

                    value={`${job.vacancies || 0} Positions`}

                />



                <OverviewCard

                    icon={<Banknote size={22}/>}

                    title="Salary"

                    value={formatSalary()}

                />



            </div>


        </section>

    );

}





function OverviewCard({

    icon,

    title,

    value

}){


    return(

        <div

            className="
                flex
                items-start
                gap-4
                rounded-2xl
                bg-slate-50
                p-5
            "

        >

            <div

                className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-100
                    text-blue-600
                "

            >

                {icon}

            </div>



            <div>


                <p

                    className="
                        text-sm
                        text-slate-500
                    "

                >

                    {title}

                </p>



                <p

                    className="
                        mt-1
                        font-semibold
                        text-slate-900
                    "

                >

                    {value || "Not specified"}

                </p>


            </div>


        </div>

    );

}