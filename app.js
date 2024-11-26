// Sample roles and users data
const roles = [
    { id: 1, name: "Admin", permissions: ["Create", "Read", "Update", "Delete"] },
    { id: 2, name: "User", permissions: ["Read"] }
  ];
  
  const users = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "User" }
  ];
  
  // Populate user table
  function populateUsers() {
    const userTableBody = document.querySelector("#user-table tbody");
    userTableBody.innerHTML = ""; // Clear existing rows
    users.forEach(user => {
      const row = `
        <tr>
          <td>${user.name}</td>
          <td>${user.role}</td>
          <td>
            <button onclick="editUser(${user.id})">Edit</button>
            <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        </tr>
      `;
      userTableBody.innerHTML += row;
    });
  }
  
  // Populate role table
  function populateRoles() {
    const roleTableBody = document.querySelector("#role-table tbody");
    roleTableBody.innerHTML = ""; // Clear existing rows
    roles.forEach(role => {
      const row = `
        <tr>
          <td>${role.name}</td>
          <td>${role.permissions.join(", ")}</td>
          <td>
            <button onclick="editRole(${role.id})">Edit</button>
            <button onclick="deleteRole(${role.id})">Delete</button>
          </td>
        </tr>
      `;
      roleTableBody.innerHTML += row;
    });
  }
  
  // Initial population
  populateUsers();
  populateRoles();