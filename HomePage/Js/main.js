let Logout = document.getElementById('LogOut');
let Usernamebox = document.getElementById('username');

// Retrieve the username from localStorage
let username = localStorage.getItem('UserName');

// If username exists, parse it and set it to the innerHTML of the Usernamebox
if (username) {
    Usernamebox.innerHTML = username;
} else {
    Usernamebox.innerHTML = "Guest"; // Fallback text if no username is found
}

// Add event listener to the Logout button to clear the username from localStorage
Logout.addEventListener('click', function() {
    localStorage.removeItem('UserName');
    // Optionally, you can redirect the user to the login page after logout
    window.location.href = '../index.html';
});
