"use client";

import { useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import TeamHeader from "@/Components/employer/team/add/Header";
import MemberBasicInfo from "@/Components/employer/team/add/MemberBasicInfo";
import MemberSecurity from "@/Components/employer/team/add/MemberSecurity";
import MemberRole from "@/Components/employer/team/add/MemberRole";
import MemberActions from "@/Components/employer/team/add/MemberAction";

export default function AddTeamMemberPage() {

const router = useRouter() 

    const [errors, setErrors] = useState({});
    const [memberData, setMemberData] = useState({

        firstName: "",

        lastName: "",

        email: "",

        password: "",

        confirmPassword: "",

        role: "recruiter"

    });




    const [loading, setLoading] = useState(false);




    const handleChange = (e) => {


        const { name, value } = e.target;


        setMemberData((prev) => ({

            ...prev,

            [name]: value

        }));


    };





    const handleSubmit = async()=>{

        console.log("HandleSubmit Running")

    const newErrors = {};



    // Required fields


    if(!memberData.firstName.trim()){

        newErrors.firstName = "First name is required";

    }



    if(!memberData.lastName.trim()){

        newErrors.lastName = "Last name is required";

    }





    // Email validation


    if(!memberData.email.trim()){


        newErrors.email = "Email is required";


    }

    else if(

        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(memberData.email)

    ){

        newErrors.email = "Enter a valid email address";

    }






    // Password validation


    if(!memberData.password){


        newErrors.password = "Password is required";


    }

    else if(memberData.password.length < 8){


        newErrors.password = 
        "Password must be at least 8 characters";


    }







    // Confirm password


    if(!memberData.confirmPassword){


        newErrors.confirmPassword =
        "Please confirm password";


    }

    else if(

        memberData.password !== memberData.confirmPassword

    ){


        newErrors.confirmPassword =
        "Passwords do not match";


    }







    // Role


    if(!memberData.role){


        newErrors.role = "Please select a role";


    }






    // If errors exist


    if(Object.keys(newErrors).length > 0){


        setErrors(newErrors);


        return;


    }






    try{


        setLoading(true);



        setErrors({});



        const token = localStorage.getItem("token");





        const response = await axios.post(


            "http://localhost:5000/employer/team/addMember",


            memberData,


            {

                headers:{


                    Authorization:`Bearer ${token}`


                }


            }


        );






        toast.success(

            response.data.message ||

            "Team member added successfully"

        );





        router.push("/employer/team");




    }





    catch(error){





        if(error.response){



            const status = error.response.status;



            const message =

                error.response.data?.message;



                  if(status === 400){


            toast.error(

                message ||

                "Invalid request"

            );

return ;
        }



            if(status === 401){



                localStorage.removeItem("token");



                toast.error(

                    message ||

                    "Session expired. Please login again"

                );



                router.push("/");



            }





            else if(status === 404){



                toast.error(

                    message ||

                    "Resource not found"

                );


return ;
            }





            else if(status === 500){



                toast.error(

                    message ||

                    "Server error. Please try again later"

                );

return;

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




    return (


        <div className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8">


            <div className="mx-auto max-w-5xl space-y-8">


                <TeamHeader />



                <MemberBasicInfo

                    memberData={memberData}

                    handleChange={handleChange}

                    errors = {errors}

                />



                <MemberSecurity

                    memberData={memberData}

                    handleChange={handleChange}

                    errors = {errors}

                />



                <MemberRole

                    memberData={memberData}

                    handleChange={handleChange}

                    errors = {errors}

                />



                <MemberActions

                    loading={loading}

                    handleSubmit={handleSubmit}

                />


            </div>


        </div>

    );

}