import { Button } from "@heroui/react";
import React from "react";

const SubscriptionSection = () => {
  return (
    <div className="text-blue-900 flex flex-col items-center justify-center py-16 px-4">
      <h2 className="text-4xl font-bold">Ready to Dominate?</h2>
      <p className="text-lg text-center">
        Join thousands of athletes who trust SportNest for their facility
        management. Get in the zone today.
      </p>
      <div className="flex gap-3">
        <Button variant="primary" className="mt-4 rounded-lg p-6">
          Sign Up Now
        </Button>
        <Button variant="outline" className="mt-4 rounded-lg p-6">
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default SubscriptionSection;
