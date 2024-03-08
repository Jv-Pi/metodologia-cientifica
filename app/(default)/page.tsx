export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Sobredr from "@/components/sobredr";
import Banner from "@/components/banner";
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesBlocks />
      <Features />
      <Testimonials />
      <Sobredr />
      <Newsletter />
      <Banner />
    </>
  );
}
