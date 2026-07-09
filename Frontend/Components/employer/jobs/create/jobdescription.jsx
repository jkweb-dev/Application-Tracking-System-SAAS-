export default function JobDescription({

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

                    Job Description

                </h2>



                <p

                    className="
                    
                    text-sm
                    
                    text-gray-500
                    
                    mt-1
                    
                    "

                >

                    Explain the role, responsibilities, and what
                    candidates should know.

                </p>


            </div>






            {/* Description */}



            <div>


                <label

                    className="
                    
                    text-sm
                    
                    font-medium
                    
                    text-gray-600
                    
                    "

                >

                    Description

                </label>




                <textarea


                    name="description"


                    value={jobData.description}


                    onChange={handleChange}



                    rows="8"



                    placeholder="
                    Example:
                    
                    We are looking for a Frontend Developer
                    responsible for building modern web
                    applications using React...
                    "



                    className="
                    
                    mt-2
                    
                    w-full
                    
                    px-5
                    
                    py-4
                    
                    rounded-2xl
                    
                    border
                    
                    border-gray-200
                    
                    outline-none
                    
                    resize-none
                    
                    focus:ring-2
                    
                    focus:ring-emerald-400
                    
                    focus:border-emerald-400
                    
                    transition
                    
                    text-gray-700
                    
                    leading-relaxed
                    
                    "

                />

{
    errors.description && (

        <p className="mt-2 text-sm text-red-500">

            {errors.description}

        </p>

    )
}

            </div>






        </div>


    );


}