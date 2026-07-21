"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams, useRouter } from "next/navigation";

import CandidateHero from "@/Components/employer/candidate/hero";
import ContactCard from "@/Components/employer/candidate/contact";
import SummarySection from "@/Components/employer/candidate/summary";
import SkillsSection from "@/Components/employer/candidate/skills";
import ExperienceSection from "@/Components/employer/candidate/experience";
import EducationSection from "@/Components/employer/candidate/education";
import ResumeCard from "@/Components/employer/candidate/resume";
import LoadingSkeleton from "@/Components/employer/candidate/loading";

export default function CandidateProfilePage() {

    const router = useRouter();

    const { id } = useParams();

    const [profile, setProfile] = useState(null);

    const [loading, setLoading] = useState(true);



    const fetchProfile = async () => {

        try {

            setLoading(true);

            const token = localStorage.getItem("token");

            if (!token) {

                toast.error("Please login first");

                router.push("/");

                return;

            }



            const response = await axios.get(

                `http://localhost:5000/employer/profiles/${id}`,

                {

                    headers: {

                        Authorization: `Bearer ${token}`

                    }

                }

            );


console.log(response.data.profile)
            setProfile(response.data.profile);

        }

        catch (error) {

            console.log(error);

            if (!error.response) {

                toast.error(

                    "Network error. Please check your internet connection."

                );

                return;

            }



            const status = error.response.status;

            const message =

                error.response.data?.message ||

                "Something went wrong";



            switch (status) {

                case 400:

                    toast.error(message);

                    break;

                case 401:

                    toast.error(

                        "Session expired. Please login again."

                    );

                    localStorage.removeItem("token");

                    router.push("/");

                    break;

                case 403:

                    toast.error(message);

                    break;

                case 404:

                    toast.error(message);

                    break;

                case 500:

                    toast.error(

                        "Internal server error."

                    );

                    break;

                default:

                    toast.error(message);

            }

        }

        finally {

            setLoading(false);

        }

    };



  


    useEffect(() => {

        fetchProfile();

    }, []);



    if (loading) {

        return <LoadingSkeleton />;

    }

        return (

        <main

            className="
                min-h-screen
                bg-slate-50
                px-4
                py-8
                sm:px-6
                lg:px-8
            "

        >

            <div

                className="
                    mx-auto
                    max-w-7xl
                "

            >


               

              


                {/* Hero */}

                <CandidateHero

                    profile={profile}

                />





                <div

                    className="
                        mt-8
                        grid
                        grid-cols-1
                        gap-8
                        lg:grid-cols-12
                    "

                >


                    {/* Left Sidebar */}

                    <aside

                        className="
                            space-y-6
                            lg:col-span-4
                            lg:sticky
                          top-14
                            self-start
                        "

                    >

                        <ContactCard

                            profile={profile}

                        />



                        <ResumeCard

                            profile={profile}

                        />

                    </aside>





                    {/* Right Content */}

                    <section

                        className="
                            space-y-6
                            lg:col-span-8
                        "

                    >

                        <SummarySection

                            profile={profile}

                        />



                        <SkillsSection

                            profile={profile}

                        />



                        <ExperienceSection

                            profile={profile}

                        />



                        <EducationSection

                            profile={profile}

                        />

                    </section>

                </div>

            </div>

        </main>

    );

}