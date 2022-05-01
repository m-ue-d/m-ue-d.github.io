const body = document.querySelector("body");
const h1 = document.querySelector("h1");

body.addEventListener("mousemove",(event)=>{
    const x= event.x;
    const y= event.y;

    const h= 360*(x /window.innerWidth);
    const s= "30%"
    const l= y /window.innerHeight*100;

    body.style.backgroundColor= "hsl("+h+","+s+","+l+"%)";
    h1.style.color= "hsl("+"-"+h+","+s+","+(100-l)+"%)";
});