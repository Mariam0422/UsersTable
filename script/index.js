const API_URL = "https://reqres.in/api/users";

const table = document.getElementById("table");

fetch(API_URL)
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
    const tableHeader = document.createElement("tr");
    tableHeader.innerHTML = `<th>Id</th><th>Email</th><th>First Name</th><th>Last Name</th>`;
    table.appendChild(tableHeader);
    data.data.forEach((user) => {
      const row = document.createElement("tr");
      row.innerHTML = `<td>${user.id}</td><td>${user.email}</td><td>${user.first_name}</td><td>${user.last_name}</td>`;
      table.appendChild(row);
    });
  });
