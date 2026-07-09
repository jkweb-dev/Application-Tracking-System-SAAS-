"use client";


import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";


import JobHeader from "@/Components/employer/jobs/view/jobHeader";

import JobDescription from "@/Components/employer/jobs/view/jobDescription";

import JobRequirements from "@/Components/employer/jobs/view/jobRequirement";

import JobSkills from "@/Components/employer/jobs/view/jobSkills";

import JobSummary from "@/Components/employer/jobs/view/jobSummary";

import JobCompensation from "@/Components/employer/jobs/view/jobCompensation";





export default function ViewJobPage(){


    const params = useParams();

    const router = useRouter();


    const id = params.id;



    const [job,setJob] = useState(null);


    const [loading,setLoading] = useState(true);







    const fetchJob = async()=>{


        try{


            const token = localStorage.getItem("token");



            const response = await axios.get(

                `http://localhost:5000/jobs/${id}`,

                {

                    headers:{

                        Authorization:`Bearer ${token}`

                    }

                }

            );



            setJob(response.data.job);



        }

        catch(error){


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
                        message || "Job not found"
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


        if(id){

            fetchJob();

        }


    },[id]);







    if(loading){


        return (

            <div className="min-h-screen flex items-center justify-center bg-slate-50">

                <p className="text-gray-500">

                    Loading job details...

                </p>

            </div>

        );


    }





    if(!job){


        return (

            <div className="min-h-screen flex items-center justify-center bg-slate-50">

                <p className="text-gray-500">

                    Job not found

                </p>

            </div>

        );


    }








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
                
                space-y-6
                
                "

            >




                <JobHeader

                    job={job}

                />






                <div

                    className="
                    
                    grid
                    
                    grid-cols-1
                    
                    lg:grid-cols-3
                    
                    gap-6
                    
                    "

                >




                    <div

                        className="
                        
                        lg:col-span-2
                        
                        space-y-6
                        
                        "

                    >



                        <JobDescription

                            job={job}

                        />



                        <JobRequirements

                            job={job}

                        />



                        <JobSkills

                            job={job}

                        />



                    </div>







                    <div

                        className="
                        
                        space-y-6
                        
                        "

                    >



                        <JobSummary

                            job={job}

                        />



                        <JobCompensation

                            job={job}

                        />



                    </div>





                </div>




            </div>




        </div>


    );


}