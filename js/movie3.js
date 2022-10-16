// Checking For Seats In localStorage

function can() {
  var questions = localStorage.getItem("seats"); ///questions had been stored in local storage with another function
  console.log(questions);
  questions = $.parseJSON(questions);
  questions.pop();
  localStorage.setItem("seats", JSON.stringify(questions));
  // para.addEventListener("click", can())
  console.log("this is cancel");
  alert("Ticket Is cancel");
  window.location.reload(true);

  // let item = JSON.parse(localStorage.getItem("seats"));
  //  let id = document.getElementById(item[key]);
  // let para = id.childNodes[1];
  // para.addEventListener("click", can())
  // console.log("this is )
  // console.log("this is para two", p
  // let item = JSON.parse(localStorage.getItem("seats"));
  // for (let key in item) {
  //   // (item[key]);
  //   let id = document.getElementById(item[key]);
  //   let cancel = id.childNodes[1];
  //   console.log("this is para", cancel)
  // }
  // let item = JSON.parse(localStorage.getItem("seats"));
  // localstorage.removeItem(event.parentElement)
  // let item = JSON.parse(localStorage.getItem("seats"));
  // for (let key in item) {
  //   let id = document.getElementById(item[key]);
  //   localStorage.removeItem(id)

  // }
  // for (let key in item) {
  // let id = document.getElementById(item[key]);
  //  id.childNodes[1];
  // }
  // let old_data = JSON.parse(localStorage.getItem("seats"));
  // old_data.push(event.getAttribute("id"));
  // localStorage.removeItem(event.parentElement);
}
// calc()

function booked() {

  if (localStorage.getItem("seats") === null) {
    localStorage.setItem("seats", "[]");
  }
  if (localStorage.getItem("seats") !== null) {
    let item = JSON.parse(localStorage.getItem("seats"));
    for (let key in item) {
      // (item[key]);
      let id = document.getElementById(item[key]);
      let para = id.childNodes[1];
      para.setAttribute("onclick", "can()");
      para.setAttribute("id", "this");
      // console.log("this is para", para)
      // console.log("this is para two", para_2)
      let para_2 = id.childNodes[3];
      id.style.backgroundColor = "red";
      para_2.style.display = "none";
      para.style.display = "block";
      id.style.pointerEvents = "none";
    }
  }

}

// Seats Validation Function
const onSeat = (event) => {

  event.style.backgroundColor = "green";
  let para = event.childNodes[3];
  para.style.display = "block";
  let old_data = JSON.parse(localStorage.getItem("seats"));
  old_data.push(event.getAttribute("id"));
  localStorage.setItem("seats", JSON.stringify(old_data));

  let item = JSON.parse(localStorage.getItem("seats"));
  for (let key in item) {
  calc()
    let id = document.getElementById(item[key]);
    let cancel = id.childNodes[1];
    // cancel.setAttribute("onclick", "can()")

    setTimeout(() => {
      event.style.backgroundColor = "red";
      cancel.style.display = "block";
      para.style.display = "none";
      // window.location.reload(true);
    }, 1000);
  }

  // let cancel = id.childNodes[1];
  // console.log("this is para", cancel)
  // // console.log("this is para two", para_2)
  // let para_2 = id.childNodes[3];
  // id.style.backgroundColor = "red";
  // para_2.style.display = "none";
  // cancel.style.display = "block";
  // id.style.pointerEvents = "none"
};
// price()
  // calc()
  booked();
// can()
function calc() {
  let item = JSON.parse(localStorage.getItem("seats"));
  var price = document.getElementById("ticket_price").innerHTML;
  var noTickets = item.length;
  var total = parseFloat(price) * noTickets
  if (!isNaN(total))
    document.getElementById("total").innerHTML = total
}