import { ReactNode } from "react";
import KambazNaviagtion from "./Navigation";

export default function KambazLayout({ children, }: Readonly<{children: ReactNode}>) {
    return (
        <div id="wd-kambaz">
            <table>
                <tbody>
                    <tr>
                        <td valign="top" width="100px"> <KambazNaviagtion /> </td>
                        <td valign="top" width="100%"> {children}          </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}