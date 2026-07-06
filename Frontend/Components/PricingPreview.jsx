import { Check } from "lucide-react";

export default function PricingPreview() {

const plans = [
{
name: "Starter",
price: "Free",
desc: "For small teams getting started",
features: [
"Basic job posting",
"Candidate tracking",
"Email notifications",
"Limited usage"
]
},

{
name: "Pro",
price: "$29/mo",
desc: "For growing companies",
features: [
"Advanced pipeline",
"Analytics dashboard",
"Team collaboration",
"Priority support"
]
},

{
name: "Enterprise",
price: "Custom",
desc: "For large organizations",
features: [
"Dedicated support",
"Custom integrations",
"Advanced security",
"Unlimited usage"
]
}
];

return (

<section className="bg-slate-50 py-24">

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<h2 className="text-3xl md:text-4xl font-bold text-slate-900">

Simple Pricing for Everyone

</h2>

<p className="mt-4 text-slate-600">

Choose a plan that fits your hiring needs

</p>

</div>

{/* Cards */}

<div className="grid md:grid-cols-3 gap-8">

{plans.map((plan, index) => (

<div

key={index}

className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition"

>

{/* Name */}

<h3 className="text-xl font-semibold text-slate-900">

{plan.name}

</h3>

{/* Price */}

<p className="text-2xl font-bold text-blue-600 mt-2">

{plan.price}

</p>

{/* Description */}

<p className="text-sm text-slate-500 mt-2">

{plan.desc}

</p>

{/* Features */}

<div className="mt-6 space-y-3">

{plan.features.map((f, i) => (

<div key={i} className="flex items-center gap-2">

<Check size={16} className="text-green-500" />

<span className="text-sm text-slate-600">

{f}

</span>

</div>

))}

</div>

{/* Button */}

<button className="mt-6 w-full bg-blue-600 text-white py-2.5 rounded-xl hover:bg-blue-700 transition">

Get Started

</button>

</div>

))}

</div>

</div>

</section>

);

}