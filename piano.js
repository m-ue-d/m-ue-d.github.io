const box = document.querySelector("#TastenBox");
let sounds= [];
const tasten= ["q","2","w","3","e","r","5","t","6","z","7","u","z","y","s","x","d","c","v","g","b","h","n","j","m"];


/*Dem Body werden hier 2 KeyEvents gegeben. Ein KeyUp und ein KeyDown. 
Im KeyDown wird gespielt(Wenn dieser Ton nicht schon gespielt wurde) 
und im KeyUp wird */
document.querySelector("body").addEventListener ("keydown", (evt) => {
    console.log(tasten);
    if(tasten.indexOf(evt.key)===-1)
        return;
        var audio = new Audio('assets/sounds/'+evt.key.toLowerCase()+'.mp3');
        if(!contains(audio)){
            sounds.push(audio);
            audio.play();

            //Background-Color
            box.children[tasten.indexOf(evt.key)].style.backgroundColor= "skyblue";
        }
});
document.querySelector("body").addEventListener ("keyup", (evt) => {
    if(tasten.indexOf(evt.key)===-1)
        return;
        var audio = new Audio('assets/sounds/'+evt.key.toLowerCase()+'.mp3');
        sounds.forEach((item,index) =>{
            if(item.src === audio.src){
                sounds.splice(index,1);  
                //Backgournd-color      
                if(box.children[tasten.indexOf(evt.key)].classList.contains("wTaste")) 
                    box.children[tasten.indexOf(evt.key)].style.backgroundColor= "white";
                else
                    box.children[tasten.indexOf(evt.key)].style.backgroundColor= "black";
            }
    
        });

});


function contains(audio){
    var found = false;
    for(var i = 0; i < sounds.length; i++) {
        if (sounds[i].src == audio.src) {
            found = true;
            break;
        }
    }
    return found;
}
