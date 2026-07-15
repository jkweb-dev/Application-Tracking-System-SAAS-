"use client";


import {

    BriefcaseBusiness,

    FileText,

    Award,

    Clock

} from "lucide-react";



export default function ProfessionalInformation({

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

                    Professional Information

                </h2>


                <p

                    className="
                        mt-2
                        text-sm
                        text-slate-500
                    "

                >

                    Help recruiters understand your professional background.

                </p>


            </div>







            {/* Headline */}



            <div

                className="
                    mb-6
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

                    Professional Headline

                </label>




                <div

                    className="
                        relative
                    "

                >

                    <BriefcaseBusiness

                        size={18}

                        className="
                            absolute
                            left-4
                            top-4
                            text-slate-400
                        "

                    />



                    <input

                        name="headline"

                        value={formData.headline}

                        onChange={handleChange}

                        placeholder="Example: Full Stack MERN Developer"

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

                    errors.headline &&


                    <p

                        className="
                            mt-2
                            text-sm
                            text-red-500
                        "

                    >

                        {errors.headline}

                    </p>


                }



            </div>








            {/* Bio */}



            <div

                className="
                    mb-6
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

                    About Yourself

                </label>




                <div

                    className="
                        relative
                    "

                >


                    <FileText

                        size={18}

                        className="
                            absolute
                            left-4
                            top-4
                            text-slate-400
                        "

                    />



                    <textarea

                        name="bio"

                        value={formData.bio}

                        onChange={handleChange}

                        rows={5}

                        placeholder="
                        Write a short professional summary about your skills and experience
                        "

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
                            leading-6
                            outline-none
                            transition
                            focus:border-blue-500
                            focus:bg-white
                        "

                    />


                </div>

{
    errors.bio && (

        <p className="mt-2 text-sm text-red-500">
            {errors.bio}
        </p>

    )
}


            </div>









            {/* Experience Level + Years */}



            <div

                className="
                    grid
                    grid-cols-1
                    gap-6
                    md:grid-cols-2
                "

            >



                {/* Experience Level */}



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

                        Experience Level

                    </label>




                    <div

                        className="
                            relative
                        "

                    >


                        <Award

                            size={18}

                            className="
                                absolute
                                left-4
                                top-3.5
                                text-slate-400
                            "

                        />



                        <select

                            name="experienceLevel"

                            value={formData.experienceLevel}

                            onChange={handleChange}

                            className="
                                w-full
                                appearance-none
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

                        >

                            <option value="">

                                Select experience level

                            </option>


                            <option value="intern">

                                Internship

                            </option>


                            <option value="junior">

                                Junior

                            </option>


                            <option value="mid">

                                Mid Level

                            </option>


                            <option value="senior">

                                Senior

                            </option>


                        </select>


                    </div>

{
    errors.experienceLevel && (

        <p className="mt-2 text-sm text-red-500">
            {errors.experienceLevel}
        </p>

    )
}

                </div>









                {/* Years Experience */}



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

                        Years of Experience

                    </label>




                    <div

                        className="
                            relative
                        "

                    >

                        <Clock

                            size={18}

                            className="
                                absolute
                                left-4
                                top-3.5
                                text-slate-400
                            "

                        />



                        <input

                            type="number"

                            name="yearsOfExperience"

                            value={formData.yearsOfExperience}

                            onChange={handleChange}

                            placeholder="Example: 2"

                            min="0"

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
    errors.yearsOfExperience && (

        <p className="mt-2 text-sm text-red-500">
            {errors.yearsOfExperience}
        </p>

    )
}

                </div>



            </div>





        </section>


    );


}