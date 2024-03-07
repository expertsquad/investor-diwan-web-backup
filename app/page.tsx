import BestInnovations from "@/components/BestInnovations/BestInnovations";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Hero from "@/components/Hero/Hero";
import WhyYouShould from "@/components/WhyYouShould/WhyYouShould";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <BestInnovations />

      <WhyYouShould />

      <FeatureSection />

      <div className="mb-[650px]"></div>
    </main>
  );
}
