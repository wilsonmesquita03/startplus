import Footer from "@/components/footer";
import Header from "@/components/header";
import {
  HomeHeroArea
} from "@/components/hero-area";
import { CoursesHighlight } from "@/components/ui/highlight-courses";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeHeroArea />
        <CoursesHighlight />
      </main>
      <Footer />
    </>
  );
}
