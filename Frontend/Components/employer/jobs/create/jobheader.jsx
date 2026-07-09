export default function JobHeader(){


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



            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">



                <div>


                    <h1

                        className="
                        
                        text-3xl
                        sm:text-4xl
                        
                        font-bold
                        
                        tracking-tight
                        
                        text-gray-800
                        
                        "

                    >

                        Create New Job

                    </h1>




                    <p

                        className="
                        
                        mt-2
                        
                        text-gray-500
                        
                        text-sm
                        sm:text-base
                        
                        max-w-xl
                        
                        "

                    >

                        Create a new opportunity and find the right
                        talent for your company.

                    </p>



                </div>





                <div

                    className="
                    
                    flex
                    
                    items-center
                    
                    gap-3
                    
                    bg-emerald-50
                    
                    px-5
                    
                    py-3
                    
                    rounded-2xl
                    
                    "

                >



                    <div

                        className="
                        
                        w-10
                        h-10
                        
                        rounded-full
                        
                        bg-emerald-600
                        
                        flex
                        
                        items-center
                        
                        justify-center
                        
                        text-white
                        
                        font-bold
                        
                        "

                    >

                        +

                    </div>



                    <div>


                        <p

                            className="
                            
                            text-sm
                            
                            font-semibold
                            
                            text-emerald-700
                            
                            "

                        >

                            New Opening

                        </p>



                        <p

                            className="
                            
                            text-xs
                            
                            text-gray-500
                            
                            "

                        >

                            Hiring Management

                        </p>


                    </div>



                </div>



            </div>



        </div>

    );


}