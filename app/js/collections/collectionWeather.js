app.collectionWeather = Backbone.Collection.extend({
  model: weather
});
allWeather = new app.collectionWeather();
