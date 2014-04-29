(function(){
  $(document).ready(function() {
    var currentWeatherTemplateSource = $("#current-weather-template").html(),
        forecastTemplateSource       = $("#forecast-template").html(),
        currentWeatherTemplate       = Handlebars.compile(currentWeatherTemplateSource),
        forecastTemplate             = Handlebars.compile(forecastTemplateSource),

        options = {
          location: 'Los Angeles, CA',
          woeid: '',
          unit: 'f',

          success: function(weather) {
            var html,
                value,
                forecasts = weather.forecasts,
                $currentWeather  = $('#current-weather');
                $forecast = $('#forecast');

            for (var key in forecasts) {
              value = forecasts[key];
              html  = forecastTemplate(value);
              $forecast.append(html);
            }

            html = currentWeatherTemplate(weather);
            $currentWeather.html(html);
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
