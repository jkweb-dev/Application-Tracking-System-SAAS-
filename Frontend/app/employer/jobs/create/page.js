"use client";

import { useState } from "react";

import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

import JobHeader from "@/Components/employer/jobs/create/jobheader";
import JobBasicInfo from "@/Components/employer/jobs/create/jobbasicinfo";
import WorkplaceInfo from "@/Components/employer/jobs/create/workplaceinfo";
import JobDescription from "@/Components/employer/jobs/create/jobdescription";
import JobRequirements from "@/Components/employer/jobs/create/jobrequirement";
import JobCompensation from "@/Components/employer/jobs/create/jobcompansation";
import JobActions from "@/Components/employer/jobs/create/jobactions";


export default function CreateJobPage() {


    const router = useRouter()
    const [errors, setErrors] = useState({});
    const [jobData,setJobData] = useState({


        jobTitle:"",

        department:"",

        employmentType:"",


        location:"",

        workMode:"",


        description:"",

        requirements:"",


        skills:[],


        experienceLevel:"",


        salaryMin:"",

        salaryMax:"",

        currency:"PKR",


        deadline:"",


        vacancies:"",


        status:"active"


    });





    const [loading,setLoading] = useState(false);





    const handleChange = (e)=>{


        setErrors({})

        const {name,value} = e.target;



        setJobData((prev)=>({


            ...prev,


            [name]:value


        }));


    };





    const handleSkills = (skills)=>{

        setErrors({})

        setJobData((prev)=>({


            ...prev,


            skills


        }));


    };

const validateForm = () => {

    const newErrors = {};



    // Job Title

    if (!jobData.jobTitle.trim()) {

        newErrors.jobTitle = "Job title is required.";

    }



    // Department

    if (!jobData.department) {

        newErrors.department = "Department is required.";

    }



    // Employment Type

    if (!jobData.employmentType) {

        newErrors.employmentType = "Employment type is required.";

    }



    // Location

    if (!jobData.location.trim()) {

        newErrors.location = "Location is required.";

    }



    // Work Mode

    if (!jobData.workMode) {

        newErrors.workMode = "Work mode is required.";

    }



    // Description

    if (!jobData.description.trim()) {

        newErrors.description = "Job description is required.";

    }

    else if (jobData.description.trim().length < 50) {

        newErrors.description = "Description must be at least 50 characters.";

    }



    // Requirements

    if (!jobData.requirements.trim()) {

        newErrors.requirements = "Requirements are required.";

    }

    else if (jobData.requirements.trim().length < 50) {

        newErrors.requirements = "Requirements must be at least 50 characters.";

    }



    // Skills

    if (jobData.skills.length === 0) {

        newErrors.skills = "Please add at least one skill.";

    }



    // Experience Level

    if (!jobData.experienceLevel) {

        newErrors.experienceLevel = "Experience level is required.";

    }



    // Minimum Salary

    if (!jobData.salaryMin) {

        newErrors.salaryMin = "Minimum salary is required.";

    }

    else if (Number(jobData.salaryMin) < 0) {

        newErrors.salaryMin = "Minimum salary cannot be negative.";

    }



    // Maximum Salary

    if (!jobData.salaryMax) {

        newErrors.salaryMax = "Maximum salary is required.";

    }

    else if (Number(jobData.salaryMax) < Number(jobData.salaryMin)) {

        newErrors.salaryMax = "Maximum salary must be greater than minimum salary.";

    }



    // Currency

    if (!jobData.currency) {

        newErrors.currency = "Currency is required.";

    }



    // Deadline

    if (!jobData.deadline) {

        newErrors.deadline = "Application deadline is required.";

    }

    else {

        const today = new Date();

        today.setHours(0,0,0,0);

        const deadline = new Date(jobData.deadline);

        if (deadline < today) {

            newErrors.deadline = "Deadline cannot be in the past.";

        }

    }



    // Vacancies

    if (!jobData.vacancies) {

        newErrors.vacancies = "Number of vacancies is required.";

    }

    else if (Number(jobData.vacancies) < 1) {

        newErrors.vacancies = "Vacancies must be at least 1.";

    }



    // Status

    if (!jobData.status) {

        newErrors.status = "Job status is required.";

    }



    setErrors(newErrors);



    return Object.keys(newErrors).length === 0;

};





    const handleSubmit = async () => {

        const valid = validateForm() ;

        if (!valid) {
            return ;
        }


    try {

        setLoading(true);

        const token = localStorage.getItem("token");

        const response = await axios.post(

            "http://localhost:5000/jobs/create",

            jobData,

            {

                headers: {

                    Authorization: `Bearer ${token}`

                }

            }

        );

        if (response.status === 201 || 200) {
             toast.success(response.data.message);

        
        }
       

        // Later:
        // router.push("/employer/jobs");

    }

    catch (error) {

        if (error.response) {

            const status = error.response.status;

            const message = error.response.data.message;

            if (status === 401) {

                localStorage.removeItem("token");

                toast.error(message || "Session expired");

                router.push("/");

                return ;
            }

            else if (status === 404) {

                toast.error(message || "Resource not found");

            }

            else if (status === 500) {

                toast.error(message || "Internal Server Error");

            }

            else {

                toast.error(message || "Something went wrong");

            }

        }

        else if (error.request) {

            toast.error("Unable to connect to server.");

        }

        else {

            toast.error("Something went wrong.");

        }

    }

    finally {

        setLoading(false);

    }

};

    return (


        <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">


            <div className="max-w-6xl mx-auto space-y-8">



                {/* Page Header */}


                <JobHeader 
                
                title="Create Job"

    subtitle="Post a new opportunity and reach the right candidates."/>





                {/* Basic Information */}


                <JobBasicInfo

                    jobData={jobData}

                    handleChange={handleChange}

                    errors = {errors}

                />





                {/* Workplace */}


                <WorkplaceInfo

                    jobData={jobData}

                    handleChange={handleChange}

                      errors = {errors}

                />






                {/* Description */}


                <JobDescription

                    jobData={jobData}

                    handleChange={handleChange}

                      errors = {errors}

                />






                {/* Requirements */}


                <JobRequirements

                    jobData={jobData}

                    handleChange={handleChange}

                    handleSkills={handleSkills}

                      errors = {errors}

                      setErrors = {setErrors}

                />






                {/* Compensation */}


                <JobCompensation

                    jobData={jobData}

                    handleChange={handleChange}

                      errors = {errors}

                />







                {/* Actions */}


                <JobActions

                    loading={loading}


                    handleSubmit={handleSubmit}

                      buttonText="Create Job"

                      

                />





            </div>



        </div>


    );

}