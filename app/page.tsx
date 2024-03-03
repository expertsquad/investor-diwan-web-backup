import BestInnovations from "@/components/BestInnovations/BestInnovations";
import FeatureSection from "@/components/FeatureSection/FeatureSection";
import Hero from "@/components/Hero/Hero";
import Step from "@/components/Hero/Step";
import WatchVideo from "@/components/Hero/WatchVideo";
import WhyYouShould from "@/components/WhyYouShould/WhyYouShould";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <BestInnovations />

      <WhyYouShould />

      <FeatureSection />

      <Step />

      <WatchVideo />

      <div className="mb-80"></div>
    </main>
  );
}
