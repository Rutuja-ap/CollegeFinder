"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      alert("Login successful");
      router.push("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-white to-blue-100 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10">

        <div className="text-center mb-8">

          <h1 className="text-5xl font-extrabold text-gray-900">
            Welcome Back
          </h1>

          <p className="text-gray-600 mt-3 text-lg">
            Login to continue exploring colleges.
          </p>

        </div>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-blue-200 text-gray-800"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-4 focus:ring-purple-200 text-gray-800"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-black to-gray-800 text-white py-4 rounded-2xl hover:scale-[1.02] transition duration-300 font-bold text-lg shadow-lg"
          >
            Login
          </button>
        <div className="mt-8 text-center text-gray-600">
            Don&apos;t have an account?
            
            <Link href="/signup">
                <span className="text-blue-600 font-semibold cursor-pointer ml-2 hover:underline">
                Sign Up
                </span>
            </Link>
        </div>

        </div>

      </div>

    </main>
  );
}