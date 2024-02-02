// Insert your code here
const register = document.querySelector("#register");
const signIn = document.querySelector("#connection");

register.addEventListener("click", function (req, res) {
  const name = document.querySelector("#registerName").value;
  const email = document.querySelector("#registerEmail").value;
  const password = document.querySelector("#registerPassword").value;
  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name, email: email, password: password }),
  }).then((res) =>
    res.json().then((data) => {
      if (data) {
        console.log(data);
        window.location.assign("./index.html");
      } else {
        console.log("There is an error");
      }
    })
  );
});

signIn.addEventListener("click", function (req, res) {
  const connectionEmail = document.querySelector("#connectionEmail").value;
  const connectionPassword = document.querySelector(
    "#connectionPassword"
  ).value;
  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: connectionEmail,
      password: connectionPassword,
    }),
  }).then((res) =>
    res.json().then((data) => {
      if (data) {
        console.log(data + "You're connected");
        window.location.assign("./index.html");
      } else {
        console.log("There is an error");
      }
    })
  );
});
