"use client";


export default function JobDescription({

    description

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
                    text-2xl
                    font-bold
                    text-slate-900
                "

            >

                Job Description

            </h2>



            <div

                className="
                    mt-5
                    leading-8
                    text-slate-600
                "

            >

                {

                    description ?

                    <p>

                        {description}

                    </p>

                    :

                    <p

                        className="
                            italic
                            text-slate-400
                        "

                    >

                        No description available for this position.

                    </p>

                }


            </div>


        </section>


    );

}