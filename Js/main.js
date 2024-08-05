let Email = document.getElementById("Email")
let Password =document.getElementById("Password")
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

if(EmailAndPasswordMatches(Email.value,Password.value)){
    console.log(Email.value,Password.value)
    
      location.href = '/HomePage/Home.html';
      return; // Exit the function after successful login
}

document.getElementById("TextMsg").innerHTML=`<span class="text-danger text-center m-3">incorrect email or password</span>`;


})
function EmailAndPasswordMatches(Email, Password){
    for(let i=0;i<UsersArray.length;i++){
        if(UsersArray[i].Email===Email){
            if(UsersArray[i].Password===Password){
                var Name = UsersArray[i].Name;
                console.log(Name)
                localStorage.setItem('UserName', Name);
                return true;
            }
            // console.log(UsersArray[i].Password,Password)
            // console.log(UsersArray[i].Email,Email)
        }
    }
    return false;
}
