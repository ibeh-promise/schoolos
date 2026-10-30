import { ChevronRight } from "lucide-react"
export default function Header(){
    return (
        <div className="p-5 flex justify-between">
            <div className="">
                <p>SchoolOs</p>
                <ChevronRight />
                <p>Parents</p>
            </div>

            <div>
                <div className="flex border rounded-md p-2">
Academic session:
                <span className="font-bold ">2024/2025</span>
                </div>
                <div className="flex border rounded-md p-2">
Academic session:
                <span className="font-bold ">2024/2025</span>
                </div>
            </div>
        </div>
    )
}