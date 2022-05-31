const API_KEY = 'fc7c624b1d86597b7117e136e9223924';
const weatherText = document.querySelector('#weather');
const COORDS = 'coords';

function setWeather() {
  const coords = JSON.parse(localStorage.getItem(COORDS));
  const lat = coords.lat;
  const lon = coords.lon;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then(res => {
      return res.json();
    })
    .then(result => {
      const temp = result.main.temp;
      const name = result.name;
      weatherText.textContent = `${temp}℃, ${name}`;
    })
    .catch(err => {
      console.log(err);
    });
}

if (localStorage.getItem(COORDS) === null) {
  window.navigator.geolocation.getCurrentPosition((response) => {
    // storeCoords(response.coords.latitude, response.coords.longitude);
    localStorage.setItem(COORDS, JSON.stringify( 
      {
        lat: response.coords.latitude,
        lon: response.coords.longitude
      } 
    ));
  });
}

setWeather();
