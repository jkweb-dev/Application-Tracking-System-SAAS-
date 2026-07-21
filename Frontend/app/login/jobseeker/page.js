"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginJobSeeker() {

const router = useRouter()
  const initialFormData = {

    email: "",

    password: ""

  };


  const [formData, setFormData] = useState(

    initialFormData

  );


  const [errors, setErrors] = useState({});


  const [loading, setLoading] = useState(false);



  // Handle Input Change

  const handleChange = (e) => {

setErrors({})

    const {

      name,

      value

    } = e.target;



    setFormData((prev)=>({


      ...prev,


      [name]: value


    }));

  };





  // Validation

  const validateForm = () => {


    const newErrors = {};



    if(!formData.email.trim()){


      newErrors.email =

      "Email is required";


    }



    else if(

      !/\S+@\S+\.\S+/.test(

        formData.email

      )

    ){


      newErrors.email =

      "Enter valid email";


    }




    if(!formData.password){


      newErrors.password =

      "Password is required";


    }



    else if(

      formData.password.length < 8

    ){


      newErrors.password =

      "Password must contain 8 characters";


    }





    setErrors(newErrors);



    return (

      Object.keys(newErrors).length === 0

    );


  };






  // Submit

  const handleSubmit = async(e)=>{


    e.preventDefault();



    const valid = validateForm();



    if(!valid) return;



    try{


      setLoading(true);



      const response = await axios.post(


        "http://localhost:5000/jobseeker/login",


        formData


      );




      if(response.status === 200){



        toast.success(

          response.data.message

        );




        localStorage.setItem(

          "token",

          response.data.token

        );




        setFormData(

          initialFormData

        );



        setErrors({});



       router.push("/jobseeker/jobs")



      }



    }



    catch(error){



      toast.error(


        error.response?.data?.message ||

        "Something went wrong"


      );


    }



    finally{


      setLoading(false);


    }



  };






  return (



    <div className="min-h-screen bg-slate-50">





      {/* Navbar */}

      <nav className="bg-white border-b">


        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">



          <Link

            href="/"

            className="text-2xl font-bold"

          >

            RecruitFlow

          </Link>





          <div className="hidden md:flex gap-8">


            <Link href="#">

              Pricing

            </Link>



            <Link href="#">

              Resources

            </Link>



            <Link href="#">

              Contact

            </Link>



            <Link

              href="/register/job-seeker"

              className="text-blue-600 font-medium"

            >

              Register

            </Link>



          </div>


        </div>


      </nav>








      {/* Login Card */}


      <section className="py-20 px-4 flex justify-center">



        <div className="w-full max-w-md bg-white border rounded-2xl shadow-sm p-8">





          <div className="text-center mb-8">


            <h1 className="text-3xl font-bold">

              Welcome Back

            </h1>



            <p className="text-slate-600 mt-2">

              Login to continue your job search.

            </p>


          </div>







          <form

            onSubmit={handleSubmit}

            className="space-y-5"

          >






            {/* Email */}


            <div>


              <input


                type="email"


                name="email"


                placeholder="Email Address"


                value={formData.email}


                onChange={handleChange}


                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"


              />




              {

                errors.email &&


                <p className="text-red-500 text-sm mt-1">

                  {errors.email}

                </p>


              }


            </div>








            {/* Password */}


            <div>



              <input



                type="password"



                name="password"



                placeholder="Password"



                value={formData.password}



                onChange={handleChange}



                className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"



              />




              {


                errors.password &&



                <p className="text-red-500 text-sm mt-1">


                  {errors.password}


                </p>



              }



            </div>







            {/* Options */}



            <div className="flex justify-end text-sm">




              <Link

                href="/JobSeeker_Forgot_Password"

                className="text-blue-600"

              >

                Forgot Password?

              </Link>



            </div>









            {/* Button */}



            <button



              type="submit"



              disabled={loading}



              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition"



            >



              {

                loading

                ?

                "Logging in..."

                :

                "Login"


              }



            </button>





          </form>








          <p className="text-center mt-6 text-slate-600">



            Don't have an account?



            <Link



              href="/register/jobseeker"



              className="text-blue-600 ml-1"



            >


              Register



            </Link>




          </p>






        </div>



      </section>







    </div>


  );

}