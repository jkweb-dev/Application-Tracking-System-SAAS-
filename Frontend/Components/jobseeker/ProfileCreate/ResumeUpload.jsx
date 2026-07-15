"use client";


import {

    FileText,

    UploadCloud,

    X,

    CheckCircle2

} from "lucide-react";





export default function ResumeUpload({

    resumeFile,

    handleResumeChange,

    error

}){



    return(


        <section

            className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-6
                shadow-sm
                md:p-8
            "

        >




            <div

                className="
                    mb-6
                "

            >


                <h2

                    className="
                        flex
                        items-center
                        gap-2
                        text-2xl
                        font-bold
                        text-slate-900
                    "

                >


                    <FileText

                        size={26}

                        className="text-blue-600"

                    />


                    Resume

                </h2>



                <p

                    className="
                        mt-2
                        text-sm
                        text-slate-500
                    "

                >

                    Upload your latest resume. Only PDF files are accepted.

                </p>


            </div>









            <label

                className="
                    flex
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-2xl
                    border-2
                    border-dashed
                    border-slate-300
                    bg-slate-50
                    px-6
                    py-10
                    transition
                    hover:border-blue-500
                    hover:bg-blue-50
                "

            >



                <UploadCloud

                    size={42}

                    className="text-blue-600"

                />



                <p

                    className="
                        mt-4
                        text-sm
                        font-semibold
                        text-slate-700
                    "

                >

                    Click to upload your resume

                </p>



                <p

                    className="
                        mt-1
                        text-xs
                        text-slate-500
                    "

                >

                    PDF only • Maximum size 5MB

                </p>





                <input

                    type="file"

                    accept="application/pdf"

                    onChange={handleResumeChange}

                    className="
                        hidden
                    "

                />



            </label>









            {

                resumeFile &&



                <div

                    className="
                        mt-5
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-emerald-200
                        bg-emerald-50
                        p-4
                    "

                >



                    <div

                        className="
                            flex
                            items-center
                            gap-3
                        "

                    >


                        <CheckCircle2

                            size={25}

                            className="
                                text-emerald-600
                            "

                        />



                        <div>


                            <p

                                className="
                                    text-sm
                                    font-semibold
                                    text-slate-800
                                "

                            >

                                {resumeFile.name}

                            </p>



                            <p

                                className="
                                    text-xs
                                    text-slate-500
                                "

                            >

                                {(resumeFile.size / 1024 / 1024).toFixed(2)}
                                MB

                            </p>


                        </div>



                    </div>







                    <button

                        type="button"

                        onClick={()=>{

                            handleResumeChange({

                                target:{
                                    files:[]
                                }

                            });

                        }}

                        className="
                            rounded-lg
                            p-2
                            text-red-500
                            transition
                            hover:bg-red-100
                        "

                    >

                        <X size={18}/>


                    </button>



                </div>


            }









            {

                error &&


                <p

                    className="
                        mt-3
                        text-sm
                        text-red-500
                    "

                >

                    {error}

                </p>


            }





        </section>


    );


}