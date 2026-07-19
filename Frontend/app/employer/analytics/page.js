"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";


import AnalyticsHeader from "@/Components/employer/Analytics/Header";
import StatsCards from "@/Components/employer/Analytics/StatsCard";
import FunnelChart from "@/Components/employer/Analytics/Funnel";
import StatusPieChart from "@/Components/employer/Analytics/StatusPie";
import ApplicationTrendChart from "@/Components/employer/Analytics/ApplicationTrend";
import JobPerformanceTable from "@/Components/employer/Analytics/JobPerformance";



export default function AnalyticsPage(){


    const router = useRouter();



    const [analytics,setAnalytics] = useState(null);


    const [loading,setLoading] = useState(true);




    const fetchAnalytics = async()=>{


        try{


            setLoading(true);



            const token = localStorage.getItem("token");



            if(!token){


                toast.error("Please login first");


                router.push("/");


                return;

            }



            const res = await axios.get(

                "http://localhost:5000/employer/analytics",

                {

                    headers:{

                        Authorization:`Bearer ${token}`

                    }

                }

            );



            setAnalytics(

                res.data.analytics

            );



        }


        catch(error){


            console.log(error);



            if(!error.response){


                toast.error(

                    "Network error"

                );


                return;


            }



            const status = error.response.status;



            const message =

                error.response.data?.message ||

                "Something went wrong";





            switch(status){


                case 401:


                    toast.error(

                        "Session expired"

                    );


                    localStorage.removeItem("token");


                    router.push("/");


                    break;




                case 403:


                    toast.error(message);


                    break;




                case 404:


                    toast.error(message);


                    break;




                case 500:


                    toast.error(

                        "Server error"

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




    useEffect(()=>{


        fetchAnalytics();


    },[]);





    if(loading){


        return (

            <div className="
                flex
                min-h-screen
                items-center
                justify-center
            ">

                <p className="text-lg">

                    Loading analytics...

                </p>


            </div>

        );


    }

    return (

    <main

        className="
            min-h-screen
            bg-slate-50
            px-4
            py-8
            sm:px-6
            lg:px-8
        "

    >

        <div

            className="
                mx-auto
                max-w-7xl
                space-y-8
            "

        >


            {/* Header */}

            <AnalyticsHeader />





            {/* Stats */}

            <StatsCards

                stats={analytics?.stats}

            />





            {/* Charts Row */}

            <div

                className="
                    grid
                    grid-cols-1
                    gap-8
                    lg:grid-cols-2
                "

            >


                <FunnelChart

                    data={analytics?.statusDistribution}

                />



                <StatusPieChart

                    data={analytics?.statusDistribution}

                />


            </div>





            {/* Trend Chart */}

            <ApplicationTrendChart

                data={analytics?.applicationTrend}

            />





            {/* Jobs Table */}

            <JobPerformanceTable

                data={analytics?.jobPerformance}

            />


        </div>


    </main>

);


}