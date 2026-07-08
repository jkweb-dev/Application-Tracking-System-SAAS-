"use client";
import Protected from "@/Components/Protected";

export default function JobSeekerDashboard() {

    return (

        <Protected allowedRole="jobseeker">

            {(user) => (

                <div className="min-h-screen flex items-center justify-center">

                    <div className="bg-white shadow rounded-xl p-8">

                        <h1 className="text-3xl font-bold">

                            Job Seeker Dashboard

                        </h1>

                        <p>

                            Welcome

                            {" "}

                            {user.firstName}

                        </p>

                        <p>

                            Email:

                            {" "}

                            {user.email}

                        </p>

                        <p>

                            Role:

                            {" "}

                            {user.role}

                        </p>

                    </div>

                </div>

            )}

        </Protected>

    );

}