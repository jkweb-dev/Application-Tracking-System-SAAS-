"use client";

import { useState , useEffect} from "react";
import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import SettingsHeader from "@/Components/employer/setting/Header";
import AccountInfo from "@/Components/employer/setting/AccountInfo";
import SecuritySection from "@/Components/employer/setting/SecuritySection";
import EmailVerification from "@/Components/employer/setting/EmailVerification";
import DangerZone from "@/Components/employer/setting/DangerZone";
import ConfirmationDialog from "@/Components/confirmationDialogBox";



export default function SettingsPage() {

const router = useRouter();

const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);

    const [company,setCompany] = useState(null);

    const [passwordData,setPasswordData] = useState({

        currentPassword:"",

        newPassword:"",

        confirmPassword:""

    });



    const [passwordLoading,setPasswordLoading] = useState(false);



    const [deleteLoading,setDeleteLoading] = useState(false);



const fetchCompany = async()=>{


    try{


        const token = localStorage.getItem("token");



        const response = await axios.get(

            "http://localhost:5000/employer/profile",

            {

                headers:{

                    Authorization:`Bearer ${token}`

                }

            }

        );



        setCompany(response.data.user);



    }


    catch(error){



        if(error.response){


            const status = error.response.status;


            const message =

                error.response.data?.message;



            if(status === 401){


                localStorage.removeItem("token");


                toast.error(

                    message || "Session expired. Please login again."

                );


                router.push("/");

            }



            else if(status === 404){


                toast.error(

                    message || "Company information not found."

                );


            }



            else if(status === 500){


                toast.error(

                    message || "Server error. Please try again later."

                );


            }



            else{


                toast.error(

                    message || "Something went wrong."

                );


            }



        }


        else{


            toast.error(

                "Unable to connect to server."

            );


        }



    }


};

useEffect(()=>{


    fetchCompany();


},[]);



    const handlePasswordChange=(e)=>{


        const {name,value}=e.target;



        setPasswordData((prev)=>({

            ...prev,

            [name]:value

        }));



    };







   const handleChangePassword = async()=>{

  if(!passwordData.currentPassword.trim()){

        toast.error("Current password is required");

        return;

    }



    // Current password length

    if(passwordData.currentPassword.length < 8){

        toast.error(
            "Current password must be at least 8 characters"
        );

        return;

    }


      if(!passwordData.newPassword.trim()){

        toast.error("New password is required");

        return;

    }



    // New password length

    if(passwordData.newPassword.length < 8){

        toast.error(
            "New password must be at least 8 characters"
        );

        return;

    }

     if(!passwordData.confirmPassword.trim()){

        toast.error(
            "Please confirm your new password"
        );

        return;

    }



    // Match check

    if(passwordData.newPassword !== passwordData.confirmPassword){

        toast.error(
            "New password and confirm password do not match"
        );

        return;

    }
    


    try{


        setPasswordLoading(true);



        const token = localStorage.getItem("token");



        const response = await axios.put(

            "http://localhost:5000/employer/change-password",

            {


                currentPassword:
                    passwordData.currentPassword,


                newPassword:
                    passwordData.newPassword


            },

            {


                headers:{


                    Authorization:`Bearer ${token}`


                }


            }


        );




        toast.success(

            response.data.message ||

            "Password changed successfully"

        );





        setPasswordData({

            currentPassword:"",

            newPassword:"",

            confirmPassword:""

        });



    }


    catch(error){
console.log(error)

        if(error.response){


            const status = error.response.status;



            const message =

                error.response.data?.message;



            if(status===401){


                localStorage.removeItem("token");


                toast.error(

                    message || "Session expired"

                );


                router.push("/");


            }


            else if(status===404){


                toast.error(

                    message || "User not found"

                );


            }


            else if(status===500){


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


        setPasswordLoading(false);


    }


};







const handleDeleteAccount = async()=>{


    try{


        setDeleteLoading(true);



        const token = localStorage.getItem("token");



        const response = await axios.delete(

            "http://localhost:5000/employer/delete-account",

            {

                headers:{

                    Authorization:`Bearer ${token}`

                }

            }

        );





        toast.success(

            response.data.message ||

            "Account deleted successfully"

        );






        localStorage.removeItem("token");



        router.push("/");



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

                    "Session expired. Please login again."

                );



                router.push("/");



            }



            else if(status === 404){



                toast.error(

                    message ||

                    "Employer account not found."

                );



            }



            else if(status === 500){



                toast.error(

                    message ||

                    "Server error. Please try again later."

                );



            }



            else{



                toast.error(

                    message ||

                    "Something went wrong."

                );



            }



        }


        else{


            toast.error(

                "Unable to connect to server."

            );


        }



    }


    finally{


        setDeleteLoading(false);


    }


};






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

                    max-w-6xl

                    mx-auto

                    space-y-8

                "

            >





                <SettingsHeader />






                <AccountInfo

                    company={company}

                />







                <SecuritySection

                    passwordData={passwordData}

                    handlePasswordChange={handlePasswordChange}

                    handleSubmit={handleChangePassword}

                    loading={passwordLoading}

                />







                <EmailVerification

                    company={company}

                />







                <DangerZone

                   openDialog={()=>setDeleteDialogOpen(true)}

    loading={deleteLoading}

                />





            </div>


<ConfirmationDialog

    open={deleteDialogOpen}


    title="Delete Account"


    message="
    Are you sure you want to delete your employer account?
    All jobs posted by this account will be permanently deleted.
    This action cannot be undone.
    "


    confirmText="Delete Account"


    cancelText="Cancel"


    loading={deleteLoading}


    onConfirm={handleDeleteAccount}


    onCancel={()=>setDeleteDialogOpen(false)}

/>

        </div>

    );

}