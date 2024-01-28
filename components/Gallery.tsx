import Image from "next/image";
import img2 from "@/assets/stock-image-2.jpg";
import img6 from "@/assets/stock-image-6.jpg";
import { bakery, pastries } from "@/utils/utils";

function Gallery() {
  return (
   <>
    <section className="w-full p-5 lg:px-10 mt-10">
<h2 className='capitalize text-center font-semibold text-lg'>A Visual Feast of Bakery Delights</h2>
<h3 className='text-center font-semibold text-2xl px-3 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text relative after:absolute after mx-auto after:w-40 after:left-1/2 after:-translate-x-1/2 after:bg-pink-500 after:h-[3px] after:-bottom-[6px] after:rounded-md'>Experience the Artistry through Captivating Imagery</h3>
      <div className="flex flex-col-reverse justify-center md:justify-around items-center md:flex-row gap-5 h-full p-8 lg:px-16 mt-5 bg-[#8B4513]/15 rounded-2xl">
        <div className ='flex-grow flex flex-col py-3 max-w-[350px] lg:max-w-[500px] justify-center items-center'>
          {bakery.map(({ Icon, title, desc }) => (
			  <div key={title}  className="w-full px-3 mt-5 flex flex-col justify-center">
				<div className ='p-1 max-w-fit max-h-fit rounded-md border border-black'>
              <Icon className="w-[22px] h-[22px] text-slate-800" />
			  </div>
              <h4 className="mt-1 font-semibold text-base capitalize">
                {title}
              </h4>
              <p className="text-xs line-clamp-3 lg:line-clamp-4 leading-6">
                {desc}
              </p>
            </div>
          ))}
        </div>
        <div className="relative w-full flex-shrink-0 rounded-md overflow-hidden md:w-[300px] lg:w-[400px] h-[400px] md:h-[550px] ">
          <Image
            src={img6}
            alt="Bakery"
            fill
            className="object-cover sm:object-contain rounded-md"
          />
        </div>
		
      </div>
	  </section>
	  <section className="w-full p-5 lg:px-10 mt-10">
	  <h2 className='capitalize text-center font-semibold text-lg'>Indulge in Pastry Perfection</h2>
<h3 className='text-center font-semibold text-2xl px-3 bg-gradient-to-r from-pink-500 to-red-500 text-transparent bg-clip-text relative after:absolute after mx-auto after:w-40 after:left-1/2 after:-translate-x-1/2 after:bg-pink-500 after:h-[3px] after:-bottom-[6px] after:rounded-md'>Discover a Symphony of Irresistible Flavors</h3>
	<div className="flex flex-col-reverse justify-center md:justify-around items-center md:flex-row-reverse gap-5 h-full p-8 lg:px-16 mt-5 bg-pink-100 rounded-2xl">
	  <div className ='flex-grow flex flex-col py-3 max-w-[350px] lg:max-w-[500px] justify-center items-center'>
		{pastries.map(({ Icon, title, desc }) => (
			<div key={title}  className="w-full px-3 mt-5 flex flex-col justify-center">
			  <div className ='text-slate-900 p-1 max-w-fit max-h-fit rounded-md border border-black'>
			<Icon className="w-[22px] h-[22px]" />
			</div>
			<h4 className="mt-1 font-semibold text-base capitalize">
			  {title}
			</h4>
			<p className="text-xs line-clamp-3 lg:line-clamp-4 leading-6">
			  {desc}
			</p>
		  </div>
		))}
	  </div>
	  <div className="relative w-full flex-shrink-0 rounded-md overflow-hidden md:w-[300px] lg:w-[400px] h-[400px] md:h-[550px] ">
		<Image
		  src={img2}
		  alt="Bakery"
		  fill
		  className="object-cover sm:object-contain rounded-md"
		/>
	  </div>
	  
	</div>
  </section>
	  </>
  );
}

export default Gallery;
