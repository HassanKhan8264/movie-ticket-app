const moviesNames = [
    { 
        name: "beast"
    },
    { 
        name: "thor love and thunder"
    },
    { 
        name: "london"
    },
    { 
        name: "top gun"
    },

]
const check = () => {
    let input = document.getElementById("userinput").value;
    let convertLower = input.toLowerCase()
    // let data = moviesNames.find((e) => console.log(e.name))
    for(var key in moviesNames){   
    if(convertLower === moviesNames[key].name){

        console.log(moviesNames[key].name)
        document.querySelector("#searched_movie") = moviesNames[key]
        document.querySelector(".movie").style.display = 'none'
    }
    }
    
    // if(i === convertLower.value){
    //     console.log(i)
    //     msg.innerText = "shai hai"
    //     return i
    //     // if(convertLower !== e.name){
    //     // }
    // }
}

    
// }

// const array = [1, 2, 3, 4, 5, 6, 6]
// let data = array.find((e) => e === '6')