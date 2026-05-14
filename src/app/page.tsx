import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Handoff } from "@/components/sections/handoff";
import { LeakMap } from "@/components/sections/leak-map";
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
        <Handoff />
        <LeakMap />
        <CalculatorCTA />
        <Services />
        <Notes />
        <About />
        <Contact />
      </main>
    </>
  );
}
