const apiKey = "37561b89fcf04ec68345eec5881051f2"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchbtn = document.querySelector('.search button');
const weatherImage = document.querySelector('.weather-icon');

async function checkWeather(city){
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";
  }else {

    
    let data = await response.json();
    // console.log(data);
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/h';
    
    // if (data.weather[0].main == 'Clouds') {
    
    // }
    
    switch (data.weather[0].main) {
      case 'Clouds':
        weatherImage.src = 'images/clouds.png';
      break;
      case 'Clear':
        weatherImage.src = 'images/clear.png';
      break;
      case 'Drizzle':
          weatherImage.src = 'images/drizzle.png';
      break;
      case 'Humidity':
            weatherImage.src = 'images/humidity.png';
      break;
      case 'Mist':
              weatherImage.src = 'images/mist.png';
      break;
      case 'Rain':
                weatherImage.src = 'images/rain.png';
      break;
      case 'Snow':
                  weatherImage.src = 'images/snow.png';
      break;
      case 'Wind':
                    weatherImage.src = 'images/wind.png';
      break;    
      default:
                      weatherImage.src = 'images/clear.png';
      break;
    }
                  
      document.querySelector('.weather').style.display = "block";
      document.querySelector('.error').style.display = "none";
    }
};
                
  searchbtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
  })
                

// checkWeather();