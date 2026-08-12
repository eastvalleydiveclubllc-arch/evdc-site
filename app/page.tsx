import { DiveIntro } from "@/components/dive-intro";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
// Coach section hidden until Laura sends bios/photos — restore the import
// and the <Coach /> render below, plus the "#coach" nav link in nav.tsx.
// import { Coach } from "@/components/coach";
import { Location } from "@/components/location";
import { Path } from "@/components/path";
import { PoolBand } from "@/components/pool-band";
import { Join } from "@/components/join";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <DiveIntro />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Programs />
        <Path />
        <Location />
        <PoolBand />
        <Join />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
