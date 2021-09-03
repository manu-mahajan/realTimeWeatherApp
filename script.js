// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const weatherApi = {
    key: "08478331ec89f7e957932150e9c5e9d9",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}

const searchInput = document.getElementById("searchbar");

searchInput.addEventListener('keypress', (event) => {

    if (event.key == "Enter") {
        console.log(searchInput.value);
        getWeather(searchInput.value)
    }
})

function getWeather(city) {
    fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json()
        }).then(showWeather);
}

function showWeather(weather){
    console.log(weather)

    let city = document.getElementById("city");
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temp = document.getElementById("temp")
    temp.innerText = `${weather.main.temp}`;

    let condition = document.getElementById("condition");
    condition.innerText = `${weather.weather[0].description}`;
    
    let precipition = document.getElementById("prec");
    precipition.innerText = `${weather.main.humidity}% Humidity`;
    
    let winds = document.getElementById("wind");
    winds.innerText = `${weather.wind.speed} km/h Winds`;

    let image = document.getElementById("image");
    if(weather.weather[0].id < 300 && weather.weather[0].id >= 200){
        image.src = "./images/thunder.svg";
    }
    else if(weather.weather[0].id < 400 && weather.weather[0].id >= 300){
        image.src = "./images/rainy-1.svg";
    }
    else if(weather.weather[0].id < 600 && weather.weather[0].id >= 500){
        image.src = "./images/rainy-7.svg";
    }
    else if(weather.weather[0].id < 700 && weather.weather[0].id >= 600){
        image.src = "./images/snowy-6.svg";
    }
    else if(weather.weather[0].id < 800 && weather.weather[0].id > 700){
        image.src = "./images/cloudy-day-1.svg";
    }
    else if(weather.weather[0].id < 900 && weather.weather[0].id > 800){
        image.src = "./images/cloudy.svg";
    }
    else if(weather.weather[0].id == 800){
        image.src = "./images/day.svg";
    }


}
