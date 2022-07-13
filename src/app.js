// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;
var total_amount = 170;
//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

/*use for render ingredients*/


/*function for paddy*/
function renderPatty() {
  const top = document.createElement('img')
  top.src = "./img/Burger/Top@2x.png" 
  const burger = document.getElementById("ingredients");

  console.log("checked")
  let item = document.getElementById("patty");
  if(item == null){
  /*remove burger top bread*/
  burger.removeChild(burger.firstElementChild);
  /*add selected item*/
  item = document.createElement('img')
  item.src = "./img/Burger/Patty@2x.png";
  item.id = "patty"
  burger.prepend(item);
  /*add burger top*/
  burger.prepend(top);
  /*add price of item*/
  renderPrice("add", ingredients.Patty)
  }else{
    item.remove();
    /*substract price of item*/
    renderPrice("sub", ingredients.Patty)
  }
  renderIngredientsBoard("Patty")
}

function renderCheese() {
  const top = document.createElement('img')
  top.src = "./img/Burger/Top@2x.png" 
  const burger = document.getElementById("ingredients");

  let item = document.getElementById("cheese");
  if(item == null){
  /*remove burger top bread*/
  burger.removeChild(burger.firstElementChild);
  /*add selected item*/
  item = document.createElement('img')
  item.src = "./img/Burger/Cheese@2x.png";
  item.id = "cheese"
  burger.prepend(item);
  /*add burger top*/
  burger.prepend(top);
  /*add price of item*/
  renderPrice("add", ingredients.Cheese)
  }else{
    item.remove();
    /*substract price of item*/
    renderPrice("sub", ingredients.Cheese)
  }
  renderIngredientsBoard("Cheese")
}

function renderTomatoes() {
  const top = document.createElement('img')
  top.src = "./img/Burger/Top@2x.png" 
  const burger = document.getElementById("ingredients");

  let item = document.getElementById("tomato");
  if(item == null){
  /*remove burger top bread*/
  burger.removeChild(burger.firstElementChild);
  /*add selected item*/
  item = document.createElement('img')
  item.src = "./img/Burger/Tomato@2x.png";
  item.id = "tomato"
  burger.prepend(item);
  /*add burger top*/
  burger.prepend(top);
  /*add price of item*/
  renderPrice("add", ingredients.Tomatoes)
  }else{
    item.remove();
    /*substract price of item*/
    renderPrice("sub", ingredients.Tomatoes)
  }
  renderIngredientsBoard("Tomatoes")
}

function renderOnions() {
  const top = document.createElement('img')
  top.src = "./img/Burger/Top@2x.png" 
  const burger = document.getElementById("ingredients");

  let item = document.getElementById("onion");
  if(item == null){
  /*remove burger top bread*/
  burger.removeChild(burger.firstElementChild);
  /*add selected item*/
  item = document.createElement('img')
  item.src = "./img/Burger/Onion@2x.png";
  item.id = "onion"
  burger.prepend(item);
  /*add burger top*/
  burger.prepend(top);
  /*add price of item*/
  renderPrice("add", ingredients.Onions)
  }else{
    item.remove();
    /*substract price of item*/
    renderPrice("sub", ingredients.Onions)
  }
  renderIngredientsBoard("Onions");
}

function renderLettuce() {
  const top = document.createElement('img')
  top.src = "./img/Burger/Top@2x.png" 
  const burger = document.getElementById("ingredients");

  let item = document.getElementById("lettuce");
  if(item == null){
  /*remove burger top bread*/
  burger.removeChild(burger.firstElementChild);
  /*add selected item*/
  item = document.createElement('img')
  item.src = "./img/Burger/Lettuce@2x.png";
  item.id = "lettuce"
  burger.prepend(item);
  /*add burger top*/
  burger.prepend(top);
  /*add price of item*/
  renderPrice("add", ingredients.Lettuce)
  }else{
    item.remove();
    /*substract price of item*/
    renderPrice("sub", ingredients.Lettuce)
  }
  renderIngredientsBoard("Lettuce")
}

document.querySelector(".btn-patty").onclick = function () {
  renderPatty();
  renderButtons(".btn-patty")
};

// Trial 2 - Setup event listener for the cheese button
document.querySelector(".btn-cheese").onclick = function () {
  renderCheese();
  renderButtons(".btn-cheese")
};

// Trial 2 - Setup event listener for the tomatoes button
document.querySelector(".btn-tomatoes").onclick = function () {
  renderTomatoes();
  renderButtons(".btn-tomatoes")
};

// Trial 2 - Setup event listener for the onion button
document.querySelector(".btn-onions").onclick = function () {
  renderOnions();
  renderButtons(".btn-onions")
};

// Trial 2 - Setup event listener for the lettuce button
document.querySelector(".btn-lettuce").onclick = function () {
  renderLettuce();
  renderButtons(".btn-lettuce");
};

//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(button){
  const btn = document.querySelector(button)
  if(btn.classList.contains("active")){
    btn.classList.remove('active')
  }else{
    btn.classList.add('active')
  }
}

//Challenge 2 - Render only the items selected in the ingredients board based on the state

function renderPrice(mode, amount){
  let price = total_amount;
  if(mode == "add"){
    price += amount
  }else if(mode == "sub"){
    price -= amount
  }
  total_amount = price
  document.getElementById("payable").innerHTML="INR "+total_amount
}

function renderIngredientsBoard(item){
  /*const header = document.getElementById("heading")*/
  const list_ing =  document.getElementsByClassName("items")
  const newitem = document.createElement('p')
  newitem.className = "items"
  newitem.innerHTML = item
  console.log(list_ing)
  let flag = 0;
  for(let i =0;i<list_ing.length;i++){
      if(item == list_ing[i].innerHTML){
          list_ing[i].remove();
          flag = 1
      }
  }

  if(flag == 0){
    /*header.remove()*/
    document.getElementById("menu").appendChild(newitem)
    /*document.getElementById("menu").prepend(header)*/
  }

}



//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
