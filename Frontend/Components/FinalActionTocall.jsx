import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {

return (

<section className="bg-blue-600 py-24">

<div className="max-w-4xl mx-auto px-6 text-center">

{/* Heading */}

<h2 className="text-3xl md:text-4xl font-bold text-white">

Start Hiring Smarter Today

</h2>

{/* Subtext */}

<p className="mt-4 text-blue-100 text-lg">

Join thousands of companies using RecruitFlow to manage hiring efficiently.

</p>

{/* Buttons */}

<div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
<Link    href="/register/employer" >
<button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-50 transition">

Get Started Free

</button>
</Link>


<button className="flex items-center justify-center gap-2 border border-white text-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition">

View Demo

<ArrowRight size={18} />

</button>

</div>

{/* Small text */}

<p className="mt-6 text-blue-100 text-sm">

No credit card required • Cancel anytime

</p>

</div>

</section>

);
}