export default function EducationSection({

    profile

}) {


    const education = profile?.education || [];



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

                Education

            </h2>



            {

                education.length === 0

                ?

                (

                    <p

                        className="
                            mt-5
                            text-slate-500
                        "

                    >

                        No education details added.

                    </p>

                )

                :

                (

                    <div

                        className="
                            mt-6
                            grid
                            gap-5
                        "

                    >

                        {

                            education.map(

                                (

                                    item,

                                    index

                                ) => (

                                    <div

                                        key={index}

                                        className="
                                            rounded-2xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            p-5
                                        "

                                    >

                                        <h3

                                            className="
                                                font-bold
                                                text-slate-900
                                            "

                                        >

                                            {

                                                item?.degree

                                                ||

                                                "Degree"

                                            }

                                        </h3>



                                        <p

                                            className="
                                                mt-2
                                                text-indigo-600
                                                font-medium
                                            "

                                        >

                                            {

                                                item?.institute

                                                ||

                                                "Institute"

                                            }

                                        </p>



                                        <div

                                            className="
                                                mt-3
                                                flex
                                                flex-wrap
                                                gap-4
                                                text-sm
                                                text-slate-500
                                            "

                                        >

                                            <span>

                                                {

                                                    item?.startYear

                                                    ||

                                                    "Start"

                                                }

                                            </span>



                                            -

                                            

                                            <span>

                                                {

                                                    item?.endYear

                                                    ||

                                                    "End"

                                                }

                                            </span>


                                        </div>


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