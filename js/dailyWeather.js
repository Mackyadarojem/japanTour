$(document).ready(function(){

  updateWeather();

  $('.carousel-control-next').click(function() {
    updateWeather();
  });

  $('.carousel-control-prev').click(function() {
    updateWeather();
  });

});

function updateWeather(){
    let url = " ";

    if ($('#tokyoCard').hasClass('active')) { 
      url = 'tokyoDailyWeather.php';
    } else if ($('#osakaCard').hasClass('active')) {
      url = 'osakaDailyWeather.php';
    } else if ($('#kyotoCard').hasClass('active')) {
      url = 'kyotoDailyWeather.php';
    } else if ($('#sapporoCard').hasClass('active')) {
      url = 'sapporoDailyWeather.php';
    } else if ($('#nagoyaCard').hasClass('active')) {
      url = 'nagoyaDailyWeather.php';
    } else if ($('#yokohamaCard').hasClass('active')) {
      url = 'yokohamaDailyWeather.php';
    }

    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      success: function(response) { 
        console.log(response);
        const weatherDescription = response.weather[0].description;
        const weatherIcon = response.weather[0].icon;
        let weatherMain = response.weather[0].main;
        const temp = response.main.temp;
        const feelsLike = response.main.feels_like;
        const visibility = response.visibility;
        const wind = response.wind.speed;
        const humidity = response.main.humidity;

        const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
        document.getElementById('weather-icon').src = iconUrl;

        const celciusTemp = kelvinToCelsius(temp);
        const celciusFeelLike = kelvinToCelsius(feelsLike);

        $('#temp').text(celciusTemp.toFixed(0) + '°');
        $('#feelsLike').text(celciusFeelLike.toFixed(0) + '°');
        $('#wind').html(wind + 'MPH');
        $('#visibility').text(+visibility/1000 + 'KM');
        $('#humidity').text(humidity + '%');

        if(weatherMain == 'Clouds'){
          weatherMain = 'Cloud';
          $('#weather-main').text(weatherMain.toUpperCase() +'Y DAY');
        }else{
          $('#weather-main').text(weatherMain.toUpperCase() +'Y DAY');
        }

        $('#weather-description').text(weatherDescription.toUpperCase());
       
    },
      error: function(xhr, status, error) { 
        console.log('Error:', status, error);
      }
    });

    function kelvinToCelsius(kelvin) {
      return kelvin - 273.15;
    }
}