// search for movies
const moviesNames = [
    { 
        name: "This Item is not available",
        // img: document.getElementById("else").src
    },
     { 
        name: "365 days",
        img: document.getElementById("365days").src
    },
     { 
        name: "along for the ride",
        img: document.getElementById("along").src
    },
    { 
        name: "ambulance",
        img: document.getElementById("ambulance").src
    },
    { 
        name: "twin",
        img: document.getElementById("twin").src

    },
    { 
        name: "bluey",
        img: document.getElementById("bluey").src
    },
    { 
        name: "breaking bad",
        img: document.getElementById("breakingbad").src
    },
    { 
        name: "batman",
        img: document.getElementById("batman").src
    },
    { 
        name: "spiderman",
        img: document.getElementById("spiderman").src
    },
    { 
        name: "uncharted",
        img: document.getElementById("uncharted").src
    },
    { 
        name: "our father",
        img: document.getElementById("ourfather").src
    },
    { 
        name: "ghost",
        img: document.getElementById("ghost").src
    },
    { 
        name: "the lost city",
        img: document.getElementById("lostcity").src
    },
 
 

]
const check = () => {
    let input = document.getElementById("userinput").value;
    let convertLower = input.toLowerCase()
    let searchmovie = document.getElementById("searched_movie")
    let moviename2 = document.getElementById("moviename2")
    // let cancelbtn = document.getElementById("cancelbtn")
    let left = document.getElementById("left")
    let searchName = document.getElementById("para")
    let searchImg = document.getElementById("img")
    let img = document.getElementById("else")
   
    

    console.log(movie)
    if(convertLower !== moviesNames.name){
        console.log(moviesNames[0].name)
        console.log(moviesNames[0].img)
        searchName.innerHTML = moviesNames[0].name
        searchImg.src = moviesNames[0].img
        left.style.display = 'none'
        searchmovie.style.display = "block"
        moviename2.style.display = "none"
        // right.style.display = "none"
    }
    for(var key in moviesNames){   
    if(convertLower === moviesNames[key].name){
        // moviesNames[0].name.style.display = "none"
        // moviesNames[0].img.style.display = "none"
        searchmovie.style.display = "block"
        moviename2.style.display = "flex"
        // cancelbtn.style.display = "block"
        // right.style.display = "none"
        img.style.display = "none"
        searchmovie.classList.add("searched_movie")
        searchName.innerHTML = ""
        // searchImg.classList.add("searchimg")
        searchImg.src = moviesNames[key].img
        console.log( moviesNames[key].name)
        console.log( moviesNames[key].img)
        left.style.display = 'none'
        // for(var i = 0; i < left.length;i++){
        //     console.log(moviesNames[key].name)
        //     console.log(left)
    }
}
return;
    
    // if(i === convertLower.value){
    //     console.log(i)
    //     msg.innerText = "shai hai"
    //     return i
    //     // if(convertLower !== e.name){
    //     // }
    // }
}
// search for movie end



// cancel search_movie
const cancel = () => {
    let searchmovie = document.getElementById("searched_movie")
    let left = document.getElementById("left")
    // let right = document.getElementById("right")
    searchmovie.style.display = "none"
    left.style.display = 'flex'
    // right.style.display = 'block'

}
// cancel serach movie


// typewriter
//made by vipul mirajkar thevipulm.appspot.com
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    // css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
}

// typewriter end

// fucntion for changing page locatio


// message()
const message = () => {
    swal("Error","Go to next page for submit information")
}


