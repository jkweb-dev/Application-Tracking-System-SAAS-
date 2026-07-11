"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import TeamHeader from "@/Components/employer/team/My_team/header";
import TeamMemberList from "@/Components/employer/team/My_team/Team_MemberList";
import ConfirmationDialog from "@/Components/confirmationDialogBox";


export default function TeamPage(){

    const router = useRouter()

    const [members,setMembers] = useState([]);


    const [loading,setLoading] = useState(false);

    const [deleteDialogOpen,setDeleteDialogOpen] = useState(false);

const [selectedMember,setSelectedMember] = useState(null);

const handleDeleteClick = (member)=>{

    setSelectedMember(member);

    setDeleteDialogOpen(true);

};


const handleDelete = async()=>{


    try{


        setLoading(true);



        const token = localStorage.getItem("token");



        const response = await axios.delete(

            `http://localhost:5000/employer/team/${selectedMember._id}`,

            {

                headers:{

                    Authorization:`Bearer ${token}`

                }

            }

        );



        toast.success(

            response.data.message ||

            "Team member deleted successfully"

        );



        setMembers((prev)=>

            prev.filter(

                (member)=>

                    member._id !== selectedMember._id

            )

        );



        setDeleteDialogOpen(false);

        setSelectedMember(null);



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


   const fetchMembers = async()=>{


    try{


        setLoading(true);



        const token = localStorage.getItem("token");



        const response = await axios.get(


            "http://localhost:5000/employer/team",


            {

                headers:{

                    Authorization:`Bearer ${token}`

                }

            }

        );





        setMembers(

            response.data.members

        );



    }



    catch(error){


        console.log(error);



        if(error.response){



            const message =

                error.response.data?.message;



            const status =

                error.response.status;





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

                    "Team not found"

                );



            }



            else if(status === 500){



                toast.error(

                    message ||

                    "Server error"

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


        fetchMembers();


    },[]);








    return(


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

                    max-w-6xl

                    space-y-8

                "

            >



                <TeamHeader

                    members={members}

                />





                <TeamMemberList

                    members={members}

                    loading={loading}

                    handleDeleteClick = {handleDeleteClick}

                />




            </div>



<ConfirmationDialog

    open={deleteDialogOpen}

    title="Delete Team Member"

    message={`Are you sure you want to delete ${selectedMember?.firstName} ${selectedMember?.lastName}? This action cannot be undone.`}

    confirmText="Delete"

    cancelText="Cancel"

    loading={loading}

    onConfirm={handleDelete}

    onCancel={()=>{

        setDeleteDialogOpen(false);

        setSelectedMember(null);

    }}

/>
        </div>


    );


}