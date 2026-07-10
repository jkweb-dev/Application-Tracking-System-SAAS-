export default function DangerZone({

    openDialog ,

    loading

}) {


    return (


        <section

            className="

                rounded-3xl

                border

                border-red-200

                bg-red-50

                shadow-sm

                overflow-hidden

            "

        >



            {/* Header */}



            <div

                className="

                    border-b

                    border-red-200

                    px-6

                    py-5

                "

            >



                <h2

                    className="

                        text-xl

                        font-bold

                        text-red-700

                    "

                >

                    Danger Zone

                </h2>



                <p

                    className="

                        mt-1

                        text-sm

                        text-red-600

                    "

                >

                    Permanently remove your employer account and all associated data.

                </p>



            </div>







            {/* Content */}



            <div

                className="

                    flex

                    flex-col

                    gap-6

                    p-6

                    md:flex-row

                    md:items-center

                    md:justify-between

                "

            >





                <div>


                    <h3

                        className="

                            text-lg

                            font-semibold

                            text-slate-800

                        "

                    >

                        Delete Account

                    </h3>




                    <p

                        className="

                            mt-2

                            max-w-xl

                            text-sm

                            leading-6

                            text-slate-600

                        "

                    >

                        Once your account is deleted, all company information,
                        jobs, and related data will be permanently removed.
                        This action cannot be undone.

                    </p>


                </div>







                <button


                    onClick={openDialog}


                    disabled={loading}


                    className="

                        rounded-xl

                        bg-red-600

                        px-6

                        py-3

                        font-semibold

                        text-white

                        transition

                        hover:bg-red-700

                        disabled:cursor-not-allowed

                        disabled:opacity-60

                    "


                >


                    {

                        loading

                        ?

                        "Deleting..."

                        :

                        "Delete Account"

                    }


                </button>




            </div>





        </section>


    );

}