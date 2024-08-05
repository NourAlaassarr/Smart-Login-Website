let Name = document.getElementById("Name");
let Email = document.getElementById("Email");
let Password = document.getElementById("Password");
let SignUP = document.getElementById("SignUP");
let UsersArray = [];

// Check if there is already a 'User' in localStorage
if (localStorage.getItem('User') !== null) {
    UsersArray = JSON.parse(localStorage.getItem("User"));
}
else {
    UsersArray = [];
}

SignUP.addEventListener("click", function(e) {
    e.preventDefault();

    // Ensure all fields are filled
    if (Name.value === '' || Email.value === '' || Password.value === '') {
        document.getElementById("TextMsg").innerHTML = `<span class="text-danger text-center m-3">All Fields are required</span>`;
        return;
    }

    // Check if the email already exists
    if (emailExists(Email.value)) {
        document.getElementById("TextMsg").innerHTML = `<span class="text-danger text-center m-3">Email already exists</span>`;
        return;
    }

    // Create a new user object
    let User = {
        Name: Name.value,
        Email: Email.value,
        Password: Password.value,
    };

    // Add new user to UsersArray and save to localStorage
    UsersArray.push(User);
    localStorage.setItem("User", JSON.stringify(UsersArray));

    // Display success message
    document.getElementById("TextMsg").innerHTML = `<span class="text-success text-center m-3">Success</span>`;
});

function emailExists(email) {
    for (let i = 0; i < UsersArray.length; i++) {
        if (UsersArray[i].Email === email) {
            return true;
        }
    }
    return false;
}

