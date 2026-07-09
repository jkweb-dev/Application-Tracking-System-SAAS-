export default function JobActions({

    loading,

    handleSubmit

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




            <div

                className="
                
                flex
                
                flex-col-reverse
                
                sm:flex-row
                
                sm:justify-end
                
                gap-4
                
                "

            >





                {/* Save Draft */}



                <button


                    type="button"



                    className="
                    
                    px-7
                    
                    py-3.5
                    
                    rounded-2xl
                    
                    border
                    
                    border-gray-200
                    
                    text-gray-700
                    
                    font-semibold
                    
                    hover:bg-gray-50
                    
                    transition
                    
                    "

                >

                    Save Draft


                </button>








                {/* Publish */}



                <button


                    type="button"



                    disabled={loading}



                    onClick={handleSubmit}



                    className="
                    
                    px-8
                    
                    py-3.5
                    
                    rounded-2xl
                    
                    bg-emerald-600
                    
                    text-white
                    
                    font-semibold
                    
                    hover:bg-emerald-700
                    
                    disabled:opacity-60
                    
                    disabled:cursor-not-allowed
                    
                    transition
                    
                    shadow-md
                    
                    "

                >


                    {

                        loading

                        ?

                        "Publishing..."

                        :

                        "Publish Job"

                    }



                </button>







            </div>





        </div>


    );


}