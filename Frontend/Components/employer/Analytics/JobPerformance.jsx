import EmptyState from "./EmptyState";

export default function JobPerformanceTable({

    data=[]

}) {



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

Job Performance

</h2>


<div className="mt-6">

<EmptyState

icon="💼"

title="No jobs available"

description="
Create jobs to track their performance.
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


                <h2

                    className="
                        text-xl
                        font-bold
                        text-slate-900
                    "

                >

                    Job Performance

                </h2>



                <p

                    className="
                        mt-1
                        text-sm
                        text-slate-500
                    "

                >

                    Jobs receiving the most applications

                </p>


            </div>





            <div

                className="
                    overflow-x-auto
                "

            >


                <table

                    className="
                        w-full
                        text-left
                    "

                >

                    <thead>


                        <tr

                            className="
                                border-b
                                text-sm
                                text-slate-500
                            "

                        >

                            <th className="pb-4">

                                Job Title

                            </th>


                            <th className="pb-4">

                                Applicants

                            </th>


                            <th className="pb-4">

                                Performance

                            </th>


                        </tr>


                    </thead>



                    <tbody>


                        {

                            data.map((job,index)=>(


                                <tr

                                    key={index}

                                    className="
                                        border-b
                                        last:border-none
                                    "

                                >

                                    <td

                                        className="
                                            py-4
                                            font-medium
                                            text-slate-800
                                        "

                                    >

                                        {job.title}


                                    </td>



                                    <td

                                        className="
                                            py-4
                                            text-slate-600
                                        "

                                    >

                                        {job.applicants}


                                    </td>




                                    <td

                                        className="
                                            py-4
                                        "

                                    >

                                        <div

                                            className="
                                                h-2
                                                w-32
                                                rounded-full
                                                bg-slate-200
                                            "

                                        >

                                            <div

                                                className="
                                                    h-full
                                                    rounded-full
                                                    bg-indigo-600
                                                "

                                                style={{

                                                    width:

                                                    `${Math.min(
                                                        
                                                        job.applicants,

                                                        100

                                                    )}%`

                                                }}

                                            />


                                        </div>


                                    </td>


                                </tr>


                            ))

                        }


                    </tbody>


                </table>


            </div>


        </section>

    );

}