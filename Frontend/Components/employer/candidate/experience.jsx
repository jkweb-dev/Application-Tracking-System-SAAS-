export default function ExperienceSection({

    profile

}) {


    const experiences = profile?.experience || [];



    return (

        <section

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "

        >

            <h2

                className="
                    text-xl
                    font-bold
                    text-slate-900
                "

            >

                Work Experience

            </h2>



            {

                experiences.length === 0

                ?

                (

                    <p

                        className="
                            mt-5
                            text-slate-500
                        "

                    >

                        No experience added.

                    </p>

                )

                :

                (

                    <div

                        className="
                            mt-6
                            space-y-6
                        "

                    >

                        {

                            experiences.map(

                                (

                                    item,

                                    index

                                ) => (

                                    <div

                                        key={index}

                                        className="
                                            relative
                                            border-l-2
                                            border-indigo-200
                                            pl-6
                                        "

                                    >

                                        {/* Dot */}

                                        <div

                                            className="
                                                absolute
                                                -left-[9px]
                                                top-1
                                                h-4
                                                w-4
                                                rounded-full
                                                bg-indigo-600
                                            "

                                        />



                                        <h3

                                            className="
                                                font-bold
                                                text-slate-900
                                            "

                                        >

                                            {

                                                item?.position

                                                ||

                                                "Position"

                                            }

                                        </h3>



                                        <p

                                            className="
                                                mt-1
                                                text-sm
                                                font-medium
                                                text-indigo-600
                                            "

                                        >

                                            {

                                                item?.company

                                                ||

                                                "Company"

                                            }

                                        </p>



                                        <p

                                            className="
                                                mt-2
                                                text-sm
                                                text-slate-500
                                            "

                                        >

                                          {
  `${new Date(item.startDate).toLocaleDateString()} - ${new Date(item.endDate).toLocaleDateString()}`
}

                                        </p>



                                        <p

                                            className="
                                                mt-3
                                                leading-7
                                                text-slate-600
                                            "

                                        >

                                            {

                                                item?.description

                                                ||

                                                "No description"

                                            }

                                        </p>


                                    </div>

                                )

                            )

                        }

                    </div>

                )

            }


        </section>

    );

}