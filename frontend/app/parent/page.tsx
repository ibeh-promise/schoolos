import { Button } from "@/components/ui/button";

export default function ParentDashBoard() {
  return (
    <div className="p-10">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-2xl font-semibold">Parent & Guardian Portal</h1>
          <p className="text-xs text-zinc-500">
            Welcome, Dr Emeka Chukwu. Monitor Academic Progress and school fees
            for your ward.
          </p>
        </div>
        <Button>Ward Term Report Card</Button>
      </div>
    </div>
  );
}
