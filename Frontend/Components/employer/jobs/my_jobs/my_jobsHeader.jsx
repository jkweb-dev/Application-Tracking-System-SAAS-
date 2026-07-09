"use client";


import { useRouter } from "next/navigation";



export default function MyJobsHeader(){



    const router = useRouter();




    return (


        <div

            className="
            
            bg-emerald-50
            
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







                {/* Left Content */}



                <div>



                    <h1

                        className="
                        
                        text-3xl
                        
                        sm:text-4xl
                        
                        font-bold
                        
                        tracking-tight
                        
                        text-gray-800
                        
                        "

                    >

                        My Jobs

                    </h1>





                    <p

                        className="
                        
                        mt-2
                        
                        text-gray-600
                        
                        max-w-xl
                        
                        text-sm
                        
                        sm:text-base
                        
                        "

                    >

                        Manage all your company's job postings,
                        track openings, and keep your hiring
                        process organized.

                    </p>



                </div>










                {/* Button */}



                <button


                    onClick={()=>router.push("/employer/jobs/create")}



                    className="
                    
                    w-full
                    
                    sm:w-auto
                    
                    px-7
                    
                    py-3.5
                    
                    rounded-2xl
                    
                    bg-emerald-600
                    
                    text-white
                    
                    font-semibold
                    
                    shadow-md
                    
                    hover:bg-emerald-700
                    
                    hover:shadow-lg
                    
                    transition-all
                    
                    duration-200
                    
                    "

                >


                    + Create New Job


                </button>








            </div>







        </div>


    );


}