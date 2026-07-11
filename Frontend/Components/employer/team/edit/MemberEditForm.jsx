"use client";

export default function MemberEditForm({

    memberData,

    handleChange,

    handleUpdate,

    loading,

    setEditMode,

    errors

}){


    return(


        <div

            className="

                rounded-3xl

                border

                border-slate-200

                bg-white

                p-8

                shadow-sm

            "

        >



            <div>


                <h1

                    className="

                        text-3xl

                        font-bold

                        text-slate-800

                    "

                >

                    Edit Team Member

                </h1>




                <p

                    className="

                        mt-2

                        text-slate-500

                    "

                >

                    Update the member's information and save your changes.

                </p>


            </div>






            <div

                className="

                    mt-8

                    grid

                    gap-6

                    md:grid-cols-2

                "

            >




                {/* First Name */}


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

                        First Name

                    </label>



                    <input

                        type="text"

                        name="firstName"

                        value={memberData.firstName}

                        onChange={handleChange}

                        className="

                            w-full

                            rounded-xl

                            border

                            border-slate-300

                            px-4

                            py-3

                            outline-none

                            transition

                            focus:border-blue-500

                        "

                    />

{
    errors.firstName && (

        <p

            className="

                mt-2

                text-sm

                font-medium

                text-red-600

            "

        >

            {errors.firstName}

        </p>

    )
}

                </div>







                {/* Last Name */}


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

                        Last Name

                    </label>



                    <input

                        type="text"

                        name="lastName"

                        value={memberData.lastName}

                        onChange={handleChange}

                        className="

                            w-full

                            rounded-xl

                            border

                            border-slate-300

                            px-4

                            py-3

                            outline-none

                            transition

                            focus:border-blue-500

                        "

                    />


{
    errors.lastName && (

        <p

            className="

                mt-2

                text-sm

                font-medium

                text-red-600

            "

        >

            {errors.lastName}

        </p>

    )
}

                </div>








                {/* Email */}


                <div className="md:col-span-2">


                    <label

                        className="

                            mb-2

                            block

                            text-sm

                            font-semibold

                            text-slate-700

                        "

                    >

                        Email Address

                    </label>



                    <input

                        type="email"

                        name="email"

                        value={memberData.email}

                        onChange={handleChange}

                        className="

                            w-full

                            rounded-xl

                            border

                            border-slate-300

                            px-4

                            py-3

                            outline-none

                            transition

                            focus:border-blue-500

                        "

                    />

{
    errors.email && (

        <p

            className="

                mt-2

                text-sm

                font-medium

                text-red-600

            "

        >

            {errors.email}

        </p>

    )
}
                </div>








                {/* Role */}


                <div className="md:col-span-2">


                    <label

                        className="

                            mb-2

                            block

                            text-sm

                            font-semibold

                            text-slate-700

                        "

                    >

                        Role

                    </label>



                    <select

                        name="role"

                        value={memberData.role}

                        onChange={handleChange}

                        className="

                            w-full

                            rounded-xl

                            border

                            border-slate-300

                            px-4

                            py-3

                            outline-none

                            transition

                            focus:border-blue-500

                        "

                    >

                        <option value="recruiter">

                            Recruiter

                        </option>

                        <option value="hiring_manager">

                            Hiring Manager

                        </option>

                    </select>


{
    errors.role && (

        <p

            className="

                mt-2

                text-sm

                font-medium

                text-red-600

            "

        >

            {errors.role}

        </p>

    )
}
                </div>



            </div>







            {/* Actions */}


            <div

                className="

                    mt-10

                    flex

                    flex-col-reverse

                    gap-4

                    sm:flex-row

                    sm:justify-end

                "

            >



                <button

                    type="button"

                    onClick={()=>setEditMode(false)}

                    className="

                        rounded-xl

                        border

                        border-slate-300

                        px-6

                        py-3

                        font-semibold

                        text-slate-700

                        transition

                        hover:bg-slate-100

                    "

                >

                    Cancel

                </button>






                <button

                    type="button"

                    onClick={handleUpdate}

                    disabled={loading}

                    className="

                        rounded-xl

                        bg-blue-600

                        px-6

                        py-3

                        font-semibold

                        text-white

                        transition

                        hover:bg-blue-700

                        disabled:cursor-not-allowed

                        disabled:opacity-60

                    "

                >

                    {

                        loading

                        ?

                        "Saving..."

                        :

                        "Save Changes"

                    }

                </button>



            </div>



        </div>


    );


}