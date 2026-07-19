"use client";

import EmptyState from "./EmptyState";

import {

    AreaChart,

    Area,

    XAxis,

    YAxis,

    CartesianGrid,

    Tooltip,

    ResponsiveContainer

} from "recharts";



export default function ApplicationTrendChart({

    data=[]

}) {


    const formattedData = data.map(item => ({

        month:`${item._id.month}/${item._id.year}`,

        applications:item.applications

    }));



    if(!data || data.length===0){

        return (

            <section className="
                rounded-3xl
                border
                bg-white
                p-6
            ">

                <h2 className="
                    text-xl
                    font-bold
                ">

                    Application Growth

                </h2>


                <div className="mt-6">

                    <EmptyState

                        icon="📈"

                        title="No activity yet"

                        description="
                        Application trends appear after
                        candidates start applying.
                        "

                    />

                </div>


            </section>

        )

    }




    return (

        <section

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
            "

        >


            <div className="mb-6">

                <h2 className="
                    text-xl
                    font-bold
                    text-slate-900
                ">

                    Application Growth

                </h2>


                <p className="
                    mt-1
                    text-sm
                    text-slate-500
                ">

                    Monthly application trends

                </p>


            </div>





            <div className="
                h-[350px]
                w-full
            ">


                <ResponsiveContainer

                    width="100%"

                    height="100%"

                >


                    <AreaChart

                        data={formattedData}

                    >


                        <defs>

                            <linearGradient

                                id="applicationGradient"

                                x1="0"

                                y1="0"

                                x2="0"

                                y2="1"

                            >

                                <stop

                                    offset="0%"

                                    stopColor="#6366f1"

                                    stopOpacity={0.5}

                                />


                                <stop

                                    offset="100%"

                                    stopColor="#6366f1"

                                    stopOpacity={0.05}

                                />


                            </linearGradient>


                        </defs>





                        <CartesianGrid

                            strokeDasharray="3 3"

                        />




                        <XAxis

                            dataKey="month"

                        />



                        <YAxis />



                        <Tooltip />





                        <Area

                            type="monotone"

                            dataKey="applications"

                            stroke="#6366f1"

                            strokeWidth={3}

                            fill="url(#applicationGradient)"

                            activeDot={{

                                r:8

                            }}

                            animationDuration={1200}

                        />


                    </AreaChart>


                </ResponsiveContainer>


            </div>


        </section>

    );

}