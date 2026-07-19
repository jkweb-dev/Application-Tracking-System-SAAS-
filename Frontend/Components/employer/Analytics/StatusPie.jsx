"use client";

import EmptyState from "./EmptyState";

import {

    PieChart,

    Pie,

    Cell,

    Tooltip,

    ResponsiveContainer,

    Legend

} from "recharts";



export default function StatusPieChart({

    data=[]

}) {

    const COLORS = [

    "#6366f1", // Applied
    "#f59e0b", // Under Review
    "#8b5cf6", // Shortlisted
    "#06b6d4", // Interview
    "#22c55e", // Accepted
    "#ef4444"  // Rejected

];


    if(!data || data.length===0){

return (

<div className="
rounded-3xl
border
bg-white
p-6
">

<h2 className="
text-xl
font-bold
">

Application Status

</h2>


<div className="mt-6">

<EmptyState

icon="👥"

title="No candidates"

description="
Your candidate status distribution
will appear here.
"

/>

</div>


</div>

)

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

                    Application Status

                </h2>



                <p

                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "

                >

                    Current candidate distribution

                </p>


            </div>





            <div

                className="
                    h-[350px]
                "

            >

                <ResponsiveContainer

                    width="100%"

                    height="100%"

                >

                    <PieChart>


                        <Pie

                            data={data}

                            dataKey="count"

                            nameKey="status"

                            cx="50%"

                            cy="50%"

                            innerRadius={70}

                            outerRadius={110}

                            paddingAngle={5}

                            animationDuration={1000}

                        >


                           {
    data.map(

        (entry,index)=>(

            <Cell

                key={index}

                fill={COLORS[index % COLORS.length]}

            />

        )

    )
}


                        </Pie>



                        <Tooltip />


                        <Legend />



                    </PieChart>


                </ResponsiveContainer>


            </div>


        </div>

    );

}