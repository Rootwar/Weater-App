var app = {};

app.modelWeather = Backbone.Model.extend({
  defaults: {
    location: 'Cherkassy',
    id: ""
  }
});
var weather = new app.modelWeather();
