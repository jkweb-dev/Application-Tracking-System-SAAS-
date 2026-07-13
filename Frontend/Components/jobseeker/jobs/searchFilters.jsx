"use client";

import {
    Search,
    MapPin,
    BriefcaseBusiness,
    GraduationCap
} from "lucide-react";

export default function SearchFilters(){

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

                            <option>All Locations</option>

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

                            <option>All Job Types</option>

                            <option>Full Time</option>

                            <option>Part Time</option>

                            <option>Internship</option>

                            <option>Contract</option>

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

                            <option>Experience Level</option>

                            <option>Entry Level</option>

                            <option>Mid Level</option>

                            <option>Senior Level</option>

                        </select>

                    </div>

                    <button

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