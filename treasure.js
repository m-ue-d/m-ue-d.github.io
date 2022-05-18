navigator.geolocation;


const field = document.querySelector("p");
const root = document.querySelector(":root");
const style = getComputedStyle(root);

var rlat=1.0;          //idee: speicher das im Localstorage, und ändere es per button-click
var rlon=1.0;

navigator.geolocation.watchPosition(success,error);


function success(position){
    console.log(position);
    
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    

    //gespeicherteElemente = JSON.parse(localStorage.getItem("to-do-items"));
    
    if(localStorage.length==2){       
        rlat = JSON.parse(localStorage.getItem("latitude"));
        rlon = JSON.parse(localStorage.getItem("longitude"));
    }
    else{
        rlat = latitude + Math.random() /10;
        rlon = longitude + Math.random() /10;
        saveToLocalStorage();
    }

    const distance = Math.round(calculateDistance(latitude,longitude,rlat,rlon));


    field.innerHTML= distance;

    var map = 100- (distance / 100);
    if(map < 0 || map > 100)
        map=0;
    console.log(map);
    map = Math.round(map);
    root.style.setProperty("--bg-color", `hsl(${map}deg, 76%, 68%)`);

    if(distance <= 15){
        field.innerHTML= "FERTIG";
    }

}

function error(){
    field.innerHTML= "ERROR, GPS PERMISSION NEEDED"
    console.log("error");
};



function calculateDistance(lat1, lon1, lat2, lon2,){
    var rLat1 = toRads(lat1);
    var rLat2 = toRads(lat2);
    var rTheta = toRads(lon1-lon2);
    var dist = Math.sin(rLat1) * Math.sin(rLat2) + Math.cos(rLat1) * Math.cos(rLat2) * Math.cos(rTheta);
    if(dist > 1){
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;    //toDegs
    dist = dist * 60 * 1.1515 * 1609.344;


    return dist;
}


function toRads(deg){
    return (deg * Math.PI /180);    //wandelt grad in radianten um
}

function saveToLocalStorage(){
    localStorage.setItem("latitude", JSON.stringify(rlat));
    localStorage.setItem("longitude", JSON.stringify(rlon));
}
