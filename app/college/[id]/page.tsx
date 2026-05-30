import { prisma } from "@/lib/prisma";
import Link from "next/link";
import SaveButton from "@/components/SaveButton";

export default async function CollegeDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
    include: {
      courses: true,
      reviews: true,
    },
  });

  if (!college) {
    return (
      <div className="p-10 text-2xl">
        College not found
      </div>
    );
  }

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

      <section className="max-w-6xl mx-auto p-8">

        {/* Hero Section */}

        <div className="relative">
          <img
            src={college.image}
            alt={college.name}
            className="w-full h-[420px] object-cover rounded-3xl shadow-2xl"
          />

          <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

          <div className="absolute bottom-10 left-10">
            <h1 className="text-6xl font-extrabold text-white">
              {college.name}
            </h1>

            <p className="text-2xl mt-3 text-white">
              📍 {college.location}
            </p>
          </div>

          <div className="absolute top-8 right-8 bg-yellow-300 text-black px-5 py-3 rounded-2xl font-bold text-xl shadow-lg">
            ⭐ {college.rating}
          </div>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-green-500">
            <h2 className="text-lg font-semibold text-gray-500">
              Annual Fees
            </h2>

            <p className="text-4xl font-extrabold mt-3 text-gray-900">
              ₹{college.fees}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-blue-500">
            <h2 className="text-lg font-semibold text-gray-500">
              Placements
            </h2>

            <p className="text-2xl font-bold mt-3 text-gray-900">
              {college.placements}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6 border-l-8 border-yellow-500">
            <h2 className="text-lg font-semibold text-gray-500">
              Rating
            </h2>

            <p className="text-4xl font-extrabold mt-3 text-yellow-600">
              ⭐ {college.rating}
            </p>
          </div>

        </div>

        {/* Main Content */}

        <div className="bg-white rounded-3xl shadow-xl p-10 mt-10">

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Overview
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            {college.overview}
          </p>

          {/* Courses */}

          <div className="mt-12">

            <h2 className="text-4xl font-bold text-blue-700 mb-8">
              Courses Offered
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {college.courses.length > 0 ? (
                college.courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-blue-50 p-6 rounded-2xl border border-blue-100"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">
                      {course.name}
                    </h3>

                    <p className="text-gray-600 mt-2">
                      Duration: {course.duration}
                    </p>
                  </div>
                ))
              ) : (
                <div className="bg-gray-100 p-6 rounded-2xl text-gray-700">
                  No courses available
                </div>
              )}

            </div>
          </div>

          {/* Reviews */}

          <div className="mt-12">

            <h2 className="text-4xl font-bold text-purple-700 mb-8">
              Student Reviews
            </h2>

            <div className="space-y-5">

              {college.reviews.length > 0 ? (
                college.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-gray-50 border-l-4 border-yellow-500 p-6 rounded-2xl"
                  >
                    <div className="flex justify-between">
                      <h3 className="font-bold text-xl text-gray-900">
                        {review.username}
                      </h3>

                      <span className="text-yellow-600 font-bold">
                        ⭐ {review.rating}
                      </span>
                    </div>

                    <p className="mt-3 text-gray-700">
                      {review.comment}
                    </p>
                  </div>
                ))
              ) : (
                <div className="bg-gray-100 p-6 rounded-2xl text-gray-700">
                  No reviews available
                </div>
              )}

            </div>
          </div>

          {/* Buttons */}

          <div className="mt-12 flex gap-5 flex-wrap">

            <SaveButton collegeId={college.id} />

            <Link href="/compare">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-2xl hover:bg-orange-600 transition font-semibold shadow-lg">
                Compare College
              </button>
            </Link>

            <Link href={`/apply/${college.id}`}>
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-700 transition font-semibold shadow-lg">
                Apply Now
              </button>
            </Link>

          </div>

        </div>

      </section>
    </main>
  );
}