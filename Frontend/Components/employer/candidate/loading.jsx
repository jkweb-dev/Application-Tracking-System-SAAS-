export default function LoadingSkeleton() {


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
                    max-w-7xl
                    animate-pulse
                "

            >

                {/* Hero */}

                <div

                    className="
                        h-72
                        rounded-3xl
                        bg-slate-200
                    "

                />



                <div

                    className="
                        mt-8
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-12
                    "

                >


                    <div

                        className="
                            h-96
                            rounded-3xl
                            bg-slate-200
                            lg:col-span-4
                        "

                    />



                    <div

                        className="
                            space-y-6
                            lg:col-span-8
                        "

                    >

                        <div

                            className="
                                h-48
                                rounded-3xl
                                bg-slate-200
                            "

                        />



                        <div

                            className="
                                h-48
                                rounded-3xl
                                bg-slate-200
                            "

                        />



                        <div

                            className="
                                h-48
                                rounded-3xl
                                bg-slate-200
                            "

                        />

                    </div>


                </div>


            </div>


        </main>

    );

}