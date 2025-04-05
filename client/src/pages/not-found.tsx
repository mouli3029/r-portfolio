import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-4 border-red-200 dark:border-red-800">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center mb-4">
            <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">404 Page Not Found</h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              We couldn't find the page you're looking for.
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pb-6">
          <Link href="/">
            <Button className="gap-2">
              <Home className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
