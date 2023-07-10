function displayCard({fruits}){
    for(let specifics of fruits){
     let card = document.createElement("div")
     card.classList.add("fruit")
     let specs = document.createElement("ul")
     let name = document.createElement("li")
     name.innerText = specifics.name
     let family = document.createElement("li")
     family.innerText = specifics.family
     let order = document.createElement("li")
     order.innerText = specifics.order
     let genus = document.createElement("li")
     genus.innerText = specifics.genus
     let calories = document.createElement("li")
     calories.innerText = specifics.calories
     let fat= document.createElement("li")
     fat.innerText = specifics.fat
     let sugar = document.createElement("li")
     sugar.innerText = specifics.sugar
     let protein = document.createElement("li")
     protein.innerText = specifics.protein
     let carbs = document.createElement("li")
     carbs.innerText = specifics.carbohydrates
        card.append(specs,name,family,order,genus,calories,fat,sugar,protein, carbs)
     let display = document.querySelector(".display")
     display.append(card)
    }

}

fetch("https://www.fruityvice.com/api/fruit/all")
  .then((response) => response.json())
  .then((JSONresponse) => console.log(JSONresponse))
  .catch((err) => {
    console.log(err);
  });