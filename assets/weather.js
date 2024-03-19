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
    const icon = data.weather[0].icon;
    // var iconUrl = "http:openweathermap.org/img/w/" + icon + ".png";
    const location = data.name; 
    const wind = data.wind.speed;
    const humidity = data.main.humidity; 
    var days = data.dt;
          var dateObject = dayjs.unix(days)
          var formatDate = dateObject.format('MMMM D, YYYY')
    


    outputElement.innerHTML = `<h3> ${location}  (${formatDate})</h3>
                               <p>Temperature: ${temperature}°F</p> 
                               <p>Wind: ${wind} MPH</p>
                               <p>Humidity: ${humidity} %</p>
                               <img>${icon}
                               `;
                               

  })
  .catch(error => {
    console.error('Error:', error);
  });
  console.log()
} )




searchBtn.addEventListener('click', function(){
  var cityName = document.getElementById('userInput').value
  var apiUrl = 'https://api.openweathermap.org/data/2.5/forecast/?q=' + cityName + '&appid=' + apiKey + '&units=imperial' + '&cnt=40';
  
  var firstDay = document.getElementById('day1'); 
  
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data)
      var days = data.list[7].dt;
          var dateObject = dayjs.unix(days)
          var formatDate = dateObject.format('dddd')

      day1 =  data.list.slice(6,13)
      console.log(day1)
      var temperatureArray = [data.list[6].main.temp,
                              data.list[7].main.temp,
                              data.list[8].main.temp,
                              data.list[9].main.temp,
                              data.list[10].main.temp,
                              data.list[11].main.temp,
                              data.list[12].main.temp,
                              data.list[13].main.temp,
                            ]
      var maxTemp = Math.max(...temperatureArray);
      console.log(maxTemp)

      var windArray = [data.list[6].wind.speed,
                              data.list[7].wind.speed,
                              data.list[8].wind.speed,
                              data.list[9].wind.speed,
                              data.list[10].wind.speed,
                              data.list[11].wind.speed,
                              data.list[12].wind.speed,
                              data.list[13].wind.speed,
                            ]
      var maxWind = Math.max(...windArray);
      console.log(maxWind)

      var humidityArray = [data.list[6].main.humidity,
                              data.list[7].main.humidity,
                              data.list[8].main.humidity,
                              data.list[9].main.humidity,
                              data.list[10].main.humidity,
                              data.list[11].main.humidity,
                              data.list[12].main.humidity,
                              data.list[13].main.humidity,
                            ]
      var maxHumidity = Math.max(...humidityArray);
      console.log(maxHumidity)
  
  
      firstDay.innerHTML =  `<p> ${formatDate} </p>
                              <p>Temperature: ${maxTemp}°F</p>
                               <p>Wind: ${maxWind} MPH</p>
                               <p>Humidity: ${maxHumidity} %</p>
                                
                                `;
     
     var secondDday = document.getElementById('day2')
     var days = data.list[15].dt;
     var dateObject = dayjs.unix(days)
     var formatDate = dateObject.format('dddd')
                      
        day2 =  data.list.slice(14,21)
        console.log(day2)
      var temperatureArray = [data.list[14].main.temp,
                              data.list[15].main.temp,
                              data.list[16].main.temp,
                              data.list[17].main.temp,
                              data.list[18].main.temp,
                              data.list[19].main.temp,
                              data.list[20].main.temp,
                              data.list[21].main.temp,
                              ]
      var maxTemp = Math.max(...temperatureArray);
      console.log(maxTemp)
                      
      var windArray = [data.list[14].wind.speed,
                            data.list[15].wind.speed,
                            data.list[16].wind.speed,
                            data.list[17].wind.speed,
                            data.list[18].wind.speed,
                            data.list[19].wind.speed,
                            data.list[20].wind.speed,
                            data.list[21].wind.speed,
                            ]
      var maxWind = Math.max(...windArray);
      console.log(maxWind)
                      
      var humidityArray = [data.list[14].main.humidity,
                            data.list[15].main.humidity,
                            data.list[16].main.humidity,
                            data.list[17].main.humidity,
                            data.list[18].main.humidity,
                            data.list[19].main.humidity,
                            data.list[20].main.humidity,
                            data.list[21].main.humidity,
                            ]
      var maxHumidity = Math.max(...humidityArray);
      console.log(maxHumidity)
                        
                        
      secondDday.innerHTML =  `<p> ${formatDate} </p>
                               <p>Temperature: ${maxTemp}°F</p>
                               <p>Wind: ${maxWind} MPH</p>
                               <p>Humidity: ${maxHumidity} %</p>                     
                                 `; 
})
    .catch(error => {
      console.error('Error:', error);
    });
    console.log()

    var cityList = localStorage.setItem('user', cityName)
    var cityArray = []

  
  } )

  