"use client";

import {
    BookOpen,
    FileText,
    HelpCircle,
    Users,
    Sparkles,
    ArrowRight,
    Lightbulb
} from "lucide-react";


export default function ResourcesPage(){


    const resources = [

        {
            icon:BookOpen,
            title:"Guides & Tutorials",
            text:"Learn recruitment strategies, ATS best practices, and hiring workflows."
        },

        {
            icon:FileText,
            title:"Documentation",
            text:"Explore detailed information about RecruitFlow features and tools."
        },

        {
            icon:HelpCircle,
            title:"Help Center",
            text:"Find answers to common questions and platform-related issues."
        },

        {
            icon:Users,
            title:"Community",
            text:"Connect with professionals and discover better hiring ideas."
        }

    ];


    return (

        <main className="
            min-h-screen
            bg-[#fffaf5]
            text-slate-900
        ">


            {/* Hero */}


            <section className="
                relative
                overflow-hidden
                px-6
                py-24
            ">


                <div className="
                    absolute
                    -left-32
                    top-10
                    h-96
                    w-96
                    rounded-full
                    bg-amber-200/40
                    blur-3xl
                "/>



                <div className="
                    absolute
                    right-0
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-purple-200/40
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
                        border-amber-200
                        bg-white/70
                        px-5
                        py-2
                        text-sm
                        font-semibold
                        text-amber-700
                        backdrop-blur
                    ">


                        <Sparkles size={18}/>

                        RecruitFlow Resources


                    </div>





                    <h1 className="
                        mt-8
                        text-5xl
                        font-black
                        tracking-tight
                        md:text-7xl
                    ">


                        Everything you need
                        <span className="
                            block
                            bg-gradient-to-r
                            from-amber-500
                            via-rose-500
                            to-purple-600
                            bg-clip-text
                            text-transparent
                        ">

                            to hire smarter

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


                        Explore hiring guides, product documentation,
                        recruitment insights, and resources designed to
                        help employers build better teams.


                    </p>




                    <button

                        className="
                            mt-10
                            inline-flex
                            items-center
                            gap-3
                            rounded-2xl
                            bg-slate-900
                            px-8
                            py-4
                            font-bold
                            text-white
                            transition
                            hover:-translate-y-1
                        "

                    >

                        Explore Resources

                        <ArrowRight size={20}/>

                    </button>



                </div>



            </section>





            {/* Resource Cards */}



            <section className="
                px-6
                py-20
            ">


                <div className="
                    mx-auto
                    max-w-6xl
                ">


                    <div className="
                        text-center
                    ">


                        <h2 className="
                            text-4xl
                            font-black
                        ">

                            Explore Our Resources

                        </h2>


                        <p className="
                            mt-4
                            text-slate-600
                        ">

                            Everything to improve your recruitment journey.

                        </p>


                    </div>





                    <div className="
                        mt-14
                        grid
                        gap-8
                        md:grid-cols-2
                        xl:grid-cols-4
                    ">


                        {

                            resources.map((item,index)=>{


                                const Icon=item.icon;


                                return (

                                    <div

                                        key={index}

                                        className="
                                            rounded-3xl
                                            border
                                            border-slate-200
                                            bg-white
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
                                            bg-amber-100
                                        ">


                                            <Icon

                                                size={28}

                                                className="
                                                    text-amber-600
                                                "

                                            />


                                        </div>




                                        <h3 className="
                                            mt-6
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


                                );


                            })

                        }


                    </div>



                </div>


            </section>

                        {/* Featured Guides */}

            <section className="
                bg-white
                px-6
                py-24
            ">


                <div className="
                    mx-auto
                    max-w-6xl
                ">


                    <div className="
                        grid
                        gap-12
                        lg:grid-cols-2
                        lg:items-center
                    ">


                        <div>


                            <div className="
                                flex
                                items-center
                                gap-3
                            ">

                                <Lightbulb
                                    className="text-rose-500"
                                    size={32}
                                />

                                <h2 className="
                                    text-4xl
                                    font-black
                                ">

                                    Learn modern hiring strategies

                                </h2>

                            </div>



                            <p className="
                                mt-6
                                leading-8
                                text-slate-600
                            ">

                                Recruitment is changing rapidly. Our resources
                                help teams understand modern hiring methods,
                                candidate experience, and efficient workflows.

                            </p>




                            <div className="
                                mt-8
                                space-y-5
                            ">


                                {

                                    [

                                        "Building an efficient hiring pipeline",

                                        "Improving candidate experience",

                                        "Using analytics for better decisions",

                                        "Reducing recruitment time"

                                    ].map((item,index)=>(


                                        <div

                                            key={index}

                                            className="
                                                flex
                                                items-center
                                                gap-3
                                                rounded-xl
                                                bg-[#fffaf5]
                                                p-4
                                            "

                                        >


                                            <div className="
                                                h-2
                                                w-2
                                                rounded-full
                                                bg-rose-500
                                            "/>


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





                        {/* Article Cards */}



                        <div className="
                            grid
                            gap-6
                        ">



                            {


                                [

                                    {
                                        title:"ATS Complete Guide",
                                        category:"Guide",
                                        color:"bg-purple-100"
                                    },


                                    {
                                        title:"Hiring Best Practices",
                                        category:"Article",
                                        color:"bg-emerald-100"
                                    },


                                    {
                                        title:"Recruitment Analytics",
                                        category:"Insights",
                                        color:"bg-amber-100"
                                    }


                                ].map((item,index)=>(


                                    <div

                                        key={index}

                                        className="
                                            rounded-3xl
                                            border
                                            border-slate-200
                                            bg-white
                                            p-6
                                            shadow-sm
                                            transition
                                            hover:shadow-lg
                                        "

                                    >


                                        <div className="
                                            flex
                                            items-center
                                            justify-between
                                        ">


                                            <span className={`
                                                rounded-full
                                                px-4
                                                py-1
                                                text-sm
                                                font-semibold
                                                ${item.color}
                                            `}>

                                                {item.category}

                                            </span>



                                            <ArrowRight
                                                size={20}
                                                className="
                                                    text-slate-400
                                                "
                                            />


                                        </div>




                                        <h3 className="
                                            mt-5
                                            text-xl
                                            font-bold
                                        ">


                                            {item.title}


                                        </h3>



                                        <p className="
                                            mt-3
                                            text-slate-600
                                        ">


                                            Discover practical knowledge
                                            and strategies for better hiring.


                                        </p>



                                    </div>


                                ))

                            }



                        </div>



                    </div>



                </div>


            </section>






            {/* FAQ Section */}



            <section className="
                px-6
                py-24
            ">



                <div className="
                    mx-auto
                    max-w-5xl
                ">



                    <div className="
                        text-center
                    ">


                        <h2 className="
                            text-4xl
                            font-black
                        ">


                            Frequently Asked Questions


                        </h2>



                        <p className="
                            mt-4
                            text-slate-600
                        ">


                            Quick answers about RecruitFlow.


                        </p>



                    </div>





                    <div className="
                        mt-12
                        space-y-5
                    ">



                        {


                            [

                                {
                                    q:"What is RecruitFlow?",
                                    a:"RecruitFlow is an Applicant Tracking System that helps companies manage jobs, candidates, and recruitment workflows."
                                },


                                {
                                    q:"Can candidates track applications?",
                                    a:"Yes, job seekers can monitor their application progress through their dashboard."
                                },


                                {
                                    q:"Does RecruitFlow provide analytics?",
                                    a:"Yes, employers can analyze recruitment performance through dashboards and reports."
                                }


                            ].map((item,index)=>(


                                <div

                                    key={index}

                                    className="
                                        rounded-3xl
                                        border
                                        border-slate-200
                                        bg-white
                                        p-7
                                    "

                                >


                                    <h3 className="
                                        text-lg
                                        font-bold
                                    ">


                                        {item.q}


                                    </h3>



                                    <p className="
                                        mt-3
                                        leading-7
                                        text-slate-600
                                    ">


                                        {item.a}


                                    </p>



                                </div>


                            ))


                        }



                    </div>



                </div>



            </section>

                        {/* Support Section */}


            <section className="
                bg-[#fff3e8]
                px-6
                py-24
            ">


                <div className="
                    mx-auto
                    grid
                    max-w-6xl
                    gap-10
                    lg:grid-cols-2
                    lg:items-center
                ">


                    <div>


                        <h2 className="
                            text-4xl
                            font-black
                        ">

                            Need help with RecruitFlow?

                        </h2>


                        <p className="
                            mt-6
                            leading-8
                            text-slate-600
                        ">


                            Our support resources are designed to help you
                            understand the platform, solve problems, and get
                            the most value from your recruitment workflow.


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

                                    "Product documentation",

                                    "Recruitment guides",

                                    "Technical support",

                                    "Community discussions"

                                ].map((item,index)=>(


                                    <div

                                        key={index}

                                        className="
                                            flex
                                            items-center
                                            justify-between
                                            rounded-xl
                                            border
                                            border-slate-100
                                            p-4
                                        "

                                    >


                                        <span className="
                                            font-medium
                                            text-slate-700
                                        ">

                                            {item}

                                        </span>


                                        <ArrowRight
                                            size={18}
                                            className="
                                                text-purple-600
                                            "
                                        />


                                    </div>


                                ))

                            }


                        </div>


                    </div>



                </div>


            </section>






            {/* Newsletter CTA */}



            <section className="
                px-6
                py-24
            ">


                <div className="
                    mx-auto
                    max-w-5xl
                    rounded-[2.5rem]
                    bg-gradient-to-r
                    from-amber-500
                    via-rose-500
                    to-purple-600
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


                        Stay updated with hiring insights


                    </h2>




                    <p className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-white/90
                        leading-8
                    ">


                        Get the latest recruitment strategies,
                        product updates, and industry knowledge
                        delivered directly to you.


                    </p>





                    <div className="
                        mx-auto
                        mt-8
                        flex
                        max-w-lg
                        flex-col
                        gap-3
                        sm:flex-row
                    ">



                        <input

                            type="email"

                            placeholder="Enter your email"

                            className="
                                flex-1
                                rounded-2xl
                                px-5
                                py-4
                                outline-none
                                bg-white
                            "

                        />



                        <button

                            className="
                                rounded-2xl
                                bg-slate-900
                                px-8
                                py-4
                                font-bold
                                text-white
                                transition
                                hover:-translate-y-1
                            "

                        >

                            Subscribe

                        </button>



                    </div>



                </div>



            </section>





            {/* Bottom Quote */}



            <section className="
                px-6
                pb-20
            ">


                <div className="
                    mx-auto
                    max-w-4xl
                    text-center
                ">



                    <p className="
                        text-2xl
                        font-semibold
                        leading-10
                        text-slate-700
                    ">


                        "Great hiring starts with great tools,
                        better knowledge, and smarter decisions."


                    </p>



                    <div className="
                        mt-6
                        flex
                        justify-center
                        items-center
                        gap-2
                        text-purple-600
                        font-bold
                    ">


                        <Sparkles size={20}/>

                        RecruitFlow Resources


                    </div>



                </div>



            </section>



        </main>

    );

}