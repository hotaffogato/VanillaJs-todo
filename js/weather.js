
const API_KEY ="4f421e533963bad7444d7b2f2b999152";

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:last-child");
       
        city.innerText = data.name;
        weather.innerText =`${data.main.temp}${"C"} / ${data.weather[0].main}`;
    } );
}

function onGeoError(){
    console.log("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);