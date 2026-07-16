import PlatformPromise from "../../components/platform/PlatformPromise/PlatformPromise";
import CustomerIntelligence from "../../components/platform/CustomerIntelligence/CustomerIntelligence";
import JourneyOrchestration from "../../components/platform/JourneyOrchestration/JourneyOrchestration";
import RewardArchitecture from "../../components/platform/RewardArchitecture/RewardArchitecture";
import PlatformFoundation from "../../components/platform/PlatformFoundation/PlatformFoundation";
import IntelligenceEngine from "../../components/platform/IntelligenceEngine/IntelligenceEngine";
import EngagementStudio from "../../components/platform/EngagementStudio/EngagementStudio";

import LoyaltyPrograms from "../../components/platform/LoyaltyPrograms/LoyaltyPrograms";

import RewardsMarketplace from "../../components/platform/RewardsMarketplace/RewardsMarketplace";

import CustomerJourneyVisualizer from "../../components/platform/CustomerJourneyVisualizer/CustomerJourneyVisualizer";
import AnalyticsCommandCenter from "../../components/platform/AnalyticsCommandCenter/AnalyticsCommandCenter";
import AutomationEngine from "../../components/platform/AutomationEngine/AutomationEngine";

const Platform = () => {
  return (
    <main className="platform-page">
      <PlatformPromise />
      <CustomerIntelligence />
      <JourneyOrchestration />
      <RewardArchitecture />
      <PlatformFoundation />
      <IntelligenceEngine />
      <EngagementStudio />
      <LoyaltyPrograms />
      <RewardsMarketplace />
      <CustomerJourneyVisualizer />
      <AnalyticsCommandCenter />
      <AutomationEngine />
    </main>
  );
};

export default Platform;