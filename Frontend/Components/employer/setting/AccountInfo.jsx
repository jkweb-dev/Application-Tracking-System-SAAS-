export default function AccountInfo({

    company

}) {



    const information = [

        {

            label: "Company Name",

            value: company?.companyName || "--"

        },

        {

            label: "Company Email",

            value: company?.email || "--"

        },

        {

            label: "Industry",

            value: company?.industry || "--"

        },

        {

            label: "Company Size",

            value: company?.companySize || "--"

        },

        {

            label: "Location",

            value: company?.location || "--"

        },

        {

            label: "HR Name",

            value: company?.hrName || "--"

        },

        {

            label: "Role",

            value: "Employer"

        },

        {

            label: "Account Status",

            value: "Active"

        }

    ];



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

                    flex

                    items-center

                    justify-between

                    border-b

                    border-slate-200

                    bg-slate-50

                    px-6

                    py-5

                "

            >



                <div>


                    <h2

                        className="

                            text-xl

                            font-bold

                            text-slate-800

                        "

                    >

                        Account Information

                    </h2>



                    <p

                        className="

                            mt-1

                            text-sm

                            text-slate-500

                        "

                    >

                        Basic information about your employer account.

                    </p>



                </div>





                <span

                    className="

                        rounded-full

                        bg-emerald-100

                        px-3

                        py-1

                        text-xs

                        font-semibold

                        text-emerald-700

                    "

                >

                    Read Only

                </span>



            </div>







            {/* Information */}



            <div

                className="

                    grid

                    gap-6

                    p-6

                    sm:grid-cols-2

                "

            >



                {

                    information.map((item)=>(


                        <div

                            key={item.label}

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

                                {item.label}

                            </p>



                            <p

                                className="

                                    mt-2

                                    break-words

                                    text-base

                                    font-semibold

                                    text-slate-800

                                "

                            >

                                {item.value}

                            </p>



                        </div>


                    ))

                }



            </div>



        </section>


    );


}