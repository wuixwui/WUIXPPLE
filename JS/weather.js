const API_key = "103b044b3af7e9f56ec2cce893a7f5fb";
const weather = document.querySelector(".today__weather");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `(${data.name}) ${data.weather[0].main}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
