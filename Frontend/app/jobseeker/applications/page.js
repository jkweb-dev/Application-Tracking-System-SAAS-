"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { useRouter } from "next/navigation";

import ApplicationsHeader from "@/Components/jobseeker/Applications/Header";
import ApplicationCard from "@/Components/jobseeker/Applications/Card";
import EmptyApplications from "@/Components/jobseeker/Applications/Empty";
import LoadingSkeleton from "@/Components/jobseeker/Applications/LoadingSkelton";



export default function ApplicationsPage() {

    const router = useRouter();



    const [applications, setApplications] = useState([]);

    const [loading, setLoading] = useState(true);





    const fetchApplications = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");



            if (!token) {

                toast.error("Please login first");

                router.push("/");

                return;

            }



            const response = await axios.get(

                "http://localhost:5000/jobseeker/applications",

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );



            setApplications(

                response.data.applications

            );



        }

        catch (error) {

            console.log(error);



            if (!error.response) {

                toast.error(

                    "Network error. Please check your internet connection."

                );

                return;

            }



            const status = error.response.status;

            const message =

                error.response.data?.message ||

                "Something went wrong";



            switch (status) {

                case 400:

                    toast.error(message);

                    break;



                case 401:

                    toast.error(

                        "Session expired. Please login again."

                    );



                    localStorage.removeItem("token");



                    router.push("/");



                    break;



                case 403:

                    toast.error(

                        "Access denied."

                    );

                    break;



                case 404:

                    toast.error(message);

                    break;



                case 500:

                    toast.error(

                        "Internal server error."

                    );

                    break;



                default:

                    toast.error(message);

            }

        }

        finally {

            setLoading(false);

        }

    };





    useEffect(() => {

        fetchApplications();

    }, []);





    if (loading) {

        return (

            <LoadingSkeleton />

        );

    }





    return (

        <main

            className="
                min-h-screen
                bg-slate-50
                px-4
                py-8
                md:px-8
            "

        >

            <div

                className="
                    mx-auto
                    max-w-7xl
                "

            >

                <ApplicationsHeader

                    totalApplications={applications.length}

                />





                {

                    applications.length === 0

                    ?

                    (

                        <EmptyApplications />

                    )

                    :

                    (

                        <div

                            className="
                                mt-8
                                grid
                                gap-6
                            "

                        >

                            {

                                applications.map(

                                    (application)=>(

                                        <ApplicationCard

                                            key={application._id}

                                            application={application}

                                        />

                                    )

                                )

                            }

                        </div>

                    )

                }

            </div>

        </main>

    );

}