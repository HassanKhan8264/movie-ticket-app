
function login() {
	console.log(`signup function running`)
	let objectOfUserData = {
		userName: document.querySelector('#userName').value,
		password: document.querySelector('#password').value,
	}
	validation()
	var data = JSON.stringify(objectOfUserData)
	let toLower = data.toLowerCase()
	window.localStorage.setItem("user1", toLower);


}
function validation() {
	let loginEmail = document.querySelector('#userName').value
	let loginE = loginEmail.toLowerCase()

	let loginPassword = document.querySelector('#password').value
	let loginP = loginPassword.toLowerCase()
	if (loginE === "" || loginP === "") {
		document.querySelector('#error_msg').innerText = "Fill all input fields";
		document.querySelector('#error_msg').style.color = 'red';
	}
	if (loginE !== "" && loginP !== "") {
		window.location.href = "./homepage.html"
	}
}


// function booked1(){
// 	let detailsDiv = document.getElementById("details")
// 	detailsDiv.style.display = "block"
// 	detaila1()
// 	document.getElementById("btna1").disabled = true
// 	document.getElementById("btna2").disabled = true
// 	document.getElementById("btna3").disabled = true
// 	let myStorageData = window.localStorage.getItem("user1");
//     let myData = JSON.parse(myStorageData)
//     // console.log(myData.email)
//     if (myData) {
//         let simpleArray = [myData]
//         // here is your code
//         // where you getting data from user by input's
//         let newData = { 
// 			seat_no0: document.getElementById("a1").innerHTML
// 			// seat_no1: document.getElementById(seat_id),
// 			// seat_no2: document.getElementById(seat_id)
//         }
//         simpleArray.push(newData)
// 		if(simpleArray[1].seat_no0){
// 			// alert(+""+)
// 			// count += 1;
// 			// console.log(count, simpleArray[0].username,simpleArray[1].seat_no0[1])
// 			localStorage.setItem('seat_a1', JSON.stringify(simpleArray[0].username))
// 			// document.getElementById(seat_id).style.backgroundColor = "white";
// 			console.log(simpleArray[1].seat_no0)
// 		}
//     } 
// }
// function remove1(){
// 	window.localStorage.removeItem('seat_a1')
// 	document.getElementById("btna1").disabled = false
// 	document.getElementById("btna2").disabled = false
// 	document.getElementById("btna3").disabled = false
// 	// document.getElementById("btna1").style.display = "flex"
// 	// document.getElementById("btna2").style.display = "flex"
// 	// document.getElementById("btna3").style.display = "flex"
// 	let detailsDiv = document.getElementById("details")
// 	detailsDiv.innerHTML = "";

// 	// btn2.disabled = true
// 	// let btn2
// 	// if(document.getElementById("a1").style.backgroundColor = "white"){
// 	// 	document.getElementById("a1").style.backgroundColor = "red"
// 	// }
// }


// function booked2(){
// 	// let remove2 = document.getElementById("remove2") 
// 	// remove2.style.display = "block"
// 	detaila2()
// 	document.getElementById("btna1").disabled = true
// 	document.getElementById("btna2").disabled = true
// 	document.getElementById("btna3").disabled = true
// 	let myStorageData = window.localStorage.getItem("user1");
//     let myData = JSON.parse(myStorageData)
//     // console.log(myData.email)
//     if (myData) {
//         let simpleArray = [myData]
//         // here is your code
//         // where you getting data from user by input's
//         let newData = { 
// 			seat_no0: document.getElementById("a2").innerHTML
// 			// seat_no1: document.getElementById(seat_id),
// 			// seat_no2: document.getElementById(seat_id)
//         }
//         simpleArray.push(newData)
// 		if(simpleArray[1].seat_no0){
// 			// alert(+""+)
// 			// count += 1;
// 			// console.log(count, simpleArray[0].username,simpleArray[1].seat_no0[1])
// 			localStorage.setItem('seat_a2', JSON.stringify(simpleArray[0].username))
// 			// document.getElementById(seat_id).style.backgroundColor = "white";
// 			console.log(simpleArray[1].seat_no0)
// 		}
//     } 
// }
// function remove2(){
// 	window.localStorage.removeItem('seat_a2')
// 	document.getElementById("btna1").disabled = false
// 	document.getElementById("btna2").disabled = false
// 	document.getElementById("btna3").disabled = false
// 	let detailsDiv = document.getElementById("details")
// 	detailsDiv.innerHTML = "";
// 	// if(document.getElementById("a1").style.backgroundColor = "white"){
// 	// 	document.getElementById("a1").style.backgroundColor = "red"
// 	// }
// }

