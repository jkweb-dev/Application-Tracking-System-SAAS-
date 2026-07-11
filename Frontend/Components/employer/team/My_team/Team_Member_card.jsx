"use client";

import { useRouter } from "next/navigation";


export default function TeamMemberCard({

    member ,

    handleDeleteClick

}) {


    const router = useRouter();



    const roleName =

        member.role === "hiring_manager"

        ?

        "Hiring Manager"

        :

        "Recruiter";





    return (


        <div

            className="

                rounded-3xl

                border

                border-slate-200

                bg-white

                p-6

                shadow-sm

                transition

                hover:-translate-y-1

                hover:shadow-xl

            "

        >



            {/* Top Section */}



            <div

                className="

                    flex

                    items-start

                    justify-between

                    gap-4

                "

            >



                <div

                    className="

                        flex

                        items-center

                        gap-4

                    "

                >



                    {/* Avatar */}



                    <div

                        className="

                            flex

                            h-16

                            w-16

                            items-center

                            justify-center

                            rounded-2xl

                            bg-blue-100

                            text-3xl

                        "

                    >

                        {

                            member.role === "recruiter"

                            ?

                            "👨‍💼"

                            :

                            "👥"

                        }


                    </div>






                    <div>


                        <h3

                            className="

                                text-lg

                                font-bold

                                text-slate-800

                            "

                        >

                            {member.firstName} {member.lastName}

                        </h3>




                        <p

                            className="

                                mt-1

                                text-sm

                                text-slate-500

                            "

                        >

                            {member.email}

                        </p>


                    </div>



                </div>



            </div>







            {/* Role + Status */}



            <div

                className="

                    mt-6

                    flex

                    flex-wrap

                    gap-3

                "

            >




                <span

                    className="

                        rounded-full

                        bg-blue-100

                        px-4

                        py-2

                        text-sm

                        font-semibold

                        text-blue-700

                    "

                >

                    {roleName}


                </span>





                <span

                    className="

                        rounded-full

                        bg-emerald-100

                        px-4

                        py-2

                        text-sm

                        font-semibold

                        text-emerald-700

                    "

                >

                    Active

                </span>



            </div>







            {/* Divider */}



            <div

                className="

                    my-6

                    h-px

                    bg-slate-200

                "

            />








            {/* Actions */}



            <div

                className="

                    flex

                    flex-col

                    gap-3

                    sm:flex-row

                "

            >




                <button

                    onClick={()=>router.push(

                        `/employer/team/edit/${member._id}`

                    )}

                    className="

                        flex-1

                        rounded-xl

                        border

                        border-blue-200

                        bg-blue-50

                        px-5

                        py-3

                        font-semibold

                        text-blue-700

                        transition

                        hover:bg-blue-100

                    "

                >

                    Edit


                </button>






                <button

onClick={() => handleDeleteClick(member)}

                    className="

                        flex-1

                        rounded-xl

                        border

                        border-red-200

                        bg-red-50

                        px-5

                        py-3

                        font-semibold

                        text-red-700

                        transition

                        hover:bg-red-100

                    "

                >

                    Delete


                </button>





            </div>




        </div>


    );


}