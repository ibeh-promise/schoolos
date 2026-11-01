 "use client"
import { usePathname } from "next/navigation"
 import React from "react"
 import Header from "@/components/parents/Header"
 import Sidebar from "@/components/parents/Sidebar"
 
 
 export default function ParentsDashboardLayout({
    children
 }: {
    children : React.ReactNode
 }){
    const pathname = usePathname
    return (
        <div className="flex h-screen overflow-hidden">
         <Sidebar />
         <div className="flex min-h-0 overflow-hidden flex-1 flex-col">
            <Header />
            <main className="flex-1 min-w-0 min-h-0 overflow-y-auto">
               {children}
            </main>
         </div>
        </div>
    )
 }