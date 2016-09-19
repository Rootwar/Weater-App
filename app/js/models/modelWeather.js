var app = {};

app.modelWeather = Backbone.Model.extend({
  defaults: {
    name: 'Cherkassy'
    },
  url: function() {
    return 'http://api.openweathermap.org/data/2.5/weather?q=' +this.get('name')+ '&APPID=f1cc7b16448b8d7d8d281170e4b8e07f'
  }
});
var weather = new app.modelWeather();
