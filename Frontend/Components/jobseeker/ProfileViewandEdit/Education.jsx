"use client";


import {
    GraduationCap,
    Plus,
    Trash2
} from "lucide-react";





export default function EducationSection({

    profile,

    formData,

    isEditing,

    setFormData,

    handleEducationChange,

    addEducation,

    removeEducation,

    errors

}) {



    const education = isEditing

        ?

        formData?.education || []

        :

        profile?.education || [];






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





            {/* Header */}

            <div

                className="
                    mb-8
                    flex
                    items-center
                    justify-between
                "

            >


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
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-xl
                            bg-purple-100
                            text-purple-600
                        "

                    >

                        <GraduationCap size={22}/>


                    </div>



                    <h2

                        className="
                            text-xl
                            font-bold
                            text-slate-900
                        "

                    >

                        Education

                    </h2>


                </div>





                {

                isEditing &&


                <button

                    onClick={addEducation}

                    type="button"

                    className="
                        flex
                        items-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                    "

                >

                    <Plus size={16}/>

                    Add


                </button>


                }



            </div>









            {/* Education List */}


            <div

                className="
                    space-y-5
                "

            >

            {

            education.length > 0 ?


            education.map((item,index)=>(


                <div

                    key={index}

                    className="
                        rounded-2xl
                        bg-slate-50
                        p-5
                        border
                        border-slate-100
                    "

                >





                {

                isEditing ?


                <div

                    className="
                        space-y-4
                    "

                >



                    <InputField

                        label="Degree"

                        name="degree"

                        value={item.degree}

                        index={index}

                        handleChange={handleEducationChange}

                        error={
                        errors?.[`education_degree_${index}`]
                        }

                    />





                    <InputField

                        label="Institute"

                        name="institute"

                        value={item.institute}

                        index={index}

                        handleChange={handleEducationChange}

                        error={
                        errors?.[`education_institute_${index}`]
                        }

                    />





                    <InputField

                        label="Field"

                        name="field"

                        value={item.field}

                        index={index}

                        handleChange={handleEducationChange}

                          error={
                        errors?.[`education_field_${index}`]
                        }

                    />






                    <div

                        className="
                            grid
                            grid-cols-1
                            gap-4
                            sm:grid-cols-2
                        "

                    >

                        <InputField

                            label="Start Year"

                            name="startYear"

                            type="number"

                            value={item.startYear}

                            index={index}

                            handleChange={handleEducationChange}

                              error={
                        errors?.[`education_startYear_${index}`]
                        }

                        />



                        <InputField

                            label="End Year"

                            name="endYear"

                            type="number"

                            value={item.endYear}

                            index={index}

                            handleChange={handleEducationChange}

                              error={
                        errors?.[`education_endYear_${index}`]
                        }

                        />


                    </div>






                    {

                    education.length > 1 &&


                    <button

                        type="button"

                        onClick={()=>removeEducation(index)}

                        className="
                            flex
                            items-center
                            gap-2
                            text-sm
                            text-red-500
                        "

                    >

                        <Trash2 size={16}/>

                        Remove


                    </button>


                    }





                </div>






                :





                <div>


                    <h3

                        className="
                            text-lg
                            font-bold
                            text-slate-900
                        "

                    >

                        {item.degree}


                    </h3>




                    <p

                        className="
                            mt-1
                            text-slate-600
                        "

                    >

                        {item.institute}

                    </p>




                    <p

                        className="
                            mt-3
                            text-sm
                            text-slate-500
                        "

                    >

                        {item.startYear} - {item.endYear}

                    </p>




                </div>



                }




                </div>



            ))



            :


            <p

                className="
                    text-slate-500
                "

            >

                No education added

            </p>


            }



            </div>






        </div>


    );

}










function InputField({

    label,

    name,

    value,

    type="text",

    index,

    handleChange,

    error

}){


return (

<div>


<label

className="
mb-2
block
text-sm
font-medium
text-slate-700
"

>

{label}

</label>



<input

type={type}

name={name}

value={value || ""}

onChange={(e)=>

handleChange(index,e)

}

className="
w-full
rounded-xl
border
border-slate-300
px-4
py-3
outline-none
focus:border-blue-500
"

/>



{

error &&

<p

className="
mt-2
text-sm
text-red-500
"

>

{error}

</p>

}



</div>

);


}