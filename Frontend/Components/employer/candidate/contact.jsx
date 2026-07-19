export default function ContactCard({

    profile

}) {


    return (

        <div

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "

        >

            <h2

                className="
                    text-xl
                    font-bold
                    text-slate-900
                "

            >

                Contact Information

            </h2>



            <div

                className="
                    mt-6
                    space-y-5
                "

            >


                <div>

                    <p className="text-sm text-slate-500">

                        Email

                    </p>


                    <p className="mt-1 break-all font-medium text-slate-800">

                        {

                            profile?.email

                            ||

                            "Not provided"

                        }

                    </p>

                </div>




                <div>

                    <p className="text-sm text-slate-500">

                        Phone

                    </p>


                    <p className="mt-1 font-medium text-slate-800">

                        {

                            profile?.phone

                            ||

                            "Not provided"

                        }

                    </p>

                </div>




                <div>

                    <p className="text-sm text-slate-500">

                        Location

                    </p>


                    <p className="mt-1 font-medium text-slate-800">

                        {

                            profile?.location

                            ||

                            "Not provided"

                        }

                    </p>

                </div>



               


            </div>


        </div>

    );

}