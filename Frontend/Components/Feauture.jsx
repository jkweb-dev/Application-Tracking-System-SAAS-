import {
  Workflow,
  Users,
  FileText,
  BarChart3,
  MessageSquare,
  Calendar
} from "lucide-react";

export default function Features() {

const features = [
{
title: "Smart Pipeline",
desc: "Move candidates through hiring stages using a visual drag & drop system.",
icon: Workflow
},

{
title: "Candidate Tracking",
desc: "Track every applicant from application to hiring in one centralized system.",
icon: Users
},

{
title: "Job Posting System",
desc: "Create and publish job openings instantly with custom forms.",
icon: FileText
},

{
title: "Analytics Dashboard",
desc: "Get insights on hiring performance, conversion rates, and reports.",
icon: BarChart3
},

{
title: "Interview Management",
desc: "Schedule, track, and manage interviews with candidates easily.",
icon: Calendar
},

{
title: "Team Collaboration",
desc: "Add notes, comments, and communicate with hiring teams in real time.",
icon: MessageSquare
}
];

return (

<section className="bg-slate-50 py-20">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-14">

<h2 className="text-3xl md:text-4xl font-bold text-slate-900">

Everything you need to hire faster

</h2>

<p className="mt-4 text-slate-600">

A complete Applicant Tracking System built for modern teams

</p>

</div>

{/* Grid */}

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

{

features.map((feature, index) => {

const Icon = feature.icon;

return (

<div

key={index}

className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"

>

{/* Icon */}

<div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-4">

<Icon size={22} />

</div>

{/* Title */}

<h3 className="text-lg font-semibold text-slate-900">

{feature.title}

</h3>

{/* Description */}

<p className="mt-2 text-sm text-slate-500 leading-relaxed">

{feature.desc}

</p>

</div>

);

})

}

</div>

</div>

</section>

);

}