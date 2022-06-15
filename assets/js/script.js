var formEl = queryselector("#user-form");
var searchDisplayEl = queryselector("#search-display");
var searchAppendEl = queryselector("#search-append");
var fiveDayforecastEl =queryselector("#five-day-forecast");
var cityNameInputEl = queryselector("#city");
var currentTemp = queryselector("#tempurature");
var currentWind = queryselector("#wind");
var currentHumidity = queryselector("#humidity");
var currentUvIndex = queryselector("#uv-index");

var APIkey = "dde7caac738b081946a784abac711d8f";


var formInput = function(event){ 

   event.preventDefault();

//value that is entered on the form
var city = cityNameInputEl.value.trim();

if(city){
        getWeather(city);

        //clear content
        searchDisplayEl.textcontent = "";
        cityNameInputEl.value = "";

}else{
    alert("please enter a city");
}

}

//get API
var getWeather = function(city){

var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" +city+ "&units=imperial&appid" + APIkey;

fetch(apiUrl).then(function(response){
    if(response.ok){
        response.json().then(function(data){
            displayWeather(data, city);
        });
    }else{
        alert("error:city not found");
    }
})
.catch(function(error){
    alert("unable to connect to weather dashboard");
});


};
var displayWeather = function(city,searchTerm) {
if (city.length === 0 ) {
    searchDisplayEl.textcontent = "City not found";
    return;
}

searchDisplayEl.textcontent = searchTerm;




}

