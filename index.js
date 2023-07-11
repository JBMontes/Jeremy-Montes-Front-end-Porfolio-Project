
function displayCard(results){
    let div =  document.createElement("div")
    div.classList.add("number")
    let number = document.createElement("p")
    number.classList.add("num")
    number.innerText = results.number
    let type = document.createElement("p")
    type.classList.add("type")
    type.innerText = results.type.toUpperCase()
    let text = document.createElement("p")
    text.classList.add("text")
    text.innerText = results.text
    div.append(type, number,  text)
   let display = document.querySelector(".display")
   display.append(div)

}


fetch("http://numbersapi.com/random/year?json")
.then((response)=>response.json())
.then((JSONresponse)=> {return displayCard(JSONresponse)})

.catch((err)=>{ 
    console.log(err);
 });

 function displayCard2(results){
    let div =  document.createElement("div")
    div.classList.add("number")
    let number = document.createElement("p")
    number.classList.add("num")
    number.innerText = results.number
    let type = document.createElement("p")
    type.classList.add("type")
    type.innerText = results.type.toUpperCase()
    let text = document.createElement("p")
    text.classList.add("text")
    text.innerText = results.text
    div.append(type, number,  text)
   let display = document.querySelector(".display")
   display.append(div)

}

fetch("http://numbersapi.com/random/year?json")
.then((response)=>response.json())
.then((JSONresponse)=> {return displayCard2(JSONresponse)})

.catch((err)=>{ 
    console.log(err);
 });

 function displayCard3(results){
    let div =  document.createElement("div")
    div.classList.add("number")
    let number = document.createElement("p")
    number.classList.add("num")
    number.innerText = results.number
    let type = document.createElement("p")
    type.classList.add("type")
    type.innerText = results.type.toUpperCase()
    let text = document.createElement("p")
    text.classList.add("text")
    text.innerText = results.text
    div.append(type, number, text)
   let display = document.querySelector(".display")
   display.append(div)

}

fetch("http://numbersapi.com/random/year?json")
.then((response)=>response.json())
.then((JSONresponse)=> {return displayCard3(JSONresponse)})

.catch((err)=>{ 
    console.log(err);
 });
let form = document.querySelector("form")
 form.addEventListener("submit", (e) => {
    console.log(e.target);
    e.preventDefault();
    
    let div =  document.createElement("div")
    div.classList.add("number")
    let year = document.createElement("p")
    year.classList.add("year")
    year.innerText = "YEAR"
    let number = document.createElement("p")
    number.classList.add("num")
    number.innerText = e.target["year"].value
    let fact = document.createElement("p")
    fact.classList.add("text")
    fact.innerText = e.target["fact"].value
    let button = document.createElement("button")
    button.classList.add("button") 
    button.innerText = "✖︎"
    button.addEventListener("click", (e)=>{
        e.preventDefault();
        e.target.parentElement.remove()
    })
    div.append(year, number, fact, button)
    document.querySelector(".display").append(div)

    e.target.reset();

 });

 let footer = document.querySelector("footer")
 footer.addEventListener("click", (e)=>{

 })

 let more = document.querySelector(".more")
 more.addEventListener("click", (e)=>{

    function displayCard3(results){
        let div =  document.createElement("div")
        div.classList.add("number")
        let number = document.createElement("p")
        number.classList.add("num")
        number.innerText = results.number
        let type = document.createElement("p")
        type.classList.add("type")
        type.innerText = results.type.toUpperCase()
        let text = document.createElement("p")
        text.classList.add("text")
        text.innerText = results.text
        div.append(type, number, text)
       let display = document.querySelector(".display")
       display.append(div)
    
    }
    
    fetch("http://numbersapi.com/random/year?json")
    .then((response)=>response.json())
    .then((JSONresponse)=>  displayCard3(JSONresponse))
    
    .catch((err)=>{ 
        console.log(err);
     });
 })