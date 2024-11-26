import React from "react";

function PermissionMatrix({ roles }) {
  return (
    <div>
      <h2>Permission Matrix</h2>
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
              <td>
                {role.permissions.map((permission, index) => (
                  <span key={index}>{permission}</span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PermissionMatrix;