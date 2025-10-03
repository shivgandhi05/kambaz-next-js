import { ReactNode } from "react";
import KambazNaviagtion from "./Navigation";
import "./styles.css";

export default function KambazLayout({ children, }: Readonly<{children: ReactNode}>) {
    return (
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
    )
}