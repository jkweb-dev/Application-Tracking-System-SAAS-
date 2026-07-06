"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {

  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const [activeMobile, setActiveMobile] = useState(null);


  const toggleDropdown = (name) => {
    setActiveDropdown(
      activeDropdown === name
        ? null
        : name
    );
  };


  const toggleMobile = (name) => {

    setActiveMobile(

      activeMobile === name

        ? null

        : name

    );

  };


  return (

    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-slate-50/80 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >

            RecruitFlow

          </Link>



          {/* Center Menu */}

          <div className="hidden lg:flex items-center gap-8">

            {/* Products */}

            <div className="relative">

              <button

                onClick={() => toggleDropdown("products")}

                className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600"

              >

                Products

                <ChevronDown size={16}/>

              </button>


              {

                activeDropdown === "products"

                &&

                (

                  <div className="absolute left-0 mt-4 w-80 rounded-2xl border border-slate-200 bg-white shadow-xl p-5">

                    <h3 className="font-semibold mb-3">

                      ATS System

                    </h3>

                    <div className="space-y-2 text-sm text-slate-600">

                      <p>Pipeline Management</p>

                      <p>Candidate Tracking</p>

                      <p>Job Posting</p>

                    </div>


                    <hr className="my-4"/>


                    <h3 className="font-semibold mb-3">

                      Analytics

                    </h3>


                    <div className="space-y-2 text-sm text-slate-600">

                      <p>Hiring Reports</p>

                      <p>Dashboards</p>

                    </div>

                  </div>

                )

              }

            </div>



            {/* Pricing */}

            <div className="relative">

              <button

                onClick={() => toggleDropdown("pricing")}

                className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600"

              >

                Pricing

                <ChevronDown size={16}/>

              </button>


              {

                activeDropdown === "pricing"

                &&

                (

                  <div className="absolute left-0 mt-4 w-72 rounded-2xl border bg-white shadow-xl p-5">

                    <div>

                      <h3 className="font-semibold">

                        Starter

                      </h3>

                      <p className="text-sm text-slate-500">

                        Free Plan

                      </p>

                    </div>


                    <div className="mt-4">

                      <h3 className="font-semibold">

                        Pro

                      </h3>

                      <p className="text-sm text-slate-500">

                        $29/month

                      </p>

                    </div>


                    <div className="mt-4">

                      <h3 className="font-semibold">

                        Enterprise

                      </h3>

                      <p className="text-sm text-slate-500">

                        Custom Pricing

                      </p>

                    </div>

                  </div>

                )

              }

            </div>



            {/* Resources */}

            <div className="relative">

              <button

                onClick={() => toggleDropdown("resources")}

                className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600"

              >

                Resources

                <ChevronDown size={16}/>

              </button>


              {

                activeDropdown === "resources"

                &&

                (

                  <div className="absolute left-0 mt-4 w-64 rounded-2xl border bg-white shadow-xl p-5">

                    <div className="space-y-3 text-sm">

                      <p>Blog</p>

                      <p>Documentation</p>

                      <p>Help Center</p>

                      <p>API Docs</p>

                    </div>

                  </div>

                )

              }

            </div>

          </div>



          {/* Right Buttons */}

          <div className="hidden lg:flex items-center gap-4">


            {/* Login */}

            <div className="relative">

              <button

                onClick={() => toggleDropdown("login")}

                className="bg-slate-900 rounded-xl px-5 py-2.5 text-white flex items-center gap-2"

              >

                Login

                <ChevronDown size={16}/>

              </button>


              {

                activeDropdown === "login"

                &&

                (

                  <div className="absolute right-0 mt-4 w-60 rounded-2xl border bg-white shadow-xl p-3">

                    <Link

                      href="/login/employer"

                      className="block rounded-lg p-2 hover:bg-slate-100"

                    >

                      Employer Login

                    </Link>


                    <Link

                      href="/login/candidate"

                      className="block rounded-lg p-2 hover:bg-slate-100"

                    >

                      Candidate Login

                    </Link>

                  </div>

                )

              }

            </div>



            {/* Register */}

            <div className="relative">

              <button

                onClick={() => toggleDropdown("register")}

                className="bg-blue-600 hover:bg-blue-700 rounded-xl px-5 py-2.5 text-white flex items-center gap-2"

              >

                Register

                <ChevronDown size={16}/>

              </button>


              {

                activeDropdown === "register"

                &&

                (

                  <div className="absolute right-0 mt-4 w-64 rounded-2xl border bg-white shadow-xl p-3">

                    <Link

                      href="/register/employer"

                      className="block rounded-lg p-2 hover:bg-slate-100"

                    >

                      Register as Employer

                    </Link>


                    <Link

                      href="/register/candidate"

                      className="block rounded-lg p-2 hover:bg-slate-100"

                    >

                      Register as Job Seeker

                    </Link>

                  </div>

                )

              }

            </div>

          </div>



          {/* Mobile Button */}

          <button

            onClick={() => setMobileOpen(!mobileOpen)}

            className="lg:hidden"

          >

            {

              mobileOpen

                ?

                <X size={28}/>

                :

                <Menu size={28}/>

            }

          </button>

        </div>

      </div>



      {/* Mobile Menu */}

      {

        mobileOpen && (

          <div className="lg:hidden border-t border-slate-200 bg-white">

            <div className="p-6 space-y-4">


              {/* Products */}

              <div>

                <button

                  onClick={() => toggleMobile("products")}

                  className="flex justify-between w-full"

                >

                  Products

                  <ChevronDown size={18}/>

                </button>


                {

                  activeMobile === "products"

                  &&

                  (

                    <div className="pl-4 mt-3 space-y-2 text-sm">

                      <div className="space-y-2">

  <div className="rounded-xl p-3 hover:bg-slate-50 transition cursor-pointer">

    <h4 className="font-medium text-slate-900">
      Pipeline Management
    </h4>

    <p className="text-sm text-slate-500">
      Manage applicants visually
    </p>

  </div>

  <div className="rounded-xl p-3 hover:bg-slate-50 transition cursor-pointer">

    <h4 className="font-medium text-slate-900">
      Candidate Tracking
    </h4>

    <p className="text-sm text-slate-500">
      Track candidates efficiently
    </p>

  </div>

  <div className="rounded-xl p-3 hover:bg-slate-50 transition cursor-pointer">

    <h4 className="font-medium text-slate-900">
      Job Posting
    </h4>

    <p className="text-sm text-slate-500">
      Publish jobs in seconds
    </p>

  </div>

</div>

                    </div>

                  )

                }

              </div>


              {/* Pricing */}

              <div>

                <button

                  onClick={() => toggleMobile("pricing")}

                  className="flex justify-between w-full"

                >

                  Pricing

                  <ChevronDown size={18}/>

                </button>


                {

                  activeMobile === "pricing"

                  &&

                  (

                    <div className="pl-4 mt-3 space-y-2 text-sm">
<div className="rounded-xl p-3 hover:bg-slate-50 transition cursor-pointer">

<h4 className="font-medium text-slate-900">
Starter
</h4>

<p className="text-sm text-slate-500">
Perfect for small teams
</p>

</div>

<div className="rounded-xl p-3 hover:bg-slate-50 transition cursor-pointer">

<h4 className="font-medium text-slate-900">
Pro
</h4>

<p className="text-sm text-slate-500">
Unlimited hiring workflows
</p>

</div>

<div className="rounded-xl p-3 hover:bg-slate-50 transition cursor-pointer">

<h4 className="font-medium text-slate-900">
Enterprise
</h4>

<p className="text-sm text-slate-500">
Custom solutions for large companies
</p>

</div>
                    </div>

                  )

                }

              </div>


              {/* Resources */}

              <div>

                <button

                  onClick={() => toggleMobile("resources")}

                  className="flex justify-between w-full"

                >

                  Resources

                  <ChevronDown size={18}/>

                </button>


                {

                  activeMobile === "resources"

                  &&

                  (

                    <div className="pl-4 mt-3 space-y-2 text-sm">

                     <div className="space-y-2">

<div className="rounded-xl p-3 hover:bg-slate-50 transition">

<h4 className="font-medium text-slate-900">

Blog

</h4>

<p className="text-sm text-slate-500">

Latest hiring insights

</p>

</div>


<div className="rounded-xl p-3 hover:bg-slate-50 transition">

<h4 className="font-medium text-slate-900">

Documentation

</h4>

<p className="text-sm text-slate-500">

Learn how RecruitFlow works

</p>

</div>


<div className="rounded-xl p-3 hover:bg-slate-50 transition">

<h4 className="font-medium text-slate-900">

API Docs

</h4>

<p className="text-sm text-slate-500">

Developer integrations

</p>

</div>

</div>

                    </div>

                  )

                }

              </div>


              {/* Login */}

              <div>

                <button

                  onClick={() => toggleMobile("login")}

                  className="flex  justify-between w-full"

                >

                  Login

                  <ChevronDown size={18}/>

                </button>


                {

                  activeMobile === "login"

                  &&

                  (

                    <div className="flex flex-col pl-4 mt-3 space-y-2">

                     <Link
href="/login/employer"
className="block rounded-xl p-3 hover:bg-slate-50 transition"
>

<h4 className="font-medium text-slate-900">

Employer Login

</h4>

<p className="text-sm text-slate-500">

Access your hiring dashboard

</p>

</Link>



<Link
href="/login/candidate"
className="block rounded-xl p-3 hover:bg-slate-50 transition"
>

<h4 className="font-medium text-slate-900">

Candidate Login

</h4>

<p className="text-sm text-slate-500">

Manage your applications

</p>

</Link>

                    </div>

                  )

                }

              </div>


              {/* Register */}

              <div>

                <button

                  onClick={() => toggleMobile("register")}

                  className="flex justify-between w-full"

                >

                  Register

                  <ChevronDown size={18}/>

                </button>


                {

                  activeMobile === "register"

                  &&

                  (

                    <div className="flex flex-col pl-4 mt-3 space-y-2">

                    <Link
href="/register/employer"
className="block rounded-xl p-3 hover:bg-slate-50 transition"
>

<h4 className="font-medium text-slate-900">

Register as Employer

</h4>

<p className="text-sm text-slate-500">

Post jobs and hire talent

</p>

</Link>



<Link
href="/register/candidate"
className="block rounded-xl p-3 hover:bg-slate-50 transition"
>

<h4 className="font-medium text-slate-900">

Register as Job Seeker

</h4>

<p className="text-sm text-slate-500">

Find opportunities faster

</p>

</Link>

                    </div>

                  )

                }

              </div>

            </div>

          </div>

        )

      }

    </nav>

  );

}