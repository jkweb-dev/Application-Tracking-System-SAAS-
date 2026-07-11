"use client";

import { useState } from "react";

import ConfirmationDialog from "../confirmationDialogBox";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

export default function TopNavbar({ user, setSidebarOpen }) {

const router = useRouter()
    const [openProfile, setOpenProfile] = useState(false);

    const [logoutDialogOpen,setLogoutDialogOpen] = useState(false);

const [loading,setLoading] = useState(false);

const handleLogout = ()=>{


    try{


        setLoading(true);


        localStorage.removeItem("token");


        toast.success(

            "Logged out successfully"

        );


        router.replace("/");



    }


    finally{


        setLoading(false);

        setLogoutDialogOpen(false);


    }


};



    return (

        <header

            className="
            
            sticky
            top-0
            
            z-50
            
            h-20
            
            w-full
            
            bg-blue-100
            
            backdrop-blur-md
            
            border-b
            border-gray-200
            
            flex
            items-center
            justify-between
            
            px-4
            sm:px-6
            lg:px-8
            
            "

        >



            {/* Left Section */}


            <div

                className=" flex  items-center gap-4 "
            >



                {/* Mobile Menu Button */}


                <button

                    onClick={()=>setSidebarOpen(true)}

                    className="
                    
                    lg:hidden
                    
                    p-2
                    
                    rounded-lg
                    
                    hover:bg-gray-100
                    
                    transition
                    
                    "

                >

                    <span className="text-2xl">

                        ☰

                    </span>


                </button>





                {/* Company Name */}


                <div>


                    <h1

                        className="
                        
                        text-lg
                        sm:text-xl
                        
                        font-semibold
                        
                        text-gray-800
                        
                        "

                    >

                        {

                            user?.companyName ||

                            "Jawad Tech"

                        }


                    </h1>


                    <p

                        className="
                        
                        hidden
                        sm:block
                        
                        text-xs
                        
                        text-gray-500
                        
                        "

                    >

                        Employer Portal

                    </p>


                </div>


            </div>





            {/* Center Search */}


            <div

                className="
                
                hidden
                md:flex
                
                flex-1
                
                max-w-xl
                
                mx-6
                
                "

            >


                <div

                    className="
                    
                    w-full
                    
                    flex
                    items-center
                    
                    bg-gray-100
                    
                    rounded-xl
                    
                    px-4
                    
                    focus-within:ring-2
                    
                    focus-within:ring-emerald-300
                    
                    transition
                    
                    "

                >


                    <span

                        className="
                        
                        text-gray-400
                        
                        mr-3
                        
                        "

                    >

                        🔍

                    </span>



                    <input

                        type="text"

                        placeholder="Search jobs, candidates..."

                        className="
                        
                        w-full
                        
                        bg-transparent
                        
                        outline-none
                        
                        py-3
                        
                        text-sm
                        
                        text-gray-700
                        
                        "

                    />


                </div>


            </div>







            {/* Right Section */}


            <div

                className="
                
                flex
                
                items-center
                
                gap-3
                
                "

            >




                {/* Notification */}


                <button

                    className="
                    
                    relative
                    
                    p-3
                    
                    rounded-full
                    
                    hover:bg-gray-100
                    
                    transition
                    
                    "

                >

                    🔔


                    {/* Notification Dot */}


                    <span

                        className="
                        
                        absolute
                        
                        top-2
                        
                        right-2
                        
                        h-2
                        
                        w-2
                        
                        rounded-full
                        
                        bg-red-500
                        
                        "

                    >

                    </span>


                </button>






                {/* Profile */}


                <div

                    className="
                    
                    relative
                    
                    "

                >


                    <button

                        onClick={()=>setOpenProfile(!openProfile)}

                        className="
                        
                        h-11
                        
                        w-11
                        
                        rounded-full
                        
                        bg-emerald-600
                        
                        text-white
                        
                        font-semibold
                        
                        flex
                        items-center
                        justify-center
                        
                        shadow-sm
                        
                        "

                    >


                        {

                            user?.companyName

                            ?

                            user.companyName.charAt(0).toUpperCase()

                            :

                            "J"

                        }


                    </button>





                    {
                        openProfile && (


                            <div

                                className="
                                
                                absolute
                                
                                right-0
                                
                                mt-3
                                
                                w-48
                                
                                rounded-xl
                                
                                bg-white
                                
                                shadow-xl
                                
                                border
                                border-gray-100
                                
                                p-2
                                
                                "

                            >


                                <button

                                    className="
                                    
                                    w-full
                                    
                                    text-left
                                    
                                    px-4
                                    
                                    py-3
                                    
                                    rounded-lg
                                    
                                    hover:bg-gray-100
                                    
                                    text-sm
                                    
                                    "

                                >

                                    Profile

                                </button>




                                <button

                                    className="
                                    
                                    w-full
                                    
                                    text-left
                                    
                                    px-4
                                    
                                    py-3
                                    
                                    rounded-lg
                                    
                                    hover:bg-gray-100
                                    
                                    text-sm
                                    
                                    "

                                >

                                    Settings

                                </button>





                                <button

                                onClick={() => setLogoutDialogOpen(true)}

                                    className="
                                    
                                    w-full
                                    
                                    text-left
                                    
                                    px-4
                                    
                                    py-3
                                    
                                    rounded-lg
                                    
                                    hover:bg-gray-100
                                    
                                    text-sm
                                    
                                    text-red-600
                                    
                                    "

                                >

                                    Logout

                                </button>



                            </div>


                        )
                    }


                </div>


            </div>


<ConfirmationDialog

    open={logoutDialogOpen}

    title="Logout"

    message="Are you sure you want to logout from your account?"

    confirmText="Logout"

    cancelText="Cancel"

    loading={loading}

    onConfirm={handleLogout}

    onCancel={()=>setLogoutDialogOpen(false)}

/>

        </header>


    );

}