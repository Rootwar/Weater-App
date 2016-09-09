app.collectionWeather = Backbone.Collection.extend({
  model: app.modelWeather,
  url: 'http://api.openweathermap.org/data/2.5/forecast?q=' +this.cityValue+ '&APPID=f1cc7b16448b8d7d8d281170e4b8e07f'
});
allWeather = new app.collectionWeather();
