(function(){
  $(document).ready(function() {
    var options = {
          location: 'Los Angeles, CA',
          woeid: '',
          unit: 'f',

          success: function(weather) {
            $('#icon').addClass('icon-' + weather.code);
            $('#temp').html(weather.temp + '&deg;' + weather.units.temp);
            $('#city').html(weather.city);
            $('#region').html(weather.region);
            $('#currently').html(weather.currently);
            $('#direction').html(weather.wind.direction);
            $('#speed').html(weather.wind.speed);
            $('#speed-units').html(weather.units.speed);
          },

          error: function(error) {
            $("#weather").html('<p class="error">' + error + '</p>');
          }
        },

        getLocation = function(callback) {
          navigator.geolocation.getCurrentPosition(
            function(position) {
              var latLong = position.coords.latitude + ',' + position.coords.longitude;
              callback(latLong);
            },
            function(err) {
              console.error(err);
               $("#weather").empty();
            }
          );
        },

        makeWeatherWidget = function() {
          getLocation(function(location) {
            if (location) {
              console.log('Using custom location', location);
              options.location = location
            }

            $.simpleWeather(options);
          });
        };

    makeWeatherWidget();
  });
})();
