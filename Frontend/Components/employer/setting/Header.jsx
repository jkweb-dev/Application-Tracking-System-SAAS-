export default function SettingsHeader() {


    return (


        <section

            className="

                rounded-3xl

                border

                border-emerald-100

                bg-gradient-to-r

                from-emerald-50

                via-white

                to-emerald-50

                p-6

                sm:p-8

                shadow-sm

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



                {/* Left */}


                <div>


                    <p

                        className="

                            text-sm

                            font-semibold

                            uppercase

                            tracking-widest

                            text-emerald-600

                        "

                    >

                        Employer Settings

                    </p>



                    <h1

                        className="

                            mt-2

                            text-3xl

                            font-bold

                            tracking-tight

                            text-slate-800

                        "

                    >

                        Settings

                    </h1>



                    <p

                        className="

                            mt-3

                            max-w-2xl

                            text-sm

                            leading-7

                            text-slate-600

                            sm:text-base

                        "

                    >

                        Manage your account security, review company information,
                        verify your email address and control your employer account
                        from one place.

                    </p>


                </div>





                {/* Right */}


                <div

                    className="

                        flex

                        h-20

                        w-20

                        items-center

                        justify-center

                        rounded-3xl

                        bg-emerald-600

                        text-4xl

                        shadow-lg

                    "

                >

                    ⚙️

                </div>



            </div>



        </section>


    );


}