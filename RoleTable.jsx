import React, { useEffect, useState } from "react";
import axios from "../services/api";

function RoleTable() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios.get("/roles").then((response) => {
      setRoles(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Role Management</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role) => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTable;