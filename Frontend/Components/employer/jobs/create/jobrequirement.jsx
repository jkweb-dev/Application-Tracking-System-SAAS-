"use client";

import { useState } from "react";


export default function JobRequirements({

    jobData,

    handleChange,

    handleSkills,

    errors,

    setErrors

}){


    const [skillInput,setSkillInput] = useState("");





    const addSkill = ()=>{


        const skill = skillInput.trim();



        if(!skill){

            return;

        }



        if(jobData.skills.includes(skill)){


            setSkillInput("");

            return;

        }



        handleSkills([

            ...jobData.skills,

            skill

        ]);



        setSkillInput("");



    };





    const removeSkill = (skill)=>{


        const updatedSkills = jobData.skills.filter(

            (item)=>item !== skill

        );


        handleSkills(updatedSkills);


    };






    return (


        <div

            className="
            
            bg-white
            
            rounded-3xl
            
            border
            
            border-emerald-100
            
            shadow-sm
            
            p-6
            
            sm:p-8
            
            "

        >





            {/* Header */}



            <div className="mb-7">


                <h2

                    className="
                    
                    text-xl
                    
                    sm:text-2xl
                    
                    font-bold
                    
                    text-gray-800
                    
                    "

                >

                    Requirements & Skills

                </h2>



                <p

                    className="
                    
                    text-sm
                    
                    text-gray-500
                    
                    mt-1
                    
                    "

                >

                    Add required skills and qualifications
                    for this position.

                </p>



            </div>







            <div className="space-y-7">





                {/* Skills */}



                <div>


                    <label

                        className="
                        
                        text-sm
                        
                        font-medium
                        
                        text-gray-600
                        
                        "

                    >

                        Required Skills

                    </label>





                    <div

                        className="
                        
                        mt-2
                        
                        flex
                        
                        flex-col
                        
                        sm:flex-row
                        
                        gap-3
                        
                        "

                    >



                        <input


                            type="text"


                            value={skillInput}


                            onChange={(e)=>{
                                setErrors({})
                                setSkillInput(e.target.value)}}


                            onKeyDown={(e)=>{


                                if(e.key==="Enter"){

                                    e.preventDefault();

                                    addSkill();

                                }

                            }}



                            placeholder="e.g. React, Node.js"



                            className="
                            
                            flex-1
                            
                            px-5
                            
                            py-3.5
                            
                            rounded-2xl
                            
                            border
                            
                            border-gray-200
                            
                            outline-none
                            
                            focus:ring-2
                            
                            focus:ring-emerald-400
                            
                            "

                        />





                        <button


                            type="button"


                            onClick={addSkill}



                            className="
                            
                            px-6
                            
                            py-3.5
                            
                            rounded-2xl
                            
                            bg-emerald-600
                            
                            text-white
                            
                            font-semibold
                            
                            hover:bg-emerald-700
                            
                            transition
                            
                            "

                        >

                            Add Skill

                        </button>




                    </div>







                    {/* Skill Tags */}



                    {

                        jobData.skills.length > 0 &&


                        (

                            <div

                                className="
                                
                                flex
                                
                                flex-wrap
                                
                                gap-3
                                
                                mt-5
                                
                                "

                            >


                                {

                                    jobData.skills.map((skill)=>(


                                        <div

                                            key={skill}

                                            className="
                                            
                                            flex
                                            
                                            items-center
                                            
                                            gap-2
                                            
                                            bg-emerald-50
                                            
                                            text-emerald-700
                                            
                                            px-4
                                            
                                            py-2
                                            
                                            rounded-full
                                            
                                            text-sm
                                            
                                            font-medium
                                            
                                            "

                                        >

                                            {skill}




                                            <button

                                                type="button"

                                                onClick={()=>removeSkill(skill)}

                                                className="
                                                
                                                text-emerald-600
                                                
                                                hover:text-red-500
                                                
                                                "

                                            >

                                                ×

                                            </button>



                                        </div>


                                    ))

                                }


                            </div>


                        )

                    }


{
    errors.skills && (

        <p className="mt-2 text-sm text-red-500">

            {errors.skills}

        </p>

    )
}


                </div>









                {/* Requirements */}



                <div>


                    <label

                        className="
                        
                        text-sm
                        
                        font-medium
                        
                        text-gray-600
                        
                        "

                    >

                        Candidate Requirements

                    </label>




                    <textarea


                        name="requirements"


                        value={jobData.requirements}


                        onChange={handleChange}



                        rows="6"



                        placeholder="
                        Example:
                        
                        - Strong JavaScript fundamentals
                        - Experience with React
                        - Good communication skills
                        "



                        className="
                        
                        mt-2
                        
                        w-full
                        
                        px-5
                        
                        py-4
                        
                        rounded-2xl
                        
                        border
                        
                        border-gray-200
                        
                        resize-none
                        
                        outline-none
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        transition
                        
                        text-gray-700
                        
                        "

                    />



                </div>






            </div>



{
    errors.requirements && (

        <p className="mt-2 text-sm text-red-500">

            {errors.requirements}

        </p>

    )
}

        </div>


    );


}