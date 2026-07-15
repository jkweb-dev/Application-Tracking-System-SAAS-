"use client";


import {

    Briefcase,

    Plus,

    Trash2

} from "lucide-react";





export default function ExperienceSection({

    experience,

    handleExperienceChange,

    addExperience,

    removeExperience ,

    errors

}){


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
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "

            >



                <div>


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

                        <Briefcase

                            size={26}

                            className="text-blue-600"

                        />

                        Experience

                    </h2>



                    <p

                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "

                    >

                        Add your professional work experience.

                    </p>


                </div>







                <button

                    type="button"

                    onClick={addExperience}

                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-50
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        text-blue-700
                        transition
                        hover:bg-blue-100
                    "

                >

                    <Plus size={18}/>

                    Add Experience

                </button>



            </div>









            <div

                className="
                    space-y-6
                "

            >



                {


                    experience.map((item,index)=>(


                        <div

                            key={index}

                            className="
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                p-5
                            "

                        >





                            <div

                                className="
                                    mb-5
                                    flex
                                    items-center
                                    justify-between
                                "

                            >


                                <h3

                                    className="
                                        font-semibold
                                        text-slate-800
                                    "

                                >

                                    Experience #{index+1}

                                </h3>





                                {

                                    experience.length > 1 &&


                                    <button

                                        type="button"

                                        onClick={()=>removeExperience(index)}

                                        className="
                                            rounded-lg
                                            p-2
                                            text-red-500
                                            transition
                                            hover:bg-red-50
                                        "

                                    >

                                        <Trash2 size={18}/>

                                    </button>


                                }


                            </div>









                            <div

                                className="
                                    grid
                                    grid-cols-1
                                    gap-5
                                    md:grid-cols-2
                                "

                            >



                                <Input

                                    label="Company"

                                    name="company"

                                    placeholder="Google"

                                    value={item.company}

                                    index={index}

                                    handleExperienceChange={handleExperienceChange}

                                    errors = {errors}

                                />





                                <Input

                                    label="Position"

                                    name="position"

                                    placeholder="Frontend Developer"

                                    value={item.position}

                                    index={index}

                                    handleExperienceChange={handleExperienceChange}

                                    errors = {errors}

                                />







                                <Input

                                    label="Start Date"

                                    name="startDate"

                                    type="date"

                                    value={item.startDate}

                                    index={index}

                                    handleExperienceChange={handleExperienceChange}

                                    errors = {errors}

                                />







                                <Input

                                    label="End Date"

                                    name="endDate"

                                    type="date"

                                    value={item.endDate}

                                    index={index}

                                    handleExperienceChange={handleExperienceChange}

                                    errors = {errors}

                                />



                            </div>








                            {/* Description */}



                            <div

                                className="
                                    mt-5
                                "

                            >


                                <label

                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-semibold
                                        text-slate-700
                                    "

                                >

                                    Description

                                </label>





                                <textarea

                                    name="description"

                                    value={item.description}

                                    onChange={(e)=>

                                        handleExperienceChange(index,e)

                                    }

                                    rows={4}

                                    placeholder="Describe your responsibilities and achievements"

                                    className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-200
                                        bg-white
                                        px-4
                                        py-3
                                        text-sm
                                        leading-6
                                        outline-none
                                        transition
                                        focus:border-blue-500
                                    "

                                />

                                {
    errors[`experience_description_${index}`] &&

    <p className="mt-2 text-sm text-red-500">

        {errors[`experience_description_${index}`]}

    </p>

}


                            </div>





                        </div>


                    ))


                }



            </div>




        </section>


    );


}









function Input({

    label,

    name,

    type="text",

    placeholder,

    value,

    index,

    handleExperienceChange ,

    errors

}){


    return(


        <div>


            <label

                className="
                    mb-2
                    block
                    text-sm
                    font-semibold
                    text-slate-700
                "

            >

                {label}

            </label>





            <input

                type={type}

                name={name}

                value={value}

                onChange={(e)=>

                    handleExperienceChange(index,e)

                }

                placeholder={placeholder}

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-200
                    bg-white
                    px-4
                    py-3
                    text-sm
                    outline-none
                    transition
                    focus:border-blue-500
                "

                
            />

            {
                errors[`experience_${name}_${index}`] &&

                <p className="mt-2 text-sm text-red-500">

                    {errors[`experience_${name}_${index}`]}

                </p>
            }

 

        </div>


    );


}