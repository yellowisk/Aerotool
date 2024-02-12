import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import Link from "next/link";

export default function App() {
  return (
    <div className="flex flex-col space-y-6 flex-1 items-center justify-center h-screen">
      <div className="flex flex-row items-center justify-center gap-2">
        <Plane className="size-6" />
        <h1 className="text-xl uppercase font-semibold">Aerotool</h1>
      </div>
      <Button asChild variant="outline">
        <Link href="/login">Login</Link>
      </Button>
    </div>
  );
}
