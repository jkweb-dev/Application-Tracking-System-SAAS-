export default function SkillsSection({

    profile

}) {


    const skills = profile?.skills || [];



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

                Technical Skills

            </h2>



            {

                skills.length === 0

                ?

                (

                    <p

                        className="
                            mt-5
                            text-slate-500
                        "

                    >

                        No skills added.

                    </p>

                )

                :

                (

                    <div

                        className="
                            mt-5
                            flex
                            flex-wrap
                            gap-3
                        "

                    >

                        {

                            skills.map(

                                (skill) => (

                                    <span

                                        key={skill}

                                        className="
                                            rounded-full
                                            bg-indigo-50
                                            px-4
                                            py-2
                                            text-sm
                                            font-medium
                                            text-indigo-700
                                            ring-1
                                            ring-indigo-100
                                        "

                                    >

                                        {skill}

                                    </span>

                                )

                            )

                        }

                    </div>

                )

            }


        </section>

    );

}