// function booked3(){
// 	// let remove3 = document.getElementById("remove3") 
// 	// remove3.style.display = "block"
// 	detaila3()

// 	document.getElementById("btna1").disabled = true
// 	document.getElementById("btna2").disabled = true
// 	document.getElementById("btna3").disabled = true
// 	let myStorageData = window.localStorage.getItem("user1");
//     let myData = JSON.parse(myStorageData)
//     // console.log(myData.email)
//     if (myData) {
//         let simpleArray = [myData]
//         // here is your code
//         // where you getting data from user by input's
//         let newData = { 
// 			seat_no0: document.getElementById("a3").innerHTML
// 			// seat_no1: document.getElementById(seat_id),
// 			// seat_no2: document.getElementById(seat_id)
//         }
//         simpleArray.push(newData)
// 		if(simpleArray[1].seat_no0){
// 			// alert(+""+)
// 			// count += 1;
// 			// console.log(count, simpleArray[0].username,simpleArray[1].seat_no0[1])
// 			localStorage.setItem('seat_a3', JSON.stringify(simpleArray[0].username))
// 			// document.getElementById(seat_id).style.backgroundColor = "white";
// 			console.log(simpleArray[1].seat_no0)
// 		}
//     } 
// }
// function remove3(){
// 	window.localStorage.removeItem('seat_a3')
// 	document.getElementById("btna1").disabled = false
// 	document.getElementById("btna2").disabled = false
// 	document.getElementById("btna3").disabled = false
// 	let detailsDiv = document.getElementById("details")
// 	detailsDiv.innerHTML = "";
// 	// if(document.getElementById("a1").style.backgroundColor = "white"){
// 	// 	document.getElementById("a1").style.backgroundColor = "red"
// 	// }
// }

// const detaila1 = () => {
// 	// <button id="remove1" onclick="remove1()">cancel bokign for1</button>
// 	let detailsDiv = document.getElementById("details")
// 	let seatName = document.getElementById("a1")
// 	// detailsDiv.style.display = "block"
// 	// let remove1 = document.getElementById("remove1") 
// 	// remove1.style.display = "block"
// 	let myStorageData = window.localStorage.getItem("user1");
//     let myData = JSON.parse(myStorageData)


// 	let bookerName = document.createElement("h4")
// 	bookerName.innerHTML = `Owner ${myData.username}`

// 	let price = document.createElement("h4")
// 	price.innerHTML = `Tickets Price ${1000}`;

// 	let bookseat = document.createElement("h4")
// 	bookseat.innerHTML = seatName.innerHTML

// 	let proceed = document.createElement("div")
// 	proceed.innerHTML = "Proceed To Pay"
// 	proceed.setAttribute("onclick", "succeseful()")
// 	proceed.setAttribute("id", "remove1")

// 	let cancelBtn = document.createElement("div")
// 	cancelBtn.innerHTML = "Cancel booking"
// 	cancelBtn.setAttribute("onclick", "remove1()")
// 	cancelBtn.setAttribute("id", "remove1")



