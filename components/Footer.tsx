import { footer } from "@/utils/utils";
import React from "react";

function Footer() {
  return (
    <section className="bg-gray-900 mt-3 text-white">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-end justify-center md:justify-between w-full pt-10 pb-5 px-2 md:px-5">
        <p className="relative max-w-xs after:absolute after:-top-[6px] after:left-0 after:right-0 after:h-[1.5px] after:bg-gray-400 after:rounded-md after:min-w-fit flex-grow text-gray-400 text-sm tracking-widest font-semibold text-center mt-3 md:mt-0 lg:ml-5">
          © 2024 | Adekola's Pasteries
        </p>
        <div className="px-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {footer.map((item, id) => (
            <div
              key={id}
              className="whitespace-nowrap flex flex-col items-center p-2"
            >
              <p className="text-gray-400 font-semibold text-sm uppercase tracking-wide">
                {item.head}
              </p>
              <ul className="flex flex-col p-1 space-y-2 items-center mt-2">
                {item.list.map((list, id) => (
                  <li
                    key={id}
                    className="text-xs hover:underline hover:text-white duration-100 transition cursor-pointer text-gray-400 capitalize font-medium"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Footer;
