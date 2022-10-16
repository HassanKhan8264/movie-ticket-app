//Show Password funciton
function show_password() {
  const pass1 = document.getElementById("password");
  if (pass1.type === "password") {
    pass1.type = "text";
  } else {
    pass1.type = "password";
  }
}

// function form_valadtion() {
//   //checking if user have has put input > 60 char
//   let name = document.querySelector('#userName').value;
//   const email = document.querySelector('#email').value;
//   let city = document.querySelector('#city').value;
//   const pass1 = document.querySelector('#password').value;
//   let pass2 = document.querySelector('#repeat_password').value;

//   if (name.length > 60 || email.length > 60 || city.lenght > 60 || pass1.lenght > 60 || pass2.lenght > 60) {
//     console.log("Exceding limit of 60 Character")
//     return;
//   } else {
//     console.log("In limits of 60 Character")

//   }
//   if (pass1 === pass2) {
//     document.querySelector('#error_msg').innerText = "Password  Match";
//     document.querySelector('#error_msg').style.color = 'green';
//   } else {
//     document.querySelector('#error_msg').innerText = "Password didn't match";
//     document.querySelector('#error_msg').style.color = 'red';
//     return;
//   }

// }