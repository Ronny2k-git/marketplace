"use client";

import { useRouter } from "next/navigation";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-12">
      {/* Back Button */}
      <button
        onClick={() => router.push("/")}
        className="text-sm text-blue-500 hover:underline self-start"
      >
        ← Back to dashboard
      </button>

      {/* Title and Subtitle*/}
      <div className="flex flex-col">
        <p className="text-3xl font-bold text-white">{title}</p>

        <span className="text-gray-500 mt-2">{subtitle}</span>
      </div>
    </div>
  );
}
