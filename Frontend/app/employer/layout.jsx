"use client";


import { useState } from "react";

import Protected from "@/Components/Protected";

import Sidebar from "@/Components/employer/sidebar";
import TopNavbar from "@/Components/employer/topbar";



export default function EmployerLayout({ children}) {


    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (

        <Protected allowedRole="employer">

  {
                (user)=> (


                    <div className="min-h-screen  bg-slate-50 ">

                        <Sidebar  open={sidebarOpen}   setOpen={setSidebarOpen} />

                        <div className=" lg:ml-72" >

                            <TopNavbar user={user}    setSidebarOpen={setSidebarOpen}  />

                            <main  className=" p-4 sm:p-6 lg:p-8 " >

                                {children}
                                
                                </main>

                        </div>

                    </div>


                )  }
        </Protected>


    );


}