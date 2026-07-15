"use client";


import {
    CheckCircle2,
    Target
} from "lucide-react";



export default function ProfileProgress({

    percentage

}){


    let message = "Let's get started";



    if(percentage >= 80){

        message = "Almost there! Your profile is looking great";

    }

    else if(percentage >= 50){

        message = "Good progress! Complete a few more details";

    }

    else if(percentage > 0){

        message = "Keep going! Complete your profile";

    }





    return(


        <section

            className="
                mx-auto
                mt-8
                max-w-6xl
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "

        >



            <div

                className="
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-center
                    md:justify-between
                "

            >



                <div

                    className="
                        flex
                        items-center
                        gap-4
                    "

                >


                    <div

                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-2xl
                            bg-blue-50
                        "

                    >

                        <Target

                            size={25}

                            className="text-blue-600"

                        />


                    </div>



                    <div>


                        <h2

                            className="
                                text-lg
                                font-bold
                                text-slate-900
                            "

                        >

                            Profile Completion

                        </h2>


                        <p

                            className="
                                text-sm
                                text-slate-500
                            "

                        >

                            {message}

                        </p>


                    </div>



                </div>





                <div

                    className="
                        flex
                        items-center
                        gap-2
                    "

                >

                    <CheckCircle2

                        size={22}

                        className="
                            text-emerald-500
                        "

                    />


                    <span

                        className="
                            text-2xl
                            font-bold
                            text-slate-900
                        "

                    >

                        {percentage}%

                    </span>


                </div>



            </div>





            {/* Progress Bar */}



            <div

                className="
                    mt-6
                    h-3
                    w-full
                    overflow-hidden
                    rounded-full
                    bg-slate-100
                "

            >

                <div

                    className="
                        h-full
                        rounded-full
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        transition-all
                        duration-500
                    "

                    style={{

                        width:`${percentage}%`

                    }}

                />


            </div>




            <p

                className="
                    mt-4
                    text-sm
                    text-slate-500
                "

            >

                Complete your profile to unlock faster job applications
                and better opportunities.

            </p>



        </section>


    );

}