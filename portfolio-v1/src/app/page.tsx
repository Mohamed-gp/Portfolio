import dynamic from "next/dynamic";
import { getDzStoreStats } from "@/lib/dzstore-stats";
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
const StatsSection = dynamic(() => import("@/components/stats/StatsSection"));
const ConsoleLog = dynamic(() => import("@/components/consoleLog/ConsoleLog"));
export default async function Home() {
  const dz = await getDzStoreStats();
  const {
    gmvDzd,
    orders,
    proMerchants,
    products,
    sinceLaunchLabel,
    stores,
    users,
  } = dz;
  return (
    <>
      <Header />
      <Hero proMerchants={proMerchants} sinceLaunchLabel={sinceLaunchLabel} />
      <About
        proMerchants={proMerchants}
        sinceLaunchLabel={sinceLaunchLabel}
        stores={stores}
      />
      <Experience
        proMerchants={proMerchants}
        sinceLaunchLabel={sinceLaunchLabel}
        stores={stores}
        users={users}
        gmvDzd={gmvDzd}
      />
      <Projects
        dz={{
          gmvDzd,
          orders,
          products,
          proMerchants,
          sinceLaunchLabel,
          stores,
          bestWeekStores: dz.bestWeekStores,
          bestMonthOrders: dz.bestMonthOrders,
        }}
      />
      <Testimonials />
      <Skills />
      <StatsSection
        dzStoreStats={{
          stores: stores,
          proMerchants: proMerchants,
        }}
      />
      <Contact />
      <Footer />
      <ScrollToTop />
      <ConsoleLog />
    </>
  );
}
