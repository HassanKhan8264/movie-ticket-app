
function validate() {
	let myStorageData = window.localStorage.getItem("user1");
	let myData = JSON.parse(myStorageData)
	// console.log(myData.email)

	let loginEmail = document.querySelector('#email').value
	let loginE = loginEmail.toLowerCase()

	let loginPassword = document.querySelector('#password').value
	let loginP = loginPassword.toLowerCase()
	// loginPassword.tolowerCase()
	if(loginEmail === " " || loginPassword === " "){
		document.querySelector('#error_msg').innerText = "Fill all input fields";
		document.querySelector('#error_msg').style.color = 'red';
	}
	else if(loginE === myData.email && loginP === myData.password){
		console.log("ok chl raha hai")
		// window.location.href = "./MainApp/booking.html"
	}else{
		document.querySelector('#error_msg').innerText = "Invalid Email or Password";
		document.querySelector('#error_msg').style.color = 'red';
	}

} 
function show_password() {
	const pass1 = document.getElementById("password");
	if (pass1.type === "password") {
	  pass1.type = "text";
	} else {
	  pass1.type = "password";
	}
  }