const apiKey = '5a51afcc1b30877aabfe03da14554523';

var searchBtn = document.getElementById('searchBtn')
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}`;

searchBtn.addEventListener('click', function(){
var cityName = document.getElementById('userInput').value
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=imperial';

var outputElement = document.getElementById('resultPage'); 

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data)
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const location = data.name; 
    const wind = data.wind.speed;
    const humidity = data.main.humidity; 
    


    outputElement.innerHTML = `<h3> ${location} </h3>
                               <p>Temperature: ${temperature}°F</p>
                               <p>Weather: ${description}</p> 
                               <p>Wind: ${wind} MPH</p>
                               <p>Humidity: ${humidity} %</p>`;
                               

  })
  .catch(error => {
    console.error('Error:', error);
  });
  console.log()
} )




searchBtn.addEventListener('click', function(){
  var cityName = document.getElementById('userInput').value
  var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast/?q=' + cityName + '&appid=' + apiKey + '&units=imperial' + '&cnt=5';
  
  var forecastEl = document.getElementById('forecast'); 
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
   
      

      // const description = data.weather[0].description;
      // const wind = data.wind.speed;
      // const humidity = data.main.humidity; 
  
  
      //  forecastEl.innerHTML 
   
                                 
  
    })
    .catch(error => {
      console.error('Error:', error);
    });
    console.log()
  } )