export default function JobSummary({

    job

}){



    const details = [


        {

            label:"Department",

            value:job.department

        },


        {

            label:"Employment Type",

            value:job.employmentType

        },


        {

            label:"Work Mode",

            value:job.workMode

        },


        {

            label:"Location",

            value:job.location

        },


        {

            label:"Experience Level",

            value:job.experienceLevel

        },


        {

            label:"Vacancies",

            value:job.vacancies

        }



    ];





    return (



        <div


            className="
            
            bg-white
            
            border
            
            border-slate-200
            
            rounded-3xl
            
            p-6
            
            shadow-sm
            
            "

        >






            <h2

                className="
                
                text-xl
                
                font-bold
                
                text-gray-800
                
                mb-6
                
                "

            >

                Job Summary

            </h2>









            <div

                className="
                
                space-y-5
                
                "

            >





                {

                    details.map((item,index)=>(


                        <div

                            key={index}

                            className="
                            
                            flex
                            
                            flex-col
                            
                            gap-1
                            
                            "

                        >




                            <span

                                className="
                                
                                text-sm
                                
                                text-gray-500
                                
                                "

                            >

                                {item.label}

                            </span>






                            <span

                                className="
                                
                                font-medium
                                
                                text-gray-800
                                
                                "

                            >

                                {item.value || "Not specified"}

                            </span>





                        </div>



                    ))

                }





            </div>








        </div>


    );


}