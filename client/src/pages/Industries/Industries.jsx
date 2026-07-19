import IndustriesHero from "../../components/industries/IndustriesHero/IndustriesHero";
import IndustryGrid from "../../components/industries/IndustryGrid/IndustryGrid";
// import WhyIndustries from "../../components/industries/WhyIndustries/WhyIndustries";
// import SuccessMetrics from "../../components/industries/SuccessMetrics/SuccessMetrics";
// import IndustriesCTA from "../../components/industries/IndustriesCTA/IndustriesCTA";

const Industries = () => {
  return (
    <main className="industries-page">
      <IndustriesHero />

      <IndustryGrid />

      {/* <WhyIndustries />

      <SuccessMetrics />

      <IndustriesCTA /> */}
    </main>
  );
};

export default Industries;