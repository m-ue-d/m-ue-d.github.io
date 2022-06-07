const add= document.querySelector("#todo-add");
const liste = document.querySelector("#todo-liste");
const removeBtn = document.querySelector("#todo-delete");

let gespeicherteElemente= [];

if(localStorage.getItem('to-do-items')){
    gespeicherteElemente = JSON.parse(localStorage.getItem("to-do-items"));
    
    gespeicherteElemente.forEach((entry)=>{
        addEntry(entry);
    });
}

add.addEventListener('click',() => {
    const text = prompt("Was soll zur todo-list hinzugefügt werden?");
    const newItem = {text: text, status: "offen"};

    addEntry(newItem);
    gespeicherteElemente.push(newItem);

    saveToLocalStorage();
    
});

removeBtn.addEventListener("click",()=>{
    gespeicherteElemente.forEach((item,index) =>{
        if(item.status === "erledigt"){
            gespeicherteElemente.splice(index,1);

            saveToLocalStorage();            
        }

    })
});


function addEntry(item){
    const listItem = document.createElement("li");
    listItem.innerText=item.text;

    if(item.status == "erledigt"){
        listItem.classList.add('done');
    }

    listItem.addEventListener("click",()=>{
        listItem.classList.toggle("done");
        
        const index = gespeicherteElemente.indexOf(item);
        
        let neuerStatus= "offen";
        if(item.status == "offen"){
            neuerStatus= "erledigt";
        }

        gespeicherteElemente[index] = {text: item.text, status: neuerStatus};

        saveToLocalStorage();

    });
    liste.appendChild(listItem);
}

function saveToLocalStorage(){
    localStorage.setItem("to-do-items", JSON.stringify(gespeicherteElemente));
}



//BIN BEI VID 6, er hat aber bug drin beim ersten speichern =(
