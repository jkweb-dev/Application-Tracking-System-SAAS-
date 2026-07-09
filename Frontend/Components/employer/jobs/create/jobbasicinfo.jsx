export default function JobBasicInfo({

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



            {/* Section Heading */}


            <div className="mb-7">


                <h2

                    className="
                    
                    text-xl
                    
                    sm:text-2xl
                    
                    font-bold
                    
                    text-gray-800
                    
                    "

                >

                    Basic Information

                </h2>



                <p

                    className="
                    
                    text-sm
                    
                    text-gray-500
                    
                    mt-1
                    
                    "

                >

                    Provide the basic details about this job opening.

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





                {/* Job Title */}


                <div className="md:col-span-2">


                    <label className="text-sm font-medium text-gray-600">

                        Job Title

                    </label>



                    <input


                        type="text"


                        name="jobTitle"


                        value={jobData.jobTitle}


                        onChange={handleChange}


                        placeholder="e.g. Frontend Developer"


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
                        
                        focus:border-emerald-400
                        
                        transition
                        
                        text-gray-700
                        
                        "

                    />

{
    errors.jobTitle && (

        <p className="mt-2 text-sm text-red-500">

            {errors.jobTitle}

        </p>

    )
}
                </div>









                {/* Department */}


                <div>


                    <label className="text-sm font-medium text-gray-600">

                        Department

                    </label>



                    <select


                        name="department"


                        value={jobData.department}


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

                            Select Department

                        </option>


                        <option>

                            Engineering

                        </option>


                        <option>

                            Marketing

                        </option>


                        <option>

                            Sales

                        </option>


                        <option>

                            Human Resources

                        </option>


                        <option>

                            Finance

                        </option>



                    </select>
                    {
    errors.department && (

        <p className="mt-2 text-sm text-red-500">

            {errors.department}

        </p>

    )
}



                </div>








                {/* Employment Type */}


                <div>


                    <label className="text-sm font-medium text-gray-600">

                        Employment Type

                    </label>




                    <select


                        name="employmentType"


                        value={jobData.employmentType}


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

                            Select Type

                        </option>



                        <option>

                            Full Time

                        </option>


                        <option>

                            Part Time

                        </option>


                        <option>

                            Contract

                        </option>


                        <option>

                            Internship

                        </option>



                    </select>

{
    errors.employmentType && (

        <p className="mt-2 text-sm text-red-500">

            {errors.employmentType}

        </p>

    )
}

                </div>






            </div>



        </div>


    );


}