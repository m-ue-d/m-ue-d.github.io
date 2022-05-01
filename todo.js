const add= document.querySelector("#todo-add");
const liste = document.querySelector("#todo-liste");

let gespeicherteElemente= [];

if(localStorage.getItem("to-do-items")){
    gespeicherteElemente = JSON.parse(localStorage.getItem("to-do-items"));
    gespeicherteElemente.forEach((entry)=>{
        addEntry(entry);
    });
}

add.addEventListener("click",()=>{
    const text = prompt("was soll zur todo-list hinzugefügt werden?");

    addEntry(text);
    gespeicherteElemente.push(text);

    localStorage.setItem("to-do-items",JSON.stringify(gespeicherteElemente));
    
});

function addEntry(text){
    const listItem = document.createElement("li");
    listItem.innerText=text;
    listItem.addEventListener("click",()=>{
        listItem.classList.toggle("done");
    });
    liste.append(listItem);
}

const listItems = document.querySelectorAll("#toso-liste > li");

listItems.forEach((item) => {
    item.addEventListener("click",()=>{
        item.classList.toggle("done");
    });
});