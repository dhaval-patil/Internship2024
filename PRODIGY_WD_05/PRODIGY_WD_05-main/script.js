const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');

async function getWeather(city) {
    var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=cada2711d8dc9d745fd39ef91d30a4a4&units=metric`);
    if (res.status == 404) {
        document.querySelector('.error').style.display = "block";
    } else {
        document.querySelector('.error').style.display = "none";

    }
    var data = await res.json();

    console.log(data);
    document.querySelector('.celcius').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidityP').innerHTML = Math.round(data.main.humidity) + "%";
    document.querySelector('.windS').innerHTML = Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main == 'Clouds') {
        image.src = "./images/clouds.png"
    } else if (data.weather[0].main == 'Clear') {
        image.src = "./images/clear.png"
    } else if (data.weather[0].main == 'Rain') {
        image.src = "./images/rain.png"
    } else if (data.weather[0].main == 'Drizzle') {
        image.src = "./images/drizzle.png"
    } else if (data.weather[0].main == 'mist') {
        image.src = "./images/mist.png"
    }
}

searchBtn.addEventListener('click', () => {
    getWeather(searchInput.value);
})