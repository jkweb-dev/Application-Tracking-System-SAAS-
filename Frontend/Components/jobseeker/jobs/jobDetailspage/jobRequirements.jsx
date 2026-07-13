"use client";

import { CheckCircle2 } from "lucide-react";


export default function JobRequirements({

    requirements

}){


    const requirementList = Array.isArray(requirements)

        ? requirements

        : requirements

            ? [requirements]

            : [];





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

                Requirements

            </h2>




            {

                requirementList.length > 0 ?



                <div

                    className="
                        mt-6
                        space-y-4
                    "

                >

                    {

                        requirementList.map((item,index)=>(


                            <div

                                key={index}

                                className="
                                    flex
                                    items-start
                                    gap-3
                                    rounded-xl
                                    bg-slate-50
                                    p-4
                                "

                            >

                                <CheckCircle2

                                    size={22}

                                    className="
                                        mt-0.5
                                        text-emerald-600
                                    "

                                />


                                <p

                                    className="
                                        leading-6
                                        text-slate-600
                                    "

                                >

                                    {item}

                                </p>


                            </div>


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

                    No specific requirements mentioned.

                </p>


            }



        </section>


    );

}