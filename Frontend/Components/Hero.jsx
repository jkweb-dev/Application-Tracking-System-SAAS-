import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {

return (

<section className="bg-slate-50">

<div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

<div className="grid lg:grid-cols-2 gap-12 items-center">

{/* LEFT SIDE */}

<div>

{/* Badge */}

<div className="inline-flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-full text-sm text-slate-600 shadow-sm">

<span className="w-2 h-2 bg-blue-500 rounded-full"></span>

Modern ATS for Fast Hiring

</div>

{/* Heading */}

<h1 className="mt-6 text-4xl lg:text-6xl font-bold tracking-tight text-slate-900">

Hire Faster. Smarter. Better.

</h1>

{/* Subheading */}

<p className="mt-6 text-lg text-slate-600 leading-relaxed">

RecruitFlow helps companies manage hiring from job posting to onboarding with a powerful and simple Applicant Tracking System.

</p>

{/* Buttons */}

<div className="mt-8 flex flex-col sm:flex-row gap-4">

<Link   href="/register/employer" >
<button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">

Get Started as Employer

</button>

</Link>

<Link href="/employer/jobs/my_jobs">
<button className="bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-100 transition">
  

Find Jobs

</button>
  </Link>

</div>

{/* Stats */}

<div className="mt-10 flex gap-8">

<div>

<p className="text-2xl font-bold text-slate-900">10k+</p>

<p className="text-sm text-slate-500">Jobs Posted</p>

</div>

<div>

<p className="text-2xl font-bold text-slate-900">5k+</p>

<p className="text-sm text-slate-500">Companies</p>

</div>

<div>

<p className="text-2xl font-bold text-slate-900">50k+</p>

<p className="text-sm text-slate-500">Candidates</p>

</div>

</div>

</div>

{/* RIGHT SIDE */}

<div className="relative">

{/* Main mock dashboard image */}

<div className="rounded-2xl shadow-2xl border border-slate-200 overflow-hidden bg-white">

<Image

src="/Dashboard_Preview.jpg"

alt="Dashboard Preview"

width={800}

height={600}

className="w-full h-auto"

/>

</div>

{/* Floating cards */}

<div className="absolute -top-6 -left-6 bg-white shadow-lg border border-slate-200 rounded-xl p-4">

<p className="text-sm text-slate-500">New Applicants</p>

<p className="text-xl font-bold text-slate-900">124</p>

</div>

<div className="absolute -bottom-6 -right-6 bg-white shadow-lg border border-slate-200 rounded-xl p-4">

<p className="text-sm text-slate-500">Hiring Rate</p>

<p className="text-xl font-bold text-green-600">+32%</p>

</div>

</div>

</div>

</div>

</section>

);

}