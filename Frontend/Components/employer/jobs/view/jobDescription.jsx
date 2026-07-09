export default function JobDescription({

    job

}){


    return (


        <div

            className="
            
            bg-white
            
            border
            
            border-slate-200
            
            rounded-3xl
            
            p-6
            
            sm:p-8
            
            shadow-sm
            
            "

        >





            <h2

                className="
                
                text-xl
                
                sm:text-2xl
                
                font-bold
                
                text-gray-800
                
                mb-5
                
                "

            >

                Job Description

            </h2>







            <div

                className="
                
                text-gray-600
                
                leading-7
                
                whitespace-pre-line
                
                text-sm
                
                sm:text-base
                
                "

            >

                {

                    job.description

                }


            </div>






        </div>


    );


}