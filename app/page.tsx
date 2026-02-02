import About from "@/components/About";
import Academy from "@/components/Academy";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Location from "@/components/Location";
import Method from "@/components/Method";
import Portfolio from "@/components/Portfolio";
import StatsBar from "@/components/StatsBar";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <StatsBar />
      <Method />
      <About />
      <Academy />
      <Portfolio />
      <Testimonials />
      <Location />
      <Footer />
    </main>
  );
}
