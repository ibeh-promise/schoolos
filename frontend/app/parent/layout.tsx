 "use client"
import { usePathname } from "next/navigation"
 import React from "react"
 import Header from "@/components/parents/Header"
 
 export default function ParentsDashboardLayout({
    children
 }: {
    children : React.ReactNode
 }){
    const pathname = usePathname
    return (
        <div className="">
            <Header />
        </div>
    )
 }