import { Button } from "@/components/ui/button";
import { Printer, School } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function () {

  const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

  const reports = [
    
  ]

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
      <div className="border m-10 rounded-md flex justify-center items-center py-6">
        <div className="flex flex-col justify-center items-center border-b pb-10 ">
          <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center mb-3">
            <School className="text-white" />
          </div> 
          <h1 className="text-2xl">Apex royal college</h1>
          <p className="text-[15px] font-semibold text-zinc-500 tracking-wider">
            MOTTO: EXCELLENCE, DISCIPLINE and INTEGRITY
          </p>
          <p className="text-[12px] text-zinc-500">
            14 Oba Akinjobi Way, GRA ikeja, Lagos State.
            info@apexroyalcollege.sch.ng
          </p>
          <span className="p-1 px-2 font-semibold bg-zinc-100 rounded-sm text-[14px] tracking-wide mt-4 ">
            TERMINAL ACADEMIC REPORT SHEET - FIRST TERM (2024/2025)
          </span>
          <div className="w-full">
            <div className="grid grid-cols-4 w-full mt-9 gap-5 bg-[#f2f2f2] p-3 rounded-sm">
              <div className="">
                <p className="text-xs">Student Name:</p>
                <p className="font-semibold text-[14px]">
                  Oluwaseun chukwu David
                </p>
              </div>

              <div className="">
                <p className="text-xs">Admission No:</p>
                <p className="font-semibold text-[14px]">ARC/2024/0001</p>
              </div>

              <div className="">
                <p className="text-xs">Class:</p>
                <p className="font-semibold text-[14px]">JSS 2 Gold</p>
              </div>

              <div className="">
                <p className="text-xs"> Class Rank:</p>
                <p className="font-semibold text-[14px]">1st of 32 Students</p>
              </div>
            </div>
            <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
