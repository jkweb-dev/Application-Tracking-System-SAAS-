export default function JobSkills({

    job

}){



    return (


        <div

            className="
            
            bg-emerald-50/50
            
            border
            
            border-emerald-100
            
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

                Required Skills

            </h2>







            {

                job.skills && job.skills.length > 0 ?



                (


                    <div

                        className="
                        
                        flex
                        
                        flex-wrap
                        
                        gap-3
                        
                        "

                    >




                        {

                            job.skills.map((skill,index)=>(


                                <span


                                    key={index}


                                    className="
                                    
                                    px-4
                                    
                                    py-2
                                    
                                    rounded-full
                                    
                                    bg-white
                                    
                                    border
                                    
                                    border-emerald-200
                                    
                                    text-emerald-700
                                    
                                    text-sm
                                    
                                    font-medium
                                    
                                    shadow-sm
                                    
                                    "

                                >

                                    {skill}

                                </span>


                            ))

                        }





                    </div>


                )



                :



                (


                    <p

                        className="
                        
                        text-gray-500
                        
                        text-sm
                        
                        "

                    >

                        No skills added for this job.

                    </p>


                )



            }







        </div>


    );


}