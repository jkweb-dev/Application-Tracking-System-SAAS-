export default function MemberSecurity({

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

                    Account Security

                </h2>



                <p

                    className="

                        mt-1

                        text-sm

                        text-slate-500

                    "

                >

                    Create a secure password for the new team member's account.

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



                {/* Password */}



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

                        Password

                    </label>



                    <input

                        type="password"

                        name="password"

                        value={memberData.password}

                        onChange={handleChange}

                        placeholder="Create password"

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
    errors.password && (

        <p className="mt-2 text-sm text-red-600">

            {errors.password}

        </p>

    )
}


                </div>







                {/* Confirm Password */}



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

                        Confirm Password

                    </label>



                    <input

                        type="password"

                        name="confirmPassword"

                        value={memberData.confirmPassword}

                        onChange={handleChange}

                        placeholder="Confirm password"

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
    errors.confirmPassword && (

        <p className="mt-2 text-sm text-red-600">

            {errors.confirmPassword}

        </p>

    )
}
                </div>



            </div>





            {/* Password Tips */}



            <div

                className="

                    mx-6

                    mb-6

                    rounded-2xl

                    border

                    border-blue-100

                    bg-blue-50

                    p-5

                "

            >



                <h3

                    className="

                        text-sm

                        font-semibold

                        text-blue-800

                    "

                >

                    Password Guidelines

                </h3>



                <ul

                    className="

                        mt-3

                        space-y-2

                        text-sm

                        leading-6

                        text-blue-700

                    "

                >

                    <li>• Minimum 8 characters.</li>

                    <li>• Include uppercase and lowercase letters.</li>

                    <li>• Include at least one number.</li>

                    <li>• Include a special character for stronger security.</li>

                </ul>



            </div>



        </section>


    );


}