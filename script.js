const apiKey = 'e548e8210c3e4a8ab37150439262105';

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherInfo = document.getElementById('weatherInfo');

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  // WeatherAPI URL
  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then(data => {
      console.log(data);

      // Display data
      document.getElementById('cityName').innerText =
        `${data.location.name}, ${data.location.country}`;

      document.getElementById('temperature').innerText =
        `Temperature: ${data.current.temp_c} °C`;

      document.getElementById('description').innerText =
        `Weather: ${data.current.condition.text}`;

      document.getElementById('icon').src =
        `https:${data.current.condition.icon}`;

      weatherInfo.classList.remove('hidden');
    })
    .catch(err => {
      console.error(err);
      weatherInfo.classList.add('hidden');
      alert(err.message);
    });
}
