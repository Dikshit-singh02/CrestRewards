import PlatformPromise from "../../components/platform/PlatformPromise/PlatformPromise";
import CustomerIntelligence from "../../components/platform/CustomerIntelligence/CustomerIntelligence";
import JourneyOrchestration from "../../components/platform/JourneyOrchestration/JourneyOrchestration";
import RewardArchitecture from "../../components/platform/RewardArchitecture/RewardArchitecture";
import PlatformFoundation from "../../components/platform/PlatformFoundation/PlatformFoundation";
import IntelligenceEngine from "../../components/platform/IntelligenceEngine/IntelligenceEngine";
import EngagementStudio from "../../components/platform/EngagementStudio/EngagementStudio";

import LoyaltyPrograms from "../../components/platform/LoyaltyPrograms/LoyaltyPrograms";
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
    </main>
  );
};

export default Platform;