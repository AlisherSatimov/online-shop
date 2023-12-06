document.addEventListener("DOMContentLoaded", async () => {
  axios.defaults.baseURL = "http://localhost:5050/api/v1";
  let form = document.querySelector("#form-login");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let phone = form[0].value;
    let password = form[1].value;

    let { data } = await axios.post("/auth", {
      phoneNumber: phone,
      password: password,
    });

    console.log(data);

    localStorage.setItem("token", data.token);
  });
});
