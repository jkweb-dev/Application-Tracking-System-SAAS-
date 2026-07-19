export default function CandidateHero({

    profile

}) {


    return (

        <div

            className="
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
                    bg-gradient-to-r
                    from-indigo-600
                    to-purple-600
                    px-6
                    py-10
                    text-white
                    sm:px-10
                "

            >

                <div

                    className="
                        flex
                        flex-col
                        gap-6
                        sm:flex-row
                        sm:items-center
                    "

                >


                    {/* Profile Image */}

                    <div

                        className="
                            flex
                            h-28
                            w-28
                            items-center
                            justify-center
                            rounded-full
                            border-4
                            border-white/30
                            bg-white/20
                            text-4xl
                            font-bold
                        "

                    >

                        {

                            profile?.firstName?.charAt(0)

                            ||

                            "U"

                        }

                    </div>




                    <div>


                        <h1

                            className="
                                text-3xl
                                font-bold
                                sm:text-4xl
                            "

                        >

                            {

                                profile?.firstName

                            }

                            {" "}

                            {

                                profile?.lastName

                            }

                        </h1>



                        <p

                            className="
                                mt-2
                                text-lg
                                text-white/90
                            "

                        >

                            {

                                profile?.headline

                                ||

                                "Professional Candidate"

                            }

                        </p>



                        <div

                            className="
                                mt-4
                                flex
                                flex-wrap
                                gap-3
                            "

                        >

                            <span

                                className="
                                    rounded-full
                                    bg-white/20
                                    px-4
                                    py-1
                                    text-sm
                                "

                            >

                                {

                                    profile?.location

                                    ||

                                    "Location not added"

                                }

                            </span>



                            <span

                                className="
                                    rounded-full
                                    bg-white/20
                                    px-4
                                    py-1
                                    text-sm
                                "

                            >

                                {

                                    profile?.experienceLevel

                                    ||

                                    "Experience"

                                }

                            </span>


                        </div>


                    </div>


                </div>


            </div>


            {/* Bottom info */}

            <div

                className="
                    grid
                    grid-cols-1
                    gap-4
                    p-6
                    sm:grid-cols-3
                "

            >

                <div>

                    <p className="text-sm text-slate-500">

                        Profile Status

                    </p>


                    <p className="mt-1 font-semibold text-slate-900">

                        Active Candidate

                    </p>


                </div>



                <div>

                    <p className="text-sm text-slate-500">

                        Applied Through

                    </p>


                    <p className="mt-1 font-semibold text-slate-900">

                        RecruitFlow

                    </p>


                </div>



                <div>

                    <p className="text-sm text-slate-500">

                        Availability

                    </p>


                    <p className="mt-1 font-semibold text-slate-900">

                        Open To Work

                    </p>


                </div>


            </div>


        </div>

    );

}