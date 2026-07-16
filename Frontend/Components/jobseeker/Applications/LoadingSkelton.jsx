export default function LoadingSkeleton() {

    return (

        <main

            className="
                min-h-screen
                bg-slate-50
                px-4
                py-8
                md:px-8
            "

        >

            <div

                className="
                    mx-auto
                    max-w-7xl
                "

            >

                {/* Header Skeleton */}

                <div

                    className="
                        animate-pulse
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-8
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

                        <div className="flex-1">

                            <div

                                className="
                                    h-9
                                    w-72
                                    rounded-lg
                                    bg-slate-200
                                "

                            />

                            <div

                                className="
                                    mt-5
                                    h-4
                                    w-full
                                    max-w-xl
                                    rounded
                                    bg-slate-200
                                "

                            />

                            <div

                                className="
                                    mt-3
                                    h-4
                                    w-3/4
                                    rounded
                                    bg-slate-200
                                "

                            />

                        </div>



                        <div

                            className="
                                h-28
                                w-44
                                rounded-2xl
                                bg-slate-200
                            "

                        />

                    </div>

                </div>





                {/* Cards Skeleton */}

                <div

                    className="
                        mt-8
                        space-y-6
                    "

                >

                    {

                        Array.from({ length: 4 }).map((_, index) => (

                            <div

                                key={index}

                                className="
                                    animate-pulse
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-6
                                "

                            >

                                {/* Top */}

                                <div

                                    className="
                                        flex
                                        items-start
                                        justify-between
                                    "

                                >

                                    <div>

                                        <div

                                            className="
                                                h-7
                                                w-64
                                                rounded
                                                bg-slate-200
                                            "

                                        />

                                        <div

                                            className="
                                                mt-3
                                                h-5
                                                w-40
                                                rounded
                                                bg-slate-200
                                            "

                                        />

                                    </div>



                                    <div

                                        className="
                                            h-10
                                            w-32
                                            rounded-full
                                            bg-slate-200
                                        "

                                    />

                                </div>





                                {/* Information Grid */}

                                <div

                                    className="
                                        mt-8
                                        grid
                                        gap-6
                                        md:grid-cols-4
                                    "

                                >

                                    {

                                        Array.from({ length: 4 }).map(

                                            (_, item) => (

                                                <div

                                                    key={item}

                                                >

                                                    <div

                                                        className="
                                                            h-4
                                                            w-24
                                                            rounded
                                                            bg-slate-200
                                                        "

                                                    />

                                                    <div

                                                        className="
                                                            mt-3
                                                            h-5
                                                            w-32
                                                            rounded
                                                            bg-slate-200
                                                        "

                                                    />

                                                </div>

                                            )

                                        )

                                    }

                                </div>





                                {/* Footer */}

                                <div

                                    className="
                                        mt-8
                                        flex
                                        justify-end
                                    "

                                >

                                    <div

                                        className="
                                            h-11
                                            w-36
                                            rounded-xl
                                            bg-slate-200
                                        "

                                    />

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </main>

    );

}