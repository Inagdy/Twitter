import { authservice } from "./auth.services.js";
import { uiAUTH } from "./uiauth.js";
let authServiceInstance = new authservice();
let uiAuth = new uiAUTH();


function checkAuth() {
  const token = localStorage.getItem("token");
  return token !== null; // Returns true if the token exists
}

// Function to redirect to a specified URL
function redirectTo(url) {
  window.location.href = url;
}

// Check authentication on page load
window.onload = function() {
  const isAuthenticated = checkAuth();
  const currentPath = window.location.pathname;
  console.log(currentPath)

  // If the user is authenticated
  if (isAuthenticated) {
      // Redirect from auth.html to index.html or dashboard.html
      if (currentPath.includes("auth.html")) {
          redirectTo("/src/index.html"); // or "dashboard.html" based on your logic
      }
  } else {
      // If the user is not authenticated
      // Redirect from index.html or dashboard.html to auth.html
      if (currentPath.includes("/src/index.html") ) {
          redirectTo("auth.html");
      }
  }
};



export class authtcation {
  validateLogin(email, password) {
    const emailInput = document.getElementById("email-id");
    const passwordInput = document.getElementById("password");

    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");

    if (!email || !password) {
      if (!email) {
        emailInput.classList.add("input-error");
      }
      if (!password) {
        passwordInput.classList.add("input-error");
      }
      return false;
    } else {
      authServiceInstance.login(email, password);
    }

    return true;
  }

  validateReg(name, email, password, rePassword, dateOfBirth, gender) {
    // Create an array of input elements and their corresponding values
    const inputs = [
      { element: document.getElementById("name"), value: name },
      { element: document.getElementById("email"), value: email },
      { element: document.getElementById("password"), value: password },
      { element: document.getElementById("rePassword"), value: rePassword },
      { element: document.getElementById("dateOfBirth"), value: dateOfBirth },
      { element: document.getElementById("gender"), value: gender },
    ];

    // Reset previous error states
    inputs.forEach((input) => {
      input.element.classList.remove("input-error");
    });

    let isValid = true;

    // Validate each input
    inputs.forEach((input) => {
      if (!input.value) {
        input.element.classList.add("input-error");
        isValid = false;
      }
    });

    const passwordInput = document.getElementById("password");
    const rePasswordInput = document.getElementById("rePassword");
    // Additional validation for specific fields
    if (password !== rePassword) {
      passwordInput.classList.add("input-error");
      rePasswordInput.classList.add("input-error");
      isValid = false;
    }

    return isValid; // Return the validation result
  }
}




let authaction = new authtcation();

if (window.location.pathname.endsWith("auth.html")) {
document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const emaill = document.getElementById("email-id").value;
    const password = document.getElementById("password").value;
    console.log(emaill, password);
    // Call the login function
    authaction.validateLogin(emaill, password);
  });

document
  .getElementById("signin-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    const name = document.getElementById("name").value;
    const emaill = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const rePassword = document.getElementById("rePassword").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;
    const gender = document.getElementById("gender").value;
    console.log(emaill, password);
    // Call the login function
    if (
      authaction.validateReg(
        name,
        emaill,
        password,
        rePassword,
        dateOfBirth,
        gender
      )
    ) {
      // Proceed with registration
      authServiceInstance.regster(
        name,
        emaill,
        password,
        rePassword,
        dateOfBirth,
        gender
      );
    }
  });

document.getElementById("sing up").addEventListener("click", () => {
  authServiceInstance.errors.classList.replace("block", "hide");
  uiAuth.display();
});
document.getElementById("forget").addEventListener("click", () => {
  window.location.href = '/forgetpass.html';
});


}

