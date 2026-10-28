"use client";

import { Globe } from "@/components/ui/cobe-globe";

export const globalMarkers = [
  { id: "lagos", location: [6.5244, 3.3792] as [number, number], label: "Nigeria (Base)" },
  { id: "london", location: [51.5074, -0.1278] as [number, number], label: "London" },
  { id: "nyc", location: [40.7128, -74.006] as [number, number], label: "New York" },
  { id: "sf", location: [37.7595, -122.4367] as [number, number], label: "San Francisco" },
  { id: "tokyo", location: [35.6762, 139.6503] as [number, number], label: "Tokyo" },
  { id: "dubai", location: [25.2048, 55.2708] as [number, number], label: "Dubai" },
  { id: "paris", location: [48.8566, 2.3522] as [number, number], label: "Paris" },
  { id: "singapore", location: [1.3521, 103.8198] as [number, number], label: "Singapore" },
  { id: "capetown", location: [-33.9249, 18.4241] as [number, number], label: "Cape Town" },
];

export const globalArcs = [
  {
    id: "lagos-london",
    from: [6.5244, 3.3792] as [number, number],
    to: [51.5074, -0.1278] as [number, number],
    label: "Lagos → London",
  },
  {
    id: "lagos-nyc",
    from: [6.5244, 3.3792] as [number, number],
    to: [40.7128, -74.006] as [number, number],
    label: "Lagos → NYC",
  },
  {
    id: "lagos-sf",
    from: [6.5244, 3.3792] as [number, number],
    to: [37.7595, -122.4367] as [number, number],
    label: "Lagos → SF",
  },
  {
    id: "lagos-tokyo",
    from: [6.5244, 3.3792] as [number, number],
    to: [35.6762, 139.6503] as [number, number],
    label: "Lagos → Tokyo",
  },
];

export function GlobeDemo() {
  return (
    <div className="flex items-center justify-center w-full min-h-[420px] bg-[#070709] rounded-2xl p-6 overflow-hidden border border-red-500/30 shadow-2xl shadow-red-950/60">
      <div className="w-full max-w-md aspect-square relative flex items-center justify-center">
        <Globe
          markers={globalMarkers}
          arcs={globalArcs}
          markerColor={[0.95, 0.2, 0.35]}
          baseColor={[0.16, 0.04, 0.08]}
          arcColor={[0.95, 0.25, 0.4]}
          glowColor={[0.8, 0.12, 0.22]}
          dark={1}
          mapBrightness={8}
          markerSize={0.035}
          markerElevation={0.02}
        />
      </div>
    </div>
  );
}

export default GlobeDemo;
