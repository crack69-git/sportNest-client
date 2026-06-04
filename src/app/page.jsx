import EngagementSection from "@/Components/Shared/EngagementSection";
import FeatureSection from "@/Components/Shared/FeatureSection";
import HeroSection from "@/Components/Shared/HeroSection";
import SubscriptionSection from "@/Components/Shared/SubscriptionSection";
import { Spinner } from "@heroui/react";
import { Suspense } from "react";
export const metadata = {
  title: "SportNest Home",
  description:
    "Welcome to SportNest, your ultimate sports facility booking platform. Discover and book top-notch sports venues with ease. Whether you're a casual player or a seasoned athlete, SportNest has the perfect facility for you. Experience seamless booking, competitive pricing, and a wide range of sports options. Join us today and elevate your game with SportNest!",
};
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Suspense
        fallback={
          <div className="flex flex-col items-center gap-2">
            <Spinner size="xl" />
            <span className="text-xs text-muted">Loading...</span>
          </div>
        }
      >
        <FeatureSection />
      </Suspense>
      <EngagementSection />
      <SubscriptionSection />
    </div>
  );
}
