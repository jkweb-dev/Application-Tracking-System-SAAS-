"use client";

import { useRouter } from "next/navigation";

export default function MemberActions({

    loading,

    handleSubmit

}) {


    const router = useRouter();



    return (


        <section

            className="

                rounded-3xl

                border

                border-slate-200

                bg-white

                p-6

                shadow-sm

            "

        >



            <div

                className="

                    flex

                    flex-col-reverse

                    gap-4

                    sm:flex-row

                    sm:items-center

                    sm:justify-end

                "

            >



                {/* Cancel */}



                <button

                    type="button"

                    onClick={() => router.back()}

                    disabled={loading}

                    className="

                        w-full

                        rounded-xl

                        border

                        border-slate-300

                        bg-white

                        px-6

                        py-3

                        font-semibold

                        text-slate-700

                        transition

                        hover:bg-slate-100

                        disabled:cursor-not-allowed

                        disabled:opacity-60

                        sm:w-auto

                    "

                >

                    Cancel

                </button>





                {/* Submit */}



                <button

                    type="button"

                    onClick={handleSubmit}

                    disabled={loading}

                    className="

                        w-full

                        rounded-xl

                        bg-gradient-to-r

                        from-indigo-600

                        via-blue-600

                        to-cyan-600

                        px-8

                        py-3

                        font-semibold

                        text-white

                        shadow-lg

                        transition

                        hover:scale-[1.02]

                        hover:shadow-xl

                        disabled:cursor-not-allowed

                        disabled:opacity-60

                        sm:w-auto

                    "

                >

                    {

                        loading

                        ?

                        "Adding Member..."

                        :

                        "Add Team Member"

                    }

                </button>



            </div>



        </section>


    );

}