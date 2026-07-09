"use client";


import { useRouter } from "next/navigation";



export default function JobCard({

    job

}){


    const router = useRouter();





    const getStatusStyle = ()=>{


        if(job.status === "active"){

            return "bg-emerald-100 text-emerald-700";

        }


        if(job.status === "paused"){

            return "bg-yellow-100 text-yellow-700";

        }


        return "bg-red-100 text-red-700";


    };







    return (


        <div


            className="
            
            bg-white
            
            border
            
            border-slate-200
            
            rounded-3xl
            
            p-6
            
            sm:p-7
            
            shadow-sm
            
            hover:shadow-md
            
            hover:-translate-y-1
            
            transition-all
            
            duration-200
            
            "


        >





            <div

                className="
                
                flex
                
                flex-col
                
                lg:flex-row
                
                lg:items-center
                
                lg:justify-between
                
                gap-6
                
                "

            >





                {/* Job Information */}



                <div

                    className="
                    
                    flex-1
                    
                    "

                >





                    <h2

                        className="
                        
                        text-xl
                        
                        sm:text-2xl
                        
                        font-bold
                        
                        text-gray-800
                        
                        "

                    >

                        {job.jobTitle}

                    </h2>






                    <div

                        className="
                        
                        flex
                        
                        flex-wrap
                        
                        gap-2
                        
                        mt-4
                        
                        "

                    >



                        <span

                            className="
                            
                            px-3
                            
                            py-1.5
                            
                            rounded-full
                            
                            text-sm
                            
                            bg-emerald-50
                            
                            text-emerald-700
                            
                            "

                        >

                            {job.department}

                        </span>





                        <span

                            className="
                            
                            px-3
                            
                            py-1.5
                            
                            rounded-full
                            
                            text-sm
                            
                            bg-slate-100
                            
                            text-slate-700
                            
                            "

                        >

                            {job.employmentType}

                        </span>






                        <span

                            className="
                            
                            px-3
                            
                            py-1.5
                            
                            rounded-full
                            
                            text-sm
                            
                            bg-blue-50
                            
                            text-blue-700
                            
                            "

                        >

                            {job.location}

                        </span>




                    </div>









                    {/* Details */}



                    <div

                        className="
                        
                        grid
                        
                        grid-cols-1
                        
                        sm:grid-cols-2
                        
                        gap-4
                        
                        mt-6
                        
                        "

                    >





                        <div>

                            <p className="text-sm text-gray-500">

                                Applicants

                            </p>


                            <p className="font-semibold text-gray-800">

                                👥 0 Applicants

                            </p>


                        </div>







                        <div>

                            <p className="text-sm text-gray-500">

                                Deadline

                            </p>


                            <p className="font-semibold text-gray-800">

                                {new Date(job.deadline)
                                .toLocaleDateString()}

                            </p>


                        </div>







                    </div>





                </div>









                {/* Right Side */}



                <div

                    className="
                    
                    flex
                    
                    flex-col
                    
                    lg:items-end
                    
                    gap-5
                    
                    "

                >





                    {/* Status */}



                    <span

                        className={`

                        px-4

                        py-2

                        rounded-full

                        text-sm

                        font-semibold

                        capitalize

                        ${getStatusStyle()}

                        `}

                    >

                        {job.status}

                    </span>









                    {/* Actions */}



                    <div

                        className="
                        
                        flex
                        
                        flex-wrap
                        
                        gap-3
                        
                        "

                    >




                        <button

                        
                            onClick={()=>


                                router.push(

                                    `/employer/jobs/view/${job._id}`

                                )}


                            className="
                            
                            px-4
                            
                            py-2
                            
                            rounded-xl
                            
                            bg-blue-50
                            
                            text-blue-700
                            
                            font-medium
                            
                            hover:bg-blue-100
                            
                            transition
                            
                            "

                        >

                            View

                        </button>







                        <button


                            onClick={()=>


                                router.push(

                                    `/employer/jobs/edit/${job._id}`

                                )

                            }



                            className="
                            
                            px-4
                            
                            py-2
                            
                            rounded-xl
                            
                            bg-emerald-600
                            
                            text-white
                            
                            font-medium
                            
                            hover:bg-emerald-700
                            
                            transition
                            
                            "

                        >

                            Edit

                        </button>







                        <button

                            className="
                            
                            px-4
                            
                            py-2
                            
                            rounded-xl
                            
                            bg-red-50
                            
                            text-red-600
                            
                            font-medium
                            
                            hover:bg-red-100
                            
                            transition
                            
                            "

                        >

                            Delete

                        </button>




                    </div>







                </div>







            </div>





        </div>


    );


}