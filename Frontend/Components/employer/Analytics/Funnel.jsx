"use client";

import EmptyState from "./EmptyState";


import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell

} from "recharts";

export default function FunnelChart({

    data=[]

}) {

    const colors = [

    "#6366f1",
    "#8b5cf6",
    "#f59e0b",
    "#f97316",
    "#22c55e",
    "#f97316",

];


    const stages = [

        "Applied",

        "Under Review",

        "Shortlisted",

        "Interview",

        "Accepted" ,

        "Rejected"

    ];



    const funnelData = stages.map(stage=>{


        const item = data.find(

            d => d.status === stage

        );



        return {


            stage,


            count:item?.count || 0


        };


    });


    if(!data || data.length === 0){

    return (

        <div className="
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
        ">

            <h2 className="
                text-xl
                font-bold
            ">

                Hiring Funnel

            </h2>


            <div className="mt-6">

                <EmptyState

                    icon="📂"

                    title="No applications yet"

                    description="
                    Post jobs and receive applications
                    to see your hiring funnel.
                    "

                />

            </div>


        </div>

    );

}




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

            <div className="mb-6">


                <h2

                    className="
                        text-xl
                        font-bold
                        text-slate-900
                    "

                >

                    Hiring Funnel

                </h2>


                <p

                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "

                >

                    Candidate movement through hiring stages

                </p>


            </div>





            <div

                className="
                    h-[350px]
                    w-full
                "

            >

                <ResponsiveContainer

                    width="100%"

                    height="100%"

                >

                    <BarChart

                        data={funnelData}

                        layout="vertical"

                    >

                        <CartesianGrid

                            strokeDasharray="3 3"

                        />


                        <XAxis

                            type="number"

                        />


                        <YAxis

                            dataKey="stage"

                            type="category"

                            width={100}

                        />



                        <Tooltip />



                       <Bar

    dataKey="count"

    radius={[0,10,10,0]}

>

{

funnelData.map((entry,index)=>(

    <Cell

        key={index}

        fill={colors[index]}

    />

))

}

</Bar>


                    </BarChart>


                </ResponsiveContainer>


            </div>


        </div>

    );

}