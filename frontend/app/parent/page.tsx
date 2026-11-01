import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, User2 } from "lucide-react";

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
      <div className="p-5">
        <DollarSign className="text-zinc-500 text-[10px]" />
      </div>
          </div>
          <p className="text-3xl text-black"> ₦0 </p>
          <p className="text-zinc-500 text-xs">ALL FEES CLEARED</p>
        </div>
        <div className="p-10 border rounded-md bg-[#fdfcf9]">
          <div className="flex justify-between items-center text-xs">
      <h1 className="font-semibold capitalize">CURRENT TERM</h1>
      <div className="p-5">
        <Calendar className="text-zinc-500 text-[10px]" />
      </div>
          </div>
          <p className="text-3xl text-black"> FIRST TERM </p>
          <p className="text-zinc-500 text-xs">2024/2025 Academic Session</p>
        </div>
      </div> 
      <div className="grid grid-cols-2 gap-5 mt-5">
        <div className="">
          <h1 className="font-semibold">My Children / Ward</h1>
          <p className='text-[15px] text-zinc-500'>Academic enrollment and class placement details</p>
          <div className="">
            <div className="flex justify-between items-center">
              <div className="">
                <p>Oluwaseun Chukwu David </p>
                <p></p>adm: ARA/2023/043 . jss 2 Gold
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}
