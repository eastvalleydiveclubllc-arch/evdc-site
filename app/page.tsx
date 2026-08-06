import { DiveIntro } from "@/components/dive-intro";
import { ScrollProgress } from "@/components/scroll-progress";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programs } from "@/components/programs";
import { Coach } from "@/components/coach";
import { Location } from "@/components/location";
import { Path } from "@/components/path";
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
        <Coach />
        <Path />
        <Location />
        <Join />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
