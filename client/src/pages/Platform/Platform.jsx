import PlatformPromise from "../../components/platform/PlatformPromise/PlatformPromise";
import CustomerIntelligence from "../../components/platform/CustomerIntelligence/CustomerIntelligence";
import JourneyOrchestration from "../../components/platform/JourneyOrchestration/JourneyOrchestration";
import RewardArchitecture from "../../components/platform/RewardArchitecture/RewardArchitecture";
import PlatformFoundation from "../../components/platform/PlatformFoundation/PlatformFoundation";

const Platform = () => {
  return (
    <main className="platform-page">
      <PlatformPromise />
      <CustomerIntelligence />
      <JourneyOrchestration />
      <RewardArchitecture />
      <PlatformFoundation />
    </main>
  );
};

export default Platform;