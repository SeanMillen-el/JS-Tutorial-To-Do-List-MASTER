// CODE EXPLAINED channel
// Select the elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");
// Classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";
//Variables
let LIST, id;
//Get item from local storage
let data = localStorage.getItem("TODO");
//Check if data is not empty
if(data){
    LIST = JSON.parse(data);
    id = LIST.length; //set the id to the last one in the list
    loadList(LIST); //load the list to the user interface
}else{ 
    //if data is not empty
    LIST = [];
    id = 0;
}

//Load items to the user's interface
function loadList(array){
    array.forEach(function(item){
        addToDo(item.name, item.id, item.done, item.trash);
    })
}
//clear the local storage
clear.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

// Show today's date
const options = { weekday: "long", month: "short", day: "numeric" };