import TeamMemberCard from "./Team_Member_card";


export default function TeamMemberList({

    members,

    loading ,

    handleDeleteClick

}) {



    if(loading){


        return (


            <div

                className="

                    grid

                    gap-6

                    md:grid-cols-2

                "

            >



                {[1,2].map((item)=>(


                    <div

                        key={item}

                        className="

                            h-72

                            animate-pulse

                            rounded-3xl

                            bg-white

                            shadow-sm

                        "

                    >

                    </div>


                ))}



            </div>


        );


    }







    if(members.length === 0){


        return (


            <div

                className="

                    rounded-3xl

                    border

                    border-slate-200

                    bg-white

                    p-10

                    text-center

                    shadow-sm

                "

            >



                <div

                    className="

                        mx-auto

                        flex

                        h-20

                        w-20

                        items-center

                        justify-center

                        rounded-full

                        bg-blue-100

                        text-4xl

                    "

                >

                    👥


                </div>




                <h2

                    className="

                        mt-5

                        text-xl

                        font-bold

                        text-slate-800

                    "

                >

                    No Team Members Yet

                </h2>




                <p

                    className="

                        mt-2

                        text-sm

                        text-slate-500

                    "

                >

                    Add a recruiter or hiring manager to start building
                    your hiring team.

                </p>



            </div>


        );


    }






    return (


        <div

            className="

                grid

                gap-6

                md:grid-cols-2

            "

        >



            {

                members.map((member)=>(


                    <TeamMemberCard

                        key={member._id}

                        member={member}

                        handleDeleteClick = {handleDeleteClick}

                    />


                ))

            }



        </div>


    );


}