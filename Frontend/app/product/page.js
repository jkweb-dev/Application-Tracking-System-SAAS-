"use client";

import {
    Sparkles,
    Users,
    BriefcaseBusiness,
    BarChart3,
    ShieldCheck,
    Workflow,
    Target,
    CheckCircle
} from "lucide-react";


export default function ProductPage(){

    const features = [

        {
            icon: BriefcaseBusiness,
            title:"Smart Job Management",
            text:"Create, publish, and manage job openings with a powerful recruitment workspace."
        },

        {
            icon: Users,
            title:"Candidate Pipeline",
            text:"Move candidates through hiring stages with an intuitive visual pipeline."
        },

        {
            icon: BarChart3,
            title:"Hiring Analytics",
            text:"Understand recruitment performance with meaningful reports and insights."
        },

        {
            icon: ShieldCheck,
            title:"Secure Recruitment",
            text:"Protect employer and candidate data with secure authentication."
        }

    ];


    return (

        <main className="min-h-screen bg-[#fffaf5] text-slate-900">


            {/* Hero */}

            <section className="
                relative
                overflow-hidden
                px-6
                py-24
            ">

                <div className="
                    absolute
                    -top-32
                    -left-32
                    h-96
                    w-96
                    rounded-full
                    bg-purple-200/40
                    blur-3xl
                "/>


                <div className="
                    absolute
                    top-20
                    right-0
                    h-96
                    w-96
                    rounded-full
                    bg-emerald-200/40
                    blur-3xl
                "/>


                <div className="
                    relative
                    mx-auto
                    max-w-6xl
                    text-center
                ">


                    <div className="
                        mx-auto
                        flex
                        w-fit
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-purple-200
                        bg-white/70
                        px-5
                        py-2
                        text-sm
                        font-semibold
                        text-purple-700
                        backdrop-blur
                    ">

                        <Sparkles size={18}/>

                        Powerful ATS Platform

                    </div>



                    <h1 className="
                        mt-8
                        text-5xl
                        font-black
                        tracking-tight
                        md:text-7xl
                    ">

                        Build a smarter
                        <span className="
                            block
                            bg-gradient-to-r
                            from-purple-600
                            via-rose-500
                            to-emerald-500
                            bg-clip-text
                            text-transparent
                        ">
                            hiring experience
                        </span>

                    </h1>



                    <p className="
                        mx-auto
                        mt-8
                        max-w-3xl
                        text-lg
                        leading-8
                        text-slate-600
                    ">

                        RecruitFlow helps companies discover talent,
                        organize applicants, manage hiring pipelines,
                        and make better recruitment decisions from one
                        beautiful workspace.

                    </p>



                    <div className="
                        mt-10
                        flex
                        flex-col
                        justify-center
                        gap-4
                        sm:flex-row
                    ">


                        <button className="
                            rounded-2xl
                            bg-slate-900
                            px-8
                            py-4
                            font-bold
                            text-white
                            transition
                            hover:-translate-y-1
                        ">

                            Start Hiring

                        </button>



                        <button className="
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            px-8
                            py-4
                            font-bold
                            transition
                            hover:bg-slate-100
                        ">

                            Explore Features

                        </button>


                    </div>


                </div>


            </section>





            {/* Stats */}


            <section className="
                mx-auto
                max-w-6xl
                px-6
                py-16
            ">


                <div className="
                    grid
                    gap-6
                    md:grid-cols-3
                ">


                    {

                        [

                            ["10x","Faster Hiring"],

                            ["90%","Less Manual Work"],

                            ["24/7","Candidate Tracking"]

                        ].map((item,index)=>(


                            <div

                                key={index}

                                className="
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-8
                                    text-center
                                    shadow-sm
                                "

                            >

                                <h2 className="
                                    text-4xl
                                    font-black
                                    text-slate-900
                                ">

                                    {item[0]}

                                </h2>


                                <p className="
                                    mt-3
                                    text-slate-500
                                ">

                                    {item[1]}

                                </p>


                            </div>


                        ))

                    }


                </div>


            </section>





            {/* Features */}


            <section className="
                bg-white
                px-6
                py-20
            ">


                <div className="
                    mx-auto
                    max-w-6xl
                ">


                    <div className="text-center">


                        <h2 className="
                            text-4xl
                            font-black
                        ">

                            Everything you need to hire better

                        </h2>


                        <p className="
                            mt-4
                            text-slate-600
                        ">

                            Powerful tools designed for modern recruitment teams.

                        </p>


                    </div>



                    <div className="
                        mt-14
                        grid
                        gap-8
                        md:grid-cols-2
                    ">


                        {

                            features.map((feature,index)=>{


                                const Icon = feature.icon;


                                return (

                                    <div

                                        key={index}

                                        className="
                                            rounded-3xl
                                            border
                                            border-slate-200
                                            bg-[#fffaf5]
                                            p-8
                                            transition
                                            hover:-translate-y-2
                                            hover:shadow-xl
                                        "

                                    >

                                        <div className="
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-purple-100
                                        ">

                                            <Icon
                                                className="text-purple-600"
                                            />

                                        </div>


                                        <h3 className="
                                            mt-6
                                            text-2xl
                                            font-bold
                                        ">

                                            {feature.title}

                                        </h3>


                                        <p className="
                                            mt-3
                                            leading-7
                                            text-slate-600
                                        ">

                                            {feature.text}

                                        </p>


                                    </div>

                                )


                            })

                        }


                    </div>


                </div>


            </section>

                        {/* Workflow Section */}

            <section className="
                px-6
                py-24
            ">

                <div className="
                    mx-auto
                    max-w-6xl
                ">


                    <div className="text-center">

                        <h2 className="
                            text-4xl
                            font-black
                        ">

                            Recruitment made simple

                        </h2>


                        <p className="
                            mt-4
                            text-slate-600
                        ">

                            A complete workflow for employers and job seekers.

                        </p>

                    </div>



                    <div className="
                        mt-16
                        grid
                        gap-8
                        lg:grid-cols-2
                    ">


                        {/* Employer */}

                        <div className="
                            rounded-3xl
                            bg-gradient-to-br
                            from-purple-100
                            to-white
                            p-10
                            border
                            border-purple-200
                        ">


                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <Workflow
                                    className="text-purple-600"
                                    size={32}
                                />


                                <h3 className="
                                    text-2xl
                                    font-bold
                                ">

                                    For Employers

                                </h3>

                            </div>



                            <div className="
                                mt-8
                                space-y-5
                            ">


                                {

                                    [
                                        "Create and publish jobs",
                                        "Review candidate profiles",
                                        "Manage hiring pipeline",
                                        "Track recruitment analytics"

                                    ].map((item,index)=>(


                                        <div
                                            key={index}
                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                rounded-xl
                                                bg-white
                                                p-4
                                            "
                                        >

                                            <CheckCircle
                                                size={20}
                                                className="text-emerald-500"
                                            />

                                            <span className="
                                                text-slate-700
                                            ">

                                                {item}

                                            </span>


                                        </div>


                                    ))

                                }


                            </div>


                        </div>




                        {/* Job Seekers */}


                        <div className="
                            rounded-3xl
                            bg-gradient-to-br
                            from-emerald-100
                            to-white
                            p-10
                            border
                            border-emerald-200
                        ">


                            <div className="
                                flex
                                items-center
                                gap-3
                            ">


                                <Target
                                    className="text-emerald-600"
                                    size={32}
                                />


                                <h3 className="
                                    text-2xl
                                    font-bold
                                ">

                                    For Job Seekers

                                </h3>


                            </div>



                            <div className="
                                mt-8
                                space-y-5
                            ">


                                {

                                    [
                                        "Discover suitable opportunities",
                                        "Apply with your profile",
                                        "Upload and manage resume",
                                        "Track application status"

                                    ].map((item,index)=>(


                                        <div

                                            key={index}

                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                rounded-xl
                                                bg-white
                                                p-4
                                            "

                                        >


                                            <CheckCircle
                                                size={20}
                                                className="text-emerald-500"
                                            />


                                            <span className="
                                                text-slate-700
                                            ">

                                                {item}

                                            </span>


                                        </div>


                                    ))

                                }


                            </div>


                        </div>


                    </div>


                </div>


            </section>





            {/* Why RecruitFlow */}


            <section className="
                bg-[#fff3e8]
                px-6
                py-24
            ">


                <div className="
                    mx-auto
                    grid
                    max-w-6xl
                    gap-12
                    lg:grid-cols-2
                    lg:items-center
                ">


                    <div>


                        <h2 className="
                            text-4xl
                            font-black
                        ">

                            Designed for the future of hiring

                        </h2>


                        <p className="
                            mt-6
                            leading-8
                            text-slate-600
                        ">


                            RecruitFlow removes recruitment complexity by
                            bringing job creation, candidate management,
                            collaboration, and analytics together in one
                            powerful platform.


                        </p>


                    </div>



                    <div className="
                        rounded-3xl
                        bg-white
                        p-10
                        shadow-lg
                    ">


                        <div className="
                            space-y-6
                        ">


                            {

                                [
                                    "Modern SaaS dashboard",
                                    "Beautiful responsive interface",
                                    "Organized hiring pipeline",
                                    "Powerful recruitment insights"

                                ].map((item,index)=>(


                                    <div

                                        key={index}

                                        className="
                                            flex
                                            gap-3
                                            items-center
                                        "

                                    >

                                        <CheckCircle
                                            className="text-purple-600"
                                        />


                                        <span>

                                            {item}

                                        </span>


                                    </div>


                                ))

                            }


                        </div>


                    </div>


                </div>


            </section>

                        {/* CTA Section */}

            <section className="
                px-6
                py-24
            ">


                <div className="
                    mx-auto
                    max-w-5xl
                    rounded-[2.5rem]
                    bg-gradient-to-r
                    from-purple-600
                    via-rose-500
                    to-emerald-500
                    p-12
                    text-center
                    shadow-2xl
                ">


                    <h2 className="
                        text-4xl
                        font-black
                        text-white
                        md:text-5xl
                    ">

                        Ready to transform your hiring process?

                    </h2>



                    <p className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-lg
                        leading-8
                        text-white/90
                    ">

                        Join modern teams using RecruitFlow to discover
                        talent faster, manage candidates better, and build
                        stronger organizations.

                    </p>



                    <button

                        className="
                            mt-10
                            rounded-2xl
                            bg-white
                            px-10
                            py-4
                            font-bold
                            text-purple-700
                            transition
                            hover:-translate-y-1
                            hover:shadow-xl
                        "

                    >

                        Get Started

                    </button>


                </div>


            </section>





            {/* Product Highlights */}


            <section className="
                bg-white
                px-6
                py-20
            ">


                <div className="
                    mx-auto
                    max-w-6xl
                ">


                    <div className="
                        grid
                        gap-6
                        md:grid-cols-3
                    ">


                        {


                            [

                                {
                                    title:"For Growing Teams",
                                    text:"Scale your recruitment without increasing complexity."
                                },

                                {
                                    title:"For Recruiters",
                                    text:"Manage every candidate journey from one workspace."
                                },

                                {
                                    title:"For Candidates",
                                    text:"Enjoy a simple and transparent application experience."
                                }

                            ].map((item,index)=>(


                                <div

                                    key={index}

                                    className="
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-[#fffaf5]
                                        p-8
                                        transition
                                        hover:shadow-xl
                                    "

                                >


                                    <h3 className="
                                        text-xl
                                        font-bold
                                    ">

                                        {item.title}

                                    </h3>


                                    <p className="
                                        mt-4
                                        leading-7
                                        text-slate-600
                                    ">

                                        {item.text}

                                    </p>


                                </div>


                            ))

                        }


                    </div>


                </div>


            </section>



        </main>

    );

}