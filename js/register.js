document.addEventListener("DOMContentLoaded", async () => {
  axios.defaults.baseURL = "http://localhost:5050/api/v1";
  let form = document.querySelector("#form-create");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let fullName = form[0].value;
    let phone = form[1].value;
    let password = form[2].value;
    let token = localStorage.getItem("token");

    await axios.post(
      "/users",
      {
        name: fullName,
        phoneNumber: phone,
        password: password,
      },
      {
        headers: { authorization: `Bearer ${token}` },
      }
    );

    let getUsersResponse = await axios.get("/users", {
      headers: { authorization: `Bearer ${token}` },
    });

    let userTable = document.querySelector("#users-table");
    userTable.innerHTML = " ";

    let users = getUsersResponse.data;

    users.forEach((user) => {
      let userList = document.createElement("tr");

      let userId = document.createElement("th");
      if (!user._id) {
        user._id = "Kiritilmagan";
      }
      userId.innerText = user._id;
      userList.append(userId);

      let userName = document.createElement("td");
      if (!user.name) {
        user.name = "Kiritilmagan";
      }
      userName.innerText = user.name;
      userList.append(userName);

      let userPhone = document.createElement("td");
      if (!user.phoneNumber) {
        user.phoneNumber = "Kiritilmagan";
      }
      userPhone = user.phoneNumber;
      userList.append(userPhone);

      let userPassw = document.createElement("td");
      if (!user.password) {
        user.password = "Kiritilmagan";
      }
      userPassw.innerText = user.password;
      userList.append(userPassw);

      userTable.append(userList);
    });
  });
});
