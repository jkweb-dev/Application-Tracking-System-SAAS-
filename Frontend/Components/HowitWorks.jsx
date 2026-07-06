import {
  UserPlus,
  Briefcase,
  Inbox,
  GitBranch,
  CheckCircle
} from "lucide-react";

export default function HowItWorks() {

const steps = [
{
title: "Create Account",
desc: "Sign up as an employer or job seeker in seconds.",
icon: UserPlus
},

{
title: "Post Jobs",
desc: "Employers create and publish job listings easily.",
icon: Briefcase
},

{
title: "Receive Applications",
desc: "Candidates apply and data flows into your dashboard.",
icon: Inbox
},

{
title: "Manage Pipeline",
desc: "Move candidates through hiring stages using drag & drop.",
icon: GitBranch
},

{
title: "Hire Talent",
desc: "Finalize hiring decisions and close candidates successfully.",
icon: CheckCircle
}
];

return (

<section className="bg-white py-24">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<h2 className="text-3xl md:text-4xl font-bold text-slate-900">

How RecruitFlow Works

</h2>

<p className="mt-4 text-slate-600">

A simple 5-step hiring process designed for modern teams

</p>

</div>

{/* Steps */}

<div className="relative">

{/* vertical line (desktop) */}

<div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-slate-200"></div>

<div className="space-y-16">

{steps.map((step, index) => {

const Icon = step.icon;

const isLeft = index % 2 === 0;

return (

<div

key={index}

className={`flex flex-col lg:flex-row items-center gap-8 ${

isLeft ? "" : "lg:flex-row-reverse"

}`}

>

{/* Content */}

<div className="w-full lg:w-1/2">

<div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition">

{/* Icon */}

<div className="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-600 rounded-xl mb-4">

<Icon size={22} />

</div>

{/* Title */}

<h3 className="text-xl font-semibold text-slate-900">

{step.title}

</h3>

{/* Description */}

<p className="mt-2 text-slate-600">

{step.desc}

</p>

</div>

</div>

{/* Circle connector */}

<div className="hidden lg:flex w-10 h-10 items-center justify-center bg-blue-600 text-white rounded-full z-10">

{index + 1}

</div>

{/* Spacer */}

<div className="hidden lg:block w-1/2"></div>

</div>

);

})}

</div>

</div>

</div>

</section>

);

}