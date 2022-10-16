function signUp() {
	console.log(`signup function running`)
	let objectOfUserData = {
		name: document.querySelector('#userName').value,
		lastName: document.querySelector('#lastName').value,
		email: document.querySelector('#email').value,
		dob: document.querySelector('#dob').value,
		city: document.querySelector('#city').value,
		password: document.querySelector('#password').value,
		repeat_password: document.querySelector('#repeat_password').value
	}
	var data = JSON.stringify(objectOfUserData)
	let toLower = data.toLowerCase()
	window.localStorage.setItem("user1", toLower);

}

// const move_page = () => {
// 	window.location.href = "./index.html"
// }

let myStorageData = window.localStorage.getItem("user1");
let myData = JSON.parse(myStorageData)
console.log(myData.email)

var regex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function move() {
	signUp()
	// form_valadtion()
	let userName = document.querySelector('#userName').value
	let lastName = document.querySelector('#lastName').value
	let dob = document.querySelector('#dob').value
	let city = document.querySelector('#city').value
	let loginEmail = document.querySelector('#email').value
	let repeat = document.querySelector('#repeat_password').value
	// let tolowerCase = loginEmail.tolowerCase()
	// loginEmailVal.toLowerCase();

	const pass1 = document.querySelector('#password').value;
	let pass2 = document.querySelector('#repeat_password').value;


	// for username
	if (userName === "" || lastName === "") {
		// console.log(loginEmail+"corect")
		document.querySelector('#error_msg0').innerText = "Invalid Name or Last Name";
		document.querySelector('#error_msg0').style.color = 'red';
	}
	if (userName !== "" && lastName !== "") {
		console.log(userName + "corect")
		// document.querySelector('#error_msg0').innerText = " ";
		document.querySelector('#error_msg0').style.display = 'none';
	}



	// for email
	if (loginEmail.match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
		console.log(loginEmail)
		// document.querySelector('#error_msg').innerText = "Invalid Email example: whatever@smail.com";
		// document.querySelector('#error_msg').style.color = 'red';
	}
	else {
		console.log(loginEmail)
		document.querySelector('#error_msg1').innerText = "Invalid Email example: whatever@smail.com";
		document.querySelector('#error_msg1').style.color = 'red';
	}
	if (loginEmail === "") {
		console.log(loginEmail + "corect")
		document.querySelector('#error_msg1').innerText = "please fill this input feild";
		document.querySelector('#error_msg1').style.color = 'red';
	}
	if (loginEmail !== "") {
		console.log(loginEmail)
		// document.querySelector('#error_msg1').innerText = "";
		document.querySelector('#error_msg1').style.display = 'none';
	}


	// for password
	if (pass1 === pass2 && pass1.length >= 8) {
		document.querySelector('#error_msg3').innerText = "Password  Match";
		document.querySelector('#error_msg3').style.color = 'green';
	}
	if(pass1.length < 8){
		document.querySelector('#error_msg3').innerText = "password should be more than eight characters";
		document.querySelector('#error_msg3').style.color = 'red';
	}
	if(pass1 !== pass2){
		document.querySelector('#error_msg3').innerText = "incorrect password";
		document.querySelector('#error_msg3').style.color = 'red';
	}
	if(pass1 === ""){
		document.querySelector('#error_msg3').innerText = "Fill this field";
		document.querySelector('#error_msg3').style.color = 'red';
	}
	

	// for changing location
	if (pass1 === pass2 && pass1.length >= 8 && pass1 !== "" && loginEmail !== ""&& userName !== "" && lastName !== "") {
		// document.querySelector('#error_msg3').innerText = "Password  Match";
		// document.querySelector('#error_msg3').style.color = 'green';
		// window.location.href = "./MainApp/index.html"
		console.log("save ho gaya in local storage")
	}


	// for date and city
	if (dob === "" || city === "") {
		console.log(loginEmail + "corect")
		document.querySelector('#error_msg2').innerText = "please fill this input feild";
		document.querySelector('#error_msg2').style.color = 'red';
	}
	if (dob !== "" && city !== "") {
		console.log("correct")
		// document.querySelector('#error_msg2').innerText = "";
		document.querySelector('#error_msg2').style.display = 'none';
	}


}