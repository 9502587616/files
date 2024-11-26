import React, { useEffect, useState } from "react";
import axios from "../services/api";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(/users/${id}).then(() => {
      setUsers(users.filter((user) => user.id !== id));
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.status}</td>
            <td>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserTable;
