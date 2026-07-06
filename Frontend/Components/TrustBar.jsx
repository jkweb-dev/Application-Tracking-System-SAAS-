import {
  Briefcase,
  Building2,
  Rocket,
  ShieldCheck,
  Globe,
  Users
} from "lucide-react";

export default function TrustBar() {

const companies = [
  {
    name: "TechCorp",
    icon: Building2
  },
  {
    name: "HireFlow",
    icon: Briefcase
  },
  {
    name: "StartupX",
    icon: Rocket
  },
  {
    name: "SecureHR",
    icon: ShieldCheck
  },
  {
    name: "GlobalWorks",
    icon: Globe
  },
  {
    name: "TalentHub",
    icon: Users
  }
];

return (

<section className="bg-slate-50 border-y border-slate-200">

<div className="max-w-7xl mx-auto px-6 py-10">

{/* Title */}

<p className="text-center text-sm text-slate-500 mb-8">

Trusted by modern companies worldwide

</p>

{/* Logos */}

<div className="flex flex-wrap justify-center items-center gap-10">

{

companies.map((company, index) => {

const Icon = company.icon;

return (

<div

key={index}

className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition"

>

<Icon size={20} />

<span className="text-sm font-medium">

{company.name}

</span>

</div>

);

})

}

</div>

</div>

</section>

);

}