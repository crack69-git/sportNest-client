import { Button, Card } from "@heroui/react";
import { TriangleAlert } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mt-30">
      <p></p>
      <Card
        className="w-fit border flex justify-between items-center mx-auto p-10"
        variant="default"
      >
        <TriangleAlert className="w-20 h-20" />
        <p className="text-2xl font-medium">Page not found</p>
        <p className="text-muted-foreground">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <Button variant="outline" className="mt-5 bg-green-700 text-white">
            Go back home
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default NotFound;
