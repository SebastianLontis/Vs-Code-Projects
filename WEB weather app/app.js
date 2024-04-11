const apiKey = '99e754536fff9292551475a38372ee9a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-button');

async function fetchWeather(city) {
  const url = `${apiUrl}?q=${city}&units=metric&appid=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Weather data not available for the specified city');
    }
    const data = await response.json();

    console.log(data);
    document.querySelector('.city').innerText = data.name;
    document.querySelector('.temp').innerText = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerText = data.main.humidity + '%';
    document.querySelector('.wind').innerText = Math.round(data.wind.speed) + ' km/h';
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
}

searchButton.addEventListener('click', () => {
  const city = searchInput.value;
  fetchWeather(city);
});

fetchWeather('Sibiu'); 
