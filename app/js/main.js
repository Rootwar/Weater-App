var app = {};

app.modelWeather = Backbone.Model.extend({
  defaults: {
    location: 'Cherkassy',
    date: 'today',
    weatherToday: {},
    weatherWeek: {},
    temperature: '',
    minTemperature: '',
    maxTemperature: '',
    windSpeed: '',
    relativeHumidity: '',
  }
});

app.collectionWeather = Backbone.Collection.extend({
  model: app.modelWeather,
  url: 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=f1cc7b16448b8d7d8d281170e4b8e07f'
});
allWeather = new app.collectionWeather();




