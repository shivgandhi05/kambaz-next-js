"use client";
import Link from "next/link";
import { FormControl } from "react-bootstrap";


export default function Profile() {
    return (
        <div id="wd-profile" className="p-5">
            <h3>Profile</h3>
            <FormControl defaultValue="alice" placeholder="username" className="mb-2" style={{width: "300px"}}/> 
            <FormControl defaultValue="123" placeholder="password" type="text" className="mb-2" style={{width: "300px"}}/>
            <FormControl defaultValue="Alice" placeholder="First Name" className="mb-2" style={{width: "300px"}}/>
            <FormControl defaultValue="Wonderland" placeholder="Last Name" className="mb-2" style={{width: "300px"}}/>
            <FormControl defaultValue="mm/dd/yyyy" placeholder="mm/dd/yyyy" type="date" className="mb-2" style={{width: "300px"}}/>
            <FormControl defaultValue="alice@wonderland.com" placeholder="email" className="mb-2" style={{width: "300px"}}/>
            <FormControl defaultValue="User" placeholder="role" className="mb-2" style={{width: "300px"}} />
            <Link id ="wd-signout-btn" href="/Account/Signin" className="btn btn-danger mb-2">Sign Out</Link>
        </div>

    )
}