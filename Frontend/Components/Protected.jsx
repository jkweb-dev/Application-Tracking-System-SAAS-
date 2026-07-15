"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function Protected({

    allowedRole,

    children

}) {

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState(null);


    useEffect(() => {

        verifyUser();

    }, []);



    const verifyUser = async () => {

        try {

            const token = localStorage.getItem(

                "token"

            );


            if (!token) {

                toast.error("No Token Provided")

                router.push("/");

                return;

            }


            const response = await axios.get(

                "http://localhost:5000/auth/verify",

                {

                    headers: {

                        Authorization:

                            `Bearer ${token}`

                    }

                }

            );


            const currentUser =

                response.data.user;

                console.log(currentUser)


            if (

                currentUser.role !== allowedRole

            ) {

                toast.error(

                    "Access Denied"

                );

                router.push("/");

                return;

            }


            setUser(

                currentUser

            );

        }

        catch (error) {


            localStorage.removeItem(

                "token"

            );


            toast.error(

                error.response?.data?.message ||

                "Please login again"

            );


            router.push("/");

        }

        finally {

            setLoading(false);

        }

    };



    if (loading) {

        return (

            <div

                className="

                min-h-screen

                flex

                items-center

                justify-center

                "

            >

                Loading...

            </div>

        );

    }


    if (!user) return null;


    return children(user);


}