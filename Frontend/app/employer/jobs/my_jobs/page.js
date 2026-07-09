"use client";


import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";


import MyJobsHeader from "@/Components/employer/jobs/my_jobs/my_jobsHeader";

import JobFilters from "@/Components/employer/jobs/my_jobs/my_jobsFilter";

import JobCard from "@/Components/employer/jobs/my_jobs/my_jobsCard";

import EmptyJobs from "@/Components/employer/jobs/my_jobs/my_jobsEmpty";





export default function MyJobsPage(){



    const router = useRouter();




    const [jobs,setJobs] = useState([]);



    const [loading,setLoading] = useState(true);




    const fetchJobs = async()=>{


        try{


            const token = localStorage.getItem("token");



            const response = await axios.get(

                "http://localhost:5000/jobs/getEmployerJobs",

                {

                    headers:{

                        Authorization:`Bearer ${token}`

                    }

                }

            );



            setJobs(response.data.jobs);



        }



        catch(error){

console.log(error)

            if(error.response){


                const status = error.response.status;


                const message = error.response?.data?.message;



                if(status === 401){


                    localStorage.removeItem("token");


                    toast.error(
                        message || "Session expired"
                    );


                    router.push("/");


                }



                else if(status === 404){


                    toast.error(
                        message || "Jobs not found"
                    );


                }



                else if(status === 500){


                    toast.error(
                        message || "Server error"
                    );


                }



                else{


                    toast.error(
                        message || "Something went wrong"
                    );


                }



            }



            else{


                toast.error(
                    "Unable to connect to server"
                );


            }



        }



        finally{


            setLoading(false);


        }


    };







    useEffect(()=>{


        fetchJobs();


    },[]);







    return (



        <div

            className="
            
            min-h-screen
            
            bg-slate-50
            
            p-4
            
            sm:p-6
            
            lg:p-8
            
            "

        >



            <div

                className="
                
                max-w-7xl
                
                mx-auto
                
                space-y-8
                
                "

            >





                <MyJobsHeader />





                <JobFilters

                    totalJobs={jobs.length}

                />







                {

                    loading ?


                    (


                        <div

                            className="
                            
                            text-center
                            
                            py-20
                            
                            text-gray-500
                            
                            "

                        >

                            Loading jobs...

                        </div>


                    )



                    :



                    jobs.length === 0 ?



                    (


                        <EmptyJobs />


                    )



                    :



                    (


                        <div

                            className="
                            
                            grid
                            
                            grid-cols-1
                            
                            gap-6
                            
                            "

                        >



                            {

                                jobs.map((job)=>(


                                    <JobCard

                                        key={job._id}

                                        job={job}

                                    />


                                ))

                            }



                        </div>


                    )

                }





            </div>




        </div>


    );


}