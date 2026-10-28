"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BoxesCoreProps {
  className?: string;
  colors?: string[];
  rowsCount?: number;
  colsCount?: number;
}

export const BoxesCore = ({
  className,
  colors: customColors,
  rowsCount = 100,
  colsCount = 60,
  ...rest
}: BoxesCoreProps & React.HTMLAttributes<HTMLDivElement>) => {
  const rows = new Array(rowsCount).fill(1);
  const cols = new Array(colsCount).fill(1);

  // Cinematic Hero page tailored color palette (Crimson, Ruby, Copper, Ember, Rose, Scarlet)
  const defaultColors = [
    "rgb(239 68 68)",   // red-500
    "rgb(220 38 38)",   // red-600
    "rgb(185 28 28)",   // red-700
    "rgb(248 113 113)", // red-400
    "rgb(244 63 94)",   // rose-500
    "rgb(225 29 72)",   // rose-600
    "rgb(251 146 60)",  // orange-400 (copper satin)
    "rgb(249 115 22)",  // orange-500 (ember)
    "rgb(254 205 211)", // rose-200
  ];

  const colors = customColors && customColors.length > 0 ? customColors : defaultColors;

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div
      style={{
        transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
      }}
      className={cn(
        "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-auto",
        className
      )}
      {...rest}
    >
      {rows.map((_, i) => (
        <motion.div
          key={`row` + i}
          className="w-16 h-8 border-l border-neutral-800/80 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: getRandomColor(),
                transition: { duration: 0 },
              }}
              animate={{
                transition: { duration: 2 },
              }}
              key={`col` + j}
              className="w-16 h-8 border-r border-t border-neutral-800/80 relative transition-colors"
            >
              {j % 2 === 0 && i % 2 === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="absolute h-6 w-10 -top-[14px] -left-[22px] text-neutral-800 stroke-[1px] pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v12m6-6H6"
                  />
                </svg>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);
