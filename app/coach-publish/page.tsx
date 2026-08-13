import type { Metadata } from "next";
import { PublishButton } from "@/components/publish-button";
import { publishPage } from "@/lib/content";

// Unlinked coach-only utility page — keep it out of search results.
export const metadata: Metadata = {
  title: "Publish reviews",
  robots: { index: false, follow: false },
};

export default function CoachPublish() {
  return (
    <main className="min-h-dvh bg-ink flex items-center justify-center px-6">
      <div className="max-w-xl text-center py-28">
        <p className="eyebrow">{publishPage.eyebrow}</p>
        <h1 className="font-display mt-6 text-bone text-4xl sm:text-5xl leading-[1.05] font-medium">
          {publishPage.heading}
        </h1>
        <p className="mt-6 text-stone-400 text-lg leading-relaxed">
          {publishPage.sub}
        </p>
        <PublishButton />
      </div>
    </main>
  );
}
