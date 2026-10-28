"use client";
import { Boxes } from "@/components/ui/background-boxes";
import { cn } from "@/lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 relative w-full overflow-hidden bg-[#070709] border border-red-500/30 flex flex-col items-center justify-center rounded-2xl shadow-2xl shadow-red-950/50">
      <div className="absolute inset-0 w-full h-full bg-[#070709] z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white font-serif relative z-20")}>
        Interactive AI Architecture
      </h1>
      <p className="text-center mt-2 text-neutral-300 text-sm relative z-20 max-w-md px-4">
        Hover over the dynamic neural grid below to trace predictive weights in real-time.
      </p>
    </div>
  );
}
