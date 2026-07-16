"use client";

import Link from "next/link";
import StatusBadge from "./statusBadge";



export default function ApplicationCard({ application }) {

    return (

        <div

            className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
            "

        >

            {/* Top Section */}

            <div

                className="
                    flex
                    flex-col
                    gap-4
                    md:flex-row
                    md:items-start
                    md:justify-between
                "

            >

                <div>

                    <h2

                        className="
                            text-2xl
                            font-bold
                            text-slate-900
                        "

                    >

                        {application.jobId.jobTitle}

                    </h2>



                    <p

                        className="
                            mt-1
                            text-lg
                            font-medium
                            text-violet-600
                        "

                    >

                        {application.employerId.companyName}

                    </p>

                </div>



                <StatusBadge

                    status={application.status}

                />

            </div>





            {/* Information Grid */}

            <div

                className="
                    mt-8
                    grid
                    gap-5
                    md:grid-cols-2
                    lg:grid-cols-4
                "

            >

                <div>

                    <p className="text-sm text-slate-500">

                        Location

                    </p>

                    <p className="mt-1 font-semibold">

                        {application.jobId.location}

                    </p>

                </div>



                <div>

                    <p className="text-sm text-slate-500">

                        Work Mode

                    </p>

                    <p className="mt-1 font-semibold">

                        {application.jobId.workMode}

                    </p>

                </div>



                <div>

                    <p className="text-sm text-slate-500">

                        Employment

                    </p>

                    <p className="mt-1 font-semibold">

                        {application.jobId.employmentType}

                    </p>

                </div>



                <div>

                    <p className="text-sm text-slate-500">

                        Salary

                    </p>

                    <p className="mt-1 font-semibold">

                        {application.jobId.currency}

                        {" "}

                        {application.jobId.salaryMin}

                        {" - "}

                        {application.jobId.salaryMax}

                    </p>

                </div>

            </div>





            {/* Dates */}

            <div

                className="
                    mt-8
                    grid
                    gap-5
                    md:grid-cols-2
                "

            >

                <div>

                    <p className="text-sm text-slate-500">

                        Applied On

                    </p>

                    <p className="mt-1 font-semibold">

                        {

                            new Date(

                                application.createdAt

                            ).toLocaleDateString()

                        }

                    </p>

                </div>



                <div>

                    <p className="text-sm text-slate-500">

                        Application Deadline

                    </p>

                    <p className="mt-1 font-semibold">

                        {

                            new Date(

                                application.jobId.deadline

                            ).toLocaleDateString()

                        }

                    </p>

                </div>

            </div>





            {/* Footer */}

            <div

                className="
                    mt-8
                    flex
                    justify-end
                "

            >

                <Link

                    href={

                        `/jobseeker/job/${application.jobId._id}`

                    }

                    className="
                        rounded-xl
                        bg-violet-600
                        px-5
                        py-3
                        font-semibold
                        text-white
                        transition
                        hover:bg-violet-700
                    "

                >

                    View Job

                </Link>

            </div>

        </div>

    );

}