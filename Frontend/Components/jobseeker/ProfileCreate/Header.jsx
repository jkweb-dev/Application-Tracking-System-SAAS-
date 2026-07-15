"use client";


import {
    UserRound,
    Sparkles
} from "lucide-react";



export default function ProfileHeader(){


    return(


        <section

            className="
                mx-auto
                max-w-6xl
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "

        >


            <div

                className="
                    relative
                    bg-gradient-to-r
                    from-blue-600
                    via-indigo-600
                    to-purple-600
                    px-6
                    py-10
                    md:px-10
                "

            >



                {/* Decorative Circle */}


                <div

                    className="
                        absolute
                        -right-16
                        -top-16
                        h-48
                        w-48
                        rounded-full
                        bg-white/10
                    "

                />



                <div

                    className="
                        relative
                        flex
                        flex-col
                        gap-5
                        md:flex-row
                        md:items-center
                    "

                >



                    {/* Icon */}


                    <div

                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-3xl
                            bg-white/20
                            backdrop-blur-sm
                        "

                    >

                        <UserRound

                            size={42}

                            className="
                                text-white
                            "

                        />

                    </div>





                    <div>


                        <div

                            className="
                                mb-2
                                flex
                                items-center
                                gap-2
                            "

                        >

                            <Sparkles

                                size={20}

                                className="text-yellow-300"

                            />


                            <span

                                className="
                                    text-sm
                                    font-medium
                                    text-blue-100
                                "

                            >

                                Build your professional identity

                            </span>


                        </div>





                        <h1

                            className="
                                text-3xl
                                font-bold
                                text-white
                                md:text-4xl
                            "

                        >

                            Complete Your Profile

                        </h1>



                        <p

                            className="
                                mt-3
                                max-w-2xl
                                text-sm
                                leading-6
                                text-blue-100
                                md:text-base
                            "

                        >

                            Create a strong profile to help companies
                            discover your skills, experience, and
                            qualifications. A complete profile increases
                            your chances of getting hired.

                        </p>


                    </div>



                </div>



            </div>





            {/* Bottom message */}


            <div

                className="
                    flex
                    flex-col
                    gap-3
                    px-6
                    py-5
                    md:flex-row
                    md:items-center
                    md:justify-between
                "

            >



                <p

                    className="
                        text-sm
                        text-slate-600
                    "

                >

                    🚀 Your profile will be used automatically when
                    applying for jobs.

                </p>




                <span

                    className="
                        rounded-full
                        bg-emerald-50
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-emerald-700
                    "

                >

                    Job Seeker Profile

                </span>



            </div>



        </section>


    );

}