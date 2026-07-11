export default function MemberRole({

    memberData,

    handleChange ,

    errors

}) {


    return (


        <section

            className="

                overflow-hidden

                rounded-3xl

                border

                border-slate-200

                bg-white

                shadow-sm

            "

        >



            {/* Header */}



            <div

                className="

                    border-b

                    border-slate-200

                    bg-slate-50

                    px-6

                    py-5

                "

            >



                <h2

                    className="

                        text-xl

                        font-bold

                        text-slate-800

                    "

                >

                    Assign Role

                </h2>



                <p

                    className="

                        mt-1

                        text-sm

                        text-slate-500

                    "

                >

                    Select the role for this team member. Permissions will be
                    determined based on the selected role.

                </p>



            </div>





            {/* Role Cards */}



            <div

                className="

                    grid

                    gap-6

                    p-6

                    lg:grid-cols-2

                "

            >




                {/* Recruiter */}



                <label

                    className={`

                        cursor-pointer

                        rounded-2xl

                        border-2

                        p-6

                        transition-all

                        duration-200

                        hover:shadow-lg

                        ${

                            memberData.role === "recruiter"

                            ?

                            "border-blue-600 bg-blue-50"

                            :

                            "border-slate-200 bg-white"

                        }

                    `}

                >


                    <input

                        type="radio"

                        name="role"

                        value="recruiter"

                        checked={memberData.role === "recruiter"}

                        onChange={handleChange}

                        className="hidden"

                    />



                    <div className="flex items-start gap-4">



                        <div

                            className="

                                flex

                                h-14

                                w-14

                                items-center

                                justify-center

                                rounded-2xl

                                bg-blue-100

                                text-3xl

                            "

                        >

                            👨‍💼

                        </div>




                        <div>


                            <h3

                                className="

                                    text-lg

                                    font-bold

                                    text-slate-800

                                "

                            >

                                Recruiter

                            </h3>



                            <p

                                className="

                                    mt-2

                                    text-sm

                                    leading-6

                                    text-slate-600

                                "

                            >

                                Responsible for managing recruitment activities,
                                creating job postings, reviewing applicants,
                                and progressing candidates through the hiring
                                process.

                            </p>


                        </div>



                    </div>



                </label>







                {/* Hiring Manager */}



                <label

                    className={`

                        cursor-pointer

                        rounded-2xl

                        border-2

                        p-6

                        transition-all

                        duration-200

                        hover:shadow-lg

                        ${

                            memberData.role === "hiring_manager"

                            ?

                            "border-blue-600 bg-blue-50"

                            :

                            "border-slate-200 bg-white"

                        }

                    `}

                >



                    <input

                        type="radio"

                        name="role"

                        value="hiring_manager"

                        checked={memberData.role === "hiring_manager"}

                        onChange={handleChange}

                        className="hidden"

                    />



                    <div className="flex items-start gap-4">



                        <div

                            className="

                                flex

                                h-14

                                w-14

                                items-center

                                justify-center

                                rounded-2xl

                                bg-blue-100

                                text-3xl

                            "

                        >

                            👥

                        </div>




                        <div>


                            <h3

                                className="

                                    text-lg

                                    font-bold

                                    text-slate-800

                                "

                            >

                                Hiring Manager

                            </h3>



                            <p

                                className="

                                    mt-2

                                    text-sm

                                    leading-6

                                    text-slate-600

                                "

                            >

                                Reviews shortlisted candidates, participates
                                in interviews, and provides hiring decisions
                                for positions within their department.

                            </p>


                        </div>



                    </div>



                </label>





            </div>





            {/* Information Box */}



            <div

                className="

                    mx-6

                    mb-6

                    rounded-2xl

                    border

                    border-amber-200

                    bg-amber-50

                    p-5

                "

            >



                <p

                    className="

                        text-sm

                        leading-6

                        text-amber-800

                    "

                >

                    Team member permissions are enforced by the system based on
                    the assigned role. Roles can be updated later by the company
                    owner if responsibilities change.

                </p>



            </div>

{
    errors.role && (

        <p

            className="

                mx-6

                mb-5

                text-sm

                text-red-600

            "

        >

            {errors.role}

        </p>

    )
}

        </section>


    );


}