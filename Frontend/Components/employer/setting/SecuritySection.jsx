export default function SecuritySection({

    passwordData,

    handlePasswordChange,

    handleSubmit,

    loading

}) {


    return (


        <section

            className="

                rounded-3xl

                border

                border-slate-200

                bg-white

                shadow-sm

                overflow-hidden

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

                    Security

                </h2>



                <p

                    className="

                        mt-1

                        text-sm

                        text-slate-500

                    "

                >

                    Keep your account secure by updating your password regularly.

                </p>


            </div>





            {/* Form */}



            <div

                className="

                    p-6

                "

            >



                <div

                    className="

                        grid

                        gap-6

                        lg:grid-cols-2

                    "

                >




                    {/* Current Password */}



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

                            Current Password

                        </label>



                        <input

                            type="password"

                            name="currentPassword"

                            value={passwordData.currentPassword}

                            onChange={handlePasswordChange}

                            placeholder="Enter current password"

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

                                focus:border-emerald-500

                                focus:bg-white

                            "

                        />


                    </div>






                    {/* New Password */}



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

                            New Password

                        </label>



                        <input

                            type="password"

                            name="newPassword"

                            value={passwordData.newPassword}

                            onChange={handlePasswordChange}

                            placeholder="Enter new password"

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

                                focus:border-emerald-500

                                focus:bg-white

                            "

                        />


                    </div>






                    {/* Confirm Password */}



                    <div

                        className="

                            lg:col-span-2

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

                            Confirm New Password

                        </label>



                        <input

                            type="password"

                            name="confirmPassword"

                            value={passwordData.confirmPassword}

                            onChange={handlePasswordChange}

                            placeholder="Confirm new password"

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

                                focus:border-emerald-500

                                focus:bg-white

                            "

                        />


                    </div>




                </div>






                {/* Security Note */}



                <div

                    className="

                        mt-6

                        rounded-2xl

                        border

                        border-emerald-100

                        bg-emerald-50

                        p-4

                    "

                >


                    <p

                        className="

                            text-sm

                            leading-6

                            text-emerald-700

                        "

                    >

                        For better security, use a strong password containing uppercase
                        letters, lowercase letters, numbers, and special characters.

                    </p>


                </div>






                {/* Button */}



                <div

                    className="

                        mt-8

                        flex

                        justify-end

                    "

                >


                    <button

                        onClick={handleSubmit}

                        disabled={loading}

                        className="

                            rounded-xl

                            bg-emerald-600

                            px-6

                            py-3

                            font-semibold

                            text-white

                            transition

                            hover:bg-emerald-700

                            disabled:cursor-not-allowed

                            disabled:opacity-60

                        "

                    >

                        {

                            loading

                            ?

                            "Updating..."

                            :

                            "Change Password"

                        }

                    </button>


                </div>



            </div>



        </section>


    );

}