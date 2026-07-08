"use client";

import Protected from "@/Components/Protected";

export default function EmployerDashboard() {

    return (

        <Protected allowedRole="employer">

            {(user) => (

                <div className="min-h-screen flex items-center justify-center">

                    <div className="bg-white shadow rounded-xl p-8">

                        <h1 className="text-3xl font-bold">

                            Employer Dashboard

                        </h1>

                        <p>

                            Welcome

                            {" "}

                            {user.companyName}

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