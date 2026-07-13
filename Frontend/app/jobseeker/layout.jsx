"use client";

import Protected from "@/Components/jobSeekerProtected";

export default function JobSeekerLayout({children}){

    return(

        <Protected
            allowedRole="jobseeker"
        >

            {children}

        </Protected>

    );

}