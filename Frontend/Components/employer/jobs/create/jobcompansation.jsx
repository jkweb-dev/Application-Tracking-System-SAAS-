export default function JobCompensation({

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

                    Compensation & Settings

                </h2>



                <p

                    className="
                    
                    text-sm
                    
                    text-gray-500
                    
                    mt-1
                    
                    "

                >

                    Set salary details and manage job availability.

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







                {/* Minimum Salary */}


                <div>


                    <label className="text-sm font-medium text-gray-600">

                        Minimum Salary

                    </label>



                    <input


                        type="number"


                        name="salaryMin"


                        value={jobData.salaryMin}


                        onChange={handleChange}



                        placeholder="e.g. 50000"



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
                        
                        "

                    />

                    {
    errors.salaryMin && (

        <p className="mt-2 text-sm text-red-500">

            {errors.salaryMin}

        </p>

    )
}


                </div>









                {/* Maximum Salary */}



                <div>


                    <label className="text-sm font-medium text-gray-600">

                        Maximum Salary

                    </label>



                    <input


                        type="number"


                        name="salaryMax"


                        value={jobData.salaryMax}


                        onChange={handleChange}



                        placeholder="e.g. 100000"



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
                        
                        "

                    />

{
    errors.salaryMax && (

        <p className="mt-2 text-sm text-red-500">

            {errors.salaryMax}

        </p>

    )
}

                </div>









                {/* Currency */}



                <div>


                    <label className="text-sm font-medium text-gray-600">

                        Currency

                    </label>




                    <select


                        name="currency"


                        value={jobData.currency}


                        onChange={handleChange}



                        className="
                        
                        mt-2
                        
                        w-full
                        
                        px-5
                        
                        py-3.5
                        
                        rounded-2xl
                        
                        border
                        
                        border-gray-200
                        
                        bg-white
                        
                        outline-none
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        "

                    >


                        <option>

                            PKR

                        </option>



                        <option>

                            USD

                        </option>



                        <option>

                            EUR

                        </option>



                    </select>

{
    errors.currency && (

        <p className="mt-2 text-sm text-red-500">

            {errors.currency}

        </p>

    )
}
                </div>









                {/* Deadline */}



                <div>


                    <label className="text-sm font-medium text-gray-600">

                        Application Deadline

                    </label>




                    <input


                        type="date"


                        name="deadline"


                        value={jobData.deadline}


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
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        transition
                        
                        "

                    />

{
    errors.deadline && (

        <p className="mt-2 text-sm text-red-500">

            {errors.deadline}

        </p>

    )
}

                </div>








                {/* Status */}



                <div>


                    <label className="text-sm font-medium text-gray-600">

                        Job Status

                    </label>



                    <select


                        name="status"


                        value={jobData.status}


                        onChange={handleChange}



                        className="
                        
                        mt-2
                        
                        w-full
                        
                        px-5
                        
                        py-3.5
                        
                        rounded-2xl
                        
                        border
                        
                        border-gray-200
                        
                        bg-white
                        
                        outline-none
                        
                        focus:ring-2
                        
                        focus:ring-emerald-400
                        
                        "

                    >


                        <option value="active">

                            Active

                        </option>



                        <option value="paused">

                            Paused

                        </option>



                        <option value="closed">

                            Closed

                        </option>



                    </select>



                </div>






            </div>






        </div>


    );


}