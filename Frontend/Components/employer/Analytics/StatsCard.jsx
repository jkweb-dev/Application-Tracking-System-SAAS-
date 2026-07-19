import {

    BriefcaseBusiness,

    Users,

    UserRoundCheck,

    Trophy

} from "lucide-react";



export default function StatsCards({

    stats

}) {



    const cards = [


        {

            title:"Total Jobs",

            value:stats?.totalJobs || 0,

            icon:BriefcaseBusiness

        },


        {

            title:"Total Applicants",

            value:stats?.totalApplications || 0,

            icon:Users

        },


        {

            title:"Active Candidates",

            value:stats?.activeCandidates || 0,

            icon:UserRoundCheck

        },


        {

            title:"Hired Candidates",

            value:stats?.hiredCandidates || 0,

            icon:Trophy

        }


    ];





    return (

        <div

            className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                xl:grid-cols-4
            "

        >

            {

                cards.map((card)=>{


                    const Icon = card.icon;



                    return (

                        <div

                            key={card.title}

                            className="
                                rounded-3xl
                                border
                                border-slate-200
                                bg-white
                                p-6
                                shadow-sm
                                transition
                                hover:-translate-y-1
                                hover:shadow-lg
                            "

                        >

                            <div

                                className="
                                    flex
                                    items-center
                                    justify-between
                                "

                            >

                                <div

                                    className="
                                        rounded-2xl
                                        bg-indigo-50
                                        p-3
                                        text-indigo-600
                                    "

                                >

                                    <Icon size={26}/>


                                </div>


                            </div>




                            <p

                                className="
                                    mt-6
                                    text-sm
                                    text-slate-500
                                "

                            >

                                {card.title}

                            </p>



                            <h2

                                className="
                                    mt-2
                                    text-3xl
                                    font-bold
                                    text-slate-900
                                "

                            >

                                {card.value}


                            </h2>


                        </div>


                    );


                })

            }


        </div>

    );


}