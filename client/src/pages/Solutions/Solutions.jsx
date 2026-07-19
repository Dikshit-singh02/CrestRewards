import SolutionsHero from "../../components/solutions/SolutionsHero/SolutionsHero";
import SolutionCategories from "../../components/solutions/SolutionCategories/SolutionCategories";
import HowItWorks from "../../components/solutions/HowItWorks/HowItWorks";
import WhyChooseSolutions from "../../components/solutions/WhyChooseSolutions/WhyChooseSolutions";
import SolutionsCTA from "../../components/solutions/SolutionsCTA/SolutionsCTA";

const Solutions = () => {
  return (
    <main className="solutions-page">
      <SolutionsHero />

      <SolutionCategories />

      <HowItWorks />

      <WhyChooseSolutions />

      <SolutionsCTA />
    </main>
  );
};

export default Solutions;