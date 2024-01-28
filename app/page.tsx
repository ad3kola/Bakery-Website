import Image from "next/image";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import TopCharts from "@/components/TopCharts";
import Stats from "@/components/Stats";
import Newsletter from "@/components/Newsletter";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="mx-auto scrollbar-hide bg-[#8B4513]/15 ">
      {/* <Navbar /> */}
      <Main />
      <TopCharts />
      <Stats />
      <Features />
      <Gallery />
      <Newsletter />
      <Footer />
    </main>
  );
}
