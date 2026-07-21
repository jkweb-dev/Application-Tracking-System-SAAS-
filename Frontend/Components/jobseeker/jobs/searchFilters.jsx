"use client";

import {
    Search,
    MapPin,
    BriefcaseBusiness,
    GraduationCap
} from "lucide-react";

export default function SearchFilters({

     filters,

    setFilters ,

    onSearch ,

    onReset

}){

    const handleChange = (field,value)=>{

    setFilters({

        ...filters,

        [field]:value

    });

};

    return(

        <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">

            <div
                className="
                    rounded-3xl
                    border
                    border-slate-200
                    bg-white
                    p-6
                    shadow-lg
                "
            >

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-4
                        lg:grid-cols-4
                    "
                >

                    {/* Search */}

                    <div className="relative lg:col-span-2">

                        <Search
                            size={20}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <input

                            type="text"

                            placeholder="Search jobs, companies or skills..."

                             value={filters.search}

    onChange={(e)=>

        handleChange(
            "search",
            e.target.value
        )

    }

                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                py-3
                                pl-12
                                pr-4
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:bg-white
                            "

                        />

                    </div>

                    {/* Location */}

                    <div className="relative">

                        <MapPin
                            size={20}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <select

                        value={filters.location}


onChange={(e)=>

    handleChange(

        "location",

        e.target.value

    )

}

                            className="
                                w-full
                                appearance-none
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                py-3
                                pl-12
                                pr-4
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:bg-white
                            "

                        >

                            <option value= "">All Locations</option>

                            <option>Lahore</option>

                            <option>Islamabad</option>

                            <option>Karachi</option>

                            <option>Remote</option>

                        </select>

                    </div>

                    {/* Job Type */}

                    <div className="relative">

                        <BriefcaseBusiness
                            size={20}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <select

                        value={filters.type}


onChange={(e)=>

    handleChange(

        "type",

        e.target.value

    )

}

                            className="
                                w-full
                                appearance-none
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                py-3
                                pl-12
                                pr-4
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:bg-white
                            "

                        >

                            <option value ="">All Job Types</option>

                            <option value="Full Time">Full Time</option>

                            <option value="Part Time">Part Time</option>

                            <option value="Internship">Internship</option>

                            <option value="Contract">Contract</option>

                        </select>

                    </div>

                </div>

                {/* Second Row */}

                <div
                    className="
                        mt-4
                        grid
                        grid-cols-1
                        gap-4
                        md:grid-cols-3
                    "
                >

                    {/* Experience */}

                    <div className="relative">

                        <GraduationCap
                            size={20}
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-slate-400
                            "
                        />

                        <select

                        value={filters.experience}


onChange={(e)=>

    handleChange(

        "experience",

        e.target.value

    )

}

                            className="
                                w-full
                                appearance-none
                                rounded-xl
                                border
                                border-slate-200
                                bg-slate-50
                                py-3
                                pl-12
                                pr-4
                                outline-none
                                transition
                                focus:border-blue-500
                                focus:bg-white
                            "

                        >

                            <option value= "" >Experience Level</option>

                            <option value= "Fresh Graduate">Fresh Graduate</option>

                            <option value="1-2 Years">1-2 Years</option>

                            <option value="3-5 Years">3-5 Years</option>

                            <option value="5+ Years">5+ Years</option>

                        </select>

                    </div>

                    <button

                    onClick={onSearch}

                        className="
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-semibold
                            text-white
                            transition
                            hover:bg-blue-700
                        "

                    >

                        Search Jobs

                    </button>

                    <button

                        onClick={onReset}

                        className="
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            px-6
                            py-3
                            font-semibold
                            text-slate-700
                            transition
                            hover:bg-slate-100
                        "

                    >

                        Reset Filters

                    </button>

                </div>

            </div>

        </section>

    );

}