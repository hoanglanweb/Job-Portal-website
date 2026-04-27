import CTASection from "@/components/home/CTASection";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/header";
import Hero from "@/components/home/hero";
import Testimonials from "@/components/home/Testimonials";
import TopCompanies from "@/components/home/TopCompanies";


export default function Home() {
  return (
    <>
      <main className="min-h-screen font-sans">
        <Header />
        <Hero />
        <TopCompanies />
        <FeaturedJobs />
        <Testimonials />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
