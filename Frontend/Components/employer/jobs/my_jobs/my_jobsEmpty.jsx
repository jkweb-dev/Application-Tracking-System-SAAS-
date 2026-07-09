"use client";


import { useRouter } from "next/navigation";



export default function EmptyJobs(){


    const router = useRouter();




    return (


        <div

            className="
            
            bg-emerald-50
            
            border
            
            border-emerald-100
            
            rounded-3xl
            
            p-8
            
            sm:p-12
            
            text-center
            
            "

        >





            {/* Icon */}



            <div

                className="
                
                w-20
                
                h-20
                
                mx-auto
                
                rounded-full
                
                bg-emerald-100
                
                flex
                
                items-center
                
                justify-center
                
                text-4xl
                
                "

            >

                📄


            </div>







            <h2

                className="
                
                mt-6
                
                text-2xl
                
                sm:text-3xl
                
                font-bold
                
                text-gray-800
                
                "

            >

                No Jobs Posted Yet

            </h2>







            <p

                className="
                
                mt-3
                
                text-gray-600
                
                max-w-md
                
                mx-auto
                
                "

            >

                Start building your hiring pipeline by
                creating your first job opening.

            </p>







            <button


                onClick={()=>router.push("/employer/jobs/create")}



                className="
                
                mt-7
                
                px-7
                
                py-3.5
                
                rounded-2xl
                
                bg-emerald-600
                
                text-white
                
                font-semibold
                
                hover:bg-emerald-700
                
                transition
                
                shadow-md
                
                "

            >

                + Create Your First Job


            </button>







        </div>


    );


}