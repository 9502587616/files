import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <NavLink to="/" activeclassname="active">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/users" activeclassname="active">User Management</NavLink>
        </li>
        <li>
          <NavLink to="/roles" activeclassname="active">Role Management</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;