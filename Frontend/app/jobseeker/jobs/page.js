"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";

import JobsTopBar from "@/Components/jobseeker/jobs/topBar";
import JobsHero from "@/Components/jobseeker/jobs/hero";
import SearchFilters from "@/Components/jobseeker/jobs/searchFilters";
import JobsGrid from "@/Components/jobseeker/jobs/jobsGrid";
import JobsLoading from "@/Components/jobseeker/jobs/jobsLoading";
import EmptyJobs from "@/Components/jobseeker/jobs/empty";

export default function JobsPage(){

    const router = useRouter();

    const [filters, setFilters] = useState({

    search: "",

    location: "",

    type: "",

    experience: ""

});

    const [jobs,setJobs] = useState([]);

    const [filteredJobs, setFilteredJobs] = useState([]);

    const [loading,setLoading] = useState(true);



    useEffect(()=>{

        getJobs();

    },[]);



    const getJobs = async()=>{


        try{


            setLoading(true);



            const token = localStorage.getItem("token");



            const response = await axios.get(

                "http://localhost:5000/jobseeker/jobs",

                {

                    headers:{

                        Authorization:`Bearer ${token}`

                    }

                }

            );



            setJobs(

                response.data.jobs

            );

           

setFilteredJobs(response.data.jobs);


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



                    router.push("/jobseeker/login");

                }



                else if(status === 403){



                    toast.error(

                        message ||

                        "You are not authorized to access this page"

                    );



                    router.push("/");

                }



                else if(status === 404){



                    toast.error(

                        message ||

                        "Jobs not found"

                    );

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

    const filterJobs = () => {

    let result = [...jobs];



    // Search

    if (filters.search.trim()) {

        const keyword = filters.search.toLowerCase();



        result = result.filter((job) => {

            const matchesTitle =

                job.jobTitle
                    ?.toLowerCase()
                    .includes(keyword);



            const matchesCompany =

                job.companyName
                    ?.toLowerCase()
                    .includes(keyword);



            const matchesDepartment =

                job.department
                    ?.toLowerCase()
                    .includes(keyword);



            const matchesSkills =

                job.skills?.some((skill)=>

                    skill
                        .toLowerCase()
                        .includes(keyword)

                );



            return (

                matchesTitle ||

                matchesCompany ||

                matchesDepartment ||

                matchesSkills

            );

        });

    }



    // Location

    if(filters.location){

        result = result.filter(

            (job)=>

                job.location===filters.location

        );

    }



    // Employment Type

    if(filters.type){

        result = result.filter(

            (job)=>

                job.employmentType===filters.type

        );

    }



    // Experience Level

    if(filters.experience){

        result = result.filter(

            (job)=>

                job.experienceLevel===filters.experience

        );

    }



    setFilteredJobs(result);

};


const resetFilters = () => {

    setFilters({

        search: "",

        location: "",

        type: "",

        experience: ""

    });

    setFilteredJobs(jobs);

};



    return(


        <div className="min-h-screen bg-slate-50">


            <JobsTopBar/>


            <JobsHero/>


            <SearchFilters 
            
            filters={filters}
            
            setFilters={setFilters}

            onSearch={filterJobs}

            onReset={resetFilters}
            />


            {

                loading ?


                <JobsLoading/>


                :


                jobs.length === 0 ?


                <EmptyJobs/>


                :


                <JobsGrid

                    jobs={filteredJobs}

                />

            }


        </div>


    );

}