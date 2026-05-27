import EngagementSection from "@/Components/Shared/EngagementSection";
import FeatureSection from "@/Components/Shared/FeatureSection";
import HeroSection from "@/Components/Shared/HeroSection";
import SubscriptionSection from "@/Components/Shared/SubscriptionSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <EngagementSection />
      <SubscriptionSection />
    </div>
  );
}
