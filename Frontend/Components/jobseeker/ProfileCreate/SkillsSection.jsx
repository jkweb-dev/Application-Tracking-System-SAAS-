"use client";


import {

    useState

} from "react";


import {

    Code2,

    Plus,

    X

} from "lucide-react";





export default function SkillsSection({

    skills,

    errors,

    handleSkillsChange

}){


    const [skillInput,setSkillInput] = useState("");





    const addSkill=()=>{


        const value = skillInput.trim();



        if(!value)

            return;




        if(skills.includes(value))

            return;




        handleSkillsChange([

            ...skills,

            value

        ]);



        setSkillInput("");



    };








    const removeSkill=(skill)=>{


        handleSkillsChange(

            skills.filter(

                item=>item !== skill

            )

        );


    };







    const handleKeyDown=(e)=>{


        if(e.key === "Enter"){


            e.preventDefault();


            addSkill();


        }


    };





    return(


        <section

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
                "

            >

                <h2

                    className="
                        flex
                        items-center
                        gap-2
                        text-2xl
                        font-bold
                        text-slate-900
                    "

                >

                    <Code2

                        size={26}

                        className="text-blue-600"

                    />

                    Skills

                </h2>



                <p

                    className="
                        mt-2
                        text-sm
                        text-slate-500
                    "

                >

                    Add your technical and professional skills.

                </p>


            </div>








            {/* Add Skill Input */}



            <div

                className="
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                "

            >



                <input

                    value={skillInput}

                    onChange={(e)=>setSkillInput(e.target.value)}

                    onKeyDown={handleKeyDown}

                    placeholder="Example: React, Node.js, UI Design"

                    className="
                        flex-1
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        px-4
                        py-3
                        text-sm
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
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
                        px-6
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        transition
                        hover:bg-blue-700
                    "

                >

                    <Plus size={18}/>

                    Add

                </button>



            </div>









            {/* Skills Badges */}



            <div

                className="
                    mt-6
                    flex
                    flex-wrap
                    gap-3
                "

            >


                {


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


                            <span>

                                {skill}

                            </span>



                            <button

                                type="button"

                                onClick={()=>removeSkill(skill)}

                                className="
                                    rounded-full
                                    hover:bg-blue-100
                                "

                            >

                                <X

                                    size={15}

                                />

                            </button>


                        </div>


                    ))


                }


            </div>








            {

                errors.skills &&


                <p

                    className="
                        mt-4
                        text-sm
                        text-red-500
                    "

                >

                    {errors.skills}

                </p>


            }



        </section>


    );


}