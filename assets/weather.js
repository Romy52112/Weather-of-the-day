const apiKey = '5a51afcc1b30877aabfe03da14554523';
var today = dayjs()
var searchBtn = document.getElementById('searchBtn')
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${cityName}&appid=${apiKey}`;
var storedList = JSON.parse(localStorage.getItem('listOfCity'))
if(!storedList){
  storedList = [];
}
console.log(storedList)

searchBtn.addEventListener('click', function(){
  var cityName = document.getElementById('userInput').value
var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey + '&units=imperial';

var resultPage = document.getElementById('resultPage'); 

storedList.push(cityName)
localStorage.setItem('listOfCity', JSON.stringify(storedList))
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
    var iconUrl = "http://openweathermap.org/img/w/" + icon + ".png"
    var newImg =document.getElementById('icon').src = iconUrl;
    newImg.src = iconUrl
    var imgDisplay = document.createElement('img')
    var showIcon = document.getElementById('iconDisplay')
    showIcon.appendChild(imgDisplay);   
    var location = data.name; 
    var wind = data.wind.speed;
    var humidity = data.main.humidity; 
    var days = data.dt;
          var dateObject = dayjs.unix(days)
          var formatDate = dateObject.format('MMMM D, YYYY')

    
   

resultPage.innerHTML = `<h3> ${location}  (${formatDate})</h3>
                               <p>Temperature: ${temperature}°F</p> 
                               <p>Wind: ${wind} MPH</p>
                               <p>Humidity: ${humidity} %</p>
                            
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

      // DAYONE
      var dayOne = today.add(1, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
          console.log(dayOne)
      var formatDate =dayOne
  
   var arrayDayOne = data.list.filter(list => list.dt_txt.startsWith(dayOne))
   console.log(arrayDayOne) 

   const icon = arrayDayOne[0].weather[0].icon;
   var iconUrl1 = "http://openweathermap.org/img/w/" + icon + ".png"
   console.log(iconUrl1)
   var newImg1 =document.getElementById('icon1').src = iconUrl1;
   console.log(newImg1)
   newImg1.src = iconUrl1
   var imgDisplay1 = document.createElement('img')
   var showIcon1 = document.getElementById('iconDisplay1')
   showIcon1.appendChild(imgDisplay1);   

      var temperatureArray = [arrayDayOne[0].main.temp,
                              arrayDayOne[1].main.temp,
                              arrayDayOne[2].main.temp,
                              arrayDayOne[3].main.temp,
                              arrayDayOne[4].main.temp,
                              arrayDayOne[5].main.temp,
                              arrayDayOne[6].main.temp,
                              arrayDayOne[7].main.temp,
                            ]
      var maxTemp = Math.max(...temperatureArray);
      // console.log(maxTemp)

      var windArray = [ arrayDayOne[0].wind.speed,
                        arrayDayOne[1].wind.speed,
                        arrayDayOne[2].wind.speed,
                        arrayDayOne[3].wind.speed,
                        arrayDayOne[4].wind.speed,
                        arrayDayOne[5].wind.speed,
                        arrayDayOne[6].wind.speed,
                        arrayDayOne[7].wind.speed,
                            ]
      var maxWind = Math.max(...windArray);
      // console.log(maxWind)

      var humidityArray = [ arrayDayOne[0].main.humidity,
                            arrayDayOne[1].main.humidity,
                            arrayDayOne[2].main.humidity,
                            arrayDayOne[3].main.humidity,
                            arrayDayOne[4].main.humidity,
                            arrayDayOne[5].main.humidity,
                            arrayDayOne[6].main.humidity,
                            arrayDayOne[7].main.humidity,
                            ]
      var maxHumidity = Math.max(...humidityArray);
      // console.log(maxHumidity)

     
  
  
      firstDay.innerHTML =  ` 
                              <h4> ${formatDate} </h4>
                              <p>Temperature: ${maxTemp}°F</p>
                               <p>Wind: ${maxWind} MPH</p>
                               <p>Humidity: ${maxHumidity} %</p>
                                
                                `;
     
   // DAYTwo
   var secondDay = document.getElementById('day2'); 
   var dayTwo = today.add(2, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
   console.log(dayTwo)
var formatDate =dayTwo
  



var arrayDayTwo = data.list.filter(list => list.dt_txt.startsWith(dayTwo))
console.log(arrayDayTwo) 
var temperatureArray = [arrayDayTwo[0].main.temp,
                        arrayDayTwo[1].main.temp,
                        arrayDayTwo[2].main.temp,
                        arrayDayTwo[3].main.temp,
                        arrayDayTwo[4].main.temp,
                        arrayDayTwo[5].main.temp,
                        arrayDayTwo[6].main.temp,
                        arrayDayTwo[7].main.temp,
                     ]
var maxTemp = Math.max(...temperatureArray);
// console.log(maxTemp)

var windArray = [ arrayDayTwo[0].wind.speed,
                  arrayDayTwo[1].wind.speed,
                  arrayDayTwo[2].wind.speed,
                  arrayDayTwo[3].wind.speed,
                  arrayDayTwo[4].wind.speed,
                  arrayDayTwo[5].wind.speed,
                  arrayDayTwo[6].wind.speed,
                  arrayDayTwo[7].wind.speed,
                     ]
var maxWind = Math.max(...windArray);
// console.log(maxWind)

var humidityArray = [ arrayDayTwo[0].main.humidity,
                      arrayDayTwo[1].main.humidity,
                      arrayDayTwo[2].main.humidity,
                      arrayDayTwo[3].main.humidity,
                      arrayDayTwo[4].main.humidity,
                      arrayDayTwo[5].main.humidity,
                      arrayDayTwo[6].main.humidity,
                      arrayDayTwo[7].main.humidity,
                     ]
var maxHumidity = Math.max(...humidityArray);
// console.log(maxHumidity)


secondDay.innerHTML =  ` 
                       <h4> ${formatDate} </h4>
                       <p>Temperature: ${maxTemp}°F</p>
                        <p>Wind: ${maxWind} MPH</p>
                        <p>Humidity: ${maxHumidity} %</p>
                         
                         `;

// DAYThree
var thirdDay = document.getElementById('day3'); 
var dayThree = today.add(3, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(dayThree)
var formatDate =dayThree




var arrayDayThree = data.list.filter(list => list.dt_txt.startsWith(dayThree))
console.log(arrayDayThree) 
var temperatureArray = [arrayDayThree[0].main.temp,
                        arrayDayThree[1].main.temp,
                        arrayDayThree[2].main.temp,
                        arrayDayThree[3].main.temp,
                        arrayDayThree[4].main.temp,
                        arrayDayThree[5].main.temp,
                        arrayDayThree[6].main.temp,
                        arrayDayThree[7].main.temp,
                  ]
var maxTemp = Math.max(...temperatureArray);
// console.log(maxTemp)

var windArray = [ arrayDayThree[0].wind.speed,
                  arrayDayThree[1].wind.speed,
                  arrayDayThree[2].wind.speed,
                  arrayDayThree[3].wind.speed,
                  arrayDayThree[4].wind.speed,
                  arrayDayThree[5].wind.speed,
                  arrayDayThree[6].wind.speed,
                  arrayDayThree[7].wind.speed,
                  ]
var maxWind = Math.max(...windArray);
// console.log(maxWind)

var humidityArray = [ arrayDayThree[0].main.humidity,
                      arrayDayThree[1].main.humidity,
                      arrayDayThree[2].main.humidity,
                      arrayDayThree[3].main.humidity,
                      arrayDayThree[4].main.humidity,
                      arrayDayThree[5].main.humidity,
                      arrayDayThree[6].main.humidity,
                      arrayDayThree[7].main.humidity,
                  ]
var maxHumidity = Math.max(...humidityArray);
// console.log(maxHumidity)


thirdDay.innerHTML =  ` 
                    <h4> ${formatDate} </h4>
                    <p>Temperature: ${maxTemp}°F</p>
                     <p>Wind: ${maxWind} MPH</p>
                     <p>Humidity: ${maxHumidity} %</p>
                      
                      `;

// DAYFour
var fourthDay = document.getElementById('day4'); 
var dayFour = today.add(4, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(dayFour)
var formatDate =dayFour




var arrayDayFour = data.list.filter(list => list.dt_txt.startsWith(dayFour))
console.log(arrayDayFour) 
var temperatureArray = [arrayDayFour[0].main.temp,
                        arrayDayFour[1].main.temp,
                        arrayDayFour[2].main.temp,
                        arrayDayFour[3].main.temp,
                        arrayDayFour[4].main.temp,
                        arrayDayFour[5].main.temp,
                        arrayDayFour[6].main.temp,
                        arrayDayFour[7].main.temp,
                  ]
var maxTemp = Math.max(...temperatureArray);
// console.log(maxTemp)

var windArray = [ arrayDayFour[0].wind.speed,
                  arrayDayFour[1].wind.speed,
                  arrayDayFour[2].wind.speed,
                  arrayDayFour[3].wind.speed,
                  arrayDayFour[4].wind.speed,
                  arrayDayFour[5].wind.speed,
                  arrayDayFour[6].wind.speed,
                  arrayDayFour[7].wind.speed,
                  ]
var maxWind = Math.max(...windArray);
// console.log(maxWind)

var humidityArray = [ arrayDayFour[0].main.humidity,
                      arrayDayFour[1].main.humidity,
                      arrayDayFour[2].main.humidity,
                      arrayDayFour[3].main.humidity,
                      arrayDayFour[4].main.humidity,
                      arrayDayFour[5].main.humidity,
                      arrayDayFour[6].main.humidity,
                      arrayDayFour[7].main.humidity,
                  ]
var maxHumidity = Math.max(...humidityArray);
// console.log(maxHumidity)


fourthDay.innerHTML =  ` 
                    <h4> ${formatDate} </h4>
                    <p>Temperature: ${maxTemp}°F</p>
                     <p>Wind: ${maxWind} MPH</p>
                     <p>Humidity: ${maxHumidity} %</p>
                      
                      `;

// DAYFive
var fifthDay = document.getElementById('day5'); 
var dayFive = today.add(5, 'day').format('YYYY' + '-' + 'MM' + '-' + 'D')
console.log(dayFive)
var formatDate =dayFive




var arrayDayFive = data.list.filter(list => list.dt_txt.startsWith(dayFive))
console.log(arrayDayFive) 
var temperatureArray = [arrayDayFive[0].main.temp,
                        arrayDayFive[1].main.temp,
                        arrayDayFive[2].main.temp,
                        arrayDayFive[3].main.temp,
                        
                  ]
var maxTemp = Math.max(...temperatureArray);
// console.log(maxTemp)

var windArray = [ arrayDayFive[0].wind.speed,
                  arrayDayFive[1].wind.speed,
                  arrayDayFive[2].wind.speed,
                  arrayDayFive[3].wind.speed,
                                    
                  ]
var maxWind = Math.max(...windArray);
// console.log(maxWind)

var humidityArray = [ arrayDayFive[0].main.humidity,
                      arrayDayFive[1].main.humidity,
                      arrayDayFive[2].main.humidity,
                      arrayDayFive[3].main.humidity,
                ]
var maxHumidity = Math.max(...humidityArray);
// console.log(maxHumidity)


fifthDay.innerHTML =  ` 
                    <h4> ${formatDate} </h4>
                    <p>Temperature: ${maxTemp}°F</p>
                     <p>Wind: ${maxWind} MPH</p>
                     <p>Humidity: ${maxHumidity} %</p>
                      
                      `;


})
    .catch(error => {
      console.error('Error:', error);
    });
    console.log()

    renderList()
  } )
  var list = document.getElementById('listOfCity')
  var listOfCity = [];

  function renderList(){
    list.innerHTML ="";
  
    for (var i=0; i<storedList.length; i++ ) {
    var listObj = storedList[i];

    var btn = document.createElement("button");
    btn.textContent = listObj;
    btn.setAttribute("data-index", i);

    list.appendChild(btn);
    }}

renderList()

  