import { Button } from "@/components/ui/button";
import { Printer, School } from "lucide-react";

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
      <div className="border p-10 rounded-md flex justify-center items-center">
        <div className="flex flex-col justify-center items-center border-b pb-10 ">
          <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center mb-3">
            <School className="text-white"/>
          </div>
            <h1 className="text-2xl">Apex royal college</h1>
            <p className="text-[15px] font-semibold text-zinc-500 tracking-wider">MOTTO: EXCELLENCE, DISCIPLINE and INTEGRITY</p>
            <p className="text-[12px] text-zinc-500">14 Oba Akinjobi Way, GRA ikeja, Lagos State. info@apexroyalcollege.sch.ng</p>
            <span className="p-1 px-2 font-semibold bg-zinc-100 rounded-sm text-[14px] tracking-wide mt-4 ">TERMINAL ACADEMIC REPORT SHEET - FIRST TERM (2024/2025)</span>
        <div className="grid grid-cols-4 gap-5 w-full mt-9">
          <div className="">
            <p className="text-xs">Student Name:</p>
            <p className="font-semibold">Oluwaseun chukwu David</p>
          </div>

          <div className="">
            <p className="text-xs">Admission No:</p>
            <p className="font-semibold">ARC/2024/0001</p>
          </div>

          <div className="">
            <p className="text-xs">Class:</p>
            <p className="font-semibold">JSS 2 Gold</p>
          </div>
        </div>
        </div> 
      </div>
    </div>
  );
}
