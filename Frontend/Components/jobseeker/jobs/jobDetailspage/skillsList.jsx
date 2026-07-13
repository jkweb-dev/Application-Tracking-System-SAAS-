"use client";


import { Code2 } from "lucide-react";


export default function SkillsList({

    skills

}){


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
                    flex
                    items-center
                    gap-2
                    text-2xl
                    font-bold
                    text-slate-900
                "

            >

                <Code2

                    size={26}

                    className="text-blue-600"

                />

                Required Skills

            </h2>



            {

                skills && skills.length > 0 ?


                <div

                    className="
                        mt-6
                        flex
                        flex-wrap
                        gap-3
                    "

                >

                    {

                        skills.map((skill,index)=>(


                            <span

                                key={index}

                                className="
                                    rounded-full
                                    border
                                    border-blue-100
                                    bg-blue-50
                                    px-4
                                    py-2
                                    text-sm
                                    font-medium
                                    text-blue-700
                                    transition
                                    hover:bg-blue-100
                                "

                            >

                                {skill}

                            </span>


                        ))

                    }


                </div>



                :



                <p

                    className="
                        mt-5
                        italic
                        text-slate-400
                    "

                >

                    No skills specified for this job.

                </p>


            }



        </section>


    );

}