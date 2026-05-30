"use client";

import { useState } from "react";
import Link from "next/link";

export default function CollegeList({ colleges }: any) {
  const [search, setSearch] = useState("");
  const [minRating, setMinRating] = useState(0);
  const [maxFees, setMaxFees] = useState(1000000);

  const filteredColleges = colleges.filter((college: any) => {
    const matchesSearch =
      college.name.toLowerCase().includes(search.toLowerCase()) ||
      college.location.toLowerCase().includes(search.toLowerCase());

    const matchesRating = college.rating >= minRating;
    const matchesFees = college.fees <= maxFees;

    return matchesSearch && matchesRating && matchesFees;
  });

  return (
    <>
      <div className="mb-10 space-y-4">
        <input
          type="text"
          placeholder="Search colleges by name or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-2xl border border-gray-300 shadow-md text-black"
        />

        <div className="grid md:grid-cols-2 gap-4">
          <select
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="p-4 rounded-2xl border border-gray-300 text-black"
          >
            <option value={0}>All Ratings</option>
            <option value={4}>4+ Rating</option>
            <option value={4.5}>4.5+ Rating</option>
          </select>

          <input
            type="number"
            placeholder="Maximum Fees"
            value={maxFees}
            onChange={(e) => setMaxFees(Number(e.target.value))}
            className="p-4 rounded-2xl border border-gray-300 text-black"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredColleges.map((college: any) => (
          <div
            key={college.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition"
          >
            <img
              src={college.image}
              alt={college.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold text-black">
                {college.name}
              </h2>

              <p className="text-gray-600 mt-2">
                📍 {college.location}
              </p>

              <p className="mt-2 text-gray-700">
                💰 ₹{college.fees}
              </p>

              <p className="mt-2 text-yellow-600">
                ⭐ {college.rating}
              </p>

              <Link href={`/college/${college.id}`}>
                <button className="mt-5 w-full bg-black text-white py-3 rounded-2xl">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}