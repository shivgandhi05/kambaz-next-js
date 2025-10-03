"use client";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
export default function Signup() {
    return (
        <div id="wd-signup-screen" className="p-5">
            <h3>Sign up</h3>
            <FormControl id="wd-username" placeholder="username" className="mb-2" style={{width: "300px"}}/> 
            <FormControl  id="wd-password" placeholder="password" type="password" className="mb-2" style={{width: "300px"}}/>
            <FormControl id="wd-password-verify" placeholder="verify password" type="password" className="mb-2" style={{width: "300px"}}></FormControl>
            <Link id="wd-signup-link" href="/Account/Signup" className="btn btn-primary mb-2">Sign up</Link>
            <Link id ="wd-signin-btn" href="/Account/Profile" className="btn btn-secondary mb-2">Sign in</Link>
        </div>
    )
}