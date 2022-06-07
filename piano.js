const box = document.querySelector("#TastenBox");

const tasten=[{key:"q",tone:"C3"},{key:"2",tone:"C#3"},{key:"w",tone:"D3"},{key:"3",tone:"D#3"},{key:"e",tone:"E3"},
{key:"r",tone:"F3"},{key:"5",tone:"F#3"},{key:"t",tone:"G3"},{key:"6",tone:"G#3"},{key:"z",tone:"A3"},
{key:"7",tone:"A#3"},{key:"u",tone:"B3"},
{key:"i",tone:"C4"},{key:"9",tone:"C#4"},{key:"o",tone:"D4"},{key:"0",tone:"D#4"},{key:"p",tone:"E4"},
{key:"ü",tone:"F4"},{key:"+",tone:"F#4"},{key:"Delete",tone:"G4"},{key:"Home",tone:"G#4"},{key:"End",tone:"A4"},
{key:"PageUp",tone:"A#4"},{key:"PageDown",tone:"B4"},
{key:"y",tone:"C5"},{key:"s",tone:"C#5"},{key:"x",tone:"D5"},{key:"d",tone:"D#5"},{key:"c",tone:"E5"},
{key:"v",tone:"F5"},{key:"g",tone:"F#5"},{key:"b",tone:"G5"},{key:"h",tone:"G#5"},{key:"n",tone:"A5"},
{key:"j",tone:"A#5"},{key:"m",tone:"B5"},
];
const sounds=[];


// const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const synth = new Tone.PolySynth(Tone.Synth).toDestination();


/*Zuerst werden das ClickEvent für die tasten gemacht:*/
for(i=0;i<tasten.length;i++){
    box.children[i].addEventListener("click", (evt)=>{
        const now = Tone.now();
        box.children[evt.target.dataset.key].style.backgroundColor= "skyblue";
        synth.triggerAttack(tasten[evt.target.dataset.key].tone, now);
        synth.triggerRelease(tasten[evt.target.dataset.key].tone,now+0.2);
        background(evt);
    });
}

//lässt den Background-Change für 200ms warten 
function Sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
async function background(evt){
    await Sleep(200);
    if(box.children[evt.target.dataset.key].classList.contains("wTaste")) 
        box.children[evt.target.dataset.key].style.backgroundColor= "white";
    else
        box.children[evt.target.dataset.key].style.backgroundColor= "black";
}




/*Danach-> Dem Body werden hier 2 KeyEvents gegeben. Ein KeyUp und ein KeyDown. 
Im KeyDown wird gespielt(Wenn dieser Ton nicht schon gespielt wurde) 
und im KeyUp wird dieser dann wieder ausgemacht:*/
document.querySelector("body").addEventListener ("keydown", (evt) => {

    const now = Tone.now();
    var idx=-1;

    tasten.forEach((item,index)=>{
        if(item.key===evt.key){
            idx= index;
        }
    });

    if(idx===-1)
        return;
    if(!contains(idx)){
        box.children[idx].style.backgroundColor= "skyblue";
        synth.triggerAttack(tasten[idx].tone, now);
        sounds.push(idx);
    }
});
document.querySelector("body").addEventListener ("keyup", (evt) => {
    const now = Tone.now();
    var idx=-1;

    tasten.forEach((item,index)=>{
        if(item.key===evt.key){
            idx= index;
        }
    });
    
    if(idx===-1)
        return;

    sounds.forEach((item,index) =>{
        if(item === idx){
            sounds.splice(index,1);  
        }
    });  
    //Backgournd-color      
    if(box.children[idx].classList.contains("wTaste")) 
    box.children[idx].style.backgroundColor= "white";
    else
        box.children[idx].style.backgroundColor= "black";
    //Mit dem Ton aufhören
    synth.triggerRelease(tasten[idx].tone,now);

});


function contains(idx){
    for(var i = 0; i < sounds.length; i++) {
        if (sounds[i] === idx) {
            return true;
        }
    }

}