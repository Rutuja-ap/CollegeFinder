"use client";

export default function SaveButton({
  collegeId,
}: {
  collegeId: string;
}) {

  const saveCollege = async () => {

    const res = await fetch(
      "/api/save-college",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          collegeId,
        }),
      }
    );

    if (res.ok) {
      alert("College Saved");
    } else {
      alert("Login First");
    }
  };

  return (
    <button
      onClick={saveCollege}
      className="bg-emerald-600 text-white px-8 py-4 rounded-2xl hover:bg-emerald-700 transition font-semibold shadow-lg cursor-pointer"
    >
      Save College
    </button>
  );
}