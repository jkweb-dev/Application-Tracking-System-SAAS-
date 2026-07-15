"use client";


import {

    BriefcaseBusiness,
    Plus,
    Trash2

} from "lucide-react";





export default function ExperienceSection({

    profile,

    formData,

    isEditing,

    handleExperienceChange,

    addExperience,

    removeExperience,

    errors

}) {



    const experience = isEditing

        ?

        formData?.experience || []

        :

        profile?.experience || [];






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
                            bg-green-100
                            text-green-600
                        "

                    >

                        <BriefcaseBusiness size={22}/>


                    </div>




                    <h2

                        className="
                            text-xl
                            font-bold
                            text-slate-900
                        "

                    >

                        Experience

                    </h2>


                </div>








                {

                isEditing &&


                <button

                    type="button"

                    onClick={addExperience}

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










            {/* Experience List */}



            <div

                className="
                    space-y-5
                "

            >


            {


            experience.length > 0


            ?


            experience.map((item,index)=>(



                <div

                    key={index}

                    className="
                        rounded-2xl
                        bg-slate-50
                        border
                        border-slate-100
                        p-5
                    "

                >





                {


                isEditing ?



                (

                <div

                    className="
                        space-y-5
                    "

                >




                    <InputField

                        label="Company"

                        name="company"

                        value={item.company}

                        index={index}

                        handleChange={handleExperienceChange}

                        error={
                        errors?.[`experience_company_${index}`]
                        }

                    />







                    <InputField

                        label="Position"

                        name="position"

                        value={item.position}

                        index={index}

                        handleChange={handleExperienceChange}

                        error={
                        errors?.[`experience_position_${index}`]
                        }

                    />








                    <InputField

                        label="Start Date"

                        name="startDate"

                        type="date"

                        value={item.startDate}

                        index={index}

                        handleChange={handleExperienceChange}

                          error={
                        errors?.[`experience_startDate_${index}`]
                        }


                    />







                    <InputField

                        label="End Date"

                        name="endDate"

                        type="date"

                        value={item.endDate}

                        index={index}

                        handleChange={handleExperienceChange}

                          error={
                        errors?.[`experience_endDate_${index}`]
                        }


                    />








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

                        Description

                    </label>




                    <textarea

                        name="description"

                        value={item.description || ""}

                        onChange={(e)=>

                            handleExperienceChange(index,e)

                        }

                        rows={4}

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

  error={
                        errors?.[`experience_description_${index}`]
                        }


                    </div>









                    {

                    experience.length > 1 &&


                    <button

                        type="button"

                        onClick={()=>removeExperience(index)}

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


                )






                :





                (



                <div

                    className="
                        relative
                        border-l-2
                        border-blue-200
                        pl-5
                    "

                >



                    <div

                        className="
                            absolute
                            -left-[7px]
                            top-1
                            h-3
                            w-3
                            rounded-full
                            bg-blue-600
                        "

                    />






                    <h3

                        className="
                            text-lg
                            font-bold
                            text-slate-900
                        "

                    >

                        {item.position}


                    </h3>




                    <p

                        className="
                            mt-1
                            font-medium
                            text-blue-600
                        "

                    >

                        {item.company}


                    </p>






                    <p

                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "

                    >

                        {item.startDate}

                        {" - "}

                        {

                        item.endDate || "Present"

                        }


                    </p>








                    <p

                        className="
                            mt-4
                            leading-7
                            text-slate-700
                        "

                    >

                        {item.description}


                    </p>




                </div>



                )


                }





                </div>


            ))



            :


            <p

                className="
                    text-slate-500
                "

            >

                No experience added

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