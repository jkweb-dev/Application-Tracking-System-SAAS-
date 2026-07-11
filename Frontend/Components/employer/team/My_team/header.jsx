"use client";

import { useRouter } from "next/navigation";


export default function TeamHeader({

    members

}) {


    const router = useRouter();



    return (


        <section

            className="

                rounded-3xl

                bg-gradient-to-r

                from-indigo-600

                via-blue-600

                to-cyan-600

                p-6

                text-white

                shadow-xl

            "

        >



            <div

                className="

                    flex

                    flex-col

                    gap-6

                    sm:flex-row

                    sm:items-center

                    sm:justify-between

                "

            >




                <div>



                    <h1

                        className="

                            text-3xl

                            font-bold

                            tracking-tight

                        "

                    >

                        Team Management

                    </h1>





                    <p

                        className="

                            mt-3

                            max-w-2xl

                            text-sm

                            leading-7

                            text-blue-100

                            sm:text-base

                        "

                    >

                        Manage your company members, roles, and access
                        permissions from one place.

                    </p>





                    <div

                        className="

                            mt-5

                            inline-flex

                            items-center

                            rounded-full

                            bg-white/15

                            px-4

                            py-2

                            text-sm

                            font-medium

                            backdrop-blur-sm

                        "

                    >

                        👥 {members.length} / 2 Team Members


                    </div>



                </div>








                <div

                    className="

                        flex

                        flex-col

                        gap-3

                        sm:items-end

                    "

                >





                    {

                        members.length < 2 && (


                            <button


                                onClick={()=>router.push(

                                    "/employer/team/add"

                                )}


                                className="

                                    rounded-xl

                                    bg-white

                                    px-6

                                    py-3

                                    font-semibold

                                    text-blue-700

                                    shadow-lg

                                    transition

                                    hover:scale-105

                                "

                            >

                                + Add Team Member


                            </button>


                        )

                    }





                    <div

                        className="

                            hidden

                            lg:flex

                            h-20

                            w-20

                            items-center

                            justify-center

                            rounded-3xl

                            bg-white/15

                            text-4xl

                            backdrop-blur-sm

                        "

                    >

                        👥


                    </div>




                </div>



            </div>



        </section>


    );


}