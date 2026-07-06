

export default function Footer() {

return (

<footer className="bg-white border-t border-slate-200">

{/* Main Footer */}

<div className="max-w-7xl mx-auto px-6 py-16">

<div className="grid md:grid-cols-4 gap-10">

{/* Column 1 - Brand */}

<div>

<h2 className="text-xl font-bold text-slate-900">

RecruitFlow

</h2>

<p className="mt-3 text-sm text-slate-600 leading-relaxed">

Modern Applicant Tracking System for fast and efficient hiring.

</p>

</div>

{/* Column 2 - Product */}

<div>

<h3 className="font-semibold text-slate-900 mb-4">Product</h3>

<ul className="space-y-2 text-sm text-slate-600">

<li>Features</li>

<li>Pricing</li>

<li>Integrations</li>

<li>Updates</li>

</ul>

</div>

{/* Column 3 - Resources */}

<div>

<h3 className="font-semibold text-slate-900 mb-4">Resources</h3>

<ul className="space-y-2 text-sm text-slate-600">

<li>Blog</li>

<li>Docs</li>

<li>Guides</li>

<li>Support</li>

</ul>

</div>

{/* Column 4 - Contact */}

<div>

<h3 className="font-semibold text-slate-900 mb-4">Contact</h3>

<div className="flex flex-col gap-2 text-sm text-slate-600">

  <a href="#" className="hover:text-slate-900 transition">
    GitHub
  </a>

  <a href="#" className="hover:text-slate-900 transition">
    LinkedIn
  </a>

  <a href="#" className="hover:text-slate-900 transition">
    Twitter
  </a>

  <a href="#" className="hover:text-slate-900 transition">
    Contact Us
  </a>

</div>

</div>

</div>

</div>

{/* Bottom Line */}

<div className="border-t border-slate-200">

<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">

<p className="text-sm text-slate-500">

© 2026 RecruitFlow. All rights reserved.

</p>

<div className="flex gap-6 mt-3 md:mt-0 text-sm text-slate-500">

<span>Privacy Policy</span>

<span>Terms of Service</span>

<span>Security</span>

</div>

</div>

</div>

</footer>

);
}