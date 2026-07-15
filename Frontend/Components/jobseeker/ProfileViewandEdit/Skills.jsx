"use client";


import {
    Code2,
    Plus,
    X
} from "lucide-react";

import { useState } from "react";





export default function SkillsSection({

    profile,

    formData,

    isEditing,

    setFormData,

    errors

}) {



    const skills = isEditing

        ?

        formData?.skills || []

        :

        profile?.skills || [];








    const [newSkill,setNewSkill] = useState("");







    const addSkill = ()=>{


        const skill = newSkill.trim();



        if(!skill){

            return;

        }



        if(skills.includes(skill)){

            setNewSkill("");

            return;

        }





        setFormData(prev=>({


            ...prev,


            skills:[

                ...prev.skills,

                skill

            ]


        }));



        setNewSkill("");



    };








    const removeSkill=(skill)=>{


        setFormData(prev=>({


            ...prev,


            skills:

            prev.skills.filter(

                item=>item!==skill

            )


        }));



    };







    return (

        <div

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                md:p-8
            "

        >




            <div

                className="
                    mb-6
                    flex
                    items-center
                    gap-3
                "

            >

                <div

                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-blue-100
                        text-blue-600
                    "

                >

                    <Code2 size={22}/>


                </div>



                <h2

                    className="
                        text-xl
                        font-bold
                        text-slate-900
                    "

                >

                    Skills

                </h2>


            </div>









            <div

                className="
                    flex
                    flex-wrap
                    gap-3
                "

            >

                {


                skills.length > 0


                ?

                skills.map((skill,index)=>(


                    <div

                        key={index}

                        className="
                            flex
                            items-center
                            gap-2
                            rounded-full
                            bg-blue-50
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-blue-700
                        "

                    >

                        {skill}




                        {

                        isEditing &&


                        <button

                            type="button"

                            onClick={()=>removeSkill(skill)}

                            className="
                                rounded-full
                                hover:bg-blue-100
                            "

                        >

                            <X size={15}/>


                        </button>


                        }


                    </div>


                ))



                :


                <p

                    className="
                        text-slate-500
                    "

                >

                    No skills added

                </p>


                }



            </div>









            {

            isEditing &&


            <div

                className="
                    mt-6
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                "

            >



                <input

                    value={newSkill}

                    onChange={(e)=>setNewSkill(e.target.value)}

                    placeholder="Add a skill e.g React"

                    className="
                        flex-1
                        rounded-xl
                        border
                        border-slate-300
                        px-4
                        py-3
                        outline-none
                        focus:border-blue-500
                    "

                />




                <button

                    type="button"

                    onClick={addSkill}

                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-5
                        py-3
                        font-semibold
                        text-white
                        hover:bg-blue-700
                    "

                >

                    <Plus size={18}/>

                    Add


                </button>


            </div>


            }







            {

            errors?.skills &&


            <p

                className="
                    mt-3
                    text-sm
                    text-red-500
                "

            >

                {errors.skills}

            </p>


            }




        </div>

    );

}