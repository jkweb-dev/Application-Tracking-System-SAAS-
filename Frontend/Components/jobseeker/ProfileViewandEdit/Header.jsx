"use client";


import {
    MapPin,
    Briefcase,
    Pencil
} from "lucide-react";




export default function ProfileHeader({

    profile,

    formData,

    isEditing,

    setIsEditing ,

    handleChange

}) {



    const data = isEditing ? formData : profile;



    return (

        <div

            className="
                rounded-3xl
                bg-white
                border
                border-slate-200
                shadow-sm
                p-6
                md:p-8
            "

        >


            <div

                className="
                    flex
                    flex-col
                    gap-6
                    md:flex-row
                    md:items-center
                    md:justify-between
                "

            >



                {/* Left Section */}

                <div

                    className="
                        flex
                        items-center
                        gap-5
                    "

                >


                    {/* Avatar */}

                    <div

                        className="
                            flex
                            h-20
                            w-20
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-100
                            text-3xl
                            font-bold
                            text-blue-700
                        "

                    >

                        {

                            data?.firstName?.charAt(0)

                        }


                    </div>




                    <div>


                        {

                            isEditing ?


                            <div

                                className="
                                    flex
                                    flex-col
                                    gap-2
                                "

                            >

                                <input

                                    name="firstName"

                                    value={formData.firstName || ""}

                                    onChange={handleChange}

                                    className="
                                        rounded-lg
                                        border
                                        px-3
                                        py-2
                                    "

                                />


                                <input

                                    name="lastName"

                                    value={formData.lastName || ""}

                                    onChange={handleChange}

                                    className="
                                        rounded-lg
                                        border
                                        px-3
                                        py-2
                                    "

                                />

                            </div>


                            :


                            <>


                                <h1

                                    className="
                                        text-2xl
                                        md:text-3xl
                                        font-bold
                                        text-slate-900
                                    "

                                >

                                    {data.firstName} {data.lastName}

                                </h1>



                                <p

                                    className="
                                        mt-1
                                        text-slate-600
                                    "

                                >

                                    {data.headline}

                                </p>




                                <div

                                    className="
                                        mt-3
                                        flex
                                        flex-wrap
                                        gap-4
                                        text-sm
                                        text-slate-500
                                    "

                                >


                                    <span

                                        className="
                                            flex
                                            items-center
                                            gap-1
                                        "

                                    >

                                        <MapPin size={16}/>

                                        {data.location}

                                    </span>





                                    <span

                                        className="
                                            flex
                                            items-center
                                            gap-1
                                        "

                                    >

                                        <Briefcase size={16}/>

                                        {data.experienceLevel}

                                    </span>



                                </div>


                            </>


                        }


                    </div>


                </div>






                {/* Right Section */}


                <div

                    className="
                        flex
                        flex-col
                        gap-4
                        md:items-end
                    "

                >


                    <button

                        onClick={()=>setIsEditing(!isEditing)}

                        className="
                            flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-700
                        "

                    >

                        <Pencil size={16}/>


                        {

                            isEditing

                            ?

                            "Cancel"

                            :

                            "Edit Profile"

                        }


                    </button>


                </div>



            </div>


        </div>

    );

}