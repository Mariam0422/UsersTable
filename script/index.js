const API_URL = "https://reqres.in/api/users?page=1";

const table = document.getElementById("table");
const btn = document.getElementById("btn");
const windowDiv = document.getElementById("window");
const btnClosed = document.getElementById("closed");
const createBtn = document.getElementById("createBtn");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const emailInput = document.getElementById("email");

btn.addEventListener("click", ((e) => {
  e.preventDefault();
windowDiv.style.display = "block";
}));


btnClosed.addEventListener("click", (e) => {
  e.preventDefault();
  windowDiv.style.display = "none";
});


createBtn.addEventListener("submit", ((e) => {
e.preventDefault();
const userData = {
 [firstNameInput.name] : firstNameInput.value,
 [lastNameInput.name] : lastNameInput.value,
 [emailInput.name] : emailInput.value
};
fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
})
.then((resp) => {
  return resp.json();
})
.then((data) => {
  console.log(data);
});
}));


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
