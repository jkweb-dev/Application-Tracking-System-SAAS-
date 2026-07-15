"use client";


import {
    Mail,
    Phone,
    MapPin
} from "lucide-react";




export default function PersonalInformation({

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

                Personal Information

            </h2>





            <div

                className="
                    grid
                    grid-cols-1
                    gap-5
                    md:grid-cols-2
                "

            >





                {/* Email */}

                <InfoField

                    icon={<Mail size={18}/>}

                    label="Email"

                    value={data?.email}

                    editing={isEditing}

                    name="email"

                    handleChange={handleChange}

                    error={errors?.email}

                />






                {/* Phone */}

                <InfoField

                    icon={<Phone size={18}/>}

                    label="Phone"

                    value={data?.phone}

                    editing={isEditing}

                    name="phone"

                    handleChange={handleChange}

                    error={errors?.phone}

                />







                {/* Location */}

                <InfoField

                    icon={<MapPin size={18}/>}

                    label="Location"

                    value={data?.location}

                    editing={isEditing}

                    name="location"

                    handleChange={handleChange}

                    error={errors?.location}

                />





            </div>


        </div>

    );

}








function InfoField({

    icon,

    label,

    value,

    editing,

    name,

    handleChange,

    error

}) {



    return (

        <div

            className="
                rounded-2xl
                bg-slate-50
                p-4
            "

        >



            <div

                className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-sm
                    text-slate-500
                "

            >

                {icon}


                <span>

                    {label}

                </span>


            </div>






            {

            editing

            ?

            <input

                name={name}

                value={value || ""}

                onChange={handleChange}

                className="
                    w-full
                    rounded-xl
                    border
                    border-slate-300
                    bg-white
                    px-3
                    py-2
                    text-sm
                    outline-none
                    focus:border-blue-500
                "

            />


            :


            <p

                className="
                    break-words
                    font-medium
                    text-slate-800
                "

            >

                {value || "Not added"}

            </p>


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