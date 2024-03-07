import ServiceFeature from "@/components/Services/ServiceFeature";
import ServicesHero from "@/components/Services/ServicesHero";
import TalkToExpert from "@/components/Services/TalkToExpert";
import CommonSummary from "@/components/Shared/CommonSummary";
import React from "react";

const Services = () => {
  return (
    <section className="px-5 lg:px-0">
      <ServicesHero />
      <ServiceFeature />
      <TalkToExpert />
      <div className="">
        <CommonSummary />
      </div>
      <div className="mb-80"></div>
    </section>
  );
};

export default Services;
