import PlatformPromise from "../../components/platform/PlatformPromise/PlatformPromise";
import CustomerIntelligence from "../../components/platform/CustomerIntelligence/CustomerIntelligence";
import JourneyOrchestration from "../../components/platform/JourneyOrchestration/JourneyOrchestration";

const Platform = () => {
  return (
    <main>

      <PlatformPromise />

      <CustomerIntelligence />

      <JourneyOrchestration />

    </main>
  );
};

export default Platform;