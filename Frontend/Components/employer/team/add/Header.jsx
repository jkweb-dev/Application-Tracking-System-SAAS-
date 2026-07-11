"use client";

import { useRouter } from "next/navigation";

export default function TeamHeader() {


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


                    <button

                        onClick={() => router.back()}

                        className="

                            mb-5

                            rounded-lg

                            border

                            border-white/30

                            bg-white/10

                            px-4

                            py-2

                            text-sm

                            font-medium

                            backdrop-blur-sm

                            transition

                            hover:bg-white/20

                        "

                    >

                        ← Back

                    </button>




                    <h1

                        className="

                            text-3xl

                            font-bold

                            tracking-tight

                        "

                    >

                        Add Team Member

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

                        Create an account for a Recruiter or Hiring Manager.

                        Team members can securely sign in using the credentials

                        you provide and perform tasks according to their assigned role.

                    </p>


                </div>






                <div

                    className="

                        hidden

                        lg:flex

                        h-24

                        w-24

                        items-center

                        justify-center

                        rounded-3xl

                        bg-white/15

                        text-5xl

                        backdrop-blur-sm

                    "

                >

                    👥

                </div>



            </div>



        </section>


    );

}