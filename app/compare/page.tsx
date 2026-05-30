"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type College = {
  id: string;
  name: string;
  location: string;
  fees: number;
  rating: number;
  placements: string;
  image: string;
};

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [college1, setCollege1] = useState("");
  const [college2, setCollege2] = useState("");
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    fetch("/api/colleges")
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  const selectedCollege1 = colleges.find(
    (college) => college.id === college1
  );

  const selectedCollege2 = colleges.find(
    (college) => college.id === college2
  );

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

      <section className="max-w-7xl mx-auto p-8">

        <div className="text-center mb-12">
          <h1 className="text-6xl font-extrabold text-gray-900">
            Compare Colleges
          </h1>

          <p className="text-xl text-gray-600 mt-4">
            Compare fees, ratings, placements and location side-by-side.
          </p>
        </div>

        <div className="bg-white rounded-[32px] shadow-2xl p-10 border border-gray-100">

          <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
            Select Colleges
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <select
              value={college1}
              onChange={(e) => {
                setCollege1(e.target.value);
                setShowComparison(false);
              }}
              className="w-full border-2 border-gray-300 bg-white text-black p-4 rounded-2xl text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select College 1</option>

              {colleges.map((college) => (
                <option
                  key={college.id}
                  value={college.id}
                >
                  {college.name}
                </option>
              ))}
            </select>

            <select
              value={college2}
              onChange={(e) => {
                setCollege2(e.target.value);
                setShowComparison(false);
              }}
              className="w-full border-2 border-gray-300 bg-white text-black p-4 rounded-2xl text-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select College 2</option>

              {colleges.map((college) => (
                <option
                  key={college.id}
                  value={college.id}
                >
                  {college.name}
                </option>
              ))}
            </select>

          </div>

          <div className="text-center mt-8">

            <button
              onClick={() => setShowComparison(true)}
              disabled={!college1 || !college2}
              className="bg-black text-white px-10 py-4 rounded-2xl text-lg font-bold hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed cursor-pointer"
            >
              Compare Colleges
            </button>

          </div>

        </div>

        {showComparison &&
          selectedCollege1 &&
          selectedCollege2 && (

          <div className="mt-12">

            <div className="text-center mb-10">
              <h2 className="text-5xl font-extrabold text-gray-900">
                Comparison Result
              </h2>

              <p className="text-gray-600 mt-3 text-lg">
                Detailed side-by-side comparison
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-8">

                <img
                  src={selectedCollege1.image}
                  alt={selectedCollege1.name}
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                />

                <img
                  src={selectedCollege2.image}
                  alt={selectedCollege2.name}
                  className="w-full h-64 object-cover rounded-3xl shadow-lg"
                />

              </div>

              <table className="w-full bg-white text-black rounded-3xl shadow-2xl overflow-hidden">

                <thead className="bg-gradient-to-r from-black to-gray-800 text-white">

                  <tr>
                    <th className="p-5 text-left">Feature</th>
                    <th className="p-5 text-left">
                      {selectedCollege1.name}
                    </th>
                    <th className="p-5 text-left">
                      {selectedCollege2.name}
                    </th>
                  </tr>

                </thead>

            <tbody className="text-black text-lg">

  <tr className="border-b">
    <td className="p-5 font-bold text-black">
      Location
    </td>

    <td className="p-5 text-black">
      {selectedCollege1.location}
    </td>

    <td className="p-5 text-black">
      {selectedCollege2.location}
    </td>
  </tr>

  <tr className="border-b bg-gray-50">
    <td className="p-5 font-bold text-black">
      Fees
    </td>

    <td className="p-5 text-green-700 font-bold">
      ₹{selectedCollege1.fees}
    </td>

    <td className="p-5 text-green-700 font-bold">
      ₹{selectedCollege2.fees}
    </td>
  </tr>

  <tr className="border-b">
    <td className="p-5 font-bold text-black">
      Placements
    </td>

    <td className="p-5 text-blue-700 font-bold">
      {selectedCollege1.placements}
    </td>

    <td className="p-5 text-blue-700 font-bold">
      {selectedCollege2.placements}
    </td>
  </tr>

  <tr>
    <td className="p-5 font-bold text-black">
      Rating
    </td>

    <td className="p-5 text-yellow-600 font-bold text-xl">
      ⭐ {selectedCollege1.rating}
    </td>

    <td className="p-5 text-yellow-600 font-bold text-xl">
      ⭐ {selectedCollege2.rating}
    </td>
  </tr>

</tbody>

              </table>

            </div>

          </div>

        )}

      </section>
    </main>
  );
}