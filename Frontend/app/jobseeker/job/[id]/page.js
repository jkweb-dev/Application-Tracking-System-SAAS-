"use client";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

import JobHeader from "@/Components/jobseeker/jobs/jobDetailspage/header";
import JobOverview from "@/Components/jobseeker/jobs/jobDetailspage/jobOverview";
import JobDescription from "@/Components/jobseeker/jobs/jobDetailspage/jobDescription";
import JobRequirements from "@/Components/jobseeker/jobs/jobDetailspage/jobRequirements";
import SkillsList from "@/Components/jobseeker/jobs/jobDetailspage/skillsList";
import ApplyCard from "@/Components/jobseeker/jobs/jobDetailspage/applyCard";


export default function JobDetailsPage(){


    const params = useParams();

    const router = useRouter();


    const jobId = params.id;


    const [applying, setApplying] = useState(false);

const [alreadyApplied, setAlreadyApplied] = useState(false);

    const [job,setJob] = useState(null);


    const [loading,setLoading] = useState(true);



    useEffect(()=>{


        if(jobId){

            getJobDetails();

        }


    },[jobId]);





    const getJobDetails = async()=>{


        try{


            setLoading(true);



            const token = localStorage.getItem("token");



            const response = await axios.get(

                `http://localhost:5000/jobseeker/jobs/${jobId}`,

                {

                    headers:{

                        Authorization:`Bearer ${token}`

                    }

                }

            );



            setJob(

                response.data.job

            );



        }



        catch(error){



            if(error.response){



                const status = error.response.status;



                const message =

                    error.response.data?.message;




                if(status === 401){


                    localStorage.removeItem("token");


                    toast.error(

                        message ||

                        "Session expired. Please login again"

                    );


                    router.push("/");


                }



                else if(status === 403){



                    toast.error(

                        message ||

                        "You are not allowed to view this job"

                    );


                    router.push("/");


                }




                else if(status === 404){



                    toast.error(

                        message ||

                        "Job not found"

                    );


                    router.push("/");


                }




                else if(status === 500){



                    toast.error(

                        message ||

                        "Server error. Please try again later"

                    );


                }



                else{



                    toast.error(

                        message ||

                        "Something went wrong"

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


    const handleApply = async (jobId) => {

    try {

        setApplying(true);

        const token = localStorage.getItem("token");

        if (!token) {

            toast.error("Please login first");

            router.push("/");

            return;

        }

        const response = await axios.post(

            `http://localhost:5000/jobseeker/apply/${jobId}`,

            {},

            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

        );

        toast.success(response.data.message);

        setAlreadyApplied(true);

    }

    catch (error) {

        console.log(error);

        if (!error.response) {

            toast.error(
                "Network error. Please check your internet connection."
            );

            return;

        }

        const status = error.response.status;

        const message =
            error.response.data?.message ||
            "Something went wrong";

        switch (status) {

            case 400:
                toast.error(message);
                break;

            case 401:
                toast.error("Session expired. Please login again.");
                localStorage.removeItem("token");
                router.push("/");
                break;

            case 403:
                toast.error("Access denied.");
                break;

            case 404:
                toast.error(message);
                break;

            case 409:
                toast.error(message);
                setAlreadyApplied(true);
                break;

            case 500:
                toast.error("Internal server error. Please try again later.");
                break;

            default:
                toast.error(message);

        }

    }

    finally {

        setApplying(false);

    }

};





    if(loading){


        return(

            <div className="flex min-h-screen items-center justify-center">

                <p className="text-slate-500">

                    Loading job details...

                </p>

            </div>

        );


    }




    if(!job){


        return null;


    }





    return(


        <div className="min-h-screen bg-slate-50">


            <JobHeader

                job={job}

            />



            <main className="mx-auto max-w-7xl px-6 py-10">


                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">



                    {/* Left Content */}


                    <div className="space-y-8 lg:col-span-2">


                        <JobOverview

                            job={job}

                        />



                        <JobDescription

                            description={job.description}

                        />



                        <JobRequirements

                            requirements={job.requirements}

                        />



                        <SkillsList

                            skills={job.skills}

                        />


                    </div>





                    {/* Right Side */}


                    <div>


                        <ApplyCard

                            job={job}

                            handleApply = {handleApply}

                            applying = {applying}

                            alreadyApplied = {alreadyApplied}

                        />


                    </div>



                </div>


            </main>



        </div>


    );


}