"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


export default function Sidebar({ open, setOpen }) {


    const pathname = usePathname();


    const [jobsOpen, setJobsOpen] = useState(false);



    const menuItems = [

        {
            name: "Dashboard",
            path: "/employer/dashboard"
        },

        {
            name: "Applicants",
            path: "/employer/applicants"
        },

        {
            name: "Analytics",
            path: "/employer/analytics"
        },

        {
            name: "Team",
            path: "/employer/team"
        },

        {
            name: "Settings",
            path: "/employer/settings"
        }

    ];



    const jobItems = [

        {
            name: "My Jobs",
            path: "/employer/jobs"
        },

        {
            name: "Create Jobs",
            path: "/employer/jobs/create"
        },

        {
            name: "Edit Jobs",
            path: "/employer/jobs/edit"
        }

    ];



    return (

        <>
        
            {
                open && (

                    <div

                        onClick={()=>setOpen(false)}

                        className="
                        fixed
                        inset-0
                        bg-black/30
                        z-40
                        lg:hidden
                        "

                    />

                )
            }





            <aside

                className={`
                
                fixed
                
                top-0
                left-0
                
                h-screen
                
                w-72
                
                bg-emerald-50
                
                border-r
                border-emerald-100
                
                z-50
                
                flex
                flex-col
                
                px-5
                py-6
                
                transition-transform
                
                duration-300
                
                overflow-y-auto
                
                lg:translate-x-0
                
                ${
                    open

                    ?

                    "translate-x-0"

                    :

                    "-translate-x-full"

                }
                
                `}

            >




                {/* Logo */}


                <div

                    className="
                    mb-10
                    "

                >

                    <h1

                        className="
                        text-3xl
                        font-bold
                        text-emerald-700
                        "

                    >

                        RecruitFlow

                    </h1>


                    <p

                        className="
                        text-sm
                        text-gray-500
                        mt-1
                        "

                    >

                        Employer Dashboard

                    </p>


                </div>







                {/* Navigation */}


                <nav

                    className="
                    flex-1
                    space-y-2
                    "

                >




                    {/* Dashboard */}

                    {
                        menuItems.map((item)=>{


                            const active =
                                pathname === item.path;



                            return (

                                <Link

                                    key={item.path}

                                    href={item.path}

                                    onClick={()=>setOpen(false)}

                                    className={

                                        active

                                        ?

                                        "block px-4 py-3 rounded-xl bg-emerald-700 text-white font-medium shadow"

                                        :

                                        "block px-4 py-3 rounded-xl text-gray-700 hover:bg-emerald-100 transition font-medium"

                                    }

                                >

                                    {item.name}


                                </Link>


                            );


                        })
                    }






                    {/* Jobs Dropdown */}


                    <div>


                        <button

                            onClick={()=>setJobsOpen(!jobsOpen)}

                            className="
                            
                            w-full

                            flex

                            justify-between

                            items-center

                            px-4

                            py-3

                            rounded-xl

                            text-gray-700

                            font-medium

                            hover:bg-emerald-100

                            transition

                            "

                        >

                            <span>

                                Jobs

                            </span>


                            <span>

                                {

                                    jobsOpen

                                    ?

                                    "−"

                                    :

                                    "+"

                                }

                            </span>


                        </button>






                        {
                            jobsOpen && (


                                <div

                                    className="
                                    ml-4
                                    mt-2
                                    space-y-2
                                    "

                                >

                                    {
                                        jobItems.map((item)=>{


                                            const active =
                                                pathname === item.path;



                                            return (

                                                <Link


                                                    href={item.path}


                                                    key={item.path}


                                                    onClick={()=>setOpen(false)}


                                                    className={

                                                        active

                                                        ?

                                                        "block px-4 py-2 rounded-lg bg-emerald-600 text-white text-sm"

                                                        :

                                                        "block px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-emerald-100"

                                                    }


                                                >

                                                    {item.name}


                                                </Link>


                                            );


                                        })
                                    }


                                </div>


                            )
                        }


                    </div>





                </nav>






                {/* Bottom */}


                <div

                    className="
                    pt-5
                    mt-5
                    border-t
                    border-emerald-200
                    "

                >

                    <p

                        className="
                        text-xs
                        text-gray-500
                        "

                    >

                        RecruitFlow Employer Panel

                    </p>


                </div>



            </aside>



        </>


    );

}