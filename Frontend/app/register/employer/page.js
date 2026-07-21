"use client"

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterEmployer() {

  const router = useRouter()
    const validateForm = () => {

const newErrors={};

if(!formData.companyName){

newErrors.companyName=
"Company Name is required";

}

if (!formData.hrName) {
    newErrors.hrName = "HR Name is required";
  }

  if (!formData.location) {
    newErrors.location = "Location is required";
  }

if(!formData.email){

newErrors.email=
"Email is required";

}

  if (!formData.industry) {
    newErrors.industry = "Please select an industry";
  }

  if (!formData.companySize) {
    newErrors.companySize = "Please select company size";
  }


if(formData.password.length<8){

newErrors.password=
"Minimum 8 characters";

}

if(

formData.password
!==

formData.confirmPassword

){

newErrors.confirmPassword=
"Passwords do not match";

}

if(!formData.agree){

newErrors.agree=
"Accept terms";

}

setErrors(newErrors);

return Object.keys(newErrors)
.length===0;

};


    const [errors,setErrors]=useState({});
    const [loading , setLoading] = useState(false)
    const [formData, setFormData] = useState({

companyName: "",

industry: "",

companySize: "",

location: "",

hrName: "",

email: "",

password: "",

confirmPassword: "",

agree: false

});


const handleChange = (e) => {

    setErrors({})
const {name,value,type,checked}=e.target;

setFormData(prev=>({

...prev,

[name]:
type==="checkbox"
? checked
: value

}));

};


const handleSubmit= async (e) => {

e.preventDefault()
const valid=
validateForm();

if(!valid){
      console.log("stopped")
return;
}

 try {

        setLoading(true);

        const response = await axios.post(

            "http://localhost:5000/employer/register",

            formData

        );

      

        if (response.status === 201) {

            toast.success(

                response.data.message
            );

            localStorage.setItem(

                "token",

                response.data.token

            );

           setFormData({
            companyName: "",

industry: "",

companySize: "",

location: "",

hrName: "",

email: "",

password: "",

confirmPassword: "",

agree: false
})
         

router.push("/employer/profile")

        }

    }

    catch (error) {

      console.log(error)
        if (error.response) {

            toast.error(

                error.response.data.message

            );

        }

        else {

            toast.error(

                "Something went wrong"

            );

        }

    }

    finally {

        setLoading(false);

    }




};



  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}

          <h1 className="text-2xl font-bold text-slate-900">
            RecruitFlow
          </h1>

          {/* Links */}

          <div className="hidden md:flex items-center gap-8">

            <a
              href="/pricing"
              className="text-slate-600 hover:text-black transition"
            >
              Pricing
            </a>

            <a
              href="/resources"
              className="text-slate-600 hover:text-black transition"
            >
              Resources
            </a>

            <a
              href="/contact"
              className="text-slate-600 hover:text-black transition"
            >
              Contact
            </a>

            <a
              href="/login/employer"
              className="text-blue-600 font-medium"
            >
              Login
            </a>

          </div>

        </div>

      </nav>

      {/* Main Section */}

      <section className="flex justify-center items-center py-20 px-4">

        <div
          className="
          max-w-md
          w-full
          bg-white
          rounded-2xl
          border
          border-slate-200
          shadow-sm
          p-8
        "
        >

          {/* Header */}

          <div className="text-center mb-8">

            <h2 className="text-3xl font-bold text-slate-900">

              Create Employer Account

            </h2>

            <p className="text-slate-600 mt-2">

              Start hiring smarter with RecruitFlow

            </p>

          </div>

          {/* Form */}

          <form onSubmit={handleSubmit} className="space-y-4">

            <input
            name ="companyName"
            value={formData.companyName}
            onChange={handleChange}
              type="text"
              placeholder="Company Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
errors.companyName && (

<p className="text-red-500 text-sm">

{errors.companyName}

</p>

)}



            <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="">

                Select Industry

              </option>

              <option value="technology">

                Technology

              </option>

              <option value="healthcare">

                Healthcare

              </option>

              <option value="finance">

                Finance

              </option>

              <option value="education">

                Education

              </option>

              <option value="retail">

                Retail

              </option>

              <option value="other">

                Other

              </option>

            </select>
            {
errors.industry && (

<p className="text-red-500 text-sm">

{errors.industry}

</p>

)}

            <select
            name = "companySize"
            value={formData.companySize}
            onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="">

                Company Size

              </option>

              <option value="1-10">

                1-10

              </option>

              <option value="11-50">

                11-50

              </option>

              <option value="51-200">

                51-200

              </option>

              <option value="201-500">

                201-500

              </option>

              <option  value="500+"> 

                500+

              </option>

            </select>
            {
errors.companySize && (

<p className="text-red-500 text-sm">

{errors.companySize}

</p>

)}

            <input
            name="location"
            value={formData.location}
            onChange={handleChange}
              type="text"
              placeholder="Location"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
errors.location && (

<p className="text-red-500 text-sm">

{errors.location}

</p>

)}

            <input
            name="hrName"
            value={formData.hrName}
            onChange={handleChange}
              type="text"
              placeholder="HR Name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
errors.hrName && (

<p className="text-red-500 text-sm">

{errors.hrName}

</p>

)}

            <input
            name="email"
            value={formData.email}
            onChange={handleChange}
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
errors.email && (

<p className="text-red-500 text-sm">

{errors.email}

</p>

)}

            <input
            name="password"
            value={formData.password}
            onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
errors.password && (

<p className="text-red-500 text-sm">

{errors.password}

</p>

)}

            <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            {
errors.confirmPassword && (

<p className="text-red-500 text-sm">

{errors.confirmPassword}

</p>

)}

            {/* Checkbox */}

            <div className="flex items-center gap-2">

              <input
              name="agree"
             checked={formData.agree}
              onChange={handleChange}
                type="checkbox"
              />

              <label className="text-sm text-slate-600">

                I agree to Terms & Conditions

              </label>

            </div>
             {
errors.agree && (

<p className="text-red-500 text-sm">

{errors.agree}

</p>

)}
            

            {/* Button */}

            <button
            disabled = {loading}
              className="
              w-full
              bg-black
              text-white
              py-3
              rounded-xl
              font-medium
              hover:bg-slate-800
              transition
            "
            >

           {loading ? "Creating Account....." : "Register"}   

            </button>

          </form>

          {/* Bottom Link */}

          <div className="text-center mt-6">

            <p className="text-slate-600">

              Already have an account?

              <a
                href="/login/employer"
                className="ml-2 text-blue-600 hover:underline"
              >

                Login

              </a>

            </p>

          </div>

        </div>

      </section>

    </div>
  );
}