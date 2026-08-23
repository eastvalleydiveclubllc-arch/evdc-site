import { DiveIntro } from "@/components/dive-intro";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { Coach } from "@/components/coach";
import { Location } from "@/components/location";
import { Path } from "@/components/path";
import { PoolBand } from "@/components/pool-band";
import { Reviews } from "@/components/reviews";
import { Join } from "@/components/join";
import { Gallery } from "@/components/gallery";
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
        <Coach />
        <Path />
        <Location />
        <PoolBand />
        <Reviews />
        <Join />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
