"use client";


import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";



// Components
import ProfileHeader from "@/Components/jobseeker/ProfileViewandEdit/Header";
import PersonalInformation from "@/Components/jobseeker/ProfileViewandEdit/PersonalInfo";
import ProfessionalInformation from "@/Components/jobseeker/ProfileViewandEdit/ProfessionalInfo";
import SkillsSection from "@/Components/jobseeker/ProfileViewandEdit/Skills";
import EducationSection from "@/Components/jobseeker/ProfileViewandEdit/Education";
import ExperienceSection from "@/Components/jobseeker/ProfileViewandEdit/Experience";
import ResumeUpload from "@/Components/jobseeker/ProfileViewandEdit/Resume";






export default function ProfilePage(){


    const router = useRouter();




    const [profile,setProfile] = useState(null);



    const [formData,setFormData] = useState(null);



    const [resumeFile,setResumeFile] = useState(null);



    const [errors,setErrors] = useState({});



    const [loading,setLoading] = useState(true);



    const [saving,setSaving] = useState(false);



    const [isEditing,setIsEditing] = useState(false);






    // ============================
    // FETCH PROFILE
    // ============================


    const fetchProfile = async()=>{


        try{



            setLoading(true);

        const token =     localStorage.getItem("token")


            const response = await axios.get(

                "http://localhost:5000/jobseeker/profile" ,

                 {

                    headers:{

                        Authorization:`Bearer ${token}`,


                    }

                }
              

            );



            setProfile(

                response.data.profile

            );

            console.log(response.data.profile)



            setFormData(

                response.data.profile

            );



        }


        catch(error){


            handleError(error);


        }


        finally{


            setLoading(false);


        }


    };







    // ============================
    // HANDLE INPUT CHANGE
    // ============================


    const handleChange=(e)=>{


        const {name,value}=e.target;



        setFormData(prev=>({

            ...prev,

            [name]:value

        }));



    };


const handleEducationChange = (index,e)=>{

    const {name,value}=e.target;


    setFormData(prev=>({

        ...prev,

        education: prev.education.map((item,i)=>

            i===index

            ?

            {
                ...item,
                [name]:value
            }

            :

            item

        )

    }));

};


const addEducation = ()=>{


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


        education:

            prev.education.filter(

                (_,i)=>i!==index

            )


    }));


};

