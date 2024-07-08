"use client";

import Approach from "@/components/Approach";
import Expirience from "@/components/Expirience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FlottingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col  mx-auto p-0 overflow-clip">
      <div className=" w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <RecentProjects/>
        <Expirience/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
