

document.querySelector('.formsubmit').addEventListener('click', (e)=>{
    e.preventDefault();
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const cpassword  =  document.getElementById('cpassword').value;


    //  Regular Experssion

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}/;
    const usernameRegex = /^[ A-za-z0-9]{3,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

    // Clear Previou Error
  document.querySelectorAll(".error")
  .forEach((curElem)=>(curElem.textContent = ""));

  let isValid = true;
  

    //  Validate Form

if(!emailRegex.test(email)){
    document.getElementById('emailError').textContent = "*Enter a Valid Email!"

 isValid = false;
}
if(!usernameRegex.test(username)){
    document.getElementById('usernameError').textContent = "*Username is Not Valid!"

    isValid = false;
}

if (!passwordRegex.test(password)){
    document.getElementById('passwordError').textContent = "*Password must be have 1 uppercase, 1 lowercase ,1 special Character! "
 isValid = false;

}

//  Validate confirm password

if (password !== cpassword ){
    if (!passwordRegex.test(password)){
        document.getElementById('cpasswordError').textContent = "*Password is not matching!"
     isValid = false;
}


let userData = [];

if(isValid){
let formClass = document.getElementsByClassName("form-sections");
Array.from(formClass).forEach((curElem)=>userData.push (curElem.value));
Array.from(formClass).forEach((curElem)=>(curElem.textContent = ""));

    alert("Registration Successful!")
};

});
