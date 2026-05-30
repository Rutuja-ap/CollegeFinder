"use client";

import { useState } from "react";
import Link from "next/link";

export default function PredictorPage() {
  const [rank, setRank] = useState("");
  const [exam, setExam] = useState("JEE Main");
  const [results, setResults] = useState<string[]>([]);

  const predictCollege = () => {
    const r = Number(rank);

    if (!r || r <= 0) {
      setResults(["Please enter a valid rank"]);
      return;
    }

    if (exam === "JEE Advanced") {
      if (r <= 500) {
        setResults([
          "IIT Bombay",
          "IIT Delhi",
          "IIIT Hyderabad",
        ]);
      } else if (r <= 1500) {
        setResults([
          "IIT Delhi",
          "IIT Bombay",
          "BITS Pilani",
        ]);
      } else if (r <= 3000) {
        setResults([
          "BITS Pilani",
          "IIIT Hyderabad",
          "NIT Trichy",
        ]);
      } else {
        setResults([
          "NIT Trichy",
          "SRM University",
          "MIT Pune",
        ]);
      }
    }

    else if (exam === "JEE Main") {
      if (r <= 1000) {
        setResults([
          "NIT Trichy",
          "IIIT Hyderabad",
          "BITS Pilani",
        ]);
      } else if (r <= 5000) {
        setResults([
          "BITS Pilani",
          "IIIT Hyderabad",
          "NIT Trichy",
        ]);
      } else if (r <= 15000) {
        setResults([
          "MIT Pune",
          "SRM University",
          "VJTI",
        ]);
      } else {
        setResults([
          "MIT Pune",
          "SRM University",
          "COEP",
        ]);
      }
    }

    else {
      if (r <= 500) {
        setResults([
          "COEP",
          "VJTI",
          "BITS Pilani",
        ]);
      } else if (r <= 1500) {
        setResults([
          "VJTI",
          "COEP",
          "MIT Pune",
        ]);
      } else if (r <= 5000) {
        setResults([
          "MIT Pune",
          "SRM University",
          "COEP",
        ]);
      } else {
        setResults([
          "SRM University",
          "MIT Pune",
          "VJTI",
        ]);
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200">
      <nav className="bg-black text-white px-8 py-5 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold">
          CollegeFinder
        </h1>

        <Link href="/">
          <button className="border border-white px-5 py-2 rounded-xl hover:bg-white hover:text-black transition cursor-pointer">
            ← Back
          </button>
        </Link>
      </nav>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900">
            College Predictor
          </h1>

          <p className="text-xl text-gray-600 mt-4">
            Find colleges based on your entrance exam rank.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Select Exam
              </label>

              <select
                value={exam}
                onChange={(e) => setExam(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-black"
              >
                <option>JEE Main</option>
                <option>JEE Advanced</option>
                <option>MHT CET</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                Enter Rank
              </label>

              <input
                type="number"
                placeholder="Example: 2500"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-2xl p-4 text-gray-800 focus:outline-none focus:border-black"
              />
            </div>
          </div>

          <button
            onClick={predictCollege}
            className="mt-8 w-full bg-black text-white py-4 rounded-2xl text-lg font-bold hover:bg-gray-800 transition cursor-pointer"
          >
            Predict College
          </button>

          {results.length > 0 && (
            <div className="mt-10 bg-gradient-to-r from-blue-50 to-green-50 border border-gray-200 rounded-3xl p-8">
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                Top Recommendations
              </p>

              <div className="mt-5 space-y-4">
                {results.map((college, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-2xl shadow-md"
                  >
                    <h2 className="text-2xl font-bold text-gray-900">
                      #{index + 1} {college}
                    </h2>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 mt-5">
                Based on your rank and selected examination.
              </p>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="font-bold text-2xl text-gray-900">
              JEE Main
            </h3>

            <p className="text-gray-600 mt-3">
              Predict NITs and top engineering colleges.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="font-bold text-2xl text-gray-900">
              JEE Advanced
            </h3>

            <p className="text-gray-600 mt-3">
              Explore IIT recommendations based on rank.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h3 className="font-bold text-2xl text-gray-900">
              MHT CET
            </h3>

            <p className="text-gray-600 mt-3">
              Discover top colleges in Maharashtra.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}