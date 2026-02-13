import dynamic from "next/dynamic";
import Hero from "@/components/hero/Hero";
import Header from "@/components/header/Header";
import Footer from "@/components/foooter/Footer";

const About = dynamic(() => import("@/components/about/About"));
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
const CTASection = dynamic(() => import("@/components/cta/CTASection"));
const StatsSection = dynamic(() => import("@/components/stats/StatsSection"));
const ConsoleLog = dynamic(() => import("@/components/consoleLog/ConsoleLog"));
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StatsSection />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <Projects />
      <CTASection />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ConsoleLog />
    </>
  );
}
