"use client";
import React from "react";
// import { useParams } from "next/navigation";
// import * as db from "../../../../Database";
import { Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import PeopleDetails from "../Details";
import Link from "next/link";


export default function PeopleTable({ users = [], fetchUsers }: { users?: any[]; fetchUsers: () => void; }) {
  const [showDetails, setShowDetails] = useState(false);
  const [showUserId, setShowUserId] = useState<string | null>(null);
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
        {showDetails && (
       <PeopleDetails
         uid={showUserId}
         onClose={() => {
           setShowDetails(false);
           fetchUsers();
         }}/>
     )}
          {enrollments.map((enrollment) => (
              <tr key={enrollment._id}>
                <td className="wd-full-name text-nowrap">
                <span className="text-decoration-none"
                 onClick={() => {
                   setShowDetails(true);
                   setShowUserId(user._id);
                 }} >
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">
                    {enrollment.user.firstName}
                  </span>{" "}
                  <span className="wd-last-name">
                    {enrollment.user.lastName}
                  </span>
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
