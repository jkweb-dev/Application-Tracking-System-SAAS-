"use client";


import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";


import MyJobsHeader from "@/Components/employer/jobs/my_jobs/my_jobsHeader";

import JobFilters from "@/Components/employer/jobs/my_jobs/my_jobsFilter";

import JobCard from "@/Components/employer/jobs/my_jobs/my_jobsCard";

import EmptyJobs from "@/Components/employer/jobs/my_jobs/my_jobsEmpty";

import ConfirmationDialog from "@/Components/confirmationDialogBox";





export default function MyJobsPage(){



    const router = useRouter();

const [search, setSearch] = useState("");


    const [jobs,setJobs] = useState([]);



    const [loading,setLoading] = useState(true);

    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);


const [selectedJob, setSelectedJob] = useState(null);


const [deleteLoading, setDeleteLoading] = useState(false);


const handleDeleteClick = (job)=>{


    setSelectedJob(job);


    setOpenDeleteDialog(true);


};


const handleDeleteJob = async()=>{


    try{


        setDeleteLoading(true);


        const token = localStorage.getItem("token");



        await axios.delete(

            `http://localhost:5000/jobs/${selectedJob._id}`,

            {

                headers:{

                    Authorization:`Bearer ${token}`

                }

            }

        );



        
        toast.success("Job deleted successfully");



        // remove job from UI

       setJobs((prev)=>

            prev.filter(

                (job)=>

                job._id !== selectedJob._id

            )

        );


        setOpenDeleteDialog(false);


        setSelectedJob(null);



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


        setDeleteLoading(false);


    }


};


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



const filteredJobs = jobs.filter((job) => {

    if (!search.trim()) {

        return true;

    }

    return job.jobTitle
        .toLowerCase()
        .includes(search.toLowerCase().trim());

});

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

                search={search}

    setSearch={setSearch}

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

                                filteredJobs.map((job)=>(


                                    <JobCard

                                        key={job._id}

                                        job={job}

                                        handleDeleteClick = {handleDeleteClick}

                                    />


                                ))

                            }



                        </div>


                    )

                }





            </div>





<ConfirmationDialog

    open={openDeleteDialog}


    title="Delete Job"


    message={

        `Are you sure you want to delete 
        ${selectedJob?.jobTitle}? 
        This action cannot be undone.`

    }


    confirmText="Delete"


    cancelText="Cancel"


    loading={deleteLoading}


    onConfirm={handleDeleteJob}


    onCancel={()=>{

        setOpenDeleteDialog(false);

        setSelectedJob(null);

    }}

/>



        </div>


    );


}