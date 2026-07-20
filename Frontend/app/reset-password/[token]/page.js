"use client";


import { useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { useRouter, useParams } from "next/navigation";

import { Lock, Eye, EyeOff, Loader2, ArrowLeft } from "lucide-react";



export default function ResetPasswordPage(){


    const router = useRouter();

    const { token } = useParams();



    const [password,setPassword] = useState("");

    const [confirmPassword,setConfirmPassword] = useState("");

    const [showPassword,setShowPassword] = useState(false);

    const [showConfirm,setShowConfirm] = useState(false);

    const [loading,setLoading] = useState(false);





    const validatePassword = (password)=>{


        if(password.length < 8){

            return "Password must be at least 8 characters";

        }


      


        return null;

    };






    const handleSubmit = async(e)=>{


        e.preventDefault();




        const passwordError = validatePassword(password);



        if(passwordError){

            toast.error(passwordError);

            return;

        }



        if(password !== confirmPassword){


            toast.error(

                "Passwords do not match"

            );


            return;

        }






        try{


            setLoading(true);




            const response = await axios.post(

                `http://localhost:5000/jobseeker/reset-password/${token}`,

                {

                    password,

                    confirmPassword

                }

            );





            toast.success(

                response.data.message

            );





            setTimeout(()=>{


                router.push("/login/jobseeker");


            },2000);




        }


        catch(error){



            console.log(error);




            if(!error.response){


                toast.error(

                    "Network error. Please try again."

                );


                return;

            }





            const status = error.response.status;



            const message =

                error.response.data?.message ||

                "Something went wrong";






            switch(status){


                case 400:

                    toast.error(message);

                    break;



                case 404:

                    toast.error(message);

                    break;



                case 500:

                    toast.error(

                        "Server error. Please try later."

                    );

                    break;



                default:

                    toast.error(message);

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
                flex
                items-center
                justify-center
                bg-slate-50
                px-4
            "

        >



            <div

                className="
                    w-full
                    max-w-md
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-8
                    shadow-xl
                "

            >



                <div

                    className="
                        mb-8
                        text-center
                    "

                >


                    <div

                        className="
                            mx-auto
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-indigo-100
                            text-indigo-600
                        "

                    >

                        <Lock size={32}/>

                    </div>




                    <h1

                        className="
                            mt-5
                            text-3xl
                            font-bold
                            text-slate-900
                        "

                    >

                        Reset Password

                    </h1>



                    <p

                        className="
                            mt-3
                            text-sm
                            text-slate-500
                        "

                    >

                        Create your new secure password.

                    </p>


                </div>





                <form

                    onSubmit={handleSubmit}

                    className="
                        space-y-5
                    "

                >




                    {/* Password */}


                    <div>


                        <label

                            className="
                                mb-2
                                block
                                text-sm
                                font-medium
                                text-slate-700
                            "

                        >

                            New Password

                        </label>




                        <div

                            className="
                                relative
                            "

                        >


                            <input


                                type={showPassword ? "text":"password"}


                                value={password}


                                onChange={(e)=>

                                    setPassword(e.target.value)

                                }


                                placeholder="********"



                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    px-4
                                    py-3
                                    pr-12
                                    outline-none
                                    focus:border-indigo-500
                                    focus:ring-2
                                    focus:ring-indigo-100
                                "


                            />



                            <button

                                type="button"

                                onClick={()=>setShowPassword(!showPassword)}


                                className="
                                    absolute
                                    right-4
                                    top-3
                                    text-slate-500
                                "

                            >

                                {

                                    showPassword

                                    ?

                                    <EyeOff size={20}/>

                                    :

                                    <Eye size={20}/>

                                }


                            </button>



                        </div>


                    </div>






                    {/* Confirm Password */}


                    <div>


                        <label

                            className="
                                mb-2
                                block
                                text-sm
                                font-medium
                                text-slate-700
                            "

                        >

                            Confirm Password

                        </label>



                        <div

                            className="
                                relative
                            "

                        >


                            <input


                                type={showConfirm ? "text":"password"}


                                value={confirmPassword}


                                onChange={(e)=>

                                    setConfirmPassword(e.target.value)

                                }


                                placeholder="********"



                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    px-4
                                    py-3
                                    pr-12
                                    outline-none
                                    focus:border-indigo-500
                                    focus:ring-2
                                    focus:ring-indigo-100
                                "


                            />



                            <button

                                type="button"

                                onClick={()=>setShowConfirm(!showConfirm)}


                                className="
                                    absolute
                                    right-4
                                    top-3
                                    text-slate-500
                                "

                            >

                                {

                                    showConfirm

                                    ?

                                    <EyeOff size={20}/>

                                    :

                                    <Eye size={20}/>

                                }


                            </button>



                        </div>



                    </div>






                    <button


                        disabled={loading}


                        className="
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-indigo-600
                            py-3
                            font-semibold
                            text-white
                            hover:bg-indigo-700
                            disabled:opacity-70
                        "


                    >


                        {

                            loading

                            ?

                            (

                                <>

                                <Loader2

                                    size={20}

                                    className="animate-spin"

                                />

                                Updating...

                                </>

                            )

                            :

                            "Update Password"

                        }


                    </button>




                </form>






                <button


                    onClick={()=>router.push("/login/jobseeker")}


                    className="
                        mt-6
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        text-slate-600
                        hover:text-indigo-600
                    "


                >

                    <ArrowLeft size={18}/>

                    Back to Login


                </button>



            </div>



        </main>


    );


}