export default function JobFilters({

  search ,

  setSearch ,

    totalJobs ,

}){


    return (


        <div

            className="
            
            bg-slate-100
            
            border
            
            border-slate-200
            
            rounded-3xl
            
            p-5
            
            sm:p-6
            
            "

        >





            <div

                className="
                
                flex
                
                flex-col
                
                lg:flex-row
                
                lg:items-center
                
                lg:justify-between
                
                gap-5
                
                "

            >





                {/* Search */}



                <div

                    className="
                    
                    w-full
                    
                    lg:max-w-xl
                    
                    "

                >



                    <label

                        className="
                        
                        text-sm
                        
                        font-medium
                        
                        text-gray-600
                        
                        "

                    >

                        Search Jobs

                    </label>





                    <div

                        className="
                        
                        mt-2
                        
                        relative
                        
                        "

                    >



                        <input


                            type="text"

                              value={search}

    onChange={(e)=>setSearch(e.target.value)}


                            placeholder="Search by job title..."



                            className="
                            
                            w-full
                            
                            px-5
                            
                            py-3.5
                            
                            rounded-2xl
                            
                            bg-white
                            
                            border
                            
                            border-slate-200
                            
                            outline-none
                            
                            focus:ring-2
                            
                            focus:ring-emerald-400
                            
                            transition
                            
                            text-gray-700
                            
                            "

                        />



                    </div>



                </div>









               









                {/* Total Jobs */}



                <div

                    className="
                    
                    bg-emerald-100
                    
                    rounded-2xl
                    
                    px-5
                    
                    py-4
                    
                    flex
                    
                    items-center
                    
                    justify-center
                    
                    sm:justify-start
                    
                    "

                >



                    <div>


                        <p

                            className="
                            
                            text-xs
                            
                            text-emerald-700
                            
                            font-medium
                            
                            "

                        >

                            Total Jobs

                        </p>




                        <p

                            className="
                            
                            text-2xl
                            
                            font-bold
                            
                            text-emerald-800
                            
                            "

                        >

                            {totalJobs}

                        </p>



                    </div>



                </div>








            </div>




        </div>


    );


}