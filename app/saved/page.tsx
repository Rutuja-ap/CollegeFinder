import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UnsaveButton from "@/components/UnsaveButton";

export default async function SavedPage() {

  const session = await getServerSession(
    authOptions
  );

  if (!session?.user?.email) {
    return (
      <div className="min-h-screen flex justify-center items-center text-3xl font-bold">
        Login First
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  const saved = await prisma.savedCollege.findMany({
    where: {
      userId: user?.id,
    },

    include: {
      college: true,
    },
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 p-10">
<h1 className="text-5xl font-extrabold text-gray-900 mb-10">
  Your Saved Colleges
</h1>

      <div className="grid md:grid-cols-3 gap-8">

        {saved.map((item) => (

          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <img
              src={item.college.image}
              alt={item.college.name}
              className="w-full h-56 object-cover"
            />

            <div className="p-6">


            <h2 className="text-3xl font-bold text-gray-900">
            {item.college.name}
            </h2>

            <p className="mt-2 text-gray-700">
            📍 {item.college.location}
            </p>

            <p className="mt-2 text-yellow-600 font-semibold">
            ⭐ {item.college.rating}
            </p>

            <p className="mt-2 text-green-700 font-bold">
            ₹ {item.college.fees}
            </p>
            <UnsaveButton collegeId={item.college.id} />  
            </div>
            

          </div>

        ))}

      </div>

    </main>
  );
}