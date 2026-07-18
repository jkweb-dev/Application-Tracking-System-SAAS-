"use client";

import { useDraggable } from "@dnd-kit/core";

import { CSS } from "@dnd-kit/utilities";

import { useRouter } from "next/navigation";



export default function ApplicantCard({

    application

}) {


    const router = useRouter();



    const {

        attributes,

        listeners,

        setNodeRef,

        transform,

        isDragging

    } = useDraggable({

        id: application._id

    });



    const style = {

        //transform: CSS.Transform.toString(transform),

        opacity: isDragging ? 0.4 : 1

    };





    const profile = application.jobSeekerProfileId;





    return (

        <div

            ref={setNodeRef}

            style={style}

            {...listeners}

            {...attributes}

            onClick={() =>

                router.push(

                    `/employer/applications/${application._id}`

                )

            }

            className="
                cursor-pointer
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-lg
            "

        >


            {/* Name */}

            <div

                className="
                    flex
                    items-center
                    gap-3
                "

            >

                <div

                    className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-indigo-100
                        font-bold
                        text-indigo-700
                    "

                >

                    {

                        profile?.firstName?.charAt(0)

                        ||

                        "U"

                    }

                </div>



                <div>

                    <h3

                        className="
                            font-bold
                            text-slate-900
                        "

                    >

                        {

                            profile?.firstName

                        }

                        {" "}

                        {

                            profile?.lastName

                        }

                    </h3>



                    <p

                        className="
                            text-sm
                            text-slate-500
                        "

                    >

                        {

                            profile?.headline

                            ||

                            "Job Seeker"

                        }

                    </p>

                </div>

            </div>





            {/* Skills */}

            <div

                className="
                    mt-5
                    flex
                    flex-wrap
                    gap-2
                "

            >

                {

                    profile?.skills

                    ?.slice(0,3)

                    ?.map(

                        skill => (

                            <span

                                key={skill}

                                className="
                                    rounded-full
                                    bg-slate-100
                                    px-3
                                    py-1
                                    text-xs
                                    font-medium
                                    text-slate-700
                                "

                            >

                                {skill}

                            </span>

                        )

                    )

                }

            </div>





            {/* Footer */}

            <div

                className="
                    mt-5
                    flex
                    items-center
                    justify-between
                    text-sm
                "

            >

                <span

                    className="
                        text-slate-500
                    "

                >

               {application.status}

                </span>



                <span

                    className="
                        font-medium
                        text-slate-700
                    "

                >

                    {

                        new Date(

                            application.createdAt

                        ).toLocaleDateString()

                    }

                </span>

            </div>


        </div>

    );

}