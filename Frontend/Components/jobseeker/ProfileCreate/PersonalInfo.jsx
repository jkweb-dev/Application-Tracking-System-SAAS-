"use client";


import {
    User,
    Mail,
    Phone,
    MapPin
} from "lucide-react";



export default function PersonalInformation({

    formData,

    errors,

    handleChange

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
                "

            >

                <h2

                    className="
                        text-2xl
                        font-bold
                        text-slate-900
                    "

                >

                    Personal Information

                </h2>


                <p

                    className="
                        mt-2
                        text-sm
                        text-slate-500
                    "

                >

                    Tell us basic details about yourself.

                </p>


            </div>





            <div

                className="
                    grid
                    grid-cols-1
                    gap-6
                    md:grid-cols-2
                "

            >



                {/* First Name */}


                <InputField

                    label="First Name"

                    name="firstName"

                    icon={<User size={18}/>}

                    value={formData.firstName}

                    onChange={handleChange}

                    error={errors.firstName}

                    placeholder="Enter first name"

                />
               



                {/* Last Name */}


                <InputField

                    label="Last Name"

                    name="lastName"

                    icon={<User size={18}/>}

                    value={formData.lastName}

                    onChange={handleChange}

                    error={errors.lastName}

                    placeholder="Enter last name"

                />
               







                {/* Email */}


                <InputField

                    label="Email Address"

                    name="email"

                    type="email"

                    icon={<Mail size={18}/>}

                    value={formData.email}

                    onChange={handleChange}

                    error={errors.email}

                    placeholder="example@gmail.com"

                />
                
    






                {/* Phone */}


                <InputField

                    label="Phone Number"

                    name="phone"

                    icon={<Phone size={18}/>}

                    value={formData.phone}

                    onChange={handleChange}

                    error={errors.phone}

                    placeholder="+92 300 0000000"

                />
               

            </div>







            {/* Location Large Field */}



            <div

                className="
                    mt-6
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

                    Location

                </label>





                <div

                    className="
                        relative
                    "

                >

                    <MapPin

                        size={18}

                        className="
                            absolute
                            left-4
                            top-4
                            text-slate-400
                        "

                    />



                    <textarea

                        name="location"

                        value={formData.location}

                        onChange={handleChange}

                        placeholder="City, Country"

                        rows={3}

                        className="
                            w-full
                            rounded-xl
                            border
                            border-slate-200
                            bg-slate-50
                            py-3
                            pl-11
                            pr-4
                            text-sm
                            outline-none
                            transition
                            focus:border-blue-500
                            focus:bg-white
                        "

                    />


                </div>

 {
    errors.location && (

        <p
            className="
                mt-2
                text-sm
                text-red-500
            "
        >
            {errors.location}
        </p>

    )
}

                




            </div>



        </section>


    );

}







function InputField({

    label,

    name,

    type="text",

    icon,

    value,

    onChange,

    error,

    placeholder

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





            <div

                className="
                    relative
                "

            >


                <span

                    className="
                        absolute
                        left-4
                        top-3.5
                        text-slate-400
                    "

                >

                    {icon}

                </span>




                <input

                    type={type}

                    name={name}

                    value={value}

                    onChange={onChange}

                    placeholder={placeholder}

                    className="
                        w-full
                        rounded-xl
                        border
                        border-slate-200
                        bg-slate-50
                        py-3
                        pl-11
                        pr-4
                        text-sm
                        outline-none
                        transition
                        focus:border-blue-500
                        focus:bg-white
                    "

                />


            </div>





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