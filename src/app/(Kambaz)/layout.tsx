"use client";
import { ReactNode } from "react";
import KambazNaviagtion from "./Navigation";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Session from "./Account/Session";

export default function KambazLayout({ children, }: Readonly<{children: ReactNode}>) {
    return (
        <Provider store={store}>
        <Session>
        <div id="wd-kambaz">
            <div className="d-flex">
                <div>
                    <KambazNaviagtion />
                </div>
                <div className=" wd-main-content-offset flex-fill">
                    {children}
                </div>
            </div>
        </div>
        </Session>
        </Provider> 
    )
}