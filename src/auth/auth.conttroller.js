import { authservice } from "./auth.services.js";
import { uiAUTH } from "./uiauth.js";
let authServiceInstance = new authservice();
let uiAuth = new uiAUTH();

document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const emaill = document.getElementById("email-id").value;
    const password = document.getElementById("password").value;
    console.log(emaill, password);
    // Call the login function
    authServiceInstance.login(emaill, password);
  });
document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const name=document.getElementById("name").value;
    const emaill = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("rePassword").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;
    console.log(emaill, password);
    // Call the login function
    authServiceInstance.regster(name,emaill,password,rePassword,dateOfBirth,gender);
  });








document.getElementById("sing up").addEventListener("click", () => {
  uiAuth.display();
});





export class authtcation {}
