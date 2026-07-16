export default function ApplicationsHeader({

    totalApplications

}) {

    return (

        <div

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
            "

        >

            <div

                className="
                    flex
                    flex-col
                    gap-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                "

            >

                {/* Left Section */}

                <div>

                    <h1

                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                            text-slate-900
                        "

                    >

                        My Applications

                    </h1>



                    <p

                        className="
                            mt-3
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-600
                        "

                    >

                        Track every job you've applied for, monitor your
                        application progress, and stay updated as employers
                        review your profile.

                    </p>

                </div>





                {/* Right Section */}

                <div

                    className="
                        flex
                        min-w-[180px]
                        flex-col
                        items-center
                        justify-center
                        rounded-2xl
                        bg-violet-50
                        px-8
                        py-6
                    "

                >

                    <span

                        className="
                            text-4xl
                            font-extrabold
                            text-violet-700
                        "

                    >

                        {totalApplications}

                    </span>



                    <span

                        className="
                            mt-2
                            text-sm
                            font-medium
                            uppercase
                            tracking-wide
                            text-slate-600
                        "

                    >

                        Total Applications

                    </span>

                </div>

            </div>

        </div>

    );

}