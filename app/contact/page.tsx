import ContactPageTop from "@/components/Contact/ContactPageTop";
import Form from "@/components/Contact/Form";
import LocationSupport from "@/components/Contact/LocationSupport";
import CommonSummary from "@/components/Shared/CommonSummary";

const page = () => {
  return (
    <div className="mb-[200px] md:mb-[250px] max-w-[1280px] mx-auto px-5 lg:px-0 relative mt-36">
      {/* --Contact Page Top Section-- */}
      <ContactPageTop />
      {/* --Contact Page Form Section-- */}
      <Form />
    
      {/* --Contact Page Google Map & Address Section-- */}
      <LocationSupport />
    </div>
  );
};

export default page;
