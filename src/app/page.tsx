import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import Footer from "@/components/foooter/Footer";

const Skills = dynamic(() => import("@/components/skills/Skills"));
const Projects = dynamic(() => import("@/components/projects/Projects"));
const Testimonials = dynamic(
  () => import("@/components/testimonials/Testimonials"),
);
const Experience = dynamic(() => import("@/components/experience/Experience"));
const ScrollToTop = dynamic(
  () => import("@/components/scroll-to-top/ScrollToTop"),
);
const Contact = dynamic(() => import("@/components/contact/Contact"));
const ConsoleLog = dynamic(() => import("@/components/consoleLog/ConsoleLog"));

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ConsoleLog />
    </>
  );
}
