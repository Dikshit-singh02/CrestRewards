import PromiseIntro from "../../components/sections/PromiseIntro/PromiseIntro";
import LoyaltyReimagined from "../../components/sections/LoyaltyReimagined/LoyaltyReimagined";
import UnifiedCustomerView from "../../components/sections/UnifiedCustomerView/UnifiedCustomerView";
import IntelligentEngagement from "../../components/sections/IntelligentEngagement/IntelligentEngagement";
import RewardExperiences from "../../components/sections/RewardExperiences/RewardExperiences";
import BuiltForGrowth from "../../components/sections/BuiltForGrowth/BuiltForGrowth";
import FutureInvitation from "../../components/sections/FutureInvitation/FutureInvitation";

const Home = () => {
  return (
    <main className="home-page">
      <PromiseIntro />

      <LoyaltyReimagined />

      <UnifiedCustomerView />

      <IntelligentEngagement />

      <RewardExperiences />

      <BuiltForGrowth />

      <FutureInvitation />
    </main>
  );
};

export default Home;