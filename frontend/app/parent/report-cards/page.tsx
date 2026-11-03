import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";

export default function () {
  return (
    <div className="p-10 ">
      <div className="flex justify-between items-center border-b pb-4">
        <div className="">
          <h1 className="text-2xl font-semibold mb-3">
            Warp Terminal Academic Report Cards
          </h1>
          <p className="text-zinc-500 text-[13px]">
            Continuous assessments, examination marks and form master
            evaluations for your children
          </p>
        </div>
        <Button variant="outline" className="p-3 rounded-sm">
          <Printer />
          <p>Print Report Sheet</p>
        </Button>
      </div>
      <div className="flex items-center gap-3 mt-5 p-2 border rounded-sm">
        <p className="text-xs text-zinc-500 font-semibold">Select Ward:</p>
        <Button className="p-3">Oluwaseun (JSS 2 Gold)</Button>
        <Button variant="outline">Chioma (SS1 Science)</Button>
      </div>
    </div>
  );
}
