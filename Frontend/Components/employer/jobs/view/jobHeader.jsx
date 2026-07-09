"use client";


import { useRouter } from "next/navigation";



export default function JobHeader({

    job

}){


    const router = useRouter();





    const statusStyle = {


        active:
        "bg-green-100 text-green-700",


        paused:
        "bg-yellow-100 text-yellow-700",


        closed:
        "bg-red-100 text-red-700"


    };






    return (


        <div

            className="
            
            bg-emerald-50/60
            
            border
            
            border-emerald-100
            
            rounded-3xl
            
            p-6
            
            sm:p-8
            
            shadow-sm
            
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






                {/* Left Section */}



                <div>


                    <h1

                        className="
                        
                        text-2xl
                        
                        sm:text-3xl
                        
                        font-bold
                        
                        text-gray-800
                        
                        "

                    >

                        {job.jobTitle}

                    </h1>





                    <div

                        className="
                        
                        flex
                        
                        flex-wrap
                        
                        gap-3
                        
                        mt-4
                        
                        "

                    >





                        <span

                            className="
                            
                            px-4
                            
                            py-2
                            
                            rounded-full
                            
                            bg-white
                            
                            text-gray-700
                            
                            text-sm
                            
                            border
                            
                            border-gray-200
                            
                            "

                        >

                            {job.department}

                        </span>






                        <span

                            className="
                            
                            px-4
                            
                            py-2
                            
                            rounded-full
                            
                            bg-white
                            
                            text-gray-700
                            
                            text-sm
                            
                            border
                            
                            border-gray-200
                            
                            "

                        >

                            {job.employmentType}

                        </span>







                        <span

                            className="
                            
                            px-4
                            
                            py-2
                            
                            rounded-full
                            
                            bg-white
                            
                            text-gray-700
                            
                            text-sm
                            
                            border
                            
                            border-gray-200
                            
                            "

                        >

                            {job.location}

                        </span>








                        <span

                            className="
                            
                            px-4
                            
                            py-2
                            
                            rounded-full
                            
                            bg-white
                            
                            text-gray-700
                            
                            text-sm
                            
                            border
                            
                            border-gray-200
                            
                            "

                        >

                            {job.workMode}

                        </span>






                    </div>




                </div>









                {/* Right Section */}



                <div

                    className="
                    
                    flex
                    
                    flex-col
                    
                    sm:flex-row
                    
                    lg:flex-col
                    
                    gap-4
                    
                    "

                >





                    <span

                        className={`
                        
                        px-5
                        
                        py-2.5
                        
                        rounded-full
                        
                        text-sm
                        
                        font-semibold
                        
                        text-center
                        
                        ${

                            statusStyle[job.status]

                        }

                        `}

                    >

                        {

                            job.status.charAt(0).toUpperCase()

                            +

                            job.status.slice(1)

                        }

                    </span>







                    <button


                        onClick={()=>


                            router.push(

                                `/employer/jobs/edit/${job._id}`

                            )


                        }



                        className="
                        
                        px-6
                        
                        py-3
                        
                        rounded-2xl
                        
                        bg-emerald-600
                        
                        text-white
                        
                        font-semibold
                        
                        hover:bg-emerald-700
                        
                        transition
                        
                        shadow-sm
                        
                        "

                    >

                        Edit Job

                    </button>







                </div>





            </div>









            {/* Bottom Information */}



            <div

                className="
                
                mt-8
                
                pt-6
                
                border-t
                
                border-emerald-100
                
                flex
                
                flex-wrap
                
                gap-6
                
                text-sm
                
                text-gray-600
                
                "

            >




                <div>


                    <span className="font-medium text-gray-800">

                        Posted:

                    </span>


                    {" "}

                    {

                        new Date(job.createdAt)

                        .toLocaleDateString()

                    }


                </div>





                <div>


                    <span className="font-medium text-gray-800">

                        Deadline:

                    </span>


                    {" "}

                    {

                        new Date(job.deadline)

                        .toLocaleDateString()

                    }


                </div>





            </div>





        </div>


    );


}