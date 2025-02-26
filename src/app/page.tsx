import { About, Clients, Discount, InstitutionalArea, StatsSection } from "@/components/flags";
import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  HomeHeroArea
} from "@/components/hero-area";
import { CoursesHighlight } from "@/components/highlight-courses";

export const metadata = {
  title: "Home | Escola START",
}

export default async function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHeroArea />
        <CoursesHighlight />
        <Discount />
        <About />
        <Clients />
        <InstitutionalArea />
        <StatsSection />
      </main>
      <Footer />
    </>
  );
}
