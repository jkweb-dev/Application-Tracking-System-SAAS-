"use client";

import JobCard from "./jobCard";

export default function JobsGrid({

    jobs

}){

    return(

        <section className="max-w-7xl mx-auto px-6 py-12">

            <div

                className="
                    grid
                    grid-cols-1
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                "

            >

                {

                    jobs.map((job)=>(

                        <JobCard

                            key={job._id}

                            job={job}

                        />

                    ))

                }

            </div>

        </section>

    );

}