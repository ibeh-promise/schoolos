import { Button } from "@/components/ui/button";
import { Calendar, DollarSign, User2 } from "lucide-react";

export default function ParentDashBoard() {
  const wards = [
    {
      name: "Oluwaseun Chukwu David",
      adm: "ARA/2023/043",
      class: "jss 2 Gold",
      gender: "Male",
    },
    {
      name: "Chioma Eze Miracle",
      adm: "ARA/2023/044",
      class: "jss 2 Gold",
      gender: "Female",
    },
  ];

  const invoices = [
    {
      ward: "Oluwaseun Chukwu David",
      amount: "₦240,000",
      balance: "₦0",
      status: "Paid",
      invoiceNumber: "INV-2024-001",
      class: "jss 2 Gold",
    },
  ];

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
        <div className="p-7 border rounded-md bg-[#fdfcf9]">
          <div className="flex justify-between items-center text-xs">
            <h1 className="font-semibold capitalize">REGISTERED WARDS</h1>
            <div className="p-5">
              <User2 className="text-zinc-500 text-[10px]" />
            </div>
          </div>
          <p className="text-3xl text-black"> 2 </p>
          <p className="text-zinc-500 text-xs">
            Enrolled at Apex Royal College
          </p>
        </div>
        <div className="p-7 border rounded-md bg-[#fdfcf9]">
          <div className="flex justify-between items-center text-xs">
            <h1 className="font-semibold capitalize">TOTAL OUTSTANDING FEES</h1>
            <div className="p-5">
              <DollarSign className="text-zinc-500 text-[10px]" />
            </div>
          </div>
          <p className="text-3xl text-black"> ₦0 </p>
          <p className="text-zinc-500 text-xs">ALL FEES CLEARED</p>
        </div>
        <div className="p-7 border rounded-md bg-[#fdfcf9]">
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
      <div className="grid grid-cols-2 grid-rows-1 gap-5 mt-5">
        <div className="border p-7 rounded-md bg-[#fdfcf9]">
          <h1 className="font-semibold">My Children / Ward</h1>
          <p className="text-[15px] text-zinc-500">
            Academic enrollment and class placement details
          </p>
          {wards.map((ward) => (
            <div className="flex justify-between items-center border p-4 rounded-sm mt-5">
              <div className="">
                <p className="font-semibold">{ward.name} </p>
                <p className="text-[13px] text-zinc-500">
                  adm: {ward.adm} . {ward.class}
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <span className="p-1 border">{ward.gender}</span>
                <Button variant="outline">Report Card</Button>
              </div>
            </div>
          ))}
        </div>
        <div className="border p-7 rounded-md bg-[#fdfcf9]">
          <h1 className="font-semibold">Fee Invoice & Billing</h1>
          <p className="text-[15px] text-zinc-500">
            Term fee balance for all registered wards{" "}
          </p>
          <div className="border p-4 rounded-sm mt-5">
            {invoices.map((invoice, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="">
                  <p className="font-semibold">{invoice.ward}</p>
                  <p className="text-[12px] text-zinc-500">
                    {invoice.invoiceNumber} . {invoice.class}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="">
                    <p className="font-semibold">{invoice.amount}</p>
                    <p className="text-xs text-zinc-500">
                      Bal: {invoice.balance}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 rounded-sm text-xs ${invoice.status === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {invoice.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
