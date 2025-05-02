async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = "08c3c7bb994a181455782a45f6809304";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById('weatherResult').innerHTML = "<p>City not found.</p>";
            return;
        }

        const html = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
            <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
            <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
            <p><strong>Forecast:</strong> ${data.weather[0].description}</p>
        `;

        document.getElementById('weatherResult').innerHTML = html;
    } catch (error) {
        console.error(error);
        document.getElementById('weatherResult').innerHTML = "<p>Error fetching data.</p>";
    }
}
