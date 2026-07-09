import { prisma } from "@/lib/prisma";
import Link from "next/link";
import CollegeList from "@/components/CollegeList";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import LogoutButton from "@/components/LogoutButton";
export default async function HomePage() {
    const colleges = await prisma.college.findMany();
const session = await getServerSession(authOptions);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      
      <nav className="bg-black text-white px-8 py-5 flex justify-between items-center shadow-lg">
        <h1 className="text-3xl font-bold">
          CollegeFinder
        </h1>

        <div className="flex items-center gap-6 text-lg">

  <Link href="/">
    <button className="cursor-pointer">Home</button>
  </Link>

  <Link href="/compare">
    <button className="cursor-pointer">Compare</button>
  </Link>

  <Link href="/predictor">
    <button className="cursor-pointer">Predictor</button>
  </Link>

  <Link href="/saved">
    <button className="cursor-pointer">Saved</button>
  </Link>

<Link href="/qa">
  <button className="cursor-pointer">Q&A</button>
</Link>

{session ? (
  <div className="flex items-center gap-4">
    <span className="text-lg font-medium whitespace-nowrap">
      Hi, {session.user?.name}
    </span>

    <LogoutButton />
  </div>
) : (
  <Link href="/login">
    <button className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
      Login
    </button>
  </Link>
)}

</div>
      </nav>

      <section className="px-8 py-10">
        <h2 className="text-5xl font-bold text-gray-900 mb-3">
          Discover Top Colleges
        </h2>

        <p className="text-gray-600 text-lg mb-10">
          Search, compare and explore colleges across India.
        </p>

        <CollegeList colleges={colleges} />
      </section>
    </main>
  );
}