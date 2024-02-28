let temperature_element = document.getElementById("temperature");
let weather_icon = document.getElementById("icon");

const sunny = ["113"];
const cloudy = ["119", "122", "143", "248", "260"];
const partly_cloudy = ["116"];
const rain = ["302", "308", "305", "299", "266", "263", "293", "296", "359"];
const snow = ["227", "230", "182", "185", "362", "365", "377", "320", "323", "326", "311", "314", "317", "395", "179"];
const thundery = ["200", "386", "389", "392", "395"];

async function fetchWeather() {
    let src;

    let res = await fetch("https://wttr.in/Anderlecht?format=j1");
    let data = await res.json();

    let temperature = data["current_condition"][0]["temp_C"];
    let code = data["current_condition"][0]["weatherCode"];

    temperature_element.innerText = temperature + " °C";

    if (sunny.includes(code)) {
        src = "images/sunny.svg";
    } else if (cloudy.includes(code)) {
        src = "images/cloudy.svg";
    } else if (partly_cloudy.includes(code)) {
        src = "images/partly-cloudy.svg"
    } else if (rain.includes(code)) {
        src = "images/rain.svg";
    } else if (snow.includes(code)) {
        src = "images/snow.svg";
    } else if (thundery.includes(code)) {
        src = "images/thundery.svg";
    }

    weather_icon.src = src;
}

fetchWeather();