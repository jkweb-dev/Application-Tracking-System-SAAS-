"use client";

import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";

export default function RegisterJobSeeker() {

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    currentRole: "",
    experience: "",
    skill: "",
    password: "",
    confirmPassword: "",
    agree: false
  };

  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});

  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {
setErrors({})
    const {
      name,
      value,
      type,
      checked
    } = e.target;

    setFormData((prev) => ({
      ...prev,

      [name]:
        type === "checkbox"
          ? checked
          : value

    }));

  };


  const validateForm = () => {

    const newErrors = {};

    if (!formData.firstName.trim()) {

      newErrors.firstName =
        "First name is required";

    }

    if (!formData.lastName.trim()) {

      newErrors.lastName =
        "Last name is required";

    }

    if (!formData.email.trim()) {

      newErrors.email =
        "Email is required";

    }

    else if (

      !/\S+@\S+\.\S+/.test(

        formData.email

      )

    ) {

      newErrors.email =
        "Invalid Email";

    }

    if (!formData.phone.trim()) {

      newErrors.phone =
        "Phone number is required";

    }

    if (!formData.location.trim()) {

      newErrors.location =
        "Location is required";

    }

    if (!formData.currentRole) {

      newErrors.currentRole =
        "Please select role";

    }

    if (!formData.experience) {

      newErrors.experience =
        "Please select experience";

    }

    if (!formData.skill) {

      newErrors.skill =
        "Please select skill";

    }

    if (!formData.password) {

      newErrors.password =
        "Password is required";

    }

    else if (

      formData.password.length < 8

    ) {

      newErrors.password =
        "Password must contain at least 8 characters";

    }

    if (

      formData.password !==

      formData.confirmPassword

    ) {

      newErrors.confirmPassword =
        "Passwords do not match";

    }

    if (!formData.agree) {

      newErrors.agree =
        "Accept Terms & Conditions";

    }

    setErrors(newErrors);

    return (

      Object.keys(

        newErrors

      ).length === 0

    );

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    const valid = validateForm();

    if (!valid) return;

    try {

      setLoading(true);

      const response =

        await axios.post(

          "http://localhost:5000/jobseeker/register",

          formData

        );

      if (

        response.status === 201

      ) {

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

      }

    }

    catch (error) {
console.log(error)
      toast.error(

        error.response?.data?.message ||

        "Something went wrong"

      );

    }

    finally {

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


          <div className="hidden md:flex items-center gap-8">

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

              href="/login/job-seeker"

              className="text-blue-600 font-medium"

            >

              Login

            </Link>

          </div>

        </div>

      </nav>



      <section className="py-16 px-4 flex justify-center">

        <div className="bg-white border rounded-2xl shadow-sm p-8 w-full max-w-md">


          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold">

              Create Account

            </h1>

            <p className="text-slate-600 mt-2">

              Build your profile and apply for jobs.

            </p>

          </div>



          <form

            onSubmit={handleSubmit}

            className="space-y-4"

          >


            {/* First Name */}

            <div>

              <input

                type="text"

                name="firstName"

                placeholder="First Name"

                value={formData.firstName}

                onChange={handleChange}

                className="w-full border rounded-xl px-4 py-3"

              />

              {

                errors.firstName &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.firstName}

                </p>

              }

            </div>


            {/* Last Name */}

            <div>

              <input

                type="text"

                name="lastName"

                placeholder="Last Name"

                value={formData.lastName}

                onChange={handleChange}

                className="w-full border rounded-xl px-4 py-3"

              />

              {

                errors.lastName &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.lastName}

                </p>

              }

            </div>


            {/* Email */}

            <div>

              <input

                type="email"

                name="email"

                placeholder="Email"

                value={formData.email}

                onChange={handleChange}

                className="w-full border rounded-xl px-4 py-3"

              />

              {

                errors.email &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.email}

                </p>

              }

            </div>


            {/* Phone */}

            <div>

              <input

                type="text"

                name="phone"

                placeholder="Phone Number"

                value={formData.phone}

                onChange={handleChange}

                className="w-full border rounded-xl px-4 py-3"

              />

              {

                errors.phone &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.phone}

                </p>

              }

            </div>


            {/* Location */}

            <div>

              <input

                type="text"

                name="location"

                placeholder="Location"

                value={formData.location}

                onChange={handleChange}

                className="w-full border rounded-xl px-4 py-3"

              />

              {

                errors.location &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.location}

                </p>

              }

            </div>


            {/* Current Role */}

            <select

              name="currentRole"

              value={formData.currentRole}

              onChange={handleChange}

              className="w-full border rounded-xl px-4 py-3"

            >

              <option value="">

                Select Current Role

              </option>

              <option value="Frontend Developer">

                Frontend Developer

              </option>

              <option value="Backend Developer">

                Backend Developer

              </option>

              <option value="Full Stack Developer">

                Full Stack Developer

              </option>

              <option value="UI Designer">

                UI Designer

              </option>

              <option value="Student">

                Student

              </option>

            </select>
             {

                errors.currentRole &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.currentRole}

                </p>

              }




            {/* Experience */}

            <select

              name="experience"

              value={formData.experience}

              onChange={handleChange}

              className="w-full border rounded-xl px-4 py-3"

            >

              <option value="">

                Select Experience

              </option>

              <option value="Fresher">

                Fresher

              </option>

              <option value="1-2 Years">

                1-2 Years

              </option>

              <option value="3-5 Years">

                3-5 Years

              </option>

              <option value="5+ Years">

                5+ Years

              </option>

            </select>

             {

                errors.experience &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.experience}

                </p>

              }


            {/* Skill */}

            <select

              name="skill"

              value={formData.skill}

              onChange={handleChange}

              className="w-full border rounded-xl px-4 py-3"

            >

              <option value="">

                Select Skill

              </option>

              <option value="React">

                React

              </option>

              <option value="Next.js">

                Next.js

              </option>

              <option value="Node.js">

                Node.js

              </option>

              <option value="Express">

                Express

              </option>

              <option value="MongoDB">

                MongoDB

              </option>

              <option value="JavaScript">

                JavaScript

              </option>

            </select>
             {

                errors.skill &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.skill}

                </p>

              }



            {/* Password */}

            <div>

              <input

                type="password"

                name="password"

                placeholder="Password"

                value={formData.password}

                onChange={handleChange}

                className="w-full border rounded-xl px-4 py-3"

              />

            </div>
             {

                errors.password &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.password}

                </p>

              }



            {/* Confirm Password */}

            <div>

              <input

                type="password"

                name="confirmPassword"

                placeholder="Confirm Password"

                value={formData.confirmPassword}

                onChange={handleChange}

                className="w-full border rounded-xl px-4 py-3"

              />

 {

                errors.confirmPassword &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.confirmPassword}

                </p>

              }

            </div>


            {/* Checkbox */}

            <div className="flex items-center gap-2">

              <input

                type="checkbox"

                name="agree"

                checked={formData.agree}

                onChange={handleChange}

              />

              <label>

                I agree to Terms & Conditions

              </label>


            </div>
             {

                errors.agree &&

                <p className="text-red-500 text-sm mt-1">

                  {errors.agree}

                </p>

              }


            <button

              type="submit"

              disabled={loading}

              className="w-full bg-black text-white py-3 rounded-xl"

            >

              {

                loading

                  ?

                  "Creating Account..."

                  :

                  "Create Account"

              }

            </button>

          </form>


          <p className="text-center mt-6">

            Already have an account?

            <Link

              href="/login/jobseeker"

              className="text-blue-600 ml-1"

            >

              Login

            </Link>

          </p>

        </div>

      </section>

    </div>

  );

}