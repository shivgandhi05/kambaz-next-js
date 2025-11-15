"use client";
import Link from "next/link";
import { redirect } from "next/dist/client/components/navigation";
import { setCurrentUser } from "../reducer";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import { FormControl, Button } from "react-bootstrap";
import * as client from "../client";


export default function Signin() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const signin = async () => {
        const user = await client.signin(credentials);
        if (!user) return; 
        dispatch(setCurrentUser(user));
        redirect("/Dashboard");
    };
    return (
        <div id="wd-signin-screen" className="p-5">
            <h3>Sign in</h3>
            <FormControl defaultValue={credentials.username}
            onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                id="wd-username" placeholder="username" className="mb-2" style={{width: "300px"}}/> 
            <FormControl defaultValue={credentials.password}
            onChange={(e) => setCredentials({...credentials, password: e.target.value})} 
            id="wd-password" placeholder="password" type="password" className="mb-2" style={{width: "300px"}} />
            <Button onClick={signin} id="wd-signin-btn" className="mb-2">Sign in</Button>
            <Link id="wd-signup-link" href="/Account/Signup" className="btn btn-secondary mb-2">Sign up</Link>
        </div>
    )
}