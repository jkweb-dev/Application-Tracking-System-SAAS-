"use client";

import { useEffect, useState } from "react";

import { useParams, useRouter } from "next/navigation";

import axios from "axios";

import toast from "react-hot-toast";


import MemberProfileView from "@/Components/employer/team/edit/MemberProfileView";
import MemberEditForm from "@/Components/employer/team/edit/MemberEditForm";



export default function EditTeamMemberPage(){



    const params = useParams();

    const router = useRouter();



    const memberId = params.id;



 const [errors, setErrors] = useState({});

    const [member,setMember] = useState(null);



    const [editMode,setEditMode] = useState(false);



    const [loading,setLoading] = useState(false);





    const [memberData,setMemberData] = useState({


        firstName:"",

        lastName:"",

        email:"",

        role:""


    });








    const fetchMember = async()=>{


        try{


            setLoading(true);



            const token = localStorage.getItem("token");





            const response = await axios.get(


                `http://localhost:5000/employer/team/${memberId}`,

                {

                    headers:{


                        Authorization:`Bearer ${token}`


                    }


                }


            );





            setMember(response.data.member);



            setMemberData({


                firstName:response.data.member.firstName,

                lastName:response.data.member.lastName,

                email:response.data.member.email,

                role:response.data.member.role


            });





        }


catch(error){


    console.log(error);



    if(error.response){


        const status = error.response.status;


        const message =

            error.response.data?.message;





        if(status === 400){


            toast.error(

                message ||

                "Invalid request"

            );


        }





        else if(status === 401){


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

                "You are not authorized to perform this action"

            );


        }





        else if(status === 404){


            toast.error(

                message ||

                "Team member not found"

            );


            router.back();


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









    useEffect(()=>{


        fetchMember();


    },[]);









    const handleChange = (e)=>{


        setErrors({})

        const {name,value}=e.target;



        setMemberData((prev)=>({


            ...prev,


            [name]:value


        }));



    };










    const handleUpdate = async()=>{

        const newErrors = {}

        if(!memberData.firstName.trim()){

    newErrors.firstName =

        "First name is required";

}



if(!memberData.lastName.trim()){

    newErrors.lastName =

        "Last name is required";

}

if(!memberData.email.trim()){

    newErrors.email =

        "Email is required";

}

else if(

    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(

        memberData.email

    )

){

    newErrors.email =

        "Enter a valid email address";

}


if(!memberData.role){

    newErrors.role =

        "Please select a role";

}


 if(Object.keys(newErrors).length > 0){


        setErrors(newErrors);


        return;


    }


        try{


            setLoading(true);



            const token = localStorage.getItem("token");






            const response = await axios.put(


                `http://localhost:5000/employer/team/${memberId}`,

                memberData,

                {

                    headers:{


                        Authorization:`Bearer ${token}`


                    }

                }


            );






            toast.success(

                response.data.message ||

                "Member updated successfully"

            );

            setErrors({})





            setMember(response.data.member);



            setEditMode(false);





        }



       catch(error){


    console.log(error);



    if(error.response){


        const status = error.response.status;


        const message =

            error.response.data?.message;





        if(status === 400){


            toast.error(

                message ||

                "Invalid request"

            );


        }





        else if(status === 401){


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

                "You are not authorized to perform this action"

            );


        }





        else if(status === 404){


            toast.error(

                message ||

                "Team member not found"

            );


            router.back();


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









    if(loading && !member){


        return (


            <div className="min-h-screen flex items-center justify-center">


                Loading...


            </div>


        );


    }






    if(!member){


        return null;


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

                    mx-auto

                    max-w-5xl

                    space-y-8

                "

            >





                {

                    editMode

                    ?


                    <MemberEditForm

                        memberData={memberData}

                        handleChange={handleChange}

                        handleUpdate={handleUpdate}

                        loading={loading}

                        setEditMode={setEditMode}

                        errors = {errors}

                    />


                    :


                    <MemberProfileView

                        member={member}

                        setEditMode={setEditMode}

                    />


                }







            </div>



        </div>


    );


}