"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {

const [openIndex, setOpenIndex] = useState(null);

const faqs = [
{
question: "What is RecruitFlow?",
answer:
"RecruitFlow is an Applicant Tracking System (ATS) that helps companies manage hiring from job posting to final selection."
},

{
question: "Can candidates apply to multiple companies?",
answer:
"Yes, candidates can apply to multiple companies, but each application is tracked separately per company."
},

{
question: "Do I need technical knowledge to use it?",
answer:
"No, RecruitFlow is designed for HR teams and recruiters with a simple and user-friendly interface."
},

{
question: "Is my data secure?",
answer:
"Yes, all data is securely stored with authentication, encryption, and role-based access control."
},

{
question: "Can I upgrade my plan later?",
answer:
"Yes, you can upgrade or downgrade your plan anytime from the billing section."
}
];

const toggle = (index) => {
setOpenIndex(openIndex === index ? null : index);
};

return (

<section className="bg-slate-50 py-24">

<div className="max-w-4xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-14">

<h2 className="text-3xl md:text-4xl font-bold text-slate-900">

Frequently Asked Questions

</h2>

<p className="mt-4 text-slate-600">

Everything you need to know about RecruitFlow

</p>

</div>

{/* FAQ Items */}

<div className="space-y-4">

{faqs.map((faq, index) => (

<div

key={index}

className="bg-white border border-slate-200 rounded-2xl overflow-hidden"

>

{/* Question */}

<button

onClick={() => toggle(index)}

className="w-full flex justify-between items-center p-5 text-left"

>

<span className="font-medium text-slate-900">

{faq.question}

</span>

<ChevronDown

className={`transition-transform duration-300 ${
openIndex === index ? "rotate-180" : ""
}`}

/>

</button>

{/* Answer */}

{openIndex === index && (

<div className="px-5 pb-5  text-sm text-slate-600  leading-relaxed">

{faq.answer}

</div>

)}

</div>

))}

</div>

</div>

</section>

);

}