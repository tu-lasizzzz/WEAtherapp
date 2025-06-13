const apiKey = 'YOUR_API_KEY_HERE'; // Replace with your real key

function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const weatherInfo = document.getElementById('weatherInfo');

  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("City not found");
      return res.json();
    })
    .then(data => {
      console.log(data); // Debugging

      document.getElementById('cityName').innerText = `${data.name}, ${data.sys.country}`;
      document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
      document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
      document.getElementById('icon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherInfo.classList.remove('hidden');
    })
    .catch(err => {
      console.error(err);
      weatherInfo.classList.add('hidden');
      alert(err.message);
    });
}
