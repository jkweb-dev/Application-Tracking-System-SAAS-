export default function ResumeCard({

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

                Resume

            </h2>



            <div

                className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    rounded-2xl
                    bg-slate-50
                    p-4
                "

            >

                <div

                    className="
                        flex
                        items-center
                        gap-3
                    "

                >

                    <div

                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-red-100
                            text-xl
                        "

                    >

                        📄

                    </div>



                    <div>

                        <p

                            className="
                                font-semibold
                                text-slate-800
                            "

                        >

                            Resume.pdf

                        </p>



                        <p

                            className="
                                text-sm
                                text-slate-500
                            "

                        >

                            Candidate Resume

                        </p>

                    </div>


                </div>





                <button

                    className="
                        rounded-xl
                        bg-indigo-600
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-white
                        transition
                        hover:bg-indigo-700
                    "

                >

                    View

                </button>


            </div>


        </div>

    );

}