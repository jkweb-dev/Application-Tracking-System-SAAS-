"use client";


import {
    BriefcaseBusiness,
    UserRound,
    Clock3
} from "lucide-react";




export default function ProfessionalInformation({

    profile,

    formData,

    isEditing,

    handleChange,

    errors

}) {


    const data = isEditing ? formData : profile;



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



            <h2

                className="
                    mb-6
                    text-xl
                    font-bold
                    text-slate-900
                "

            >

                Professional Information

            </h2>






            <div

                className="
                    space-y-6
                "

            >





                {/* Headline */}

                <Field

                    icon={<BriefcaseBusiness size={18}/>}

                    label="Professional Headline"

                    value={data?.headline}

                    editing={isEditing}

                    name="headline"

                    handleChange={handleChange}

                    error={errors?.headline}

                />







                {/* Experience Level */}

                <Field

                    icon={<Clock3 size={18}/>}

                    label="Experience Level"

                    value={data?.experienceLevel}

                    editing={isEditing}

                    name="experienceLevel"

                    handleChange={handleChange}

                    error={errors?.experienceLevel}

                    type="select"

                />







                {/* Years Experience */}

                <Field

                    icon={<UserRound size={18}/>}

                    label="Years of Experience"

                    value={data?.yearsOfExperience}

                    editing={isEditing}

                    name="yearsOfExperience"

                    handleChange={handleChange}

                    error={errors?.yearsOfExperience}

                    type="number"

                />







                {/* Bio */}

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

                        About Yourself

                    </label>





                    {

                    isEditing

                    ?

                    <textarea

                        name="bio"

                        value={data?.bio || ""}

                        onChange={handleChange}

                        rows={5}

                        className="
                            w-full
                            resize-none
                            rounded-2xl
                            border
                            border-slate-300
                            bg-white
                            px-4
                            py-3
                            text-sm
                            outline-none
                            focus:border-blue-500
                        "

                    />

                    :


                    <div

                        className="
                            rounded-2xl
                            bg-slate-50
                            p-5
                            text-sm
                            leading-7
                            text-slate-700
                        "

                    >

                        {

                        data?.bio

                        ||

                        "No professional summary added"

                        }


                    </div>


                    }






                    {

                    errors?.bio &&

                    <p

                        className="
                            mt-2
                            text-sm
                            text-red-500
                        "

                    >

                        {errors.bio}

                    </p>

                    }


                </div>






            </div>




        </div>

    );

}









function Field({

    icon,

    label,

    value,

    editing,

    name,

    handleChange,

    error,

    type="text"

}){


    return (

        <div>


            <label

                className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-medium
                    text-slate-700
                "

            >

                {icon}

                {label}

            </label>






            {

            editing && type==="select"

            ?

            <select

                name={name}

                value={value || ""}

                onChange={handleChange}

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                "

            >

                <option value="">
                    Select level
                </option>

                <option value="Beginner">
                    Beginner
                </option>

                <option value="Intermediate">
                    Intermediate
                </option>

                <option value="Senior">
                    Senior
                </option>


            </select>


            :


            editing

            ?

            <input

                type={type}

                name={name}

                value={value || ""}

                onChange={handleChange}

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-500
                "

            />


            :


            <div

                className="
                    rounded-2xl
                    bg-slate-50
                    px-4
                    py-3
                    font-medium
                    text-slate-800
                "

            >

                {value || "Not added"}

            </div>


            }





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