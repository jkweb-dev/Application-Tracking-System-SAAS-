export default function PipelineHeader({

    totalApplicants

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
                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "

            >

                <div>

                    <h1

                        className="
                            text-3xl
                            font-bold
                            text-slate-900
                        "

                    >

                        Hiring Pipeline

                    </h1>



                    <p

                        className="
                            mt-3
                            max-w-3xl
                            text-slate-600
                            leading-7
                        "

                    >

                        Review applicants, evaluate profiles and drag candidates
                        between hiring stages. Every movement automatically
                        updates the application status.

                    </p>

                </div>





                <div

                    className="
                        flex
                        flex-col
                        items-center
                        rounded-2xl
                        bg-indigo-50
                        px-8
                        py-6
                    "

                >

                    <span

                        className="
                            text-4xl
                            font-bold
                            text-indigo-700
                        "

                    >

                        {totalApplicants}

                    </span>



                    <span

                        className="
                            mt-2
                            text-sm
                            font-medium
                            uppercase
                            tracking-wider
                            text-slate-600
                        "

                    >

                        Applicants

                    </span>

                </div>

            </div>

        </div>

    );

}