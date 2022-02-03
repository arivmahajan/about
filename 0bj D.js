var x = document.getElementById("weather");
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(weatherdata);
} else { 
  x.innerHTML = "Geolocation not supported by browser";
}

function weatherdata(position) {
fetch('https://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&units=metric&appid=b2c336bb5abf01acc0bbb8947211fbc6')
.then(response => response.json())
.then(data => {
console.log(data);
const icon =data.weather[0].icon;
var dark=icon.match(/\d/g);
dark = dark.join("");
document.getElementById("weather").innerHTML = 
'<a href="0w.htm" target="_blank"><h4> wind speed : '+data.wind.speed + 
'<br>humidity : '+data.main.humidity + 
'<br>temprature : '+data.main.temp +' °C <br>' +
'weather : '+data.weather[0].main+'<br><br>Click to see project</h4></a>'
});
}