import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Who } from "@/components/sections/who";
import { CalculatorCTA } from "@/components/sections/calculator-cta";
import { Services } from "@/components/sections/services";
import { Notes } from "@/components/sections/notes";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Who />
        <CalculatorCTA />
        <Services />
        <Notes />
        <About />
        <Contact />
      </main>
    </>
  );
}
