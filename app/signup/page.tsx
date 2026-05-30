"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function SignupPage() {

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {

    const res = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    if (res.ok) {
      alert("Signup successful");
      router.push("/");
    } else {
      alert("Signup failed");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 border border-white">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-extrabold text-gray-900">
            Join Us
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Discover and compare top colleges.
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-200 text-gray-800"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-200 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-pink-200 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleSignup}
            className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-2xl hover:scale-[1.02] transition duration-300 font-bold text-lg shadow-lg"
          >
            Create Account
          </button>

        </div>

        <div className="mt-8 text-center text-gray-600">
        Already have an account?

        <Link href="/login">
            <span className="text-blue-600 font-semibold cursor-pointer ml-2 hover:underline">
            Login
            </span>
        </Link>
        </div>

      </div>

    </main>
  );
}