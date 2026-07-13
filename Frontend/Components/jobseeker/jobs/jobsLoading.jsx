"use client";

export default function JobsLoading(){

    return(

        <section className="max-w-7xl mx-auto px-6 py-12">

            <div
                className="
                    grid
                    grid-cols-1
                    gap-8
                    md:grid-cols-2
                    xl:grid-cols-3
                "
            >

                {

                    Array.from({length:6}).map((_,index)=>(

                        <div

                            key={index}

                            className="
                                animate-pulse
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                            "

                        >

                            <div className="flex gap-4">

                                <div className="h-14 w-14 rounded-2xl bg-slate-200"/>

                                <div className="flex-1">

                                    <div className="h-5 w-40 rounded bg-slate-200"/>

                                    <div className="mt-3 h-4 w-28 rounded bg-slate-100"/>

                                </div>

                            </div>

                            <div className="mt-8 space-y-4">

                                <div className="h-4 w-full rounded bg-slate-100"/>

                                <div className="h-4 w-4/5 rounded bg-slate-100"/>

                                <div className="h-4 w-2/3 rounded bg-slate-100"/>

                            </div>

                            <div className="mt-8 flex gap-2">

                                <div className="h-8 w-16 rounded-full bg-slate-100"/>

                                <div className="h-8 w-20 rounded-full bg-slate-100"/>

                                <div className="h-8 w-16 rounded-full bg-slate-100"/>

                            </div>

                            <div className="mt-10 flex justify-between">

                                <div className="h-4 w-24 rounded bg-slate-100"/>

                                <div className="h-10 w-32 rounded-xl bg-slate-200"/>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}