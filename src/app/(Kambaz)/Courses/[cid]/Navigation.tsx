"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroupItem } from "react-bootstrap";

export default function CourseNavigation() {
    const pathname = usePathname();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Gardes", "People"];
    return (
        <div id="wd-courses-naviagtion" className="wd-list-group fs-5 rounded-0">
            {links.map((link) => (
                <ListGroupItem key={link} as={Link} href={link} 
                className={`text-danger border-0 ps-2 ${pathname.includes(link) ? "text-black border-start border-4 border-black" : "text-danger"}`}>
                    {link}
                </ListGroupItem>
            ))}
        </div>
    )
}