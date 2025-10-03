"use client";
import Link from "next/link";
import { FormControl } from "react-bootstrap";


export default function Signin() {
    return (
        <div id="wd-signin-screen" className="p-5">
            <h3>Sign in</h3>
            <FormControl id="wd-username" placeholder="username" className="mb-2" style={{width: "300px"}}/> 
            <FormControl  id="wd-password" placeholder="password" type="password" className="mb-2" style={{width: "300px"}} />
            <Link id ="wd-signin-btn" href="/Dashboard" className="btn btn-primary mb-2">Sign in</Link>
            <Link id="wd-signup-link" href="/Account/Signup" className="btn btn-secondary mb-2">Sign up</Link>
        </div>
    )
}