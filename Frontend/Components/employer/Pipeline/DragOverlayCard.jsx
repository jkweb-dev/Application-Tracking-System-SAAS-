export default function DragOverlayCard({

    application

}) {


    const profile = application.jobSeekerProfileId;



    return (

        <div

            className="
                w-[320px]
                rounded-2xl
                border
                border-indigo-300
                bg-white
                p-5
                shadow-2xl
            "

        >

            <h3

                className="
                    font-bold
                    text-slate-900
                "

            >

                {

                    profile?.firstName

                }

                {" "}

                {

                    profile?.lastName

                }

            </h3>



            <p

                className="
                    mt-1
                    text-sm
                    text-slate-500
                "

            >

                {

                    profile?.headline

                    ||

                    "Job Seeker"

                }

            </p>



            <div

                className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                "

            >

                {

                    profile?.skills

                    ?.slice(0,3)

                    ?.map(

                        skill => (

                            <span

                                key={skill}

                                className="
                                    rounded-full
                                    bg-indigo-50
                                    px-3
                                    py-1
                                    text-xs
                                    text-indigo-700
                                "

                            >

                                {skill}

                            </span>

                        )

                    )

                }

            </div>


        </div>

    );

}