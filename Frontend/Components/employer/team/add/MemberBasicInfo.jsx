export default function MemberBasicInfo({

    memberData,

    handleChange,

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

                    Basic Information

                </h2>



                <p

                    className="

                        mt-1

                        text-sm

                        text-slate-500

                    "

                >

                    Enter the team member's personal information.

                </p>



            </div>





            {/* Form */}



            <div

                className="

                    grid

                    gap-6

                    p-6

                    md:grid-cols-2

                "

            >



                {/* First Name */}



                <div>


                    <label

                        className="

                            mb-2

                            block

                            text-sm

                            font-semibold

                            text-slate-700

                        "

                    >

                        First Name

                    </label>



                    <input

                        type="text"

                        name="firstName"

                        value={memberData.firstName}

                        onChange={handleChange}

                        placeholder="Enter first name"

                        className="

                            w-full

                            rounded-xl

                            border

                            border-slate-300

                            bg-slate-50

                            px-4

                            py-3

                            outline-none

                            transition

                            focus:border-blue-500

                            focus:bg-white

                        "

                    />


{
    errors.firstName && (

        <p className="mt-2 text-sm text-red-600">

            {errors.firstName}

        </p>

    )
}
                </div>







                {/* Last Name */}



                <div>


                    <label

                        className="

                            mb-2

                            block

                            text-sm

                            font-semibold

                            text-slate-700

                        "

                    >

                        Last Name

                    </label>



                    <input

                        type="text"

                        name="lastName"

                        value={memberData.lastName}

                        onChange={handleChange}

                        placeholder="Enter last name"

                        className="

                            w-full

                            rounded-xl

                            border

                            border-slate-300

                            bg-slate-50

                            px-4

                            py-3

                            outline-none

                            transition

                            focus:border-blue-500

                            focus:bg-white

                        "

                    />

{
    errors.lastName && (

        <p className="mt-2 text-sm text-red-600">

            {errors.lastName}

        </p>

    )
}
                </div>







                {/* Email */}



                <div

                    className="

                        md:col-span-2

                    "

                >


                    <label

                        className="

                            mb-2

                            block

                            text-sm

                            font-semibold

                            text-slate-700

                        "

                    >

                        Email Address

                    </label>



                    <input

                        type="email"

                        name="email"

                        value={memberData.email}

                        onChange={handleChange}

                        placeholder="Enter email address"

                        className="

                            w-full

                            rounded-xl

                            border

                            border-slate-300

                            bg-slate-50

                            px-4

                            py-3

                            outline-none

                            transition

                            focus:border-blue-500

                            focus:bg-white

                        "

                    />



                    <p

                        className="

                            mt-2

                            text-sm

                            text-slate-500

                        "

                    >

                        This email will be used by the team member to sign in to RecruitFlow.

                    </p>


{
    errors.email && (

        <p className="mt-2 text-sm text-red-600">

            {errors.email}

        </p>

    )
}
                </div>



            </div>



        </section>


    );


}