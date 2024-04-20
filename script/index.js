import { API_URL,table,btn,windowDiv,btnClosed,createBtn,firstNameInput,lastNameInput,emailInput,root , form} from "./const.js";


btn.addEventListener("click", ((e) => {
  e.preventDefault();
windowDiv.style.display = "block";
root.style.filter = 'blur(3px)'; 
}));


btnClosed.addEventListener("click", (e) => {
  e.preventDefault();
  windowDiv.style.display = "none";
  root.style.filter = "";
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
