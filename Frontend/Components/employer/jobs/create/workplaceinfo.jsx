export default function WorkplaceInfo({

    jobData,

    handleChange,

    errors

}){


    return (

        <div

            className="
            
            bg-white
            
            rounded-3xl
            
            border
            
            border-emerald-100
            
            shadow-sm
            
            p-6
            
            sm:p-8
            
            "

        >



            {/* Heading */}


            <div className="mb-7">


                <h2

                    className="
                    
                    text-xl
                    
                    sm:text-2xl
                    
                    font-bold
                    
                    text-gray-800
                    
                    "

                >

                    Workplace Details

                </h2>



                <p

                    className="
                    
                    text-sm
                    
                    text-gray-500
                    
                    mt-1
                    
                    "

                >

                    Tell candidates where and how they will work.

                </p>


            </div>






            <div

                className="
                
                grid
                
                grid-cols-1
                
                md:grid-cols-2
                
                gap-6
                
                "

            >






                {/* Location */}


                <div>


                    <label

                        className="
                        
                        text-sm
                        
                        font-medium
                        
                        text-gray-600
                        
                        "

                    >

                        Location

                    </label>



                    <input


                        type="text"


                        name="location"


                        value={jobData.location}


                        onChange={handleChange}


                        placeholder="e.g. Lahore, Pakistan"


                        className="
                        
                        mt-2
                        
                        w-full
                        
                        px-5
                        
                        py-3.5
                        
                        rounded-2xl
                        
                        border
                        
                        border-gray-200
                        
                        outline-none
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        transition
                        
                        text-gray-700
                        
                        "

                    />

{
    errors.location && (

        <p className="mt-2 text-sm text-red-500">

            {errors.location}

        </p>

    )
}

                </div>







                {/* Work Mode */}


                <div>


                    <label

                        className="
                        
                        text-sm
                        
                        font-medium
                        
                        text-gray-600
                        
                        "

                    >

                        Work Mode

                    </label>




                    <select


                        name="workMode"


                        value={jobData.workMode}


                        onChange={handleChange}



                        className="
                        
                        mt-2
                        
                        w-full
                        
                        px-5
                        
                        py-3.5
                        
                        rounded-2xl
                        
                        border
                        
                        border-gray-200
                        
                        outline-none
                        
                        bg-white
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        transition
                        
                        text-gray-700
                        
                        "

                    >


                        <option value="">

                            Select Work Mode

                        </option>



                        <option>

                            On-site

                        </option>



                        <option>

                            Hybrid

                        </option>



                        <option>

                            Remote

                        </option>


                    </select>


{
    errors.workMode && (

        <p className="mt-2 text-sm text-red-500">

            {errors.workMode}

        </p>

    )
}
                </div>









                {/* Experience Level */}



                <div>


                    <label

                        className="
                        
                        text-sm
                        
                        font-medium
                        
                        text-gray-600
                        
                        "

                    >

                        Experience Level

                    </label>




                    <select


                        name="experienceLevel"


                        value={jobData.experienceLevel}


                        onChange={handleChange}



                        className="
                        
                        mt-2
                        
                        w-full
                        
                        px-5
                        
                        py-3.5
                        
                        rounded-2xl
                        
                        border
                        
                        border-gray-200
                        
                        outline-none
                        
                        bg-white
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        transition
                        
                        text-gray-700
                        
                        "

                    >


                        <option value="">

                            Select Experience

                        </option>




                        <option>

                            Fresh Graduate

                        </option>



                        <option>

                            1-2 Years

                        </option>



                        <option>

                            3-5 Years

                        </option>



                        <option>

                            5+ Years

                        </option>



                    </select>

{
    errors.experienceLevel && (

        <p className="mt-2 text-sm text-red-500">

            {errors.experienceLevel}

        </p>

    )
}

                </div>









                {/* Vacancies */}



                <div>


                    <label

                        className="
                        
                        text-sm
                        
                        font-medium
                        
                        text-gray-600
                        
                        "

                    >

                        Number of Vacancies

                    </label>




                    <input


                        type="number"


                        name="vacancies"


                        value={jobData.vacancies}


                        onChange={handleChange}


                        placeholder="e.g. 3"


                        className="
                        
                        mt-2
                        
                        w-full
                        
                        px-5
                        
                        py-3.5
                        
                        rounded-2xl
                        
                        border
                        
                        border-gray-200
                        
                        outline-none
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        transition
                        
                        text-gray-700
                        
                        "

                    />

{
    errors.vacancies && (

        <p className="mt-2 text-sm text-red-500">

            {errors.vacancies}

        </p>

    )
}


                </div>






            </div>



        </div>

    );


}