// 	detailsDiv.appendChild(bookerName)
// 	detailsDiv.appendChild(price)
// 	detailsDiv.appendChild(bookseat)
// 	detailsDiv.appendChild(proceed)
// 	detailsDiv.appendChild(cancelBtn)
// }
// const detaila2 = () => {
// 	// <button id="remove1" onclick="remove1()">cancel bokign for1</button>
// 	let detailsDiv = document.getElementById("details")
// 	let seatName = document.getElementById("a2")
// 	// detailsDiv.style.display = "block"
// 	// let remove1 = document.getElementById("remove1") 
// 	// remove1.style.display = "block"
// 	let myStorageData = window.localStorage.getItem("user1");
//     let myData = JSON.parse(myStorageData)


// 	let bookerName = document.createElement("h4")
// 	bookerName.innerHTML = `Owner ${myData.username}`

// 	let price = document.createElement("h4")
// 	price.innerHTML = `Tickets Price ${1000}`;


// 	let bookseat = document.createElement("h4")
// 	bookseat.innerHTML = seatName.innerHTML

// 	let proceed = document.createElement("div")
// 	proceed.innerHTML = "Proceed To Pay"
// 	proceed.setAttribute("onclick", "succeseful()")
// 	proceed.setAttribute("id", "remove1")

// 	let cancelBtn = document.createElement("div")
// 	cancelBtn.innerHTML = "Cancel booking"
// 	cancelBtn.setAttribute("onclick", "remove2()")
// 	cancelBtn.setAttribute("id", "remove1")



// 	detailsDiv.appendChild(bookerName)
// 	detailsDiv.appendChild(price)
// 	detailsDiv.appendChild(bookseat)
// 	detailsDiv.appendChild(proceed)
// 	detailsDiv.appendChild(cancelBtn)
// }
// const detaila3 = () => {
// 	// <button id="remove1" onclick="remove1()">cancel bokign for1</button>

// 	let detailsDiv = document.getElementById("details")
// 	let seatName = document.getElementById("a3")
// 	// detailsDiv.style.display = "block"
// 	// let remove1 = document.getElementById("remove1") 
// 	// remove1.style.display = "block"
// 	let myStorageData = window.localStorage.getItem("user1");
//     let myData = JSON.parse(myStorageData)


// 	let bookerName = document.createElement("h4")
// 	bookerName.innerHTML = `Owner ${myData.username}`

// 	let price = document.createElement("h4")
// 	price.innerHTML = `Tickets Price ${1000}`;

// 	let bookseat = document.createElement("h4")
// 	bookseat.innerHTML = seatName.innerHTML

// 	let proceed = document.createElement("div")
// 	proceed.innerHTML = "Proceed To Pay"
// 	proceed.setAttribute("onclick", "succeseful()")
// 	proceed.setAttribute("id", "remove1")

// 	let cancelBtn = document.createElement("div")
// 	cancelBtn.innerHTML = "Cancel booking"
// 	cancelBtn.setAttribute("onclick", "remove3()")
// 	cancelBtn.setAttribute("id", "remove1")



// 	detailsDiv.appendChild(bookerName)
// 	detailsDiv.appendChild(price)
// 	detailsDiv.appendChild(bookseat)
// 	detailsDiv.appendChild(proceed)
// 	detailsDiv.appendChild(cancelBtn)
// }

