"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginEmployer() {

  // -------------------------
  const router = useRouter()
  // STATE
  // -------------------------
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // -------------------------
  // HANDLE CHANGE
  // -------------------------
  const handleChange = (e) => {

    setErrors({})
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // -------------------------
  // VALIDATION
  // -------------------------
  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // -------------------------
  // SUBMIT
  // -------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid = validateForm();
    if (!valid) return;

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/employer/login",
        formData
      );

      if (response.status === 200 || response.status === 201) {
        toast.success(response.data.message);

        localStorage.setItem("token", response.data.token);

        setFormData({
          email: "",
          password: ""
        });

        setErrors({});

        router.push("/employer/profile")
        
 // redirect later  // router.push("/dashboard");
      }

    } catch (error) {
console.log(error)
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );

    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-slate-50">

      {/* NAVBAR (same style as register) */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-slate-900">
            RecruitFlow
          </h1>

          <div className="hidden md:flex items-center gap-8">
            <a href="/pricing" className="text-slate-600 hover:text-black">
              Pricing
            </a>

            <a href="/resources" className="text-slate-600 hover:text-black">
              Resources
            </a>

            <a href="/contact" className="text-slate-600 hover:text-black">
              Contact
            </a>

            <a href="/register/employer" className="text-blue-600 font-medium">
              Register
            </a>
          </div>

        </div>
      </nav>

      {/* LOGIN CARD */}
      <div className="flex justify-center items-center py-20 px-4">

        <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-sm p-8">

          {/* HEADER */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Employer Login
            </h2>

            <p className="text-slate-600 mt-2">
              Welcome back! Manage your hiring pipeline.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* EMAIL */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

           

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-slate-800 transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

          {/* FOOTER */}
          <p className="text-center text-slate-600 mt-6">
            Don’t have an account?{" "}
            <a
              href="/register/employer"
              className="text-blue-600 hover:underline"
            >
              Register
            </a>
          </p>

        </div>
      </div>

    </div>
  );
}