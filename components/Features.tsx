import { features } from "@/utils/utils";
import Image from "next/image";
import React from "react";

function Features() {
  return (
    <section className="mt-5">
      <div className="flex flex-col md:flex-row items-center w-full">
        {features.map((item, id) => (
          <div
            key={id}
            className="relative w-full h-[450px] flex items-center justify-center cursor-pointer flex-col group overflow-hidden"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="absolute top-0 z-10 left-0 right-0 bottom-0 w-full h-full object-cover filter brightness-[30%] group-hover:scale-110 duration-50 ease-in-out transition transform"
            />
            <p className="z-20 transform uppercase tracking-wider px-20 text-2xl/10 text-white text-center font-bold">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
