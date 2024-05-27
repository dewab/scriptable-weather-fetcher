// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-gray; icon-glyph: magic;
const apiKey = '<<API KEY>>'; // Your OpenWeatherMap API key
const zipCode = '<<ZIP CODE>>';

async function getWeather() {
    const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode},us&units=imperial&appid=${apiKey}`;

    try {
        const currentWeather = await getData(currentWeatherUrl);
        const forecast = await getData(forecastUrl);
        const outputText = createOutput(currentWeather, forecast);
        console.log(outputText);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

async function getData(url) {
    const request = new Request(url);
    const response = await request.loadJSON();     
    return response;
}

function createOutput(currentWeather, forecast) {
    let outputText = '';

    if (currentWeather.cod === 200 && forecast.cod === "200") {
        const { name, weather: currentWeatherInfo, main: { temp, humidity } } = currentWeather;
        outputText += `The current weather in ${name} is ${currentWeatherInfo[0].description.toLowerCase()}. The temperature is ${Math.round(temp)} °F with ${Math.round(humidity)}% humidity. `;

        const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
        const dailyForecast = forecast.list.filter(item => item.dt_txt.startsWith(today)); // Filter for forecast of the current day
        const forecastWeather = dailyForecast.map(item => item.weather[0].description.toLowerCase()).join(' and ');

        // Calculate the maximum temperature for today's forecast
        let maxTemp = Math.max(...dailyForecast.map(item => item.main.temp));

        // Calculate rain chance as a boolean indicating if rain is forecasted at any time today
        const rainChance = dailyForecast.some(item => item.weather[0].main.toLowerCase() === 'rain') ? 100 : 0;

        outputText += `Today's high is projected to be ${Math.round(maxTemp)}º and ${forecastWeather}, with a ${Math.round(rainChance)}% chance of rain.`;
    } else {
        outputText += 'Unable to retrieve weather data for the specified location.';
    }

    return outputText;
}

// Call the function to fetch weather data
getWeather();
