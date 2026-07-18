"use client";

import { useEffect, useState } from "react";

import axios from "axios";

import toast from "react-hot-toast";

import { useRouter, useParams } from "next/navigation";

import {

    DndContext,

    PointerSensor,

    useSensor,

    useSensors,

    DragOverlay

} from "@dnd-kit/core";

import PipelineHeader from "@/Components/employer/Pipeline/header";
import PipelineColumn from "@/Components/employer/Pipeline/Column";
import DragOverlayCard from "@/Components/employer/Pipeline/DragOverlayCard";
import LoadingSkeleton from "@/Components/employer/Pipeline/LoadingSkelton";



export default function HiringPipelinePage() {


    const router = useRouter();

    const { id } = useParams();



    const [applications, setApplications] = useState([]);

    const [loading, setLoading] = useState(true);

    const [activeApplication, setActiveApplication] = useState(null);



    const sensors = useSensors(

        useSensor(

            PointerSensor,

            {

                activationConstraint: {

                    distance: 5

                }

            }

        )

    );



    const pipelineStages = [

        "Applied",

        "Under Review",

        "Shortlisted",

        "Interview",

        "Accepted",

        "Rejected"

    ];



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

                `http://localhost:5000/employer/jobs/${id}/applications`,

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

                    toast.error(message);

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





    const updateApplicationStatus = async (

        applicationId,

        status

    ) => {

        try {

            const token = localStorage.getItem("token");



            await axios.put(

                `http://localhost:5000/employer/applications/${applicationId}/status`,

                {

                    status

                },

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );



        }

        catch (error) {

            throw error;

        }

    };





    const handleDragStart = (event) => {

        const application = applications.find(

            (

                application

            ) =>

                application._id === event.active.id

        );



        setActiveApplication(

            application

        );

    };

    const handleDragEnd = async (event) => {

    const { active, over } = event;

    setActiveApplication(null);



    if (!over) return;



    const applicationId = active.id;

    const newStatus = over.id;



    const application = applications.find(

        (application) =>

            application._id === applicationId

    );



    if (

        !application ||

        application.status === newStatus

    ) {

        return;

    }



    const previousApplications = [...applications];



    // Optimistic Update

    /*setApplications((previous) =>

        previous.map((application) =>

            application._id === applicationId

                ? {

                      ...application,

                      status: newStatus

                  }

                : application

        )

    );*/



    try {

        await updateApplicationStatus(

            applicationId,

            newStatus

        );

    }

    catch (error) {

        console.log(error);



        // Rollback

        setApplications(previousApplications);



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

                toast.error(message);

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

};



useEffect(() => {

    fetchApplications();

}, []);





if (loading) {

    return <LoadingSkeleton />;

}



return (

    <main

        className="
            min-h-screen
            bg-slate-50
            p-6
        "

    >

        <div

            className="
                mx-auto
                max-w-[1800px]
            "

        >

            <PipelineHeader

                totalApplicants={applications.length}

            />



            <DndContext

                sensors={sensors}

                onDragStart={handleDragStart}

                onDragEnd={handleDragEnd}

            >

                <div

                    className="
                        mt-8
                        flex
                        gap-6
                        overflow-x-auto
                        pb-4
                    "

                >

                    {

                        pipelineStages.map(

                            (stage) => (

                                <PipelineColumn

                                    key={stage}

                                    id={stage}

                                    title={stage}

                                    applications={applications.filter(

                                        (application) =>

                                            application.status === stage

                                    )}

                                />

                            )

                        )

                    }

                </div>

 <DragOverlay>

                    {

                        activeApplication && (

                            <DragOverlayCard

                                application={activeApplication}

                            />

                        )

                    }

                </DragOverlay>


               
            </DndContext>

        </div>

    </main>

)}