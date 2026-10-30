"use client";
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
import { School } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="bg-[#fdfcf9] h-full w-[310px] hidden md:block border-r">
      <div className="p-4">
      <div className="flex gap-3 items-center mb-3 mr-5">
        <div className="text-center p-2 px-4  bg-black rounded-md text-white">
          S
        </div>
        <div className="">
          <h1>SchoolOs</h1>
          <p className="text-xs">Campus Operationals Portal</p>
        </div>
      </div>
      <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button variant="outline">
                <div className="flex g-2 text-[12px] gap-2 items-center rounded-sm">
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
