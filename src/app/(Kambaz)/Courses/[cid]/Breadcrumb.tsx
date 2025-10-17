"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function BreadCrumb({ course }: { course : { name: string} | undefined; }) {
    const pathname = usePathname();
    const current = pathname.split("/").pop();
    return (
        <span>
            {course} {course ? course.name : "Course"} &gt; {current}
        </span>
    )
}