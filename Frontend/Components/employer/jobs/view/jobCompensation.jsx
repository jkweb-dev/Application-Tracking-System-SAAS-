export default function JobCompensation({

    job

}){



    return (



        <div


            className="
            
            bg-emerald-50/60
            
            border
            
            border-emerald-100
            
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

                Compensation & Timeline

            </h2>









            <div

                className="
                
                space-y-5
                
                "

            >







                <div>


                    <p

                        className="
                        
                        text-sm
                        
                        text-gray-500
                        
                        "

                    >

                        Salary Range

                    </p>



                    <p

                        className="
                        
                        mt-1
                        
                        font-semibold
                        
                        text-gray-800
                        
                        "

                    >

                        {

                            job.salaryMin

                            ?

                            `${job.salaryMin} - ${job.salaryMax} ${job.currency}`

                            :

                            "Not specified"

                        }

                    </p>



                </div>









                <div>


                    <p

                        className="
                        
                        text-sm
                        
                        text-gray-500
                        
                        "

                    >

                        Application Deadline

                    </p>




                    <p

                        className="
                        
                        mt-1
                        
                        font-semibold
                        
                        text-gray-800
                        
                        "

                    >

                        {

                            job.deadline

                            ?

                            new Date(job.deadline)

                            .toLocaleDateString()

                            :

                            "No deadline"

                        }

                    </p>




                </div>









                <div>


                    <p

                        className="
                        
                        text-sm
                        
                        text-gray-500
                        
                        "

                    >

                        Posted On

                    </p>





                    <p

                        className="
                        
                        mt-1
                        
                        font-semibold
                        
                        text-gray-800
                        
                        "

                    >

                        {

                            job.createdAt

                            ?

                            new Date(job.createdAt)

                            .toLocaleDateString()

                            :

                            "Unknown"

                        }

                    </p>





                </div>






            </div>







        </div>


    );


}