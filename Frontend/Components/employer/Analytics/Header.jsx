export default function AnalyticsHeader(){


    return (

        <div

            className="
                rounded-3xl
                bg-gradient-to-r
                from-indigo-600
                via-purple-600
                to-pink-500
                p-8
                text-white
                shadow-lg
            "

        >

            <div

                className="
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "

            >


                <div>


                    <h1

                        className="
                            text-3xl
                            font-bold
                            sm:text-4xl
                        "

                    >

                        Hiring Analytics

                    </h1>



                    <p

                        className="
                            mt-3
                            max-w-xl
                            text-white/80
                        "

                    >

                        Track your recruitment performance,
                        candidate pipeline, and hiring progress
                        in one place.

                    </p>


                </div>





                <div

                    className="
                        rounded-2xl
                        bg-white/20
                        px-5
                        py-4
                        backdrop-blur-md
                    "

                >

                    <p

                        className="
                            text-sm
                            text-white/80
                        "

                    >

                        Dashboard

                    </p>


                    <p

                        className="
                            mt-1
                            text-xl
                            font-semibold
                        "

                    >

                        Recruitment Overview

                    </p>


                </div>


            </div>


        </div>

    );

}