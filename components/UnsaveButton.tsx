"use client";
import { useRouter } from "next/navigation";

export default function UnsaveButton({ collegeId }: { collegeId: string }) {
  const router = useRouter();
  const remove = async () => {
    const res = await fetch("/api/save-college", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ collegeId }),
    });
    if (res.ok) router.refresh();
  };
  return (
    <button onClick={remove} className="mt-3 text-red-600 hover:text-red-800 font-semibold">
      Remove
    </button>
  );
}