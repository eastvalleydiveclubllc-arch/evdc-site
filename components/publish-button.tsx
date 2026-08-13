"use client";

import { useState } from "react";
import { publishPage } from "@/lib/content";

// Build hooks are POST-only and don't send CORS headers, so the response is
// opaque (`mode: "no-cors"`). The request still fires server-side; fetch only
// rejects on a network-level failure, which is the one case we surface.
const HOOK_URL = process.env.NEXT_PUBLIC_PUBLISH_HOOK_URL;

export function PublishButton() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");

  if (!HOOK_URL) {
    return <p className="mt-8 text-lg text-stone-300">{publishPage.notConfigured}</p>;
  }

  async function publish() {
    const url = `${HOOK_URL}?trigger_title=${encodeURIComponent(
      "Reviews published by Coach",
    )}`;
    try {
      await fetch(url, { method: "POST", mode: "no-cors" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="mt-8 text-lg text-bone rise-in" role="status">
        {publishPage.publishing}
      </p>
    );
  }

  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={publish}
        className="inline-flex items-center gap-2 rounded-full bg-crimson hover:bg-crimson-deep text-bone px-10 py-5 text-lg font-medium tracking-wide transition-colors"
      >
        {publishPage.button}
        <span aria-hidden>→</span>
      </button>
      {status === "error" && (
        <p className="mt-6 text-stone-300" role="alert">
          {publishPage.error}
        </p>
      )}
    </div>
  );
}
