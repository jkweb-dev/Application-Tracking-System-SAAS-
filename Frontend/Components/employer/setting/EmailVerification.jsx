export default function EmailVerification({

    company

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

                    Email Verification

                </h2>


                <p

                    className="

                        mt-1

                        text-sm

                        text-slate-500

                    "

                >

                    Verification status of your company email address.

                </p>


            </div>





            {/* Content */}



            <div

                className="

                    flex

                    flex-col

                    gap-5

                    p-6

                    sm:flex-row

                    sm:items-center

                    sm:justify-between

                "

            >



                <div

                    className="

                        flex

                        items-center

                        gap-4

                    "

                >



                    <div

                        className="

                            flex

                            h-14

                            w-14

                            items-center

                            justify-center

                            rounded-2xl

                            bg-emerald-100

                            text-2xl

                        "

                    >

                        ✓

                    </div>





                    <div>


                        <h3

                            className="

                                text-lg

                                font-semibold

                                text-slate-800

                            "

                        >

                            Email Verified

                        </h3>



                        <p

                            className="

                                mt-1

                                text-sm

                                text-slate-600

                            "

                        >

                            Your company email has been verified successfully.

                            Your account is secure.

                        </p>


                    </div>



                </div>





                <div

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

                    Verified

                </div>



            </div>



        </section>


    );

}