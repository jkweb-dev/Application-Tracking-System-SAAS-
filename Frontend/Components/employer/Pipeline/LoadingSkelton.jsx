export default function LoadingSkeleton() {


    const columns = Array.from({

        length: 6

    });



    return (

        <main

            className="
                min-h-screen
                bg-slate-50
                p-6
            "

        >

            <div

                className="
                    mx-auto
                    max-w-[1800px]
                "

            >


                {/* Header Skeleton */}

                <div

                    className="
                        animate-pulse
                        rounded-3xl
                        bg-white
                        p-8
                        shadow-sm
                    "

                >

                    <div

                        className="
                            h-8
                            w-72
                            rounded
                            bg-slate-200
                        "

                    />



                    <div

                        className="
                            mt-4
                            h-4
                            w-full
                            max-w-xl
                            rounded
                            bg-slate-200
                        "

                    />


                </div>





                {/* Columns */}

                <div

                    className="
                        mt-8
                        flex
                        gap-6
                        overflow-hidden
                    "

                >

                    {

                        columns.map(

                            (_, index) => (

                                <div

                                    key={index}

                                    className="
                                        animate-pulse
                                        min-w-[340px]
                                        rounded-3xl
                                        bg-white
                                        p-5
                                        shadow-sm
                                    "

                                >

                                    <div

                                        className="
                                            h-6
                                            w-32
                                            rounded
                                            bg-slate-200
                                        "

                                    />



                                    {

                                        Array.from({

                                            length:3

                                        })

                                        .map(

                                            (_,card)=>(

                                                <div

                                                    key={card}

                                                    className="
                                                        mt-5
                                                        rounded-2xl
                                                        border
                                                        border-slate-200
                                                        p-5
                                                    "

                                                >

                                                    <div

                                                        className="
                                                            h-5
                                                            w-40
                                                            rounded
                                                            bg-slate-200
                                                        "

                                                    />



                                                    <div

                                                        className="
                                                            mt-3
                                                            h-4
                                                            w-28
                                                            rounded
                                                            bg-slate-200
                                                        "

                                                    />


                                                </div>

                                            )

                                        )

                                    }


                                </div>

                            )

                        )

                    }


                </div>


            </div>


        </main>

    );

}