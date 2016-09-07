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
