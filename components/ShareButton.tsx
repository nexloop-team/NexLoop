"use client";

import { Share2 } from "lucide-react";

type ShareButtonProps = {
  title: string;
  className?: string;
};

export default function ShareButton({ title, className }: ShareButtonProps) {
  const onShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title, url });
      return;
    }
    await navigator.clipboard.writeText(url);
  };

  return (
    <button
      type="button"
      className={`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 btn-ghost ${
        className ?? ""
      }`}
      onClick={onShare}
    >
      <Share2 size={14} /> Share
    </button>
  );
}