function succeseful() {
	swal("success Ticket is Booked");
	document.getElementById("btna1").disabled = false
	document.getElementById("btna2").disabled = false
	document.getElementById("btna3").disabled = false
	let detailsDiv = document.getElementById("details")
	detailsDiv.innerHTML = "";
}
// function chekc for sign up 
// let count = 0
const reserved = (seat_id) => {
	document.getElementById("btna1").disabled = true
	document.getElementById("btna2").disabled = true
	document.getElementById("btna3").disabled = true
	let myStorageData = window.localStorage.getItem("user1");
	let myData = JSON.parse(myStorageData)
	// console.log(myData.email)
	if (myData) {
		let simpleArray = [myData]
		// here is your code
		// where you getting data from user by input's
		let newData = {
			seat_no0: document.getElementById(seat_id).parentNode.innerText
			// seat_no1: document.getElementById(seat_id),
			// seat_no2: document.getElementById(seat_id)
		}
		simpleArray.push(newData)
		if (simpleArray[1].seat_no0) {
			// alert(+""+)
			// count += 1;
			console.log(simpleArray[0].username, simpleArray[1].seat_no0)
			localStorage.setItem('User Seat_no', JSON.stringify(simpleArray, simpleArray[1].seat_no0))
			console.log(simpleArray[1].seat_no0)

			let detailsDiv = document.getElementById("details")
			let seatName = document.getElementById("a3")
			// detailsDiv.style.display = "block"
			// let remove1 = document.getElementById("remove1") 
			// remove1.style.display = "block"
			let myStorageData = window.localStorage.getItem("user1");
			let myData = JSON.parse(myStorageData)


			let bookerName = document.createElement("h4")
			bookerName.innerHTML = `Owner ${myData.username}`

			let price = document.createElement("h4")
			price.innerHTML = `Tickets Price ${1000}`;

			let bookseat = document.createElement("h4")
			bookseat.innerHTML = seatName.innerHTML

			let proceed = document.createElement("div")
			proceed.innerHTML = "Proceed To Pay"
			proceed.setAttribute("onclick", "succeseful()")
			proceed.setAttribute("id", "remove1")

			let cancelBtn = document.createElement("div")
			cancelBtn.innerHTML = "Cancel booking"
			cancelBtn.setAttribute("onclick", "remove()")
			cancelBtn.setAttribute("id", "remove1")

			

			detailsDiv.appendChild(bookerName)
			detailsDiv.appendChild(price)
			detailsDiv.appendChild(bookseat)
			detailsDiv.appendChild(proceed)
			detailsDiv.appendChild(cancelBtn)

			// document.getElementById(seat_id).style.backgroundColor = "white";
		}



		// if(simpleArray[1].seat_no0){
		// 	localStorage.setItem('user2', JSON.stringify(simpleArray, simpleArray[1].seat_no0))

		// }

		// localStorage.setItem('user', JSON.stringify(simpleArray))

		// console.log(simpleArray[0].username, simpleArray[1])
		// if(simpleArray[1].seat_no1){
		// console.log(simpleArray[1].seat_no1)
		// }
		// if(simpleArray[1].seat_no2){
		// console.log(simpleArray[1].seat_no2)
		// }
	}
}
const remove = () =>{

	let detailsDiv = document.getElementById("details")
	window.localStorage.removeItem('User Seat_no')
	document.getElementById("btna1").disabled = false
	document.getElementById("btna2").disabled = false
	document.getElementById("btna3").disabled = false
	// document.getElementById("btna2").disabled = false
	// document.getElementById("btna3").disabled = false
	detailsDiv.innerHTML = "";
}
// simple user storage cycle......
// getting previous data
// let prev = localStorage.getItem("user")
// if (prev) {
//     prev = JSON.parse(prev);
// }


// const move_page = () => {
// 	window.location.href = "./index.html"
// }

// let myStorageData = window.localStorage.getItem("user1");
// let myData = JSON.parse(myStorageData)
// console.log(myData.email)


function show_password() {
	const pass1 = document.getElementById("password");
	if (pass1.type === "password") {
		pass1.type = "text";
	} else {
		pass1.type = "password";
	}
}

function logout() {
	// window.localStorage.clear()
	// swal("Are you sure", "cancel")
	window.location.href = "./index.html"


}

// how to display multiple data in over DOM
// ES6

// let div = document.getElementById('users')
// div.innerHTML = ""

// const setDataInDom = (myData) => {
//     for (let key in myData) {
//         div.innerHTML += `
//             <h3>${myData[key].name}</h3>
//         `
//     }
// }
