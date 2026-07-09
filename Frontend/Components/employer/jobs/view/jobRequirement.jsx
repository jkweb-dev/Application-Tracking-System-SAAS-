export default function JobRequirements({

    job

}){


    return (


        <div

            className="
            
            bg-slate-100/70
            
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

                Requirements

            </h2>








            <div

                className="
                
                text-gray-700
                
                leading-7
                
                text-sm
                
                sm:text-base
                
                whitespace-pre-line
                
                "

            >

                {

                    job.requirements

                }


            </div>







        </div>


    );


}