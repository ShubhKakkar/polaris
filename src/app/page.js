import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center p-5">
      <div className="text-center">
        <h1 className="text-7xl mb-4">Explore Illuminare Analytics</h1>
        <p className="text-xl">Unlock the power of data visualization on our dashboard page. Navigate now for a comprehensive experience in electricity metering data analysis.</p>
        <Button asChild className="text-lg mt-4 p-6"><Link href="/dashboard">Visit Dashboard</Link></Button>
      </div>
    </div>
  );
}
