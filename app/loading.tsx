import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <Loader2 className="w-10 h-10 animate-spin text-white " />
      <p className="mt-4 text-lg font-medium text-white">
        Loading...
      </p>
    </div>
  );
}
