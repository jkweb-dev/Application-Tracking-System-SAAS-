"use client";

export default function MemberProfileView({

    member,

    setEditMode

}) {


    const roleName =

        member.role === "hiring_manager"

        ?

        "Hiring Manager"

        :

        "Recruiter";



    return (


        <>


            {/* Header */}


            <div

                className="

                    rounded-3xl

                    bg-gradient-to-r

                    from-blue-600

                    via-indigo-600

                    to-cyan-600

                    p-8

                    text-white

                    shadow-xl

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




                    <div

                        className="

                            flex

                            items-center

                            gap-5

                        "

                    >




                        <div

                            className="

                                flex

                                h-20

                                w-20

                                items-center

                                justify-center

                                rounded-3xl

                                bg-white/20

                                text-5xl

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



                            <h1

                                className="

                                    text-3xl

                                    font-bold

                                "

                            >

                                {member.firstName} {member.lastName}

                            </h1>





                            <p

                                className="

                                    mt-2

                                    text-blue-100

                                "

                            >

                                {member.email}

                            </p>



                        </div>



                    </div>







                    <button

                        onClick={()=>setEditMode(true)}

                        className="

                            rounded-xl

                            bg-white

                            px-6

                            py-3

                            font-semibold

                            text-blue-700

                            transition

                            hover:scale-105

                        "

                    >

                        Edit Member

                    </button>



                </div>



            </div>










            {/* Information Card */}



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




                <h2

                    className="

                        text-2xl

                        font-bold

                        text-slate-800

                    "

                >

                    Member Information

                </h2>





                <p

                    className="

                        mt-2

                        text-sm

                        text-slate-500

                    "

                >

                    Review the member details below. Click
                    <span className="font-semibold"> Edit Member </span>
                    to update their information.

                </p>







                <div

                    className="

                        mt-8

                        grid

                        gap-6

                        md:grid-cols-2

                    "

                >




                    <InfoItem

                        label="First Name"

                        value={member.firstName}

                    />





                    <InfoItem

                        label="Last Name"

                        value={member.lastName}

                    />





                    <InfoItem

                        label="Email Address"

                        value={member.email}

                    />





                    <InfoItem

                        label="Role"

                        value={roleName}

                    />





                    <InfoItem

                        label="Status"

                        value="Active"

                    />





                    <InfoItem

                        label="Joined"

                        value={new Date(member.createdAt).toLocaleDateString()}

                    />



                </div>



            </div>


        </>


    );


}










function InfoItem({

    label,

    value

}){


    return(


        <div

            className="

                rounded-2xl

                border

                border-slate-200

                bg-slate-50

                p-5

            "

        >



            <p

                className="

                    text-sm

                    font-medium

                    text-slate-500

                "

            >

                {label}

            </p>





            <p

                className="

                    mt-2

                    text-lg

                    font-semibold

                    text-slate-800

                    break-words

                "

            >

                {value}

            </p>



        </div>


    );


}