"use client";
import { useEffect, useState } from "react";

function Stats() {
  const [orderCount, setOrderCount] =
    useState<number>(3858848);
  useEffect(() => {
    setTimeout(() => {
      setOrderCount((val) => val + 1);
    }, 1500);
  }, [orderCount]);
  return (
    <section className="w-full py-5">
      <div className="flex flex-1 flex-col items-center justify-center">
        <p className="flex flex-1 text-center text-[50px] font-mono tracking-[0.2em]  md:tracking-[0.5em] font-semibold text-[#8B4513]">
          {orderCount.toLocaleString()}
        </p>
        <p className="mt-[2px] text-[16px] sm:text-lg font-semibold tracking-wider text-slate-900">
          Number of Orders Made & Deilvered today
        </p>
      </div>
    </section>
  );
}

export default Stats;
