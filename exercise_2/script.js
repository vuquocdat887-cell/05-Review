const arr = JSON.parse(localStorage.getItem("name")) || [];
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  arr.push({
    name: document.getElementById("name").value.trim(),
    price: document.getElementById("price").value.trim(),
  });
  localStorage.setItem("name", JSON.stringify(arr));
  them();
});

function them() {
  document.getElementById("tbody").innerHTML = "";
  arr.forEach((a, b) => {
    const c = document.createElement("tr");
    c.innerHTML = `
                    <td>${b + 1}</td>
                    <td>${a.name}</td>
                    <td>${a.price}</td>
                    <td><button onclick="xoa(${b})">xóa</button></td>
                `;
    document.getElementById("tbody").appendChild(c);
  });
}

function xoa(a) {
  arr.splice(a, 1);
  localStorage.setItem("name", JSON.stringify(arr));
  them();
}
them();
