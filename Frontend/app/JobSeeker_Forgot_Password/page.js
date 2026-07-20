"use client";


import { useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import { Mail, ArrowLeft, Loader2 } from "lucide-react";



export default function ForgotPasswordPage(){


    const router = useRouter();


    const [email,setEmail] = useState("");

    const [loading,setLoading] = useState(false);




    const validateEmail = (email)=>{

        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    };




    const handleSubmit = async(e)=>{

        e.preventDefault();



        if(!email.trim()){

            toast.error("Email is required");

            return;

        }



        if(!validateEmail(email)){

            toast.error("Please enter a valid email");

            return;

        }



        try{


            setLoading(true);



            const response = await axios.post(

                "http://localhost:5000/jobseeker/forgot-password",

                {

                    email

                }

            );



            toast.success(

                response.data.message

            );



            setEmail("");



            setTimeout(()=>{

                router.push("/login/jobseeker");

            },2000);



        }

        catch(error){


            console.log(error);



            if(!error.response){


                toast.error(

                    "Network error. Please check your connection."

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

                        "Server error. Try again later."

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
                    bg-white
                    p-8
                    shadow-xl
                    border
                    border-slate-200
                "

            >



                {/* Header */}


                <div

                    className="
                        text-center
                        mb-8
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

                        <Mail size={32}/>


                    </div>



                    <h1

                        className="
                            mt-5
                            text-3xl
                            font-bold
                            text-slate-900
                        "

                    >

                        Forgot Password?

                    </h1>



                    <p

                        className="
                            mt-3
                            text-sm
                            text-slate-500
                        "

                    >

                        Enter your email and we will send you a reset link.

                    </p>



                </div>






                <form

                    onSubmit={handleSubmit}

                    className="
                        space-y-6
                    "

                >



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

                            Email Address

                        </label>




                        <input


                            type="email"

                            value={email}


                            onChange={(e)=>

                                setEmail(e.target.value)

                            }


                            placeholder="example@gmail.com"


                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                px-4
                                py-3
                                outline-none
                                transition
                                focus:border-indigo-500
                                focus:ring-2
                                focus:ring-indigo-100
                            "


                        />


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
                            transition
                            hover:bg-indigo-700
                            disabled:cursor-not-allowed
                            disabled:opacity-70
                        "


                    >


                        {

                            loading

                            ?

                            (

                                <>

                                <Loader2

                                    className="animate-spin"

                                    size={20}

                                />

                                Sending...

                                </>

                            )

                            :

                            "Send Reset Link"

                        }



                    </button>




                </form>





                <button


                    onClick={()=>router.push("login/jobseeker")}


                    className="
                        mt-6
                        flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        font-medium
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