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
} from "@/components/ui/table";

export default function () {
  const reports = [
    {
      subject: "Mathematics",
      CA1: 18,
      CA2: 17,
      EXAM: 52,
      TOTAL: 87,
      GRADE: "A1",
      REMARK: "Excellent",
    },
    {
      subject: "Englishb Language",
      CA1: 16,
      CA2: 15,
      EXAM: 47,
      TOTAL: 78,
      GRADE: "A1",
      REMARK: "Excellent",
    },
    {
      subject: "Basic Science",
      CA1: 17,
      CA2: 16,
      EXAM: 49,
      TOTAL: 82,
      GRADE: "A1",
      REMARK: "Excellent",
    },
    {
      subject: "Basic Technology",
      CA1: 15,
      CA2: 14,
      EXAM: 43,
      TOTAL: 72,
      GRADE: "B2",
      REMARK: "Very Good",
    },
    {
      subject: "Civic Education",
      CA1: 19,
      CA2: 18,
      EXAM: 54,
      TOTAL: 91,
      GRADE: "A1",
      REMARK: "Excellent",
    },
  ];
  const total = {
    cumulativeMark: 410,
    TerminalAverage: 82,
    AttendanceRate: 98,
  };
  const remarks = [
    {
      teacher: "An outstanding performance this term. Maintained consistent academic excellence and exemplary conduct.",
      principal: "Excellent result. Promoted with distinction and recommended for academic honors."
    }
  ];
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
      <div className="border m-10 rounded-md flex justify-center items-center p-6">
        <div className="flex flex-col justify-center items-center border-b pb-10 ">
          <div className="bg-black rounded-full w-10 h-10 flex justify-center items-center mb-3">
            <School className="text-white" />
          </div>
          <h1 className="text-2xl font-semibold">APEX ROYAL COLLEGE</h1>
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
            <div className="grid grid-cols-4 w-full my-9 gap-5 bg-[#f2f2f2] p-3 rounded-sm">
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
              {/* <TableCaption className="text-xs">
                A1: 75-100 (Excellent) B2: 70-74 (Very Good) B3: 65-69 (Good)
                C4: 60-64 (Credit) C5: 55-59 (Credit) C6: 50-54 (Credit) D7:
                45-49 (Pass) E8: 40-44 (Pass) F9: 0-39 (Fail)
              </TableCaption> */}
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px] font-semibold">
                    CURRICULUM SUBJECT
                  </TableHead>
                  <TableHead className="font-semibold">CA1 (20)</TableHead>
                  <TableHead className="font-semibold">CA2 (20)</TableHead>
                  <TableHead className="font-semibold">EXAM (60)</TableHead>
                  <TableHead className="font-semibold">TOTAL</TableHead>
                  <TableHead className="font-semibold">GRADE</TableHead>
                  <TableHead className="text-right font-semibold">
                    TEACHER'S REMARK
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="mb-5">
                {reports.map((report) => (
                  <TableRow key={report.subject}>
                    <TableCell className="font-medium">
                      {report.subject}
                    </TableCell>
                    <TableCell className="text-center">{report.CA1}</TableCell>
                    <TableCell className="text-center">{report.CA2}</TableCell>
                    <TableCell className="text-center">{report.EXAM}</TableCell>
                    <TableCell className="text-center">
                      {report.TOTAL}
                    </TableCell>
                    <TableCell className="text-center">
                      {report.GRADE}
                    </TableCell>
                    <TableCell className="text-center">
                      {report.REMARK}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              {/* <TableFooter className="mt-100">
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>*/}
            </Table>
            <div className=" w-full flex justify-around items-center mt-10 p-2 border rounded-md">
              <div className="text-center">
                <p className="text-[11px] text-zinc-500">Cumulative Mark:</p>
                <p className="text-[16px] font-semibold">
                  {total.cumulativeMark} Marks
                </p>
              </div>
              <div className="text-center">
                <p className="text-[11px] text-zinc-500">Terminal Average:</p>
                <p className="text-[16px] font-semibold">
                  {total.TerminalAverage} %
                </p>
              </div>
              <div className="text-center">
                <p className="text-[11px] text-zinc-500">Attendance Rate</p>
                <p className="text-[16px] font-semibold">
                  {total.AttendanceRate}%
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="p-4 rounded-sm border mt-6">
              <p className="text-[12px]">Class Master's Remark:</p>
                <p className="text-xs text-zinc-500">{remarks[0]?.teacher}</p>
              <p className="text-[15px] mt-3">Signature_________. </p>
              </div>
               <div className="p-4 rounded-sm border mt-6 ">
              <p className="text-[12px]">Class Master's Remark:</p>
                <p className="text-xs text-zinc-500">{remarks[0]?.teacher}</p>
              <p className="text-[15px] mt-3">Signature_________. </p>
              </div>
            </div>

          </div>
            <p className="text-[11px] text-zinc-500 mt-4">
              A1: 75-100 (Excellent)
B2: 70-74 (Very Good)
B3: 65-69 (Good)
C4: 60-64 (Credit)
C5: 55-59 (Credit)
C6: 50-54 (Credit)
D7: 45-49 (Pass)
E8: 40-44 (Pass)
F9: 0-39 (Fail) 
            </p>
        </div>
      </div>
    </div>
  );
}
