import Image from "next/image";
import bgImage from "@/assets/stock-image-4-cookies.jpg";
import Navbar from "./Navbar";

function Main() {
  return (
    <div className="relative w-full h-[650px] sm:h-[600px] overflow-hidden flex flex-col">
      <Navbar />
      <div className="top-0 left-0 right-0 bottom-0 w-full h-full absolute">
        <div className="relative w-full h-full overflow-hidden rounded-b-md">
          <Image
            fill
            src={bgImage}
            alt="bg-image"
            className="w-full h-full object-cover brightness-[50%]"
          />
        </div>
      </div>
      <div className="absolute top-24 sm:top-1/2 p-2 min-w-[350px] w-[400px] sm:w-[550px] sm:-translate-y-1/2 left-1/2 -translate-x-1/2 sm:left-16 sm:-translate-x-0">
        <h1 className="text-4xl/[50px] pr-5 capitalize sm:text-5xl/[4.0rem] font-semibold text-white">
          Elevate Your tastebuds with Fried Delicacies{" "}
        </h1>
        <p className="mt-1 text-xs leading-6 text-gray-200 font-medium">
          Welcome to a world where crispy perfection meets
          indulgent flavors. At Sweet Indulgence Pastries,
          we take the art of frying pastries to new heights.
          Each bite is symphony of textures and tastes, from
          the golden crispiness that envelops your senses to
          the delectable fillings that promise a journey of
          delight. Join us in savoring moments of pure
          bliss, where every fried pastry is a celebration
          of culinary mastery and sheer indulgence.
        </p>
        <div className="flex items-center space-x-3 mt-2">
          <button className="rounded-full text-sm px-3 py-2 sm:px-4 sm:py-3 font-semibold tracking-wide capitalize bg-white text-slate-900 duration-200 cursor-pointer transform transition hover:scale-105">
            Order Now
          </button>
          <button className="rounded-full border border-white text-white text-sm px-3 py-2 sm:px-4 sm:py-3 font-semibold tracking-wide capitalize hover:bg-white hover:text-slate-900 duration-200 cursor-pointer transform transition hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
