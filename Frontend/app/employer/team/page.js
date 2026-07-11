"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import TeamHeader from "@/Components/employer/team/My_team/header";
import TeamMemberList from "@/Components/employer/team/My_team/Team_MemberList";


export default function TeamPage(){

    const router = useRouter()

    const [members,setMembers] = useState([]);


    const [loading,setLoading] = useState(false);



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

                />




            </div>


        </div>


    );


}