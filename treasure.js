navigator.geolocation;


const field = document.querySelector("p");

navigator.geolocation.watchPosition(success,error);


function success(position){
    console.log(position);
    
    
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    

    const rlat = latitude + Math.random() /10;
    const rlon = longitude + Math.random() /10;
    
    

    console.log(rlat+"   " + rlon + "\n");
    console.log(calculateDistance(latitude,longitude,47.958017, 16.524730));

    field.innerHTML= Math.round(calculateDistance(latitude,longitude,47.958017, 16.524730));

}

function error(){
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









    /*
    var R = 6371;
    var dLat = toRads(lat2-lat1);
    var dLon = toRads(lon2-lon1);
    var rLat1 = toRads(lat1);
    var rLat2 = toRads(lat2);

    var a= Math.sin(dLat/2)*Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) *Math.cos(rLat1) * Math.cos(rLat2);
    var dist = 2* Math.atan2(Math.sqrt(a),Math.sqrt(1-a));*/

    return dist;
}


function toRads(deg){
    return (deg * Math.PI /180);    //wandelt grad in radianten um
}