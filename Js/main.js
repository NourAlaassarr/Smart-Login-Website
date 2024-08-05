let Email = document.getElementById("Email").value;
let Password =document.getElementById("Password").value;
let UsersArray=[];
let SignIn = document.getElementById("SignIn");

if(localStorage.getItem("User")!==null){
    UsersArray=JSON.parse(localStorage.getItem("User"));
}
else{
    UsersArray=[];
}

SignIn.addEventListener('click',function(e){
e.preventDefault();

})

