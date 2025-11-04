"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { FaBars } from "react-icons/fa";
import { courses } from "../../Database";
import BreadCrumb from "./Breadcrumb";
import {RootState} from "../../store";

export default function CoursesLayout( { children}: {children: ReactNode}) {
        const { cid } = useParams();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { courses } = useSelector((state: RootState) => state.coursesReducer);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const course = courses.find((course: any) => course._id === cid);
        const [collapsed, setCollapsed] = useState(false);
        return (
            <div id="wd-courses">
                <h2 className="text-danger">
                    <button className="me-3 bg-transparent p-0" 
                    style={{border: "none", outline: "none"}} 
                    onClick={() => setCollapsed((prev) => !prev)}>
                        <FaBars className="text-danger fs-4"/>
                    </button>
                    {<BreadCrumb course={course} />}
                </h2> <hr />
            
                <div className="d-flex">z
                    <div className="d-none d-md-block">
                        <CourseNavigation collapsed={collapsed} />
                    </div>
                    <div className="flex-fill">
                        {children}
                    </div>
                </div>
            </div>
        )
    }