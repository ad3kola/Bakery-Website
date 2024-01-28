import Image from "next/image";
import {
  EnvelopeIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

function Newsletter() {
  return (
    
    <section className="my-10 px-5 sm:px-8 lg:px-12">
        <div className="relative isolate rounded-xl overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto w-full px-5 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:max-w-none">
          <div className="w-full">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim
              nostrud adipisicing velit quis. Duis tempor
              incididunt dolore.
            </p>
            <div className="mt-6 w-full flex items-center sm:max-w-lg gap-x-2">
                <form className ='w-full flex-1 rounded-md border-0 bg-white/5 px-2 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 flex items-center space-x-1'>
                  
              <EnvelopeIcon className ='flex-shrink-0 h-6 w-6 text-white' />
              <input
                type="email"
                autoComplete="email"
                required
                className="w-full flex-grow bg-transparent border-none outline-none px-2 text-white  md:text-sm sm:leading-6 text-xs"
                placeholder="Enter your email"
              />
                </form>
              <button
                type="submit"
                className="flex-shrink-0 flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}

export default Newsletter;
