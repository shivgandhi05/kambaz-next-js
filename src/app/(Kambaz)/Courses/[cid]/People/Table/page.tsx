"use client";
import React from "react";
import { useParams } from "next/navigation";
import * as db from "../../../../Database";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";

export default function PeopleTable() {
  const { cid } = useParams(); // get course ID from URL
  const enrollments = db.enrollments; // each enrollment now includes a full user object

  return (
    <div id="wd-people-table" className="p-5">
      <Table striped hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrollments
            .filter((enrollment: any) => enrollment.course === cid)
            .map((enrollment: any) => (
              <tr key={enrollment._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">
                    {enrollment.user.firstName}
                  </span>{" "}
                  <span className="wd-last-name">
                    {enrollment.user.lastName}
                  </span>
                </td>
                <td className="wd-login-id">{enrollment.user.loginId}</td>
                <td className="wd-section">{enrollment.user.section}</td>
                <td className="wd-role">{enrollment.user.role}</td>
                <td className="wd-last-activity">
                  {enrollment.user.lastActivity}
                </td>
                <td className="wd-total-activity">
                  {enrollment.user.totalActivity}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
}
