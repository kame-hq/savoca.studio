import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Who } from "@/components/sections/who";
import { Services } from "@/components/sections/services";
import { Break } from "@/components/sections/break";
import { Notes } from "@/components/sections/notes";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { VerticalRail } from "@/components/brand/v3";

export default function Home() {
  return (
    <>
      <VerticalRail />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Who />
        <Services />
        <Break />
        <Notes />
        <About />
        <Contact />
      </main>
    </>
  );
}
