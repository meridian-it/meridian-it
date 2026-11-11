import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Problems } from "@/components/site/problems";
import { Stats } from "@/components/site/stats";
import { Cases } from "@/components/site/cases";
import { Process } from "@/components/site/process";
import { Faq } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Problems />
        <Stats />
        <Cases />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