const handleExperienceChange=(index,e)=>{


    const {name,value}=e.target;



    setFormData(prev=>({


        ...prev,


        experience:

        prev.experience.map((item,i)=>

            i===index

            ?

            {

                ...item,

                [name]:value

            }

            :

            item

        )


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





    // ============================
    // RESUME CHANGE
    // ============================


    const handleResumeChange=(e)=>{


        const file=e.target.files[0];



        if(!file){

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


                resume:"Maximum file size is 5MB"


            }));


            return;


        }



        setResumeFile(file);



        setErrors(prev=>({

            ...prev,

            resume:""

        }));



    };








    // ============================
    // VALIDATION
    // ============================


    const validateForm=()=>{


        const newErrors={};





        if(!formData.firstName?.trim())

            newErrors.firstName="First name is required";



        if(!formData.lastName?.trim())

            newErrors.lastName="Last name is required";



        if(!formData.email?.trim()){
             newErrors.email="Email is required";
        }else if (!/^\S+@\S+\.\S+$/.test(formData.email))
        newErrors.email = "Please enter a valid email";

           



        if(!formData.phone?.trim())

            newErrors.phone="Phone is required";



        if(!formData.location?.trim())

            newErrors.location="Location is required";





        if(!formData.headline?.trim())

            newErrors.headline="Headline is required";



        if(!formData.bio?.trim())

            newErrors.bio="Bio is required";





        if(formData.skills?.length === 0)

            newErrors.skills="At least one skill required";







        formData.education?.forEach((item,index)=>{


          
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








        formData.experience?.forEach((item,index)=>{


          
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







        if(resumeFile){


            if(resumeFile.type !== "application/pdf")

                newErrors.resume="Only PDF allowed";



            if(resumeFile.size > 5*1024*1024)

                newErrors.resume="Maximum size 5MB";


        }





        setErrors(newErrors);



        return Object.keys(newErrors).length === 0;



    };









    // ============================
    // UPDATE PROFILE
    // ============================


    const handleUpdate=async()=>{



        const valid=validateForm();



        if(!valid){


            toast.error(
                "Please fix errors"
            );


            return;


        }





        try{


            setSaving(true);

            
            const token=

                localStorage.getItem("token");


            const data=new FormData();





            data.append(

                "profile",

                JSON.stringify(formData)

            );





            if(resumeFile){


                data.append(

                    "resume",

                    resumeFile

                );


            }





            const response=await axios.put(

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

                "Profile updated successfully"

            );






            setProfile(

                response.data.profile

            );



            setFormData(

                response.data.profile

            );



            setResumeFile(null);



            setIsEditing(false);



        }



        catch(error){


            handleError(error);


        }



        finally{


            setSaving(false);


        }



    };









    // ============================
    // ERROR HANDLER
    // ============================


    const handleError=(error)=>{


        if(!error.response){


            toast.error(
                "Network error"
            );


            return;


        }




        const status=error.response.status;



        const message=

        error.response.data?.message ||

        "Something went wrong";





        switch(status){



            case 400:

                toast.error(message);

                break;



            case 401:

                toast.error(
                    "Session expired"
                );

                localStorage.removeItem("token");

                router.push("/");

                break;



            case 403:

                toast.error(
                    "Access denied"
                );

                break;



            case 404:

                toast.error(
                    "Profile not found"
                );

                break;



            case 409:

                toast.error(
                    "Profile already exists"
                );

                break;



            case 413:

                toast.error(
                    "File size too large"
                );

                break;



            case 415:

                toast.error(
                    "Only PDF allowed"
                );

                break;



            case 500:

                toast.error(
                    "Server error"
                );

                break;



            default:

                toast.error(message);


        }


    };








    useEffect(()=>{


        fetchProfile();


    },[]);








    if(loading){


        return <div>Loading...</div>;


    }






    return(


        <div className="min-h-screen bg-slate-50 p-6">


            <div className="mx-auto max-w-5xl space-y-6">


                <ProfileHeader

                profile={profile}

                formData={formData}

                isEditing={isEditing}

                setIsEditing={setIsEditing}

                handleChange={handleChange}

            />


                <PersonalInformation

                    profile={profile}

                    formData={formData}

                    isEditing={isEditing}

                    handleChange={handleChange}

                    errors={errors}

                />





                <ProfessionalInformation

                    profile={profile}

                    formData={formData}

                    isEditing={isEditing}

                    handleChange={handleChange}

                    errors={errors}

                />





                <SkillsSection

                    profile={profile}

                    formData={formData}

                    isEditing={isEditing}

                    setFormData={setFormData}

                    errors={errors}

                />





                <EducationSection

                    profile={profile}

                    formData={formData}

                    isEditing={isEditing}

                    setFormData={setFormData}

                    handleEducationChange = {handleEducationChange}

                    addEducation = {addEducation}

                    removeEducation = {removeEducation}

                    errors={errors}

                />





                <ExperienceSection

                    profile={profile}

                    formData={formData}

                    isEditing={isEditing}

                    setFormData={setFormData}

                    handleExperienceChange = {handleExperienceChange}

                    addExperience = {addExperience}

                    removeExperience = {removeExperience}

                    errors={errors} 

                />





                <ResumeUpload

                    resume={profile.resume}

                    isEditing={isEditing}

                    resumeFile={resumeFile}

                    handleResumeChange={handleResumeChange}

                    error={errors.resume}

                />






                {

                isEditing &&


                <button

                    onClick={handleUpdate}

                    disabled={saving}

                    className="
                    rounded-xl
                    bg-green-600
                    px-6
                    py-3
                    text-white
                    "

                >

                    {
                    saving
                    ?
                    "Saving..."
                    :
                    "Save Changes"
                    }


                </button>


                }





            </div>


        </div>


    );


}