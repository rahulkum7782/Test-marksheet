// Default username & password set
if (!localStorage.getItem("savedUsername")) {
  localStorage.setItem("savedUsername", "rahul");
}
if (!localStorage.getItem("savedPassword")) {
  localStorage.setItem("savedPassword", "12345");
}

// ✅ Login function
function login(event) {
  event.preventDefault(); // form reload na ho

  let username = document.getElementById("username").value.trim();
  let password = document.getElementById("password").value.trim();

  let savedUsername = localStorage.getItem("savedUsername");
  let savedPassword = localStorage.getItem("savedPassword");

  if (username === savedUsername && password === savedPassword) {
    window.location.href = "https://rahulkum7782.github.io/semester-results/";
  } else {
    alert("Wrong Username or Password!");
    document.getElementById("forgetBtn").style.display = "block";
  }
}

// ✅ Forget Account (reset)
function forgetAccount() {
  let newUser = prompt("Enter New Username:");
  let newPass = prompt("Enter New Password:");

  if (newUser && newPass) {
    localStorage.setItem("savedUsername", newUser);
    localStorage.setItem("savedPassword", newPass);
    alert("✅ Username & Password reset successfully!");
    document.getElementById("forgetBtn").style.display = "none";
  } else {
    alert("⚠️ Username & Password dono required hain!");
  }
}

// 👁 Toggle show/hide password
function toggleEye() {
  let input = document.getElementById("password");
  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}
