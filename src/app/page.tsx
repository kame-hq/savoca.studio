import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Who } from "@/components/sections/who";
import { Services } from "@/components/sections/services";
import { Notes } from "@/components/sections/notes";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { LenisProvider } from "@/components/motion/lenis-provider";
import { Cursor } from "@/components/motion/cursor";

export default function Home() {
  return (
    <>
      <LenisProvider />
      <Cursor />
      <Nav />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Who />
        <Services />
        <Notes />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
