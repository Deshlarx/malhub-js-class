const name = document?.getElementById("name");
const email = document?.getElementById("email");
const password = document?.getElementById("password");
const cPassword = document?.getElementById("cPassword");

const payload = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

name.addEventListener("change", (e) => {
  payload.firstName = e.target.value.split(" ")[0];
  payload.lastName = e.target.value.split(" ")[1];
});

email.addEventListener("change", (e) => {
  payload.email = e.target.value;
});

password.addEventListener("change", (e) => {
  payload.password = e.target.value;
});

cPassword.addEventListener("change", (e) => {
  payload.confirmPassword = e.target.value;
});



async function authHandler(event, route) {
    event.preventDefault();
  
    await fetch("https://fragile-fox-garters.cyclic.app/user/"+route, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.text())
      .then((result) => {
        window.localStorage.setItem("userData", result);
        alert('User registered successful');
          window.location.replace("./index.html");
      })
      .catch((error) => console.log("error", error));
  }
  