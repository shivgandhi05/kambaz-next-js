"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AccountNavigation() {
    const pathname = usePathname();
    return (
        <div id="wd-account-navigation" className="wd-list-group fs-5 rounded-0">
            <Link href="/Account/Signin" id="wd-signin-link"
            className={`list-group-item border-0 ps-2 ${pathname === '/Account/Signin' ? 'text-black border-start border-4 border-black' : 'text-danger'}`}>
            Signin</Link>

            <Link href="/Account/Signup" id="wd-signup-link"
            className={`list-group-item border-0 ps-2 ${pathname === '/Account/Signup' ? 'text-black border-start border-4 border-black' : 'text-danger'}`}>
            Signup</Link>

            <Link href="/Account/Profile" id="wd-profile-link"
            className={`list-group-item border-0 ps-2 ${pathname === '/Account/Profile' ? 'text-black border-start border-4 border-black' : 'text-danger'}`}>
            Profile</Link><br/>
        </div>
    )
}