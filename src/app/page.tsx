import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import HowToBuy from "@/components/HowToBuy";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";
import PageSpacing from "@/components/ui/page-spacing";

/**
 * 主页组件
 * @returns {JSX.Element} 主页
 */
export default function Home() {
  return (
    <>
      <Header />
      <PageSpacing />
      <main className="min-h-screen flex flex-col">
        <Hero />
        <Journey />
        <HowToBuy />
        <Roadmap />
        <Footer />
      </main>
    </>
  );
}
