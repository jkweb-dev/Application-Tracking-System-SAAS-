"use client";


import {

    GraduationCap,

    Plus,

    Trash2

} from "lucide-react";





export default function EducationSection({

    education,

    handleEducationChange,

    addEducation,

    removeEducation ,

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

                        <GraduationCap

                            size={26}

                            className="text-blue-600"

                        />

                        Education

                    </h2>


                    <p

                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "

                    >

                        Add your academic background.

                    </p>


                </div>







                <button

                    type="button"

                    onClick={addEducation}

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

                    Add Education

                </button>




            </div>









            <div

                className="
                    space-y-6
                "

            >



                {


                    education.map((item,index)=>(



                        <div

                            key={index}

                            className="
                                relative
                                rounded-2xl
                                border
                                border-slate-200
                                bg-slate-50
                                p-5
                            "

                        >





                            {/* Header */}



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

                                    Education #{index+1}

                                </h3>





                                {

                                    education.length > 1 &&


                                    <button

                                        type="button"

                                        onClick={()=>removeEducation(index)}

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

                                    label="Degree"

                                    name="degree"

                                    placeholder="BS Computer Science"

                                    value={item.degree}

                                    index={index}

                                    handleEducationChange={handleEducationChange}

                                    errors = {errors}

                                />




                                <Input

                                    label="Institute"

                                    name="institute"

                                    placeholder="University Name"

                                    value={item.institute}

                                    index={index}

                                    handleEducationChange={handleEducationChange}

                                    errors = {errors}

                                />





                                <Input

                                    label="Field of Study"

                                    name="field"

                                    placeholder="Computer Science"

                                    value={item.field}

                                    index={index}

                                    handleEducationChange={handleEducationChange}

                                    errors = {errors}

                                />






                                <Input

                                    label="Start Year"

                                    name="startYear"

                                    placeholder="2022"

                                    value={item.startYear}

                                    index={index}

                                    handleEducationChange={handleEducationChange}

                                    errors = {errors}

                                />





                                <Input

                                    label="End Year"

                                    name="endYear"

                                    placeholder="2026"

                                    value={item.endYear}

                                    index={index}

                                    handleEducationChange={handleEducationChange}

                                    errors = {errors}

                                />




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

    placeholder,

    value,

    index,

    handleEducationChange ,

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

                name={name}

                value={value}

                onChange={(e)=>

                    handleEducationChange(index,e)

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
                errors[`education_${name}_${index}`] &&

                <p className="mt-2 text-sm text-red-500">

                    {errors[`education_${name}_${index}`]}

                </p>
            }


        </div>


    );

}