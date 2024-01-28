import Image from "next/image";
import img1 from "@/assets/stock-image 1.jpg";
import img2 from "@/assets/stock-image 2.jpg";
import img3 from "@/assets/stock-image 3.jpg";
import img4 from "@/assets/stock-image 4.jpg";
import { StarIcon as OutlineStarIcon } from "@heroicons/react/24/outline";
import {
  CheckBadgeIcon,
  StarIcon as StarredIcon,
} from "@heroicons/react/24/solid";
import { topMenuContent } from "@/utils/utils";
function TopCharts() {

  return (
    <section className="pt-20 pb-10 px-2">
      <h2 className='capitalize text-center font-semibold text-lg'>Top Picks: Best Selling Pastries</h2>
      <h3 className = 'text-center font-semibold text-2xl px-3 text-[#8B4513] relative after:absolute after mx-auto after:w-40 after:left-1/2 after:-translate-x-1/2 after:bg-[#8B4513] after:h-[3px] after:-bottom-[6px] after:rounded-md' >Savor the top rated pastries, a symphony of irresistible flavors.</h3>
    <div className="mt-5 w-full relative flex md:flex-row flex-col items-center gap-5 md:gap-1 lg:gap-5 xl:gap-9 justify-center mx-auto p-5">
      
        {topMenuContent.map((menu, id) => (
          <div
            key={id}
            className={`${id == 1 && 'lg:scale-105'} flex-shrink-0 bg-neutral-950 z-20 p-1 rounded-md flex flex-col justify-start items-center max-w-[340px] md:max-w-[250px] lg:max-w-[310px] max-h-[500px]`}
          >
            <div className="relative w-full h-60 rounded-sm overflow-hidden">
              <Image
                src={menu.image}
                fill
                className="rounded-sm object-cover"
                alt="Error Loading Image"
              />
            </div>
            <div className="w-full py-2 px-3">
              <p className="mt-2 tracking-wide text-white font-semibold">
                {menu.title}
              </p>
              <p className="text-xs/5 text-gray-200 font-medium mt-1">
                {menu.desc}
              </p>
              <div className="flex items-center space-x-2 mt-1 text-white text-xs">
                <StarredIcon className="w-5 h-5 text-yellow-500" />
                <StarredIcon className="w-5 h-5 text-yellow-500" />
                <StarredIcon className="w-5 h-5 text-yellow-500" />
                <StarredIcon className="w-5 h-5 text-yellow-500" />
                <OutlineStarIcon className="w-5 h-5 text-gray-300" />
              </div>
              <ul className="flex flex-col justify-center p-1">
                {menu.ingredients.map((ingredient, id) => (
                  <li
                    key={id}
                    className="flex items-center space-x-2 py-1 font-medium text-white text-xs whitespace-nowrap"
                  >
                    <CheckBadgeIcon className="w-5 h-5 mr-1" />
                    {ingredient}
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-1 font-medium tracking-wider text-gray-100">
                Over {menu.orders.toLocaleString()}{" "}
                worldwide
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopCharts;
