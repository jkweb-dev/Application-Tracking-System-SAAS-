"use client";


import {

    FileText,
    Upload,
    Eye,
    CheckCircle

} from "lucide-react";






export default function ResumeUpload({

    resume,

    isEditing,

    resumeFile,

    handleResumeChange,

    error

}) {



    return (


        <div

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





            {/* Header */}


            <div

                className="
                    mb-6
                    flex
                    items-center
                    gap-3
                "

            >


                <div

                    className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-red-100
                        text-red-600
                    "

                >

                    <FileText size={22}/>


                </div>





                <h2

                    className="
                        text-xl
                        font-bold
                        text-slate-900
                    "

                >

                    Resume

                </h2>



            </div>









            {/* Existing Resume */}


            {

            resume &&


            <div

                className="
                    flex
                    flex-col
                    gap-4
                    rounded-2xl
                    bg-slate-50
                    p-5
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                "

            >



                <div

                    className="
                        flex
                        items-center
                        gap-4
                    "

                >


                    <div

                        className="
                            flex
                            h-12
                            w-12
                            items-center
                            justify-center
                            rounded-xl
                            bg-red-100
                            text-red-600
                        "

                    >

                        <FileText/>

                    </div>





                    <div>


                        <p

                            className="
                                font-semibold
                                text-slate-900
                            "

                        >

                            {resume.originalName}

                        </p>




                        <p

                            className="
                                text-sm
                                text-slate-500
                            "

                        >

                            Uploaded Resume

                        </p>


                    </div>



                </div>







                {

                !isEditing &&


                <a

                    href={
                    `http://localhost:5000/uploads/resumes/${resume.filename}`
                    }

                    target="_blank"

                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-white
                    "

                >

                    <Eye size={16}/>

                    View


                </a>


                }





            </div>


            }









            {/* Upload New Resume */}



            {

            isEditing &&


            <div

                className="
                    mt-6
                    rounded-2xl
                    border-2
                    border-dashed
                    border-slate-300
                    p-6
                    text-center
                "

            >



                <Upload

                    className="
                        mx-auto
                        mb-3
                        text-blue-600
                    "

                    size={32}

                />





                <label

                    className="
                        cursor-pointer
                        text-sm
                        font-semibold
                        text-blue-600
                    "

                >

                    Upload New Resume



                    <input

                        type="file"

                        accept="application/pdf"

                        onChange={handleResumeChange}

                        className="
                            hidden
                        "

                    />



                </label>







                <p

                    className="
                        mt-2
                        text-xs
                        text-slate-500
                    "

                >

                    PDF only • Maximum 5MB

                </p>







                {

                resumeFile &&


                <div

                    className="
                        mt-4
                        flex
                        items-center
                        justify-center
                        gap-2
                        text-sm
                        text-green-600
                    "

                >

                    <CheckCircle size={16}/>


                    {resumeFile.name}


                </div>


                }





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





        </div>


    );

}