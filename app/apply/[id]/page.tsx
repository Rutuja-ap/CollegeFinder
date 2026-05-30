export default async function ApplyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-10">

      {/* Header */}
      <div className="w-full border-b border-gray-200 pb-6 mb-10">
        <h1 className="text-4xl font-bold">College Application Form</h1>
        <p className="text-gray-600 mt-2">
          
        </p>
      </div>

      {/* FORM */}
      <form className="w-full space-y-10">

        {/* BASIC */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Basic Details
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <input className="w-full p-3 border rounded-lg border-gray-300 text-gray-900" placeholder="Full Name" />

            <input className="w-full p-3 border rounded-lg border-gray-300 text-gray-900" placeholder="Email" />

            <input className="w-full p-3 border rounded-lg border-gray-300 text-gray-900" placeholder="Mobile" />

            <input type="date" className="w-full p-3 border rounded-lg border-gray-300 text-gray-900" />

            <select className="w-full p-3 border rounded-lg border-gray-300 text-gray-900">
              <option>Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

          </div>
        </section>

        {/* ADDRESS */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Address Details
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <input className="w-full p-3 border rounded-lg border-gray-300 md:col-span-3" placeholder="Full Address" />
            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="City" />
            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="State" />
            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="Pincode" />

          </div>
        </section>

        {/* ACADEMIC */}
        <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Academic Details
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <select className="w-full p-3 border rounded-lg border-gray-300">
              <option>Qualification</option>
              <option>12th Science</option>
              <option>12th Commerce</option>
              <option>Diploma</option>
            </select>

            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="Board Name" />

            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="Passing Year" />

            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="Percentage / CGPA" />

          </div>
        </section>

        {/* COURSE */}
        {/* <section>
          <h2 className="text-xl font-semibold border-b pb-2 mb-6">
            Course Preference
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <select className="w-full p-3 border rounded-lg border-gray-300">
              <option>Preferred Course</option>
              <option>B.Tech CSE</option>
              <option>B.Tech Mechanical</option>
              <option>BCA</option>
              <option>BSc IT</option>
            </select>

            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="Preferred College" />

            <input className="w-full p-3 border rounded-lg border-gray-300" placeholder="Preferred City" />

          </div>
        </section> */}

        {/* BUTTON */}
        <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition">
          Submit Application
        </button>

      </form>
    </main>
  );
}