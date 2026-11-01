import { Button } from "@/components/ui/button";
import { DollarSign, User2 } from "lucide-react";

export default function ParentDashBoard() {
  return (
    <div className="p-10">
      <div className="flex justify-between border-b pb-5 mb-5">
        <div className="">
          <h1 className="text-2xl font-semibold">Parent & Guardian Portal</h1>
          <p className="text-xs text-zinc-500">
            Welcome, Dr Emeka Chukwu. Monitor Academic Progress and school fees
            for your ward.
          </p>
        </div>
        <Button>Ward Term Report Card</Button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="p-10 border rounded-md bg-[#fdfcf9]">
          <div className="flex justify-between items-center text-xs">
      <h1 className="font-semibold capitalize">REGISTERED WARDS</h1>
      <div className="p-5">
        <User2 className="text-zinc-500 text-[10px]" />
      </div>
          </div>
          <p className="text-3xl text-black"> 2 </p>
          <p className="text-zinc-500 text-xs">Enrolled at Apex Royal College</p>
        </div>
        <div className="p-10 border rounded-md bg-[#fdfcf9]">
          <div className="flex justify-between items-center text-xs">
      <h1 className="font-semibold capitalize">TOTAL OUTSTANDING FEES</h1>
      <span className="text-[25px]">₦</span>
      
          </div>
          <p className="text-3xl text-black"> ₦20 </p>
          <p className="text-zinc-500 text-xs">All fees cleared</p>
        </div>
        <div className="p-10 border rounded-md bg-[#fdfcf9]">
          <div className="flex justify-between items-center text-xs">
      <h1 className="font-semibold capitalize">CURRENT TERM</h1>
      <div className="p-5">
        <DollarSign className="text-zinc-500 text-[10px]" />
      </div>
          </div>
          <p className="text-3xl text-black"> FIRST TERM </p>
          <p className="text-zinc-500 text-xs">2024/2025 Academic Session</p>
        </div>
      </div> 
    </div>
  );
}
