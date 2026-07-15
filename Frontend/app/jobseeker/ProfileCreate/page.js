"use client";


import { useState } from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";


// Components

import ProfileHeader from "@/Components/jobseeker/ProfileCreate/Header";

import ProfileProgress from "@/Components/jobseeker/ProfileCreate/ProfileProgree";

import PersonalInformation from "@/Components/jobseeker/ProfileCreate/PersonalInfo";

import ProfessionalInformation from "@/Components/jobseeker/ProfileCreate/ProfessionalInfo";

import SkillsSection from "@/Components/jobseeker/ProfileCreate/SkillsSection";

import EducationSection from "@/Components/jobseeker/ProfileCreate/Education";

import ExperienceSection from "@/Components/jobseeker/ProfileCreate/Experience";

import ResumeUpload from "@/Components/jobseeker/ProfileCreate/ResumeUpload";





export default function ProfilePage(){


    const router = useRouter();



    const [loading,setLoading] = useState(false);



    const [resumeFile,setResumeFile] = useState(null);




    const [errors,setErrors] = useState({});





    const [formData,setFormData] = useState({


        firstName:"",

        lastName:"",

        email:"",

        phone:"",

        location:"",



        headline:"",

        bio:"",

        experienceLevel:"",

        yearsOfExperience:"",



        skills:[],




        education:[

            {

                degree:"",

                institute:"",

                field:"",

                startYear:"",

                endYear:""

            }

        ],





        experience:[

            { 

                company:"",

                position:"",

                description:"",

                startDate:"",

                endDate:""

            }

        ]



    });







    // Normal fields


    const handleChange=(e)=>{

          setErrors({})

        const {

            name,

            value

        }=e.target;




        setFormData(prev=>({

            ...prev,

            [name]:value

        }));



        setErrors(prev=>({


            ...prev,


            [name]:""


        }));


    };








    // Skills


    const handleSkillsChange=(skills)=>{

          setErrors({})

        setFormData(prev=>({

            ...prev,

            skills

        }));


        setErrors(prev=>({

            ...prev,

            skills:""

        }));

    };









    // Education


    const handleEducationChange=(index,e)=>{

          setErrors({})

        const {name,value}=e.target;



        const updated=[...formData.education];



        updated[index][name]=value;



        setFormData(prev=>({

            ...prev,

            education:updated

        }));


    };





    const addEducation=()=>{


        setFormData(prev=>({

            ...prev,

            education:[

                ...prev.education,

                {

                    degree:"",

                    institute:"",

                    field:"",

                    startYear:"",

                    endYear:""

                }

            ]

        }));


    };


    const removeEducation=(index)=>{

    setFormData(prev=>({

        ...prev,

        education:prev.education.filter(
            (_,i)=>i!==index
        )

    }));

};






    // Experience


    const handleExperienceChange=(index,e)=>{

        setErrors({})
        const {name,value}=e.target;



        const updated=[...formData.experience];



        updated[index][name]=value;



        setFormData(prev=>({

            ...prev,

            experience:updated

        }));


    };





    const addExperience=()=>{


        setFormData(prev=>({

            ...prev,

            experience:[

                ...prev.experience,

                {

                    company:"",

                    position:"",

                    description:"",

                    startDate:"",

                    endDate:""

                }

            ]

        }));


    };

    const removeExperience=(index)=>{


    setFormData(prev=>({


        ...prev,


        experience:

            prev.experience.filter(

                (_,i)=>i!==index

            )


    }));


};








    // Resume


    const handleResumeChange=(e)=>{

        setErrors({})

    const file=e.target.files[0];



    if(!file){

        setResumeFile(null);

        return;

    }


    if(file.type !== "application/pdf"){

        setErrors(prev=>({

            ...prev,

            resume:"Only PDF files are allowed"

        }));

        return;

    }



    if(file.size > 5 * 1024 * 1024){

        setErrors(prev=>({

            ...prev,

            resume:"File size must be less than 5MB"

        }));

        return;

    }



    setResumeFile(file);



    setErrors(prev=>({

        ...prev,

        resume:""

    }));


};







    // Percentage


    const calculatePercentage=()=>{


        const fields=[


            formData.firstName,

            formData.lastName,

            formData.email,

            formData.phone,

            formData.location,

            formData.headline,

            formData.bio,

            formData.experienceLevel,

            formData.yearsOfExperience,

            formData.skills.length > 0,

            formData.education[0].degree,

            formData.education[0].institute,

            resumeFile


        ];



        const completed=fields.filter(Boolean).length;



        return Math.round(

            (completed / fields.length) * 100

        );


    };








const validateForm = () => {

      const newErrors = {};

    // Personal Information

    if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";

    if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";

    if (!formData.email.trim())
        newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email))
        newErrors.email = "Please enter a valid email";

    if (!formData.phone.trim())
        newErrors.phone = "Phone number is required";

    if (!formData.location.trim())
        newErrors.location = "Location is required";



    // Professional Information

    if (!formData.headline.trim())
        newErrors.headline = "Professional headline is required";

    if (!formData.bio.trim())
        newErrors.bio = "Professional summary is required";

    if (!formData.experienceLevel)
        newErrors.experienceLevel = "Select experience level";

    if (formData.yearsOfExperience === "")
        newErrors.yearsOfExperience = "Years of experience is required";



    // Skills

    if (formData.skills.length === 0)
        newErrors.skills = "Add at least one skill";



    // Education

    formData.education.forEach((item, index) => {

        if (!item.degree.trim())
            newErrors[`education_degree_${index}`] = "Degree is required";

        if (!item.institute.trim())
            newErrors[`education_institute_${index}`] = "Institute is required";

        if (!item.field.trim())
            newErrors[`education_field_${index}`] = "Field of study is required";

        if (!item.startYear)
            newErrors[`education_startYear_${index}`] = "Start year is required";

        if (!item.endYear)
            newErrors[`education_endYear_${index}`] = "End year is required";

    });



    // Experience

    formData.experience.forEach((item, index) => {

        if (!item.company.trim())
            newErrors[`experience_company_${index}`] = "Company is required";

        if (!item.position.trim())
            newErrors[`experience_position_${index}`] = "Position is required";

        if (!item.description.trim())
            newErrors[`experience_description_${index}`] = "Description is required";

        if (!item.startDate)
            newErrors[`experience_startDate_${index}`] = "Start date is required";

        if (!item.endDate)
            newErrors[`experience_endDate_${index}`] = "End date is required";

    });



    // Resume

    if (!resumeFile)
        newErrors.resume = "Resume is required";



    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

};


    // Validationconst validateForm = () => {

  








    // Submit


    const handleSubmit=async(e)=>{


        e.preventDefault();



        if(!validateForm()){

            return;

        }




        try{


            setLoading(true);




            const token=

                localStorage.getItem("token");





            const data=new FormData();




            data.append(

                "profile",

                JSON.stringify(formData)

            );




            data.append(

                "resume",

                resumeFile

            );






            await axios.post(

                "http://localhost:5000/jobseeker/profile",

                data,

                {

                    headers:{

                        Authorization:`Bearer ${token}`,

                        "Content-Type":"multipart/form-data"

                    }

                }

            );





            toast.success(

                "Profile created successfully"

            );



            router.push("/jobseeker/jobs");



        }




       catch(error){

    console.log(error);


    if(!error.response){

        toast.error(
            "Network error. Please check your internet connection"
        );

        return;

    }



    const status = error.response.status;


    const message =

        error.response.data?.message ||

        "Something went wrong";




    switch(status){


        case 400:

            toast.error(
                message || "Invalid data sent"
            );

            break;



        case 401:

            toast.error(
                "Session expired. Please login again"
            );


            localStorage.removeItem("token");


            router.push("/");


            break;



        case 403:

            toast.error(
                "You don't have permission to perform this action"
            );

            break;



        case 404:

            toast.error(
                "Resource not found"
            );

            break;



        case 409:

            toast.error(
                "Profile already exists"
            );

            break;



        case 413:

            toast.error(
                "File size is too large. Maximum allowed size is 5MB"
            );

            break;



        case 415:

            toast.error(
                "Only PDF files are allowed"
            );

            break;



        case 500:

            toast.error(
                "Server error. Please try again later"
            );

            break;



        default:

            toast.error(
                message
            );

    }

}

        finally{


            setLoading(false);


        }



    };










    return(


        <main

            className="
                min-h-screen
                bg-slate-50
                px-6
                py-10
            "

        >


            <ProfileHeader/>




            <ProfileProgress

                percentage={calculatePercentage()}

            />





            <form

                onSubmit={handleSubmit}

                className="
                    mx-auto
                    mt-8
                    max-w-6xl
                    space-y-8
                "

            >



                <PersonalInformation

                    formData={formData}

                    errors={errors}

                    handleChange={handleChange}

                />




                <ProfessionalInformation

                    formData={formData}

                    errors={errors}

                    handleChange={handleChange}

                />





                <SkillsSection

                    skills={formData.skills}

                    errors={errors}

                    handleSkillsChange={handleSkillsChange}

                />






                <EducationSection

                    education={formData.education}

                    handleEducationChange={handleEducationChange}

                    addEducation={addEducation}

                    removeEducation = {removeEducation}

                    errors = {errors}

                />






                <ExperienceSection

                    experience={formData.experience}

                    handleExperienceChange={handleExperienceChange}

                    addExperience={addExperience}

                    removeExperience = {removeExperience}

                     errors = {errors}

                />







                <ResumeUpload

                    handleResumeChange={handleResumeChange}

                    resumeFile={resumeFile}

                    error={errors.resume}

                />





                <button

                    disabled={loading}

                    className="
                        w-full
                        rounded-xl
                        bg-blue-600
                        py-4
                        font-semibold
                        text-white
                        hover:bg-blue-700
                    "

                >

                    {

                        loading

                        ?

                        "Creating Profile..."

                        :

                        "Complete Profile"

                    }


                </button>



            </form>



        </main>


    );


}