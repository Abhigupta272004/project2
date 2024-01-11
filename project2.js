const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
];

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var loginError = document.getElementById("loginError");

    var user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert("Welcome, " + username + "!");
        loginError.textContent = "";
    } else {
        loginError.textContent = "Invalid username or password";
    }
}

function signup() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
    var signupError = document.getElementById("signupError");

    if (users.some(u => u.username === newUsername)) {
        signupError.textContent = "Username already taken";
    } 
    else {
        users.push({ username: newUsername, password: newPassword });
        alert("Account created for " + newUsername);
        signupError.textContent = "";
    }
}