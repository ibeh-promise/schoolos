import { ChevronRight, School } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  return (
    <div className="p-5 flex justify-between text-[13px]">
      <div className="flex items-center">
        <p>SchoolOs</p>
        <ChevronRight />
        <p>Parents</p>
      </div>

      <div className="flex text-[13px] items-center gap-3">
        <div className="flex border rounded-md px-2 py-1">
          Academic session:
          <span className="font-bold ">2024/2025</span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline">
                <div className="flex g-2 text-[12px] gap-2 items-center rounded-md">
                  <School />
                  Apex Royal College
                  <span className="p-1 py-0 bg-gray-200">ARC</span>
                </div>
              </Button>
            }
          />
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>INSTITUTIONAL TENANTS (3)</DropdownMenuLabel>
              <DropdownMenuItem>
                <div className="">
                    <p>Apex Royal College</p>
                    <span className="text-zinc-500 text-xs">
                      Ikeja, Lagos State
                    </span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="">
                    <p>Kingsway Crown College</p>
                    <span className="text-zinc-500 text-xs">
                      Victoria Island, Lagos State
                    </span>
                </div>
                </DropdownMenuItem>
              <DropdownMenuItem>
                <div className="">
                    <p>Broadgate academy</p>
                    <span className="text-zinc-500 text-xs">
                      Maitama, Abuja FCT
                    </span>
                </div>
                </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
