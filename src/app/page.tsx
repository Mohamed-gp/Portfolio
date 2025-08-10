import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Skills from "@/components/skills/Skills";
import Projects from "@/components/projects/Projects";
import Testimonials from "@/components/testimonials/Testimonials";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/foooter/Footer";
import Header from "@/components/header/Header";
import ScrollToTop from "@/components/scroll-to-top/ScrollToTop";
import Contact from "@/components/contact/Contact";
import CTASection from "@/components/cta/CTASection";
import StatsSection from "@/components/stats/StatsSection";
import ConsoleLog from "@/components/consoleLog/ConsoleLog";
export default function Home() {
  return (
    <main className="min-h-screen">
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
    </main>
  );
}
