"use client";

import { useDroppable } from "@dnd-kit/core";

import ApplicantCard from "./ApplicantCard";

import EmptyColumn from "./Empty";



export default function PipelineColumn({

    id,

    title,

    applications

}) {

    const {

        setNodeRef,

        isOver

    } = useDroppable({

        id

    });



    return (

        <div

            ref={setNodeRef}

            className={`
                min-w-[340px]
                rounded-3xl
                border
                bg-white
                transition-all
                duration-300

                ${
                    isOver

                    ?

                    "border-indigo-500 bg-indigo-50"

                    :

                    "border-slate-200"

                }

            `}

        >

            {/* Header */}

            <div

                className="
                    sticky
                    top-0
                    rounded-t-3xl
                    border-b
                    border-slate-200
                    bg-slate-50
                    p-5
                "

            >

                <div

                    className="
                        flex
                        items-center
                        justify-between
                    "

                >

                    <h2

                        className="
                            text-lg
                            font-bold
                            text-slate-900
                        "

                    >

                        {title}

                    </h2>



                    <span

                        className="
                            rounded-full
                            bg-indigo-100
                            px-3
                            py-1
                            text-sm
                            font-semibold
                            text-indigo-700
                        "

                    >

                        {applications.length}

                    </span>

                </div>

            </div>





            {/* Cards */}

            <div

                className="
                    flex
                    min-h-[500px]
                    flex-col
                    gap-4
                    p-4
                "

            >

                {

                    applications.length === 0

                    ?

                    <EmptyColumn />

                    :

                    applications.map(

                        (

                            application

                        ) => (

                            <ApplicantCard

                                key={application._id}

                                application={application}

                            />

                        )

                    )

                }

            </div>

        </div>

    );

}